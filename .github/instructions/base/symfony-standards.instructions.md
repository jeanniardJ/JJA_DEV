---
applyTo: 'JJA_DEV/**'
---

# Standards Symfony 6.4 JJA_DEV

## Architecture Symfony

### Structure de Répertoires

-   Respecter la structure standard Symfony
-   Utiliser l'injection de dépendances pour tous les services
-   Configuration des services en YAML
-   Utiliser Doctrine ORM pour les opérations base de données
-   Suivre les standards PSR-12

### Organisation des Bundles

-   Fonctionnalités Devis & Factures organisées en bundle réutilisable
-   Bundle découplé de la logique application principale
-   Structure d'espace de noms : `App\QuoteInvoiceBundle\`
-   Configuration et services du bundle appropriés

## Conventions de Nommage

### Classes & Méthodes PHP

-   **Classes** : PascalCase (`CustomerController`, `InvoiceService`)
-   **Méthodes/Propriétés** : camelCase (`generateQuote()`, `customerData`)
-   **Tables/Colonnes DB** : snake_case (`customer_quotes`, `invoice_items`)
-   **Classes abstraites** : Préfixe `Abstract` (`AbstractDocumentGenerator`)
-   **Interfaces** : Suffixe `Interface` (`QuoteGeneratorInterface`)

### Organisation des Fichiers

-   **Controllers** : `src/Controller/` + suffixe `Controller`
-   **Services** : `src/Service/` + suffixe `Service`
-   **Entités** : `src/Entity/` (correspondance noms tables DB)
-   **Repositories** : `src/Repository/` + suffixe `Repository`
-   **Formulaires** : `src/Form/` + suffixe `Type`

### Assets Frontend

-   **Classes CSS** : kebab-case (`.customer-form`, `.invoice-table`)
-   **Bootstrap** : Utiliser classes Bootstrap pour cohérence visuelle
-   **Composants React** : Via Symfony UX React pour interactivité
-   **Variables JS** : camelCase
-   **Styles composants** : Préfixer avec nom du composant

## Standards Frontend Bootstrap & React

### Bootstrap Integration

-   **Version** : Bootstrap 5.x (dernière stable)
-   **Customisation** : Variables SCSS personnalisées
-   **Thème** : Cohérence Front Office / Back Office
-   **Responsiveness** : Mobile-first approach

### Symfony UX React

-   **Composants** : Créer composants React réutilisables
-   **Props** : Passage données Twig vers React
-   **État** : Gestion state avec hooks React
-   **Communication** : Events personnalisés si nécessaire

### Structure Assets

```
assets/
├── app.js                    # Point d'entrée principal
├── bootstrap.js             # Configuration Bootstrap
├── styles/
│   ├── app.scss            # Styles globaux
│   ├── _variables.scss     # Variables Bootstrap custom
│   └── components/         # Styles composants
├── react/
│   ├── components/         # Composants React
│   ├── controllers/        # Controllers React UX
│   └── utils/              # Utilitaires React
└── images/                 # Assets images
```

## Standards de Structure Code

### Controllers

-   Controllers légers, déléguer logique métier aux services
-   Utiliser codes de statut HTTP appropriés
-   Implémenter validation des requêtes
-   Utiliser les fonctionnalités de sécurité Symfony

### Services

-   Services sans état quand possible
-   Injection de dépendances par constructeur
-   Implémenter interfaces pour testabilité
-   Suivre principe de responsabilité unique

### Entités

-   Utiliser annotations ou attributs Doctrine
-   Implémenter relations appropriées entre entités
-   Ajouter contraintes de validation
-   Utiliser types de données et champs nullable appropriés

## Gestion d'Erreurs

### Gestion des Exceptions

-   Utiliser système de gestion d'exceptions Symfony
-   Créer exceptions personnalisées pour erreurs métier
-   Implémenter pages d'erreur pour front office
-   Logger toutes les exceptions avec informations contextuelles

### Validation

-   Utiliser composant Validator Symfony
-   Implémenter validation de formulaires pour toutes entrées utilisateur
-   Ajouter contraintes base de données
-   Fournir messages d'erreur clairs

## Optimisation & Performance

### Bonnes Pratiques

-   Utiliser mécanismes de cache Symfony
-   Optimisation des requêtes base de données
-   Utiliser lazy loading pour entités liées
-   Optimiser chargement et livraison des assets
-   **Webpack Encore** : Optimisation automatique assets
-   **Code splitting** : Chargement conditionnel React

### Assets Performance

-   **Minification** : CSS/JS automatique en production
-   **Versioning** : Cache busting avec Encore
-   **Critical CSS** : Bootstrap optimisé first-paint
-   **Tree shaking** : Suppression code mort React

### Monitoring

-   Implémenter logging pour suivi performance
-   Utiliser profiler Symfony en développement
-   Surveiller performance des requêtes base de données
-   Tracker métriques expérience utilisateur
-   **Lighthouse** : Audit performance frontend
