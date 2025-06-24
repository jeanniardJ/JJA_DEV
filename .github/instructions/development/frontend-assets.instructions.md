---
applyTo: 'JJA_DEV/**'
---
# Instructions - Frontend Assets : Bootstrap & React

## Technologies Frontend

### Stack Technique

-   **Bootstrap 5.x** : Framework CSS responsive
-   **Symfony UX React** : Composants React intégrés
-   **Webpack Encore** : Build system et bundling
-   **Stimulus** : Controllers JavaScript légers

## Organisation des Assets Frontend

### Structure SASS/SCSS - Organisation BEM

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
    ├── _home.scss          # .home-page, .home-page__hero
    ├── _contact.scss       # .contact-page, .contact-page__form
    └── _frontoffice.scss   # .frontoffice, .frontoffice__section
```

### Points d'entrée SASS

1. **`app.scss`** - Application principale (back office)
2. **`frontoffice.scss`** - Front office moderne avec Bootstrap personnalisé

### Structure JavaScript

```
assets/
├── app.js              # JavaScript principal (admin/back office)
├── admin.js            # Scripts spécifiques à l'administration
└── frontoffice.js      # Scripts du front office moderne
```

**Important** : Un seul fichier JavaScript par contexte pour éviter les doublons et conflits.

### Méthodologie BEM (Block Element Modifier)

**Convention de nommage unique utilisée dans le projet :**

```scss
// Block (composant principal)
.navbar-custom {
    background: $primary-color;
    padding: 1rem 0;
}

// Element (partie du block)
.navbar-custom__item {
    padding: 0.5rem 1rem;
    text-decoration: none;
}

.navbar-custom__logo {
    height: 40px;
    width: auto;
}

// Modifier (variation du block ou element)
.navbar-custom--scrolled {
    background: rgba($primary-color, 0.9);
    backdrop-filter: blur(10px);
}

.navbar-custom__item--active {
    font-weight: bold;
    color: $accent-color;
}
```

### Exemples BEM pour JJA_DEV

```scss
// Composant carte
.card-service {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card-service__header {
    padding: 1.5rem;
    background: $gradient-primary;
}

.card-service__title {
    font-size: 1.25rem;
    margin: 0;
}

.card-service__body {
    padding: 1.5rem;
}

.card-service--featured {
    border: 2px solid $primary-color;
    transform: scale(1.05);
}

// Formulaire contact
.contact-form {
    max-width: 600px;
    margin: 0 auto;
}

.contact-form__field {
    margin-bottom: 1.5rem;
}

.contact-form__label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
}

.contact-form__input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid $border-color;
    border-radius: 4px;
}

