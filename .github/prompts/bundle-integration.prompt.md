# Intégration Bundle dans JJA_DEV

Vous devez intégrer un nouveau bundle Symfony dans JJA_DEV en respectant l'architecture CMS_SF.

## Checklist d'Intégration

### 1. Préparation Bundle

-   [ ] Structure bundle complète et testée
-   [ ] Configuration bundle validée
-   [ ] Services bundle fonctionnels
-   [ ] Tests bundle passants

### 2. Intégration dans JJA_DEV

#### Activation Bundle

```php
// config/bundles.php
return [
    // ... bundles existants CMS_SF
    App\Bundle\YourBundle\YourBundle::class => ['all' => true],
];
```

#### Configuration Bundle

```yaml
# config/packages/your_bundle.yaml
your_bundle:
    option1: value1
    option2: value2

    # Configuration spécifique à l'environnement
    database:
        table_prefix: 'your_bundle_'

    templates:
        theme: 'cms_sf_compatible'
```

### 3. Base de Données

#### Migrations Bundle

```bash
# Générer migrations bundle
docker-compose exec php bin/console make:migration

# Vérifier migrations
docker-compose exec php bin/console doctrine:migrations:status

# Appliquer migrations
docker-compose exec php bin/console doctrine:migrations:migrate
```

#### Contraintes Référentielles

-   [ ] Vérifier relations avec entités CMS_SF existantes
-   [ ] Maintenir intégrité référentielle
-   [ ] Prévoir cascade appropriées

### 4. Intégration Interface

#### Navigation CMS_SF

```yaml
# config/packages/cms_sf_navigation.yaml (si applicable)
navigation:
    admin:
        items:
            your_bundle:
                label: 'Your Bundle'
                route: 'admin_your_bundle_index'
                roles: ['ROLE_ADMIN']
                icon: 'fas fa-bundle-icon'
                children:
                    - { label: 'Item 1', route: 'admin_your_bundle_item1' }
                    - { label: 'Item 2', route: 'admin_your_bundle_item2' }
```

#### Templates Compatibles

```twig
{# templates/admin/your_bundle/base.html.twig #}
{% extends 'admin/base.html.twig' %}

{% block title %}{{ parent() }} - Your Bundle{% endblock %}

{% block stylesheets %}
    {{ parent() }}
    {{ encore_entry_link_tags('your_bundle_admin') }}
{% endblock %}

{% block javascripts %}
    {{ parent() }}
    {{ encore_entry_script_tags('your_bundle_admin') }}
{% endblock %}
```

### 5. Sécurité et Permissions

#### Rôles Bundle

```yaml
# config/packages/security.yaml
security:
    role_hierarchy:
        # Rôles CMS_SF existants
        ROLE_ADMIN: ROLE_USER

        # Nouveaux rôles bundle
        ROLE_YOUR_BUNDLE_ADMIN: ROLE_ADMIN
        ROLE_YOUR_BUNDLE_MANAGER: ROLE_USER
```

#### Protection Routes

```php
// src/Bundle/YourBundle/Controller/AdminController.php
#[Route('/admin/your-bundle', name: 'admin_your_bundle_')]
#[IsGranted('ROLE_YOUR_BUNDLE_MANAGER')]
class AdminController extends AbstractController
{
    #[IsGranted('ROLE_YOUR_BUNDLE_ADMIN')]
    public function sensitiveAction(): Response
    {
        // Action sensible
    }
}
```

### 6. Assets et Webpack

#### Configuration Webpack

```js
// webpack.config.js
Encore
    // Entries existantes CMS_SF
    .addEntry('app', './assets/app.js')
    .addEntry('admin', './assets/admin.js')

    // Nouvelle entry bundle
    .addEntry('your_bundle_admin', './assets/your_bundle/admin.js')
    .addEntry('your_bundle_public', './assets/your_bundle/public.js')

    // Styles bundle
    .addStyleEntry('your_bundle_styles', './assets/your_bundle/styles.scss')
```

#### Assets Bundle

```scss
// assets/your_bundle/styles.scss
// Importer styles CMS_SF de base
@import '~bootstrap/scss/bootstrap';
@import '../admin/variables';

// Styles spécifiques bundle
.your-bundle {
    &-container {
        // Respecter le design CMS_SF
    }
}
```

### 7. Services et DI

#### Configuration Services

```yaml
# src/Bundle/YourBundle/Resources/config/services.yaml
services:
    _defaults:
        autowire: true
        autoconfigure: true

    # Services bundle
    App\Bundle\YourBundle\Service\:
        resource: '../../Service/*'

    # Configuration spécifique
    App\Bundle\YourBundle\Service\MainService:
        arguments:
            $cmsIntegration: '@cms_sf.integration_service'
            $bundleConfig: '%your_bundle.config%'
```

### 8. Tests d'Intégration

#### Test Intégration CMS_SF

```php
// tests/Integration/YourBundleIntegrationTest.php
namespace App\Tests\Integration;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class YourBundleIntegrationTest extends WebTestCase
{
    public function testBundleIntegrationWithCmsSf(): void
    {
        $client = static::createClient();

        // Test navigation CMS_SF
        $client->request('GET', '/admin');
        $this->assertResponseIsSuccessful();

        // Test accès bundle
        $client->request('GET', '/admin/your-bundle');
        $this->assertResponseIsSuccessful();

        // Test intégration authentication
        $this->assertSelectorExists('.cms-sf-navigation');
        $this->assertSelectorExists('.your-bundle-content');
    }

    public function testBundleServicesIntegration(): void
    {
        self::bootKernel();

        // Vérifier services bundle disponibles
        $container = static::getContainer();

        $this->assertTrue($container->has('App\Bundle\YourBundle\Service\MainService'));
        $this->assertTrue($container->has('your_bundle.config'));
    }
}
```

### 9. Documentation

#### README Bundle

```markdown
# Your Bundle Integration

## Installation dans JJA_DEV

1. Bundle activé dans `config/bundles.php`
2. Configuration dans `config/packages/your_bundle.yaml`
3. Migrations appliquées
4. Assets compilés avec Webpack

## Utilisation

### Admin Interface

-   Accès via `/admin/your-bundle`
-   Permissions: `ROLE_YOUR_BUNDLE_MANAGER`

### API

-   Endpoints disponibles sous `/api/your-bundle`
-   Documentation: `/api/doc`

## Compatibilité CMS_SF

-   Templates héritent de `admin/base.html.twig`
-   Navigation intégrée au menu admin
-   Système d'authentification partagé
-   Styles cohérents avec le theme CMS_SF
```

## Commandes d'Intégration

```bash
# Installation et configuration
composer install
docker-compose exec php bin/console cache:clear

# Base de données
docker-compose exec php bin/console doctrine:migrations:migrate

# Assets
npm install
npm run build

# Tests d'intégration
docker-compose exec php bin/phpunit tests/Integration/

# Vérification services
docker-compose exec php bin/console debug:container --tag=your_bundle
docker-compose exec php bin/console debug:router | grep your_bundle
```

## Checklist Final

-   [ ] **Bundle** : Activé et configuré correctement
-   [ ] **Base de données** : Migrations appliquées
-   [ ] **Interface** : Navigation intégrée CMS_SF
-   [ ] **Sécurité** : Rôles et permissions configurés
-   [ ] **Assets** : Webpack configuré et build OK
-   [ ] **Tests** : Tests d'intégration passants
-   [ ] **Documentation** : README et guides à jour
-   [ ] **Performance** : Pas de régression
-   [ ] **Compatibilité** : Respect architecture CMS_SF
