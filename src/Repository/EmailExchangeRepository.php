<?php

namespace App\Repository;

use App\Entity\EmailExchange;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EmailExchange>
 *
 * @method EmailExchange|null find($id, $lockMode = null, $lockVersion = null)
 * @method EmailExchange|null findOneBy(array $criteria, array $orderBy = null)
 * @method EmailExchange[]    findAll()
 * @method EmailExchange[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EmailExchangeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EmailExchange::class);
    }

    //    /**
    //     * @return EmailExchange[] Returns an array of EmailExchange objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('e.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?EmailExchange
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
