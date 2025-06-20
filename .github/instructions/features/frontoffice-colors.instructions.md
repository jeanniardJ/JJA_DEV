# Front Office Bootstrap - Nouvelle Palette JJA_DEV

## Palette de Couleurs

Le nouveau design front office utilise une palette de couleurs spécialement conçue pour JJA_DEV :

### Couleurs Principales

-   **#FFFFFF** - Blanc principal pour les textes et backgrounds
-   **#8FCCBD** - Vert teal clair (accent et éléments interactifs)
-   **#306959** - Vert teal principal (couleur primaire)
-   **#E5E8EB** - Gris clair pour les backgrounds secondaires
-   **#0F241F** - Vert foncé principal (texte principal)
-   **#17332E** - Vert foncé secondaire (texte secondaire)
-   **#214A40** - Vert foncé tertiaire (éléments de contraste)

### Dégradés

#### Dégradé Principal du Background

Le background utilise un magnifique dégradé qui va du bleu foncé vers le vert néon :

```css
background: linear-gradient(135deg, #0f241f 0%, #17332e 30%, #214a40 60%, #306959 80%, #8fccbd 100%);
```

#### Dégradé des Boutons

```css
background: linear-gradient(135deg, #8fccbd 0%, #306959 100%);
```

#### Dégradé au Survol

```css
background: linear-gradient(135deg, #306959 0%, #214a40 100%);
```

## Effets Visuels

### Background Animé

-   Dégradé principal avec effet de particules flottantes
-   Effets de transparence et de backdrop-filter pour les éléments
-   Animations subtiles pour les interactions

### Navigation

-   Navbar transparente avec effet de blur
-   Bordure subtile avec la couleur teal
-   Effet de scroll avec changement d'opacité

### Cartes et Éléments

-   Background semi-transparent avec backdrop-filter
-   Ombres colorées avec les tons de la palette
-   Effets de survol avec transformation et changement de couleur

### Boutons

-   Dégradés dynamiques
-   Ombres colorées pour les boutons principaux
-   Effets de transition fluides

## Variables CSS

Toutes les couleurs sont définies comme variables CSS personnalisées :

```scss
:root {
    // Palette de couleurs JJA_DEV
    --color-white: #ffffff;
    --color-teal-light: #8fccbd;
    --color-teal-primary: #306959;
    --color-gray-light: #e5e8eb;
    --color-dark-primary: #0f241f;
    --color-dark-secondary: #17332e;
    --color-dark-tertiary: #214a40;

    // Dégradés
    --gradient-primary: linear-gradient(
        135deg,
        var(--color-dark-primary) 0%,
        var(--color-dark-secondary) 25%,
        var(--color-dark-tertiary) 50%,
        var(--color-teal-primary) 75%,
        var(--color-teal-light) 100%
    );
    --gradient-hero: linear-gradient(135deg, #0f241f 0%, #17332e 30%, #214a40 60%, #306959 80%, #8fccbd 100%);
}
```

## Structure des Fichiers

-   `assets/styles/frontoffice.scss` - Styles principaux avec la nouvelle palette
-   `assets/frontoffice.js` - JavaScript pour les interactions et animations
-   `templates/frontoffice_base.html.twig` - Template de base du front office
-   `templates/home/frontoffice.html.twig` - Page d'accueil

## Effets Spéciaux

### Scrollbar Personnalisée

Les barres de défilement utilisent la palette de couleurs :

```scss
::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, var(--color-teal-light), var(--color-teal-primary));
}
```

### Particules Animées

Des particules subtiles flottent sur le background pour ajouter de la dynamique sans distraire.

### Effets de Transparence

Les éléments utilisent `backdrop-filter: blur()` pour créer des effets de verre dépoli modernes.

## Responsive Design

La palette et les effets sont optimisés pour toutes les tailles d'écran :

-   Desktop : Effets complets avec parallax et animations
-   Tablet : Effets réduits mais conservant l'esthétique
-   Mobile : Version simplifiée pour de meilleures performances

## Accessibilité

-   Contrastes respectant les standards WCAG
-   Focus visible avec les couleurs de la palette
-   Réduction des animations pour les utilisateurs sensibles au mouvement
-   Couleurs suffisamment contrastées pour la lisibilité

## Installation

Les styles sont automatiquement compilés avec Webpack Encore :

```bash
npm run dev        # Développement
npm run build      # Production
npm run watch      # Mode surveillance
```

La nouvelle palette est maintenant active et donne au front office JJA_DEV un aspect moderne et professionnel avec le dégradé demandé du bleu foncé vers le vert néon.
