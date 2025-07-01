#!/bin/bash

# Script pour créer les issues GitHub pour JJA_DEV CRM
# Usage: ./create-github-issues.sh

# Configuration
REPO="jeanniardJ/JJA_DEV"
GITHUB_TOKEN="${GITHUB_TOKEN:-}" # Token GitHub (variable d'environnement)

# Vérification du token GitHub
if [ -z "$GITHUB_TOKEN" ]; then
    echo "❌ Erreur: GITHUB_TOKEN non défini"
    echo "Exportez votre token GitHub: export GITHUB_TOKEN=your_token_here"
    exit 1
fi

echo "🚀 Création des issues GitHub pour JJA_DEV CRM..."

# Issue #1: Configuration Post-Migration
gh issue create \
    --repo "$REPO" \
    --title "🔧 Finaliser la configuration après migration du repository" \
    --body-file ".github/issues/templates/01-post-migration-config.md" \
    --label "infrastructure,deployment,migration,high-priority" \
    --milestone "Sprint 1"

echo "✅ Issue #1 créée: Configuration Post-Migration"

# Issue #2: Environnement Docker
gh issue create \
    --repo "$REPO" \
    --title "🐳 Optimiser l'environnement de développement MySQL Docker" \
    --body "Améliorer la configuration Docker pour MySQL et la stabilité de l'environnement de développement local.

## Tâches:
- [ ] Vérifier la persistance des données MySQL entre redémarrages
- [ ] Optimiser la configuration MySQL pour le développement  
- [ ] Ajouter un service de monitoring MySQL (optionnel)
- [ ] Documenter les procédures de backup/restore pour le développement
- [ ] Créer des scripts de réinitialisation rapide de la DB de développement

## Critères d'acceptation:
- MySQL démarre rapidement et de manière fiable
- Les données persistent entre redémarrages
- Les migrations s'exécutent sans erreur" \
    --label "development,docker,mysql,medium-priority" \
    --milestone "Sprint 1"

echo "✅ Issue #2 créée: Environnement Docker"

# Issue #3: Entités CRM
gh issue create \
    --repo "$REPO" \
    --title "🏗️ Créer les entités CRM fondamentales (Customer, Contact, Lead)" \
    --body-file ".github/issues/templates/03-crm-entities.md" \
    --label "crm,entity,backend,high-priority,foundation" \
    --milestone "Sprint 1"

echo "✅ Issue #3 créée: Entités CRM"

# Issue #4: Services CRM
gh issue create \
    --repo "$REPO" \
    --title "⚙️ Développer les services métier CRM (Customer, Contact, Lead)" \
    --body "Implémenter les services métier pour la gestion des entités CRM avec patterns et interfaces.

## Tâches:
- [ ] Créer CustomerService avec interface dans src/Service/CRM/
- [ ] Créer ContactService avec interface dans src/Service/CRM/
- [ ] Créer LeadService avec interface dans src/Service/CRM/
- [ ] Implémenter les méthodes CRUD avec validation
- [ ] Ajouter la gestion des exceptions métier
- [ ] Implémenter l'audit trail pour les actions critiques
- [ ] Créer les tests unitaires (couverture 80%+)

## Critères d'acceptation:
- Services stateless avec injection de dépendances
- Gestion d'erreurs robuste
- Tests unitaires complets
- Documentation PHPDoc" \
    --label "crm,service,backend,testing,high-priority" \
    --milestone "Sprint 2"

echo "✅ Issue #4 créée: Services CRM"

# Issue #5: Controllers CRM
gh issue create \
    --repo "$REPO" \
    --title "🎮 Développer les controllers d'administration CRM" \
    --body "Créer les controllers pour l'interface d'administration CRM dans le BackOffice, en héritant de CMS_SF.

## Tâches:
- [ ] Créer CustomerController dans src/Controller/Admin/CRM/
- [ ] Créer ContactController dans src/Controller/Admin/CRM/
- [ ] Créer LeadController dans src/Controller/Admin/CRM/
- [ ] Implémenter les routes avec préfixe /admin/crm/
- [ ] Ajouter la pagination avec KnpPaginatorBundle
- [ ] Implémenter la sécurité avec rôles CRM
- [ ] Créer les tests fonctionnels

## Critères d'acceptation:
- Routes sécurisées avec permissions appropriées
- Pagination fonctionnelle
- Gestion d'erreurs utilisateur
- Tests fonctionnels passants" \
    --label "crm,controller,admin,security,high-priority" \
    --milestone "Sprint 3"

echo "✅ Issue #5 créée: Controllers CRM"

