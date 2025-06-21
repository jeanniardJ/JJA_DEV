---
applyTo: 'JJA_DEV/**'
---

# Environnement Docker JJA_DEV

## Configuration Héritée

L'environnement de développement JJA_DEV utilise :

-   **MySQL** : Via Docker (base de données uniquement)
-   **PHP/Symfony** : Installation locale Windows
-   **npm** : Installation locale Windows
-   **Configuration** : `docker-compose.yaml` pour MySQL uniquement

## Commandes Essentielles

### Démarrage MySQL (Docker)

```bash
# Démarrage automatique (service par défaut)
docker-compose up -d

# Démarrage MySQL uniquement (si nécessaire)
docker-compose up -d database

# Vérification du service MySQL
docker-compose ps

# Logs MySQL si nécessaire
docker-compose logs database
```

### Gestion Base de Données

```bash
# Exécution migrations (Symfony CLI local)
symfony console doctrine:migrations:migrate

# Génération nouvelle migration
symfony console make:migration

# Fixtures de développement
symfony console doctrine:fixtures:load
```

### Développement Local (PHP/npm Windows)

```bash
# Serveur Symfony local
symfony serve
# ou en arrière-plan
symfony serve -d

# Cache clear
symfony console cache:clear

# Assets build (npm local Windows)
npm run build
npm run watch

# Build développement avec Webpack Encore
npm run dev
# IMPORTANT: Vider le cache Symfony après chaque build d'assets
symfony console cache:clear

# Build en mode watch (développement continu)
npm run watch
# Note: Le cache doit être vidé manuellement après modifications

# Build production
npm run prod
symfony console cache:clear

# Workflow complet de développement
npm run dev && symfony console cache:clear

# Tests PHPUnit (Symfony CLI local)
symfony console phpunit

# Analyse qualité code
vendor/bin/phpstan analyse
vendor/bin/phpcs src/
```

## Structure Environnement

### Services Configurés

-   **mysql** : Base de données (Docker)
-   **php** : Installation locale Windows
-   **symfony** : CLI Symfony (local)
-   **npm** : Package manager (local Windows)

### Technologies Frontend

-   **Bootstrap** : Framework CSS pour Front Office et Back Office
-   **Symfony UX React** : Composants React intégrés Symfony
-   **Webpack Encore** : Build assets et bundling
-   **Stimulus** : Contrôleurs JavaScript (via Symfony UX)

### Volumes Persistants

-   **Base de données** : Persistance MySQL via Docker
-   **Vendor** : Cache Composer local
-   **Node modules** : Cache npm local

### Variables d'Environnement

```env
# Base de données (Docker MySQL)
DATABASE_URL=mysql://JJA_DEV:PASSWORD@127.0.0.1:3306/JJA_DEV

# Développement
APP_ENV=dev
APP_DEBUG=true

# Mailer (Mailcatcher)
MAILER_DSN=smtp://127.0.0.1:1025

# Spécifique CRM (si nécessaire)
CRM_API_KEY=...
```

## Dépannage

### Problèmes Courants

1. **MySQL inaccessible** : Vérifier `docker-compose ps`
2. **Port 3306 occupé** : Arrêter autres services MySQL
3. **Cache Symfony** : `php bin/console cache:clear`
4. **Dépendances** : `composer install` et `npm install`

### Commands de Debug

```bash
# Logs MySQL
docker-compose logs database

# Accès MySQL
docker-compose exec database mysql -u JJA_DEV -pPASSWORD JJA_DEV

# Reset MySQL uniquement
docker-compose down database
docker-compose up -d database

# Vérification PHP local
php --version
symfony --version

# Vérification npm local
npm --version
```

## Branche de Développement

### Environnement `develop`

-   Utiliser exclusivement la branche `develop` pour le développement
-   Configuration Docker optimisée pour le debug
-   Base de données avec fixtures de test

### Synchronisation

```bash
# Mise à jour depuis develop
git checkout develop
git pull origin develop

# Installation dépendances
composer install
npm install

# Démarrage MySQL si nécessaire
docker-compose up -d

# Migrations et cache
symfony console doctrine:migrations:migrate
symfony console cache:clear
```
