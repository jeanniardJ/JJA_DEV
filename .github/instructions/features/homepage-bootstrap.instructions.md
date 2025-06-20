# Page d'accueil Bootstrap - JJA_DEV

## Vue d'ensemble

La page d'accueil de JJA_DEV utilise désormais un design moderne basé sur Bootstrap 5.x pour offrir une expérience utilisateur optimale sur le front office.

## Architecture Frontend

### Templates

-   **Template principal** : `templates/home/frontoffice.html.twig`
-   **Layout de base** : `templates/frontoffice_base.html.twig`
-   **Ancien template** : `templates/home/index.html.twig.bak` (sauvegarde)

### Assets

-   **JavaScript** : `assets/frontoffice.js`
-   **Styles SCSS** : `assets/styles/frontoffice.scss`
-   **Configuration Webpack** : Entrée `frontoffice` dans `webpack.config.js`

## Contrôleur

```php
// src/Controller/HomeController.php
#[Route('/', name: 'app_home', options: ['sitemap' => true])]
public function index(Request $request): Response
{
    return $this->render('home/frontoffice.html.twig');
}
```

## Fonctionnalités du Design

### Sections principales

1. **Header/Navigation** : Menu de navigation responsive avec Bootstrap
2. **Hero Section** : Section d'accueil avec boutons d'action
3. **Services** : Présentation des services avec cartes Bootstrap
4. **À propos** : Section sur l'entreprise avec image et texte
5. **Contact** : Formulaire de contact avec coordonnées
6. **Footer** : Pied de page avec liens et informations

### Composants Bootstrap utilisés

-   Navbar responsive
-   Cards pour les services
-   Grid system (row/col)
-   Buttons avec variants
-   Forms avec validation
-   Utilities classes

## Compilation et Déploiement

### Développement

```bash
# Compiler les assets en mode développement
npm run dev

# Compiler avec watch
npm run watch
```

### Production

```bash
# Compiler les assets optimisés
npm run build
```

## Personnalisation

### Variables SCSS

Le fichier `assets/styles/frontoffice.scss` contient les variables personnalisées :

-   Couleurs de marque
-   Typographie
-   Espacements
-   Composants spécifiques

### JavaScript

Le fichier `assets/frontoffice.js` gère :

-   Interactions utilisateur
-   Animations
-   Intégration Symfony UX
-   Import des styles

## Migration depuis l'ancien design

### Changements appliqués

1. **Remplacement de Tailwind par Bootstrap** : Migration complète du système CSS
2. **Nouveau layout** : Structure HTML moderne et sémantique
3. **Suppression de l'ancienne route** : Plus de route `/frontoffice` redondante
4. **Sauvegarde de l'ancien template** : Fichier `.bak` pour référence

### Compatibilité

-   ✅ Responsive design (mobile-first)
-   ✅ SEO optimisé avec métas et sitemaps
-   ✅ Performance optimisée avec Webpack Encore
-   ✅ Accessibilité conforme aux standards

## Maintenance

### Mises à jour Bootstrap

Pour mettre à jour Bootstrap :

```bash
npm update bootstrap
npm run build
```

### Ajout de nouvelles sections

1. Modifier le template `frontoffice.html.twig`
2. Ajouter les styles dans `frontoffice.scss`
3. Mettre à jour le JavaScript si nécessaire
4. Recompiler avec `npm run build`

## Notes importantes

-   La page d'accueil (`/`) utilise exclusivement le nouveau design Bootstrap
-   L'ancien template Tailwind est conservé en sauvegarde (.bak)
-   Tous les assets sont gérés par Webpack Encore
-   Le design est entièrement responsive et moderne
