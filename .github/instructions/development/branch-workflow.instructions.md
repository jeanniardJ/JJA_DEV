---
applyTo: 'JJA_DEV/**'
---

# Workflow de Développement JJA_DEV

## Repository

**URL** : https://github.com/jeanniardJ/JJA_DEV.git

## Stratégie de Branches

### Structure Git

```
main/master (Production OVH) ← Pull Request ← develop (Développement) ← feature/xxx
```

### Branches Principales

-   **`develop`** : Branche de développement principal
-   **`main/master`** : Branche de production (déploiement OVH)
-   **`feature/xxx`** : Branches de fonctionnalités

## Workflow de Développement

### 1. Création Feature

```bash
# Partir de develop
git checkout develop
git pull origin develop

# Créer branche feature
git checkout -b feature/issue-123-customer-management

# Démarrage MySQL pour développement
docker-compose up -d mysql
```

### 2. Développement Local

```bash
# Tests pendant développement (Symfony CLI local)
symfony console phpunit

# Analyse qualité code (PHP local)
vendor/bin/phpstan analyse

# Validation standards (PHP local)
vendor/bin/phpcs src/
```

### 3. Intégration

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

### 4. Pull Request

-   **Target** : `develop` (jamais directement vers main/master)
-   **Review** : Obligatoire avant merge
-   **Tests** : CI/CD doit passer
-   **Qualité** : PHPStan + PHPCS OK

### 5. Déploiement Production

```bash
# Après validation en develop
git checkout main
git merge develop
git push origin main
# → Déploiement automatique OVH via GitHub Actions
```

## Standards de Commits

### Format Conventionnel

```
type(scope): description

body (optionnel)

footer (optionnel)
```

### Types Autorisés

-   **feat** : Nouvelle fonctionnalité
-   **fix** : Correction bug
-   **docs** : Documentation
-   **style** : Formatage code
-   **refactor** : Refactorisation
-   **test** : Ajout/modification tests
-   **chore** : Maintenance

### Exemples

```bash
# Nouvelle fonctionnalité CRM
git commit -m "feat(crm): add quote generation with PDF export"

# Correction bug
git commit -m "fix(auth): resolve login issue with special characters"

# Tests
git commit -m "test(crm): add unit tests for CustomerService"

# Documentation
git commit -m "docs(api): update CRM endpoints documentation"
```

## Workflow de Review

### Checklist Pull Request

-   [ ] **Tests** : Tous les tests passent
-   [ ] **Coverage** : Minimum 80% couverture
-   [ ] **PHPStan** : Niveau 8 sans erreurs
-   [ ] **PHPCS** : Standards PSR-12 respectés
-   [ ] **Sécurité** : Pas de vulnérabilités introduites
-   [ ] **Performance** : Pas de régression
-   [ ] **Documentation** : PHPDoc à jour

### Template Pull Request

```markdown
## Description

Brève description des changements

## Type de Changement

-   [ ] Bug fix
-   [ ] Nouvelle fonctionnalité
-   [ ] Breaking change
-   [ ] Documentation

## Tests

-   [ ] Tests unitaires ajoutés/modifiés
-   [ ] Tests fonctionnels ajoutés/modifiés
-   [ ] Tous les tests passent

## Checklist

-   [ ] Code suit les standards du projet
-   [ ] Self-review effectuée
-   [ ] Documentation mise à jour
-   [ ] Pas de conflits avec develop
```

## Gestion des Environnements

### Développement Local

-   **Branche** : `develop` ou `feature/xxx`
-   **MySQL** : Docker pour base de données
-   **PHP/npm** : Installation locale Windows
-   **Base** : MySQL via Docker avec fixtures
-   **Cache** : Désactivé pour debug

### Staging (si applicable)

-   **Branche** : `develop`
-   **Environnement** : Similaire à production
-   **Tests** : Validation avant merge vers main

### Production OVH

-   **Branche** : `main/master` uniquement
-   **Déploiement** : Automatique via GitHub Actions
-   **Monitoring** : Surveillance continue
-   **Rollback** : Procédure d'urgence documentée

## Bonnes Pratiques

### Avant Chaque Commit

```bash
# Validation complète (outils locaux)
composer install
npm install
symfony console cache:clear
symfony console phpunit
vendor/bin/phpstan analyse
vendor/bin/phpcs src/
```

### Gestion des Conflits

1. **Prévention** : Rebase fréquent sur develop
2. **Résolution** : Merger develop dans feature avant PR
3. **Communication** : Coordonner équipe sur modifications importantes

### Maintenance Branches

-   Supprimer branches feature après merge
-   Nettoyer branches locales régulièrement
-   Synchroniser develop avec main après déploiement
