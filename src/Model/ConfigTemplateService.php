<?php

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ConfigTemplateService
{
    #[Assert\Length(max: 20)]
    #[Assert\Type('string')]
    private string $title;

    #[Assert\Length(max: 170)]
    #[Assert\Type('string')]
    #[Assert\NotBlank]
    private string $description;

    #[Assert\Type('string')]
    private string $price;

    #[Assert\Length(max: 25)]
    #[Assert\Type('string')]
    private string $icon;

    /**
     * Get the value of title
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */
    public function setTitle($title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * Set the value of description
     *
     * @return  self
     */
    public function setDescription($description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of price
     */
    public function getPrice(): string
    {
        return $this->price;
    }

    /**
     * Set the value of price
     *
     * @return  self
     */
    public function setPrice($price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get the value of icon
     */
    public function getIcon(): string
    {
        return $this->icon;
    }

    /**
     * Set the value of icon
     *
     * @return  self
     */
    public function setIcon($icon): self
    {
        $this->icon = $icon;

        return $this;
    }
}
