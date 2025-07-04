<?php

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ConfigTemplatePresentation
{
    #[Assert\Length(max: 35)]
    #[Assert\Type('string')]
    #[Assert\NotBlank]
    public string $title;

    #[Assert\Length(max: 300)]
    #[Assert\Type('string')]
    #[Assert\NotBlank]
    public string $description;

    /**
     * Get the value of title.
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set the value of title.
     *
     * @return self
     */
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of description.
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * Set the value of description.
     */
    public function setDescription($description): self
    {
        $this->description = $description;

        return $this;
    }
}
