<?php

namespace App\Entity;

use App\Repository\ConfigTemplateRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ConfigTemplateRepository::class)]
class ConfigTemplate
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    /**
     * @var array<mixed>
     */
    #[ORM\Column]
    private array $value = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return array<mixed>
     */
    public function getValue(): array
    {
        return $this->value;
    }

    /**
     * @param array<mixed> $value
     */
    public function setValue(array $value): static
    {
        $this->value = $value;

        return $this;
    }
}
