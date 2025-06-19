# Migration du Repository JJA_DEV

## Changement d'URL

**Date** : 18 juin 2025

### Ancienne URL

```
https://github.com/JJA-DEV-FR/JJA_DEV.git
```

### Nouvelle URL

```
https://github.com/jeanniardJ/JJA_DEV.git
```

## Actions de Migration

### 1. Mise à jour Git Remote

Pour les développeurs ayant déjà cloné le repository :

```bash
# Mettre à jour l'URL du remote origin
git remote set-url origin https://github.com/jeanniardJ/JJA_DEV.git

# Vérifier la configuration
git remote -v
```

### 2. Nouveau Clone

Pour les nouveaux clones sur **Windows** :

```bash
# Cloner depuis la nouvelle URL
git clone https://github.com/jeanniardJ/JJA_DEV.git
cd JJA_DEV

# Configuration environnement de développement Windows
composer install
npm install

# Démarrage MySQL uniquement (Docker Windows)
docker-compose up -d database

# Symfony CLI local (Windows)
symfony console doctrine:migrations:migrate
symfony console cache:clear
```

### 3. Documentation Mise à Jour

-   ✅ Instructions principales JJA_DEV
-   ✅ Workflow de développement
-   ✅ Instructions de déploiement OVH
-   ✅ Configuration Git locale

### 4. CI/CD & Webhooks

⚠️ **À vérifier** :

-   GitHub Actions workflows
-   Webhooks OVH de déploiement
-   Secrets et variables d'environnement GitHub
-   Configuration des branches protégées

## Impact

### Développement Local

-   ✅ Pas d'impact sur l'environnement local Windows
-   ✅ MySQL Docker continue de fonctionner
-   ✅ Configuration Symfony inchangée
-   ✅ PHP et npm locaux (Windows) non affectés

### Déploiement

-   ⚠️ Vérifier que les webhooks OVH pointent vers la nouvelle URL
-   ⚠️ Mettre à jour les secrets GitHub si nécessaire

### Documentation

-   ✅ Toute la documentation a été mise à jour
-   ✅ Les liens internes restent fonctionnels

## Checklist Post-Migration

-   [ ] Tester le déploiement depuis la nouvelle URL
-   [ ] Vérifier les webhooks OVH
-   [ ] Valider les GitHub Actions
-   [ ] Informer l'équipe de développement
-   [ ] Mettre à jour les bookmarks/favoris

## Support

En cas de problème avec la migration :

1. Vérifier la configuration des remotes : `git remote -v`
2. Tester la connectivité : `git fetch origin`
3. Valider l'environnement local : `symfony serve`
4. Vérifier la base de données : `docker-compose ps`

## Rollback (si nécessaire)

En cas de problème critique :

```bash
# Revenir temporairement à l'ancienne URL (si elle existe encore)
git remote set-url origin https://github.com/JJA-DEV-FR/JJA_DEV.git
```

⚠️ **Note** : L'ancienne URL pourrait ne plus être accessible.
