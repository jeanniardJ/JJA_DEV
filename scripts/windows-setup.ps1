#! /usr/bin/env pwsh
# =============================================================================
# SCRIPT DE CONFIGURATION WINDOWS - JJA_DEV
# =============================================================================
# Ce script facilite la configuration initiale du projet JJA_DEV sur Windows
# 
# ARCHITECTURE: Développement Windows → Production Linux
# - Windows: PHP local + MySQL Docker (performance optimale)
# - Linux: PHP-FPM + MySQL natif (production OVH)
#
# PRÉREQUIS WINDOWS:
# - PHP 8.1+ installé localement avec l'extension pdo_mysql
# - Composer installé globalement
# - Node.js et npm installés
# - Docker Desktop installé et démarré
# - Symfony CLI installé (optionnel mais recommandé)
#
# UTILISATION:
# .\scripts\windows-setup.ps1
# =============================================================================

param(
    [switch]$SkipDocker,
    [switch]$SkipEnv,
    [switch]$SkipDeps,
    [switch]$Help
)

# Couleurs pour les messages
function Write-Success { param($Message) Write-Host $Message -ForegroundColor Green }
function Write-Warning { param($Message) Write-Host $Message -ForegroundColor Yellow }
function Write-Error { param($Message) Write-Host $Message -ForegroundColor Red }
function Write-Info { param($Message) Write-Host $Message -ForegroundColor Cyan }

if ($Help) {
    Write-Host @"
SCRIPT DE CONFIGURATION WINDOWS - JJA_DEV

UTILISATION:
  .\scripts\windows-setup.ps1 [OPTIONS]

OPTIONS:
  -SkipDocker    Ne pas démarrer les services Docker
  -SkipEnv       Ne pas créer le fichier .env
  -SkipDeps      Ne pas installer les dépendances
  -Help          Afficher cette aide

EXEMPLES:
  .\scripts\windows-setup.ps1                    # Configuration complète
  .\scripts\windows-setup.ps1 -SkipDocker        # Sans Docker
  .\scripts\windows-setup.ps1 -SkipEnv -SkipDeps # Installation minimale
"@
    exit 0
}

Write-Info "=============================================================================="
Write-Info "CONFIGURATION WINDOWS - JJA_DEV"
Write-Info "==============================================================================="

# Information sur l'architecture
Write-Info ""
Write-Info "ARCHITECTURE PROJET:"
Write-Info "  📂 Développement: Windows (PHP local + MySQL Docker)"
Write-Info "  🐧 Production:    Linux OVH (PHP-FPM + MySQL natif)"
Write-Info ""
Write-Info "SERVICES WINDOWS:"
Write-Info "  ✓ PHP 8.1+:       Installation locale (performance optimale)"
Write-Info "  ✓ Composer:       Installation locale"
Write-Info "  ✓ npm/Node.js:    Installation locale"
Write-Info "  ✓ Symfony CLI:    Installation locale (recommandé)"
Write-Info "  🐳 MySQL:         Docker Desktop uniquement"
Write-Info "  🐳 MailHog:       Docker Desktop (optionnel)"
Write-Info ""
Write-Info "AVANTAGES WINDOWS:"
Write-Info "  • Performance: Pas de virtualisation PHP/npm"
Write-Info "  • Debug: Xdebug natif, IDE intégré"
Write-Info "  • Flexibilité: Versions multiples PHP"
Write-Info "  • Hot Reload: Assets temps réel"
Write-Info ""

# Vérification des prérequis
Write-Info "Vérification des prérequis..."

# Vérifier PHP
try {
    $phpVersion = php --version 2>$null
    if ($phpVersion -match "PHP (\d+\.\d+)") {
        $version = [decimal]$matches[1]
        if ($version -ge 8.1) {
            Write-Success "✓ PHP $version détecté"
        } else {
            Write-Error "✗ PHP 8.1+ requis, version $version détectée"
            exit 1
        }
    }
} catch {
    Write-Error "✗ PHP non trouvé. Installez PHP 8.1+ et ajoutez-le au PATH"
    exit 1
}

# Vérifier l'extension pdo_mysql
$phpExtensions = php -m 2>$null
if ($phpExtensions -contains "pdo_mysql") {
    Write-Success "✓ Extension pdo_mysql activée"
} else {
    Write-Warning "⚠ Extension pdo_mysql non détectée"
    Write-Info "Ajoutez 'extension=pdo_mysql' dans votre php.ini"
}

# Vérifier Composer
try {
    $composerVersion = composer --version 2>$null
    Write-Success "✓ Composer détecté"
} catch {
    Write-Error "✗ Composer non trouvé. Installez Composer depuis https://getcomposer.org/"
    exit 1
}

# Vérifier Node.js
try {
    $nodeVersion = node --version 2>$null
    Write-Success "✓ Node.js $nodeVersion détecté"
} catch {
    Write-Error "✗ Node.js non trouvé. Installez Node.js depuis https://nodejs.org/"
    exit 1
}

# Vérifier Docker
if (-not $SkipDocker) {
    try {
        $dockerVersion = docker --version 2>$null
        Write-Success "✓ Docker détecté"
    } catch {
        Write-Error "✗ Docker non trouvé. Installez Docker Desktop"
        exit 1
    }
}

# Vérifier Symfony CLI (optionnel)
try {
    $symfonyVersion = symfony version 2>$null
    Write-Success "✓ Symfony CLI détecté"
    $useSymfony = $true
} catch {
    Write-Warning "⚠ Symfony CLI non trouvé (optionnel)"
    Write-Info "Installez Symfony CLI depuis https://symfony.com/download"
    $useSymfony = $false
}

