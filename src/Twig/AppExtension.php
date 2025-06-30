<?php
/**
 * MIT License.
 *
 * Copyright (c) 2023 JJA-DEV
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @category TwigExtension
 *
 * @author   JJA-DEV
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see      https://jja-dev.fr
 */

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
