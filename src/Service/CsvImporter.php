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
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @see     https://jja-dev.fr
 */

namespace App\Service;

use App\Entity\Prospect;
use App\Entity\Status;
use App\Import\ImporterInterface;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Classe CsvImporter.
 *
 * @catégorie Service
 *
 * @paquet  App\Service
 *
 * @auteur   JJA-DEV
 *
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @lien     https://jja-dev.fr
 */
class CsvImporter implements ImporterInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function import(mixed $file): array
    {
        $handle = fopen($file, 'r');

        if (!$handle) {
            throw new \RuntimeException('Cannot open file for reading');
        }

        $prospects = [];
        $header = fgetcsv($handle);  // Assuming first row contains column headers

        while (($data = fgetcsv($handle)) !== false) {
            $prospectData = array_combine($header, $data);

            $prospect = $this->createProspectFromData($prospectData);

            $this->entityManager->persist($prospect);

            $prospects[] = $prospect;
        }

        fclose($handle);
        $this->entityManager->flush();

        return $prospects;
    }

    private function createProspectFromData(array $data): Prospect
    {
        $prospect = new Prospect();
        $prospect->setFirstname($data['firstName']);
        $prospect->setLastname($data['lastName']);
        $prospect->setEmail($data['linkedinEmail']);
        $prospect->setPhone($data['phoneNumbers']);
        $prospect->setPosition($data['occupation']);
        $prospect->setLocation($data['location']);
        $prospect->setWebsite($data['linkedinUrl']);
        $prospect->setStatus($this->entityManager->getRepository(Status::class)->find(1));

        return $prospect;
    }
}
