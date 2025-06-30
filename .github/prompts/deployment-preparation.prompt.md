# Préparation Déploiement OVH JJA_DEV

Vous devez préparer un déploiement vers la production OVH pour JJA_DEV.

## Checklist Pré-Déploiement

### 1. Validation Code

-   [ ] **Tests** : Tous les tests PHPUnit passent
-   [ ] **Coverage** : Couverture minimum 80%
-   [ ] **PHPStan** : Analyse niveau 8 sans erreurs
-   [ ] **PHPCS** : Standards PSR-12 respectés
-   [ ] **Sécurité** : Scan vulnérabilités clean

### 2. Base de Données

#### Migrations

```bash
# Vérifier migrations en attente
docker-compose exec php bin/console doctrine:migrations:status

# Test migrations sur copie prod
docker-compose exec php bin/console doctrine:migrations:migrate --dry-run

# Backup base prod (manuel OVH)
mysqldump -u user -p database > backup_$(date +%Y%m%d_%H%M%S).sql
```

#### Intégrité Données

-   [ ] Contraintes référentielles validées
-   [ ] Index performance créés
-   [ ] Données sensibles anonymisées (dev)
-   [ ] Plan rollback base données préparé

### 3. Configuration Production

#### Variables Environnement

```env
# .env.prod (sur serveur OVH)
APP_ENV=prod
APP_DEBUG=false
APP_SECRET=SECURE_PRODUCTION_SECRET_32_CHARS

# Database
DATABASE_URL=mysql://prod_user:prod_pass@localhost:3306/jja_dev_prod

# Cache
REDIS_URL=redis://localhost:6379
OPCACHE_ENABLED=1

# Mailer
MAILER_DSN=smtp://smtp.ovh.net:587?username=xxx&password=xxx

# Monitoring
SENTRY_DSN=https://xxx@sentry.io/xxx
```

#### Optimisations Prod

```yaml
# config/packages/prod/cache.yaml
framework:
    cache:
        app: cache.adapter.redis
        default_redis_provider: '%env(REDIS_URL)%'

# config/packages/prod/monolog.yaml
monolog:
    handlers:
        main:
            type: fingers_crossed
            action_level: error
            handler: file
        file:
            type: stream
            path: '%kernel.logs_dir%/%kernel.environment%.log'
            level: info
```

### 4. Assets et Performance

#### Build Production

```bash
# Clean et build assets
rm -rf public/build/
npm ci --production
npm run build

# Vérification assets
ls -la public/build/
```

#### Optimisation Symfony

```bash
# Cache warmup
APP_ENV=prod bin/console cache:warmup

# Optimisation Composer
composer install --no-dev --optimize-autoloader --classmap-authoritative

# Vérification config prod
APP_ENV=prod bin/console debug:config framework cache
```

### 5. Tests de Déploiement

#### Tests E2E

```bash
# Démarrage environnement prod-like
APP_ENV=prod docker-compose up -d

# Tests fonctionnels critiques
docker-compose exec php bin/phpunit tests/E2E/

# Tests performance
docker-compose exec php bin/console debug:router
ab -n 100 -c 10 http://localhost/
```

#### Checklist Fonctionnel

-   [ ] **Login** : Authentification fonctionne
-   [ ] **CRM** : Fonctionnalités principales OK
-   [ ] **Devis/Factures** : Génération PDF OK
-   [ ] **Email** : Envoi emails opérationnel
-   [ ] **API** : Endpoints répondent correctement

### 6. Sécurité Production

#### Headers Sécurité

```apache
# .htaccess OVH
<IfModule mod_headers.c>
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-Content-Type-Options "nosniff"
    Header set X-XSS-Protection "1; mode=block"
    Header set Strict-Transport-Security "max-age=31536000"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
    Header set Content-Security-Policy "default-src 'self'"
</IfModule>
```

#### SSL/TLS

-   [ ] Certificat SSL valide et renouvelé
-   [ ] Redirection HTTP → HTTPS forcée
-   [ ] HSTS activé
-   [ ] Configuration TLS sécurisée

### 7. Monitoring et Alertes

#### Health Check

