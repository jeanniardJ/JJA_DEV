# Instructions - Optimisation et Monitoring

## Architecture de Monitoring

### Stack de Monitoring

```
Monitoring Stack:
├── Application Performance
│   ├── Symfony Profiler (dev)
│   ├── Blackfire.io (staging/prod)
│   └── New Relic / DataDog (prod)
├── Infrastructure
│   ├── Docker Stats
│   ├── System Metrics (CPU, RAM, Disk)
│   └── Network Monitoring
├── Base de Données
│   ├── MySQL Slow Query Log
│   ├── Performance Schema
│   └── Query Analysis
├── Frontend
│   ├── Google Lighthouse
│   ├── Web Vitals
│   └── Real User Monitoring
└── Business Metrics
    ├── CRM KPIs
    ├── User Activity
    └── Conversion Tracking
```

### Configuration du Monitoring

#### Symfony Profiler Avancé

```yaml
# config/packages/dev/web_profiler.yaml
web_profiler:
    toolbar: true
    intercept_redirects: false
    excluded_ajax_paths: '^/api/'

# config/packages/framework.yaml
framework:
    profiler:
        enabled: '%kernel.debug%'
        collect_serializer_data: true

# Custom Data Collector
# src/DataCollector/CrmDataCollector.php
namespace App\DataCollector;

use Symfony\Bundle\FrameworkBundle\DataCollector\AbstractDataCollector;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CrmDataCollector extends AbstractDataCollector
{
    public function collect(Request $request, Response $response, \Throwable $exception = null): void
    {
        $this->data = [
            'contacts_queries' => $this->contactRepository->getQueryCount(),
            'deals_queries' => $this->dealRepository->getQueryCount(),
            'cache_hits' => $this->cacheStats->getHits(),
            'cache_misses' => $this->cacheStats->getMisses(),
            'api_calls' => $this->apiStats->getCalls(),
            'memory_peak' => memory_get_peak_usage(true),
            'execution_time' => microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']
        ];
    }

    public function getName(): string
    {
        return 'crm';
    }

    public static function getTemplate(): ?string
    {
        return 'data_collector/crm.html.twig';
    }
}
```

#### Logs Structurés

```yaml
# config/packages/monolog.yaml
monolog:
    channels: ['crm', 'api', 'performance', 'business']
    handlers:
        main:
            type: rotating_file
            path: '%kernel.logs_dir%/%kernel.environment%.log'
            level: info
            max_files: 30
            formatter: monolog.formatter.json

        crm_handler:
            type: rotating_file
            path: '%kernel.logs_dir%/crm.log'
            level: info
            channels: ['crm']
            max_files: 30
            formatter: monolog.formatter.json

        performance_handler:
            type: rotating_file
            path: '%kernel.logs_dir%/performance.log'
            level: warning
            channels: ['performance']
            max_files: 30
            formatter: monolog.formatter.json

        api_handler:
            type: rotating_file
            path: '%kernel.logs_dir%/api.log'
            level: info
            channels: ['api']
            max_files: 30
            formatter: monolog.formatter.json
```

## Optimisation Base de Données

### Configuration MySQL Production

```sql
-- Configuration MySQL pour JJA_DEV Production
-- /etc/mysql/mysql.conf.d/jja-dev.cnf

[mysqld]
# Optimisations générales
innodb_buffer_pool_size = 2G
innodb_log_file_size = 256M
innodb_log_buffer_size = 64M
innodb_flush_log_at_trx_commit = 2

# Optimisations pour CRM
innodb_file_per_table = 1
innodb_open_files = 300
table_open_cache = 400
thread_cache_size = 16

# Query Cache (si MySQL < 8.0)
query_cache_type = 1
query_cache_size = 128M
query_cache_limit = 2M

# Slow Query Log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/mysql-slow.log
long_query_time = 1
log_queries_not_using_indexes = 1

# Performance Schema
performance_schema = 1
performance_schema_max_table_instances = 400
```

### Index Strategy CRM

