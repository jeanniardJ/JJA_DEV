---
mode: 'agent'
tools: ['symfony-cli', 'phpunit', 'phpstan']
description: 'Générer du code Symfony avec tests et analyse qualité.'
---

# Génération de code Symfony

## Étapes
1. Créer une entité dans `src/Entity`.
2. Générer un repository associé.
3. Ajouter des tests unitaires dans `tests/Entity`.
4. Vérifier la qualité du code avec PHPStan et PHPCS.

## Exemple
```php
namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class Example
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255)]
    private $name;
}
```