# Issue #6: Templates CRM
gh issue create \
    --repo "$REPO" \
    --title "🎨 Créer l'interface utilisateur CRM (Templates Twig)" \
    --body "Développer les templates Twig pour l'interface CRM en héritant du design CMS_SF.

## Tâches:
- [ ] Créer les templates dans templates/admin/crm/
- [ ] Implémenter les listes avec pagination
- [ ] Créer les formulaires de création/édition
- [ ] Ajouter les vues de détail
- [ ] Intégrer Bootstrap 5.x pour la cohérence visuelle
- [ ] Implémenter les composants React UX si nécessaire
- [ ] Optimiser pour le responsive design
- [ ] Tester l'accessibilité

## Critères d'acceptation:
- Interface cohérente avec CMS_SF
- Responsive design
- Accessibilité conforme
- Performance optimisée" \
    --label "crm,frontend,templates,ui/ux,medium-priority" \
    --milestone "Sprint 3"

echo "✅ Issue #6 créée: Templates CRM"

# Issue #7: Bundle QuoteInvoice
gh issue create \
    --repo "$REPO" \
    --title "📦 Créer l'architecture du Bundle Devis & Factures" \
    --body-file ".github/issues/templates/07-quote-invoice-bundle.md" \
    --label "bundle,quote,invoice,pdf,email,medium-priority" \
    --milestone "Sprint 4"

echo "✅ Issue #7 créée: Bundle QuoteInvoice"

# Issue #8: Tests CRM
gh issue create \
    --repo "$REPO" \
    --title "🧪 Implémenter la stratégie de tests CRM complète" \
    --body "Mettre en place une stratégie de tests robuste pour toutes les fonctionnalités CRM.

## Tâches:
- [ ] Créer les fixtures de test pour le CRM
- [ ] Implémenter les tests unitaires (Services)
- [ ] Créer les tests fonctionnels (Controllers)
- [ ] Ajouter les tests d'intégration (Workflows CRM)
- [ ] Configurer la couverture de code (80% minimum)
- [ ] Intégrer PHPStan niveau 8
- [ ] Configurer PHPCS pour PSR-12
- [ ] Créer les tests de performance

## Critères d'acceptation:
- Couverture de tests ≥ 80%
- PHPStan niveau 8 sans erreurs
- PHPCS conforme PSR-12
- Tests rapides (< 5 minutes)" \
    --label "testing,quality,phpstan,phpcs,high-priority" \
    --milestone "Sprint 2"

echo "✅ Issue #8 créée: Tests CRM"

# Issue #9: Sécurité CRM
gh issue create \
    --repo "$REPO" \
    --title "🔒 Implémenter le système de rôles et permissions CRM" \
    --body "Étendre le système d'authentification CMS_SF avec des rôles spécifiques au CRM.

## Tâches:
- [ ] Définir les rôles CRM (ROLE_CRM_MANAGER, ROLE_CRM_ADMIN)
- [ ] Étendre la configuration security.yaml
- [ ] Implémenter les voters personnalisés si nécessaire
- [ ] Sécuriser toutes les routes CRM
- [ ] Créer des tests de sécurité
- [ ] Documenter les permissions

## Critères d'acceptation:
- Système de rôles cohérent avec CMS_SF
- Toutes les actions sécurisées
- Tests de sécurité complets
- Documentation claire" \
    --label "security,roles,permissions,high-priority" \
    --milestone "Sprint 2"

echo "✅ Issue #9 créée: Sécurité CRM"

# Issue #10: Performance
gh issue create \
    --repo "$REPO" \
    --title "⚡ Optimiser les performances du système CRM" \
    --body "Implémenter les optimisations de performance pour le CRM en production.

## Tâches:
- [ ] Créer les index de base de données optimisés
- [ ] Implémenter le cache intelligent pour les requêtes fréquentes
- [ ] Optimiser les requêtes Doctrine avec QueryBuilder
- [ ] Ajouter la pagination intelligente
- [ ] Implémenter le lazy loading pour les relations
- [ ] Créer les métriques de performance
- [ ] Optimiser les assets frontend

## Critères d'acceptation:
- Temps de réponse < 500ms pour les listes
- Pagination efficace pour grandes datasets
- Cache hit ratio > 80%
- Métriques de monitoring en place" \
    --label "performance,optimization,database,medium-priority" \
    --milestone "Sprint 4"

echo "✅ Issue #10 créée: Performance"

echo ""
echo "🎉 Toutes les issues ont été créées avec succès!"
echo "👉 Consultez-les sur: https://github.com/$REPO/issues"
