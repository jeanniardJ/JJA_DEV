---
name: Bundle Devis & Factures
about: Création du bundle de gestion des devis et factures (PRIORITÉ)
title: "[BUNDLE] Développement Bundle Devis & Factures"
labels: ["enhancement", "bundle", "priority-high", "crm"]
assignees: []
---

## 📋 Description

Développement d'un bundle Symfony autonome et réutilisable pour la gestion complète des devis et factures dans le CRM JJA_DEV.

## 🎯 Objectifs

-   [x] Bundle autonome et découplé de l'application principale
-   [x] Gestion complète du cycle devis → facture
-   [x] Génération PDF automatique
-   [x] Système de numérotation automatique
-   [x] Templates personnalisables
-   [x] Export comptabilité
-   [x] Workflow de validation

## 📁 Structure Bundle Requise

```
src/Bundle/QuoteInvoiceBundle/
├── QuoteInvoiceBundle.php
├── DependencyInjection/
│   ├── Configuration.php
│   └── QuoteInvoiceBundleExtension.php
├── Controller/
│   ├── Admin/
│   │   ├── QuoteController.php
│   │   └── InvoiceController.php
│   └── Api/
├── Entity/
│   ├── Quote.php
│   ├── QuoteItem.php
│   ├── Invoice.php
│   └── InvoiceItem.php
├── Service/
│   ├── QuoteService.php
│   ├── InvoiceService.php
│   ├── PdfGeneratorService.php
│   ├── NumberingService.php
│   └── EmailNotificationService.php
├── Form/
│   ├── QuoteType.php
│   ├── QuoteItemType.php
│   └── InvoiceType.php
├── Repository/
│   ├── QuoteRepository.php
│   └── InvoiceRepository.php
├── Resources/
│   ├── config/
│   │   ├── services.yaml
│   │   ├── routes.yaml
│   │   └── doctrine.yaml
│   └── views/
│       ├── admin/quote/
│       ├── admin/invoice/
│       └── pdf/
└── Tests/
```

## 🔧 Fonctionnalités Requises

### Gestion des Devis

-   [ ] Création/modification/suppression devis
-   [ ] Lignes de devis avec produits/services
-   [ ] Calcul automatique HT/TVA/TTC
-   [ ] Statuts : Brouillon, Envoyé, Accepté, Refusé, Expiré
-   [ ] Génération PDF personnalisable
-   [ ] Envoi par email automatique
-   [ ] Conversion devis → facture
-   [ ] Historique et versioning

### Gestion des Factures

-   [ ] Création manuelle ou depuis devis
-   [ ] Facturation partielle (acomptes)
-   [ ] Statuts : Brouillon, Envoyée, Payée, En retard, Annulée
-   [ ] Relances automatiques
-   [ ] Génération PDF avec mentions légales
-   [ ] Export comptabilité (CSV/XML)
-   [ ] Numérotation séquentielle obligatoire

### Configuration

-   [ ] Templates PDF personnalisables
-   [ ] Configuration TVA par défaut
-   [ ] Mentions légales configurables
-   [ ] Numérotation personnalisable
-   [ ] Conditions générales intégrables

## 🔗 Intégrations Requises

### CRM JJA_DEV

-   [ ] Liaison avec entité `Customer`
-   [ ] Intégration menu BackOffice
-   [ ] Permissions basées sur rôles CMS_SF
-   [ ] Dashboard statistiques

### Services Externes

-   [ ] Service email (Swift Mailer/Symfony Mailer)
-   [ ] Génération PDF (DomPDF/wkhtmltopdf)
-   [ ] Export comptabilité (format SAGE/EBP)

## 📊 Base de Données

### Tables Requises

```sql
-- Quotes
quote_invoices_quotes:
  - id, number, customer_id, status, total_ht, total_ttc
  - valid_until, created_at, updated_at, sent_at, accepted_at

-- Quote Items
quote_invoices_quote_items:
  - id, quote_id, description, quantity, unit_price, vat_rate, total

-- Invoices
quote_invoices_invoices:
  - id, number, quote_id, customer_id, status, total_ht, total_ttc
  - issued_at, due_at, paid_at, created_at, updated_at

-- Invoice Items
quote_invoices_invoice_items:
  - id, invoice_id, description, quantity, unit_price, vat_rate, total
```

## 🧪 Tests Requis

-   [ ] Tests unitaires tous les services (>90% couverture)
-   [ ] Tests fonctionnels controllers admin
-   [ ] Tests intégration génération PDF
-   [ ] Tests workflow devis → facture
-   [ ] Tests validation données comptables

## 📋 Critères d'Acceptation

### Technique

-   [ ] Bundle installable via Composer
-   [ ] Configuration flexible via YAML
-   [ ] Doctrine entities avec migrations
-   [ ] Services avec interfaces
-   [ ] Respect standards PSR-12
-   [ ] PHPStan niveau 8 sans erreurs

### Fonctionnel

-   [ ] Interface admin intégrée BackOffice
-   [ ] PDF générés avec template corporate
-   [ ] Workflow complet devis → facture
-   [ ] Numérotation légale française
-   [ ] Export comptabilité fonctionnel

### Performance

-   [ ] Temps génération PDF < 2 secondes
-   [ ] Pagination listes admin
-   [ ] Cache pour templates PDF
-   [ ] Index base de données optimisés

## 🚀 Plan de Développement

### Phase 1 : Structure Bundle (2-3 jours)

-   [ ] Création structure bundle
-   [ ] Configuration DependencyInjection
-   [ ] Entités de base avec migrations
-   [ ] Services foundation

### Phase 2 : Gestion Devis (3-4 jours)

-   [ ] CRUD devis complet
-   [ ] Calculs automatiques
-   [ ] Génération PDF basique
-   [ ] Interface admin

### Phase 3 : Gestion Factures (3-4 jours)

-   [ ] CRUD factures
-   [ ] Conversion devis → facture
-   [ ] Système de relances
-   [ ] Export comptabilité

### Phase 4 : Finalisation (2-3 jours)

-   [ ] Templates PDF avancés
-   [ ] Tests complets
-   [ ] Documentation
-   [ ] Optimisations performance

## 📚 Documentation Requise

-   [ ] README bundle avec installation
-   [ ] Documentation API services
-   [ ] Guide configuration
-   [ ] Exemples utilisation
-   [ ] Migration depuis autres systèmes

## ⚠️ Contraintes Techniques

-   **PHP** : 8.1+
-   **Symfony** : 6.4 LTS
-   **Doctrine** : ORM latest
-   **Tests** : PHPUnit latest
-   **Qualité** : PHPStan niveau 8

## 🔄 Maintenance

-   [ ] Plan de migration données existantes
-   [ ] Procédure backup avant mise à jour
-   [ ] Tests régression automatisés
-   [ ] Monitoring performance bundle

---

**Priorité :** 🔴 HAUTE - Bundle critique pour fonctionnement CRM
**Estimation :** 10-14 jours développement
**Dependencies :** Bundle Customer CRM, Système email configuré
