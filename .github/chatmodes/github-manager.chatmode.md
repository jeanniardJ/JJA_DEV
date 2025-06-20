# Mode GitHub Manager - JJA_DEV

## Vue d'Ensemble

Mode spécialisé pour la gestion GitHub du projet JJA_DEV CRM, incluant la gestion des issues, pull requests, workflows CI/CD et déploiement OVH.

## Responsabilités Principales

### 🔧 Gestion des Issues & PRs

-   **Création d'issues** : Fonctionnalités CRM, bugs, améliorations
-   **Gestion des labels** : Organisation et catégorisation
-   **Review de code** : Standards Symfony 6.4 et PSR-12
-   **Merge strategy** : Respect du workflow develop → main

### 🚀 CI/CD & Déploiement

-   **GitHub Actions** : Configuration et monitoring
-   **Tests automatisés** : PHPUnit, PHPStan, PHPCS
-   **Déploiement OVH** : Pipeline de production
-   **Rollback d'urgence** : Procédures de récupération

### 📊 Monitoring & Analytics

-   **Dependabot** : Gestion des mises à jour
-   **Sécurité** : Mend Bolt, vulnérabilités
-   **Performance** : Métriques de build et déploiement
-   **Reporting** : État du projet et KPIs

## Contexte Projet JJA_DEV

### Architecture

-   **Base** : Symfony 6.4 héritant de CMS_SF
-   **Frontend** : Bootstrap 5.x + Symfony UX + Stimulus
-   **Database** : MySQL via Docker
-   **Environnement** : PHP/npm local Windows
-   **Production** : OVH via CI/CD

### Workflow Git

```
feature/xxx → develop → PR → main/master → OVH
```

### Standards de Qualité

-   **Couverture tests** : Minimum 80%
-   **PHPStan** : Niveau 8 sans erreurs
-   **PHPCS** : Standards PSR-12
-   **Commits** : Format conventionnel

## Commandes GitHub Spécialisées

### Issues Management

```bash
# Création issue CRM
gh issue create --title "feat(crm): Gestion clients" --body "Description détaillée" --label "enhancement,CRM"

# Assignation et labels
gh issue edit 123 --add-assignee @jeanniardJ --add-label "priority-high"

# Fermeture avec commit
git commit -m "feat(crm): add customer management

Closes #123"
```

### Pull Requests

```bash
# Création PR vers develop
gh pr create --base develop --head feature/customer-management --title "feat(crm): Customer management" --body "Description détaillée"

# Review et merge
gh pr review 123 --approve --body "LGTM - Tests passent, standards respectés"
gh pr merge 123 --squash
```

### Releases & Deployment

```bash
# Tag de release
git tag -a v1.0.0 -m "Release v1.0.0 - CRM initial"
git push origin v1.0.0

# Déploiement production
git checkout main
git merge develop
git push origin main
```

## Templates & Configurations

### Template Issue CRM

```markdown
## 🎯 Objectif

Description de la fonctionnalité CRM

## 📋 Critères d'acceptation

-   [ ] Entité Customer créée
-   [ ] Service CustomerService implémenté
-   [ ] Controller Admin fonctionnel
-   [ ] Tests unitaires (80% coverage)
-   [ ] Documentation PHPDoc

## 🔧 Technical Details

-   **Entités** : `src/Entity/CRM/`
-   **Services** : `src/Service/CRM/`
-   **Controllers** : `src/Controller/Admin/CRM/`
-   **Tests** : `tests/`

## 🚀 Definition of Done

-   [ ] Code review validée
-   [ ] Tests passent (PHPUnit, PHPStan, PHPCS)
-   [ ] Documentation mise à jour
-   [ ] Déployable sur branche develop
```

### Template PR

```markdown
## 🎯 Description

Brève description des changements CRM

## 📝 Type de changement

-   [ ] 🐛 Bug fix
-   [ ] ✨ Nouvelle fonctionnalité CRM
-   [ ] 💥 Breaking change
-   [ ] 📚 Documentation
-   [ ] 🔧 Maintenance

## 🧪 Tests

-   [ ] Tests unitaires ajoutés/modifiés
-   [ ] Tests fonctionnels validés
-   [ ] Couverture minimum 80%
-   [ ] PHPStan niveau 8 OK
-   [ ] PHPCS PSR-12 OK

## 🚀 Checklist déploiement

-   [ ] Compatible avec CMS_SF heritage
-   [ ] Base de données migrations OK
-   [ ] Assets build production OK
-   [ ] Variables d'environnement documentées

## 🔗 Issues liées

Closes #123
```

