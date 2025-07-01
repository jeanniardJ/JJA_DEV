---
applyTo: "JJA_DEV/**"
description: Directives de codage spécifiques JJA_DEV, complétant les standards Symfony et Copilot.
---

# Directives de Codage JJA_DEV

Ce document définit les conventions de codage spécifiques au projet JJA_DEV, en complément des standards Symfony et des instructions globales Copilot.

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

- **Entités CRM** : Préfixe `Crm\` dans le namespace
- **Services** : Suffixe `Manager` ou `Service`
- **Repositories** : Suffixe `Repository`
- **Events** : Suffixe `Event`
- **Listeners** : Suffixe `Listener`

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

Utiliser les attributs PHP 8+ plutôt que les annotations :

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
// assets/styles/crm/_contact.scss
.crm-contact {
  // Styles spécifiques CRM
}
```

## Liens utiles

- [Standards Symfony](../base/symfony-standards.instructions.md)
- [Sécurité & Authentification](../base/security-authentication.instructions.md)
- [Stratégie de tests](./testing-strategy.instructions.md)
