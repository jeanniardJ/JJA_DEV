# Script d'Initialisation Complète du CMS JJA_DEV

Utilise ce script pour initialiser complètement le CMS avec toutes les données par défaut.

## Initialisation Complète

```bash
# 1. Créer la base de données (si pas encore fait)
symfony console doctrine:database:create --if-not-exists

# 2. Appliquer les migrations
symfony console doctrine:migrations:migrate --no-interaction

# 3. Charger toutes les fixtures d'initialisation
symfony console doctrine:fixtures:load --group=cms-init --group=cms-templates --group=cms-config --append --no-interaction

# 4. Vérifier l'installation
symfony console doctrine:schema:validate
```

## Réinitialisation (Développement uniquement)

```bash
# Reset complet - ATTENTION : Supprime toutes les données
symfony console doctrine:database:drop --force --if-exists
symfony console doctrine:database:create
symfony console doctrine:migrations:migrate --no-interaction
symfony console doctrine:fixtures:load --group=cms-init --group=cms-templates --group=cms-config --no-interaction
```

## Vérification des Données

```bash
# Vérifier les configurations
symfony console doctrine:query:sql "SELECT name FROM config LIMIT 10"

# Vérifier les templates
symfony console doctrine:query:sql "SELECT name FROM config_template"

# Vérifier les statuts CRM
symfony console doctrine:query:sql "SELECT name FROM status"

# Vérifier les rôles
symfony console doctrine:query:sql "SELECT name, second_name FROM role"
```

## Données Insérées

Après l'initialisation complète, vous aurez :

### Configurations (table `config`)

-   `site_name` : JJA-DEV CMS
-   `site_description` : Système de gestion...
-   `admin_email` : admin@jja-dev.fr
-   `site` : Configuration complète du site
-   `propriety` : Informations de contact
-   `social` : Réseaux sociaux
-   `analyse` : Outils d'analyse

### Templates (table `config_template`)

-   `presentation` : Présentation principale
-   `description` : Description détaillée des services
-   `services` : Liste des prestations avec prix
-   `default_page_template` : Template de page par défaut
-   `email_template` : Template d'email

### Statuts CRM (table `status`)

-   Nouveau, En cours, Qualifié, Fermé, Perdu

### Rôles (table `role`)

-   ROLE_SUPER_ADMIN, ROLE_ADMIN, ROLE_EDITOR, ROLE_USER
