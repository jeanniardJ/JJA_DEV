<?php

namespace App\Service;

class HealthCheckService
{
    /**
     * Effectue les vérifications de santé du système.
     *
     * @return array<string, mixed> Le statut des vérifications de santé
     */
    public function performHealthChecks(): array
    {
        // Exemple de logique métier pour les vérifications de santé
        $status = [
            'database' => $this->checkDatabaseConnection(),
            'cache' => $this->checkCacheSystem(),
            'assets' => $this->checkAssetsAvailability(),
        ];

        $status['status'] = in_array(false, $status, true) ? 'error' : 'ok';

        return $status;
    }

    private function checkDatabaseConnection(): bool
    {
        try {
            // Utilisation des paramètres Symfony pour la connexion à la base de données
            $dsn = $_ENV['DATABASE_URL'] ?? null;
            if (!$dsn) {
                throw new \InvalidArgumentException('DATABASE_URL n\'est pas défini dans les variables d\'environnement.');
            }

            // Conversion du DSN Symfony en DSN PDO
            $parsedUrl = parse_url($dsn);
            if (!$parsedUrl || !isset($parsedUrl['scheme'], $parsedUrl['host'], $parsedUrl['path'])) {
                throw new \InvalidArgumentException('DATABASE_URL est mal formé.');
            }

            $pdoDsn = sprintf(
                '%s:host=%s;dbname=%s',
                'mysql' === $parsedUrl['scheme'] ? 'mysql' : $parsedUrl['scheme'],
                $parsedUrl['host'],
                ltrim($parsedUrl['path'], '/')
            );

            $username = $parsedUrl['user'] ?? null;
            $password = $parsedUrl['pass'] ?? null;

            $pdo = new \PDO($pdoDsn, $username, $password);
            $pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

            // Vérification de la connexion avec une requête simple
            $stmt = $pdo->query('SELECT 1');

            return false !== $stmt;
        } catch (\Exception $e) {
            // Ajout d'un log ou d'un message d'erreur si nécessaire
            // Exemple : error_log($e->getMessage());
            return false;
        }
    }

    private function checkCacheSystem(): bool
    {
        try {
            // Exemple : Vérification de l'écriture dans le cache
            $cacheDir = sys_get_temp_dir();
            $testFile = $cacheDir.'/cache_test';
            file_put_contents($testFile, 'test');
            $result = 'test' === file_get_contents($testFile);
            unlink($testFile);

            return $result;
        } catch (\Exception $e) {
            return false;
        }
    }

    private function checkAssetsAvailability(): bool
    {
        // Exemple : Vérification de l'existence du répertoire des assets
        $buildDir = __DIR__.'/../../public/build';

        if (!is_dir($buildDir)) {
            return false;
        }

        $files = scandir($buildDir);

        if (false === $files) {
            return false;
        }

        return count($files) > 2;
    }
}