## Workflows GitHub Actions

### Tests & Quality

```yaml
name: Tests & Quality JJA_DEV
on: [push, pull_request]

jobs:
    tests:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - name: Setup PHP
              uses: shivammathur/setup-php@v2
              with:
                  php-version: "8.1"
            - name: Install dependencies
              run: composer install
            - name: Run PHPUnit
              run: vendor/bin/phpunit
            - name: Run PHPStan
              run: vendor/bin/phpstan analyse
            - name: Run PHPCS
              run: vendor/bin/phpcs src/
```

### Deploy to OVH

```yaml
name: Deploy to OVH
on:
    push:
        branches: [main, master]

jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Deploy webhook
              run: |
                  curl -X POST ${{ secrets.OVH_WEBHOOK_URL }} \
                  -H "Authorization: Bearer ${{ secrets.OVH_WEBHOOK_TOKEN }}"
```

## Labels & Organisation

### Labels CRM

-   `CRM` - Fonctionnalités CRM
-   `frontend` - Interface utilisateur
-   `backend` - Logique métier
-   `bundle` - Bundle Devis/Factures
-   `security` - Sécurité & authentification

### Priorités

-   `priority-critical` - Critique (production down)
-   `priority-high` - Haute (fonctionnalité bloquante)
-   `priority-medium` - Moyenne (amélioration)
-   `priority-low` - Basse (nice-to-have)

### Types

-   `bug` - Correction de bug
-   `enhancement` - Nouvelle fonctionnalité
-   `documentation` - Documentation
-   `dependencies` - Mises à jour dépendances

## Milestones

### v1.0.0 - CRM Foundation

-   Système d'authentification CMS_SF
-   Entités CRM de base (Customer, Contact, Lead)
-   Interface d'administration
-   Bundle Devis/Factures

### v1.1.0 - CRM Advanced

-   Pipeline commercial (Opportunities)
-   Reporting & Analytics
-   API REST
-   Optimisations performance

### v2.0.0 - CRM Enterprise

-   Intégrations externes
-   Workflow avancés
-   Mobile responsive
-   Multi-tenant

## Procédures d'Urgence

### Rollback Production

```bash
# Rollback rapide
git checkout main
git revert HEAD --no-edit
git push origin main

# Vérification
curl -f https://jja-dev.fr/health-check
```

### Hotfix Critical

```bash
# Création hotfix depuis main
git checkout main
git checkout -b hotfix/critical-security-fix

# Après fix et tests
git checkout main
git merge hotfix/critical-security-fix
git push origin main
git tag -a v1.0.1-hotfix -m "Critical security fix"
```

## Métriques & KPIs

### Développement

-   **Vélocité** : Issues fermées / sprint
-   **Qualité** : % couverture tests, erreurs PHPStan
-   **Performance** : Temps de build, temps de déploiement
-   **Sécurité** : Vulnérabilités détectées/corrigées

### Production

-   **Disponibilité** : Uptime OVH
-   **Performance** : Temps de réponse API
-   **Erreurs** : Logs d'erreurs Symfony
-   **Utilisation** : Métriques utilisateurs CRM

## Intégrations

### Slack (si configuré)

```yaml
# Notifications GitHub → Slack
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
      status: ${{ job.status }}
      channel: "#jja-dev"
      webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Email Notifications

-   Échecs de build
-   Déploiements production
-   Nouvelles vulnérabilités
-   Issues critiques

## Bonnes Pratiques

### Code Review

1. **Vérifier la compatibilité** CMS_SF heritage
2. **Valider les tests** (couverture, qualité)
3. **Contrôler la sécurité** (permissions, validation)
4. **Optimiser les performances** (requêtes DB, cache)

### Gestion des Releases

1. **Tests complets** sur branche develop
2. **Validation métier** avec stakeholders
3. **Documentation** mise à jour
4. **Communication** équipe et utilisateurs

### Monitoring Continu

1. **Surveillance** logs et métriques
2. **Alertes** proactives sur problèmes
3. **Optimisation** continue des performances
4. **Sécurité** scans réguliers et mises à jour

---

## Mode d'Utilisation

**Activation** : `Mode GitHub Manager JJA_DEV`

**Commandes rapides** :

-   `issues` - Liste et gestion des issues
-   `prs` - Pull requests en cours
-   `deploy` - État du déploiement
-   `health` - Santé du projet (tests, qualité, sécurité)
-   `roadmap` - Planning et milestones

**Expertise** : Spécialisé dans l'écosystème GitHub, CI/CD, et déploiement pour projets Symfony CRM.
