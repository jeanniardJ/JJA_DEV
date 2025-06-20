---
applyTo: '**'
---

# JJA DEV CRM - Instructions Principales & Standards de Codage

## Vue d'Ensemble du Projet

JJA DEV est un système CRM complet basé sur Symfony 6.4 héritant de CMS_SF :

-   **Architecture** : Héritage de CMS_SF (template de base)
-   **Front Office** : Interface publique visiteurs (Bootstrap 5.x)
-   **Back Office** : Système de gestion laboratoire (Bootstrap + React)
-   **Bundle Devis & Factures** : Bundle Symfony réutilisable
-   **Frontend** : Bootstrap 5.x + Symfony UX React + Stimulus
-   **Environnement Dev** : MySQL Docker + PHP/npm local Windows
-   **Production** : OVH via CI/CD GitHub + Webhooks (branche main/master)

## Architecture du Projet

### Relation CMS_SF → JJA_DEV

-   JJA_DEV est une copie/fork de CMS_SF
-   Utilisation du système d'authentification CMS_SF
-   Conservation de la structure BackOffice/FrontOffice
-   Extensions CRM spécifiques ajoutées

### Instructions Spécialisées

-   [Héritage CMS_SF](./base/cms-sf-inheritance.instructions.md)
-   [Environnement Docker](./base/docker-environment.instructions.md)
-   [Standards Symfony](./base/symfony-standards.instructions.md)
-   [Authentification & Sécurité](./base/security-authentication.instructions.md)
-   [Workflow de Développement](./development/branch-workflow.instructions.md)
-   [Stratégie de Tests](./development/testing-strategy.instructions.md)
-   [Déploiement OVH](./deployment/ovh-deployment.instructions.md)
-   [Développement CRM](./features/crm-development.instructions.md)
-   [Création de Bundles](./features/bundle-creation.instructions.md)

## Prompts Disponibles

-   [Configuration depuis CMS_SF](../prompts/cms-fork-setup.prompt.md)
-   [Développement Feature CRM](../prompts/crm-feature-development.prompt.md)
-   [Intégration Bundle](../prompts/bundle-integration.prompt.md)
-   [Préparation Déploiement](../prompts/deployment-preparation.prompt.md)
-   [Dépannage Docker](../prompts/docker-troubleshooting.prompt.md)

## Modes de Chat Spécialisés

-   [Mode Planification](../chatmodes/JJA_DEV.chatmode.md) (existant)
-   [Mode Héritage CMS](../chatmodes/cms-inheritance.chatmode.md)
-   [Mode Développement CRM](../chatmodes/crm-development.chatmode.md)
-   [Mode Gestionnaire Docker](../chatmodes/docker-manager.chatmode.md)
-   [Mode Pipeline Déploiement](../chatmodes/deployment-pipeline.chatmode.md)

## Standards Rapides

### Conventions de Nommage

-   **Classes PHP** : PascalCase (`CustomerController`, `InvoiceService`)
-   **Méthodes/Propriétés** : camelCase (`generateQuote()`, `customerData`)
-   **Tables/Colonnes DB** : snake_case (`customer_quotes`, `invoice_items`)
-   **Classes CSS** : kebab-case + Bootstrap (`.customer-form`, `.btn-primary`)
-   **Composants React** : PascalCase (`CustomerForm`, `QuoteCalculator`)

### Organisation des Fichiers

-   Controllers : `src/Controller/` + suffixe `Controller`
-   Services : `src/Service/` + suffixe `Service`
-   Entités : `src/Entity/` (correspondance tables DB)
-   Repositories : `src/Repository/` + suffixe `Repository`
-   Forms : `src/Form/` + suffixe `Type`

### Exigences de Tests

-   Couverture minimale : 80%
-   Tests unitaires pour tous les services
-   Tests fonctionnels pour controllers/API
-   Tests d'intégration pour workflows complexes

### Workflow Git

-   Développement : branche `develop`
-   Features : `feature/issue-number-description`
-   Pull Request obligatoire pour merge vers `main/master`
-   Déploiement automatique OVH après validation PR

## Architecture Standards

### Symfony 6.4 Best Practices

-   Follow Symfony directory structure and naming conventions
-   Use dependency injection for all services
-   Implement proper service configuration in YAML
-   Use Doctrine ORM for database operations
-   Follow PSR-12 coding standards

### Bundle Organization

