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

use Symfony\Contracts\HttpClient\HttpClientInterface;

/**
 * Class LinkedInContactImporter
 *
 * @package App\Service
 */
class LinkedInContactImporter
{
    private HttpClientInterface $client;
    private string $apiEndpoint = 'https://api.linkedin.com/v2/';
    private string $accessToken = "78drnq4bzl4mf3";  // Assurez-vous d'obtenir un jeton d'accès valide

    public function __construct(HttpClientInterface $client, string $accessToken)
    {
        $this->client = $client;
        $this->accessToken = $accessToken;
    }

    public function importContacts(): array
    {
        $response = $this->client->request('GET', $this->apiEndpoint . 'connections?q=myConnections', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->accessToken,
            ],
        ]);

        $data = $response->toArray();
        $contacts = [];

        foreach ($data['elements'] as $contactData) {
            // Transformez les données de contact de LinkedIn en votre format de contact local
            $contacts[] = $this->transformContactData($contactData);
        }

        return $contacts;
    }

    private function transformContactData(array $contactData): array
    {
        // Transformez les données de contact de LinkedIn en votre format de contact local
        return [
            'firstName' => $contactData['localizedFirstName'] ?? '',
            'lastName' => $contactData['localizedLastName'] ?? '',
            'email' => $contactData['emailAddress'] ?? '',
            // ... autres transformations de données
        ];
    }
}
