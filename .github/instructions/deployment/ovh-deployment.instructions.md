---
applyTo: 'JJA_DEV/**'
---

# Déploiement OVH JJA_DEV

## Repository

**URL** : https://github.com/jeanniardJ/JJA_DEV.git

## Architecture de Déploiement

### Environnements

-   **Développement** : Docker local (branche `develop`)
-   **Production** : OVH (branche `main/master`)
-   **Trigger** : Pull Request validée vers `main/master`
-   **Méthode** : GitHub Actions + Webhooks OVH

### Workflow Git → OVH

```
feature/xxx → develop → Pull Request → main/master → GitHub Actions → OVH
```

## Configuration CI/CD

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy JJA_DEV to OVH

on:
    push:
        branches: [main, master]
    pull_request:
        branches: [main, master]

env:
    PHP_VERSION: '8.1'
    NODE_VERSION: '18'

jobs:
    tests:
        runs-on: ubuntu-latest

        services:
            mysql:
                image: mysql:8.0
                env:
                    MYSQL_ROOT_PASSWORD: test
                    MYSQL_DATABASE: jja_dev_test
                ports:
                    - 3306:3306
                options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3

        steps:
            - name: Checkout code
              uses: actions/checkout@v3

            - name: Setup PHP
              uses: shivammathur/setup-php@v2
              with:
                  php-version: ${{ env.PHP_VERSION }}
                  extensions: mbstring, xml, ctype, iconv, intl, pdo_mysql
                  coverage: xdebug

            - name: Setup Node.js
              uses: actions/setup-node@v3
              with:
                  node-version: ${{ env.NODE_VERSION }}

            - name: Install Composer dependencies
              run: composer install --no-dev --optimize-autoloader --no-progress --no-suggest

            - name: Install NPM dependencies
              run: npm ci

            - name: Build assets
              run: npm run build

            - name: Setup test environment
              run: |
                  cp .env.test .env
                  php bin/console doctrine:database:create --env=test
                  php bin/console doctrine:migrations:migrate --no-interaction --env=test

            - name: Run PHPUnit tests
              run: php bin/phpunit --coverage-clover=coverage.xml

            - name: Run PHPStan analysis
              run: vendor/bin/phpstan analyse --level=8 --no-progress

            - name: Run PHPCS
              run: vendor/bin/phpcs src/ --standard=PSR12

    deploy:
        needs: tests
        runs-on: ubuntu-latest
        if: github.ref == 'refs/heads/main' && github.event_name == 'push'

        steps:
            - name: Deploy to OVH
              run: |
                  curl -X POST \
                    -H "Authorization: Bearer ${{ secrets.OVH_WEBHOOK_TOKEN }}" \
                    -H "Content-Type: application/json" \
                    -d '{"ref": "${{ github.ref }}", "sha": "${{ github.sha }}"}' \
                    ${{ secrets.OVH_WEBHOOK_URL }}

            - name: Verify deployment
              run: |
                  sleep 30
                  curl -f ${{ secrets.PRODUCTION_URL }}/health-check || exit 1
```

### Variables d'Environnement GitHub

```bash
# Secrets à configurer dans GitHub
OVH_WEBHOOK_URL=https://your-ovh-domain.com/webhook/deploy
OVH_WEBHOOK_TOKEN=your-secure-token
PRODUCTION_URL=https://your-production-domain.com
```

## Configuration OVH

### Variables Production

```env
# .env.prod (sur serveur OVH)
APP_ENV=prod
APP_DEBUG=false
APP_SECRET=your-production-secret

# Database
DATABASE_URL=mysql://prod_user:prod_password@localhost:3306/jja_dev_prod

# Cache
REDIS_URL=redis://localhost:6379

# Mailer
MAILER_DSN=smtp://your-smtp-config

# CRM specific
CRM_API_ENDPOINT=https://api.crm.your-domain.com
CRM_API_KEY=your-crm-api-key
```

### Configuration Apache/Nginx

```apache
# .htaccess pour OVH
<IfModule mod_rewrite.c>
    RewriteEngine On

    # Redirection HTTPS
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

    # Symfony routing
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^(.*)$ public/index.php [QSA,L]
</IfModule>

# Security headers
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</IfModule>
```

## Procédure de Déploiement

### Checklist Pré-Déploiement

-   [ ] **Tests** : Tous les tests passent (PHPUnit)
-   [ ] **Analyse** : PHPStan niveau 8 sans erreurs
-   [ ] **Standards** : PHPCS PSR-12 conforme
-   [ ] **Sécurité** : Scan vulnérabilités OK
-   [ ] **Performance** : Profiling satisfaisant
-   [ ] **Database** : Migrations testées
-   [ ] **Assets** : Build production optimisé
-   [ ] **Configuration** : Variables d'environnement validées

### Étapes Déploiement

1. **Validation locale** : Tests + qualité code
2. **Merge vers main** : Via Pull Request approuvée
3. **CI/CD automatique** : GitHub Actions
4. **Webhook OVH** : Déclenchement déploiement
5. **Vérification** : Health check automatique

### Post-Déploiement

```bash
# Vérifications automatiques
curl -f https://your-domain.com/health-check
curl -f https://your-domain.com/admin/login
curl -f https://your-domain.com/api/status

# Monitoring logs
tail -f /var/log/symfony/prod.log
tail -f /var/log/apache2/error.log
```

## Gestion des Erreurs

### Health Check

```php
// src/Controller/HealthController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class HealthController extends AbstractController
{
    #[Route('/health-check', name: 'health_check')]
    public function check(EntityManagerInterface $em): JsonResponse
    {
        try {
            // Vérification database
            $em->getConnection()->executeQuery('SELECT 1');

            // Vérifications additionnelles
            $checks = [
                'database' => true,
                'cache' => $this->checkCache(),
                'filesystem' => is_writable($this->getParameter('kernel.cache_dir')),
                'timestamp' => new \DateTime()
            ];

            return new JsonResponse([
                'status' => 'healthy',
                'checks' => $checks
            ]);

        } catch (\Exception $e) {
            return new JsonResponse([
                'status' => 'unhealthy',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    private function checkCache(): bool
    {
        // Vérification cache Redis/File
        return true;
    }
}
```

### Rollback d'Urgence

```bash
# Procédure rollback rapide
git checkout main
git revert HEAD --no-edit
git push origin main

# Ou rollback vers commit spécifique
git checkout main
git reset --hard commit-hash-stable
git push --force origin main

# Vérification après rollback
curl -f https://your-domain.com/health-check
```

### Monitoring et Alertes

```yaml
# Configuration monitoring (exemple avec services OVH)
monitoring:
    endpoints:
        - url: https://your-domain.com/health-check
          interval: 60s
          timeout: 10s
        - url: https://your-domain.com/admin/login
          interval: 300s

    alerts:
        email: admin@your-domain.com
        slack: webhook-url-if-available
```

## Optimisations Production

### Cache Configuration

```yaml
# config/packages/prod/cache.yaml
framework:
    cache:
        app: cache.adapter.redis
        default_redis_provider: '%env(REDIS_URL)%'

    http_cache:
        enabled: true
```

### Base de Données

```bash
# Optimisations MySQL production
# my.cnf
[mysqld]
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
query_cache_size = 64M
max_connections = 200
```

### Assets Optimization

```json
// webpack.config.js production
const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/app.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
;

if (Encore.isProduction()) {
    Encore.enablePostCssLoader();
}

module.exports = Encore.getWebpackConfig();
```
