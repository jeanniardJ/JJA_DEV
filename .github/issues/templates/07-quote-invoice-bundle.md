# 📦 Créer l'architecture du Bundle Devis & Factures

## Description

Développer un bundle Symfony réutilisable pour la gestion des devis et factures, conformément aux standards JJA_DEV et aux bonnes pratiques Symfony.

## Contexte

Le système CRM nécessite un module de gestion des devis et factures qui doit être architecturé comme un bundle autonome et réutilisable, permettant la génération PDF et l'envoi d'emails.

## Tâches à réaliser

### Architecture Bundle

-   [ ] Créer la structure `src/Bundle/QuoteInvoiceBundle/`
-   [ ] Implémenter la classe principale `QuoteInvoiceBundle`
-   [ ] Créer la configuration DI (`Configuration.php`)
-   [ ] Implémenter l'extension (`QuoteInvoiceBundleExtension.php`)
-   [ ] Configurer l'activation dans `config/bundles.php`

### Entités Bundle

-   [ ] Définir l'entité `Quote` avec statuts (draft, sent, accepted, rejected)
-   [ ] Définir l'entité `QuoteItem` pour les lignes de devis
-   [ ] Définir l'entité `Invoice` avec gestion des paiements
-   [ ] Définir l'entité `InvoiceItem` pour les lignes de facture
-   [ ] Implémenter les relations avec Customer (CRM)

### Services Bundle

-   [ ] Créer `QuoteService` pour la logique métier des devis
-   [ ] Créer `InvoiceService` pour la logique métier des factures
-   [ ] Implémenter `PdfGeneratorService` (TCPDF ou DomPDF)
-   [ ] Créer `EmailService` pour l'envoi automatique
-   [ ] Ajouter `WorkflowService` (Devis → Validation → Facture)

### Controllers et Routes

-   [ ] Créer les controllers du bundle
-   [ ] Configurer les routes dans `Resources/config/routes.yaml`
-   [ ] Implémenter les APIs REST si nécessaire
-   [ ] Sécuriser avec les rôles CRM appropriés

### Configuration et Tests

-   [ ] Créer la configuration YAML du bundle
-   [ ] Implémenter les tests unitaires du bundle
-   [ ] Créer les tests d'intégration
-   [ ] Documenter l'API du bundle

## Spécifications Techniques

### Structure Bundle

```
src/Bundle/QuoteInvoiceBundle/
├── QuoteInvoiceBundle.php           # Classe principale
├── DependencyInjection/             # Configuration DI
│   ├── Configuration.php
│   └── QuoteInvoiceBundleExtension.php
├── Controller/                      # Controllers
├── Entity/                          # Entités
├── Service/                         # Services
├── Form/                           # Formulaires
├── Repository/                     # Repositories
├── Resources/
│   ├── config/                     # Configuration
│   └── views/                      # Templates
└── Tests/                          # Tests
```

### Workflow Métier

1. **Création Devis** → Statut "draft"
2. **Envoi Client** → Statut "sent" + Email automatique
3. **Acceptation** → Statut "accepted" + Génération facture
4. **Facturation** → Création Invoice + PDF
5. **Paiement** → Mise à jour statuts

## Critères d'acceptation

-   ✅ Bundle autonome et réutilisable
-   ✅ Configuration flexible via YAML
-   ✅ Services découplés avec interfaces
-   ✅ Génération PDF fonctionnelle
-   ✅ Envoi d'emails automatique
-   ✅ Workflow complet Devis → Facture
-   ✅ Tests complets (≥ 80% couverture)
-   ✅ Documentation technique complète

## Définition de "Done"

-   [ ] Bundle installable via configuration
-   [ ] Tests d'intégration passants
-   [ ] Documentation utilisateur créée
-   [ ] Code review validée
-   [ ] Performance testée

## Priorité

🟡 **Medium** - Important mais pas bloquant

## Labels

`bundle`, `quote`, `invoice`, `pdf`, `email`, `medium-priority`

## Dépendances

-   Issue #3: Entités CRM (Customer requis)
-   Issue #4: Services CRM de base

## Estimation

**8-10 jours** (bundle complexe avec PDF et email)

## Ressources

-   [Instructions Bundle Creation](../.github/instructions/features/bundle-creation.instructions.md)
-   [Symfony Bundle Best Practices](https://symfony.com/doc/current/bundles/best_practices.html)
