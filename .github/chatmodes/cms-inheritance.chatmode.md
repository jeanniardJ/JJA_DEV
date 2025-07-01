---
description: Mode de développement spécialisé pour les projets héritant de CMS_SF avec focus sur l'intégration CRM et respect de l'architecture existante
tools: ['codebase', 'search', 'usages', 'editFiles', 'runTasks', 'findTestFiles']
---

# Mode Héritage CMS_SF

Vous êtes en mode développement pour un projet JJA_DEV qui hérite de CMS_SF.

## Contexte de Développement

### Architecture Héritée

-   **Base** : CMS_SF (système d'authentification, BackOffice, FrontOffice)
-   **Extension** : JJA_DEV avec fonctionnalités CRM
-   **Environnement** : Docker + MySQL (branche develop)
-   **Production** : OVH via CI/CD GitHub (branche main/master)

### Contraintes Importantes

-   🔒 **Ne JAMAIS modifier** le système d'authentification CMS_SF
-   🔒 **Conserver** la structure BackOffice/FrontOffice existante
-   🔒 **Respecter** les conventions de nommage CMS_SF
-   ✅ **Étendre** avec des fonctionnalités CRM modulaires

## Directives de Développement

### Lors de la création de nouvelles fonctionnalités

1. **Vérifier la compatibilité** avec l'architecture CMS_SF
2. **Utiliser les services existants** quand c'est possible
3. **Respecter les patterns** déjà établis dans CMS_SF
4. **Maintenir la cohérence** de l'interface utilisateur
5. **Tester la régression** sur les fonctionnalités héritées

### Lors de l'analyse du code

-   Identifier les composants hérités de CMS_SF
-   Distinguer les extensions CRM spécifiques
-   Vérifier les dépendances entre composants
-   Valider le respect des conventions

### Lors des modifications

-   Préférer l'extension à la modification
-   Créer des espaces de noms séparés pour le CRM
-   Utiliser l'injection de dépendances Symfony
-   Documenter les impacts sur l'architecture

## Workflow de Validation

Avant toute modification importante :

1. Tester l'authentification CMS_SF
2. Vérifier la navigation BackOffice/FrontOffice
3. Valider les tests existants
4. Exécuter les tests de régression

## Patterns d'Extension Recommandés

### Entités CRM

```php
// Namespace séparé pour CRM
namespace App\Entity\CRM;

// Tables avec préfixe
#[ORM\Table(name: 'crm_customers')]
class Customer
{
    // Relations avec entités CMS_SF existantes
    #[ORM\ManyToOne(targetEntity: User::class)]
    private ?User $createdBy = null;
}
```

### Services CRM

```php
// Injection services CMS_SF existants
class CustomerService
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private CmsSfUserService $userService, // Service CMS_SF
        private LoggerInterface $logger
    ) {}
}
```

### Controllers CRM

```php
// Extension du système admin existant
#[Route('/admin/crm', name: 'admin_crm_')]
#[IsGranted('ROLE_ADMIN')] // Utiliser rôles CMS_SF
class CrmController extends AbstractController
{
    // Utiliser layout admin CMS_SF
    return $this->render('admin/crm/dashboard.html.twig');
}
```

### Templates CRM

```twig
{# Hériter des templates CMS_SF #}
{% extends 'admin/base.html.twig' %}

{# Utiliser les composants CMS_SF #}
{% block body %}
    <div class="admin-content">
        {# Nouveau contenu CRM #}
    </div>
{% endblock %}
```

## Outils de Validation

### Tests de Régression

```bash
# Validation authentification
docker-compose exec php bin/phpunit tests/Security/

# Validation navigation
docker-compose exec php bin/phpunit tests/Controller/Admin/

# Validation services CMS_SF
docker-compose exec php bin/console debug:container --tag=cms_sf
```

### Analyse Architecture

```bash
# Vérifier dépendances
docker-compose exec php bin/console debug:container --show-private

# Analyser routes
docker-compose exec php bin/console debug:router | grep admin

# Validation configuration
docker-compose exec php bin/console debug:config framework
```
