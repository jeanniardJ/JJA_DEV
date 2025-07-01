# Instructions - Directives de Codage JJA_DEV

## Vue d'ensemble

Ce document définit les directives de codage spécifiques au projet JJA_DEV, complétant les standards Symfony de base.

## Structure du Code

### Organisation des Contrôleurs

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
    public function __construct(
        private CrmManager $crmManager,
        private ContactRepository $contactRepository
    ) {}
}
```

### Conventions de Nommage

-   **Entités CRM** : Préfixe `Crm\` dans le namespace
-   **Services** : Suffixe `Manager` ou `Service`
-   **Repositories** : Suffixe `Repository`
-   **Events** : Suffixe `Event`
-   **Listeners** : Suffixe `Listener`

### Organisation des Fichiers

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

## Standards de Code PHP

### Annotations et Attributs

Utiliser les attributs PHP 8+ plutôt que les annotations :

```php
// ✅ Recommandé
#[Route('/contact/{id}', name: 'contact_show', methods: ['GET'])]
#[IsGranted('ROLE_CRM_USER')]
public function show(Contact $contact): Response

// ❌ Éviter
/**
 * @Route("/contact/{id}", name="contact_show", methods={"GET"})
 * @IsGranted("ROLE_CRM_USER")
 */
```

### Injection de Dépendances

```php
// ✅ Constructor injection privilégiée
public function __construct(
    private CrmManager $crmManager,
    private EntityManagerInterface $entityManager,
    private LoggerInterface $logger
) {}

// ✅ Method injection pour les actions spécifiques
#[Route('/export')]
public function export(CrmExportService $exportService): Response
```

### Gestion des Erreurs

```php
// ✅ Exceptions métier typées
class ContactNotFoundException extends CrmException
{
    public static function byId(int $id): self
    {
        return new self("Contact avec l'ID {$id} introuvable");
    }
}

// ✅ Logging approprié
try {
    $this->crmManager->createContact($data);
} catch (CrmException $e) {
    $this->logger->error('Erreur CRM', [
        'exception' => $e,
        'context' => $data
    ]);
    throw $e;
}
```

## Standards JavaScript/TypeScript

### Structure des Modules

```javascript
// assets/js/crm/contact-manager.js
export class ContactManager {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl
        this.init()
    }

    async init() {
        this.bindEvents()
        await this.loadContacts()
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            // Initialisation des événements
        })
    }
}
```

### Intégration Stimulus

```javascript
// assets/controllers/crm_contact_controller.js
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
    static targets = ['form', 'list']
    static values = {
        url: String,
        refreshInterval: Number,
    }

    connect() {
        this.startAutoRefresh()
    }

    disconnect() {
        this.stopAutoRefresh()
    }
}
```

## Standards CSS/SCSS

### Organisation des Styles

```scss
// assets/styles/crm/
├── _variables.scss      # Variables CRM spécifiques
├── _mixins.scss        # Mixins réutilisables
├── components/
│   ├── _contact-card.scss
│   ├── _prospect-list.scss
│   └── _deal-pipeline.scss
└── pages/
    ├── _dashboard.scss
    └── _contact-detail.scss
```

### Conventions de Nommage BEM

```scss
// ✅ Structure BEM pour les composants CRM
.crm-contact {
    &__header {
        display: flex;
        justify-content: space-between;
    }

    &__avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
    }

    &__name {
        font-weight: 600;

        &--vip {
            color: $crm-vip-color;
        }
    }
}
```

## Tests

### Tests Unitaires

```php
// tests/Unit/Service/Crm/CrmManagerTest.php
class CrmManagerTest extends TestCase
{
    private CrmManager $crmManager;
    private MockObject $entityManager;

    protected function setUp(): void
    {
        $this->entityManager = $this->createMock(EntityManagerInterface::class);
        $this->crmManager = new CrmManager($this->entityManager);
    }

    public function testCreateContactWithValidData(): void
    {
        $contactData = [
            'firstName' => 'John',
            'lastName' => 'Doe',
            'email' => 'john@example.com'
        ];

        $contact = $this->crmManager->createContact($contactData);

        $this->assertInstanceOf(Contact::class, $contact);
        $this->assertEquals('John', $contact->getFirstName());
    }
}
```

### Tests Fonctionnels

```php
// tests/Functional/Controller/Crm/ContactControllerTest.php
class ContactControllerTest extends WebTestCase
{
    public function testContactListRequiresAuthentication(): void
    {
        $client = static::createClient();
        $client->request('GET', '/crm/contacts');

        $this->assertResponseRedirects('/login');
    }

    public function testContactListForCrmUser(): void
    {
        $client = static::createClient();
        $this->loginAs($client, 'crm_user');

        $client->request('GET', '/crm/contacts');

        $this->assertResponseIsSuccessful();
        $this->assertSelectorExists('.crm-contact');
    }
}
```

## Documentation du Code

### Commentaires PHP

```php
/**
 * Gestionnaire principal des opérations CRM.
 *
 * Ce service centralise la logique métier pour la gestion
 * des contacts, prospects et opportunités.
 */
class CrmManager
{
    /**
     * Crée un nouveau contact à partir des données fournies.
     *
     * @param array $data Données du contact (firstName, lastName, email requis)
     * @return Contact Le contact créé
     * @throws ValidationException Si les données sont invalides
     * @throws CrmException Si la création échoue
     */
    public function createContact(array $data): Contact
    {
        // Implementation...
    }
}
```

### Documentation JavaScript

```javascript
/**
 * Gestionnaire des interactions de contacts CRM.
 *
 * @class ContactManager
 * @example
 * const manager = new ContactManager('/api/crm');
 * await manager.loadContacts();
 */
export class ContactManager {
    /**
     * Charge la liste des contacts depuis l'API.
     *
     * @async
     * @param {Object} filters - Filtres de recherche
     * @param {string} filters.search - Terme de recherche
     * @param {string} filters.status - Statut du contact
     * @returns {Promise<Contact[]>} Liste des contacts
     */
    async loadContacts(filters = {}) {
        // Implementation...
    }
}
```

## Checklist de Qualité

### Avant Commit

-   [ ] Code formaté avec PHP-CS-Fixer
-   [ ] Analyse statique PHPStan passée
-   [ ] Tests unitaires et fonctionnels verts
-   [ ] Documentation mise à jour
-   [ ] Variables d'environnement documentées
-   [ ] Migrations de base de données testées

### Code Review

-   [ ] Respect des conventions de nommage
-   [ ] Injection de dépendances appropriée
-   [ ] Gestion d'erreurs robuste
-   [ ] Tests couvrant les cas critiques
-   [ ] Sécurité validée (authorization, sanitization)
-   [ ] Performance acceptable
-   [ ] Compatibilité avec CMS_SF maintenue

## Outils de Développement

### Configuration IDE

```json
// .vscode/settings.json
{
    "php.suggest.basic": false,
    "php.validate.executablePath": "./vendor/bin/php",
    "phpcs.standard": "./phpcs.xml",
    "phpstan.configFile": "./phpstan.neon"
}
```

### Scripts Composer Utiles

```json
{
    "scripts": {
        "cs-fix": "php-cs-fixer fix",
        "cs-check": "php-cs-fixer fix --dry-run --diff",
        "stan": "phpstan analyse",
        "test": "phpunit",
        "test-coverage": "phpunit --coverage-html coverage/"
    }
}
```
