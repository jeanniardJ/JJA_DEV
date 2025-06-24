---
applyTo: "JJA_DEV/JJA_DEV/**"
---

# Gestion des Bases de Données JJA_DEV

Ce fichier regroupe les commandes essentielles pour gérer les bases de données dans l'environnement JJA_DEV.

## Commandes MySQL

### Démarrage MySQL

```bash
# Démarrage automatique (service par défaut)
docker-compose up -d

# Démarrage MySQL uniquement (si nécessaire)
docker-compose up -d database

# Vérification du service MySQL
docker-compose ps

# Logs MySQL si nécessaire
docker-compose logs database
```

### Gestion des Migrations

```bash
# Exécution migrations (Symfony CLI local)
symfony console doctrine:migrations:migrate

# Génération nouvelle migration
symfony console make:migration

# Fixtures de développement
symfony console doctrine:fixtures:load
```
