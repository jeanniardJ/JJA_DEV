---
applyTo: "JJA_DEV/**"
---

# Instructions Complètes - Projet JJA_DEV

> **📌 Note importante** : Ce fichier consolide toutes les instructions du projet JJA_DEV.
> Les anciens fichiers d'instructions répartis dans les sous-dossiers ont été refactorisés
> dans ce fichier unique pour simplifier la maintenance et éviter la redondance.

## Table des Matières

1. [Vue d'ensemble du projet](#vue-densemble-du-projet)
2. [Standards et conventions](#standards-et-conventions)
3. [Architecture et héritage CMS_SF](#architecture-et-héritage-cms_sf)
4. [Sécurité et authentification](#sécurité-et-authentification)
5. [Développement](#développement)
6. [Tests](#tests)
7. [Frontend et assets](#frontend-et-assets)
8. [Base de données](#base-de-données)
9. [Fonctionnalités CRM](#fonctionnalités-crm)
10. [API et intégrations](#api-et-intégrations)
11. [Déploiement](#déploiement)
12. [Monitoring et optimisation](#monitoring-et-optimisation)
13. [Plans et checklists](#plans-et-checklists)

---

## Vue d'ensemble du projet

JJA_DEV est un système CRM développé avec Symfony 6.4, héritant du template CMS_SF. Le projet combine un back office d'administration et un front office moderne avec Symfony UX et Stimulus.

### Architecture Générale

-   **Framework** : Symfony 6.4
-   **Frontend** : Bootstrap 5.x + Symfony UX + Stimulus
-   **Base de données** : MySQL 8.0
-   **Conteneurisation** : Docker + Docker Compose
-   **Déploiement** : OVH avec CI/CD GitHub Actions

### Principe d'Héritage

JJA_DEV hérite de CMS_SF comme template de base :

-   **Copie complète** : Fork du repository CMS_SF sur GitHub
-   **Conservation** : Structure authentification, BackOffice, FrontOffice
-   **Extension** : Ajout de fonctionnalités CRM spécifiques

### Architecture Frontend

**⚠️ Important** : Le projet utilise **Symfony UX avec Stimulus** pour l'interactivité JavaScript, **PAS React**.

- **Stimulus** : Controllers JavaScript légers et réactifs
- **Symfony UX** : Intégration moderne avec Symfony
- **Bootstrap 5.x** : Framework CSS responsive
- **Webpack Encore** : Build system et bundling

---

## Standards et conventions

### Standards Symfony 6.4

#### Architecture Symfony

-   Respecter la structure standard Symfony
-   Utiliser l'injection de dépendances pour tous les services
-   Configuration des services en YAML
-   Utiliser Doctrine ORM pour les opérations base de données
-   Suivre les standards PSR-12

#### Organisation des Bundles

-   Fonctionnalités Devis & Factures organisées en bundle réutilisable
-   Bundle découplé de la logique application principale
-   Structure d'espace de noms : `App\QuoteInvoiceBundle\`
-   Configuration et services du bundle appropriés

### Conventions de Nommage

#### Classes & Méthodes PHP

-   **Classes** : PascalCase (`CustomerController`, `InvoiceService`)
-   **Méthodes/Propriétés** : camelCase (`generateQuote()`, `customerData`)
-   **Tables/Colonnes DB** : snake_case (`customer_quotes`, `invoice_items`)
-   **Classes abstraites** : Préfixe `Abstract` (`AbstractDocumentGenerator`)
-   **Interfaces** : Suffixe `Interface` (`QuoteGeneratorInterface`)

#### Organisation des Fichiers

-   **Controllers** : `src/Controller/` + suffixe `Controller`
-   **Services** : `src/Service/` + suffixe `Service`
-   **Entités** : `src/Entity/` (correspondance noms tables DB)
-   **Repositories** : `src/Repository/` + suffixe `Repository`
-   **Formulaires** : `src/Form/` + suffixe `Type`

#### Assets Frontend

-   **Classes CSS** : kebab-case (`.customer-form`, `.invoice-table`)
-   **Bootstrap** : Utiliser classes Bootstrap pour cohérence visuelle
-   **Composants Stimulus** : Via Symfony UX pour interactivité
-   **Variables JS** : camelCase
-   **Styles composants** : Préfixer avec nom du composant

### Directives de Codage Spécifiques

#### Structure du Code

```php
// Structure recommandée pour les contrôleurs CRM
namespace App\Controller\Crm;

use App\Entity\Crm\{Contact, Prospect, Deal};
use App\Form\Crm\{ContactType, ProspectType};
use App\Repository\Crm\ContactRepository;
use App\Service\Crm\CrmManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/crm', name: 'crm_')]
class ContactController extends AbstractController
{
    // Implementation
}
```

#### Conventions de Nommage Spécialisées

-   **Entités CRM** : Préfixe `Crm\` dans le namespace
-   **Services** : Suffixe `Manager` ou `Service`
-   **Repositories** : Suffixe `Repository`
-   **Events** : Suffixe `Event`
-   **Listeners** : Suffixe `Listener`

#### Organisation des Fichiers par Domaine

```
src/
├── Controller/
│   ├── Crm/           # Contrôleurs CRM spécifiques
│   └── Admin/         # Hérité du CMS_SF
├── Entity/
│   ├── Crm/           # Entités métier CRM
│   └── User/          # Hérité du CMS_SF
├── Service/
│   ├── Crm/           # Services métier CRM
│   └── Security/      # Hérité du CMS_SF
└── Repository/
    └── Crm/           # Repositories CRM
```

#### Annotations et Attributs

Utiliser les attributs PHP 8+ plutôt que les annotations :

```php
// ✅ Recommandé
#[Route('/contact/{id}', name: 'contact_show', methods: ['GET'])]
#[IsGranted('ROLE_CRM_USER')]
public function show(Contact $contact): Response
```

#### Injection de Dépendances

```php
// ✅ Constructor injection privilégiée
public function __construct(
    private LoggerInterface $logger
) {}

// ✅ Method injection pour les actions spécifiques
#[Route('/export')]
public function export(CrmExportService $exportService): Response
```

---

## Architecture et héritage CMS_SF

### Composants Hérités à Conserver

#### Système d'Authentification

-   Ne **JAMAIS** modifier le système de login CMS_SF
-   Utiliser les rôles et permissions existants
-   Étendre avec des rôles CRM si nécessaire

#### Structure BackOffice/FrontOffice

-   Conserver l'architecture de navigation
-   Utiliser les templates de base
-   Ajouter des sections CRM dans la structure existante

#### Configuration Docker

-   Le `docker-compose.yaml` est déjà configuré
-   Services MySQL + PHP/Symfony opérationnels
-   Ne modifier que si extensions nécessaires

### Extensions CRM Autorisées

#### Nouvelles Entités

-   Créer dans `src/Entity/` avec préfixe CRM si nécessaire
-   Respecter les conventions de nommage CMS_SF
-   Utiliser les relations Doctrine appropriées

#### Bundles Additionnels

-   Bundle Devis/Factures : `src/Bundle/QuoteInvoiceBundle/`
-   Bundle Prospects : selon structure CMS_SF
-   Configuration dans `config/bundles.php`

#### Adaptations Interface

-   Utiliser les templates CMS_SF comme base
-   Créer des sections CRM dans le BackOffice existant
-   Maintenir la cohérence visuelle

### Règles de Développement

#### Modifications Interdites

-   ❌ Système d'authentification de base
-   ❌ Structure principale des controllers CMS_SF
-   ❌ Configuration Docker de base
-   ❌ Routes administratives principales

#### Modifications Autorisées

-   ✅ Ajout d'entités CRM
-   ✅ Nouveaux controllers dans espaces de noms séparés
-   ✅ Templates spécifiques CRM
-   ✅ Services métier CRM
-   ✅ Bundles additionnels

### Consolidation des Templates

#### Problème Résolu

Il y avait une duplication de templates de base pour le front office :

1. **`base.html.twig`** : Template principal hérité du CMS_SF avec navigation Stimulus
2. **`frontoffice_base.html.twig`** : Template dupliqué avec navigation Bootstrap classique

#### Solution Appliquée

Le template `frontoffice_base.html.twig` a été déplacé vers `templates/_archive/` car :

-   Aucun template ne l'utilise plus
-   Il créait une duplication inutile de la logique de base
-   L'architecture héritée du CMS_SF doit être respectée

#### Architecture des Templates

```text
templates/
├── base.html.twig              # Template principal front office
├── _head.html.twig            # Head commun
├── _footer.html.twig          # Footer commun
├── nav.html.twig              # Navigation Stimulus
├── home/
│   └── frontoffice.html.twig  # Page d'accueil (extends base.html.twig)
├── contact/
│   └── index.html.twig        # Page contact (extends base.html.twig)
└── _archive/
    └── frontoffice_base.html.twig  # Ancien template archivé
```

---

## Sécurité et authentification

### Système d'Authentification Hérité

#### Base CMS_SF

-   **Conservation obligatoire** : Système de login CMS_SF
-   **Utilisation** : Composant Symfony Security
-   **Rôles** : Structure RBAC existante
-   **Permissions** : Séparation Front Office / Back Office

#### Extensions CRM Autorisées

-   Ajouter rôles CRM spécifiques si nécessaire
-   Étendre permissions pour fonctionnalités métier
-   Maintenir compatibilité avec système de base

### Standards de Sécurité

#### Authentification & Autorisation

-   Utiliser composant Symfony Security (hérité)
-   Implémenter contrôle d'accès basé sur les rôles (RBAC)
-   Séparer permissions front office vs back office
-   Sécuriser toutes fonctions administratives

#### Protection des Données

-   Assainir toutes les entrées utilisateur
-   Utiliser HTTPS pour toutes communications
-   Implémenter protection CSRF sur formulaires
-   Suivre directives RGPD pour données clients

### Configuration Sécurité

#### Protection Routes

```php
// Annotations de sécurité pour controllers CRM
#[IsGranted('ROLE_CRM_MANAGER')]
class CrmController extends AbstractController
{
    // Implementation
}
```

#### Validation Entrées

```php
// Service de validation sécurisée
class SecureInputService
{
    public function sanitizeInput(string $input): string
    {
        return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
    }
}
```

### Bonnes Pratiques Sécurité

#### Authentification

-   Ne jamais stocker mots de passe en clair
-   Utiliser hashage sécurisé (bcrypt/argon2)
-   Implémenter limitation tentatives connexion
-   Session sécurisée avec timeout approprié

#### Autorisation

-   Vérifier permissions à chaque action sensible
-   Principe du moindre privilège
-   Audit trail pour actions administratives
-   Séparation des environnements dev/prod

#### Conformité RGPD

-   Consentement explicite pour collecte données
-   Droit à l'effacement (oubli)
-   Portabilité des données clients
-   Chiffrement données sensibles
-   Politique de confidentialité claire

### Gestion des Secrets et Accès Sensibles

#### Stockage des Secrets

-   **Jamais dans le code source ou git !**
-   Utiliser :
    -   `.env.local` (local uniquement, jamais commité)
    -   GitHub Secrets (pour CI/CD)
    -   OVH Manager (variables d'environnement)
    -   Vault ou équivalent pour les accès critiques

#### Rotation et Changement de Secrets

-   Changer régulièrement les mots de passe/API keys
-   Révoquer les accès inutilisés
-   Documenter la procédure de rotation

#### Accès et Audit

-   Limiter l'accès aux secrets (principe du moindre privilège)
-   Tenir un journal des accès/rotations
-   Utiliser des outils d'audit (GitGuardian, TruffleHog)

#### Bonnes Pratiques

-   Jamais de secrets dans les logs, tickets, PR ou issues publiques
-   Utiliser des variables d'environnement partout (Symfony, Node, CI/CD)
-   Automatiser la détection de secrets dans le code (GitHub Actions, pre-commit hook)

#### Outils Recommandés

-   [Symfony dotenv](https://symfony.com/doc/current/configuration.html#configuration-env-vars)
-   [GitHub Actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
-   [GitGuardian](https://www.gitguardian.com/)

---

## Développement

### Workflow de Développement

#### Stratégie de Branches

```
main/master (Production OVH) ← Pull Request ← develop (Développement) ← feature/xxx
```

#### Branches Principales

-   **`develop`** : Branche de développement principal
-   **`main/master`** : Branche de production (déploiement OVH)
-   **`feature/xxx`** : Branches de fonctionnalités

#### Workflow Complet

##### 1. Création Feature

```bash
# Partir de develop
git checkout develop
git pull origin develop

# Créer branche feature
git checkout -b feature/issue-123-customer-management

# Démarrage MySQL pour développement
docker-compose up -d mysql
```

##### 2. Développement Local

```bash
# Tests pendant développement (Symfony CLI local)
symfony console phpunit

# Analyse qualité code (PHP local)
vendor/bin/phpstan analyse

# Validation standards (PHP local)
vendor/bin/phpcs src/
```

##### 3. Intégration

```bash
# Commit conventionnel
git add .
git commit -m "feat(crm): add customer management functionality

- Add Customer entity with validation
- Implement CustomerService with CRUD operations
- Create admin controller for customer management
- Add unit tests with 85% coverage

Closes #123"

# Push feature
git push origin feature/issue-123-customer-management
```

#### Standards de Commits

##### Format Conventionnel

```
type(scope): description

body (optionnel)

footer (optionnel)
```

##### Types Autorisés

-   **feat** : Nouvelle fonctionnalité
-   **fix** : Correction bug
-   **docs** : Documentation
-   **style** : Formatage code
-   **refactor** : Refactorisation
-   **test** : Ajout/modification tests
-   **chore** : Maintenance

---

## Tests

### Stratégie de Tests

#### Exigences de Tests

-   **Minimum** : 80% couverture code
-   **Services** : 100% tests unitaires
-   **Controllers** : Tests fonctionnels complets
-   **Intégration** : Workflows complexes testés

#### Organisation Tests

-   **Répertoire** : `tests/` correspondant à `src/`
-   **Suffixe** : Classes de test avec `Test`
-   **Groupes** : Tests organisés en suites
-   **Isolation** : Mock des dépendances externes

### Types de Tests

#### Tests Unitaires

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
    private MockObject $entityManager;
    private MockObject $repository;

    protected function setUp(): void
    {
        $this->entityManager = $this->createMock(EntityManagerInterface::class);
        $this->repository = $this->createMock(CustomerRepository::class);

        $this->customerService = new CustomerService(
            $this->entityManager,
            $this->repository
        );
    }

    public function testCreateCustomer(): void
    {
        // Test implementation
    }
}
```

#### Tests Fonctionnels

```php
// tests/Controller/Admin/CrmControllerTest.php
namespace App\Tests\Controller\Admin;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\Response;

class CrmControllerTest extends WebTestCase
{
    public function testCustomerListAccess(): void
    {
        $client = static::createClient();

        // Test authentication and access
        $client->request('GET', '/admin/crm/customers');

        $this->assertEquals(Response::HTTP_REDIRECT, $client->getResponse()->getStatusCode());
    }
}
```

#### Tests d'Intégration

```php
// tests/Integration/CrmWorkflowTest.php
namespace App\Tests\Integration;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use App\Service\CRM\CustomerService;
use App\Service\CRM\QuoteService;

class CrmWorkflowTest extends KernelTestCase
{
    public function testCompleteCustomerWorkflow(): void
    {
        self::bootKernel();

        $customerService = static::getContainer()->get(CustomerService::class);
        $quoteService = static::getContainer()->get(QuoteService::class);

        // Test complete workflow
    }
}
```

### Configuration Tests

#### Base de Données Test

```yaml
# config/packages/test/doctrine.yaml
doctrine:
    dbal:
        # Use SQLite for tests
        url: "%env(resolve:DATABASE_URL)%"
    orm:
        auto_generate_proxy_classes: true
```

#### Fixtures et Données Test

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
        $customer = new Customer();
        $customer->setName('Test Customer');
        $customer->setEmail('test@example.com');

        $manager->persist($customer);
        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['test'];
    }
}
```

---

## Frontend et assets

### Technologies Frontend

#### Stack Technique

-   **Bootstrap 5.x** : Framework CSS responsive
-   **Symfony UX** : Intégration moderne JavaScript
-   **Stimulus** : Controllers JavaScript réactifs
-   **Webpack Encore** : Build system et bundling

### Organisation des Assets Frontend

#### Structure SASS/SCSS - Organisation BEM

Le projet utilise une architecture SASS simple basée sur **BEM (Block Element Modifier)** :

```
assets/styles/
├── base/                    # Styles de base et variables
│   ├── _variables.scss      # Variables globales (couleurs, breakpoints)
│   └── _base.scss          # Reset CSS et styles HTML de base
├── components/             # Composants réutilisables (BEM)
│   ├── _navigation.scss    # .navbar-custom, .navbar-custom__item
│   ├── _buttons.scss       # .btn-custom, .btn-custom--primary
│   ├── _forms.scss         # .form-field, .form-field__input
│   ├── _cards.scss         # .card-custom, .card-custom__header
│   └── _modals.scss        # .modal-custom, .modal-custom__dialog
├── layouts/                # Sections de mise en page (BEM)
│   ├── _header.scss        # .site-header, .site-header__logo
│   ├── _footer.scss        # .site-footer, .site-footer__links
│   └── _main.scss          # .main-content, .main-content__wrapper
└── pages/                  # Styles spécifiques aux pages (BEM)
    └── _frontoffice.scss   # .frontoffice, .frontoffice__section
```

#### Points d'entrée SASS

1. **`app.scss`** - Application principale (back office)
2. **`frontoffice.scss`** - Front office moderne avec Bootstrap personnalisé

#### Structure JavaScript

```
assets/
├── app.js              # JavaScript principal (admin/back office)
├── admin.js            # Scripts spécifiques à l'administration
└── frontoffice.js      # Scripts du front office moderne
```

**Important** : Un seul fichier JavaScript par contexte pour éviter les doublons et conflits.

#### Symfony UX Stimulus

##### Configuration Stimulus

```javascript
// assets/bootstrap.js
import { startStimulusApp } from '@symfony/stimulus-bridge';

export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    true,
    /\.[jt]sx?$/
));
```

##### Exemple de Controller Stimulus

```javascript
// assets/controllers/navigation_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["menu", "toggle"];
    static classes = ["open"];

    connect() {
        console.log("Navigation controller connected");
    }

    toggle() {
        this.menuTarget.classList.toggle(this.openClass);
    }

    close(event) {
        if (!this.element.contains(event.target)) {
            this.menuTarget.classList.remove(this.openClass);
        }
    }
}
```

##### Utilisation dans les Templates

```twig
{# templates/nav.html.twig #}
<nav data-controller="navigation"
     data-navigation-open-class="show"
     data-action="click@window->navigation#close">
    
    <button data-navigation-target="toggle"
            data-action="click->navigation#toggle"
            class="navbar-toggler">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    <div data-navigation-target="menu" class="navbar-collapse">
        <!-- Menu items -->
    </div>
</nav>
```

##### Bonnes Pratiques Stimulus

- **Un controller par fonctionnalité** : navigation, form, modal, etc.
- **Nommage explicite** : `data-controller="customer-form"`
- **Actions spécifiques** : `data-action="click->modal#close"`
- **Targets clairs** : `data-modal-target="dialog"`
- **Classes CSS modulaires** : `data-modal-open-class="is-open"`

---

## Base de données

### Gestion des Bases de Données

#### Commandes MySQL

##### Démarrage MySQL

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

##### Gestion des Migrations

```bash
# Exécution migrations (Symfony CLI local)
symfony console doctrine:migrations:migrate

# Génération nouvelle migration
symfony console make:migration

# Fixtures de développement
symfony console doctrine:fixtures:load
```

#### Migrations & Rollback

##### Migrations Doctrine

-   Utiliser `symfony console make:migration` pour générer
-   Toujours relire la migration générée
-   Appliquer avec `symfony console doctrine:migrations:migrate`
-   Versionner les migrations dans git

##### Rollback de Migration

```bash
# Pour annuler la dernière migration
symfony console doctrine:migrations:migrate prev

# Pour cibler une version précise
symfony console doctrine:migrations:migrate YYYYMMDDHHMMSS
```

##### Backup & Restauration

```bash
# Sauvegarder avant toute migration majeure
mysqldump -u user -p dbname > backup.sql

# Restaurer si besoin
mysql -u user -p dbname < backup.sql
```

##### Gestion des Conflits de Migration

-   Toujours rebaser les branches feature avant merge
-   En cas de conflit, fusionner les fichiers de migration manuellement
-   Vérifier l'état de la base après rollback

##### Anonymisation des Données

```bash
# Pour tests/staging - anonymiser les données sensibles
symfony console app:anonymize-data --env=test
```

#### Conventions et Optimisations

##### Conventions de Nommage

-   **Tables** : snake_case (`customer_quotes`, `invoice_items`)
-   **Index** : Préfixe `idx_` (`idx_contacts_search`)
-   **Clés étrangères** : Préfixe `fk_` (`fk_contact_customer`)

##### Index Strategy

```sql
-- Index optimisés pour le CRM
CREATE INDEX idx_contacts_search ON crm_contacts(last_name, first_name, company);
CREATE INDEX idx_contacts_status ON crm_contacts(status, created_at);
CREATE INDEX idx_deals_pipeline ON crm_deals(stage, value, created_at);

-- Optimisation des requêtes fréquentes
OPTIMIZE TABLE crm_contacts;
OPTIMIZE TABLE crm_deals;
OPTIMIZE TABLE user;
```

##### Configuration Doctrine

```yaml
# config/packages/doctrine.yaml
doctrine:
    dbal:
        url: "%env(resolve:DATABASE_URL)%"
        types:
            uuid: Ramsey\Uuid\Doctrine\UuidType
    orm:
        auto_generate_proxy_classes: true
        naming_strategy: doctrine.orm.naming_strategy.underscore_number_aware
        auto_mapping: true
        mappings:
            App:
                is_bundle: false
                type: annotation
                dir: "%kernel.project_dir%/src/Entity"
                prefix: 'App\Entity'
                alias: App
```

---

## Fonctionnalités CRM

### Architecture CRM

#### Structure Entités CRM

```
src/Entity/CRM/
├── Customer.php          # Clients
├── Contact.php          # Contacts clients
├── Lead.php             # Prospects/Leads
├── Opportunity.php      # Opportunités commerciales
├── Quote.php            # Devis
├── Invoice.php          # Factures
└── Project.php          # Projets/Contrats
```

#### Services CRM

```
src/Service/CRM/
├── CustomerService.php      # Gestion clients
├── LeadService.php         # Gestion prospects
├── OpportunityService.php  # Pipeline commercial
├── QuoteService.php        # Génération devis
├── InvoiceService.php      # Facturation
└── ReportingService.php    # Reporting/Analytics
```

### Structure des Données CRM

#### Hiérarchie des Entités

```text
App\Entity\Crm\
├── Contact.php        # Contact principal
├── Prospect.php       # Prospect héritant de Contact
├── Customer.php       # Client héritant de Contact
├── Deal.php           # Opportunité commerciale
├── Activity.php       # Activités/Tâches
├── Note.php           # Notes attachées
├── Document.php       # Documents/Fichiers
├── Pipeline.php       # Pipelines de vente
├── Stage.php          # Étapes de pipeline
├── Source.php         # Sources de prospects
├── Category.php       # Catégories/Tags
└── CustomField.php    # Champs personnalisés
```

#### Exemple d'Entité Contact

```php
<?php
// src/Entity/CRM/Contact.php

namespace App\Entity\CRM;

use App\Repository\CRM\ContactRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
#[ORM\Table(name: 'crm_contacts')]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 100)]
    private ?string $firstName = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank]
    #[Assert\Length(max: 100)]
    private ?string $lastName = null;

    #[ORM\Column(length: 255, unique: true)]
    #[Assert\NotBlank]
    #[Assert\Email]
    private ?string $email = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $phone = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $company = null;

    #[ORM\Column(length: 20)]
    #[Assert\Choice(choices: ['prospect', 'customer', 'inactive'])]
    private string $status = 'prospect';

    #[ORM\Column]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column]
    private \DateTime $updatedAt;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: Deal::class)]
    private Collection $deals;

    public function __construct()
    {
        $this->deals = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTime();
    }

    // Getters and setters...
}
```

### Développement CRM

#### Service Customer

```php
<?php
// src/Service/CRM/CustomerService.php

namespace App\Service\CRM;

use App\Entity\CRM\Customer;
use App\Repository\CRM\CustomerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CustomerService implements CustomerServiceInterface
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private CustomerRepository $customerRepository,
        private ValidatorInterface $validator
    ) {}

    public function createCustomer(array $data): Customer
    {
        $customer = new Customer();
        $customer->setFirstName($data['firstName']);
        $customer->setLastName($data['lastName']);
        $customer->setEmail($data['email']);
        $customer->setPhone($data['phone'] ?? null);
        $customer->setCompany($data['company'] ?? null);

        $errors = $this->validator->validate($customer);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException('Validation failed');
        }

        $this->entityManager->persist($customer);
        $this->entityManager->flush();

        return $customer;
    }

    public function updateCustomer(Customer $customer, array $data): Customer
    {
        foreach ($data as $field => $value) {
            $setter = 'set' . ucfirst($field);
            if (method_exists($customer, $setter)) {
                $customer->$setter($value);
            }
        }

        $this->entityManager->flush();

        return $customer;
    }

    public function deleteCustomer(Customer $customer): void
    {
        $this->entityManager->remove($customer);
        $this->entityManager->flush();
    }

    public function findActiveCustomers(): array
    {
        return $this->customerRepository->findBy(['status' => 'active']);
    }
}
```

### Création de Bundles

#### Bundle Devis & Factures

##### Structure Bundle

```
src/Bundle/QuoteInvoiceBundle/
├── QuoteInvoiceBundle.php           # Classe principale bundle
├── DependencyInjection/             # Configuration DI
│   ├── Configuration.php            # Configuration bundle
│   └── QuoteInvoiceBundleExtension.php
├── Controller/                      # Controllers bundle
│   ├── QuoteController.php
│   └── InvoiceController.php
├── Entity/                          # Entités bundle
│   ├── Quote.php
│   ├── QuoteItem.php
│   ├── Invoice.php
│   └── InvoiceItem.php
├── Service/                         # Services bundle
│   ├── QuoteService.php
│   ├── InvoiceService.php
│   ├── PdfGeneratorService.php
│   └── EmailService.php
├── Form/                           # Formulaires
│   ├── QuoteType.php
│   └── InvoiceType.php
├── Repository/                     # Repositories
│   ├── QuoteRepository.php
│   └── InvoiceRepository.php
├── Resources/
│   ├── config/
│   │   ├── services.yaml           # Services bundle
│   │   └── routes.yaml             # Routes bundle
│   └── views/                      # Templates bundle
│       ├── quote/
│       └── invoice/
└── Tests/                          # Tests bundle
    └── Controller/
```

##### Classe Principale Bundle

```php
<?php
// src/Bundle/QuoteInvoiceBundle/QuoteInvoiceBundle.php

namespace App\Bundle\QuoteInvoiceBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class QuoteInvoiceBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
```

---

## API et intégrations

### Architecture API

#### Structure RESTful

```
/api/v1/
├── /contacts          # CRUD des contacts
├── /prospects         # Gestion des prospects
├── /deals             # Opportunités commerciales
├── /activities        # Activités et tâches
├── /reports           # Rapports et statistiques
└── /webhooks          # Points d'entrée webhook
```

#### Standards API

##### Format des Réponses

```json
{
    "status": "success|error",
    "data": {
        "id": 123,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com"
    },
    "meta": {
        "total": 100,
        "page": 1,
        "limit": 20
    },
    "errors": []
}
```

##### Codes de Statut HTTP

```php
// src/Controller/Api/BaseApiController.php
abstract class BaseApiController extends AbstractController
{
    protected function successResponse(mixed $data, int $status = 200): JsonResponse
    {
        return new JsonResponse([
            'status' => 'success',
            'data' => $data
        ], $status);
    }

    protected function errorResponse(string $message, int $status = 400): JsonResponse
    {
        return new JsonResponse([
            'status' => 'error',
            'errors' => [$message]
        ], $status);
    }
}
```

### Authentification API

#### Token JWT

```php
// src/Security/JwtTokenManager.php
class JwtTokenManager
{
    public function __construct(
        private string $secretKey,
        private int $ttl = 3600
    ) {}

    public function generateToken(User $user): string
    {
        $payload = [
            'user_id' => $user->getId(),
            'email' => $user->getEmail(),
            'exp' => time() + $this->ttl
        ];

        return JWT::encode($payload, $this->secretKey, 'HS256');
    }

    public function validateToken(string $token): ?array
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secretKey, 'HS256'));
            return (array) $decoded;
        } catch (\Exception $e) {
            return null;
        }
    }
}
```

### Contrôleurs API CRM

#### Gestion des Contacts

```php
// src/Controller/Api/ContactController.php
#[Route('/api/v1/contacts', name: 'api_contacts_')]
class ContactController extends BaseApiController
{
    public function __construct(
        private ContactService $contactService
    ) {}

