# Configuration Initiale JJA_DEV depuis CMS_SF

Vous devez configurer une nouvelle fonctionnalité CRM dans JJA_DEV en héritant de CMS_SF.

## Étapes de Configuration

### 1. Vérification de l'Héritage

- [ ] Confirmer que JJA_DEV est bien un fork de CMS_SF
- [ ] Vérifier que le système d'authentification fonctionne
- [ ] Tester l'accès BackOffice et FrontOffice
- [ ] Valider la configuration Docker

### 2. Structure CRM

- [ ] Créer les entités CRM dans `src/Entity/`
- [ ] Respecter les conventions de nommage CMS_SF
- [ ] Utiliser les relations Doctrine appropriées
- [ ] Ajouter les contraintes de validation

### 3. Intégration Interface

- [ ] Utiliser les templates CMS_SF comme base
- [ ] Créer des sections CRM dans le BackOffice
- [ ] Maintenir la cohérence visuelle
- [ ] Ajouter la navigation CRM

### 4. Services et Logique Métier

- [ ] Créer les services CRM dans `src/Service/`
- [ ] Implémenter les interfaces pour la testabilité
- [ ] Utiliser l'injection de dépendances Symfony
- [ ] Respecter le principe de responsabilité unique

### 5. Tests et Validation

- [ ] Écrire les tests unitaires pour les services
- [ ] Créer les tests fonctionnels pour les controllers
- [ ] Valider la couverture de tests (80% minimum)
- [ ] Tester la compatibilité avec CMS_SF

## Template de Code

### Entité CRM

```php
<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
#[ORM\Table(name: 'crm_customers')]
class Customer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 255)]
    private ?string $companyName = null;

    // Getters et setters...
}
```

### Service CRM

```php
<?php

namespace App\Service;

use App\Entity\Customer;
use App\Repository\CustomerRepository;
use Doctrine\ORM\EntityManagerInterface;

class CustomerService
{
    public function __construct(
        private CustomerRepository $customerRepository,
        private EntityManagerInterface $entityManager
    ) {}

    public function createCustomer(array $data): Customer
    {
        // Logique métier...
    }
}
```

### Controller CRM

```php
<?php

namespace App\Controller\Admin;

use App\Service\CustomerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/crm', name: 'admin_crm_')]
class CrmController extends AbstractController
{
    #[Route('/customers', name: 'customers')]
    public function customers(CustomerService $customerService): Response
    {
        // Utiliser la structure BackOffice CMS_SF
        return $this->render('admin/crm/customers.html.twig', [
            'customers' => $customerService->getAllCustomers()
        ]);
    }
}
```

## Commandes Docker

### Développement

```bash
# Démarrage environnement
docker-compose up -d

# Génération entité
docker-compose exec php bin/console make:entity

# Migration base de données
docker-compose exec php bin/console make:migration
docker-compose exec php bin/console doctrine:migrations:migrate

# Tests
docker-compose exec php bin/phpunit

# Analyse qualité
docker-compose exec php vendor/bin/phpstan analyse
```

### Validation

```bash
# Vérification compatibilité CMS_SF
docker-compose exec php bin/console debug:router
docker-compose exec php bin/console debug:container

# Tests de régression
docker-compose exec php bin/phpunit tests/
docker-compose exec php bin/console cache:clear --env=test
```

## Checklist Final

-   [ ] **Héritage** : Fonctionnalités CMS_SF conservées
-   [ ] **CRM** : Nouvelles entités et services opérationnels
-   [ ] **Interface** : Intégration BackOffice cohérente
-   [ ] **Tests** : Couverture minimum 80%
-   [ ] **Sécurité** : Permissions et validation correctes
-   [ ] **Performance** : Pas de régression
-   [ ] **Documentation** : PHPDoc et README à jour
