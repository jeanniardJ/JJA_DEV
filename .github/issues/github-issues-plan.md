# Issues GitHub pour JJA_DEV CRM

## Issues Prioritaires à Créer

### 🏗️ **Infrastructure & Configuration**

#### Issue #1: Configuration Post-Migration Repository

```markdown
**Title:** 🔧 Finaliser la configuration après migration du repository

**Description:**
Suite à la migration du repository vers `https://github.com/jeanniardJ/JJA_DEV.git`, finaliser la configuration des services externes.

**Tasks:**

-   [ ] Vérifier et mettre à jour les webhooks OVH de déploiement
-   [ ] Valider la configuration GitHub Actions pour le nouveau repository
-   [ ] Tester le workflow de déploiement complet (develop → main → OVH)
-   [ ] Mettre à jour les secrets et variables d'environnement GitHub
-   [ ] Valider les branches protégées et règles de merge
-   [ ] Informer l'équipe de développement des changements

**Priority:** High
**Labels:** infrastructure, deployment, migration
**Assignee:** @jeanniardJ
```

#### Issue #2: Environnement de Développement Docker MySQL

```markdown
**Title:** 🐳 Optimiser l'environnement de développement MySQL Docker

**Description:**
Améliorer la configuration Docker pour MySQL et la stabilité de l'environnement de développement local.

**Tasks:**

-   [ ] Vérifier la persistance des données MySQL entre redémarrages
-   [ ] Optimiser la configuration MySQL pour le développement
-   [ ] Ajouter un service de monitoring MySQL (optionnel)
-   [ ] Documenter les procédures de backup/restore pour le développement
-   [ ] Créer des scripts de réinitialisation rapide de la DB de développement

**Priority:** Medium
**Labels:** development, docker, mysql
**Acceptance Criteria:**

-   MySQL démarre rapidement et de manière fiable
-   Les données persistent entre redémarrages
-   Les migrations s'exécutent sans erreur
```

### 🏢 **Développement CRM - Entités de Base**

#### Issue #3: Entités CRM Fondamentales

```markdown
**Title:** 🏗️ Créer les entités CRM fondamentales (Customer, Contact, Lead)

**Description:**
Développer les entités de base du système CRM en respectant l'architecture et les standards JJA_DEV.

**Tasks:**

-   [ ] Créer l'entité `Customer` dans `src/Entity/CRM/`
-   [ ] Créer l'entité `Contact` dans `src/Entity/CRM/`
-   [ ] Créer l'entité `Lead` dans `src/Entity/CRM/`
-   [ ] Implémenter les relations Doctrine appropriées
-   [ ] Ajouter les contraintes de validation Symfony
-   [ ] Créer les repositories avec requêtes optimisées
-   [ ] Générer et appliquer les migrations
-   [ ] Créer les fixtures de développement

**Priority:** High
**Labels:** crm, entity, backend
**Dependencies:** Infrastructure prête
**Acceptance Criteria:**

-   Entités conformes aux standards Symfony 6.4
-   Validations côté serveur fonctionnelles
-   Relations entre entités correctes
-   Index base de données appropriés
```

#### Issue #4: Services CRM de Base

```markdown
**Title:** ⚙️ Développer les services métier CRM (Customer, Contact, Lead)

**Description:**
Implémenter les services métier pour la gestion des entités CRM avec patterns et interfaces.

**Tasks:**

-   [ ] Créer `CustomerService` avec interface dans `src/Service/CRM/`
-   [ ] Créer `ContactService` avec interface dans `src/Service/CRM/`
-   [ ] Créer `LeadService` avec interface dans `src/Service/CRM/`
-   [ ] Implémenter les méthodes CRUD avec validation
-   [ ] Ajouter la gestion des exceptions métier
-   [ ] Implémenter l'audit trail pour les actions critiques
-   [ ] Créer les tests unitaires (couverture 80%+)

**Priority:** High
**Labels:** crm, service, backend, testing
**Dependencies:** Issue #3 (Entités CRM)
**Acceptance Criteria:**