```php
// src/Controller/HealthController.php
#[Route('/health-check', name: 'health_check')]
public function check(): JsonResponse
{
    $checks = [
        'database' => $this->checkDatabase(),
        'cache' => $this->checkCache(),
        'filesystem' => $this->checkFilesystem(),
        'external_apis' => $this->checkExternalApis(),
    ];

    $healthy = !in_array(false, $checks, true);

    return new JsonResponse([
        'status' => $healthy ? 'healthy' : 'unhealthy',
        'checks' => $checks,
        'timestamp' => new \DateTime(),
        'version' => $this->getAppVersion()
    ], $healthy ? 200 : 500);
}
```

#### Logs Production

```yaml
# config/packages/prod/monolog.yaml
monolog:
    channels: ['app', 'crm', 'security']
    handlers:
        main:
            type: rotating_file
            path: '%kernel.logs_dir%/%kernel.environment%.log'
            max_files: 10
            level: warning

        crm:
            type: stream
            path: '%kernel.logs_dir%/crm.log'
            level: info
            channels: ['crm']
```

### 8. Déploiement GitHub Actions

#### Workflow Validation

```yaml
# .github/workflows/deploy.yml
name: Deploy to OVH Production

on:
    push:
        branches: [main]

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
              uses: actions/checkout@v3

            - name: Run tests
              run: |
                  composer install
                  bin/phpunit
                  vendor/bin/phpstan analyse

            - name: Deploy to OVH
              run: |
                  curl -X POST \
                    -H "Authorization: Bearer ${{ secrets.OVH_WEBHOOK_TOKEN }}" \
                    -H "Content-Type: application/json" \
                    -d '{"ref": "${{ github.ref }}", "sha": "${{ github.sha }}"}' \
                    ${{ secrets.OVH_WEBHOOK_URL }}
```

### 9. Plan de Rollback

#### Procédure d'Urgence

```bash
# Rollback Git rapide
git checkout main
git revert HEAD --no-edit
git push origin main

# Rollback base données (si nécessaire)
mysql -u user -p database < backup_YYYYMMDD_HHMMSS.sql

# Vérification post-rollback
curl -f https://your-domain.com/health-check
```

### 10. Post-Déploiement

#### Vérifications Automatiques

```bash
# Script de vérification post-déploiement
#!/bin/bash

echo "Vérification déploiement JJA_DEV..."

# Health check
if curl -f https://your-domain.com/health-check; then
    echo "✅ Health check OK"
else
    echo "❌ Health check FAILED"
    exit 1
fi

# Login admin
if curl -f https://your-domain.com/admin/login; then
    echo "✅ Admin accessible"
else
    echo "❌ Admin FAILED"
    exit 1
fi

# API status
if curl -f https://your-domain.com/api/status; then
    echo "✅ API OK"
else
    echo "❌ API FAILED"
    exit 1
fi

echo "✅ Déploiement validé avec succès"
```

## Commandes de Préparation

```bash
# Validation complète locale
composer install --no-dev --optimize-autoloader
npm run build
APP_ENV=prod bin/console cache:clear
bin/phpunit
vendor/bin/phpstan analyse --level=8
vendor/bin/phpcs src/ --standard=PSR12

# Simulation déploiement
git checkout main
git merge develop
git push origin main

# Monitoring déploiement
watch curl -s https://your-domain.com/health-check
```

## Documentation Déploiement

### Notes de Version

```markdown
## Version X.X.X - $(date +%Y-%m-%d)

### Nouvelles Fonctionnalités

-   [ ] Feature 1: Description
-   [ ] Feature 2: Description

### Corrections

-   [ ] Fix 1: Description
-   [ ] Fix 2: Description

### Migrations Base de Données

-   [ ] Migration 1: Description
-   [ ] Migration 2: Description

### Configuration

-   [ ] Nouvelle variable ENV_VAR
-   [ ] Modification config.yaml

### Tests

-   Couverture: XX%
-   Tests passants: XXX/XXX
```

## Checklist Final

-   [ ] **Code** : Tests, qualité, sécurité validés
-   [ ] **Base** : Migrations testées, backup effectué
-   [ ] **Config** : Variables prod configurées
-   [ ] **Assets** : Build production optimisé
-   [ ] **Monitoring** : Health check et logs configurés
-   [ ] **GitHub** : Workflow CI/CD validé
-   [ ] **Rollback** : Plan d'urgence documenté
-   [ ] **Documentation** : Notes de version rédigées
