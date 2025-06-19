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
 * @category Controller
 * @package  App\Controller
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\Service;

use App\Repository\ConfigTemplateRepository;

/**
 * Class ConfigTemplateService
 * @category Service
 * @package  App\Service
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 * This class is a service that retrieves the template configuration.
 */
class ConfigTemplateService
{
    private ConfigTemplateRepository $configTemplateRepository;

    public function __construct(ConfigTemplateRepository $configTemplateRepository)
    {
        $this->configTemplateRepository = $configTemplateRepository;
    }

    public function getConfigTemplate(): array
    {
        return $this->configTemplateRepository->findTemplateConfig();
    }
}