```sql
-- Index optimisés pour le CRM JJA_DEV

-- Table crm_contacts
CREATE INDEX idx_contacts_search ON crm_contacts(last_name, first_name, company);
CREATE INDEX idx_contacts_email ON crm_contacts(email);
CREATE INDEX idx_contacts_status_created ON crm_contacts(status, created_at);
CREATE INDEX idx_contacts_assigned ON crm_contacts(assigned_user_id, status);
CREATE INDEX idx_contacts_source ON crm_contacts(source_id, created_at);
CREATE INDEX idx_contacts_last_contact ON crm_contacts(last_contact_date);

-- Table crm_deals
CREATE INDEX idx_deals_pipeline ON crm_deals(stage, value, created_at);
CREATE INDEX idx_deals_contact ON crm_deals(contact_id, stage);
CREATE INDEX idx_deals_assigned ON crm_deals(assigned_user_id, stage);
CREATE INDEX idx_deals_close_date ON crm_deals(expected_close_date, stage);
CREATE INDEX idx_deals_value ON crm_deals(value, currency);

-- Table crm_activities
CREATE INDEX idx_activities_contact ON crm_activities(contact_id, created_at);
CREATE INDEX idx_activities_deal ON crm_activities(deal_id, created_at);
CREATE INDEX idx_activities_user ON crm_activities(assigned_user_id, due_date);
CREATE INDEX idx_activities_type ON crm_activities(type, status);

-- Index composites pour requêtes fréquentes
CREATE INDEX idx_deals_pipeline_stats ON crm_deals(stage, created_at, value);
CREATE INDEX idx_contacts_conversion ON crm_contacts(source_id, status, created_at);
```

### Query Optimization Service

```php
// src/Service/Database/QueryOptimizer.php
class QueryOptimizer
{
    public function analyzeSlowQueries(): array
    {
        $slowQueries = $this->connection->fetchAllAssociative("
            SELECT
                sql_text,
                query_time,
                lock_time,
                rows_sent,
                rows_examined,
                (rows_examined / rows_sent) as efficiency_ratio,
                COUNT(*) as frequency
            FROM mysql.slow_log
            WHERE start_time > DATE_SUB(NOW(), INTERVAL 24 HOUR)
            GROUP BY sql_text
            ORDER BY query_time * frequency DESC
            LIMIT 20
        ");

        return array_map([$this, 'analyzeQuery'], $slowQueries);
    }

    public function suggestOptimizations(array $queryData): array
    {
        $suggestions = [];

        // Ratio d'efficacité faible
        if ($queryData['efficiency_ratio'] > 10) {
            $suggestions[] = [
                'type' => 'index',
                'message' => 'Considérer l\'ajout d\'index sur les colonnes WHERE/JOIN'
            ];
        }

        // Requêtes fréquentes et lentes
        if ($queryData['frequency'] > 100 && $queryData['query_time'] > 1) {
            $suggestions[] = [
                'type' => 'cache',
                'message' => 'Considérer la mise en cache de cette requête'
            ];
        }

        // Full table scan
        if (strpos($queryData['sql_text'], 'SELECT *') !== false) {
            $suggestions[] = [
                'type' => 'projection',
                'message' => 'Limiter les colonnes sélectionnées'
            ];
        }

        return $suggestions;
    }

    public function optimizeContactQueries(): void
    {
        // Cache des contacts fréquemment consultés
        $this->cacheFrequentlyAccessedContacts();

        // Pré-chargement des relations
        $this->optimizeContactRelations();

        // Pagination intelligente
        $this->implementSmartPagination();
    }

    private function cacheFrequentlyAccessedContacts(): void
    {
        $frequentContacts = $this->connection->fetchAllAssociative("
            SELECT c.id, COUNT(a.id) as access_count
            FROM crm_contacts c
            LEFT JOIN crm_activities a ON c.id = a.contact_id
            WHERE a.created_at > DATE_SUB(NOW(), INTERVAL 7 DAY)
            GROUP BY c.id
            HAVING access_count > 5
            ORDER BY access_count DESC
            LIMIT 100
        ");

        foreach ($frequentContacts as $contact) {
            $this->cacheContact($contact['id']);
        }
    }
}
```

## Optimisation Frontend

### Performance Budget

```javascript
// webpack.config.js - Performance Budget
module.exports = {
    performance: {
        maxAssetSize: 250000,
        maxEntrypointSize: 250000,
        hints: 'warning',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
                crm: {
                    test: /[\\/]assets[\\/]crm[\\/]/,
                    name: 'crm',
                    chunks: 'all',
                },
            },
        },
    },
}
```