    #[Route('', name: 'list', methods: ['GET'])]
    public function list(Request $request): JsonResponse
    {
        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 20);

        $contacts = $this->contactService->getPaginatedContacts($page, $limit);

        return $this->successResponse($contacts);
    }

    #[Route('', name: 'create', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        try {
            $contact = $this->contactService->createContact($data);
            return $this->successResponse($contact, 201);
        } catch (\Exception $e) {
            return $this->errorResponse($e->getMessage());
        }
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $contact = $this->contactService->getContact($id);

        if (!$contact) {
            return $this->errorResponse('Contact not found', 404);
        }

        return $this->successResponse($contact);
    }
}
```

### Webhooks et Intégrations

#### Système de Webhooks

```php
// src/Service/Webhook/WebhookManager.php
class WebhookManager
{
    public function __construct(
        private HttpClientInterface $httpClient,
        private LoggerInterface $logger
    ) {}

    public function sendWebhook(string $url, array $data, array $headers = []): bool
    {
        try {
            $response = $this->httpClient->request('POST', $url, [
                'json' => $data,
                'headers' => array_merge([
                    'Content-Type' => 'application/json',
                    'User-Agent' => 'JJA-DEV-CRM/1.0'
                ], $headers),
                'timeout' => 30
            ]);

            return $response->getStatusCode() < 400;
        } catch (\Exception $e) {
            $this->logger->error('Webhook delivery failed', [
                'url' => $url,
                'error' => $e->getMessage()
            ]);
            return false;
        }
    }
}
```

---

## Déploiement

### Architecture de Déploiement

#### Environnements

-   **Développement** : Docker local (branche `develop`)
-   **Production** : OVH (branche `main/master`)
-   **Trigger** : Pull Request validée vers `main/master`
-   **Méthode** : GitHub Actions + Webhooks OVH

#### Workflow Git → OVH

```
feature/xxx → develop → Pull Request → main/master → GitHub Actions → OVH
```

### Configuration CI/CD

#### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy JJA_DEV to OVH

on:
    push:
        branches: [main, master]

env:
    PHP_VERSION: "8.2"
    NODE_VERSION: "18"

jobs:
    tests:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3

            - name: Setup PHP
              uses: shivammathur/setup-php@v2
              with:
                  php-version: ${{ env.PHP_VERSION }}
                  extensions: pdo, pdo_mysql, intl

            - name: Install Dependencies
              run: composer install --no-dev --optimize-autoloader

            - name: Run Tests
              run: php bin/phpunit

            - name: Static Analysis
              run: vendor/bin/phpstan analyse src --level=8

    deploy:
        needs: tests
        runs-on: ubuntu-latest
        steps:
            - name: Deploy to OVH
              run: |
                  curl -X POST ${{ secrets.OVH_WEBHOOK_URL }} \
                    -H "Authorization: Bearer ${{ secrets.OVH_WEBHOOK_TOKEN }}" \
                    -H "Content-Type: application/json" \
                    -d '{"ref": "${{ github.ref }}", "commit": "${{ github.sha }}"}'
```

