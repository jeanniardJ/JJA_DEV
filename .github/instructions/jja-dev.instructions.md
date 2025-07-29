---
applyTo: "JJA_DEV/**"
---

# Instructions pour GitHub Copilot - Projet JJA_DEV

## 1. Vue d'ensemble du Projet

- **Projet** : CRM basé sur Symfony 6.4, héritant du template CMS_SF.
- **Stack Technique** :
    - **Backend** : Symfony 6.4, Doctrine ORM, PHP 8.2+
    - **Frontend** : Symfony UX, Stimulus, Bootstrap 5.x (Pas de React)
    - **Base de données** : MySQL 8.0
    - **Déploiement** : Docker, GitHub Actions, OVH

## 2. Standards et Conventions

### Symfony 6.4

- Respecter la structure standard de Symfony.
- Utiliser l'injection de dépendances (constructeur de préférence).
- Suivre les standards de code PSR-12.

### Conventions de Nommage

- **Classes PHP** : `PascalCase` (ex: `CustomerController`)
- **Méthodes/Propriétés PHP** : `camelCase` (ex: `generateQuote`)
- **Tables/Colonnes BDD** : `snake_case` (ex: `customer_quotes`)
- **Fichiers de template** : `snake_case` (ex: `view_customer.html.twig`)
- **Classes CSS** : `kebab-case` avec BEM (ex: `.customer-form__input`)

### Organisation des Fichiers

```
src/
├── Controller/
│   ├── Crm/           # Contrôleurs spécifiques au CRM
│   └── Admin/         # Contrôleurs hérités du CMS_SF
├── Entity/
│   ├── Crm/           # Entités métier du CRM
│   └── User/          # Entités héritées du CMS_SF
├── Service/
│   ├── Crm/           # Services métier du CRM
│   └── Security/      # Services hérités du CMS_SF
└── Repository/
    └── Crm/           # Repositories spécifiques au CRM
```

## 3. Architecture et Héritage

- **Ne pas modifier le coeur de CMS_SF** : authentification, structure BackOffice/FrontOffice.
- **Étendre les fonctionnalités** en ajoutant des modules CRM (entités, services, controllers) dans des namespaces dédiés.
- **Le template `base.html.twig` est le seul template de base à utiliser.**

## 4. Sécurité

- **Authentification** : Utiliser le système de sécurité de Symfony hérité de CMS_SF.
- **Autorisation** : Contrôle d'accès basé sur les rôles (RBAC). Utiliser l'attribut `#[IsGranted('ROLE_CRM_USER')]`.
- **Protection des données** : Valider et assainir toutes les entrées utilisateur.
- **Secrets** : Ne jamais stocker de secrets dans le code. Utiliser les variables d'environnement (`.env.local`, GitHub Secrets).

## 5. Développement

### Workflow Git

- **Branches** : `main` (production), `develop` (développement), `feature/xxx` (fonctionnalités).
- **Processus** : `feature/xxx` -> `develop` -> `main` (via Pull Request).

### Commits

- Utiliser les **Conventional Commits**.
- **Format** : `type(scope): description` (ex: `feat(crm): add customer management`).
- **Types** : `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.

## 6. Tests

- **Couverture de code minimale** : 80%.
- **Tests unitaires** pour les services (100% de couverture visée).
- **Tests fonctionnels** pour les controllers.
- **Organisation** : Le répertoire `tests/` doit mirroirer `src/`.

### Exemple de Test Unitaire

```php
// tests/Service/CRM/CustomerServiceTest.php
namespace App\Tests\Service\CRM;

use App\Entity\Customer;
use App\Service\CRM\CustomerService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;

class CustomerServiceTest extends TestCase
{
    public function testCreateCustomer(): void
    {
        // Créer un mock pour l'EntityManager
        $entityManager = $this->createMock(EntityManagerInterface::class);
        $entityManager->expects($this->once())->method('persist');
        $entityManager->expects($this->once())->method('flush');

        $service = new CustomerService($entityManager);
        $customer = $service->createCustomer('John', 'Doe');

        $this->assertInstanceOf(Customer::class, $customer);
    }
}
```

## 7. Frontend

- **Stack** : Symfony UX, Stimulus, Bootstrap 5.
- **Build** : Webpack Encore.
- **Organisation SASS** : Utiliser BEM (`assets/styles/components/_buttons.scss`).

### Controller Stimulus

- **Un controller par fonctionnalité** (ex: `navigation-controller.js`).
- **Utilisation dans Twig** :
    ```twig
    <nav data-controller="navigation">
        <button data-action="click->navigation#toggle">Menu</button>
        <div data-navigation-target="menu">...</div>
    </nav>
    ```

## 8. Base de Données

- **Migrations** : Utiliser `symfony console make:migration` et `symfony console doctrine:migrations:migrate`.
- **Fixtures** : Utiliser `doctrine/fixtures-bundle` pour les données de test.
- **Index** : Ajouter des index sur les colonnes fréquemment interrogées pour optimiser les performances.

## 9. Fonctionnalités CRM

- **Entités** : `Customer`, `Contact`, `Lead`, `Opportunity`, `Quote`, `Invoice`.
- **Services** : `CustomerService`, `QuoteService`, etc. pour la logique métier.
- **Bundles** : Les fonctionnalités majeures comme la facturation peuvent être organisées en bundles.

## 10. API

- **Architecture** : RESTful, versionnée (`/api/v1/`).
- **Authentification** : Token JWT.
- **Réponses** : JSON standardisé.
    ```json
    {
        "status": "success",
        "data": { ... }
    }
    ```

## 11. Déploiement

- **Environnements** : `develop` (local/Docker), `main` (production/OVH).
- **CI/CD** : GitHub Actions pour les tests et le déclenchement du déploiement.
- **Production** : Utiliser les variables d'environnement pour la configuration.

## 12. Monitoring

- **Performance** : Symfony Profiler (dev), Blackfire.io (prod).
- **Logs** : Logging structuré avec Monolog (canaux `crm`, `security`).
- **Base de données** : Activer le `slow_query_log` en production.

## 13. Gestion des Styles et Stimulus dans le Backoffice

- **Point d'entrée pour le backoffice** : Utiliser exclusivement le fichier `assets/admin.js` pour importer les styles et les scripts nécessaires.
- **Organisation des fichiers SASS** : Placer tous les fichiers SASS dans le dossier `assets/styles/admin`.
- **Symfony UX et Stimulus** :
  - Utiliser les dossiers `assets/controllers/admin`, `assets/components` ou `assets/_layouts` pour les contrôleurs et composants Stimulus.
  - Le point d'entrée pour ces contrôleurs est le fichier `assets/bootstrap-admin.js`.
- **Fichiers et dossiers existants** : Tous les fichiers et dossiers mentionnés ci-dessus existent déjà dans le projet.
- **Modification interdite** : Ne pas modifier le fichier `controllers.json`.
