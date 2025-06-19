<?php

namespace App\Model;

class ConfigSeo
{
    private ?string $seoTitle;
    private ?string $seoDescription;
    private ?string $seoKeywords;

    public function getSeoTitle(): ?string
    {
        return $this->seoTitle;
    }

    public function setSeoTitle(?string $seoTitle): void
    {
        $this->seoTitle = $seoTitle;
    }

    public function getSeoDescription(): ?string
    {
        return $this->seoDescription;
    }

    public function setSeoDescription(?string $seoDescription): void
    {
        $this->seoDescription = $seoDescription;
    }

    public function getSeoKeywords(): ?string
    {
        return $this->seoKeywords;
    }

    public function setSeoKeywords(?string $seoKeywords): void
    {
        $this->seoKeywords = $seoKeywords;
    }
}
