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
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @see     https://jja-dev.fr
 */

namespace App\Model;

use Symfony\Component\Validator\Constraints as Assert;

/**
 * Classe ConfigAnalyse.
 *
 * @catégorie Model
 *
 * @paquet  App\Model
 *
 * @auteur   JJA-DEV
 *
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @lien     https://jja-dev.fr
 */
class ConfigAnalyse
{
    #[Assert\Length(max: 20, maxMessage: 'Le code Google Analytics ne doit pas dépasser {{ limit }} caractères.')]
    #[Assert\Regex(
        pattern: '/^(UA-\d{6,})$/', // exemple: UA-123456789
        message: 'Le code Google Analytics doit être au format UA-123456789.'
    )]
    private ?string $analyseGoogle = null;

    #[Assert\Length(max: 20, maxMessage: 'Le code Facebook Pixel ne doit pas dépasser {{ limit }} caractères.')]
    private ?string $analyseFacebook = null;

    private ?string $analyseInstagram = null;

    private ?string $analyseLinkedin = null;

    private ?string $analyseYoutube = null;

    private ?string $analyseWhatsapp = null;

    public function getAnalyseGoogle(): ?string
    {
        return $this->analyseGoogle;
    }

    public function setAnalyseGoogle(?string $analyseGoogle): void
    {
        $this->analyseGoogle = $analyseGoogle;
    }

    public function getAnalyseFacebook(): ?string
    {
        return $this->analyseFacebook;
    }

    public function setAnalyseFacebook(?string $analyseFacebook): void
    {
        $this->analyseFacebook = $analyseFacebook;
    }

    public function getAnalyseInstagram(): ?string
    {
        return $this->analyseInstagram;
    }

    public function setAnalyseInstagram(?string $analyseInstagram): void
    {
        $this->analyseInstagram = $analyseInstagram;
    }

    public function getAnalyseLinkedin(): ?string
    {
        return $this->analyseLinkedin;
    }

    public function setAnalyseLinkedin(?string $analyseLinkedin): void
    {
        $this->analyseLinkedin = $analyseLinkedin;
    }

    public function getAnalyseYoutube(): ?string
    {
        return $this->analyseYoutube;
    }

    public function setAnalyseYoutube(?string $analyseYoutube): void
    {
        $this->analyseYoutube = $analyseYoutube;
    }

    public function getAnalyseWhatsapp(): ?string
    {
        return $this->analyseWhatsapp;
    }

    public function setAnalyseWhatsapp(?string $analyseWhatsapp): void
    {
        $this->analyseWhatsapp = $analyseWhatsapp;
    }
}
