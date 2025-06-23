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
use Psr\Log\LoggerInterface;
use Github\Exception\RuntimeException;

class GithubService
{
    private string $organization = 'JJA-DEV-FR';
    private Client $client;
    private LoggerInterface $logger;

    public function __construct(Client $client, LoggerInterface $logger)
    {
        $this->client = $client;
        $this->logger = $logger;
    }

    /**
     * Liste les repositories de l'organisation filtrés par "Bundle"
     * @param int $page
     * @return array<mixed>
     */
    public function getRepositoriesOrg(int $page = 1): array
    {
        try {
            $repos = $this->client->organization()->repositories($this->organization, 'all', $page);
            $filtered = array_filter($repos, fn($repo) => str_contains($repo['name'], 'Bundle'));
            return array_values($filtered);
        } catch (RuntimeException $e) {
            $this->logger->error('Erreur récupération repositories GitHub', ['exception' => $e]);
            return [];
        }
    }

    /**
     * Détail d'un repository par nom
     * @param string $repo
     * @return array<mixed>|null
     */
    public function getRepositoryByName(string $repo): ?array
    {
        try {
            return $this->client->repo()->show($this->organization, $repo);
        } catch (RuntimeException $e) {
            $this->logger->error('Erreur récupération repository GitHub', ['repo' => $repo, 'exception' => $e]);
            return null;
        }
    }

    /**
     * Récupère les derniers commits d'un repo GitHub
     * @param string $repo
     * @param int $limit
     * @return array<mixed>
     */
    public function getLastCommits(string $repo, int $limit = 10): array
    {
        try {
            $commits = $this->client->repo()->commits($this->organization, $repo, ['per_page' => $limit]);
            $result = [];
            foreach ($commits as $commit) {
                $result[] = [
                    'message' => $commit['commit']['message'] ?? '',
                    'author' => $commit['commit']['author']['name'] ?? '',
                    'date' => $commit['commit']['author']['date'] ?? '',
                    'hash' => substr($commit['sha'], 0, 7),
                    'description' => $commit['commit']['message'] ?? '',
                    'url' => $commit['html_url'] ?? null,
                ];
            }
            return $result;
        } catch (RuntimeException $e) {
            $this->logger->error('Erreur récupération commits GitHub', ['repo' => $repo, 'exception' => $e]);
            return [];
        }
    }
}
