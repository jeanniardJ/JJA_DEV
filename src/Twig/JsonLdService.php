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

namespace App\Twig;

use App\Service\ConfigService;
use Symfony\Component\HttpFoundation\RequestStack;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Class JsonLdService.
 *
 * @category Twig_Extension
 *
 * @author   JJA-DEV <contact@jja-dev.fr>
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 * This class is a Twig extension that generates JSON-LD data for the website.
 */
class JsonLdService extends AbstractExtension
{
    /**
     * @var array<mixed> The global configuration
     */
    private array $global;
    private ?string $baseUri;

    /**
     * JsonLdService constructor.
     *
     * @param ConfigService $configService // The ConfigService service
     * @param RequestStack  $request       // The RequestStack service
     */
    public function __construct(ConfigService $configService, RequestStack $request)
    {
        $this->global = $configService->getConfigSite();
        $this->baseUri = $request->getCurrentRequest() ? $request->getCurrentRequest()->getSchemeAndHttpHost() : null;
    }

    /**
     * Get the functions.
     *
     * @return array<TwigFunction>
     */
    public function getFunctions(): array
    {
        return [
            new TwigFunction('jsonLd', $this->generateJsonLd(...)),
        ];
    }

    /**
     * Generate the JSON-LD data.
     */
    public function generateJsonLd(): string
    {
        $site = is_array($this->global['site'] ?? null) ? $this->global['site'] : [];
        $propriety = is_array($this->global['propriety'] ?? null) ? $this->global['propriety'] : [];
        $data = [
            '@context' => 'https://schema.org',
            '@type' => 'WebSite',
            'name' => $site['name'] ?? '',
            'url' => $site['url'] ?? '',
            'logo' => $this->getAbsoluteUrl((string) ($site['logo'] ?? '')),
            'description' => $site['description'] ?? '',
            'legalName' => $propriety['name'] ?? '',
            'keywords' => $site['keywords'] ?? '',
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => $propriety['city'] ?? '',
                // "addressRegion" => $propriety['region'],
                'postalCode' => $propriety['zipCode'] ?? '',
                'streetAddress' => $propriety['address'] ?? '',
            ],
            'image' => $this->getAbsoluteUrl((string) ($site['logo'] ?? '')),
            'telephone' => $propriety['phone'] ?? '',
            'email' => $propriety['email'] ?? '',
            'priceRange' => '$$',
            'openingHours' => 'Mo,Tu,We,Th,Fr 09:00-17:30',
            'inLanguage' => 'French',
            'brand' => [
                '@type' => 'Brand',
                'name' => $propriety['name'] ?? '',
                'description' => $site['description'] ?? '',
                'logo' => $site['logo'] ?? '',
            ],
            'contactPoint' => [
                [
                    '@type' => 'ContactPoint',
                    'telephone' => $propriety['phone'] ?? '',
                    'contactType' => 'customer service',
                ],
            ],
            'sameAs' => $this->sameAsData(),
            'foundingDate' => '2021',
            'addressCountry' => 'FR',
            'founder' => $propriety['name'] ?? '',
        ];

        return "<script type='application/ld+json'>".
            json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES).
            '</script>';
    }

    /**
     * Get the sameAs data.
     *
     * @return array<mixed>
     */
    private function sameAsData(): array
    {
        $sameAs = [];
        $social = is_array($this->global['social'] ?? null) ? $this->global['social'] : [];

        foreach ($social as $key => $value) {
            if (null !== $value) {
                $sameAs[] = $value;
            }
        }

        return $sameAs;
    }

    /**
     * Get the absolute URL.
     *
     * @param string $url // The URL
     */
    private function getAbsoluteUrl($url): string
    {
        return $this->baseUri.'/'.$url;
    }
}