### Configuration OVH

#### Variables Production

```env
# .env.prod (sur serveur OVH)
APP_ENV=prod
APP_DEBUG=false
APP_SECRET=your-production-secret

# Database
DATABASE_URL=mysql://prod_user:prod_password@localhost:3306/jja_dev_prod

# Cache
REDIS_URL=redis://localhost:6379

# Mailer
MAILER_DSN=smtp://your-smtp-config

# CRM specific
CRM_API_ENDPOINT=https://api.crm.your-domain.com
CRM_API_KEY=your-crm-api-key
```

### Procédure de Déploiement

#### Checklist Pré-Déploiement

-   [ ] **Tests** : Tous les tests passent (PHPUnit)
-   [ ] **Analyse** : PHPStan niveau 8 sans erreurs
-   [ ] **Standards** : PHPCS PSR-12 conforme
-   [ ] **Sécurité** : Scan vulnérabilités OK
-   [ ] **Performance** : Profiling satisfaisant
-   [ ] **Database** : Migrations testées
-   [ ] **Assets** : Build production optimisé
-   [ ] **Configuration** : Variables d'environnement validées

#### Étapes Déploiement

1. **Validation locale** : Tests + qualité code
2. **Merge vers main** : Via Pull Request approuvée
3. **CI/CD automatique** : GitHub Actions
4. **Webhook OVH** : Déclenchement déploiement
5. **Vérification** : Health check automatique