.contact-form__input--error {
    border-color: $error-color;
}
```

### Bonnes Pratiques BEM

#### Nommage

-   **Block** : Nom du composant (`.navbar-custom`)
-   **Element** : Block + `__` + nom de l'élément (`.navbar-custom__item`)
-   **Modifier** : Block/Element + `--` + modification (`.navbar-custom--scrolled`)

#### SASS

-   **Variables centralisées** dans `_variables.scss`
-   **Un composant BEM = un fichier** SCSS
-   **Nomenclature cohérente** pour tous les composants
-   **Mixins réutilisables** pour les patterns communs

#### JavaScript

-   **Un point d'entrée par contexte** (éviter les doublons)
-   **Import modulaire** des composants Bootstrap
-   **Event listeners** dans `DOMContentLoaded`
-   **Code modulaire** et fonctions réutilisables

## Architecture Frontend

### Structure des Assets

```
assets/
├── app.js                          # Point d'entrée front office
├── admin.js                        # Point d'entrée back office
├── bootstrap.js                    # Configuration Bootstrap/Stimulus
├── controllers/                    # Stimulus controllers
│   ├── crm/                       # Controllers CRM spécifiques
│   │   ├── contact_controller.js
│   │   ├── deal_controller.js
│   │   ├── pipeline_controller.js
│   │   └── search_controller.js
│   └── shared/                    # Controllers partagés
│       ├── modal_controller.js
│       ├── toast_controller.js
│       └── form_controller.js
├── react/                         # Composants React UX
│   ├── components/                # Composants réutilisables
│   │   ├── CustomerForm.jsx
│   │   ├── QuoteCalculator.jsx
│   │   ├── Dashboard/
│   │   └── Charts/
│   ├── controllers/               # Controllers React UX
│   │   ├── CustomerController.jsx
│   │   ├── QuoteController.jsx
│   │   └── DashboardController.jsx
│   └── utils/                     # Utilitaires React
│       ├── api.js
│       └── helpers.js
├── styles/
│   ├── app.scss                   # Styles front office
│   ├── admin.scss                 # Styles back office
│   ├── bootstrap.scss             # Configuration Bootstrap custom
│   ├── base/                      # Styles de base
│   │   ├── _variables.scss        # Variables Bootstrap custom
│   │   ├── _typography.scss
│   │   └── _utilities.scss
│   ├── components/                # Composants Bootstrap custom
│   │   ├── _buttons.scss
│   │   ├── _forms.scss
│   │   ├── _cards.scss
│   │   ├── _crm-components.scss
│   │   └── _modals.scss
│   ├── crm/                      # Styles CRM spécifiques
│   │   ├── _dashboard.scss
│   │   ├── _contacts.scss
│   │   ├── _deals.scss
│   │   └── _pipeline.scss
│   └── layout/                   # Layout Bootstrap
│       ├── _header.scss
│       ├── _sidebar.scss
│       ├── _navigation.scss
│       └── _footer.scss
├── images/
│   ├── icons/                    # Icônes SVG + Bootstrap Icons
│   ├── avatars/                  # Photos de profil
│   └── logos/                    # Logos et branding
└── js/
    ├── bootstrap-setup.js        # Configuration Bootstrap JS
    ├── crm/                      # Modules CRM
    │   ├── contact-manager.js
    │   ├── deal-pipeline.js
    │   └── statistics.js
    └── utils/                    # Utilitaires
        ├── api-client.js
        ├── bootstrap-helpers.js
        └── validation.js
        ├── validators.js
        └── formatters.js
```

### Configuration Webpack Encore

```javascript
// webpack.config.js
const Encore = require("@symfony/webpack-encore");

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || "dev");
}

Encore
    // Répertoire de sortie
    .setOutputPath("public/build/")
    .setPublicPath("/build")

    // Points d'entrée
    .addEntry("app", "./assets/app.js")
    .addEntry("crm", "./assets/crm.js")
    .addEntry("admin", "./assets/admin.js")

    // Configuration SCSS
    .enableSassLoader()
    .enablePostCssLoader()

    // Optimisations
    .splitEntryChunks()
    .enableSingleRuntimeChunk()

    // Configuration développement
    .configureDevServerOptions((options) => {
        options.host = "0.0.0.0";
        options.port = 8080;
        options.allowedHosts = "all";
    })

    // Sourcemaps en développement
    .enableSourceMaps(!Encore.isProduction())

    // Hashing des fichiers en production
    .enableVersioning(Encore.isProduction())

    // Configuration Babel
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = "usage";
        config.corejs = 3;
    })

    // TypeScript support
    .enableTypeScriptLoader()

    // Optimisations images
    .configureImageRule({}, (rule) => {
        rule.type = "asset";
    })

    // ESLint
    .addLoader({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
            configFile: ".eslintrc.js",
        },
    });

// Environnement de production
if (Encore.isProduction()) {
    Encore.enableBuildNotifications()
        .cleanupOutputBeforeBuild()
        .configureTerserPlugin((options) => {
            options.terserOptions = {
                compress: {
                    drop_console: true,
                },
            };
        });
}

module.exports = Encore.getWebpackConfig();
```

## Stimulus Controllers CRM

### Contact Controller

```javascript
// assets/controllers/crm/contact_controller.js
import { Controller } from "@hotwired/stimulus";
import { ContactManager } from "../js/crm/contact-manager";

export default class extends Controller {
    static targets = ["list", "form", "search", "filters"];
    static values = {
        apiUrl: String,
        currentPage: Number,
        totalPages: Number,
    };

    connect() {
        this.contactManager = new ContactManager(this.apiUrlValue);
        this.initializeSearch();
        this.bindEvents();
    }

    disconnect() {
        this.contactManager?.destroy();
    }

    // Actions Stimulus
    async search(event) {
        const query = event.target.value;
        if (query.length < 2) {
            this.clearResults();
            return;
        }

        this.showLoading();
        try {
            const contacts = await this.contactManager.search(query);
            this.displayContacts(contacts);
        } catch (error) {
            this.showError("Erreur lors de la recherche");
        }
    }

