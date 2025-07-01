---
applyTo: 'JJA_DEV/**'
---

# Distinction Environnements Windows/Linux - JJA_DEV

## Vue d'Ensemble

Le projet JJA_DEV fonctionne selon une approche hybride :

- **Développement** : Windows 10/11 avec outillage local
- **Production** : Serveurs Linux (OVH) avec déploiement automatisé

Cette distinction est critique pour comprendre l'architecture et les commandes appropriées.

## Environnement de Développement (Windows)

### Configuration Locale Windows

```
┌─────────────────────────────────────────┐
│            WINDOWS DEVELOPMENT          │
├─────────────────────────────────────────┤
│ PHP 8.1+        │ Installation locale   │
│ Composer        │ Global Windows        │
│ Node.js/npm     │ Installation locale   │
│ Symfony CLI     │ symfony.exe dans PATH │
│ Git             │ Git for Windows       │
│ VS Code         │ IDE principal         │
│ PowerShell      │ Terminal par défaut   │
│ Docker Desktop  │ MySQL UNIQUEMENT      │
└─────────────────────────────────────────┘
```

### Services Windows

- **PHP-FPM** : Non utilisé (development server intégré)
- **Apache/Nginx** : Non utilisé (Symfony serve)
- **MySQL** : Docker Desktop (port 3306 → localhost)
- **Redis** : Optionnel (Docker si nécessaire)

### Commandes de Développement Windows

```powershell
# Démarrage projet (Windows)
docker-compose up -d mysql
symfony serve -d

# Base de données (Windows)
symfony console doctrine:migrations:migrate
symfony console doctrine:fixtures:load

# Assets (Windows)
npm install
npm run dev
npm run watch

# Tests (Windows)
symfony console phpunit
vendor/bin/phpstan analyse
vendor/bin/phpcs src/

# Cache (Windows)
symfony console cache:clear
```

### Structure Projet Windows

```
JJA_DEV/                           ← Répertoire projet Windows
├── vendor/                        ← Dépendances Composer locales
├── node_modules/                  ← Dépendances npm locales
├── var/cache/                     ← Cache Symfony local
├── public/build/                  ← Assets compilés (Webpack Encore)
├── docker-compose.yml             ← MySQL uniquement
├── .env                          ← Configuration locale Windows
└── scripts/windows-setup.ps1     ← Script d'installation Windows
```

### Avantages Développement Windows

- **Performance** : Pas de virtualisation pour PHP/npm
- **Debugging** : Xdebug direct, pas de port forwarding
- **IDE** : Intégration native VS Code
- **Hot Reload** : Assets et templates temps réel
- **Flexibilité** : Versions PHP multiples facilement

## Environnement de Production (Linux)

### Configuration Serveurs Linux

```
┌─────────────────────────────────────────┐
│             LINUX PRODUCTION            │
├─────────────────────────────────────────┤
│ PHP-FPM 8.1+    │ Service systemd       │
│ Apache/Nginx    │ Reverse proxy         │
│ MySQL 8.0       │ Service natif         │
│ Composer        │ Déploiement via CI/CD │
│ Node.js/npm     │ Build assets CI/CD    │
│ Git             │ Déploiement webhook   │
│ Supervisor      │ Gestion processus     │
│ Cron            │ Tâches planifiées     │
└─────────────────────────────────────────┘
```

### Architecture Production

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│   GitHub     │───▶│   CI/CD      │───▶│   OVH VPS    │
│   main       │    │   Actions    │    │   Linux      │
└──────────────┘    └──────────────┘    └──────────────┘
                           │                      │
                           ▼                      ▼
                    ┌──────────────┐    ┌──────────────┐
                    │ Build Assets │    │ Apache+PHP   │
                    │ npm run prod │    │ MySQL        │
                    └──────────────┘    └──────────────┘
```

### Services Production Linux

- **PHP-FPM** : Service principal application
- **Apache/Nginx** : Serveur web et reverse proxy
- **MySQL** : Base de données principale
- **Redis** : Cache et sessions (optionnel)
- **Supervisor** : Gestion Messenger workers
- **Cron** : Tâches planifiées (maintenance, etc.)

### Commandes Production Linux

```bash
# Déploiement automatique (via GitHub Actions)
git push origin main

# Commandes serveur (si accès SSH nécessaire)
sudo systemctl restart php8.1-fpm
sudo systemctl restart apache2
sudo systemctl restart mysql

# Cache production
php bin/console cache:clear --env=prod
php bin/console cache:warmup --env=prod

