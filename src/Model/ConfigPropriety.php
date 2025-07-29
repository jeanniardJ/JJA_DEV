<?php

/**
 * @category Model
 *
 * @author   JJA-DEV
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 */

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * Classe ConfigPropriety.
 *
 * @catégorie Model
 *
 * @paquet  App\Model
 *
 * @auteur   JJA-DEV
 *
 * @licence  MIT <https://opensource.org/licenses/MIT>
 *
 * @lien     https://jja-dev.fr
 */
class ConfigPropriety
{
    #[Assert\NotBlank]
    #[Assert\Length(max: 50)]
    #[Assert\Type('string')]
    private string $name;

    #[Assert\NotBlank]
    #[Assert\Length(max: 255)]
    #[Assert\Type('string')]
    private string $address;

    #[Assert\NotBlank]
    #[Assert\Length(max: 50)]
    #[Assert\Type('string')]
    private string $city;

    #[Assert\NotBlank]
    #[Assert\Length(max: 5)]
    #[Assert\Type('string')]
    private string $zipCode;

    #[Assert\NotBlank]
    #[Assert\Length(max: 50)]
    #[Assert\Type('string')]
    private string $country;

    #[Assert\NotBlank]
    #[Assert\Length(max: 10)]
    #[Assert\Type('string')]
    #[Assert\Regex(pattern: '/^0[1-9]([-. ]?[0-9]{2}){4}$/')]
    private string $phone;

    #[Assert\NotBlank]
    #[Assert\Length(max: 50)]
    #[Assert\Type('string')]
    private string $email;

    #[Assert\Length(max: 14)]
    #[Assert\Type('integer' | null)]
    private int $siret;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function setAddress(string $address): void
    {
        $this->address = $address;
    }

    public function getCity(): string
    {
        return $this->city;
    }

    public function setCity(string $city): void
    {
        $this->city = $city;
    }

    public function getZipCode(): string
    {
        return $this->zipCode;
    }

    public function setZipCode(string $zipCode): void
    {
        $this->zipCode = $zipCode;
    }

    public function getCountry(): string
    {
        return $this->country;
    }

    public function setCountry(string $country): void
    {
        $this->country = $country;
    }

    public function getPhone(): string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): void
    {
        $this->phone = $phone;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function getSiret(): int
    {
        return $this->siret;
    }

    public function setSiret(int $siret): void
    {
        $this->siret = $siret;
    }
}