    async filter(event) {
        const filters = this.getActiveFilters();
        this.showLoading();

        try {
            const contacts = await this.contactManager.filter(filters);
            this.displayContacts(contacts);
        } catch (error) {
            this.showError("Erreur lors du filtrage");
        }
    }

    async loadPage(event) {
        const page = parseInt(event.params.page);
        this.currentPageValue = page;

        try {
            const contacts = await this.contactManager.loadPage(page);
            this.displayContacts(contacts);
            this.updatePagination();
        } catch (error) {
            this.showError("Erreur lors du chargement");
        }
    }

    async selectContact(event) {
        const contactId = event.currentTarget.dataset.contactId;
        const contact = await this.contactManager.getContact(contactId);
        this.dispatch("contact:selected", { detail: { contact } });
    }

    async bulkAction(event) {
        const action = event.params.action;
        const selectedIds = this.getSelectedContactIds();

        if (selectedIds.length === 0) {
            this.showWarning("Aucun contact sélectionné");
            return;
        }

        if (await this.confirmBulkAction(action, selectedIds.length)) {
            try {
                await this.contactManager.bulkAction(action, selectedIds);
                this.refreshList();
                this.showSuccess(`Action "${action}" appliquée à ${selectedIds.length} contact(s)`);
            } catch (error) {
                this.showError("Erreur lors de l'action groupée");
            }
        }
    }

    // Méthodes privées
    initializeSearch() {
        if (this.hasSearchTarget) {
            this.searchTarget.addEventListener("input", this.debounce(this.search.bind(this), 300));
        }
    }

    bindEvents() {
        // Sélection multiple
        this.element.addEventListener("change", (e) => {
            if (e.target.classList.contains("contact-select")) {
                this.updateBulkActions();
            }
        });

        // Double-clic pour édition
        this.element.addEventListener("dblclick", (e) => {
            const contactCard = e.target.closest(".contact-card");
            if (contactCard) {
                this.editContact(contactCard.dataset.contactId);
            }
        });
    }

    getActiveFilters() {
        const filters = {};
        this.filtersTarget.querySelectorAll("select, input").forEach((input) => {
            if (input.value) {
                filters[input.name] = input.value;
            }
        });
        return filters;
    }

    getSelectedContactIds() {
        return Array.from(this.element.querySelectorAll(".contact-select:checked")).map((checkbox) => checkbox.value);
    }

    displayContacts(contacts) {
        this.hideLoading();
        this.listTarget.innerHTML = this.renderContactCards(contacts);
    }

    renderContactCards(contacts) {
        return contacts
            .map(
                (contact) => `
            <div class="contact-card" data-contact-id="${contact.id}">
                <input type="checkbox" class="contact-select" value="${contact.id}">
                <div class="contact-card__avatar">
                    <img src="${contact.avatarUrl || "/images/default-avatar.png"}"
                         alt="${contact.fullName}">
                    <div class="contact-card__status contact-card__status--${contact.status}"></div>
                </div>
                <div class="contact-card__info">
                    <h3 class="contact-card__name">${contact.fullName}</h3>
                    <p class="contact-card__company">${contact.company || ""}</p>
                    <p class="contact-card__email">${contact.email}</p>
                </div>
                <div class="contact-card__actions">
                    <button class="action-btn" data-action="call" data-contact-id="${contact.id}">📞</button>
                    <button class="action-btn" data-action="email" data-contact-id="${contact.id}">✉️</button>
                    <button class="action-btn" data-action="edit" data-contact-id="${contact.id}">✏️</button>
                </div>
            </div>
        `
            )
            .join("");
    }

    debounce(func, delay) {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }

    showLoading() {
        this.listTarget.classList.add("loading");
    }

    hideLoading() {
        this.listTarget.classList.remove("loading");
    }

    showSuccess(message) {
        this.dispatch("toast:show", { detail: { message, type: "success" } });
    }

    showError(message) {
        this.dispatch("toast:show", { detail: { message, type: "error" } });
    }
}
```

### Pipeline Controller

```javascript
// assets/controllers/crm/pipeline_controller.js
import { Controller } from "@hotwired/stimulus";
import Sortable from "sortablejs";

export default class extends Controller {
    static targets = ["stage", "deal"];
    static values = {
        apiUrl: String,
        refreshInterval: Number,
    };