-   Quote & Invoice functionality must be organized as a reusable Symfony bundle
-   Bundle should be decoupled from main application logic
-   Use proper namespace structure: `App\QuoteInvoiceBundle\`
-   Implement bundle configuration and services

## Naming Conventions

### PHP Classes & Methods

-   Use PascalCase for class names (e.g., `CustomerController`, `InvoiceService`)
-   Use camelCase for method and property names (e.g., `generateQuote()`, `customerData`)
-   Use snake_case for database table and column names (e.g., `customer_quotes`, `invoice_items`)
-   Prefix abstract classes with `Abstract` (e.g., `AbstractDocumentGenerator`)
-   Prefix interfaces with `Interface` suffix (e.g., `QuoteGeneratorInterface`)

### File Organization

-   Controllers in `src/Controller/` with `Controller` suffix
-   Services in `src/Service/` with `Service` suffix
-   Entities in `src/Entity/` matching database table names
-   Repositories in `src/Repository/` with `Repository` suffix
-   Forms in `src/Form/` with `Type` suffix

### Frontend Assets

-   Use kebab-case for CSS classes (e.g., `.customer-form`, `.invoice-table`)
-   **Bootstrap** : Utilize Bootstrap 5.x classes for consistency
-   **React Components** : PascalCase naming (e.g., `CustomerForm`, `QuoteCalculator`)
-   Use camelCase for JavaScript variables and functions
-   Prefix component-specific styles with component name

## Code Structure Standards

### Controllers

-   Keep controllers thin, delegate business logic to services
-   Use proper HTTP status codes and responses
-   Implement proper request validation
-   Use Symfony's built-in security features

### Services

-   Make services stateless when possible
-   Use constructor injection for dependencies
-   Implement proper interfaces for testability
-   Follow single responsibility principle

### Entities

-   Use Doctrine annotations or attributes
-   Implement proper relationships between entities
-   Add validation constraints where appropriate
-   Use proper data types and nullable fields

## Error Handling

### Exception Management

-   Use Symfony's exception handling system
-   Create custom exceptions for business logic errors
-   Implement proper error pages for front office
-   Log all exceptions with contextual information

### Validation

-   Use Symfony's Validator component
-   Implement form validation for all user inputs
-   Add database-level constraints where appropriate
-   Provide clear error messages to users

## Testing Requirements

### PHPUnit Standards

-   Write unit tests for all services and business logic
-   Create functional tests for controllers and API endpoints
-   Implement integration tests for complex workflows
-   Use test fixtures for consistent test data
-   Aim for minimum 80% code coverage

### Test Organization

-   Place tests in `tests/` directory matching source structure
-   Use `Test` suffix for test classes
-   Group related tests in test suites
-   Mock external dependencies properly

## Security Standards

### Authentication & Authorization

-   Use Symfony Security component
-   Implement role-based access control (RBAC)
-   Separate permissions for front office vs back office
-   Secure all administrative functions

### Data Protection

-   Sanitize all user inputs
-   Use HTTPS for all communications
-   Implement CSRF protection on forms
-   Follow GDPR guidelines for customer data

## Database Standards

### Migration Management

-   Create migrations for all database changes
-   Use descriptive migration names
-   Test migrations on development environment first
-   Document significant schema changes

### Query Optimization

-   Use Doctrine Query Builder for complex queries
-   Implement proper indexing strategies
-   Avoid N+1 query problems
-   Use pagination for large datasets

## Quote & Invoice Bundle Specifications

### Bundle Structure

-   Implement as a reusable Symfony bundle
-   Provide configuration options for customization
-   Include PDF generation capabilities
-   Support multiple templates and formats

### Features Requirements

-   Generate professional quotes with company branding
-   Convert quotes to invoices seamlessly
-   Track quote/invoice status and history
-   Support tax calculations and multiple currencies
-   Email delivery functionality

## Documentation Requirements

### Code Documentation

-   Use PHPDoc blocks for all classes and methods
-   Document complex business logic thoroughly
-   Maintain README files for each major component
-   Keep API documentation up to date

### User Documentation

-   Provide clear installation instructions
-   Document configuration options
-   Create user guides for CRM features
-   Maintain troubleshooting guides

## Git Workflow Standards

### Commit Messages

-   Use conventional commit format
-   Reference issue numbers when applicable
-   Write clear, descriptive commit messages
-   Keep commits atomic and focused

### Branch Strategy

-   Use feature branches for new developments
-   Follow naming convention: `feature/issue-number-description`
-   Create pull requests for all changes
-   Require code review before merging

## Performance Guidelines

### Optimization Practices

-   Use Symfony's built-in caching mechanisms
-   Implement database query optimization
-   Use lazy loading for related entities
-   Optimize asset loading and delivery

### Monitoring

-   Implement proper logging for performance tracking
-   Use Symfony's profiler in development
-   Monitor database query performance
-   Track user experience metrics
