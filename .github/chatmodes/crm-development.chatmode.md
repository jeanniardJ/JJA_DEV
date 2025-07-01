---
description: Mode de développement spécialisé pour les fonctionnalités CRM dans JJA_DEV avec focus sur l'intégration business et les bonnes pratiques Symfony
tools: ['codebase', 'search', 'usages', 'editFiles', 'runTasks', 'findTestFiles', 'runCommands']
---

# Mode Développement CRM

Vous êtes en mode développement CRM pour JJA_DEV.

## Contexte CRM

### Fonctionnalités Principales

-   **Gestion Clients** : Entités Customer, Contact, Company
-   **Devis & Factures** : Bundle dédié avec génération PDF
-   **Suivi Commercial** : Pipeline de ventes, opportunités
-   **Laboratoire** : Gestion spécifique au métier (Labo)

### Architecture CRM

-   **Entités** : `src/Entity/CRM/` ou préfixe `crm_` en DB
-   **Services** : `src/Service/CRM/` avec interfaces
-   **Controllers** : `src/Controller/Admin/CRM/` pour BackOffice
-   **Templates** : Extension des templates CMS_SF
-   **Bundle** : `src/Bundle/QuoteInvoiceBundle/` pour devis/factures

## Standards de Développement CRM

### Entités et Base de Données

-   **Nommage tables** : `crm_customers`, `crm_quotes`, `crm_invoices`
-   **Relations** : Utiliser Doctrine ORM avec relations appropriées
-   **Validations** : Constraints Symfony sur toutes les propriétés
-   **Indexation** : Prévoir les index pour les requêtes fréquentes

### Services Métier

```php
// Pattern de service CRM
namespace App\Service\CRM;

interface CustomerServiceInterface
{
    public function createCustomer(array $data): Customer;
    public function updateCustomer(Customer $customer, array $data): Customer;
    public function deleteCustomer(Customer $customer): void;
    public function getCustomerStats(Customer $customer): array;
}
```

### Controllers CRM

-   **Routes** : Préfixe `/admin/crm/` pour toutes les routes admin
-   **Sécurité** : Vérifier les permissions CRM
-   **Pagination** : Utiliser KnpPaginatorBundle pour les listes
-   **Formulaires** : Validation côté serveur obligatoire

### Bundle Devis/Factures

-   **Structure** : Bundle Symfony autonome et réutilisable
-   **PDF** : Génération avec TCPDF ou DomPDF
-   **Templates** : Personnalisables via configuration
-   **Workflow** : Devis → Validation → Facture

## Commandes de Développement CRM

### Base de Données

```bash
# Nouvelle entité CRM
docker-compose exec php bin/console make:entity

# Migration
docker-compose exec php bin/console make:migration
docker-compose exec php bin/console doctrine:migrations:migrate

# Fixtures CRM
docker-compose exec php bin/console doctrine:fixtures:load --group=crm
```

### Tests CRM

```bash
# Tests CRM spécifiques
docker-compose exec php bin/phpunit tests/CRM/

# Coverage CRM
docker-compose exec php bin/phpunit --coverage-html coverage/ tests/CRM/
```

### Bundle Development

```bash
# Génération bundle
docker-compose exec php bin/console make:bundle

# Validation bundle
docker-compose exec php bin/console debug:container --tag=crm
```

## Checklist Qualité CRM

-   [ ] **Entités** : Relations correctes, validations complètes
-   [ ] **Services** : Interfaces, injection dépendances, tests unitaires
-   [ ] **Controllers** : Sécurité, validation, gestion erreurs
-   [ ] **Templates** : Cohérence CMS_SF, responsive, accessibilité
-   [ ] **Tests** : Couverture 80%+, fixtures, tests fonctionnels
-   [ ] **Documentation** : PHPDoc, README, guide utilisateur

## Patterns CRM Recommandés

### Gestion d'États

```php
// Entité avec états métier
class Quote
{
    public const STATUS_DRAFT = 'draft';
    public const STATUS_SENT = 'sent';
    public const STATUS_ACCEPTED = 'accepted';

    public function canBeConverted(): bool
    {
        return $this->status === self::STATUS_ACCEPTED;
    }
}
```

### Services avec Events

```php
// Utiliser les events Symfony
class CustomerService
{
    public function createCustomer(array $data): Customer
    {
        $customer = new Customer();
        // ... populate data

        $this->entityManager->persist($customer);
        $this->entityManager->flush();

        // Event pour intégrations
        $this->eventDispatcher->dispatch(
            new CustomerCreatedEvent($customer),
            CustomerCreatedEvent::NAME
        );

        return $customer;
    }
}
```

### Repository avec QueryBuilder

```php
// Repository optimisé pour CRM
class CustomerRepository extends ServiceEntityRepository
{
    public function findActiveCustomersWithStats(): array
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'COUNT(q.id) as quote_count')
            ->leftJoin('c.quotes', 'q')
            ->where('c.active = :active')
            ->setParameter('active', true)
            ->groupBy('c.id')
            ->getQuery()
            ->getResult();
    }
}
```

## Intégration CMS_SF

### Navigation CRM

-   Ajouter sections CRM dans menu admin
-   Utiliser icônes cohérentes avec design
-   Respecter hiérarchie existante
-   Gérer permissions par rôles

### Templates CRM

```twig
{# Base template CRM #}
{% extends 'admin/base.html.twig' %}

{% block title %}{{ parent() }} - CRM{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {{ encore_entry_link_tags('crm_admin') }}
{% endblock %}

{% block sidebar %}
    {{ parent() }}
    {# Menu CRM spécifique #}
    <div class="crm-navigation">
        {# Navigation CRM #}
    </div>
{% endblock %}
```

### Sécurité CRM

```php
// Rôles CRM étendus
#[IsGranted('ROLE_CRM_MANAGER')]
class CrmController extends AbstractController
{
    #[IsGranted('ROLE_CRM_ADMIN')]
    public function deleteAction(): Response
    {
        // Actions sensibles
    }
}
```

## Monitoring CRM

### Métriques Business

```php
// Service de métriques CRM
class CrmMetricsService
{
    public function getDashboardMetrics(): array
    {
        return [
            'customers_count' => $this->customerRepository->count([]),
            'quotes_this_month' => $this->getQuotesThisMonth(),
            'revenue_this_month' => $this->getRevenueThisMonth(),
            'conversion_rate' => $this->getConversionRate(),
        ];
    }
}
```

### Logs CRM

```php
// Logger spécialisé CRM
class CrmLogger
{
    public function logCustomerAction(Customer $customer, string $action): void
    {
        $this->logger->info('CRM Customer Action', [
            'customer_id' => $customer->getId(),
            'customer_name' => $customer->getCompanyName(),
            'action' => $action,
            'user' => $this->security->getUser()->getEmail(),
            'timestamp' => new \DateTime(),
        ]);
    }
}
```

## Commandes Utiles CRM

```bash
# Génération CRUD complet
docker-compose exec php bin/console make:crud Customer

# Import données CRM
docker-compose exec php bin/console app:import:customers data/customers.csv

# Export statistiques
docker-compose exec php bin/console app:export:crm-stats --format=csv

# Nettoyage données CRM
docker-compose exec php bin/console app:cleanup:old-quotes --days=365
```
