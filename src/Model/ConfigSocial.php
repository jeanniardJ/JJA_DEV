<?php

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ConfigSocial
{
    #[Assert\Type('string')]
    private ?string $FacebookUrl;

    #[Assert\Type('string')]
    private ?string $TwitterUrl;

    #[Assert\Type('string')]
    private ?string $InstagramUrl;

    #[Assert\Type('string')]
    private ?string $LinkedinUrl;

    #[Assert\Type('string')]
    private ?string $YoutubeUrl;

    #[Assert\Type('string')]
    private ?string $WhatsappPhone;

    /**
     * @return string|null
     */
    public function getFacebookUrl(): ?string
    {
        return $this->FacebookUrl;
    }

    /**
     * @param string|null $FacebookUrl
     */
    public function setFacebookUrl(?string $FacebookUrl): void
    {
        $this->FacebookUrl = $FacebookUrl;
    }

    /**
     * @return string|null
     */
    public function getTwitterUrl(): ?string
    {
        return $this->TwitterUrl;
    }

    /**
     * @param string|null $TwitterUrl
     */
    public function setTwitterUrl(?string $TwitterUrl): void
    {
        $this->TwitterUrl = $TwitterUrl;
    }

    /**
     * @return string|null
     */
    public function getInstagramUrl(): ?string
    {
        return $this->InstagramUrl;
    }

    /**
     * @param string|null $InstagramUrl
     */
    public function setInstagramUrl(?string $InstagramUrl): void
    {
        $this->InstagramUrl = $InstagramUrl;
    }

    /**
     * @return string|null
     */
    public function getLinkedinUrl(): ?string
    {
        return $this->LinkedinUrl;
    }

    /**
     * @param string|null $LinkedinUrl
     */
    public function setLinkedinUrl(?string $LinkedinUrl): void
    {
        $this->LinkedinUrl = $LinkedinUrl;
    }

    /**
     * @return string|null
     */
    public function getYoutubeUrl(): ?string
    {
        return $this->YoutubeUrl;
    }

    /**
     * @param string|null $YoutubeUrl
     */
    public function setYoutubeUrl(?string $YoutubeUrl): void
    {
        $this->YoutubeUrl = $YoutubeUrl;
    }

    /**
     * @return string|null
     */
    public function getWhatsappPhone(): ?string
    {
        return $this->WhatsappPhone;
    }

    /**
     * @param string|null $WhatsappPhone
     */
    public function setWhatsappPhone(?string $WhatsappPhone): void
    {
        $this->WhatsappPhone = $WhatsappPhone;
    }
}
