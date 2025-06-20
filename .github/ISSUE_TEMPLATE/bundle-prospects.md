---
name: Bundle Gestion des Prospects
about: Développement du bundle Symfony pour la gestion complète des prospects CRM
title: "[BUNDLE] Créer le bundle de gestion des prospects"
labels: ["enhancement", "bundle", "crm", "prospects", "priority:high"]
assignees: ""
---

## 🎯 Objectif

Développer un bundle Symfony réutilisable pour la gestion complète des prospects dans le système CRM JJA_DEV. Ce bundle doit permettre la gestion du cycle de vie complet des prospects, de la génération de leads jusqu'à la conversion en clients.

## 📋 Description

Le bundle ProspectsBundle doit fournir une solution modulaire et autonome pour :

-   **Gestion des leads** : Capture et qualification des prospects
-   **Scoring automatique** : Évaluation et notation des prospects
-   **Pipeline commercial** : Suivi des étapes de conversion
-   **Campagnes marketing** : Gestion des actions commerciales
-   **Rapports & Analytics** : Statistiques de conversion et performance

## 🏗️ Architecture Technique

### Structure du Bundle

```
src/Bundle/ProspectsBundle/
├── ProspectsBundle.php
├── DependencyInjection/
│   ├── Configuration.php
│   └── ProspectsBundleExtension.php
├── Entity/
│   ├── Lead.php              # Prospects/Leads
│   ├── LeadSource.php        # Sources de prospects
│   ├── LeadStatus.php        # Statuts prospects
│   ├── Opportunity.php       # Opportunités commerciales
│   ├── Campaign.php          # Campagnes marketing
│   └── Activity.php          # Activités/Interactions
├── Service/
│   ├── LeadService.php
│   ├── ScoringService.php
│   ├── ConversionService.php
│   ├── CampaignService.php
│   └── ReportingService.php
├── Controller/
│   ├── LeadController.php
│   ├── OpportunityController.php
│   └── CampaignController.php
├── Form/
│   ├── LeadType.php
│   ├── OpportunityType.php
│   └── CampaignType.php
├── Repository/
│   ├── LeadRepository.php
│   ├── OpportunityRepository.php
│   └── CampaignRepository.php
├── Resources/
│   ├── config/
│   │   ├── services.yaml
│   │   └── routes.yaml
│   └── views/
│       ├── lead/
│       ├── opportunity/
│       └── campaign/
└── Tests/
    ├── Unit/
    ├── Functional/
    └── Integration/
```

## 🔧 Fonctionnalités Requises

### Gestion des Leads

-   [ ] **Création de leads** : Formulaire de capture multi-sources
-   [ ] **Qualification automatique** : Scoring basé sur critères configurables
-   [ ] **Enrichissement données** : API externes (si applicable)
-   [ ] **Statuts personnalisables** : Workflow configurable
-   [ ] **Assignation commerciaux** : Distribution automatique/manuelle

### Pipeline Commercial

-   [ ] **Étapes conversion** : Définition workflow de vente
-   [ ] **Opportunités** : Gestion potentiel commercial de chaque lead
-   [ ] **Prévisions** : Calcul probabilités de conversion
-   [ ] **Historique activités** : Traçabilité interactions
-   [ ] **Alertes/Notifications** : Relances automatiques

### Scoring et Qualification

-   [ ] **Système de scoring** : Points basés sur critères multiples
-   [ ] **Lead scoring automatique** : Calcul en temps réel
-   [ ] **Segmentation** : Classification automatique prospects
-   [ ] **Qualification progressive** : Évolution du score
-   [ ] **Seuils de conversion** : Déclenchement actions automatiques

### Campagnes Marketing

-   [ ] **Création campagnes** : Gestion campagnes multi-canaux
-   [ ] **Attribution leads** : Traçabilité source acquisition
-   [ ] **ROI campagnes** : Calcul retour sur investissement
-   [ ] **A/B Testing** : Tests de performance campagnes
-   [ ] **Automation** : Workflows automatisés

## 📊 Entités Principales

### Lead

