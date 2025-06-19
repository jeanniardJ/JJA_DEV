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

namespace App\Repository;

use App\Entity\ConfigTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * class ConfigTemplateRepository
 * @extends ServiceEntityRepository<ConfigTemplate>
 */
class ConfigTemplateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfigTemplate::class);
    }

    public function findTemplateConfig(): array
    {
        $presentation = $this->createQueryBuilder('c')
            ->select('c.name, c.value')
            ->where('c.name = :name')
            ->setParameter('name', 'presentation')
            ->getQuery()
            ->getArrayResult();

        $description = $this->createQueryBuilder('c')
            ->select('c.name, c.value')
            ->where('c.name = :name')
            ->setParameter('name', 'description')
            ->getQuery()
            ->getArrayResult();

        $services = $this->createQueryBuilder('c')
            ->select('c.name, c.value')
            ->where('c.name = :name')
            ->setParameter('name', 'services')
            ->getQuery()
            ->getArrayResult();

        $configTemplate = [];

        foreach ($presentation as $item) {
            $configTemplate[$item['name']] = $item['value'];
        }

        foreach ($description as $item) {
            $configTemplate[$item['name']] = $item['value'];
        }

        foreach ($services as $item) {
            $configTemplate[$item['name']] = $item['value'];
        }

        return $configTemplate;
    }

    //    /**
    //     * @return ConfigTemplate[] Returns an array of ConfigTemplate objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ConfigTemplate
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
