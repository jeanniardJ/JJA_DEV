---
applyTo: 'JJA_DEV/**'
---

# Authentification & Sécurité JJA_DEV

## Système d'Authentification Hérité

### Base CMS_SF

-   **Conservation obligatoire** : Système de login CMS_SF
-   **Utilisation** : Composant Symfony Security
-   **Rôles** : Structure RBAC existante
-   **Permissions** : Séparation Front Office / Back Office

### Extensions CRM Autorisées

-   Ajouter rôles CRM spécifiques si nécessaire
-   Étendre permissions pour fonctionnalités métier
-   Maintenir compatibilité avec système de base

## Standards de Sécurité

### Authentification & Autorisation

-   Utiliser composant Symfony Security (hérité)
-   Implémenter contrôle d'accès basé sur les rôles (RBAC)
-   Séparer permissions front office vs back office
-   Sécuriser toutes fonctions administratives

### Protection des Données

-   Assainir toutes les entrées utilisateur
-   Utiliser HTTPS pour toutes communications
-   Implémenter protection CSRF sur formulaires
-   Suivre directives RGPD pour données clients

## Configuration Sécurité

### Rôles et Permissions

```yaml
# config/packages/security.yaml (existant - ne pas modifier)
security:
    role_hierarchy:
        ROLE_ADMIN: ROLE_USER
        ROLE_CRM_MANAGER: ROLE_USER
        ROLE_CRM_ADMIN: [ROLE_CRM_MANAGER, ROLE_ADMIN]
```

### Protection Routes

```php
// Annotations de sécurité pour controllers CRM
#[IsGranted('ROLE_CRM_MANAGER')]
class CrmController extends AbstractController
{
    #[IsGranted('ROLE_CRM_ADMIN')]
    public function adminAction(): Response
    {
        // Actions administratives CRM
    }
}
```

### Validation Entrées

```php
// Service de validation sécurisée
class SecureInputService
{
    public function sanitizeInput(string $input): string
    {
        return htmlspecialchars(strip_tags($input), ENT_QUOTES, 'UTF-8');
    }

    public function validateCrmData(array $data): array
    {
        // Validation spécifique CRM
    }
}
```

## Bonnes Pratiques Sécurité

### Authentification

-   Ne jamais stocker mots de passe en clair
-   Utiliser hashage sécurisé (bcrypt/argon2)
-   Implémenter limitation tentatives connexion
-   Session sécurisée avec timeout approprié

### Autorisation

-   Vérifier permissions à chaque action sensible
-   Principe du moindre privilège
-   Audit trail pour actions administratives
-   Séparation des environnements dev/prod

### Protection CSRF

```twig
{# Tous les formulaires doivent inclure protection CSRF #}
<form method="post">
    {{ csrf_token('form_token') }}
    {# Champs du formulaire #}
</form>
```

### Conformité RGPD

-   Consentement explicite pour collecte données
-   Droit à l'effacement (oubli)
-   Portabilité des données clients
-   Chiffrement données sensibles
-   Politique de confidentialité claire

## Audit et Monitoring

### Logging Sécurité

```php
// Service de logging sécurisé
class SecurityLogger
{
    public function logAuthAttempt(string $username, bool $success): void
    {
        $this->logger->info('Authentication attempt', [
            'username' => $username,
            'success' => $success,
            'ip' => $this->request->getClientIp(),
            'timestamp' => new \DateTime()
        ]);
    }
}
```

### Surveillance

-   Monitoring connexions suspectes
-   Alertes sur tentatives d'intrusion
-   Audit régulier des permissions
-   Vérification intégrité données
