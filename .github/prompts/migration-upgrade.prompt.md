# Prompt - Migration et Mise à Jour

## Contexte

Prompt spécialisé pour les migrations de base de données, mises à jour de dépendances, et évolutions techniques du projet JJA_DEV/CMS_SF.

## Variables du Prompt

-   `{{VERSION_SOURCE}}` : Version actuelle du système
-   `{{VERSION_CIBLE}}` : Version cible de la migration
-   `{{TYPE_MIGRATION}}` : Type de migration (database, symfony, dependencies, cms-sf-sync)
-   `{{ENVIRONNEMENT}}` : dev, staging, prod
-   `{{ROLLBACK_STRATEGY}}` : Stratégie de rollback disponible

## Instructions Principales

### Pré-Migration

1. **Sauvegarde Complète**

    - Dump de la base de données
    - Sauvegarde des fichiers uploads
    - Commit de l'état actuel

2. **Analyse d'Impact**

    - Identification des dépendances affectées
    - Tests de compatibilité
    - Plan de rollback

3. **Préparation Environnement**
    - Vérification des prérequis
    - Tests sur environnement de staging
    - Communication aux utilisateurs

### Migration Base de Données

#### Template de Migration Doctrine

```php
<?php
// migrations/Version{{TIMESTAMP}}_{{DESCRIPTION}}.php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version{{TIMESTAMP}}_{{DESCRIPTION}} extends AbstractMigration
{
    public function getDescription(): string
    {
        return '{{DESCRIPTION_DETAILLEE}}';
    }

    public function up(Schema $schema): void
    {
        // Vérification de l'environnement
        $this->abortIf(
            !$this->connection->getDatabasePlatform() instanceof \Doctrine\DBAL\Platforms\MySQLPlatform,
            "Cette migration nécessite MySQL."
        );

        // Sauvegarde des données critiques si nécessaire
        if ($this->needsDataBackup()) {
            $this->createDataBackup();
        }

        // Migration principale
        {{MIGRATION_SQL}}

        // Vérification post-migration
        $this->verifyMigration();
    }

    public function down(Schema $schema): void
    {
        // Rollback sécurisé
        {{ROLLBACK_SQL}}
    }

    private function needsDataBackup(): bool
    {
        // Logique pour déterminer si une sauvegarde est nécessaire
        return {{NEEDS_BACKUP}};
    }

    private function createDataBackup(): void
    {
        // Création d'une table de sauvegarde temporaire
        $this->addSql('CREATE TABLE backup_{{TABLE}}_{{TIMESTAMP}} AS SELECT * FROM {{TABLE}}');
    }

    private function verifyMigration(): void
    {
        // Vérifications post-migration
        $count = $this->connection->fetchOne('SELECT COUNT(*) FROM {{TABLE}}');
        $this->abortIf($count === false, 'Erreur lors de la vérification de la migration');
    }
}
```

### Migration CMS_SF vers JJA_DEV

#### Synchronisation des Changements

```bash
#!/bin/bash
# scripts/sync-cms-sf.sh

set -e

echo "🔄 Synchronisation CMS_SF → JJA_DEV"

# 1. Récupération des derniers changements CMS_SF
cd ../CMS_SF
git fetch origin
LATEST_CMS_SF=$(git rev-parse origin/main)

cd ../JJA_DEV
echo "Dernière version CMS_SF: $LATEST_CMS_SF"

# 2. Création d'une branche de sync
git checkout -b sync/cms-sf-$(date +%Y%m%d)

# 3. Merge sélectif des changements
git remote add cms-sf ../CMS_SF 2>/dev/null || true
git fetch cms-sf

# 4. Identification des fichiers à synchroniser
SYNC_PATHS=(
    "src/Controller/Security/"
    "src/Entity/User/"
    "src/Security/"
    "templates/base/"
    "templates/security/"
    "config/packages/security.yaml"
)

for path in "${SYNC_PATHS[@]}"; do
    if [ -d "cms-sf/main:$path" ] || [ -f "cms-sf/main:$path" ]; then
        echo "Synchronisation: $path"
        git checkout cms-sf/main -- "$path" || echo "⚠️  Chemin non trouvé: $path"
    fi
done

# 5. Résolution des conflits CRM
echo "🔧 Résolution des spécificités CRM..."
php bin/console app:resolve-cms-conflicts

# 6. Tests automatiques
echo "🧪 Tests post-synchronisation..."
php bin/phpunit tests/Integration/CmsSfSyncTest.php

echo "✅ Synchronisation terminée. Vérifiez les changements avant commit."
```