### Configuration de Production

#### Variables d'Environnement

```bash
# Configuration OVH Production
DATABASE_URL="mysql://user:password@host:3306/jja_dev_prod"
APP_ENV=prod
APP_DEBUG=false
APP_SECRET="your-production-secret"

# Mailer Configuration
MAILER_DSN="smtp://smtp.ovh.com:587"
MAILER_FROM="noreply@jja-dev.com"

# Redis Cache (si disponible)
REDIS_URL="redis://127.0.0.1:6379"

# API Keys
CRM_API_KEY="your-crm-api-key"
ANALYTICS_TOKEN="your-analytics-token"
```

#### Optimisations Symfony

```bash
# Réchauffage du cache
php bin/console cache:warmup --env=prod

# Optimisation de l'autoloader
composer dump-autoload --optimize --classmap-authoritative

# Compilation des conteneurs
php bin/console cache:pool:clear cache.global_clearer
```

---

## Monitoring et optimisation

### Architecture de Monitoring

#### Stack de Monitoring

```
Monitoring Stack:
├── Application Performance
│   ├── Symfony Profiler (dev)
│   ├── Blackfire.io (staging/prod)
│   └── New Relic / DataDog (prod)
├── Infrastructure
│   ├── Docker Stats
│   ├── System Metrics (CPU, RAM, Disk)
│   └── Network Monitoring
├── Base de Données
│   ├── MySQL Slow Query Log
│   ├── Performance Schema
│   └── Query Analysis
├── Frontend
│   ├── Google Lighthouse
│   ├── Web Vitals
│   └── Real User Monitoring
└── Business Metrics
    └── Conversion Tracking
```

