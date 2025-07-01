# Dépannage Docker JJA_DEV

Guide de résolution des problèmes Docker les plus fréquents dans l'environnement JJA_DEV.

## Problèmes de Démarrage

### Docker ne démarre pas

```bash
# Vérifier état Docker
docker --version
docker-compose --version

# Redémarrer Docker
sudo systemctl restart docker
# ou sur Windows/Mac: redémarrer Docker Desktop

# Vérifier ports disponibles
netstat -tlnp | grep :80
netstat -tlnp | grep :3306
```

### Services ne démarrent pas

```bash
# Arrêter tous les services
docker-compose down

# Nettoyer containers orphelins
docker-compose down --remove-orphans

# Reconstruire images
docker-compose build --no-cache

# Démarrer avec logs
docker-compose up --build
```

## Problèmes Base de Données

### MySQL ne démarre pas

```bash
# Vérifier logs MySQL
docker-compose logs mysql

# Problème port 3306 occupé
sudo lsof -i :3306
sudo kill -9 <PID>

# Reset complet MySQL
docker-compose down -v
docker volume rm jja_dev_mysql_data
docker-compose up -d mysql
```

### Connection refused

```bash
# Vérifier statut container MySQL
docker-compose ps mysql

# Accéder au container
docker-compose exec mysql bash

# Test connection depuis PHP
docker-compose exec php bin/console doctrine:database:create
docker-compose exec php bin/console doctrine:schema:validate
```

### Erreurs migrations

```bash
# Reset base de données complète
docker-compose exec php bin/console doctrine:database:drop --force
docker-compose exec php bin/console doctrine:database:create
docker-compose exec php bin/console doctrine:migrations:migrate --no-interaction

# Migration spécifique
docker-compose exec php bin/console doctrine:migrations:execute --up VERSION

# Forcer version migration
docker-compose exec php bin/console doctrine:migrations:version --add VERSION
```

## Problèmes PHP/Symfony

### Erreurs 500 serveur

```bash
# Vérifier logs PHP
docker-compose logs php

# Clear cache
docker-compose exec php bin/console cache:clear

# Permissions fichiers
docker-compose exec php chown -R www-data:www-data var/
docker-compose exec php chmod -R 755 var/

# Vérifier configuration PHP
docker-compose exec php php -m
docker-compose exec php php --ini
```

### Extensions PHP manquantes

```dockerfile
# Dockerfile - ajouter extensions
RUN docker-php-ext-install pdo_mysql intl opcache

# Redémarrer après modification
docker-compose build php --no-cache
docker-compose up -d php
```

### Problèmes Composer

```bash
# Update composer dans container
docker-compose exec php composer self-update

# Clear cache composer
docker-compose exec php composer clear-cache

# Reinstall vendors
docker-compose exec php rm -rf vendor/
docker-compose exec php composer install

# Problèmes mémoire
docker-compose exec php php -d memory_limit=-1 /usr/local/bin/composer install
```

## Problèmes Assets/Webpack

### NPM install échoue

```bash
# Clean install
docker-compose exec php rm -rf node_modules/
docker-compose exec php rm package-lock.json
docker-compose exec php npm cache clean --force
docker-compose exec php npm install

# Version Node/NPM
docker-compose exec php node --version
docker-compose exec php npm --version
```

### Build assets échoue

```bash
# Vérifier espace disque
df -h

# Build avec debug
docker-compose exec php npm run build -- --progress

# Mode développement
docker-compose exec php npm run dev

# Watch mode
docker-compose exec php npm run watch
```

## Problèmes Performance

### Container lents

```bash
# Vérifier ressources
docker stats

# Limiter ressources containers
# docker-compose.yml
services:
  php:
    deploy:
      resources:
        limits:
          memory: 512M
```

### Cache Symfony

```bash
# Clear tous les caches
docker-compose exec php bin/console cache:clear --env=dev
docker-compose exec php bin/console cache:clear --env=prod

# Warmup cache
docker-compose exec php bin/console cache:warmup

# Permissions cache
docker-compose exec php chown -R www-data:www-data var/cache/
```

## Problèmes Réseau

### Containers ne communiquent pas

```bash
# Vérifier réseau Docker
docker network ls
docker network inspect jja_dev_default

# Test connectivité
docker-compose exec php ping mysql
docker-compose exec php telnet mysql 3306
```

### Ports non accessibles

```bash
# Vérifier mapping ports
docker-compose ps

# Modifier ports dans docker-compose.yml
services:
  php:
    ports:
      - "8080:80"  # Si port 80 occupé
```

## Solutions d'Urgence

### Reset complet environnement

```bash
#!/bin/bash
echo "Reset complet environnement Docker JJA_DEV"

# Arrêt services
docker-compose down -v

# Suppression images
docker-compose down --rmi all

# Suppression volumes
docker volume prune -f

# Suppression containers orphelins
docker system prune -f

# Reconstruction complète
docker-compose build --no-cache
docker-compose up -d

echo "Reset terminé"
```

### Backup avant reset

```bash
#!/bin/bash
echo "Backup base de données avant reset"

# Export base
docker-compose exec mysql mysqldump -u root -p${MYSQL_ROOT_PASSWORD} jja_dev > backup_$(date +%Y%m%d_%H%M%S).sql

# Backup files upload
tar -czf uploads_backup_$(date +%Y%m%d_%H%M%S).tar.gz public/uploads/

echo "Backup terminé"
```

## Monitoring et Diagnostic

### Logs centralisés

```bash
# Tous les logs
docker-compose logs

# Logs service spécifique
docker-compose logs php
docker-compose logs mysql

# Logs en temps réel
docker-compose logs -f

# Logs depuis X minutes
docker-compose logs --since 10m
```

### Métriques containers

```bash
# Utilisation ressources
docker stats

# Processus dans container
docker-compose exec php ps aux

# Espace disque
docker-compose exec php df -h

# Mémoire disponible
docker-compose exec php free -h
```

### Health checks

```bash
# Script diagnostic complet
#!/bin/bash
echo "=== Diagnostic Docker JJA_DEV ==="

echo "1. Vérification services"
docker-compose ps

echo "2. Vérification santé containers"
docker-compose exec php php --version
docker-compose exec mysql mysql --version

echo "3. Test base de données"
docker-compose exec php bin/console doctrine:schema:validate

echo "4. Test Symfony"
docker-compose exec php bin/console debug:router | head -5

echo "5. Vérification assets"
ls -la public/build/

echo "=== Diagnostic terminé ==="
```

## Commandes Utiles

```bash
# Accès direct containers
docker-compose exec php bash
docker-compose exec mysql mysql -u root -p

# Copy fichiers
docker cp container:/path/to/file /host/path
docker-compose cp php:/var/www/html/var/log/dev.log ./

# Restart service spécifique
docker-compose restart php
docker-compose restart mysql

# Update images
docker-compose pull
docker-compose up -d --build
```

## Documentation Erreurs

### Erreurs courantes et solutions

| Erreur                | Cause                | Solution                         |
| --------------------- | -------------------- | -------------------------------- |
| `Port already in use` | Port occupé          | Changer port ou killer processus |
| `Connection refused`  | Service non démarré  | Vérifier logs et redémarrer      |
| `Permission denied`   | Problème permissions | Ajuster chmod/chown              |
| `Out of memory`       | Manque RAM           | Augmenter limites Docker         |
| `No space left`       | Disque plein         | Nettoyer images/volumes          |

### Contacts Support

-   **Docker** : Documentation officielle
-   **Symfony** : Logs dans var/log/
-   **MySQL** : Logs dans container
-   **JJA_DEV** : Issues GitHub du projet
