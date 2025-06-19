<?php

namespace App\Entity;

use App\Repository\RouteRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Cmf\Component\Routing\RouteObjectInterface;

#[ORM\Entity(repositoryClass: RouteRepository::class)]
class Route implements RouteObjectInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $path = null;

    #[ORM\OneToOne(mappedBy: 'route', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private Page $page;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): static
    {
        $this->path = $path;

        return $this;
    }

    public function getPage(): ?Page
    {
        return $this->page;
    }

    public function setPage(Page $page): static
    {
        // set the owning side of the relation if necessary
        if ($page->getRoute() !== $this) {
            $page->setRoute($this);
        }

        $this->page = $page;

        return $this;
    }

    public function getContent(): ?object
    {
        return $this->page;
    }

    public function getRouteKey(): ?string
    {
        return $this->path;
    }
}
