<?php

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * This class is used to store the general configuration of the site
 * with the variables site.name, site.title, site.logo, site.favicon, site.url, site.description, site.keywords
 * @package App\Entity
 */
class ConfigGeneral
{
    #[Assert\NotBlank]
    #[Assert\Length(max: 255)]
    #[Assert\Type('string')]
    private string $name;

    #[Assert\NotBlank]
    #[Assert\Length(max: 50)]
    #[Assert\Type('string')]
    private string $title;

    #[Assert\Type('string')]
    private ?string $logo;

    #[Assert\Type('string')]
    private ?string $favicon;

    #[Assert\NotBlank]
    #[Assert\Hostname(message: 'config.general.invalid.url')]
    #[Assert\Length(max: 50)]
    private string $url;

    #[Assert\NotBlank]
    #[Assert\Length(max: 3000)]
    #[Assert\Type('string')]
    private string $description;

    #[Assert\NotBlank]
    #[Assert\Length(max: 2000)]
    #[Assert\Type('string')]
    private string $keywords;

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }


    /**
     * @return string
     */
    public function getUrl(): string
    {
        return $this->url;
    }

    /**
     * @param string $url
     */
    public function setUrl(string $url): void
    {
        $this->url = $url;
    }

    /**
     * @return string
     */
    public function getKeywords(): string
    {
        return $this->keywords;
    }

    /**
     * @param string $keywords
     */
    public function setKeywords(string $keywords): void
    {
        $this->keywords = $keywords;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return string|null
     */
    public function getLogo(): ?string
    {
        return $this->logo;
    }

    /**
     * @param string|null $logo
     */
    public function setLogo(?string $logo): void
    {
        $this->logo = $logo;
    }

    /**
     * @return string|null
     */
    public function getFavicon(): ?string
    {
        return $this->favicon;
    }

    /**
     * @param string|null $favicon
     */
    public function setFavicon(?string $favicon): void
    {
        $this->favicon = $favicon;
    }
}
