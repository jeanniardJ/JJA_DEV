# Intégration Docker via MCP Server - JJA_DEV

## Configuration MCP Docker

L'outil Docker a été intégré dans votre configuration MCP VS Code via le fichier `settings.json`.

### Configuration Active

```json
"mcp": {
    "servers": {
        "github": {
            "type": "http",
            "url": "https://api.githubcopilot.com/mcp/"
        },
        "docker": {
            "type": "stdio",
            "command": "uvx",
            "args": ["mcp-server-docker"],
            "env": {
                "DOCKER_HOST": "npipe:////./pipe/docker_engine"
            }
        }
    }
}
```

## Fonctionnalités Disponibles

### Gestion des Conteneurs

-   **Démarrage services** : `docker-compose up -d`
-   **Arrêt services** : `docker-compose down`
-   **État des services** : `docker-compose ps`
-   **Monitoring** : `docker stats`

### Gestion Base de Données MySQL

-   **Accès MySQL** : `docker-compose exec database mysql -u JJA_DEV -p`
-   **Logs MySQL** : `docker-compose logs database`
-   **Sauvegarde** : `docker-compose exec database mysqldump`

### Logs et Debug

-   **Logs en temps réel** : `docker-compose logs -f [service]`
-   **Inspection conteneur** : `docker inspect [container]`
-   **Exécution commandes** : `docker exec -it [container] [command]`

## Commandes Contextuelles JJA_DEV

### Environnement de Développement

```bash
# Démarrage complet environnement
docker-compose up -d

# Vérification état services
docker-compose ps

# Accès direct MySQL (développement)
docker-compose exec database mysql -u JJA_DEV -pPASSWORD JJA_DEV
```

### Maintenance et Debug

```bash
# Logs MySQL pour debug
docker-compose logs database

# Redémarrage MySQL uniquement
docker-compose restart database

# Nettoyage volumes (ATTENTION: perte de données)
docker-compose down -v
```

## Sécurité et Bonnes Pratiques

### Commandes Autorisées

-   ✅ `docker-compose` (gestion services)
-   ✅ `docker ps` (inspection conteneurs)
-   ✅ `docker logs` (consultation logs)
-   ✅ `docker exec` (exécution commandes)

### Restrictions

-   ❌ Accès direct au socket Docker (`/var/run/docker.sock`)
-   ❌ Commandes privilégiées sans validation
-   ❌ Modification configuration Docker système

### Variables d'Environnement

-   `DOCKER_HOST=npipe:////./pipe/docker_engine` (Windows)
-   Pas d'exposition de credentials dans les commandes
-   Isolation des environnements dev/prod

## Intégration Workflow JJA_DEV

### Développement Local

1. **Démarrage** : MCP Docker démarre automatiquement MySQL
2. **Développement** : PHP/Symfony en local + MySQL Docker
3. **Tests** : Base de données test via Docker
4. **Debug** : Logs accessibles via MCP

### Synchronisation Équipe

-   Configuration MCP partagée via `settings.json`
-   Docker Compose standardisé pour tous les développeurs
-   Variables d'environnement cohérentes

## Commandes Rapides

### Copilot Chat avec MCP Docker

```
@docker ps                    # État des conteneurs
@docker logs database         # Logs MySQL
@docker exec database mysql   # Accès MySQL
@docker stats                 # Monitoring ressources
```

### Commandes Symfony + Docker

```bash
# Démarrer environnement complet
docker-compose up -d && symfony serve -d

# Migrations avec MySQL Docker
symfony console doctrine:migrations:migrate

# Tests avec base Docker
symfony console phpunit --env=test
```

## Dépannage

### Problèmes Courants

1. **MCP Server non démarré**

    ```bash
    uvx mcp-server-docker --version
    ```

2. **Docker Engine non accessible**

    ```bash
    docker version
    ```

3. **Permissions Windows**
    - Vérifier que Docker Desktop est lancé
    - Vérifier les permissions utilisateur

### Logs de Debug

```bash
# Logs MCP (si disponibles)
code --log-level=debug

# Logs Docker Compose
docker-compose logs --tail=50

# État détaillé conteneurs
docker inspect jja_dev_database_1
```

## Configuration Avancée

### Personnalisation MCP Docker

Pour des besoins spécifiques, vous pouvez :

1. Modifier les arguments du serveur MCP
2. Ajouter des variables d'environnement spécifiques
3. Configurer des alias de commandes personnalisés

### Extensions Possibles

-   Intégration avec PHPStorm/VS Code
-   Monitoring automatique des performances
-   Alertes sur les erreurs MySQL
-   Sauvegarde automatique base de données

---

**Note** : Cette configuration est optimisée pour l'environnement de développement JJA_DEV avec MySQL Docker + PHP/Symfony local sur Windows.
