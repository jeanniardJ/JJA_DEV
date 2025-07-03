<?php

/**
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  MIT
 *
 * @see     https://jja-dev.fr
 */

namespace App\Repository;

use App\Entity\ConfigTemplate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * class ConfigTemplateRepository.
 *
 * @extends ServiceEntityRepository<ConfigTemplate>
 *
 * @method ConfigTemplate|null find($id, $lockMode = null, $lockVersion = null)
 * @method ConfigTemplate|null findOneBy(array $criteria, array $orderBy = null)
 * @method ConfigTemplate[]    findAll()
 * @method ConfigTemplate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 * @method ConfigTemplate[]    findByName(string $name)
 * @method ConfigTemplate[]    findOneByName(string $name)
 *
 * @category Repository
 */
class ConfigTemplateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ConfigTemplate::class);
    }

    /**
     * @return array<string, string>
     */
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
            if (is_array($item) && isset($item['name'], $item['value'])) {
                $configTemplate[$item['name']] = $item['value'];
            }
        }

        foreach ($description as $item) {
            if (is_array($item) && isset($item['name'], $item['value'])) {
                $configTemplate[$item['name']] = $item['value'];
            }
        }

        foreach ($services as $item) {
            if (is_array($item) && isset($item['name'], $item['value'])) {
                $configTemplate[$item['name']] = $item['value'];
            }
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
