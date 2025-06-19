# Développement Feature CRM JJA_DEV

Vous devez développer une nouvelle fonctionnalité CRM dans JJA_DEV.

## Checklist de Développement

### 1. Analyse des Besoins

-   [ ] Identifier les entités CRM nécessaires
-   [ ] Définir les relations entre entités
-   [ ] Spécifier les règles métier
-   [ ] Planifier l'intégration dans le BackOffice CMS_SF

### 2. Développement Backend

#### Entités Doctrine

```php
// Template d'entité CRM
#[ORM\Entity(repositoryClass: EntityRepository::class)]
#[ORM\Table(name: 'crm_table_name')]
class CrmEntity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // Propriétés avec validations...
}
```

#### Services Métier

-   [ ] Créer dans `src/Service/CRM/`
-   [ ] Implémenter les interfaces
-   [ ] Utiliser l'injection de dépendances
-   [ ] Gérer les exceptions métier

#### Controllers Admin

-   [ ] Hériter de la structure BackOffice CMS_SF
-   [ ] Utiliser le préfixe de route `/admin/crm/`
-   [ ] Implémenter la pagination
-   [ ] Gérer les formulaires avec validation

### 3. Développement Frontend

#### Templates Twig

```twig
{# Hériter du layout CMS_SF #}
{% extends 'admin/base.html.twig' %}

{% block title %}{{ parent() }} - CRM{% endblock %}

{% block body %}
    {# Utiliser les composants CMS_SF #}
    <div class="admin-content">
        {# Contenu CRM #}
    </div>
{% endblock %}
```

#### Assets et Styles

-   [ ] Utiliser les classes CSS CMS_SF
-   [ ] Créer des styles spécifiques dans `assets/admin/crm/`
-   [ ] Maintenir la cohérence visuelle
-   [ ] Optimiser pour le responsive

### 4. Base de Données

#### Migrations

```bash
# Générer migration
docker-compose exec php bin/console make:migration

# Appliquer migration
docker-compose exec php bin/console doctrine:migrations:migrate
```

#### Fixtures (Développement)

```php
class CrmFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // Données de test CRM
    }
}
```

### 5. Tests

#### Tests Unitaires

```php
class CustomerServiceTest extends TestCase
{
    private CustomerService $customerService;

    protected function setUp(): void
    {
        // Setup test environment
    }

    public function testCreateCustomer(): void
    {
        // Test logic
    }
}
```

#### Tests Fonctionnels

```php
class CrmControllerTest extends WebTestCase
{
    public function testCustomersList(): void
    {
        $client = static::createClient();
        $client->request('GET', '/admin/crm/customers');

        $this->assertResponseIsSuccessful();
    }
}
```

### 6. Intégration CMS_SF

#### Navigation BackOffice

-   [ ] Ajouter les liens dans le menu admin
-   [ ] Respecter la hiérarchie CMS_SF
-   [ ] Utiliser les icônes cohérentes
-   [ ] Gérer les permissions utilisateur

#### Sécurité

-   [ ] Utiliser le système d'authentification CMS_SF
-   [ ] Définir les rôles CRM appropriés
-   [ ] Sécuriser les routes admin
-   [ ] Valider les autorisations

## Commandes de Développement

```bash
# Génération entité
docker-compose exec php bin/console make:entity

# Génération controller
docker-compose exec php bin/console make:controller

# Génération form
docker-compose exec php bin/console make:form

# Tests
docker-compose exec php bin/phpunit

# Analyse qualité
docker-compose exec php vendor/bin/phpstan analyse
```

## Template Service CRM

```php
<?php

namespace App\Service\CRM;

use App\Entity\CRM\Customer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CustomerService implements CustomerServiceInterface
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private ValidatorInterface $validator
    ) {}

    public function createCustomer(array $data): Customer
    {
        $customer = new Customer();
        // Populate customer data

        $errors = $this->validator->validate($customer);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException('Invalid customer data');
        }

        $this->entityManager->persist($customer);
        $this->entityManager->flush();

        return $customer;
    }
}
```

## Template Controller CRM

```php
<?php

namespace App\Controller\Admin\CRM;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/crm', name: 'admin_crm_')]
#[IsGranted('ROLE_CRM_MANAGER')]
class CustomerController extends AbstractController
{
    #[Route('/customers', name: 'customers_index')]
    public function index(): Response
    {
        return $this->render('admin/crm/customer/index.html.twig');
    }
}
```

## Checklist Final

-   [ ] **Entités** : Relations correctes, validations complètes
-   [ ] **Services** : Interfaces, injection dépendances, tests unitaires
-   [ ] **Controllers** : Sécurité, validation, gestion erreurs
-   [ ] **Templates** : Cohérence CMS_SF, responsive, accessibilité
-   [ ] **Tests** : Couverture 80%+, fixtures, tests fonctionnels
-   [ ] **Integration** : Navigation, permissions, workflow
-   [ ] **Documentation** : PHPDoc, README, guide utilisateur
