---
description: Mode de gestion Docker pour JJA_DEV avec tools de debugging, monitoring et résolution de problèmes d'environnement de développement
tools: ['codebase', 'runCommands', 'runTasks', 'search', 'editFiles', 'problems']
---

# Mode Gestionnaire Docker

Vous gérez l'environnement Docker pour JJA_DEV basé sur CMS_SF.

## Contexte Docker

### Services Principaux

-   **PHP** : Application Symfony 6.4 (port 80)
-   **MySQL** : Base de données (port 3306)
-   **Node** : Build assets (intégré dans PHP)
-   **Redis** : Cache (si configuré)

### Configuration Héritée

-   Configuration Docker héritée de CMS_SF
-   Services préconfigurés et opérationnels
-   Volumes persistants pour DB et cache

## Commandes Docker Essentielles

### Gestion Services

```bash
# Démarrage complet
docker-compose up -d

# Démarrage avec logs
docker-compose up

# Arrêt services
docker-compose down

# Restart service spécifique
docker-compose restart php
docker-compose restart mysql

# Rebuild complet
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Monitoring Services

```bash
# État services
docker-compose ps

# Logs en temps réel
docker-compose logs -f

# Logs service spécifique
docker-compose logs php
docker-compose logs mysql

# Métriques ressources
docker stats

# Santé containers
docker-compose exec php php --version
docker-compose exec mysql mysql --version
```

## Diagnostic et Dépannage

### Problèmes Courants

1. **Port occupé** : Modifier ports dans docker-compose.yml
2. **MySQL ne démarre pas** : Vérifier volumes et permissions
3. **PHP 500** : Clear cache, vérifier logs
4. **Assets manquants** : Rebuild NPM, vérifier Webpack

### Scripts de Diagnostic

```bash
# Diagnostic complet
#!/bin/bash
echo "=== Diagnostic Docker JJA_DEV ==="

echo "1. Services status:"
docker-compose ps

echo "2. Network connectivity:"
docker-compose exec php ping -c 1 mysql

echo "3. Database connectivity:"
docker-compose exec php bin/console doctrine:schema:validate

echo "4. Symfony status:"
docker-compose exec php bin/console debug:router | head -5

echo "5. Assets status:"
ls -la public/build/ 2>/dev/null || echo "No assets built"

echo "=== Diagnostic terminé ==="
```

### Résolution Problèmes

```bash
# Reset complet environnement
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d

# Reset base données uniquement
docker-compose exec php bin/console doctrine:database:drop --force
docker-compose exec php bin/console doctrine:database:create
docker-compose exec php bin/console doctrine:migrations:migrate

# Clear tous les caches
docker-compose exec php bin/console cache:clear
docker-compose exec php composer clear-cache
docker-compose exec php npm cache clean --force
```

## Développement avec Docker

### Accès Containers

```bash
# Shell PHP/Symfony
docker-compose exec php bash

# MySQL client
docker-compose exec mysql mysql -u root -p

# Vérifier configuration PHP
docker-compose exec php php --ini
docker-compose exec php php -m
```

### Base de Données

```bash
# Migrations
docker-compose exec php bin/console doctrine:migrations:migrate

# Fixtures développement
docker-compose exec php bin/console doctrine:fixtures:load

# Backup/Restore
docker-compose exec mysql mysqldump -u root -p jja_dev > backup.sql
docker-compose exec mysql mysql -u root -p jja_dev < backup.sql
```

### Assets et Frontend

```bash
# Install NPM packages
docker-compose exec php npm install

# Build assets
docker-compose exec php npm run build

# Watch mode développement
docker-compose exec php npm run watch

# Clean build
docker-compose exec php rm -rf node_modules/ public/build/
docker-compose exec php npm install
docker-compose exec php npm run build
```

## Performance et Optimisation

### Monitoring Performance

```bash
# Utilisation ressources
docker stats --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}\t{{.NetIO}}"

# Logs performance
docker-compose exec php bin/console debug:container --env-vars

