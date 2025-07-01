# Prompt - Résolution de Problèmes Techniques

## Contexte

Prompt spécialisé pour diagnostiquer et résoudre les problèmes techniques récurrents dans l'écosystème JJA_DEV (CRM Symfony + Docker + CMS_SF).

## Variables du Prompt

-   `{{ENVIRONNEMENT}}` : dev, staging, prod
-   `{{SYMPTOME}}` : Description du problème observé
-   `{{COMPOSANT}}` : Database, Docker, Symfony, CMS_SF, Frontend, API
-   `{{URGENCE}}` : low, medium, high, critical
-   `{{LOGS}}` : Extraits de logs pertinents

## Diagnostic Systématique

### 1. Collecte d'Informations

```bash
# Script de diagnostic automatique
#!/bin/bash
# scripts/diagnostic.sh

echo "=== DIAGNOSTIC JJA_DEV ==="
echo "Timestamp: $(date)"
echo "Environment: $APP_ENV"
echo ""

# Statut des services
echo "--- SERVICES STATUS ---"
docker-compose ps
echo ""

# Logs récents
echo "--- RECENT LOGS ---"
docker-compose logs --tail=50 web
docker-compose logs --tail=50 db
echo ""

# Espace disque
echo "--- DISK SPACE ---"
df -h
echo ""

# Base de données
echo "--- DATABASE STATUS ---"
php bin/console doctrine:schema:validate --env=$APP_ENV
echo ""

# Cache Symfony
echo "--- CACHE STATUS ---"
ls -la var/cache/
echo ""

# Permissions
echo "--- PERMISSIONS ---"
ls -la var/
echo ""
```

### 2. Problèmes Docker Fréquents

#### Conteneur qui ne démarre pas

```yaml
# Diagnostic Docker
diagnostic_docker:
    symptoms:
        - 'Conteneur en statut Exited'
        - 'Port déjà utilisé'
        - 'Volume mount échoue'

    checks:
        ports: |
            # Vérifier les ports utilisés
            netstat -tlnp | grep :80
            netstat -tlnp | grep :3306

        volumes: |
            # Vérifier les permissions volumes
            ls -la $(pwd)
            docker-compose config --volumes

        logs: |
            # Analyser les logs détaillés
            docker-compose logs --details web
            docker-compose logs --details db

    solutions:
        port_conflict: |
            # Changer les ports dans docker-compose.yml
            ports:
              - "8080:80"  # Au lieu de 80:80
              - "3307:3306"  # Au lieu de 3306:3306

        permission_issue: |
            # Corriger les permissions
            sudo chown -R $USER:$USER ./
            chmod -R 755 var/

        volume_issue: |
            # Recréer les volumes
            docker-compose down -v
            docker volume prune
            docker-compose up -d
```

#### Base de données inaccessible

```sql
-- Diagnostic MySQL
-- 1. Vérifier la connexion
SELECT 1;

-- 2. Vérifier les utilisateurs
SELECT User, Host FROM mysql.user WHERE User = 'jja_dev_user';

-- 3. Vérifier les privilèges
SHOW GRANTS FOR 'jja_dev_user'@'%';

-- 4. Vérifier l'espace disque
SELECT
    table_schema AS 'Database',
    SUM(data_length + index_length) / 1024 / 1024 AS 'Size (MB)'
FROM information_schema.tables
GROUP BY table_schema;

-- 5. Vérifier les processus
SHOW PROCESSLIST;
```

### 3. Problèmes Symfony

#### Erreurs de Cache

