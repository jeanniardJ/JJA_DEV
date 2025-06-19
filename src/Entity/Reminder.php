<?php

namespace App\Entity;

use App\Repository\ReminderRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ReminderRepository::class)]
class Reminder
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $reminderDate = null;

    #[ORM\ManyToOne(inversedBy: 'reminders')]
    #[ORM\JoinColumn(nullable: false)]
    private ?prospect $prospect = null;

    #[ORM\Column]
    private ?bool $isCompleted = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getReminderDate(): ?\DateTimeInterface
    {
        return $this->reminderDate;
    }

    public function setReminderDate(\DateTimeInterface $reminderDate): static
    {
        $this->reminderDate = $reminderDate;

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

    public function isIsCompleted(): ?bool
    {
        return $this->isCompleted;
    }

    public function setIsCompleted(bool $isCompleted): static
    {
        $this->isCompleted = $isCompleted;

        return $this;
    }
}