-   Services stateless avec injection de dépendances
-   Gestion d'erreurs robuste
-   Tests unitaires complets
-   Documentation PHPDoc
```

### 🖥️ **Interface Administration CRM**

#### Issue #5: Controllers Admin CRM

```markdown
**Title:** 🎮 Développer les controllers d'administration CRM

**Description:**
Créer les controllers pour l'interface d'administration CRM dans le BackOffice, en héritant de CMS_SF.

**Tasks:**

-   [ ] Créer `CustomerController` dans `src/Controller/Admin/CRM/`
-   [ ] Créer `ContactController` dans `src/Controller/Admin/CRM/`
-   [ ] Créer `LeadController` dans `src/Controller/Admin/CRM/`
-   [ ] Implémenter les routes avec préfixe `/admin/crm/`
-   [ ] Ajouter la pagination avec KnpPaginatorBundle
-   [ ] Implémenter la sécurité avec rôles CRM
-   [ ] Créer les tests fonctionnels

**Priority:** High
**Labels:** crm, controller, admin, security
**Dependencies:** Issue #4 (Services CRM)
**Acceptance Criteria:**

-   Routes sécurisées avec permissions appropriées
-   Pagination fonctionnelle
-   Gestion d'erreurs utilisateur
-   Tests fonctionnels passants
```

#### Issue #6: Templates et Interface CRM

```markdown
**Title:** 🎨 Créer l'interface utilisateur CRM (Templates Twig)

**Description:**
Développer les templates Twig pour l'interface CRM en héritant du design CMS_SF.

**Tasks:**

-   [ ] Créer les templates dans `templates/admin/crm/`
-   [ ] Implémenter les listes avec pagination
-   [ ] Créer les formulaires de création/édition
-   [ ] Ajouter les vues de détail
-   [ ] Intégrer Bootstrap 5.x pour la cohérence visuelle
-   [ ] Implémenter les composants React UX si nécessaire
-   [ ] Optimiser pour le responsive design
-   [ ] Tester l'accessibilité

**Priority:** Medium
**Labels:** crm, frontend, templates, ui/ux
**Dependencies:** Issue #5 (Controllers CRM)
**Acceptance Criteria:**

-   Interface cohérente avec CMS_SF
-   Responsive design
-   Accessibilité conforme
-   Performance optimisée
```

### 📋 **Bundle Devis & Factures**

#### Issue #7: Architecture Bundle QuoteInvoice

```markdown
**Title:** 📦 Créer l'architecture du Bundle Devis & Factures

**Description:**
Développer un bundle Symfony réutilisable pour la gestion des devis et factures.

**Tasks:**

-   [ ] Créer la structure `src/Bundle/QuoteInvoiceBundle/`
-   [ ] Implémenter la classe principale `QuoteInvoiceBundle`
-   [ ] Créer la configuration DI et Extension
-   [ ] Définir les entités Quote et Invoice
-   [ ] Créer les services PDF et Email
-   [ ] Implémenter les controllers du bundle
-   [ ] Créer la configuration des routes
-   [ ] Ajouter les tests du bundle

**Priority:** Medium
**Labels:** bundle, quote, invoice, pdf
**Dependencies:** Issue #3 (Entités CRM)
**Acceptance Criteria:**

-   Bundle autonome et réutilisable
-   Configuration flexible via YAML
-   Services découplés avec interfaces
-   Tests complets
```

### 🧪 **Tests et Qualité**

#### Issue #8: Stratégie de Tests CRM

```markdown
**Title:** 🧪 Implémenter la stratégie de tests CRM complète

**Description:**
Mettre en place une stratégie de tests robuste pour toutes les fonctionnalités CRM.

**Tasks:**

-   [ ] Créer les fixtures de test pour le CRM
-   [ ] Implémenter les tests unitaires (Services)
-   [ ] Créer les tests fonctionnels (Controllers)
-   [ ] Ajouter les tests d'intégration (Workflows CRM)
-   [ ] Configurer la couverture de code (80% minimum)
-   [ ] Intégrer PHPStan niveau 8
-   [ ] Configurer PHPCS pour PSR-12
-   [ ] Créer les tests de performance