```php
// Debug cache Symfony
class CacheDebugger
{
    public function diagnoseCacheIssues(): array
    {
        $issues = [];

        // Vérifier les permissions cache
        $cacheDir = $this->kernelProject->getCacheDir();
        if (!is_writable($cacheDir)) {
            $issues[] = "Cache directory not writable: {$cacheDir}";
        }

        // Vérifier l'espace disque
        $freeSpace = disk_free_space($cacheDir);
        if ($freeSpace < 100 * 1024 * 1024) { // 100MB
            $issues[] = "Low disk space: " . round($freeSpace / 1024 / 1024) . "MB";
        }

        // Vérifier la configuration cache
        $pools = $this->cacheManager->getPools();
        foreach ($pools as $name => $pool) {
            try {
                $pool->getItem('test')->set('value');
            } catch (Exception $e) {
                $issues[] = "Cache pool '{$name}' error: {$e->getMessage()}";
            }
        }

        return $issues;
    }

    public function clearAllCaches(): void
    {
        // Cache Symfony
        $this->cacheManager->clear();

        // Cache Doctrine
        $this->doctrineCacheManager->clearMetadata();
        $this->doctrineCacheManager->clearQuery();
        $this->doctrineCacheManager->clearResult();

        // Cache OPcache
        if (function_exists('opcache_reset')) {
            opcache_reset();
        }

        // Cache applicatif
        $this->appCacheManager->flush();
    }
}
```

#### Problèmes de Performance

```php
// Profiler de performance
class PerformanceProfiler
{
    public function profileSlowQueries(): array
    {
        // Activer le log des requêtes lentes
        $this->connection->executeQuery("SET GLOBAL slow_query_log = 'ON'");
        $this->connection->executeQuery("SET GLOBAL long_query_time = 1");

        // Analyser les requêtes
        $slowQueries = $this->connection->fetchAllAssociative("
            SELECT
                query_time,
                lock_time,
                rows_sent,
                rows_examined,
                sql_text
            FROM mysql.slow_log
            WHERE start_time > DATE_SUB(NOW(), INTERVAL 1 HOUR)
            ORDER BY query_time DESC
            LIMIT 10
        ");

        return $slowQueries;
    }

    public function profileMemoryUsage(): array
    {
        return [
            'current' => memory_get_usage(true),
            'peak' => memory_get_peak_usage(true),
            'limit' => ini_get('memory_limit'),
            'opcache' => opcache_get_status()
        ];
    }

    public function recommendOptimizations(): array
    {
        $recommendations = [];

        // Mémoire
        if (memory_get_peak_usage(true) > 128 * 1024 * 1024) {
            $recommendations[] = "Consider increasing memory_limit";
        }

        // OPcache
        $opcache = opcache_get_status();
        if (!$opcache['opcache_enabled']) {
            $recommendations[] = "Enable OPcache for better performance";
        }

        // Requêtes
        $slowQueries = $this->profileSlowQueries();
        if (count($slowQueries) > 0) {
            $recommendations[] = "Optimize slow database queries";
        }

        return $recommendations;
    }
}
```

### 4. Problèmes CMS_SF Sync

#### Conflits de Synchronisation

```bash
# Script de résolution des conflits CMS_SF
#!/bin/bash
# scripts/resolve-cms-conflicts.sh

echo "🔍 Détection des conflits CMS_SF..."

# 1. Identifier les fichiers modifiés des deux côtés
git fetch cms-sf
CONFLICTS=$(git merge-tree $(git merge-base HEAD cms-sf/main) HEAD cms-sf/main | grep -E "^[<>=]{7}")

if [ ! -z "$CONFLICTS" ]; then
    echo "⚠️  Conflits détectés:"
    echo "$CONFLICTS"

    # 2. Résolution automatique pour certains types
    echo "🔧 Résolution automatique..."

    # Config files - garder la version JJA_DEV
    git checkout --ours config/packages/security.yaml
    git checkout --ours .env.local

    # Templates de base - prendre CMS_SF
    git checkout --theirs templates/base/
    git checkout --theirs templates/security/

    # Entities User - merger manuellement
    echo "⚠️  Merger manuellement:"
    echo "- src/Entity/User/"
    echo "- src/Security/"

else
    echo "✅ Pas de conflits détectés"
fi

# 3. Tests post-résolution
echo "🧪 Tests post-résolution..."
php bin/console doctrine:schema:validate
php bin/console lint:yaml config/
php bin/console lint:twig templates/

echo "✅ Résolution terminée"
```

#### Validation de Compatibilité

