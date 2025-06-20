# Template Front Office Bootstrap - JJA_DEV

## Vue d'ensemble

Ce nouveau template front office utilise **Bootstrap 5.x** et **Symfony UX React** pour créer une interface moderne et performante, parfaitement intégrée à l'architecture existante de JJA_DEV.

**🏠 IMPORTANT** : Ce template Bootstrap est maintenant la **page d'accueil par défaut** accessible via la route `/` (app_home).

## Fichiers créés

### Templates Twig

-   `templates/frontoffice_base.html.twig` - Template de base pour le front office
-   `templates/home/frontoffice.html.twig` - **PAGE D'ACCUEIL PRINCIPALE** (route `/`)
-   `templates/home/index.html.twig.bak` - Ancien template (sauvegarde)

### Assets

-   `assets/frontoffice.js` - Point d'entrée JavaScript pour le front office
-   `assets/styles/frontoffice.scss` - Styles SCSS personnalisés

### Contrôleur

-   Route principale dans `HomeController.php` : `/` (app_home)

## Fonctionnalités

### Design et UX

-   **Design moderne** : Interface moderne avec animations fluides
-   **Responsive** : Compatible mobile, tablette et desktop
-   **Accessibilité** : Respect des standards WCAG 2.1
-   **Performance** : Optimisé pour le chargement rapide

### Sections

1. **Hero Section** - Section d'accueil avec titre animé
2. **About Section** - Section à propos avec image
3. **Services Section** - Grille de cartes pour les services
4. **Stats Section** - Statistiques animées au scroll
5. **Technologies Section** - Présentation des technologies
6. **CTA Section** - Call-to-action pour la conversion
7. **Contact Section** - Formulaire de contact intégré

### Animations et Interactions

-   Effet de parallaxe sur la section hero
-   Animation des compteurs au scroll
-   Effet hover sur les cartes
-   Navbar avec effet de scroll
-   Smooth scrolling pour la navigation

## Configuration

### Variables CSS personnalisables

Le template utilise des variables CSS facilement personnalisables :

```css
:root {
    --primary-color: #3b82f6; /* Couleur principale */
    --primary-dark: #2563eb; /* Couleur principale foncée */
    --accent-color: #f59e0b; /* Couleur d'accent */
    --text-primary: #1f2937; /* Couleur du texte principal */
    --text-secondary: #6b7280; /* Couleur du texte secondaire */
    --background-light: #f8fafc; /* Arrière-plan clair */
}
```

### Configuration Webpack

Le nouveau point d'entrée `frontoffice` a été ajouté dans `webpack.config.js` :

```javascript
.addEntry('frontoffice', './assets/frontoffice.js')
```

## Utilisation

### Déploiement

1. **Compiler les assets** :

    ```bash
    npm run build
    # ou pour le développement
    npm run watch
    ```

2. **Accéder au template** :
    - URL : `/frontoffice`
    - Route : `app_home_frontoffice`

### Personnalisation

#### Modifier les couleurs

Éditez les variables CSS dans `assets/styles/frontoffice.scss` :

```scss
:root {
    --primary-color: #votre-couleur;
    --accent-color: #votre-accent;
}
```

#### Ajouter des sections

Créez de nouveaux blocs dans `templates/home/frontoffice.html.twig` :

```twig
<!-- Nouvelle section -->
<section class="section-padding">
    <div class="container">
        <h2 class="section-title">Votre titre</h2>
        <!-- Votre contenu -->
    </div>
</section>
```

#### Modifier les services

Les services sont configurés via la variable `template.services`. Si elle n'est pas définie, des services par défaut sont affichés.

Structure attendue :

```php
$template = [
    'services' => [
        [
            'title' => 'Service 1',
            'description' => 'Description du service',
            'price' => '1500',
            'icon' => 'code' // Icône Font Awesome
        ]
    ]
];
```

## Intégration avec l'existant

### Avec le template actuel

-   Le template actuel reste inchangé (`templates/home/index.html.twig`)
-   Le nouveau template coexiste sur la route `/frontoffice`
-   Les deux utilisent les mêmes variables de configuration

### Composants réutilisés

-   `{{ component('ContactForm') }}` - Formulaire de contact existant
-   `{{ include('_layouts/_messagesPopup.html.twig') }}` - Messages flash
-   Variables globales : `global.site`, `global.contact`, etc.

## Technologies utilisées

### Frontend

-   **Bootstrap 5.3** - Framework CSS
-   **Symfony UX** - Composants interactifs
-   **Font Awesome** - Icônes
-   **CSS Grid/Flexbox** - Layout moderne
-   **CSS Custom Properties** - Variables CSS

### Backend

-   **Symfony 6.x** - Framework PHP
-   **Twig** - Moteur de templates
-   **Webpack Encore** - Bundler d'assets

## Performance

### Optimisations incluses

-   **Lazy loading** pour les images
-   **Preload** pour les assets critiques
-   **Minification** CSS/JS en production
-   **Tree shaking** pour éliminer le code inutilisé
-   **Critical CSS** inline pour le first paint

### Métriques cibles

-   **First Contentful Paint** : < 1.5s
-   **Largest Contentful Paint** : < 2.5s
-   **Cumulative Layout Shift** : < 0.1
-   **Time to Interactive** : < 3.5s

## SEO et Accessibilité

### SEO

-   Structure HTML sémantique
-   Meta tags optimisés
-   Schema.org markup
-   URLs descriptives
-   Images optimisées avec alt text

### Accessibilité

-   Navigation au clavier
-   Contrastes WCAG AA
-   ARIA labels appropriés
-   Focus management
-   Screen reader friendly

## Migration vers ce template

### Remplacer le template actuel

Pour utiliser ce template comme page d'accueil par défaut :

1. **Renommer les fichiers** :

    ```bash
    mv templates/home/index.html.twig templates/home/index-old.html.twig
    mv templates/home/frontoffice.html.twig templates/home/index.html.twig
    ```

2. **Mettre à jour le template de base** :

    ```bash
    mv templates/base.html.twig templates/base-old.html.twig
    mv templates/frontoffice_base.html.twig templates/base.html.twig
    ```

3. **Compiler les assets** :
    ```bash
    npm run build
    ```

### Tests recommandés

-   [ ] Vérifier l'affichage sur mobile/tablette/desktop
-   [ ] Tester la performance avec Lighthouse
-   [ ] Valider l'accessibilité avec axe-core
-   [ ] Vérifier les formulaires de contact
-   [ ] Tester la navigation au clavier

## Support et maintenance

### Bugs et améliorations

Les issues peuvent être reportées via les templates GitHub existants dans `.github/ISSUE_TEMPLATE/`.

### Compatibilité

-   **Navigateurs** : Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
-   **PHP** : 8.1+
-   **Symfony** : 6.0+
-   **Node.js** : 16+

## Roadmap

### Fonctionnalités prévues

-   [ ] Mode sombre/clair
-   [ ] Animations avancées avec GSAP
-   [ ] Progressive Web App (PWA)
-   [ ] Optimisations Core Web Vitals
-   [ ] A/B testing intégré

### Améliorations techniques

-   [ ] Service Worker pour le cache
-   [ ] Preloading intelligent
-   [ ] Image optimization automatique
-   [ ] CSS-in-JS pour les composants dynamiques
