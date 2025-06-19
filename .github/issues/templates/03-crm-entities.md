# 🏗️ Créer les entités CRM fondamentales (Customer, Contact, Lead)

## Description

Développer les entités de base du système CRM en respectant l'architecture et les standards JJA_DEV. Ces entités formeront la fondation du système CRM.

## Contexte

Le système CRM de JJA_DEV nécessite des entités robustes pour gérer les clients, contacts et prospects. Ces entités doivent être compatibles avec l'architecture héritée de CMS_SF.

## Tâches à réaliser

### Développement des Entités

-   [ ] Créer l'entité `Customer` dans `src/Entity/CRM/`
    -   Propriétés : companyName, email, phone, address, etc.
    -   Relations avec Contact, Quote, Invoice
-   [ ] Créer l'entité `Contact` dans `src/Entity/CRM/`
    -   Propriétés : firstName, lastName, email, position
    -   Relation avec Customer
-   [ ] Créer l'entité `Lead` dans `src/Entity/CRM/`
    -   Propriétés : source, status, assignedUser
    -   Conversion vers Customer

### Base de Données

-   [ ] Implémenter les relations Doctrine appropriées
-   [ ] Ajouter les contraintes de validation Symfony
-   [ ] Créer les repositories avec requêtes optimisées
-   [ ] Générer et appliquer les migrations
-   [ ] Créer les index pour les performances

### Tests et Fixtures

-   [ ] Créer les fixtures de développement avec données réalistes
-   [ ] Implémenter les tests unitaires des entités
-   [ ] Valider les contraintes de validation

## Spécifications Techniques

### Conventions de Nommage

-   Tables : `crm_customers`, `crm_contacts`, `crm_leads`
-   Relations Doctrine avec cascade approprié
-   Validation Symfony avec messages en français

### Architecture

```php
src/Entity/CRM/
├── Customer.php          # Client principal
├── Contact.php          # Contact client
├── Lead.php             # Prospect/Lead
└── BaseEntity.php       # Classe de base (optionnel)
```

## Critères d'acceptation

-   ✅ Entités conformes aux standards Symfony 6.4
-   ✅ Validations côté serveur fonctionnelles
-   ✅ Relations entre entités correctes
-   ✅ Migrations appliquées sans erreur
-   ✅ Index base de données appropriés
-   ✅ Fixtures de développement créées
-   ✅ Tests unitaires avec couverture ≥ 80%

## Définition de "Done"

-   [ ] Code review passée
-   [ ] Tests unitaires passants
-   [ ] PHPStan niveau 8 sans erreurs
-   [ ] Documentation PHPDoc complète
-   [ ] Migrations testées en local

## Priorité

🔴 **High** - Fondation nécessaire pour tout le CRM

## Labels

`crm`, `entity`, `backend`, `high-priority`, `foundation`

## Dépendances

-   Configuration post-migration terminée
-   Environnement de développement stable

## Estimation

**5-7 jours** (incluant tests et documentation)

## Ressources

-   [Standards Symfony JJA_DEV](../.github/instructions/base/symfony-standards.instructions.md)
-   [Instructions CRM Development](../.github/instructions/features/crm-development.instructions.md)