```php
// Validateur de compatibilité CMS_SF
class CmsSfCompatibilityValidator
{
    public function validateCompatibility(): array
    {
        $issues = [];

        // Vérifier les entités User
        $issues = array_merge($issues, $this->validateUserEntities());

        // Vérifier la sécurité
        $issues = array_merge($issues, $this->validateSecurityConfig());

        // Vérifier les templates
        $issues = array_merge($issues, $this->validateTemplates());

        // Vérifier les routes
        $issues = array_merge($issues, $this->validateRoutes());

        return $issues;
    }

    private function validateUserEntities(): array
    {
        $issues = [];

        // Vérifier que User hérite bien de CMS_SF
        $userClass = new ReflectionClass(User::class);
        $parent = $userClass->getParentClass();

        if (!$parent || $parent->getName() !== 'App\\CmsSf\\Entity\\BaseUser') {
            $issues[] = "User entity should extend CmsSf BaseUser";
        }

        // Vérifier les champs CRM ajoutés
        $crmFields = ['crmRole', 'salesTeam', 'targetQuota'];
        foreach ($crmFields as $field) {
            if (!$userClass->hasProperty($field)) {
                $issues[] = "Missing CRM field: {$field}";
            }
        }

        return $issues;
    }

    private function validateSecurityConfig(): array
    {
        $issues = [];

        $securityConfig = $this->configLoader->load('security.yaml');

        // Vérifier les rôles CRM
        $hierarchy = $securityConfig['security']['role_hierarchy'] ?? [];
        if (!isset($hierarchy['ROLE_CRM_ADMIN'])) {
            $issues[] = "Missing ROLE_CRM_ADMIN in role hierarchy";
        }

        // Vérifier les firewalls
        $firewalls = $securityConfig['security']['firewalls'] ?? [];
        if (!isset($firewalls['crm'])) {
            $issues[] = "Missing CRM firewall configuration";
        }

        return $issues;
    }
}
```

### 5. Problèmes Frontend

#### Assets non générés

```javascript
// Debug Webpack Encore
class WebpackDebugger {
    static diagnoseWebpackIssues() {
        const checks = {
            nodeModules: this.checkNodeModules(),
            webpackConfig: this.checkWebpackConfig(),
            assets: this.checkAssets(),
            permissions: this.checkPermissions(),
        }

        return checks
    }

    static checkNodeModules() {
        const fs = require('fs')

        if (!fs.existsSync('node_modules')) {
            return { status: 'error', message: 'node_modules directory missing' }
        }

        // Vérifier les dépendances clés
        const deps = ['@symfony/webpack-encore', '@hotwired/stimulus', 'sass-loader']
        const missing = deps.filter((dep) => !fs.existsSync(`node_modules/${dep}`))

        if (missing.length > 0) {
            return { status: 'error', message: `Missing dependencies: ${missing.join(', ')}` }
        }

        return { status: 'ok', message: 'All dependencies present' }
    }

    static checkWebpackConfig() {
        try {
            const config = require('./webpack.config.js')
            return { status: 'ok', message: 'Webpack config valid' }
        } catch (error) {
            return { status: 'error', message: `Webpack config error: ${error.message}` }
        }
    }

    static fixCommonIssues() {
        const fixes = []

        // Nettoyer le cache
        try {
            const fs = require('fs')
            if (fs.existsSync('node_modules/.cache')) {
                fs.rmSync('node_modules/.cache', { recursive: true })
                fixes.push('Cleared Webpack cache')
            }
        } catch (error) {
            fixes.push(`Cache clear failed: ${error.message}`)
        }

        // Regenerer package-lock.json
        try {
            const fs = require('fs')
            if (fs.existsSync('package-lock.json')) {
                fs.unlinkSync('package-lock.json')
                fixes.push('Removed package-lock.json')
            }
        } catch (error) {
            fixes.push(`Package-lock removal failed: ${error.message}`)
        }

        return fixes
    }
}
```

### 6. Problèmes API

#### Erreurs d'Authentication