### Migration Symfony

#### Mise à Jour de Version

```yaml
# config/migration/symfony-upgrade.yaml
symfony_upgrade:
    current_version: '{{VERSION_SOURCE}}'
    target_version: '{{VERSION_CIBLE}}'

    pre_tasks:
        - check_compatibility
        - backup_config
        - update_dependencies

    migration_steps:
        1:
            name: 'Mise à jour composer.json'
            commands:
                - 'composer require symfony/framework-bundle:^{{VERSION_CIBLE}}'
                - 'composer require symfony/doctrine-bundle:^2.8'

        2:
            name: 'Migration configuration'
            files:
                - 'config/packages/framework.yaml'
                - 'config/packages/doctrine.yaml'
                - 'config/packages/security.yaml'

        3:
            name: 'Adaptation du code'
            deprecations:
                - replace: "Symfony\\Component\\HttpKernel\\Event\\GetResponseEvent"
                  with: "Symfony\\Component\\HttpKernel\\Event\\RequestEvent"
                - replace: "Symfony\\Component\\Security\\Core\\Encoder"
                  with: "Symfony\\Component\\PasswordHasher"

    post_tasks:
        - run_tests
        - check_deprecations
        - update_documentation
```

### Migration des Données CRM

#### Script de Migration Complexe

```php
<?php
// src/Command/MigrateCrmDataCommand.php

#[AsCommand(name: 'app:migrate-crm-data')]
class MigrateCrmDataCommand extends Command
{
    private const BATCH_SIZE = 1000;

    protected function configure(): void
    {
        $this
            ->setDescription('Migration des données CRM vers la nouvelle structure')
            ->addOption('dry-run', null, InputOption::VALUE_NONE, 'Test sans modification')
            ->addOption('batch-size', null, InputOption::VALUE_REQUIRED, 'Taille des lots', self::BATCH_SIZE);
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $isDryRun = $input->getOption('dry-run');
        $batchSize = (int) $input->getOption('batch-size');

        $io = new SymfonyStyle($input, $output);

        if ($isDryRun) {
            $io->note('Mode test activé - aucune modification ne sera effectuée');
        }

        try {
            $this->migrateContacts($io, $isDryRun, $batchSize);
            $this->migrateDeals($io, $isDryRun, $batchSize);
            $this->migrateActivities($io, $isDryRun, $batchSize);

            $io->success('Migration terminée avec succès');
            return Command::SUCCESS;

        } catch (Exception $e) {
            $io->error("Erreur lors de la migration: " . $e->getMessage());
            $this->logger->error('Migration failed', ['exception' => $e]);
            return Command::FAILURE;
        }
    }

    private function migrateContacts(SymfonyStyle $io, bool $isDryRun, int $batchSize): void
    {
        $io->section('Migration des contacts');

        $totalContacts = $this->entityManager
            ->getRepository(LegacyContact::class)
            ->count([]);

        $progressBar = $io->createProgressBar($totalContacts);

        $offset = 0;
        while ($offset < $totalContacts) {
            $legacyContacts = $this->entityManager
                ->getRepository(LegacyContact::class)
                ->findBy([], null, $batchSize, $offset);

            foreach ($legacyContacts as $legacy) {
                $newContact = $this->transformLegacyContact($legacy);

                if (!$isDryRun) {
                    $this->entityManager->persist($newContact);
                }

                $progressBar->advance();
            }

            if (!$isDryRun) {
                $this->entityManager->flush();
                $this->entityManager->clear();
            }

            $offset += $batchSize;
        }

        $progressBar->finish();
        $io->newLine(2);
    }

    private function transformLegacyContact(LegacyContact $legacy): Contact
    {
        $contact = new Contact();
        $contact->setFirstName($legacy->getFirstName());
        $contact->setLastName($legacy->getLastName());
        $contact->setEmail($legacy->getEmail());
        $contact->setPhone($this->normalizePhone($legacy->getPhone()));
        $contact->setCompany($legacy->getCompany());

        // Migration des champs personnalisés
        $customFields = json_decode($legacy->getCustomData() ?? '{}', true);
        foreach ($customFields as $key => $value) {
            $contact->setCustomField($key, $value);
        }

        // Attribution automatique selon les règles métier
        $assignedUser = $this->determineAssignedUser($contact);
        $contact->setAssignedUser($assignedUser);

        return $contact;
    }
}
```

