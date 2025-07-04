<?php

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent(template: 'admin/components/breadCrumb.html.twig')]
class BreadCrumb
{
    public array $breadCrumbs = [];

    public function addItem(string $name, ?string $url = null): array
    {
        return $this->breadCrumbs[] = ['name' => $name, 'url' => $url];
    }

    public function getItems(): array
    {
        return $this->breadCrumbs;
    }
}
