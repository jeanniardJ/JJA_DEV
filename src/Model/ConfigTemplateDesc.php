<?php

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ConfigTemplateDesc
{
    #[Assert\Length(max: 40)]
    #[Assert\Type('string')]
    private string $title;

    #[Assert\Length(max: 3000)]
    #[Assert\Type('string')]
    private string $description;

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
