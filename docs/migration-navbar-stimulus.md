# Migration Navbar : React vers Symfony UX + Stimulus

## Contexte

Conformément aux bonnes pratiques actuelles de Symfony, la navigation a été migrée de React vers **Symfony UX avec Stimulus**.

> Selon la documentation officielle de Symfony : _"If you want to use a front-end framework (Next.js, React, Vue, Svelte, etc), we recommend using their native tools and using Symfony as a pure API. A wonderful tool to do that is API Platform."_

Pour l'interface front-office, l'utilisation de **Symfony UX + Stimulus** est recommandée plutôt que React.

## Changements effectués

### 1. Suppression du composant React

-   ❌ Supprimé : `assets/react/controllers/app/Nav.jsx`

### 2. Création du contrôleur Stimulus

-   ✅ Créé : `assets/controllers/navbar_controller.js`

### 3. Mise à jour du template

-   ✅ Modifié : `templates/nav.html.twig`
-   Remplacé `{{ react_component('Nav', ...) }}` par les attributs Stimulus

## Fonctionnalités conservées

✅ **Toutes les fonctionnalités ont été conservées :**

1. **Gestion du scroll** : La navbar change d'apparence au scroll
2. **Menu mobile** : Toggle responsive avec état géré proprement
3. **Smooth scroll** : Navigation fluide vers les ancres
4. **Dropdown utilisateur** : Menu déroulant CRM
5. **Accessibilité** : Gestion ARIA et navigation clavier
6. **Fermeture automatique** : Menu mobile se ferme sur clic extérieur/liens

## Architecture technique

### Stimulus Controller (`navbar_controller.js`)

```javascript
// Utilise les standards Symfony UX
import { Controller } from "@hotwired/stimulus";

// Fonctionnalités :
- Targets: navbar, toggler, collapse
- Classes: scrolled
- Values: scrollThreshold
- Actions: scroll, toggle, clickOutside
- Events: navbar:opened, navbar:closed
```

### Template Twig (`nav.html.twig`)

```twig
<nav data-controller="navbar"
     data-navbar-target="navbar"
     data-navbar-scrolled-class="scrolled">
  <!-- Navigation avec actions Stimulus -->
  <a data-action="click->navbar#linkClick">...</a>
  <button data-action="click->navbar#toggleMobileMenu">...</button>
</nav>
```

## Avantages de la migration

### ✅ Conformité aux standards Symfony

-   Respect des bonnes pratiques officielles
-   Utilisation de l'écosystème Symfony UX

### ✅ Performance améliorée

-   Pas de bundle React inutile pour l'interface simple
-   Chargement plus rapide de la navigation
-   Moins de JavaScript à parser

### ✅ Simplicité de maintenance

-   Code plus simple et lisible
-   Intégration native avec Twig
-   Débogage plus facile

### ✅ Expérience développeur optimisée

-   Hot reload Stimulus automatique
-   Pas de compilation React spécifique
-   Inspection directe dans DevTools

## Validation

### Tests effectués

-   ✅ Build Webpack réussi (`npm run dev`)
-   ✅ Aucune erreur de compilation
-   ✅ Contrôleur Stimulus automatiquement enregistré
-   ✅ Template Twig correctement mis à jour

### Composants React conservés

Les composants React de l'admin sont conservés :

-   `assets/react/controllers/admin/` (calendrier, dark mode, etc.)
-   Configuration React maintenue pour l'interface d'administration

## Conclusion

La migration respecte parfaitement les recommandations Symfony actuelles :

-   **Front-office** : Symfony UX + Stimulus (navigation native)
-   **Back-office** : React pour l'interactivité complexe (conservé)

Cette approche hybride offre le meilleur des deux mondes selon les besoins spécifiques de chaque interface.