### Lazy Loading et Code Splitting

```javascript
// assets/js/app.js - Dynamic imports
class CrmLoader {
    static async loadContactManager() {
        const { ContactManager } = await import('./crm/contact-manager')
        return ContactManager
    }

    static async loadPipelineManager() {
        const { PipelineManager } = await import('./crm/pipeline-manager')
        return PipelineManager
    }

    static async loadReportingModule() {
        const { ReportingModule } = await import('./crm/reporting')
        return ReportingModule
    }
}

// Chargement conditionnel selon la page
document.addEventListener('DOMContentLoaded', async () => {
    const pageType = document.body.dataset.pageType

    switch (pageType) {
        case 'contacts':
            const ContactManager = await CrmLoader.loadContactManager()
            new ContactManager()
            break

        case 'pipeline':
            const PipelineManager = await CrmLoader.loadPipelineManager()
            new PipelineManager()
            break

        case 'reports':
            const ReportingModule = await CrmLoader.loadReportingModule()
            new ReportingModule()
            break
    }
})
```

### Service Worker pour Cache

```javascript
// public/sw.js - Service Worker
const CACHE_NAME = 'jja-dev-v1'
const CACHE_ASSETS = ['/build/app.css', '/build/app.js', '/build/crm.js', '/images/logo.png', '/fonts/inter.woff2']

// Installation
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_ASSETS)))
})

// Stratégie Cache First pour les assets
self.addEventListener('fetch', (event) => {
    if (
        event.request.destination === 'style' ||
        event.request.destination === 'script' ||
        event.request.destination === 'image'
    ) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request)
            })
        )
    }

    // Network First pour les API calls
    if (event.request.url.includes('/api/')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    const responseClone = response.clone()
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone)
                    })
                    return response
                })
                .catch(() => caches.match(event.request))
        )
    }
})
```

## Monitoring Applicatif

### Health Check Endpoint

```php
// src/Controller/HealthController.php
#[Route('/health', name: 'health_check')]
class HealthController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private CacheInterface $cache,
        private MailerInterface $mailer
    ) {}

    public function check(): JsonResponse
    {
        $checks = [
            'database' => $this->checkDatabase(),
            'cache' => $this->checkCache(),
            'disk_space' => $this->checkDiskSpace(),
            'memory' => $this->checkMemory(),
            'crm_status' => $this->checkCrmStatus()
        ];

        $overallStatus = array_reduce($checks, function($carry, $check) {
            return $carry && $check['status'] === 'ok';
        }, true);

        return $this->json([
            'status' => $overallStatus ? 'healthy' : 'unhealthy',
            'timestamp' => time(),
            'checks' => $checks,
            'version' => $this->getParameter('app.version')
        ], $overallStatus ? 200 : 503);
    }

    private function checkDatabase(): array
    {
        try {
            $connection = $this->entityManager->getConnection();
            $result = $connection->fetchOne('SELECT 1');

            // Test d'écriture
            $connection->executeQuery('CREATE TEMPORARY TABLE health_test (id INT)');
            $connection->executeQuery('DROP TEMPORARY TABLE health_test');

            return [
                'status' => 'ok',
                'response_time' => $this->measureTime(fn() => $connection->fetchOne('SELECT 1'))
            ];
        } catch (Exception $e) {
            return [
                'status' => 'error',
                'message' => $e->getMessage()
            ];
        }
    }

    private function checkCache(): array
    {
        try {
            $testKey = 'health_check_' . time();
            $testValue = 'test_value';

            $this->cache->set($testKey, $testValue, 10);
            $retrieved = $this->cache->get($testKey);
            $this->cache->delete($testKey);

            if ($retrieved === $testValue) {
                return ['status' => 'ok'];
            } else {
                return ['status' => 'error', 'message' => 'Cache read/write failed'];
            }
        } catch (Exception $e) {
            return ['status' => 'error', 'message' => $e->getMessage()];
        }
    }

    private function checkCrmStatus(): array
    {
        try {
            // Vérifier les métriques critiques CRM
            $contactCount = $this->entityManager
                ->getRepository(Contact::class)
                ->count(['status' => 'active']);

            $dealCount = $this->entityManager
                ->getRepository(Deal::class)
                ->count(['stage' => ['prospect', 'qualification', 'proposition', 'negociation']]);

            return [
                'status' => 'ok',
                'metrics' => [
                    'active_contacts' => $contactCount,
                    'open_deals' => $dealCount
                ]
            ];
        } catch (Exception $e) {
            return ['status' => 'error', 'message' => $e->getMessage()];
        }
    }
}
```

