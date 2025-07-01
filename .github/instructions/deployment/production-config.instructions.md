---
applyTo: 'JJA_DEV/**'
---
# Instructions - Configuration et Performance

## Configuration de Production

### Variables d'Environnement

```bash
# Configuration OVH Production
DATABASE_URL="mysql://user:password@host:3306/jja_dev_prod"
APP_ENV=prod
APP_DEBUG=false
APP_SECRET="your-production-secret"

# Mailer Configuration
MAILER_DSN="smtp://smtp.ovh.com:587"
MAILER_FROM="noreply@jja-dev.com"

# Redis Cache (si disponible)
REDIS_URL="redis://127.0.0.1:6379"

# API Keys
CRM_API_KEY="your-crm-api-key"
ANALYTICS_TOKEN="your-analytics-token"
```

### Optimisations Symfony

#### Cache de Production

```bash
# Réchauffage du cache
php bin/console cache:warmup --env=prod

# Optimisation de l'autoloader
composer dump-autoload --optimize --classmap-authoritative

# Compilation des conteneurs
php bin/console cache:pool:clear cache.global_clearer
```

#### Configuration Cache

```yaml
# config/packages/cache.yaml
framework:
    cache:
        default_redis_provider: '%env(REDIS_URL)%'
        pools:
            crm.contacts.cache:
                adapter: cache.adapter.redis
                default_lifetime: 3600
            crm.statistics.cache:
                adapter: cache.adapter.redis
                default_lifetime: 1800
```

### Base de Données

#### Optimisations MySQL

```sql
-- Index pour les recherches CRM
CREATE INDEX idx_contacts_search ON crm_contacts(last_name, first_name, company);
CREATE INDEX idx_contacts_status ON crm_contacts(status, created_at);
CREATE INDEX idx_deals_pipeline ON crm_deals(stage, value, created_at);

-- Optimisation des requêtes fréquentes
OPTIMIZE TABLE crm_contacts;
OPTIMIZE TABLE crm_deals;
OPTIMIZE TABLE user;
```

#### Configuration Doctrine

```yaml
# config/packages/doctrine.yaml
doctrine:
    dbal:
        server_version: '8.0'
        charset: utf8mb4
        default_table_options:
            charset: utf8mb4
            collate: utf8mb4_unicode_ci
        options:
            1002: 'SET sql_mode=(SELECT REPLACE(@@sql_mode,"ONLY_FULL_GROUP_BY",""))'
    orm:
        auto_generate_proxy_classes: false
        metadata_cache_driver:
            type: redis
            host: '%env(REDIS_HOST)%'
        query_cache_driver:
            type: redis
            host: '%env(REDIS_HOST)%'
        result_cache_driver:
            type: redis
            host: '%env(REDIS_HOST)%'
```

## Monitoring et Logging

### Configuration des Logs

```yaml
# config/packages/monolog.yaml
monolog:
    channels: ['crm', 'security', 'performance']
    handlers:
        main:
            type: rotating_file
            path: '%kernel.logs_dir%/%kernel.environment%.log'
            level: warning
            max_files: 30
        crm:
            type: rotating_file
            path: '%kernel.logs_dir%/crm.log'
            level: info
            channels: ['crm']
            max_files: 30
        security:
            type: rotating_file
            path: '%kernel.logs_dir%/security.log'
            level: info
            channels: ['security']
            max_files: 90
```

### Métriques Personnalisées

```php
// src/Service/Monitoring/MetricsCollector.php
class MetricsCollector
{
    public function recordCrmActivity(string $action, array $context = []): void
    {
        $this->logger->info('CRM Activity', [
            'action' => $action,
            'user' => $this->security->getUser()?->getUserIdentifier(),
            'timestamp' => time(),
            'context' => $context
        ]);
    }

    public function recordPerformanceMetric(string $operation, float $duration): void
    {
        if ($duration > 1.0) { // Log slow operations
            $this->logger->warning('Slow operation detected', [
                'operation' => $operation,
                'duration' => $duration,
                'memory_usage' => memory_get_peak_usage(true)
            ]);
        }
    }
}
```

## Sécurité

### Configuration de Sécurité

```yaml
# config/packages/security.yaml
security:
    password_hashers:
        App\Entity\User:
            algorithm: auto
            cost: 15

    firewalls:
        main:
            lazy: true
            provider: app_user_provider
            form_login:
                login_path: login
                check_path: login
                failure_handler: App\Security\LoginFailureHandler
                success_handler: App\Security\LoginSuccessHandler
            logout:
                path: logout
            remember_me:
                secret: '%kernel.secret%'
                lifetime: 604800 # 1 week
                path: /
                secure: true
                httponly: true
                samesite: strict

    access_control:
        - { path: ^/admin, roles: ROLE_ADMIN }
        - { path: ^/crm, roles: ROLE_CRM_USER }
        - { path: ^/api, roles: ROLE_API_USER }
```

### Validation et Sanitisation

```php
// src/Service/Security/DataSanitizer.php
class DataSanitizer
{
    public function sanitizeContactData(array $data): array
    {
        return [
            'firstName' => $this->sanitizeString($data['firstName'] ?? ''),
            'lastName' => $this->sanitizeString($data['lastName'] ?? ''),
            'email' => filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL),
            'phone' => preg_replace('/[^0-9+\-\s]/', '', $data['phone'] ?? ''),
            'company' => $this->sanitizeString($data['company'] ?? ''),
        ];
    }

    private function sanitizeString(string $input): string
    {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }
}
```