```php
- id (int, auto)
- firstName (string, 100)
- lastName (string, 100)
- email (string, 255, unique)
- phone (string, 20, nullable)
- company (string, 255, nullable)
- position (string, 100, nullable)
- source (LeadSource, relation)
- status (LeadStatus, relation)
- score (int, default: 0)
- qualificationLevel (enum: cold|warm|hot)
- assignedTo (User, relation, nullable)
- convertedToCustomer (bool, default: false)
- convertedAt (datetime, nullable)
- createdAt (datetime)
- updatedAt (datetime)
```

### Opportunity

```php
- id (int, auto)
- lead (Lead, relation)
- title (string, 255)
- description (text, nullable)
- value (decimal, precision: 10, scale: 2)
- probability (int, 0-100)
- stage (string, 50)
- expectedCloseDate (date, nullable)
- actualCloseDate (date, nullable)
- status (enum: open|won|lost)
- assignedTo (User, relation)
- createdAt (datetime)
- updatedAt (datetime)
```

### Campaign

```php
- id (int, auto)
- name (string, 255)
- description (text, nullable)
- type (enum: email|social|seo|paid|event)
- budget (decimal, nullable)
- startDate (date)
- endDate (date, nullable)
- status (enum: draft|active|paused|completed)
- leadsGenerated (int, default: 0)
- conversions (int, default: 0)
- roi (decimal, nullable)
- createdAt (datetime)
- updatedAt (datetime)
```

## 🔗 Intégrations Requises

### Avec CMS_SF

-   [ ] **Système d'authentification** : Utilisation rôles CMS_SF
-   [ ] **Interface BackOffice** : Intégration navigation admin
-   [ ] **Templates de base** : Héritage design CMS_SF
-   [ ] **Permissions** : Respect système de permissions existant

### Avec Autres Bundles

-   [ ] **QuoteInvoiceBundle** : Conversion prospect → devis
-   [ ] **AppointmentBundle** : Planification rendez-vous commerciaux
-   [ ] **CustomerBundle** : Conversion lead → client

### APIs Externes (optionnel)

-   [ ] **Enrichissement données** : APIs d'information entreprises
-   [ ] **Email marketing** : Intégration plateformes emailing
-   [ ] **Analytics** : Tracking comportement web

## 🎨 Interface Utilisateur

### Dashboard Prospects

-   [ ] **Vue d'ensemble** : KPIs et métriques principales
-   [ ] **Pipeline visuel** : Kanban des opportunités
-   [ ] **Graphiques performance** : Charts conversion et ROI
-   [ ] **Alertes** : Notifications prospects chauds
-   [ ] **Actions rapides** : Boutons actions courantes

### Formulaires

-   [ ] **Capture leads** : Formulaire multi-étapes
-   [ ] **Qualification** : Interface de scoring
-   [ ] **Opportunités** : Gestion pipeline commercial
-   [ ] **Campagnes** : Configuration et suivi
-   [ ] **Rapports** : Génération analyses personnalisées

## 📝 Configuration Bundle

### Services Configurables

```yaml
prospects:
    scoring:
        email_score: 10
        phone_score: 15
        company_score: 20
        position_score: 25
    qualification:
        cold_threshold: 0
        warm_threshold: 50
        hot_threshold: 80
    automation:
        auto_assignment: true
        notification_alerts: true
```

### Permissions Requises

-   `ROLE_PROSPECTS_VIEW` : Consultation prospects
-   `ROLE_PROSPECTS_EDIT` : Modification prospects
-   `ROLE_PROSPECTS_DELETE` : Suppression prospects
-   `ROLE_PROSPECTS_ADMIN` : Administration complète
-   `ROLE_CAMPAIGNS_MANAGER` : Gestion campagnes

## ✅ Tests Requis

### Tests Unitaires

-   [ ] **LeadService** : Création, qualification, conversion
-   [ ] **ScoringService** : Calcul scores et seuils
-   [ ] **ConversionService** : Transformation lead → client
-   [ ] **CampaignService** : Gestion campagnes et ROI

### Tests Fonctionnels