### Alerting System

```php
// src/Service/Monitoring/AlertManager.php
class AlertManager
{
    public function __construct(
        private MailerInterface $mailer,
        private LoggerInterface $logger,
        private ParameterBagInterface $params
    ) {}

    public function checkThresholds(): void
    {
        $alerts = [];

        // Vérifier la performance de la base
        if ($this->getDatabaseResponseTime() > 2.0) {
            $alerts[] = new Alert('database_slow', 'Database response time > 2s', 'high');
        }

        // Vérifier l'espace disque
        $diskUsage = $this->getDiskUsage();
        if ($diskUsage > 85) {
            $alerts[] = new Alert('disk_space', "Disk usage at {$diskUsage}%", 'medium');
        }

        // Vérifier la mémoire
        $memoryUsage = $this->getMemoryUsage();
        if ($memoryUsage > 90) {
            $alerts[] = new Alert('memory', "Memory usage at {$memoryUsage}%", 'high');
        }

        // Vérifier les erreurs CRM
        $errorRate = $this->getCrmErrorRate();
        if ($errorRate > 5) {
            $alerts[] = new Alert('crm_errors', "CRM error rate at {$errorRate}%", 'medium');
        }

        foreach ($alerts as $alert) {
            $this->sendAlert($alert);
        }
    }

    private function sendAlert(Alert $alert): void
    {
        // Log l'alerte
        $this->logger->warning('Alert triggered', [
            'type' => $alert->getType(),
            'message' => $alert->getMessage(),
            'severity' => $alert->getSeverity()
        ]);

        // Envoyer email selon la sévérité
        if (in_array($alert->getSeverity(), ['high', 'critical'])) {
            $this->sendEmailAlert($alert);
        }

        // Webhook pour intégrations externes (Slack, etc.)
        $this->sendWebhookAlert($alert);
    }

    private function getDatabaseResponseTime(): float
    {
        $start = microtime(true);
        $this->entityManager->getConnection()->fetchOne('SELECT 1');
        return microtime(true) - $start;
    }

    private function getCrmErrorRate(): float
    {
        // Calculer le taux d'erreur des 10 dernières minutes
        $total = $this->getRequestCount(600); // 10 minutes
        $errors = $this->getErrorCount(600);

        return $total > 0 ? ($errors / $total) * 100 : 0;
    }
}
```

## Optimisation de Cache

### Stratégie de Cache Multi-Niveaux

```php
// src/Service/Cache/CrmCacheManager.php
class CrmCacheManager
{
    private const TTL_SHORT = 300;    // 5 minutes
    private const TTL_MEDIUM = 1800;  // 30 minutes
    private const TTL_LONG = 3600;    // 1 heure

    public function __construct(
        private CacheInterface $appCache,
        private CacheInterface $redisCache,
        private TagAwareCacheInterface $tagCache
    ) {}

    public function getContactList(array $filters, int $page = 1): array
    {
        $cacheKey = 'contacts_' . md5(serialize($filters)) . "_page_{$page}";

        return $this->appCache->get($cacheKey, function (ItemInterface $item) use ($filters, $page) {
            $item->expiresAfter(self::TTL_MEDIUM);
            $item->tag(['contacts', 'contacts_list']);

            return $this->contactRepository->findByFilters($filters, $page);
        });
    }

    public function getContactDetails(int $contactId): ?Contact
    {
        $cacheKey = "contact_{$contactId}";

        return $this->appCache->get($cacheKey, function (ItemInterface $item) use ($contactId) {
            $item->expiresAfter(self::TTL_LONG);
            $item->tag(['contacts', "contact_{$contactId}"]);

            return $this->contactRepository->findWithRelations($contactId);
        });
    }

    public function getPipelineStats(): array
    {
        return $this->redisCache->get('pipeline_stats', function (ItemInterface $item) {
            $item->expiresAfter(self::TTL_SHORT);

            return $this->dealRepository->getPipelineStatistics();
        });
    }

    public function invalidateContact(int $contactId): void
    {
        $this->tagCache->invalidateTags([
            "contact_{$contactId}",
            'contacts_list'
        ]);
    }

    public function invalidateDeals(): void
    {
        $this->tagCache->invalidateTags(['deals', 'pipeline_stats']);
    }

    public function warmupCache(): void
    {
        // Préchauffer les données les plus utilisées
        $this->warmupContactCache();
        $this->warmupPipelineCache();
        $this->warmupStatisticsCache();
    }

    private function warmupContactCache(): void
    {
        // Top 100 des contacts les plus consultés
        $topContacts = $this->getTopAccessedContacts(100);

        foreach ($topContacts as $contactId) {
            $this->getContactDetails($contactId);
        }
    }
}
```