### Configuration du Monitoring

#### Symfony Profiler Avancé

```yaml
# config/packages/dev/web_profiler.yaml
web_profiler:
    toolbar: true
    intercept_redirects: false

# config/packages/framework.yaml
framework:
    profiler:
        only_exceptions: false
        collect_serializer_data: true
```

#### Custom Data Collector

```php
// src/DataCollector/CrmDataCollector.php
namespace App\DataCollector;

use Symfony\Bundle\FrameworkBundle\DataCollector\AbstractDataCollector;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class CrmDataCollector extends AbstractDataCollector
{
    public function collect(Request $request, Response $response, \Throwable $exception = null): void
    {
        $this->data = [
            'crm_queries' => $this->getCrmQueries(),
            'cache_hits' => $this->getCacheHits(),
            'api_calls' => $this->getApiCalls()
        ];
    }

    public function getName(): string
    {
        return 'app.crm_collector';
    }

    public function reset(): void
    {
        $this->data = [];
    }
}
```

### Optimisation Base de Données

#### Configuration MySQL Production

```sql
-- Configuration MySQL pour JJA_DEV Production
-- /etc/mysql/mysql.conf.d/jja-dev.cnf

[mysqld]
# Optimisations générales
innodb_buffer_pool_size = 2G
innodb_log_file_size = 256M
innodb_log_buffer_size = 64M
innodb_flush_log_at_trx_commit = 2

# Optimisations pour CRM
innodb_file_per_table = 1
innodb_open_files = 300
table_open_cache = 400
thread_cache_size = 16

# Query Cache (si MySQL < 8.0)
query_cache_type = 1
query_cache_size = 128M
query_cache_limit = 2M

# Slow Query Log
slow_query_log = 1
slow_query_log_file = /var/log/mysql/mysql-slow.log
long_query_time = 1
log_queries_not_using_indexes = 1

# Performance Schema
performance_schema = 1
performance_schema_max_table_instances = 400
```

