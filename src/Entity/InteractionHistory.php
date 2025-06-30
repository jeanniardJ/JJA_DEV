<?php

namespace App\Entity;

use App\Repository\InteractionHistoryRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: InteractionHistoryRepository::class)]
class InteractionHistory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $interactionDate = null;

    #[ORM\Column(length: 255)]
    private ?string $interactionType = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $notes = null;

    #[ORM\ManyToOne(inversedBy: 'interactionHistories')]
    #[ORM\JoinColumn(nullable: false)]
    private ?prospect $prospect = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInteractionDate(): ?\DateTimeInterface
    {
        return $this->interactionDate;
    }

    public function setInteractionDate(\DateTimeInterface $interactionDate): static
    {
        $this->interactionDate = $interactionDate;

        return $this;
    }

    public function getInteractionType(): ?string
    {
        return $this->interactionType;
    }

    public function setInteractionType(string $interactionType): static
    {
        $this->interactionType = $interactionType;

        return $this;
    }

    public function getNotes(): ?string
    {
        return $this->notes;
    }

    public function setNotes(string $notes): static
    {
        $this->notes = $notes;

        return $this;
    }

    public function getProspect(): ?prospect
    {
        return $this->prospect;
    }

    public function setProspect(?prospect $prospect): static
    {
        $this->prospect = $prospect;

        return $this;
    }
}
