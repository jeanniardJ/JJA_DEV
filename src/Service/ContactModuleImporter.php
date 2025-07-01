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

use App\Entity\Prospect;
use App\Entity\Status;
use App\Import\ImporterInterface;
use Doctrine\ORM\EntityManagerInterface;

/**
 * Classe ContactModuleImporter
 *
 * @catégorie Service
 * @paquet  App\Service
 * @auteur   JJA-DEV
 * @licence  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour consulter une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @lien     https://jja-dev.fr
 */
class ContactModuleImporter implements ImporterInterface
{
    private EntityManagerInterface $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function import(mixed $contact): Prospect
    {

        $prospect = new Prospect();
        $prospect->setFirstname($contact->getName());
        $prospect->setEmail($contact->getEmail());
        $prospect->setPhone($contact->get);
        $prospect->setStatus($this->entityManager->getRepository(Status::class)->find(1));
        $this->entityManager->persist($prospect);
        $this->entityManager->flush();

        return $prospect;
    }
}
