<?php

namespace App\Entity;

use App\Repository\ProspectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProspectRepository::class)]
class Prospect
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $firstname = null;

    #[ORM\Column(length: 255, nullable: true)]
    private string $lastname;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $position = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $location = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $website = null;

    #[ORM\ManyToOne(targetEntity: Status::class)]
    #[ORM\JoinColumn(nullable: false)]
    private Status $status;

    #[ORM\OneToMany(mappedBy: 'prospect', targetEntity: InteractionHistory::class, orphanRemoval: true)]
    private Collection $interactionHistories;

    #[ORM\OneToMany(mappedBy: 'prospect', targetEntity: Reminder::class, orphanRemoval: true)]
    private Collection $reminders;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\OneToOne(targetEntity: Note::class, cascade: ["persist", "remove"])]
    #[ORM\JoinColumn(nullable: true)]
    private ?Note $note = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $phone = null;

    public function __construct()
    {
        $this->interactionHistories = new ArrayCollection();
        $this->reminders = new ArrayCollection();

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): static
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): static
    {
        $this->position = $position;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): static
    {
        $this->location = $location;

        return $this;
    }

    public function getWebsite(): ?string
    {
        return $this->website;
    }

    public function setWebsite(?string $website): static
    {
        $this->website = $website;

        return $this;
    }

    public function getStatus(): status
    {
        return $this->status;
    }

    public function setStatus(status $status): static
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection<int, InteractionHistory>
     */
    public function getInteractionHistories(): Collection
    {
        return $this->interactionHistories;
    }

    public function addInteractionHistory(InteractionHistory $interactionHistory): static
    {
        if (!$this->interactionHistories->contains($interactionHistory)) {
            $this->interactionHistories->add($interactionHistory);
            $interactionHistory->setProspect($this);
        }

        return $this;
    }

    public function removeInteractionHistory(InteractionHistory $interactionHistory): static
    {
        if ($this->interactionHistories->removeElement($interactionHistory)) {
            // set the owning side to null (unless already changed)
            if ($interactionHistory->getProspect() === $this) {
                $interactionHistory->setProspect(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Reminder>
     */
    public function getReminders(): Collection
    {
        return $this->reminders;
    }

    public function addReminder(Reminder $reminder): static
    {
        if (!$this->reminders->contains($reminder)) {
            $this->reminders->add($reminder);
            $reminder->setProspect($this);
        }

        return $this;
    }

    public function removeReminder(Reminder $reminder): static
    {
        if ($this->reminders->removeElement($reminder)) {
            // set the owning side to null (unless already changed)
            if ($reminder->getProspect() === $this) {
                $reminder->setProspect(null);
            }
        }

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getNote(): ?note
    {
        return $this->note;
    }

    public function setNote(?note $note): static
    {
        $this->note = $note;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }
}