#### Optimisation des Requêtes

```php
// src/Repository/Crm/ContactRepository.php
class ContactRepository extends ServiceEntityRepository
{
    public function findContactsWithDealsOptimized(): array
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'd')
            ->leftJoin('c.deals', 'd')
            ->where('c.status = :status')
            ->setParameter('status', 'active')
            ->orderBy('c.lastName', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function getContactStatistics(): array
    {
        return $this->createQueryBuilder('c')
            ->select('
                COUNT(c.id) as total,
                COUNT(CASE WHEN c.status = :prospect THEN 1 END) as prospects,
                COUNT(CASE WHEN c.status = :customer THEN 1 END) as customers
            ')
            ->setParameter('prospect', 'prospect')
            ->setParameter('customer', 'customer')
            ->getQuery()
            ->getSingleResult();
    }
}
```

#### Cache Intelligent

```php
// src/Service/Crm/CrmCacheManager.php
class CrmCacheManager
{
    public function __construct(
        private CacheInterface $cache,
        private int $defaultTtl = 3600
    ) {}

    public function getContactStats(): array
    {
        return $this->cache->get('crm.contact.stats', function (ItemInterface $item) {
            $item->expiresAfter($this->defaultTtl);

            // Expensive operation
            return $this->contactRepository->getContactStatistics();
        });
    }

    public function invalidateContactCache(): void
    {
        $this->cache->delete('crm.contact.stats');
    }
}
```

