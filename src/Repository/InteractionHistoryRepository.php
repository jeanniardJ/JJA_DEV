<?php

namespace App\Repository;

use App\Entity\InteractionHistory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<InteractionHistory>
 *
 * @method InteractionHistory|null find($id, $lockMode = null, $lockVersion = null)
 * @method InteractionHistory|null findOneBy(array $criteria, array $orderBy = null)
 * @method InteractionHistory[]    findAll()
 * @method InteractionHistory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InteractionHistoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InteractionHistory::class);
    }

    //    /**
    //     * @return InteractionHistory[] Returns an array of InteractionHistory objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('i.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?InteractionHistory
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
