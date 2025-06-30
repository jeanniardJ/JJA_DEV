#!/bin/bash

# Script de déploiement OVH pour JJA_DEV (Hébergement Web)
# Adaptation pour les limitations OVH : seulement PHP et Composer disponibles
# Les assets sont pré-compilés par GitHub Actions

set -e

# Configuration
PROJECT_DIR="JJA_DEV"
BRANCH="master"

echo "🚀 Début du déploiement JJA_DEV (OVH Web Hosting)"
echo "📅 $(date)"
echo "🌐 Branche: $BRANCH"

# Changement vers le répertoire du projet
cd "$PROJECT_DIR"

# Mise à jour du code (inclus les assets pré-compilés)
echo "📥 Récupération des dernières modifications..."
git fetch origin
git reset --hard origin/$BRANCH

# Installation des dépendances Composer (PHP uniquement)
echo "📦 Installation des dépendances PHP..."
composer install --no-dev --optimize-autoloader --no-interaction

# Vérification de la présence des assets pré-compilés
echo "📦 Vérification des assets pré-compilés..."
if [ -d "public/build" ]; then
    echo "✅ Assets trouvés dans public/build/"
    ls -la public/build/ | head -10
else
    echo "❌ ERREUR: Assets manquants! GitHub Actions n'a pas pushé les assets compilés."
    exit 1
fi

# Cache Symfony
echo "🧹 Nettoyage du cache Symfony..."
php bin/console cache:clear --env=prod --no-debug
php bin/console cache:warmup --env=prod

# Migrations de base de données
echo "🗄️ Exécution des migrations..."
php bin/console doctrine:migrations:migrate --no-interaction --env=prod

# Permissions (si disponibles sur OVH)
echo "🔐 Configuration des permissions..."
chmod -R 755 var/cache var/log 2>/dev/null || echo "⚠️ Permissions limitées sur OVH"
chmod -R 755 public/build 2>/dev/null || echo "⚠️ Permissions limitées sur OVH"

# Vérification de santé avec PHP
echo "🏥 Vérification de santé..."
php -r "
try {
    \$healthUrl = 'https://votre-domaine.com/health-check';
    \$context = stream_context_create(['http' => ['timeout' => 10]]);
    \$response = file_get_contents(\$healthUrl, false, \$context);
    if (\$response !== false) {
        echo '✅ Health check réussi\n';
        exit(0);
    } else {
        echo '❌ Health check échoué\n';
        exit(1);
    }
} catch (Exception \$e) {
    echo '⚠️ Health check non disponible: ' . \$e->getMessage() . '\n';
    echo '✅ Déploiement terminé sans vérification HTTP\n';
    exit(0);
}
"

echo "🎉 Déploiement OVH terminé avec succès!"
echo "📅 $(date)"
echo ""
echo "📋 Résumé:"
echo "- Code mis à jour depuis GitHub"
echo "- Assets pré-compilés par GitHub Actions"
echo "- Dépendances PHP installées"
echo "- Cache Symfony régénéré"
echo "- Migrations appliquées"