-   [ ] **Controllers** : Routes et actions CRUD
-   [ ] **Formulaires** : Validation et soumission
-   [ ] **Sécurité** : Contrôle accès et permissions
-   [ ] **API** : Endpoints et réponses JSON

### Tests d'Intégration

-   [ ] **Workflow complet** : Lead → Opportunité → Client
-   [ ] **Intégration bundles** : Communication avec autres modules
-   [ ] **Base de données** : Migrations et contraintes
-   [ ] **Performance** : Optimisation requêtes et cache

## 📈 Métriques et KPIs

### Indicateurs Clés

-   [ ] **Taux de conversion** : Lead → Opportunité → Client
-   [ ] **Temps de conversion** : Durée moyenne cycle de vente
-   [ ] **ROI campagnes** : Retour sur investissement marketing
-   [ ] **Score moyen leads** : Qualité prospects générés
-   [ ] **Taux d'assignation** : Distribution équilibrée commerciaux

### Rapports Automatiques

-   [ ] **Dashboard hebdomadaire** : Performance équipe commerciale
-   [ ] **Analyse mensuelle** : Tendances et prévisions
-   [ ] **ROI campagnes** : Performance marketing par canal
-   [ ] **Pipeline forecast** : Prévisions ventes futures

## 📚 Documentation Requise

-   [ ] **Guide installation** : Procédure activation bundle
-   [ ] **Configuration** : Paramètres et options disponibles
-   [ ] **Guide utilisateur** : Manuel fonctionnalités CRM
-   [ ] **API documentation** : Endpoints et intégrations
-   [ ] **Tests guide** : Procédures tests et validation

## 🎯 Critères d'Acceptation

### Technique

-   [ ] Bundle autonome et réutilisable
-   [ ] Couverture tests minimum 80%
-   [ ] Conformité standards PSR-12
-   [ ] Documentation complète
-   [ ] Performance optimisée (< 200ms par page)

### Fonctionnel

-   [ ] Workflow complet lead → client
-   [ ] Interface intuitive et responsive
-   [ ] Intégration parfaite CMS_SF
-   [ ] Sécurité rôles et permissions
-   [ ] Reporting et analytics fonctionnels

### Qualité

-   [ ] Code reviewed et validé
-   [ ] Tests unitaires et fonctionnels passants
-   [ ] Performance validée en charge
-   [ ] Sécurité auditée
-   [ ] Documentation utilisateur complète

## ⏰ Priorité

**Priorité : HAUTE** - Bundle essentiel au CRM, développement après QuoteInvoiceBundle

## 🔄 Dépendances

-   [x] Bundle QuoteInvoiceBundle (priorité 1)
-   [ ] Bundle AppointmentBundle (développement parallèle possible)
-   [ ] Système authentification CMS_SF (existant)
-   [ ] Framework Symfony 6.4 (existant)

## 📋 Checklist Développement

### Phase 1 : Structure Bundle

-   [ ] Création structure répertoires
-   [ ] Configuration bundle et services
-   [ ] Définition entités principales
-   [ ] Repositories et relations

### Phase 2 : Services Métier

-   [ ] LeadService et qualification
-   [ ] ScoringService et automation
-   [ ] ConversionService
-   [ ] Tests unitaires services

### Phase 3 : Interface Admin

-   [ ] Controllers CRUD
-   [ ] Formulaires Symfony
-   [ ] Templates Twig
-   [ ] Intégration navigation CMS_SF

### Phase 4 : Fonctionnalités Avancées

-   [ ] Dashboard et KPIs
-   [ ] Reporting et analytics
-   [ ] Automation et workflows
-   [ ] Tests fonctionnels complets

### Phase 5 : Intégrations

-   [ ] Avec QuoteInvoiceBundle
-   [ ] Avec AppointmentBundle
-   [ ] APIs externes (optionnel)
-   [ ] Tests d'intégration

---

**Note** : Ce bundle est crucial pour la pipeline commerciale du CRM JJA_DEV. Il doit être développé en respectant l'architecture modulaire et les standards établis dans le projet.
