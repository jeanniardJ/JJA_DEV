---
mode: 'agent'
tools: ['phpstan', 'phpcs']
description: 'Effectuer une revue de code pour garantir la qualité et la conformité.'
---

# Revue de code

## Objectifs
- Identifier les problèmes de qualité.
- Vérifier la conformité aux standards PSR-12.
- S'assurer de la couverture de tests.

## Étapes
1. Exécuter PHPStan pour détecter les erreurs.
2. Utiliser PHPCS pour valider le formatage.
3. Vérifier les tests unitaires et fonctionnels.

## Exemple
```bash
vendor/bin/phpstan analyse
vendor/bin/phpcs src/
symfony console phpunit
```