```php
// Debug API Authentication
class ApiAuthDebugger
{
    public function debugAuthenticationFailure(Request $request): array
    {
        $debug = [
            'headers' => $this->extractAuthHeaders($request),
            'token_validation' => null,
            'user_resolution' => null,
            'permissions' => null
        ];

        // Vérifier les headers
        $authHeader = $request->headers->get('Authorization');
        if (!$authHeader) {
            $debug['error'] = 'Missing Authorization header';
            return $debug;
        }

        // Valider le token
        if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            $token = $matches[1];
            $debug['token_validation'] = $this->validateToken($token);
        } else {
            $debug['error'] = 'Invalid Authorization header format';
            return $debug;
        }

        // Résoudre l'utilisateur
        if ($debug['token_validation']['valid']) {
            $debug['user_resolution'] = $this->resolveUser($token);
        }

        return $debug;
    }

    private function validateToken(string $token): array
    {
        try {
            $decoded = JWT::decode($token, new Key($this->jwtSecret, 'HS256'));

            return [
                'valid' => true,
                'payload' => (array) $decoded,
                'expired' => time() > $decoded->exp
            ];
        } catch (Exception $e) {
            return [
                'valid' => false,
                'error' => $e->getMessage()
            ];
        }
    }
}
```

## Templates de Résolution

### Template Email d'Incident

```markdown
# Incident Report - {{INCIDENT_ID}}

## Résumé

-   **Début**: {{START_TIME}}
-   **Durée**: {{DURATION}}
-   **Criticité**: {{SEVERITY}}
-   **Composants affectés**: {{COMPONENTS}}

## Impact

-   **Utilisateurs affectés**: {{AFFECTED_USERS}}
-   **Fonctionnalités indisponibles**: {{AFFECTED_FEATURES}}
-   **Perte de données**: {{DATA_LOSS}}

## Cause Racine

{{ROOT_CAUSE_ANALYSIS}}

## Actions Correctives

1. {{ACTION_1}}
2. {{ACTION_2}}
3. {{ACTION_3}}

## Prévention

-   {{PREVENTION_MEASURE_1}}
-   {{PREVENTION_MEASURE_2}}

## Timeline

{{INCIDENT_TIMELINE}}
```

### Script de Health Check

```bash
#!/bin/bash
# scripts/health-check.sh

# Configuration
HEALTH_URL="https://jja-dev.com/health"
DB_HOST="localhost"
DB_USER="jja_dev_user"
DB_NAME="jja_dev"

# Fonction de test
test_component() {
    local component=$1
    local test_command=$2

    echo -n "Testing $component... "

    if eval $test_command >/dev/null 2>&1; then
        echo "✅ OK"
        return 0
    else
        echo "❌ FAILED"
        return 1
    fi
}

# Tests
echo "=== HEALTH CHECK JJA_DEV ==="

failed=0

# Web server
test_component "Web Server" "curl -f $HEALTH_URL" || ((failed++))

# Database
test_component "Database" "mysql -h$DB_HOST -u$DB_USER -p$DB_PASS -e 'SELECT 1' $DB_NAME" || ((failed++))

# Cache
test_component "Cache" "php bin/console cache:pool:list" || ((failed++))

# Disk space
test_component "Disk Space" "[ \$(df / | tail -1 | awk '{print \$5}' | sed 's/%//') -lt 90 ]" || ((failed++))

# Memory
test_component "Memory" "[ \$(free | grep Mem | awk '{print \$3/\$2 * 100.0}' | cut -d. -f1) -lt 90 ]" || ((failed++))

echo ""
if [ $failed -eq 0 ]; then
    echo "✅ All checks passed"
    exit 0
else
    echo "❌ $failed check(s) failed"
    exit 1
fi
```

## Escalation Matrix

### Niveaux d'Urgence

```yaml
urgency_levels:
    critical:
        description: 'Service complètement indisponible'
        response_time: '15 minutes'
        escalation: 'Immediate'
        contacts: ['devops@jja-dev.com', 'cto@jja-dev.com']

    high:
        description: 'Fonctionnalités principales dégradées'
        response_time: '1 hour'
        escalation: '2 hours'
        contacts: ['dev-team@jja-dev.com']

    medium:
        description: "Problèmes mineurs affectant l'UX"
        response_time: '4 hours'
        escalation: '24 hours'
        contacts: ['dev-team@jja-dev.com']

    low:
        description: 'Améliorations ou bugs non-critiques'
        response_time: '2 days'
        escalation: '1 week'
        contacts: ['product@jja-dev.com']
```

---

_Utilisez ce prompt pour diagnostiquer et résoudre efficacement les problèmes techniques du système JJA_DEV._