**Priority:** High
**Labels:** testing, quality, phpstan, phpcs
**Dependencies:** Issues #3, #4, #5
**Acceptance Criteria:**

-   Couverture de tests ≥ 80%
-   PHPStan niveau 8 sans erreurs
-   PHPCS conforme PSR-12
-   Tests rapides (< 5 minutes)
```

### 🔒 **Sécurité et Permissions**

#### Issue #9: Système de Rôles et Permissions CRM

```markdown
**Title:** 🔒 Implémenter le système de rôles et permissions CRM

**Description:**
Étendre le système d'authentification CMS_SF avec des rôles spécifiques au CRM.

**Tasks:**

-   [ ] Définir les rôles CRM (ROLE_CRM_MANAGER, ROLE_CRM_ADMIN)
-   [ ] Étendre la configuration security.yaml
-   [ ] Implémenter les voters personnalisés si nécessaire
-   [ ] Sécuriser toutes les routes CRM
-   [ ] Créer des tests de sécurité
-   [ ] Documenter les permissions

**Priority:** High
**Labels:** security, roles, permissions
**Dependencies:** Issue #5 (Controllers)
**Acceptance Criteria:**

-   Système de rôles cohérent avec CMS_SF
-   Toutes les actions sécurisées
-   Tests de sécurité complets
-   Documentation claire
```

### 📊 **Performance et Optimisation**

#### Issue #10: Optimisation Performance CRM

```markdown
**Title:** ⚡ Optimiser les performances du système CRM

**Description:**
Implémenter les optimisations de performance pour le CRM en production.

**Tasks:**

-   [ ] Créer les index de base de données optimisés
-   [ ] Implémenter le cache intelligent pour les requêtes fréquentes
-   [ ] Optimiser les requêtes Doctrine avec QueryBuilder
-   [ ] Ajouter la pagination intelligente
-   [ ] Implémenter le lazy loading pour les relations
-   [ ] Créer les métriques de performance
-   [ ] Optimiser les assets frontend

**Priority:** Medium
**Labels:** performance, optimization, database
**Dependencies:** Issues #3, #4, #5
**Acceptance Criteria:**

-   Temps de réponse < 500ms pour les listes
-   Pagination efficace pour grandes datasets
-   Cache hit ratio > 80%
-   Métriques de monitoring en place
```

### 📚 **Documentation et Formation**

#### Issue #11: Documentation Utilisateur CRM

```markdown
**Title:** 📚 Créer la documentation utilisateur et développeur CRM

**Description:**
Développer une documentation complète pour les utilisateurs et développeurs du CRM.

**Tasks:**

-   [ ] Rédiger le guide utilisateur CRM
-   [ ] Créer la documentation API
-   [ ] Documenter l'architecture technique
-   [ ] Créer des tutoriels vidéo (optionnel)
-   [ ] Rédiger les bonnes pratiques de développement
-   [ ] Créer un guide de déploiement
-   [ ] Documenter les procédures de maintenance

**Priority:** Low
**Labels:** documentation, training
**Dependencies:** Toutes les fonctionnalités implémentées
**Acceptance Criteria:**

-   Documentation complète et à jour
-   Exemples pratiques
-   Guide de troubleshooting
-   Format accessible (Markdown + images)
```

## Planning Suggéré

### Sprint 1 (Semaines 1-2)

-   Issue #1: Configuration post-migration
-   Issue #2: Environnement Docker
-   Issue #3: Entités CRM fondamentales

### Sprint 2 (Semaines 3-4)

-   Issue #4: Services CRM
-   Issue #9: Sécurité et permissions
-   Issue #8: Tests (partie 1)

### Sprint 3 (Semaines 5-6)

-   Issue #5: Controllers Admin
-   Issue #6: Templates et Interface
-   Issue #8: Tests (partie 2)

### Sprint 4 (Semaines 7-8)

-   Issue #7: Bundle QuoteInvoice
-   Issue #10: Optimisation performance

### Sprint 5 (Semaines 9-10)

-   Issue #11: Documentation
-   Finalisation et déploiement