    connect() {
        this.initializeSortable();
        this.startAutoRefresh();
    }

    disconnect() {
        this.stopAutoRefresh();
        this.destroySortable();
    }

    initializeSortable() {
        this.sortables = [];

        this.stageTargets.forEach((stage) => {
            const sortable = Sortable.create(stage.querySelector(".deal-cards"), {
                group: "deals",
                animation: 150,
                ghostClass: "deal-ghost",
                chosenClass: "deal-chosen",
                dragClass: "deal-drag",

                onEnd: async (evt) => {
                    await this.handleDealMove(evt);
                },
            });

            this.sortables.push(sortable);
        });
    }

    async handleDealMove(evt) {
        const dealId = evt.item.dataset.dealId;
        const newStage = evt.to.closest("[data-stage]").dataset.stage;
        const oldStage = evt.from.closest("[data-stage]").dataset.stage;

        if (newStage === oldStage) return;

        try {
            await this.updateDealStage(dealId, newStage);
            this.showSuccess(`Deal déplacé vers "${newStage}"`);
            this.updateStageCounters();
        } catch (error) {
            // Annuler le déplacement
            evt.from.appendChild(evt.item);
            this.showError("Erreur lors du déplacement");
        }
    }

    async updateDealStage(dealId, newStage) {
        const response = await fetch(`${this.apiUrlValue}/deals/${dealId}/stage`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.getAuthToken()}`,
            },
            body: JSON.stringify({ stage: newStage }),
        });

        if (!response.ok) {
            throw new Error("Network error");
        }

        return response.json();
    }

    updateStageCounters() {
        this.stageTargets.forEach((stage) => {
            const count = stage.querySelectorAll(".deal-card").length;
            const counter = stage.querySelector(".stage-count");
            if (counter) {
                counter.textContent = count;
            }
        });
    }

    async refreshPipeline() {
        try {
            const response = await fetch(`${this.apiUrlValue}/pipeline`);
            const data = await response.json();
            this.updatePipelineData(data);
        } catch (error) {
            console.error("Erreur lors du rafraîchissement:", error);
        }
    }

    startAutoRefresh() {
        if (this.refreshIntervalValue > 0) {
            this.refreshTimer = setInterval(() => {
                this.refreshPipeline();
            }, this.refreshIntervalValue * 1000);
        }
    }

    stopAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
        }
    }

    destroySortable() {
        this.sortables?.forEach((sortable) => sortable.destroy());
    }

    getAuthToken() {
        return document.querySelector('meta[name="api-token"]')?.content;
    }
}
```

## Gestion des Formulaires

### Form Controller Avancé

```javascript
// assets/controllers/shared/form_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
    static targets = ["field", "submit", "error"];
    static values = {
        autoSave: Boolean,
        validateOnChange: Boolean,
        apiUrl: String,
    };

    connect() {
        this.originalData = this.getFormData();
        this.validators = new Map();

        this.initializeValidation();

        if (this.autoSaveValue) {
            this.initializeAutoSave();
        }
    }

    // Validation en temps réel
    async validateField(event) {
        const field = event.target;
        const value = field.value;
        const rules = field.dataset.validate?.split("|") || [];

        this.clearFieldError(field);

        for (const rule of rules) {
            const [validator, ...params] = rule.split(":");

            try {
                const isValid = await this.runValidator(validator, value, params);
                if (!isValid) {
                    this.showFieldError(field, this.getValidationMessage(validator, params));
                    break;
                }
            } catch (error) {
                console.error("Erreur de validation:", error);
            }
        }

        this.updateSubmitState();
    }

    async runValidator(validator, value, params) {
        switch (validator) {
            case "required":
                return value.trim() !== "";

            case "email":
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

            case "min":
                return value.length >= parseInt(params[0]);

            case "max":
                return value.length <= parseInt(params[0]);

            case "unique-contact-email":
                return await this.checkEmailUniqueness(value);

            default:
                return true;
        }
    }

    async checkEmailUniqueness(email) {
        if (!email) return true;

        try {
            const response = await fetch(`${this.apiUrlValue}/contacts/check-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${this.getAuthToken()}`,
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            return data.available;
        } catch {
            return true; // En cas d'erreur, on laisse passer
        }
    }

    // Auto-sauvegarde
    initializeAutoSave() {
        this.autoSaveTimer = null;

        this.element.addEventListener("input", () => {
            this.scheduleAutoSave();
        });
    }

    scheduleAutoSave() {
        clearTimeout(this.autoSaveTimer);

        this.autoSaveTimer = setTimeout(() => {
            this.performAutoSave();
        }, 2000); // 2 secondes après la dernière modification
    }

    async performAutoSave() {
        if (!this.hasChanges()) return;

        try {
            const formData = this.getFormData();
            await this.saveAsDraft(formData);
            this.showAutoSaveSuccess();
            this.originalData = formData;
        } catch (error) {
            this.showAutoSaveError();
        }
    }

    async saveAsDraft(data) {
        const response = await fetch(`${this.apiUrlValue}/draft`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.getAuthToken()}`,
            },
            body: JSON.stringify({ ...data, _draft: true }),
        });

        if (!response.ok) {
            throw new Error("Erreur sauvegarde");
        }
    }

    // Soumission avec validation complète
    async submit(event) {
        event.preventDefault();

        if (!(await this.validateForm())) {
            this.showError("Veuillez corriger les erreurs du formulaire");
            return;
        }

        this.showLoading();

        try {
            const formData = this.getFormData();
            const response = await this.submitForm(formData);

            if (response.ok) {
                this.showSuccess("Enregistrement réussi");
                this.dispatch("form:success", { detail: { response } });
            } else {
                const errorData = await response.json();
                this.handleServerErrors(errorData);
            }
        } catch (error) {
            this.showError("Erreur lors de l'enregistrement");
        } finally {
            this.hideLoading();
        }
    }

    async validateForm() {
        let isValid = true;

        for (const field of this.fieldTargets) {
            await this.validateField({ target: field });
            if (this.hasFieldError(field)) {
                isValid = false;
            }
        }

        return isValid;
    }

    getFormData() {
        const formData = new FormData(this.element);
        const data = {};

        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }

        return data;
    }

    hasChanges() {
        const currentData = this.getFormData();
        return JSON.stringify(currentData) !== JSON.stringify(this.originalData);
    }

    // Gestion des erreurs
    showFieldError(field, message) {
        field.classList.add("is-invalid");

        let errorElement = field.parentNode.querySelector(".field-error");
        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.className = "field-error";
            field.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
    }

    clearFieldError(field) {
        field.classList.remove("is-invalid");
        const errorElement = field.parentNode.querySelector(".field-error");
        errorElement?.remove();
    }

    hasFieldError(field) {
        return field.classList.contains("is-invalid");
    }

    handleServerErrors(errorData) {
        if (errorData.errors) {
            errorData.errors.forEach((error) => {
                if (error.field) {
                    const field = this.element.querySelector(`[name="${error.field}"]`);
                    if (field) {
                        this.showFieldError(field, error.message);
                    }
                }
            });
        }
    }

    // États visuels
    showLoading() {
        this.submitTarget.disabled = true;
        this.submitTarget.textContent = "Enregistrement...";
    }

    hideLoading() {
        this.submitTarget.disabled = false;
        this.submitTarget.textContent = "Enregistrer";
    }

    updateSubmitState() {
        const hasErrors = this.fieldTargets.some((field) => this.hasFieldError(field));
        this.submitTarget.disabled = hasErrors;
    }
}
```

## API Client JavaScript

### Client API Réutilisable

```javascript
// assets/js/utils/api-client.js
class ApiClient {
    constructor(baseUrl = "/api/v1") {
        this.baseUrl = baseUrl;
        this.token = this.getAuthToken();
    }

