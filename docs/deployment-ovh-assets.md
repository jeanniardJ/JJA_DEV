# Déploiement OVH Web Hosting - Guide Complet

## Contexte

L'hébergement web OVH ne dispose que de **PHP et Composer**. Node.js et npm ne sont pas disponibles.

Notre solution : **GitHub Actions compile les assets**, puis OVH récupère le code + assets pré-compilés.

## Architecture de Déploiement

```cmd
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Development    │    │  GitHub Actions │    │   OVH Server    │
│                 │    │                 │    │                 │
│ npm run dev     │───▶│ npm run build   │───▶│ git pull        │
│ SASS/JS editing │    │ Compile assets  │    │ composer install│
│                 │    │ Push to master  │    │ cache:clear     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Workflow de Déploiement

### 1. GitHub Actions (`.github/workflows/webpack.yml`)

**Sur Pull Request :**

- Lance les tests PHP et JS
- Vérifie la qualité du code
- Compile les assets pour validation

**Sur Push vers `master` :**

- Compile les assets en mode production
- Commit les assets dans `public/build/`
- Push automatiquement vers `master`
- (Optionnel) Déclenche le webhook OVH

### 2. Serveur OVH (`deploy.sh`)

```bash
#!/bin/bash
# Récupération du code + assets pré-compilés
git pull origin master

# Installation PHP uniquement (pas de npm !)
composer install --no-dev --optimize-autoloader

# Vérification des assets pré-compilés
if [ -d "public/build" ]; then
    echo "✅ Assets trouvés"
else
    echo "❌ Assets manquants!"
    exit 1
fi

# Cache et migrations Symfony
php bin/console cache:clear --env=prod
php bin/console doctrine:migrations:migrate --no-interaction
```

## Configuration OVH

### Étape 1 : Préparer le serveur OVH

1. **Créer le répertoire de projet :**

    ```bash
    mkdir /home/votre-user/jja-dev
    cd /home/votre-user/jja-dev
    ```

2. **Cloner le repository :**

    ```bash
    git clone https://github.com/votre-username/JJA-DEV.git .
    ```

3. **Copier le script de déploiement :**

    ```bash
    # Copier deploy.sh dans le répertoire racine
    # Adapter les chemins dans le script
    chmod +x deploy.sh
    ```

### Étape 2 : Configuration des variables

**Dans `deploy.sh`, modifier :**

```bash
PROJECT_DIR="/home/votre-user/jja-dev"
BRANCH="master"
```

**Créer `.env.prod.local` :**

```env
APP_ENV=prod
APP_SECRET=your-production-secret
DATABASE_URL="mysql://user:password@localhost:3306/jja_dev_prod"
```

### Étape 3 : Premier déploiement

```bash
cd /home/votre-user/jja-dev
./deploy.sh
```

## Avantages de cette Approche

### ✅ Compatible OVH

- **Aucune dépendance Node.js** sur le serveur
- Utilise uniquement PHP et Composer
- Fonctionne avec les limitations OVH

### ✅ Assets Optimisés

- Compilation en mode production
- Minification automatique
- Cache busting intégré

### ✅ Déploiement Automatisé

- Push vers `master` → assets compilés automatiquement
- Pas d'intervention manuelle
- Webhook OVH (optionnel)

### ✅ Rollback Facile

- Assets versionnés dans Git
- Retour arrière possible
- Pas de perte de compilation

## Structure des Assets

```cmd
public/build/
├── entrypoints.json         # Points d'entrée Encore
├── manifest.json           # Mapping des fichiers
├── runtime.js              # Runtime Webpack
├── app.css                 # CSS compilé (SASS)
├── app.js                  # JS compilé (Stimulus)
└── ...                     # Autres assets
```

## Health Check

Un endpoint `/health-check` est disponible pour vérifier le bon fonctionnement :

```php
// src/Controller/HealthController.php
#[Route('/health-check', methods: ['GET'])]
public function healthCheck(): JsonResponse
{
    return new JsonResponse([
        'status' => 'ok',
        'timestamp' => time(),
        'version' => '1.0.0'
    ]);
}
```

## Commandes de Maintenance

### Développement local

```bash
npm install             # Installation dépendances Node.js
npm run dev            # Build développement
npm run watch          # Watch mode
npm run build          # Build production (test local)
```

### Mise à jour manuelle OVH

```bash
cd /home/votre-user/jja-dev
./deploy.sh
```

### Vérification des assets

```bash
ls -la public/build/
```

### Nettoyage du cache

```bash
php bin/console cache:clear --env=prod
```

### Status de l'application

```bash
curl https://votre-domaine.com/health-check
```

## Dépannage

### Assets manquants

Si `public/build/` est vide :

1. Vérifier que GitHub Actions s'est bien exécuté
2. Forcer un nouveau push vers `master`
3. Vérifier les logs GitHub Actions

### Erreurs de cache

```bash
rm -rf var/cache/prod
php bin/console cache:clear --env=prod
```

### Permissions

```bash
chmod -R 755 var/cache var/log public/build
```

## Migration depuis l'ancien système

1. **Supprimer les anciennes dépendances front :**

    - Plus besoin de npm sur le serveur
    - Supprimer node_modules du serveur

2. **Utiliser le nouveau workflow :**

    - Push vers `master` compile automatiquement
    - Plus d'intervention manuelle

3. **Adapter les scripts existants :**
    - Remplacer `npm run build` par verification assets
    - Garder uniquement PHP/Composer

## Sécurité

- **Secrets GitHub :** Stockage sécurisé des tokens
- **Variables d'environnement :** `.env.prod.local` non versionné
- **Base de données :** Credentials séparés par environnement

## Notes importantes

- Le répertoire `public/build/` est tracké par Git uniquement pour la production
- En développement local, utiliser `npm run dev` pour regénérer les assets
- Les assets sont automatiquement versionnés pour éviter les problèmes de cache
- Le Service Worker est généré automatiquement pour les performances PWA

---

**Cette approche garantit un déploiement 100% compatible avec les limitations d'OVH Web Hosting tout en conservant un workflow moderne et automatisé.**
