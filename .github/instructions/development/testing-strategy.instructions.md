---
applyTo: 'JJA_DEV/**'
---

# Stratégie de Tests JJA_DEV

## Exigences de Tests

### Couverture Obligatoire

-   **Minimum** : 80% couverture code
-   **Services** : 100% tests unitaires
-   **Controllers** : Tests fonctionnels complets
-   **Intégration** : Workflows complexes testés

### Organisation Tests

-   **Répertoire** : `tests/` correspondant à `src/`
-   **Suffixe** : Classes de test avec `Test`
-   **Groupes** : Tests organisés en suites
-   **Isolation** : Mock des dépendances externes

## Types de Tests

### Tests Unitaires

```php
// tests/Service/CRM/CustomerServiceTest.php
namespace App\Tests\Service\CRM;

use App\Entity\Customer;
use App\Service\CRM\CustomerService;
use App\Repository\CustomerRepository;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\MockObject\MockObject;

class CustomerServiceTest extends TestCase
{
    private CustomerService $customerService;
    private MockObject $customerRepository;
    private MockObject $entityManager;

    protected function setUp(): void
    {
        $this->customerRepository = $this->createMock(CustomerRepository::class);
        $this->entityManager = $this->createMock(EntityManagerInterface::class);

        $this->customerService = new CustomerService(
            $this->customerRepository,
            $this->entityManager
        );
    }

    public function testCreateCustomer(): void
    {
        $customerData = [
            'companyName' => 'Test Company',
            'email' => 'test@example.com'
        ];

        $this->entityManager
            ->expects($this->once())
            ->method('persist');

        $this->entityManager
            ->expects($this->once())
            ->method('flush');

        $customer = $this->customerService->createCustomer($customerData);

        $this->assertInstanceOf(Customer::class, $customer);
        $this->assertEquals('Test Company', $customer->getCompanyName());
    }

    public function testCreateCustomerWithInvalidData(): void
    {
        $this->expectException(\InvalidArgumentException::class);

        $this->customerService->createCustomer([]);
    }
}
```

### Tests Fonctionnels

```php
// tests/Controller/Admin/CrmControllerTest.php
namespace App\Tests\Controller\Admin;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class CrmControllerTest extends WebTestCase
{
    private $client;

    protected function setUp(): void
    {
        $this->client = static::createClient();
    }

    public function testCustomersListRequiresAuthentication(): void
    {
        $this->client->request('GET', '/admin/crm/customers');

        $this->assertResponseRedirects('/login');
    }

    public function testCustomersListWithAuthenticatedUser(): void
    {
        // Authentification utilisateur test
        $user = $this->createAuthenticatedUser();
        $this->client->loginUser($user);

        $this->client->request('GET', '/admin/crm/customers');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Gestion Clients');
    }

    public function testCreateCustomerWithValidData(): void
    {
        $user = $this->createAuthenticatedUser();
        $this->client->loginUser($user);

        $crawler = $this->client->request('GET', '/admin/crm/customers/new');

        $form = $crawler->selectButton('Créer')->form([
            'customer[companyName]' => 'Nouvelle Entreprise',
            'customer[email]' => 'nouveau@entreprise.com'
        ]);

        $this->client->submit($form);

        $this->assertResponseRedirects('/admin/crm/customers');
    }

    private function createAuthenticatedUser(): User
    {
        // Factory pour utilisateur de test
        return (new User())
            ->setEmail('admin@test.com')
            ->setRoles(['ROLE_CRM_ADMIN']);
    }
}
```

### Tests d'Intégration