    getAuthToken() {
        return document.querySelector('meta[name="api-token"]')?.content;
    }

    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;

        const config = {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        };

        if (this.token) {
            config.headers.Authorization = `Bearer ${this.token}`;
        }

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new ApiError(response.status, await response.json());
            }

            return await response.json();
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            throw new ApiError(0, { message: "Erreur réseau" });
        }
    }

    // Méthodes de convenance
    get(endpoint, params = {}) {
        const url = new URL(endpoint, this.baseUrl);
        Object.keys(params).forEach((key) => {
            url.searchParams.append(key, params[key]);
        });

        return this.request(url.pathname + url.search);
    }

    post(endpoint, data) {
        return this.request(endpoint, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }

    put(endpoint, data) {
        return this.request(endpoint, {
            method: "PUT",
            body: JSON.stringify(data),
        });
    }

    patch(endpoint, data) {
        return this.request(endpoint, {
            method: "PATCH",
            body: JSON.stringify(data),
        });
    }

    delete(endpoint) {
        return this.request(endpoint, {
            method: "DELETE",
        });
    }
}

class ApiError extends Error {
    constructor(status, data) {
        super(data.message || "Erreur API");
        this.status = status;
        this.data = data;
    }
}

// Export pour utilisation
export { ApiClient, ApiError };
```

## Configuration PostCSS et SCSS

### PostCSS Config

```javascript
// postcss.config.js
module.exports = {
    plugins: [
        require("autoprefixer"),
        require("cssnano")({
            preset: "default",
        }),
        require("postcss-custom-properties")({
            preserve: false,
        }),
    ],
};
```

### Variables SCSS Principales

```scss
// assets/styles/base/_variables.scss

