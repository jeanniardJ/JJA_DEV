---
applyTo: 'JJA_DEV/**'
---

# Héritage CMS_SF vers JJA_DEV

## Principe d'Héritage

JJA_DEV hérite de CMS_SF comme template de base :

-   **Copie complète** : Fork du repository CMS_SF sur GitHub
-   **Conservation** : Structure authentification, BackOffice, FrontOffice
-   **Extension** : Ajout de fonctionnalités CRM spécifiques

## Composants Hérités à Conserver

### Système d'Authentification

-   Ne **JAMAIS** modifier le système de login CMS_SF
-   Utiliser les rôles et permissions existants
-   Étendre avec des rôles CRM si nécessaire

### Structure BackOffice/FrontOffice

-   Conserver l'architecture de navigation
-   Utiliser les templates de base
-   Ajouter des sections CRM dans la structure existante

### Configuration Docker

-   Le `docker-compose.yaml` est déjà configuré
-   Services MySQL + PHP/Symfony opérationnels
-   Ne modifier que si extensions nécessaires

## Extensions CRM Autorisées

### Nouvelles Entités

-   Créer dans `src/Entity/` avec préfixe CRM si nécessaire
-   Respecter les conventions de nommage CMS_SF
-   Utiliser les relations Doctrine appropriées

### Bundles Additionnels

-   Bundle Devis/Factures : `src/Bundle/QuoteInvoiceBundle/`
-   Bundle Prospects : selon structure CMS_SF
-   Configuration dans `config/bundles.php`

### Adaptations Interface

-   Utiliser les templates CMS_SF comme base
-   Créer des sections CRM dans le BackOffice existant
-   Maintenir la cohérence visuelle

## Règles de Développement

### Modifications Interdites

-   ❌ Système d'authentification de base
-   ❌ Structure principale des controllers CMS_SF
-   ❌ Configuration Docker de base
-   ❌ Routes administratives principales

### Modifications Autorisées

-   ✅ Ajout d'entités CRM
-   ✅ Nouveaux controllers dans espaces de noms séparés
-   ✅ Templates spécifiques CRM
-   ✅ Services métier CRM
-   ✅ Bundles additionnels

## Maintenance de la Compatibilité

### Mises à Jour CMS_SF

-   Surveiller les updates du template CMS_SF
-   Tester la compatibilité avant merge
-   Documenter les conflits potentiels

### Tests de Régression

-   Tester l'authentification après chaque modification
-   Vérifier la navigation BackOffice/FrontOffice
-   Valider les fonctionnalités héritées
