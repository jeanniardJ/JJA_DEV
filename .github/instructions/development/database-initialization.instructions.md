# Instructions d'Initialisation de la Base de Données

## Vue d'Ensemble

Ce guide décrit les bonnes pratiques pour initialiser et maintenir la base de données du CMS JJA_DEV avec Doctrine.

## 🏗️ Structure d'Initialisation

### 1. Migrations pour le Schéma

**Principe :** Les migrations Doctrine gèrent uniquement la structure de la base de données (tables, colonnes, index, contraintes).

```bash
# Générer une migration après modification des entités
symfony console make:migration

# Appliquer les migrations
symfony console doctrine:migrations:migrate
```

### 2. DataFixtures pour les Données

**Principe :** Les fixtures gèrent les données d'initialisation nécessaires au fonctionnement du système.

```bash
# Créer une nouvelle fixture
symfony console make:fixtures

# Charger les fixtures
symfony console doctrine:fixtures:load
```

## 📋 Processus d'Initialisation Complète

### Étape 1: Base de Données Vide

```bash
# 1. Créer la base de données
symfony console doctrine:database:create

# 2. Appliquer toutes les migrations
symfony console doctrine:migrations:migrate

# 3. Charger les données d'initialisation
symfony console doctrine:fixtures:load
```

### Étape 2: Vérification

```bash
# Vérifier l'état des migrations
symfony console doctrine:migrations:status

# Vérifier la structure de la base
symfony console doctrine:schema:validate
```

## 🔧 Types de Données d'Initialisation

### 1. Données de Base (cms-init)

**Fixture** : `AppCmsInitFixtures`

-   **Configurations de base** : nom du site, email admin, langue par défaut
-   **Templates par défaut** : mise en page, emails
-   **Statuts CRM** : nouveau, en cours, qualifié, fermé, perdu
-   **Rôles utilisateur** : super admin, admin, éditeur, utilisateur

### 2. Templates Métier (cms-templates)

**Fixture** : `AppDefaultTemplateFixtures`

-   **Présentation** : Titre et description principale du site
-   **Description** : Texte détaillé des services
-   **Services** : Liste des prestations avec prix (Portfolio, Blog, Site vitrine, Application web, E-commerce)

### 3. Configuration Site (cms-config)

**Fixture** : `AppDefaultConfigFixtures`

-   **Site** : URL, nom, logo, description, mots-clés
-   **Contact** : Adresse, téléphone, email, ville
-   **Réseaux sociaux** : LinkedIn, Facebook, Twitter, etc.
-   **Analyse** : Google Analytics, outils de tracking

## 🚀 Commandes de Chargement

### Chargement Complet

```bash
# Charger toutes les fixtures d'initialisation
symfony console doctrine:fixtures:load --group=cms-init --group=cms-templates --group=cms-config --append
```

### Chargement Sélectif

```bash
# Données de base uniquement
symfony console doctrine:fixtures:load --group=cms-init --append

# Templates métier uniquement
symfony console doctrine:fixtures:load --group=cms-templates --append

# Configuration site uniquement
symfony console doctrine:fixtures:load --group=cms-config --append
```

### Exemple d'Utilisation des Fixtures

```php
<?php
// src/DataFixtures/AppCmsInitFixtures.php

namespace App\DataFixtures;

use App\Entity\Config;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppCmsInitFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $config = new Config();
        $config->setName('site_name');
        $config->setValue(['JJA-DEV CMS']);

        $manager->persist($config);
        $manager->flush();
    }
}
```

## ⚠️ Bonnes Pratiques

### DO ✅

1. **Séparer les responsabilités**

    - Migrations = Structure
    - Fixtures = Données

2. **Toujours générer les migrations automatiquement**

    ```bash
    symfony console make:migration
    ```

3. **Utiliser des fixtures pour les données d'initialisation**

    ```bash
    symfony console doctrine:fixtures:load
    ```

4. **Valider avant et après**
    ```bash
    symfony console doctrine:schema:validate
    ```

### DON'T ❌

1. **Ne jamais modifier une migration déjà appliquée**

    - Doctrine détecte les modifications par hash
    - Crée des erreurs "migration is frozen"

2. **Ne pas créer de migrations manuelles**

    - Utilisez toujours `make:migration`
    - Éditez seulement le contenu généré si nécessaire

3. **Ne pas mélanger structure et données dans les migrations**
    - Sauf cas très spécifiques avec `postUp()`

## 🔄 Gestion des Environnements

### Développement

```bash
# Reset complet en développement
symfony console doctrine:database:drop --force
symfony console doctrine:database:create
symfony console doctrine:migrations:migrate
symfony console doctrine:fixtures:load
```

### Production

```bash
# Migration seulement (pas de fixtures)
symfony console doctrine:migrations:migrate --no-interaction
```

## 🚨 Résolution de Problèmes Courants

### Migration "Frozen" ou Hash Mismatch

```bash
# 1. Vérifier l'état
symfony console doctrine:migrations:status

# 2. Si migration corrompue, la supprimer et recréer
rm migrations/VersionProblematique.php
symfony console make:migration
```

### Données en Double

```bash
# Utiliser l'option --purge-with-truncate
symfony console doctrine:fixtures:load --purge-with-truncate
```

### Problème d'Extension PHP

```bash
# Vérifier les extensions
php -m | grep pdo_mysql

# Si manquante, activer dans php.ini
extension=pdo_mysql
```

## 📝 Commandes Utiles

### Diagnostic

```bash
# État des migrations
symfony console doctrine:migrations:status

# Validation du schéma
symfony console doctrine:schema:validate

# Information sur les entités
symfony console doctrine:mapping:info
```

### Maintenance

```bash
# Rollback d'une migration
symfony console doctrine:migrations:execute VERSION --down

# Générer le SQL d'une migration sans l'exécuter
symfony console doctrine:migrations:migrate --dry-run
```

## 🔗 Ressources

-   [Documentation Doctrine Migrations](https://symfony.com/doc/current/bundles/DoctrineMigrationsBundle/index.html)
-   [Documentation Doctrine Fixtures](https://symfony.com/doc/current/bundles/DoctrineFixturesBundle/index.html)
-   [Bonnes pratiques Doctrine](https://www.doctrine-project.org/projects/doctrine-orm/en/current/reference/best-practices.html)
