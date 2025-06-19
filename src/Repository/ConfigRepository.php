<?php

namespace App\Repository;

use App\Entity\Config;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Config>
 *
 * @method Config|null find($id, $lockMode = null, $lockVersion = null)
 * @method Config|null findOneBy(array $criteria, array $orderBy = null)
 * @method Config[]    findAll()
 * @method Config[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConfigRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Config::class);
    }

    //    /**
    //     * @return Config[] Returns an array of Config objects
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

    //    public function findOneBySomeField($value): ?Config
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findGlobalConfig(): array
    {
        $configGeneral = $this->createQueryBuilder('c')
            ->select('c.name, c.value')
            ->where('c.name = :name')
            ->setParameter('name', 'site')
            ->getQuery()
            ->getArrayResult();

        $configProperties = $this->createQueryBuilder('c')
            ->select('c.name, c.value')
            ->where('c.name = :name')
            ->setParameter('name', 'propriety')
            ->getQuery()
            ->getArrayResult();

        $configSocial = $this->createQueryBuilder('c')
            ->select('c.name, c.value')
            ->where('c.name = :name')
            ->setParameter('name', 'social')
            ->getQuery()
            ->getArrayResult();

        $config = [];

        foreach ($configGeneral as $item) {
            $config[$item['name']] = $item['value'];
        }

        foreach ($configProperties as $item) {
            $config[$item['name']] = $item['value'];
        }

        foreach ($configSocial as $item) {
            $config[$item['name']] = $item['value'];
        }

        return $config;
    }
}