# Assets production (build via CI/CD)
npm run build --production
```

## Différences Critiques

### Configuration Base de Données

**Windows Development :**
```env
# MySQL via Docker Desktop
DATABASE_URL="mysql://JJA_DEV:password@127.0.0.1:3306/JJA_DEV?serverVersion=8.0&charset=utf8mb4"
```

**Linux Production :**
```env
# MySQL service natif
DATABASE_URL="mysql://user:pass@localhost:3306/jja_dev_prod?serverVersion=8.0&charset=utf8mb4"
```

### Gestion Assets

**Windows Development :**
```powershell
# Build développement avec hot reload
npm run dev
npm run watch

# Serveur Webpack dev
npm run dev-server
```

**Linux Production :**
```bash
# Build optimisé production (via CI/CD)
npm run build --production
npm run prod

# Assets précompilés et optimisés
```

### Performance et Optimisations

**Windows Development :**
- Cache désactivé ou minimal
- Debug mode activé
- Profiler Symfony activé
- Assets non minifiés
- Hot reload temps réel

**Linux Production :**
- Cache OPcache activé
- Debug mode désactivé
- Assets minifiés et compressés
- CDN et cache HTTP
- Optimisations serveur

## Variables d'Environnement

### Fichiers Configuration

**Windows :**
- `.env` : Configuration locale Windows
- `.env.local` : Overrides développeur (non versionné)
- `.env.test` : Configuration tests Windows

**Linux Production :**
- `.env.prod` : Configuration production (versionné)
- `.env.prod.local` : Secrets production (non versionné)
- Variables serveur dans Apache/systemd

### Exemples Configurations

**Development Windows (.env) :**
```env
APP_ENV=dev
APP_DEBUG=true
DATABASE_URL="mysql://JJA_DEV:password@127.0.0.1:3306/JJA_DEV"
MAILER_DSN=smtp://127.0.0.1:1025  # MailHog local
CORS_ALLOW_ORIGIN='^https?://(localhost|127\.0\.0\.1)(:[0-9]+)?$'
```

**Production Linux (.env.prod) :**
```env
APP_ENV=prod
APP_DEBUG=false
DATABASE_URL="mysql://user:${DB_PASS}@localhost/jja_dev_prod"
MAILER_DSN=smtp://smtp.provider.com:587
CORS_ALLOW_ORIGIN='^https?://jja-dev\.domain\.com$'
```

## Workflow de Développement

### Cycle Développement Windows → Production Linux

1. **Développement Windows :**
   - Code sur Windows avec outils locaux
   - Test avec MySQL Docker
   - Debug avec Xdebug local

2. **Commit et Push :**
   - Git commit sur branche feature
   - Git push vers GitHub

3. **CI/CD GitHub Actions :**
   - Tests automatisés Linux
   - Build assets optimisés
   - Vérifications qualité code

4. **Déploiement Production :**
   - Merge vers main/master
   - Déploiement automatique OVH
   - Webhook et mise à jour serveur

### Synchronisation Données

**Windows → Linux :**
```powershell
# Export structure depuis Windows
symfony console doctrine:schema:create --dump-sql > schema.sql

# Import en production (via migration)
symfony console doctrine:migrations:migrate --no-interaction
```

**Linux → Windows :**
```powershell
# Synchronisation base depuis production (si nécessaire)
# ATTENTION : Uniquement structure, jamais les données clients !
symfony console doctrine:schema:update --force --complete
```

## Bonnes Pratiques

### Développement Windows

1. **Isolation Services :** Seul MySQL en Docker
2. **Performance :** PHP/npm locaux plus rapides
3. **Debugging :** Configuration Xdebug native
4. **Assets :** Hot reload et watch mode
5. **Tests :** Environnement test local isolé

### Production Linux

1. **Sécurité :** Firewall, SSL, headers sécurité
2. **Performance :** OPcache, Redis, CDN
3. **Monitoring :** Logs, métriques, alertes
4. **Backup :** Base de données et fichiers
5. **Maintenance :** Updates automatiques sécurité

### Migration Windows ↔ Linux

1. **Compatibilité Paths :** Utiliser `DIRECTORY_SEPARATOR`
2. **Permissions :** Attention aux droits fichiers Linux
3. **Encodage :** UTF-8 sans BOM partout
4. **Line Endings :** Git autocrlf configuré
5. **Dependencies :** Composer.lock synchronisé

Cette distinction Windows/Linux est fondamentale pour comprendre l'architecture JJA_DEV et utiliser les bonnes commandes selon le contexte.