```php
// tests/Integration/CrmWorkflowTest.php
namespace App\Tests\Integration;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use App\Service\CRM\CustomerService;
use App\Service\CRM\QuoteService;

class CrmWorkflowTest extends KernelTestCase
{
    public function testCompleteQuoteWorkflow(): void
    {
        self::bootKernel();

        $customerService = static::getContainer()->get(CustomerService::class);
        $quoteService = static::getContainer()->get(QuoteService::class);

        // 1. Créer client
        $customer = $customerService->createCustomer([
            'companyName' => 'Test Integration',
            'email' => 'integration@test.com'
        ]);

        // 2. Créer devis
        $quote = $quoteService->createQuote($customer, [
            'items' => [
                ['description' => 'Service 1', 'price' => 100.00]
            ]
        ]);

        // 3. Valider workflow complet
        $this->assertNotNull($customer->getId());
        $this->assertNotNull($quote->getId());
        $this->assertEquals($customer, $quote->getCustomer());
        $this->assertEquals(100.00, $quote->getTotalAmount());
    }
}
```

## Configuration Tests

### PHPUnit Configuration

```xml
<!-- phpunit.xml.dist -->
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:noNamespaceSchemaLocation="https://schema.phpunit.de/10.1/phpunit.xsd"
         bootstrap="tests/bootstrap.php"
         colors="true">

    <testsuites>
        <testsuite name="unit">
            <directory>tests/Service</directory>
            <directory>tests/Entity</directory>
        </testsuite>
        <testsuite name="functional">
            <directory>tests/Controller</directory>
        </testsuite>
        <testsuite name="integration">
            <directory>tests/Integration</directory>
        </testsuite>
    </testsuites>

    <coverage>
        <include>
            <directory suffix=".php">src</directory>
        </include>
        <exclude>
            <directory>src/DataFixtures</directory>
            <file>src/Kernel.php</file>
        </exclude>
        <report>
            <html outputDirectory="coverage"/>
            <clover outputFile="coverage/clover.xml"/>
        </report>
    </coverage>

    <php>
        <ini name="display_errors" value="1"/>
        <ini name="error_reporting" value="-1"/>
        <server name="APP_ENV" value="test" force="true"/>
        <server name="SHELL_VERBOSITY" value="-1"/>
    </php>
</phpunit>
```

### Base de Données Test

```yaml
# config/packages/test/doctrine.yaml
doctrine:
    dbal:
        dbname_suffix: '_test'
    orm:
        auto_mapping: true
```

## Fixtures et Données Test

### Fixtures PHPUnit

```php
// src/DataFixtures/Test/CustomerFixtures.php
namespace App\DataFixtures\Test;

use App\Entity\Customer;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;

class CustomerFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        for ($i = 1; $i <= 10; $i++) {
            $customer = new Customer();
            $customer->setCompanyName("Entreprise Test $i");
            $customer->setEmail("test$i@entreprise.com");

            $manager->persist($customer);
            $this->addReference("customer_$i", $customer);
        }

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['test'];
    }
}
```

## Commandes de Tests

### Exécution Tests

```bash
# Tous les tests (Symfony CLI local)
symfony console phpunit

# Tests unitaires uniquement
symfony console phpunit --testsuite=unit

# Tests avec couverture
symfony console phpunit --coverage-html coverage/

# Tests spécifiques
symfony console phpunit tests/Service/CRM/CustomerServiceTest.php

# Tests avec fixtures
symfony console doctrine:fixtures:load --group=test --env=test
symfony console phpunit --env=test
```

### Analyse Qualité

```bash
# PHPStan niveau 8 (local)
vendor/bin/phpstan analyse --level=8

# Standards de code (local)
vendor/bin/phpcs src/ tests/

# Correction automatique (local)
vendor/bin/phpcbf src/ tests/
```

## Bonnes Pratiques Tests

### Isolation Tests

-   Chaque test doit être indépendant
-   Utiliser setUp() et tearDown() appropriés
-   Mock toutes les dépendances externes
-   Base de données test séparée

### Nommage Tests

-   Méthodes descriptives : `testCreateCustomerWithValidData()`
-   Une assertion par concept testé
-   Tests négatifs : `testCreateCustomerWithInvalidData()`

### Performance Tests

-   Tests rapides (< 1 seconde unitaire)
-   Parallélisation possible
-   Éviter tests flaky
-   Cache intelligent pour fixtures

### Documentation Tests

-   Commentaires explicatifs pour logique complexe
-   Exemples d'utilisation dans tests
-   Scénarios edge cases documentés
