# Guide Démarrage Rapide - JJA_DEV

## 🚀 Développement sur Windows

### Configuration Requise

-   **OS**: Windows 10/11
-   **PHP**: 8.1+ local avec `pdo_mysql`
-   **Composer**: Installation globale
-   **Node.js**: LTS (npm inclus)
-   **Docker Desktop**: Pour MySQL uniquement
-   **Git**: Git for Windows
-   **VS Code**: IDE recommandé

### Installation Express

```powershell
# 1. Cloner le projet
git clone https://github.com/jeanniardJ/JJA_DEV.git
cd JJA_DEV

# 2. Configuration automatique
.\scripts\windows-setup.ps1

# 3. Démarrage manuel si nécessaire
copy .env.dist .env
composer install
npm install
docker-compose up -d database
symfony console doctrine:migrations:migrate
symfony console doctrine:fixtures:load --group=cms-init
```

### Démarrage Quotidien

```powershell
# Démarrer MySQL (Docker)
docker-compose up -d database

# Serveur développement (PHP local)
symfony serve

# Assets en mode watch (npm local)
npm run watch
```

**Accès**: <http://localhost:8000>

## 🌍 Architecture: Windows ↔ Linux

### Développement (Windows)

```text
┌─────────────────────────────────────┐
│         WINDOWS DEVELOPMENT         │
├─────────────────────────────────────┤
│ PHP 8.1+     │ Local installation   │
│ Composer     │ Global Windows       │
│ npm/Node.js  │ Local installation   │
│ Symfony CLI  │ symfony.exe in PATH  │
│ MySQL        │ Docker Desktop       │
│ VS Code      │ Primary IDE          │
│ PowerShell   │ Default terminal     │
└─────────────────────────────────────┘
```

### Production (Linux)

```text
┌─────────────────────────────────────┐
│          LINUX PRODUCTION           │
├─────────────────────────────────────┤
│ PHP-FPM 8.1+ │ systemd service      │
│ Apache/Nginx │ Web server           │
│ MySQL 8.0    │ Native service       │
│ Composer     │ CI/CD deployment     │
│ npm build    │ CI/CD assets         │
│ Git webhook  │ Auto deployment      │
└─────────────────────────────────────┘
```

## 📋 Commandes par Environnement

### Windows (Développement)

```powershell
# Base de données (MySQL Docker)
docker-compose up -d database
docker-compose logs database
docker-compose ps

# Application (PHP local)
symfony serve
symfony serve -d
symfony console cache:clear
symfony console doctrine:migrations:migrate

# Assets (npm local)
npm run dev
npm run watch
npm run build

# Tests (PHP local)
symfony console phpunit
vendor/bin/phpstan analyse
vendor/bin/phpcs src/
```

### Linux (Production)

```bash
# Services système
sudo systemctl restart php8.1-fpm
sudo systemctl restart apache2
sudo systemctl restart mysql

# Application
php bin/console cache:clear --env=prod
php bin/console cache:warmup --env=prod
php bin/console doctrine:migrations:migrate --no-interaction

# Assets (build CI/CD)
npm run build --production
npm run prod

# Monitoring
tail -f /var/log/apache2/error.log
tail -f var/log/prod.log
```

## 🔧 Configuration Spécifique

### Windows (.env)

```env
APP_ENV=dev
APP_DEBUG=true
DATABASE_URL="mysql://JJA_DEV:password@127.0.0.1:3306/JJA_DEV"
MAILER_DSN=smtp://127.0.0.1:1025  # MailHog
```

### Linux (.env.prod)

```env
APP_ENV=prod
APP_DEBUG=false
DATABASE_URL="mysql://user:${DB_PASS}@localhost/jja_dev_prod"
MAILER_DSN=smtp://smtp.provider.com:587
```

## 🚢 Workflow de Déploiement

```text
Windows Dev → GitHub → CI/CD → Linux Prod
     ↓           ↓        ↓         ↓
  Local PHP   Tests   Build    Apache+PHP
  MySQL       Quality  Assets   MySQL
  Hot Reload  Deploy   Optimize Caching
```

### Étapes

1. **Développement**: Code sur Windows avec outils locaux
2. **Commit**: `git push origin feature/ma-fonctionnalite`
3. **CI/CD**: Tests et build automatisés sur Linux
4. **Production**: Déploiement auto sur merge `main`

## 🛠️ Outils Recommandés

### Windows

-   **Symfony CLI**: `symfony.exe` pour serveur et commandes
-   **Docker Desktop**: Interface graphique et WSL2
-   **VS Code**: Extensions PHP Intelephense, Symfony Support
-   **PowerShell**: Terminal par défaut Windows
-   **Git for Windows**: Git bash + intégration Windows

### Production

-   **OVH**: Hébergement VPS Linux
-   **Apache**: Serveur web principal
-   **PHP-FPM**: Gestionnaire de processus PHP
-   **MySQL**: Base de données native
-   **Supervisor**: Gestion workers Messenger

## 📊 Avantages par Environnement

### Windows (Dev)

-   ✅ **Performance**: Pas de virtualisation PHP/npm
-   ✅ **Debug**: Xdebug natif, breakpoints IDE
-   ✅ **Flexibilité**: Versions multiples PHP
-   ✅ **Hot Reload**: Assets temps réel
-   ✅ **Outils**: Intégration native Windows

### Linux (Prod)

-   ✅ **Stabilité**: Services système natifs
-   ✅ **Performance**: Optimisations serveur
-   ✅ **Sécurité**: Firewall, SSL, isolation
-   ✅ **Monitoring**: Logs centralisés
-   ✅ **Scalabilité**: Load balancing, clustering

## 🔍 Dépannage Courant

### Problèmes Windows

```powershell
# Extension pdo_mysql manquante
php -m | findstr pdo_mysql
# Ajouter dans php.ini : extension=pdo_mysql

# Port 3306 occupé
netstat -an | findstr :3306
docker-compose down
docker-compose up -d database

# Cache Symfony
symfony console cache:clear
rm -rf var/cache/*
```

### Problèmes Linux

```bash
# Services en erreur
sudo systemctl status php8.1-fpm
sudo systemctl status apache2
sudo journalctl -f -u apache2

# Permissions fichiers
sudo chown -R www-data:www-data var/
sudo chmod -R 755 var/
```

---

**JJA DEV**: Développement Windows, Production Linux 🌍
