<?php

namespace App\Entity;

use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\RecurringEventRepository;

#[ORM\Entity(repositoryClass: RecurringEventRepository::class)]
class RecurringEvent
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $startTimeRecur = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $endTimeRecur = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $start = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $end = null;

    #[ORM\Column(type: types::SIMPLE_ARRAY, nullable: true)]
    private ?array $daysOfWeek = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStart(): ?\DateTimeInterface
    {
        return $this->start;
    }

    public function setStart(\DateTimeInterface $start): static
    {
        $this->start = $start;

        return $this;
    }

    public function getEnd(): ?\DateTimeInterface
    {
        return $this->end;
    }

    public function setEnd(?\DateTimeInterface $end): ?static
    {
        $this->end = $end;

        return $this;
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

    public function getDaysOfWeek(): ?array
    {
        return $this->daysOfWeek;
    }

    public function setDaysOfWeek(?array $daysOfWeek): static
    {
        $this->daysOfWeek = $daysOfWeek;

        return $this;
    }

    public function getStartTimeRecur(): ?\DateTimeInterface
    {
        return $this->startTimeRecur;
    }

    public function setStartTimeRecur(\DateTimeInterface $startTimeRecur): static
    {
        $this->startTimeRecur = $startTimeRecur;

        return $this;
    }

    public function getEndTimeRecur(): ?\DateTimeInterface
    {
        return $this->endTimeRecur;
    }

    public function setEndTimeRecur(\DateTimeInterface $endTimeRecur): static
    {
        $this->endTimeRecur = $endTimeRecur;

        return $this;
    }
}
