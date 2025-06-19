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
 * @category Service
 * @package  App\Service
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\Service;

use Github\Client;
use Github\Api\Repo;
use Github\AuthMethod;

/**
 * Classe GithubService
 *
 * @catégorie Service
 * @paquet  App\Service
 * @auteur   JJA-DEV
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @lien     https://jja-dev.fr
 */
class GithubService
{
    private Client $client;

    public function __construct()
    {
        $this->client = new Client();
        $this->client->authenticate($_ENV['GITHUB_SECRET'], null, AuthMethod::ACCESS_TOKEN);
    }

    /**
     * Get repositories from the JJA-DEV-FR organization
     *
     * @return array<mixed>
     * @param int $page
     */
    public function getRepositoriesOrg($page = 0): array
    {
        $repos = [];
        $repos = $this->client->api('repos')->org('JJA-DEV-FR', ['page' => $page, 'per_page' => '10']);
        $filteredRepos = [];

        foreach ($repos as $repo) {
            if (strpos($repo['name'], 'Bundle') !== false) {
                $filteredRepos[] = $repo;
            }
        }

        return $filteredRepos;
    }

    /**
     * Get the repository by its id
     *
     * @param int $id
     *
     * @return array<mixed>
     */
    public function getRepositoryById($id): array
    {
        return $this->client->api('repos')->showById($id);
    }
}
