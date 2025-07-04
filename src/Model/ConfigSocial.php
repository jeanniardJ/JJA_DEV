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

    public function getFacebookUrl(): ?string
    {
        return $this->FacebookUrl;
    }

    public function setFacebookUrl(?string $FacebookUrl): void
    {
        $this->FacebookUrl = $FacebookUrl;
    }

    public function getTwitterUrl(): ?string
    {
        return $this->TwitterUrl;
    }

    public function setTwitterUrl(?string $TwitterUrl): void
    {
        $this->TwitterUrl = $TwitterUrl;
    }

    public function getInstagramUrl(): ?string
    {
        return $this->InstagramUrl;
    }

    public function setInstagramUrl(?string $InstagramUrl): void
    {
        $this->InstagramUrl = $InstagramUrl;
    }

    public function getLinkedinUrl(): ?string
    {
        return $this->LinkedinUrl;
    }

    public function setLinkedinUrl(?string $LinkedinUrl): void
    {
        $this->LinkedinUrl = $LinkedinUrl;
    }

    public function getYoutubeUrl(): ?string
    {
        return $this->YoutubeUrl;
    }

    public function setYoutubeUrl(?string $YoutubeUrl): void
    {
        $this->YoutubeUrl = $YoutubeUrl;
    }

    public function getWhatsappPhone(): ?string
    {
        return $this->WhatsappPhone;
    }

    public function setWhatsappPhone(?string $WhatsappPhone): void
    {
        $this->WhatsappPhone = $WhatsappPhone;
    }
}
