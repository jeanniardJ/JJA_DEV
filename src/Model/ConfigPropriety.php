<?php

/**
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site ne peut être reproduit sans permission écrite préalable.
 * Ce site, son contenu et tous les produits créés par JJA DEV sont protégés par les droits d'auteur.
 * Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site peut constituer une violation des lois applicables.
 * Cela peut entraîner des poursuites judiciaires.
 *
 * Pour utiliser du contenu de ce site, contactez JJA DEV.
 *
 * Merci de respecter notre travail créatif et nos droits de propriété intellectuelle.
 *
 * @category Model
 * @package  App\Model
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * Classe ConfigPropriety
 *
 * @catégorie Model
 * @paquet  App\Model
 * @auteur   JJA-DEV
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
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

    #[Assert\NotBlank]
    #[Assert\Length(max: 14)]
    #[Assert\Type('integer')]
    private int $siret;

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
    public function getAddress(): string
    {
        return $this->address;
    }

    /**
     * @param string $address
     */
    public function setAddress(string $address): void
    {
        $this->address = $address;
    }

    /**
     * @return string
     */
    public function getCity(): string
    {
        return $this->city;
    }

    /**
     * @param string $city
     */
    public function setCity(string $city): void
    {
        $this->city = $city;
    }

    /**
     * @return string
     */
    public function getZipCode(): string
    {
        return $this->zipCode;
    }

    /**
     * @param string $zipCode
     */
    public function setZipCode(string $zipCode): void
    {
        $this->zipCode = $zipCode;
    }

    /**
     * @return string
     */
    public function getCountry(): string
    {
        return $this->country;
    }

    /**
     * @param string $country
     */
    public function setCountry(string $country): void
    {
        $this->country = $country;
    }

    /**
     * @return string
     */
    public function getPhone(): string
    {
        return $this->phone;
    }

    /**
     * @param string $phone
     */
    public function setPhone(string $phone): void
    {
        $this->phone = $phone;
    }

    /**
     * @return string
     */
    public function getEmail(): string
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail(string $email): void
    {
        $this->email = $email;
    }

    /**
     * @return int
     */
    public function getSiret(): int
    {
        return $this->siret;
    }

    /**
     * @param int $siret
     */
    public function setSiret(int $siret): void
    {
        $this->siret = $siret;
    }
}