Write-Info ""
Write-Info "==============================================================================="
Write-Info "CONFIGURATION DE L'ENVIRONNEMENT"
Write-Info "==============================================================================="

# Créer le fichier .env s'il n'existe pas
if (-not $SkipEnv -and -not (Test-Path ".env")) {
    Write-Info "Création du fichier .env..."
    Copy-Item ".env.dist" ".env"
    Write-Success "✓ Fichier .env créé depuis .env.dist"
    Write-Warning "⚠ N'oubliez pas d'éditer .env avec vos valeurs locales !"
} elseif (Test-Path ".env") {
    Write-Success "✓ Fichier .env existe déjà"
}

# Démarrer les services Docker
if (-not $SkipDocker) {
    Write-Info "Démarrage des services Docker..."
    try {
        docker-compose up mysql -d
        Write-Success "✓ MySQL démarré en Docker"
        
        # Attendre que MySQL soit prêt
        Write-Info "Attente de la disponibilité de MySQL..."
        $retries = 30
        do {
            Start-Sleep -Seconds 2
            $mysqlReady = docker-compose exec mysql mysql -u JJA_DEV -p"CHANGEZ_CE_MOT_DE_PASSE" -e "SELECT 1" 2>$null
            $retries--
        } while (-not $mysqlReady -and $retries -gt 0)
        
        if ($mysqlReady) {
            Write-Success "✓ MySQL est prêt"
        } else {
            Write-Warning "⚠ MySQL peut ne pas être prêt. Vérifiez la configuration"
        }
    } catch {
        Write-Error "✗ Erreur lors du démarrage de Docker"
        Write-Info "Vérifiez que Docker Desktop est démarré"
    }
}

# Installer les dépendances
if (-not $SkipDeps) {
    Write-Info ""
    Write-Info "Installation des dépendances..."
    
    # Dépendances PHP
    Write-Info "Installation des dépendances PHP avec Composer..."
    composer install --no-interaction
    Write-Success "✓ Dépendances PHP installées"
    
    # Dépendances JavaScript
    Write-Info "Installation des dépendances JavaScript avec npm..."
    npm install
    Write-Success "✓ Dépendances JavaScript installées"
}

Write-Info ""
Write-Info "==============================================================================="
Write-Info "INITIALISATION DE LA BASE DE DONNÉES"
Write-Info "==============================================================================="

if (-not $SkipDocker) {
    # Créer la base de données
    Write-Info "Création de la base de données..."
    if ($useSymfony) {
        symfony console doctrine:database:create --if-not-exists
    } else {
        php bin/console doctrine:database:create --if-not-exists
    }
    Write-Success "✓ Base de données créée"
    
    # Exécuter les migrations
    Write-Info "Exécution des migrations..."
    if ($useSymfony) {
        symfony console doctrine:migrations:migrate --no-interaction
    } else {
        php bin/console doctrine:migrations:migrate --no-interaction
    }
    Write-Success "✓ Migrations exécutées"
    
    # Charger les fixtures
    Write-Info "Chargement des fixtures initiales..."
    if ($useSymfony) {
        symfony console doctrine:fixtures:load --group=cms-init --no-interaction
        symfony console doctrine:fixtures:load --group=cms-templates --append --no-interaction
        symfony console doctrine:fixtures:load --group=cms-config --append --no-interaction
    } else {
        php bin/console doctrine:fixtures:load --group=cms-init --no-interaction
        php bin/console doctrine:fixtures:load --group=cms-templates --append --no-interaction
        php bin/console doctrine:fixtures:load --group=cms-config --append --no-interaction
    }
    Write-Success "✓ Fixtures initiales chargées"
}

Write-Info ""
Write-Info "==============================================================================="
Write-Info "COMPILATION DES ASSETS"
Write-Info "==============================================================================="

if (-not $SkipDeps) {
    Write-Info "Compilation des assets avec Webpack Encore..."
    npm run build
    Write-Success "✓ Assets compilés"
}

Write-Info ""
Write-Success "==============================================================================="
Write-Success "CONFIGURATION TERMINÉE !"
Write-Success "==============================================================================="
Write-Info ""
Write-Info "PROCHAINES ÉTAPES:"
Write-Info "1. Éditez le fichier .env avec vos valeurs locales"
Write-Info "2. Vérifiez la connexion à la base de données"
Write-Info "3. Démarrez le serveur de développement"
Write-Info ""
Write-Info "COMMANDES UTILES:"
if ($useSymfony) {
    Write-Info "  Serveur de développement:    symfony server:start"
    Write-Info "  Console Symfony:             symfony console"
    Write-Info "  Tests:                       symfony console ..."
} else {
    Write-Info "  Serveur de développement:    php -S localhost:8000 -t public"
    Write-Info "  Console Symfony:             php bin/console"
    Write-Info "  Tests:                       php bin/phpunit"
}
Write-Info "  Watch des assets:            npm run watch"
Write-Info "  Docker MySQL:                docker-compose up mysql -d"
Write-Info "  Arrêt Docker:                docker-compose down"
Write-Info ""
Write-Info "DOCUMENTATION:"
Write-Info "  Instructions complètes:      .github/instructions/JJA_DEV.instructions.md"
Write-Info "  Environnement Docker:        .github/instructions/base/docker-environment.instructions.md"
Write-Info ""
Write-Success "Bonne programmation ! 🚀"
