<?php

declare(strict_types=1);

namespace App\Twig;

use App\Service\ConfigService;
use App\Service\ConfigTemplateService;
use Twig\Extension\AbstractExtension;
use Twig\Extension\GlobalsInterface;

class AppExtension extends AbstractExtension implements GlobalsInterface
{
    private ConfigService $configService;

    private ConfigTemplateService $configTemplateService;

    public function __construct(ConfigService $configService, ConfigTemplateService $configTemplateService)
    {
        $this->configService = $configService;
        $this->configTemplateService = $configTemplateService;
    }

    public function getGlobals(): array
    {
        return [
            'global' => $this->configService->getConfigSite(),
            'template' => $this->configTemplateService->getConfigTemplate(),
        ];
    }
}