## Monitoring des Métriques Business

### Business Intelligence Monitoring

```php
// src/Service/Monitoring/BusinessMetricsCollector.php
class BusinessMetricsCollector
{
    public function collectDailyMetrics(): array
    {
        return [
            'contacts' => $this->getContactMetrics(),
            'deals' => $this->getDealMetrics(),
            'activities' => $this->getActivityMetrics(),
            'performance' => $this->getPerformanceMetrics()
        ];
    }

    private function getContactMetrics(): array
    {
        $today = new \DateTime('today');
        $yesterday = new \DateTime('yesterday');
        $lastWeek = new \DateTime('-7 days');

        return [
            'new_today' => $this->contactRepository->countByDate($today),
            'new_yesterday' => $this->contactRepository->countByDate($yesterday),
            'new_week' => $this->contactRepository->countByDateRange($lastWeek, $today),
            'total_active' => $this->contactRepository->count(['status' => 'active']),
            'conversion_rate' => $this->calculateConversionRate(),
            'top_sources' => $this->getTopContactSources()
        ];
    }

    private function getDealMetrics(): array
    {
        return [
            'pipeline_value' => $this->dealRepository->getTotalPipelineValue(),
            'deals_won_today' => $this->dealRepository->countWonToday(),
            'average_deal_size' => $this->dealRepository->getAverageDealSize(),
            'conversion_rates' => $this->dealRepository->getConversionRates(),
            'stage_distribution' => $this->dealRepository->getStageDistribution()
        ];
    }

    public function generateAlerts(): array
    {
        $alerts = [];
        $metrics = $this->collectDailyMetrics();

        // Alert si baisse significative des nouveaux contacts
        if ($metrics['contacts']['new_today'] < $metrics['contacts']['new_yesterday'] * 0.5) {
            $alerts[] = [
                'type' => 'low_contact_acquisition',
                'message' => 'Baisse importante des nouveaux contacts aujourd\'hui',
                'severity' => 'medium'
            ];
        }

        // Alert si taux de conversion en baisse
        if ($metrics['contacts']['conversion_rate'] < 15) {
            $alerts[] = [
                'type' => 'low_conversion_rate',
                'message' => 'Taux de conversion en dessous de 15%',
                'severity' => 'high'
            ];
        }

        return $alerts;
    }
}
```

## Dashboards et Reporting

### Prometheus Metrics Export

```php
// src/Controller/MetricsController.php
#[Route('/metrics', name: 'prometheus_metrics')]
class MetricsController extends AbstractController
{
    public function metrics(): Response
    {
        $metrics = $this->collectPrometheusMetrics();

        $output = [];
        foreach ($metrics as $metric) {
            $output[] = $this->formatPrometheusMetric($metric);
        }

        return new Response(
            implode("\n", $output),
            200,
            ['Content-Type' => 'text/plain']
        );
    }

    private function collectPrometheusMetrics(): array
    {
        return [
            [
                'name' => 'crm_contacts_total',
                'type' => 'gauge',
                'help' => 'Total number of active contacts',
                'value' => $this->contactRepository->count(['status' => 'active'])
            ],
            [
                'name' => 'crm_deals_total',
                'type' => 'gauge',
                'help' => 'Total number of open deals',
                'value' => $this->dealRepository->countOpenDeals()
            ],
            [
                'name' => 'crm_pipeline_value',
                'type' => 'gauge',
                'help' => 'Total pipeline value in EUR',
                'value' => $this->dealRepository->getTotalPipelineValue()
            ]
        ];
    }
}
```

---

_Utilisez ces configurations pour optimiser et monitorer efficacement votre système JJA_DEV._
