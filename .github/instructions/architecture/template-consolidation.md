---
applyTo: "JJA_DEV/**"
---

# Consolidation des Templates Front Office

## Problème Résolu

Il y avait une duplication de templates de base pour le front office :

1. **`base.html.twig`** : Template principal hérité du CMS_SF avec navigation React
2. **`frontoffice_base.html.twig`** : Template dupliqué avec navigation Bootstrap classique

## Solution Appliquée

### 1. Archivage du Template Redondant

Le template `frontoffice_base.html.twig` a été déplacé vers `templates/_archive/` car :

-   Aucun template ne l'utilise plus
-   Il créait une duplication inutile de la logique de base
-   L'architecture héritée du CMS_SF doit être respectée

### 2. Utilisation du Template Principal

Tous les templates front office utilisent maintenant `base.html.twig` qui :

-   Inclut automatiquement la navigation React (`nav.html.twig`)
-   Respecte l'architecture modulaire (head, footer, nav séparés)
-   Utilise les assets appropriés (frontoffice entry points)

### 3. Navigation Unifiée

La navigation est gérée par le composant React `Nav.jsx` qui contient :

-   Menu horizontal : Accueil, À propos, Github, Contact
-   Icône CRM avec dropdown (Se connecter/Se déconnecter)
-   Comportement responsive avec Bootstrap 5.x
-   Effet de scroll avec changement de background

## Architecture des Templates

```text
templates/
├── base.html.twig              # Template principal front office
├── _head.html.twig            # Head commun
├── _footer.html.twig          # Footer commun
├── nav.html.twig              # Navigation React
├── home/
│   └── frontoffice.html.twig  # Page d'accueil (extends base.html.twig)
├── contact/
│   └── index.html.twig        # Page contact (extends base.html.twig)
└── _archive/
    └── frontoffice_base.html.twig  # Ancien template archivé
```

## Composants React

```text
assets/react/controllers/app/
└── Nav.jsx                    # Navigation principale
```

## Règles à Respecter

1. **Toujours étendre `base.html.twig`** pour les pages front office
2. **Ne pas créer de nouveaux templates de base** sans justification
3. **Utiliser la navigation React** plutôt que de la recréer en HTML
4. **Respecter l'architecture modulaire** (head, footer, nav séparés)
5. **Maximiser l'utilisation de Bootstrap 5.x** dans les templates

## Vérification

Pour vérifier qu'aucun template n'utilise l'ancien `frontoffice_base.html.twig` :

```bash
grep -r "frontoffice_base.html.twig" templates/
```

Cette commande ne doit retourner aucun résultat dans les templates actifs.