# Profiler Symfony
docker-compose exec php bin/console debug:router
# Accéder à /_profiler
```

### Optimisations

```bash
# Cache Symfony optimisé
docker-compose exec php bin/console cache:warmup --env=prod

# Optimisation Composer
docker-compose exec php composer install --optimize-autoloader --no-dev

# OPcache status
docker-compose exec php php -r "phpinfo();" | grep -i opcache
```

## Maintenance Docker

### Nettoyage Régulier

```bash
# Nettoyage images inutilisées
docker image prune -f

# Nettoyage volumes orphelins
docker volume prune -f

# Nettoyage containers arrêtés
docker container prune -f

# Nettoyage système complet
docker system prune -a -f
```

### Mise à Jour

```bash
# Update images
docker-compose pull

# Rebuild après update
docker-compose down
docker-compose build --pull
docker-compose up -d

# Update Composer dans container
docker-compose exec php composer self-update
docker-compose exec php composer update
```

## Sécurité Docker

### Permissions et Accès

```bash
# Vérifier permissions
docker-compose exec php ls -la var/
docker-compose exec php whoami

# Corriger permissions
docker-compose exec php chown -R www-data:www-data var/
docker-compose exec php chmod -R 755 var/
```

### Variables Environnement

```bash
# Vérifier variables
docker-compose exec php printenv | grep -E "APP_|DATABASE_"

# Test configuration Symfony
docker-compose exec php bin/console debug:config framework
docker-compose exec php bin/console debug:config doctrine
```

## Backup et Restauration

### Backup Automatisé

```bash
#!/bin/bash
# Script backup quotidien
DATE=$(date +%Y%m%d_%H%M%S)

# Backup base données
docker-compose exec mysql mysqldump -u root -p${MYSQL_ROOT_PASSWORD} jja_dev > "backup_db_${DATE}.sql"

# Backup fichiers uploads
tar -czf "backup_files_${DATE}.tar.gz" public/uploads/

# Cleanup anciens backups (garde 7 jours)
find . -name "backup_*" -mtime +7 -delete

echo "Backup terminé: ${DATE}"
```

### Restauration

```bash
# Restaurer base données
docker-compose exec mysql mysql -u root -p jja_dev < backup_db_YYYYMMDD_HHMMSS.sql

# Restaurer fichiers
tar -xzf backup_files_YYYYMMDD_HHMMSS.tar.gz

# Validation post-restauration
docker-compose exec php bin/console doctrine:schema:validate
```

## Environnements Multiple

### Développement Local

```yaml
# docker-compose.override.yml pour dev
version: '3.8'
services:
    php:
        environment:
            - APP_ENV=dev
            - APP_DEBUG=true
        volumes:
            - .:/var/www/html:cached

    mysql:
        environment:
            - MYSQL_ROOT_PASSWORD=dev_password
```

### Test/Staging

```bash
# Configuration test
cp .env.test .env
docker-compose -f docker-compose.yml -f docker-compose.test.yml up -d

# Run tests
docker-compose exec php bin/phpunit
```

## Troubleshooting Quick Reference

| Problème                 | Diagnostic                  | Solution                             |
| ------------------------ | --------------------------- | ------------------------------------ |
| Port 80 occupé           | `netstat -tlnp \| grep :80` | Changer port dans docker-compose.yml |
| MySQL connection refused | `docker-compose logs mysql` | Restart MySQL, vérifier config       |
| 500 PHP error            | `docker-compose logs php`   | Clear cache, check logs              |
| Assets 404               | `ls public/build/`          | Run `npm run build`                  |
| Permission denied        | `ls -la var/`               | Fix permissions avec chown/chmod     |
| Out of memory            | `docker stats`              | Augmenter limites Docker             |

## Commandes d'Urgence

```bash
# Reset rapide complet
docker-compose down -v && docker-compose up -d --build

# Health check rapide
docker-compose exec php bin/console about

# Status réseau
docker network inspect $(docker-compose ps -q) 2>/dev/null || echo "Network issue"

# Logs erreurs récentes
docker-compose logs --since 10m | grep -i error
```
