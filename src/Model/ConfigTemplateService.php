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
 * @category Model
 *
 * @author   JJA-DEV
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see      https://jja-dev.fr
 */

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

class ConfigTemplateService
{
    #[Assert\Length(max: 20)]
    #[Assert\Type('string')]
    private string $title;

    #[Assert\Length(max: 170)]
    #[Assert\Type('string')]
    #[Assert\NotBlank]
    private string $description;

    #[Assert\Type('string')]
    private string $price;

    #[Assert\Length(max: 25)]
    #[Assert\Type('string')]
    private string $icon;

    /**
     * Get the value of title.
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * Set the value of title.
     */
    public function setTitle(string $title): self
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
    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of price.
     */
    public function getPrice(): string
    {
        return $this->price;
    }

    /**
     * Set the value of price.
     */
    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get the value of icon.
     */
    public function getIcon(): string
    {
        return $this->icon;
    }

    /**
     * Set the value of icon.
     */
    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }
}