### Logging Structuré

```yaml
# config/packages/monolog.yaml
monolog:
    channels: ["crm", "security", "performance"]
    handlers:
        main:
            type: rotating_file
            path: "%kernel.logs_dir%/%kernel.environment%.log"
            level: info
            max_files: 10
            formatter: monolog.formatter.json

        crm:
            type: rotating_file
            path: "%kernel.logs_dir%/crm.log"
            level: info
            channels: ["crm"]
            max_files: 30

        security:
            type: rotating_file
            path: "%kernel.logs_dir%/security.log"
            level: warning
            channels: ["security"]
            max_files: 30
```

---

## Plans et checklists

### Plan & Checklist – Base du projet

#### Plan

1. Définir les standards Symfony et conventions de nommage.
2. Mettre en place la sécurité (héritage CMS_SF, RBAC, RGPD).
3. Documenter l'héritage et les règles de modification du socle CMS_SF.

#### Checklist

-   [ ] Standards Symfony appliqués (PSR-12, structure, bundles)
-   [ ] Sécurité conforme (RBAC, CSRF, RGPD)
-   [ ] Documentation claire sur l'héritage CMS_SF
-   [ ] Aucun secret dans le code source

### Plan & Checklist – Architecture

#### Plan

1. Analyser la duplication des templates.
2. Unifier l'architecture des templates (base, nav, footer).
3. Archiver les templates obsolètes.

