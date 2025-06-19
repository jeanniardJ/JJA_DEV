# JJA DEV CRM

Système CRM complet basé sur Symfony 6.4, héritant de CMS_SF et spécialisé pour la gestion d'un laboratoire.

## 🏗️ Architecture

-   **Base** : Fork de [CMS_SF](https://github.com/jeanniardJ/CMS_SF)
-   **Backend** : Symfony 6.4 + Doctrine ORM
-   **Frontend** : Bootstrap 5.x + Symfony UX React + Stimulus
-   **Base de données** : MySQL 8.0+
-   **Build Assets** : Webpack Encore

## 🌍 Environnements : Windows Development ↔ Linux Production

### 🖥️ Développement (Windows)

-   **OS** : Windows 10/11
-   **PHP** : Installation locale (8.1+) avec Symfony CLI
-   **npm** : Installation locale Node.js
-   **MySQL** : Docker Desktop (port 3306)
-   **Terminal** : PowerShell
-   **Performance** : Outils locaux (plus rapide que virtualisation)

### 🐧 Production (Linux)

-   **OS** : Serveurs Linux OVH
-   **PHP** : PHP-FPM + Apache/Nginx
-   **MySQL** : Service natif Linux
-   **Déploiement** : GitHub Actions automatisé
-   **CDN** : Assets optimisés et cache

> **Important** : Le développement utilise uniquement Docker pour MySQL. PHP, npm et Symfony CLI sont installés localement sur Windows pour de meilleures performances.
>
> 📖 **Guide détaillé** : Voir [QUICK-START.md](QUICK-START.md) pour les instructions complètes Windows/Linux.

## 🚀 Installation Rapide (Windows)

### Prérequis

-   [PHP 8.1+](https://www.php.net/downloads) avec extension `pdo_mysql`
-   [Composer](https://getcomposer.org/download/)
-   [Node.js](https://nodejs.org/) (LTS recommandé)
-   [Docker Desktop](https://www.docker.com/products/docker-desktop)
-   [Symfony CLI](https://symfony.com/download) (optionnel mais recommandé)

### Configuration Automatisée

```powershell
# Cloner le projet
git clone https://github.com/jeanniardJ/JJA_DEV.git
cd JJA_DEV

# Script d'installation Windows
.\scripts\windows-setup.ps1

# Ou configuration manuelle :
copy .env.dist .env
composer install
npm install
docker-compose up -d mysql
symfony console doctrine:migrations:migrate
symfony console doctrine:fixtures:load --group=cms-init
```

### Démarrage Développement

```powershell
# Démarrer MySQL (Docker)
docker-compose up -d mysql

# Serveur Symfony (local)
symfony serve

# Build assets en mode watch
npm run watch
```

**Accès** : <http://localhost:8000>

## 📚 Documentation Complète

La documentation est organisée dans `.github/instructions/` :

-   **[Instructions Principales](.github/instructions/JJA_DEV.instructions.md)** - Vue d'ensemble et standards
-   **[Distinction Windows/Linux](.github/instructions/development/windows-linux-environments.instructions.md)** - Environnements détaillés
-   **[Configuration Docker](.github/instructions/base/docker-environment.instructions.md)** - MySQL et services
-   **[Standards Symfony](.github/instructions/base/symfony-standards.instructions.md)** - Conventions de code
-   **[Développement CRM](.github/instructions/features/crm-development.instructions.md)** - Fonctionnalités métier
-   **[Création de Bundles](.github/instructions/features/bundle-creation.instructions.md)** - Architecture modulaire
-   **[Déploiement OVH](.github/instructions/deployment/ovh-deployment.instructions.md)** - Production

## 🔧 Commandes Essentielles

### Base de Données

```powershell
# Migrations
symfony console doctrine:migrations:migrate
symfony console make:migration

# Fixtures (données de test)
symfony console doctrine:fixtures:load --group=cms-init
symfony console doctrine:fixtures:load --group=cms-templates
symfony console doctrine:fixtures:load --group=cms-config
```

### Assets et Frontend

```powershell
# Développement (watch mode)
npm run watch
npm run dev

# Production
npm run build
npm run prod
```

### Qualité Code

```powershell
# Tests
symfony console phpunit

# Analyse statique
vendor/bin/phpstan analyse

# Standards de code
vendor/bin/phpcs src/
vendor/bin/phpcbf src/  # Correction automatique
```

### Cache et Performance

```powershell
# Clear cache
symfony console cache:clear

# Warmup cache
symfony console cache:warmup

# Debug conteneur
symfony console debug:container
symfony console debug:router
```

## 🎯 Fonctionnalités CRM

### Modules Développés

-   **Gestion Clients** : Entreprises et contacts
-   **Laboratoire** : Échantillons et analyses
-   **Devis & Factures** : Bundle réutilisable
-   **Business Intelligence** : Dashboards et rapports
-   **CMS** : Pages publiques héritées de CMS_SF

### Modules en Développement

-   **Gestion Stocks** : Réactifs et matériel
-   **Planning** : Ressources et rendez-vous
-   **Qualité** : Traçabilité et conformité
-   **Intégrations** : APIs externes et ERP

## 🔒 Sécurité

-   **Authentification** : Symfony Security + JWT
-   **Autorisations** : Voter system + Role hierarchy
-   **CSRF** : Protection formulaires
-   **HTTPS** : SSL en production
-   **Variables** : Secrets management Symfony

## 🤝 Contribution

### Workflow Git

```powershell
# Créer branche feature
git checkout -b feature/nom-fonctionnalite

# Développement...
git add .
git commit -m "feat: description fonctionnalité"

# Push et Pull Request
git push origin feature/nom-fonctionnalite
```

### Standards

-   **PSR-12** : Style de code PHP
-   **Semantic Commits** : Messages de commit structurés
-   **Tests** : Couverture PHPUnit + fonctionnels
-   **Documentation** : Instructions et prompts dans `.github/`

## 📋 Gestion Issues

Le projet utilise un système d'issues GitHub structuré :

-   **[Plan des Issues](.github/issues/github-issues-plan.md)** - Roadmap détaillée
-   **[Templates](.github/issues/templates/)** - Modèles d'issues
-   **[Scripts](.github/scripts/)** - Automatisation création
-   **[Guide Issues](.github/README-ISSUES.md)** - Utilisation

## 🚢 Déploiement

### Environnement Production

-   **Serveur** : OVH VPS Linux
-   **Web Server** : Apache + PHP-FPM
-   **Base** : MySQL service natif
-   **CI/CD** : GitHub Actions
-   **Monitoring** : Logs et métriques

### Pipeline Automatisé

```text
Windows Dev → GitHub → CI/CD → Linux Prod
     ↓           ↓        ↓         ↓
  Local PHP   Tests   Build    Apache+PHP
  MySQL       Quality  Assets   MySQL
  Hot Reload  Deploy   Optimize Caching
```

## 📊 Monitoring et Debug

### Logs

```powershell
# Logs Symfony
tail -f var/log/dev.log
tail -f var/log/prod.log

# Logs Docker MySQL
docker-compose logs mysql

# Logs serveur (production)
sudo tail -f /var/log/apache2/error.log
```

### Debug

```powershell
# Profiler Symfony (dev)
symfony console debug:event-dispatcher
symfony console debug:form
symfony console debug:twig

# Base de données
symfony console doctrine:mapping:info
symfony console doctrine:schema:validate
```

## 📞 Support

-   **Documentation** : `.github/instructions/`
-   **Issues** : [GitHub Issues](https://github.com/jeanniardJ/JJA_DEV/issues)
-   **Wiki** : [GitHub Wiki](https://github.com/jeanniardJ/JJA_DEV/wiki)

---

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🙋‍♂️ Auteurs

-   **Jean Niard** - Développement principal - [@jeanniardJ](https://github.com/jeanniardJ)

---

**JJA DEV CRM** - Développement sur Windows, Production sur Linux 🌍