## Performance

### Optimisation des Requêtes

```php
// src/Repository/Crm/ContactRepository.php
class ContactRepository extends ServiceEntityRepository
{
    public function findContactsWithDeals(): array
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'd', 'u')
            ->leftJoin('c.deals', 'd')
            ->leftJoin('c.assignedUser', 'u')
            ->where('c.status = :active')
            ->setParameter('active', ContactStatus::ACTIVE)
            ->orderBy('c.lastContactDate', 'DESC')
            ->setMaxResults(100)
            ->getQuery()
            ->useQueryCache(true)
            ->setCacheable(true)
            ->setLifetime(1800) // 30 minutes
            ->getResult();
    }
}
```

### Cache Intelligent

```php
// src/Service/Crm/CrmCacheManager.php
class CrmCacheManager
{
    private const CACHE_TTL_CONTACTS = 1800; // 30 min
    private const CACHE_TTL_STATISTICS = 900; // 15 min

    public function getCachedContactList(array $filters = []): array
    {
        $cacheKey = 'crm_contacts_' . md5(serialize($filters));

        return $this->cache->get($cacheKey, function (ItemInterface $item) use ($filters) {
            $item->expiresAfter(self::CACHE_TTL_CONTACTS);
            return $this->contactRepository->findByFilters($filters);
        });
    }

    public function invalidateContactCache(int $contactId): void
    {
        $this->cache->delete("contact_{$contactId}");
        $this->cache->invalidateTags(['contacts_list']);
    }
}
```

### Pagination Performante

```php
// src/Service/Crm/ContactPaginator.php
class ContactPaginator
{
    public function paginate(array $criteria, int $page = 1, int $limit = 20): PaginationInterface
    {
        $queryBuilder = $this->contactRepository
            ->createQueryBuilder('c')
            ->select('c', 'partial u.{id, username}') // Partial loading
            ->leftJoin('c.assignedUser', 'u');

        if (!empty($criteria['search'])) {
            $queryBuilder
                ->andWhere('c.firstName LIKE :search OR c.lastName LIKE :search OR c.email LIKE :search')
                ->setParameter('search', '%' . $criteria['search'] . '%');
        }

        return $this->paginator->paginate(
            $queryBuilder->getQuery(),
            $page,
            $limit,
            [
                'defaultSortFieldName' => 'c.lastContactDate',
                'defaultSortDirection' => 'desc'
            ]
        );
    }
}
```

## Configuration Frontend

### Build de Production

```javascript
// webpack.config.js optimisations
const Encore = require('@symfony/webpack-encore')

Encore.enableVersioning(Encore.isProduction())
    .enableSourceMaps(!Encore.isProduction())
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties')
    })
    .configureTerserPlugin((config) => {
        config.parallel = true
        config.terserOptions = {
            compress: {
                drop_console: true,
            },
        }
    })

if (Encore.isProduction()) {
    Encore.addPlugin(
        new (require('webpack-bundle-analyzer').BundleAnalyzerPlugin)({
            analyzerMode: 'static',
            openAnalyzer: false,
        })
    ).enableSingleRuntimeChunk()
}
```

### Optimisation des Assets

```yaml
# config/packages/framework.yaml
framework:
    assets:
        version_strategy: 'App\Asset\VersionStrategy'
        packages:
            crm_assets:
                version_strategy: null
                base_path: '/assets/crm'
```

## Backup et Maintenance

### Script de Sauvegarde

```bash
#!/bin/bash
# scripts/backup.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/var/backups/jja_dev"
DB_NAME="jja_dev_prod"

# Sauvegarde Base de données
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_DIR/db_$DATE.sql

# Sauvegarde des fichiers uploads
tar -czf $BACKUP_DIR/uploads_$DATE.tar.gz var/uploads/

# Nettoyage des anciens backups (> 30 jours)
find $BACKUP_DIR -name "*.sql" -mtime +30 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $DATE"
```

### Maintenance Automatique

```php
// src/Command/MaintenanceCommand.php
#[AsCommand(name: 'app:maintenance')]
class MaintenanceCommand extends Command
{
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('Starting maintenance tasks...');

        // Nettoyage des logs anciens
        $this->cleanOldLogs();

        // Nettoyage du cache
        $this->clearExpiredCache();

        // Optimisation de la base
        $this->optimizeDatabase();

        // Génération des statistiques
        $this->generateStatistics();

        $output->writeln('Maintenance completed successfully.');

        return Command::SUCCESS;
    }
}
```

## Checklist Performance

### Avant Déploiement

-   [ ] Cache Opcache activé
-   [ ] Assets minifiés et versionnés
-   [ ] Images optimisées
-   [ ] Requêtes SQL analysées (Profiler)
-   [ ] Indexes de base de données optimaux
-   [ ] Configuration Redis/Memcached
-   [ ] Logs configurés pour la production
-   [ ] Monitoring activé
-   [ ] Backup automatique configuré
-   [ ] Script de maintenance programmé

### Surveillance Continue

-   [ ] Temps de réponse < 500ms (pages principales)
-   [ ] Utilisation mémoire < 256MB par requête
-   [ ] Taux d'erreur < 1%
-   [ ] Disponibilité > 99.5%
-   [ ] Espace disque surveillé
-   [ ] Alertes configurées