#### Checklist

-   [ ] Un seul template de base front office
-   [ ] Navigation centralisée (Stimulus ou Twig)
-   [ ] Templates obsolètes archivés
-   [ ] Documentation de la structure des templates

### Plan & Checklist – Développement

#### Plan

1. Définir la stratégie de tests (unitaires, fonctionnels, intégration).
2. Organiser les assets frontend (BEM, Bootstrap, Stimulus).
3. Rédiger les règles de codage (PHP, JS, CSS).
4. Mettre en place le workflow Git (branches, conventions de commit).

#### Checklist

-   [ ] Stratégie de tests documentée et suivie
-   [ ] Structure des assets conforme (BEM, points d'entrée)
-   [ ] Règles de codage respectées (PHP, JS, CSS)
-   [ ] Workflow Git appliqué (feature, develop, main)
-   [ ] Commits conventionnels

### Plan & Checklist – Features (CRM, Bundles, API)

#### Plan

1. Définir la structure des entités CRM et leur évolution.
2. Organiser le développement des bundles (structure, services, tests).
3. Documenter les intégrations API (standards, sécurité, tests).

#### Checklist

-   [ ] Structure des entités CRM à jour et documentée
-   [ ] Bundles organisés et découplés
-   [ ] Intégrations API sécurisées et testées
-   [ ] Documentation des endpoints et schémas

### Plan & Checklist – Base de données

#### Plan

1. Définir les conventions de nommage et d'indexation.
2. Documenter les commandes de gestion (migrations, fixtures).
3. Optimiser les requêtes et la structure (index, relations).

#### Checklist

-   [ ] Conventions de nommage respectées (snake_case)
-   [ ] Index essentiels en place
-   [ ] Commandes de gestion documentées
-   [ ] Optimisations appliquées (requêtes, index)

### Plan & Checklist – Déploiement

#### Plan

1. Définir la configuration de production (env, sécurité, cache).
2. Mettre en place le workflow CI/CD (GitHub Actions, OVH).
3. Documenter la procédure de déploiement et de rollback.
4. Prévoir le monitoring et l'optimisation post-déploiement.

#### Checklist

-   [ ] Variables d'environnement sécurisées
-   [ ] CI/CD opérationnel (tests, build, déploiement)
-   [ ] Procédure de déploiement claire
-   [ ] Monitoring et alertes en place
-   [ ] Procédure de rollback testée

---

## Conclusion

Ce document consolide toutes les instructions techniques essentielles pour le projet JJA_DEV. Il sert de référence unique pour :

-   **Développeurs** : Standards, architecture, bonnes pratiques
-   **DevOps** : Configuration, déploiement, monitoring
-   **Product Owners** : Fonctionnalités CRM, API, intégrations
-   **QA** : Stratégie de tests, validation, checklists

Pour toute question ou suggestion d'amélioration, contactez l'équipe technique JJA_DEV.

---

_Dernière mise à jour : 25 juin 2025_
