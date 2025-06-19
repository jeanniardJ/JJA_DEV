# Commandes pour créer les issues GitHub manuellement

Si vous préférez créer les issues manuellement ou si le script automatique ne fonctionne pas, voici les commandes individuelles à exécuter :

## Prérequis

1. Installer GitHub CLI :

```bash
# Windows (via Chocolatey)
choco install gh

# Windows (via Scoop)
scoop install gh

# Ou télécharger depuis https://cli.github.com/
```

2. S'authentifier :

```bash
gh auth login
```

## Commandes pour créer chaque issue

### Issue #1: Configuration Post-Migration

```bash
gh issue create \
    --repo "jeanniardJ/JJA_DEV" \
    --title "🔧 Finaliser la configuration après migration du repository" \
    --body "Suite à la migration du repository vers https://github.com/jeanniardJ/JJA_DEV.git, finaliser la configuration des services externes.

Tâches:
- [ ] Vérifier webhooks OVH
- [ ] Valider GitHub Actions
- [ ] Tester déploiement complet
- [ ] Mettre à jour secrets GitHub
- [ ] Valider branches protégées
- [ ] Informer équipe développement" \
    --label "infrastructure,deployment,migration,high-priority"
```

### Issue #3: Entités CRM

```bash
gh issue create \
    --repo "jeanniardJ/JJA_DEV" \
    --title "🏗️ Créer les entités CRM fondamentales (Customer, Contact, Lead)" \
    --body "Développer les entités de base du système CRM.

Tâches:
- [ ] Créer entité Customer dans src/Entity/CRM/
- [ ] Créer entité Contact dans src/Entity/CRM/
- [ ] Créer entité Lead dans src/Entity/CRM/
- [ ] Implémenter relations Doctrine
- [ ] Ajouter contraintes validation
- [ ] Créer repositories optimisés
- [ ] Générer migrations
- [ ] Créer fixtures développement

Critères acceptation:
- Entités conformes Symfony 6.4
- Validations fonctionnelles
- Relations correctes
- Index appropriés" \
    --label "crm,entity,backend,high-priority,foundation"
```

### Issue #4: Services CRM

```bash
gh issue create \
    --repo "jeanniardJ/JJA_DEV" \
    --title "⚙️ Développer les services métier CRM" \
    --body "Implémenter les services métier pour la gestion des entités CRM.

Tâches:
- [ ] Créer CustomerService avec interface
- [ ] Créer ContactService avec interface
- [ ] Créer LeadService avec interface
- [ ] Implémenter méthodes CRUD
- [ ] Gestion exceptions métier
- [ ] Audit trail actions critiques
- [ ] Tests unitaires 80%+

Critères acceptation:
- Services stateless
- Injection dépendances
- Gestion erreurs robuste
- Documentation PHPDoc" \
    --label "crm,service,backend,testing,high-priority"
```

### Issue #5: Controllers CRM

```bash
gh issue create \
    --repo "jeanniardJ/JJA_DEV" \
    --title "🎮 Développer les controllers d'administration CRM" \
    --body "Créer les controllers pour l'interface d'administration CRM.

Tâches:
- [ ] CustomerController dans src/Controller/Admin/CRM/
- [ ] ContactController dans src/Controller/Admin/CRM/
- [ ] LeadController dans src/Controller/Admin/CRM/
- [ ] Routes avec préfixe /admin/crm/
- [ ] Pagination KnpPaginatorBundle
- [ ] Sécurité rôles CRM
- [ ] Tests fonctionnels

Critères acceptation:
- Routes sécurisées
- Pagination fonctionnelle
- Gestion erreurs utilisateur
- Tests passants" \
    --label "crm,controller,admin,security,high-priority"
```

### Issue #7: Bundle QuoteInvoice

```bash
gh issue create \
    --repo "jeanniardJ/JJA_DEV" \
    --title "📦 Créer l'architecture du Bundle Devis & Factures" \
    --body "Développer un bundle Symfony réutilisable pour devis et factures.

Tâches:
- [ ] Structure src/Bundle/QuoteInvoiceBundle/
- [ ] Classe principale QuoteInvoiceBundle
- [ ] Configuration DI et Extension
- [ ] Entités Quote et Invoice
- [ ] Services PDF et Email
- [ ] Controllers bundle
- [ ] Configuration routes
- [ ] Tests bundle

Workflow:
1. Création Devis → draft
2. Envoi Client → sent + Email
3. Acceptation → accepted + Facture
4. Facturation → Invoice + PDF
5. Paiement → Statuts mis à jour

Critères acceptation:
- Bundle autonome
- Configuration flexible YAML
- Services découplés
- Génération PDF
- Envoi emails automatique" \
    --label "bundle,quote,invoice,pdf,email,medium-priority"
```

## Création en une fois

Pour créer toutes les issues rapidement :

```bash
# Exécuter le script (si GitHub CLI installé)
cd f:\GitHub\JJA-DEV\JJA_DEV
chmod +x .github/scripts/create-github-issues.sh
./.github/scripts/create-github-issues.sh
```

## Vérification

Après création, vérifiez sur :
https://github.com/jeanniardJ/JJA_DEV/issues

## Configuration des Milestones

Créer les milestones pour organiser les sprints :

```bash
gh milestone create "Sprint 1" --repo "jeanniardJ/JJA_DEV" --description "Infrastructure et entités de base"
gh milestone create "Sprint 2" --repo "jeanniardJ/JJA_DEV" --description "Services et sécurité"
gh milestone create "Sprint 3" --repo "jeanniardJ/JJA_DEV" --description "Controllers et interface"
gh milestone create "Sprint 4" --repo "jeanniardJ/JJA_DEV" --description "Bundle et performance"
```