// Couleurs système
$primary: #2563eb;
$secondary: #64748b;
$success: #059669;
$warning: #d97706;
$danger: #dc2626;
$info: #0ea5e9;

// Couleurs CRM spécifiques
$crm-prospect: #3b82f6;
$crm-customer: #8b5cf6;
$crm-active: #10b981;
$crm-inactive: #6b7280;

// Pipeline stages
$stage-colors: (
    prospect: #ef4444,
    qualification: #f97316,
    proposition: #eab308,
    negociation: #06b6d4,
    closed-won: #10b981,
    closed-lost: #ef4444,
);

// Typographie
$font-family-base: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
$font-size-base: 1rem;
$line-height-base: 1.5;

// Espacements
$spacer: 1rem;
$spacers: (
    0: 0,
    1: (
        $spacer * 0.25,
    ),
    2: (
        $spacer * 0.5,
    ),
    3: $spacer,
    4: (
        $spacer * 1.5,
    ),
    5: (
        $spacer * 3,
    ),
);

// Breakpoints
$breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px,
    xxl: 1400px,
);

// Z-index scale
$z-index-dropdown: 1000;
$z-index-sticky: 1020;
$z-index-fixed: 1030;
$z-index-modal-backdrop: 1040;
$z-index-modal: 1050;
$z-index-popover: 1060;
$z-index-tooltip: 1070;

// Transitions
$transition-base: all 0.2s ease-in-out;
$transition-fast: all 0.1s ease-in-out;
$transition-slow: all 0.3s ease-in-out;

// Ombres
$box-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
$box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

// Border radius
$border-radius: 0.375rem;
$border-radius-lg: 0.5rem;
$border-radius-xl: 0.75rem;

// Mixins utiles
@mixin respond-to($breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
        @content;
    }
}

@mixin card-shadow($level: 1) {
    @if $level == 1 {
        box-shadow: $box-shadow-sm;
    } @else if $level == 2 {
        box-shadow: $box-shadow;
    } @else {
        box-shadow: $box-shadow-lg;
    }
}

@mixin button-variant($background, $border: $background, $color: #fff) {
    background-color: $background;
    border-color: $border;
    color: $color;

    &:hover {
        background-color: darken($background, 10%);
        border-color: darken($border, 10%);
    }

    &:active,
    &:focus {
        background-color: darken($background, 15%);
        border-color: darken($border, 15%);
    }
}
```

## Checklist Frontend

### Performance

-   [ ] Assets minifiés et compressés
-   [ ] Images optimisées (WebP, lazy loading)
-   [ ] CSS et JS en chunks séparés
-   [ ] Cache browser configuré
-   [ ] Service Worker pour cache offline

### Accessibilité

-   [ ] Navigation au clavier fonctionnelle
-   [ ] Labels et ARIA attributes appropriés
-   [ ] Contraste suffisant (WCAG AA)
-   [ ] Focus indicators visibles
-   [ ] Textes alternatifs pour images

### Responsive Design

-   [ ] Mobile-first approach
-   [ ] Breakpoints cohérents
-   [ ] Touch targets suffisants (44px min)
-   [ ] Gestures tactiles intuitives
-   [ ] Performance sur mobile optimisée

### Qualité du Code

-   [ ] ESLint configuré et respecté
-   [ ] Sass-lint/Stylelint configuré
-   [ ] Code documenté (JSDoc)
-   [ ] Tests unitaires JavaScript
-   [ ] Code review avant merge