### Procédures de Rollback

#### Script de Rollback Automatique

```bash
#!/bin/bash
# scripts/rollback.sh

ROLLBACK_TYPE=$1
BACKUP_ID=$2

case $ROLLBACK_TYPE in
    "database")
        echo "🔄 Rollback de la base de données..."
        mysql -u $DB_USER -p$DB_PASS $DB_NAME < backups/db_$BACKUP_ID.sql
        ;;

    "migration")
        echo "🔄 Rollback des migrations Doctrine..."
        php bin/console doctrine:migrations:migrate prev --no-interaction
        ;;

    "full")
        echo "🔄 Rollback complet..."
        # Base de données
        mysql -u $DB_USER -p$DB_PASS $DB_NAME < backups/db_$BACKUP_ID.sql

        # Fichiers
        rm -rf var/uploads/*
        tar -xzf backups/uploads_$BACKUP_ID.tar.gz -C var/

        # Code
        git reset --hard $BACKUP_ID
        ;;

    *)
        echo "Type de rollback non supporté: $ROLLBACK_TYPE"
        echo "Utilisation: $0 {database|migration|full} {backup_id}"
        exit 1
        ;;
esac

echo "✅ Rollback terminé"
```

## Checklist de Migration

### Pré-Migration

-   [ ] Backup complet effectué
-   [ ] Tests sur environnement de staging
-   [ ] Plan de rollback documenté
-   [ ] Utilisateurs prévenus
-   [ ] Fenêtre de maintenance planifiée

### Pendant la Migration

-   [ ] Mode maintenance activé
-   [ ] Logs de migration surveillés
-   [ ] Checkpoints de validation
-   [ ] Monitoring des performances
-   [ ] Communication régulière

### Post-Migration

-   [ ] Tests fonctionnels validés
-   [ ] Performances vérifiées
-   [ ] Logs analysés
-   [ ] Utilisateurs formés
-   [ ] Documentation mise à jour
-   [ ] Nettoyage des fichiers temporaires

## Gestion des Erreurs

### Stratégies de Récupération

```php
class MigrationErrorHandler
{
    public function handleMigrationError(Exception $e, string $step): void
    {
        $this->logger->critical('Migration error', [
            'step' => $step,
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ]);

        // Tentative de récupération automatique
        switch ($step) {
            case 'database':
                $this->attemptDatabaseRecovery();
                break;
            case 'files':
                $this->attemptFileRecovery();
                break;
            default:
                $this->initiateEmergencyRollback();
        }
    }

    private function attemptDatabaseRecovery(): void
    {
        // Tentative de réparation automatique
        try {
            $this->entityManager->getConnection()->executeQuery('REPAIR TABLE crm_contacts');
        } catch (Exception $e) {
            $this->initiateEmergencyRollback();
        }
    }
}
```

---

_Utilisez ce prompt pour assurer des migrations sûres et contrôlées de votre système JJA_DEV._
