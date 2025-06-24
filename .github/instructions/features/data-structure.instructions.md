---
applyTo: 'JJA_DEV/**'
---
# Instructions - Structure des Données CRM

## Architecture des Entités

### Hiérarchie des Entités CRM

```
App\Entity\Crm\
├── Contact.php           # Contact principal
├── Prospect.php          # Prospect héritant de Contact
├── Customer.php          # Client héritant de Contact
├── Deal.php             # Opportunité commerciale
├── Activity.php         # Activités/Tâches
├── Note.php            # Notes attachées
├── Document.php        # Documents/Fichiers
├── Pipeline.php        # Pipelines de vente
├── Stage.php          # Étapes de pipeline
├── Source.php         # Sources de prospects
├── Category.php       # Catégories/Tags
└── CustomField.php    # Champs personnalisés
```

### Entité Contact (Base)

```php
<?php
// src/Entity/Crm/Contact.php

namespace App\Entity\Crm;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactRepository::class)]
#[ORM\Table(name: 'crm_contacts')]
#[ORM\Index(name: 'idx_contact_search', columns: ['last_name', 'first_name', 'company'])]
#[ORM\Index(name: 'idx_contact_status', columns: ['status', 'created_at'])]
#[ORM\InheritanceType('SINGLE_TABLE')]
#[ORM\DiscriminatorColumn(name: 'contact_type', type: 'string')]
#[ORM\DiscriminatorMap(['contact' => Contact::class, 'prospect' => Prospect::class, 'customer' => Customer::class])]
class Contact
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api:list', 'api:detail'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: 'Le prénom est obligatoire')]
    #[Assert\Length(max: 100)]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $firstName = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: 'Le nom est obligatoire')]
    #[Assert\Length(max: 100)]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $lastName = null;

    #[ORM\Column(length: 255, unique: true)]
    #[Assert\NotBlank(message: 'L\'email est obligatoire')]
    #[Assert\Email(message: 'Format d\'email invalide')]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $email = null;

    #[ORM\Column(length: 20, nullable: true)]
    #[Assert\Regex(pattern: '/^[\+]?[0-9\s\-\(\)]{0,20}$/', message: 'Format de téléphone invalide')]
    #[Groups(['api:detail', 'api:write'])]
    private ?string $phone = null;

    #[ORM\Column(length: 200, nullable: true)]
    #[Assert\Length(max: 200)]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $company = null;

    #[ORM\Column(length: 100, nullable: true)]
    #[Groups(['api:detail', 'api:write'])]
    private ?string $jobTitle = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['api:detail', 'api:write'])]
    private ?string $address = null;

    #[ORM\Column(length: 50)]
    #[Assert\Choice(choices: ['active', 'inactive', 'blacklisted'], message: 'Statut invalide')]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private string $status = 'active';

    #[ORM\Column]
    #[Groups(['api:list', 'api:detail'])]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column]
    #[Groups(['api:detail'])]
    private \DateTime $updatedAt;

    #[ORM\Column(nullable: true)]
    #[Groups(['api:detail'])]
    private ?\DateTime $lastContactDate = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'assigned_user_id', referencedColumnName: 'id')]
    #[Groups(['api:detail'])]
    private ?User $assignedUser = null;

    #[ORM\ManyToOne(targetEntity: Source::class)]
    #[ORM\JoinColumn(name: 'source_id', referencedColumnName: 'id')]
    #[Groups(['api:detail', 'api:write'])]
    private ?Source $source = null;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: Deal::class, cascade: ['persist'])]
    #[Groups(['api:detail'])]
    private Collection $deals;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: Activity::class, cascade: ['persist'])]
    private Collection $activities;

    #[ORM\OneToMany(mappedBy: 'contact', targetEntity: Note::class, cascade: ['persist', 'remove'])]
    private Collection $notes;

    #[ORM\ManyToMany(targetEntity: Category::class)]
    #[ORM\JoinTable(name: 'crm_contact_categories')]
    #[Groups(['api:detail', 'api:write'])]
    private Collection $categories;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups(['api:detail', 'api:write'])]
    private ?array $customFields = [];

    #[ORM\Column(type: 'boolean', options: ['default' => false])]
    #[Groups(['api:detail', 'api:write'])]
    private bool $marketingOptIn = false;

    public function __construct()
    {
        $this->deals = new ArrayCollection();
        $this->activities = new ArrayCollection();
        $this->notes = new ArrayCollection();
        $this->categories = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTime();
    }

    #[ORM\PreUpdate]
    public function preUpdate(): void
    {
        $this->updatedAt = new \DateTime();
    }

    // Getters et Setters...

    public function getFullName(): string
    {
        return trim($this->firstName . ' ' . $this->lastName);
    }

    public function getDisplayName(): string
    {
        $name = $this->getFullName();
        return $this->company ? "{$name} ({$this->company})" : $name;
    }

    public function addCustomField(string $key, mixed $value): self
    {
        if ($this->customFields === null) {
            $this->customFields = [];
        }
        $this->customFields[$key] = $value;
        return $this;
    }

    public function getCustomField(string $key): mixed
    {
        return $this->customFields[$key] ?? null;
    }
}
```

### Entité Deal (Opportunité)

```php
<?php
// src/Entity/Crm/Deal.php

namespace App\Entity\Crm;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: DealRepository::class)]
#[ORM\Table(name: 'crm_deals')]
#[ORM\Index(name: 'idx_deal_pipeline', columns: ['stage', 'value', 'created_at'])]
class Deal
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api:list', 'api:detail'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Le titre est obligatoire')]
    #[Assert\Length(max: 255)]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['api:detail', 'api:write'])]
    private ?string $description = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    #[Assert\NotBlank(message: 'La valeur est obligatoire')]
    #[Assert\PositiveOrZero(message: 'La valeur doit être positive')]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $value = null;

    #[ORM\Column(length: 3)]
    #[Assert\Currency]
    #[Groups(['api:detail', 'api:write'])]
    private string $currency = 'EUR';

    #[ORM\Column(length: 50)]
    #[Assert\Choice(choices: ['prospect', 'qualification', 'proposition', 'negociation', 'closed_won', 'closed_lost'], message: 'Étape invalide')]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private string $stage = 'prospect';

    #[ORM\Column(type: 'integer', options: ['default' => 0])]
    #[Assert\Range(min: 0, max: 100)]
    #[Groups(['api:detail', 'api:write'])]
    private int $probability = 0;

    #[ORM\Column(type: 'date', nullable: true)]
    #[Groups(['api:detail', 'api:write'])]
    private ?\DateTimeInterface $expectedCloseDate = null;

    #[ORM\Column(type: 'date', nullable: true)]
    #[Groups(['api:detail'])]
    private ?\DateTimeInterface $actualCloseDate = null;

    #[ORM\ManyToOne(targetEntity: Contact::class, inversedBy: 'deals')]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull(message: 'Le contact est obligatoire')]
    #[Groups(['api:detail', 'api:write'])]
    private ?Contact $contact = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(name: 'assigned_user_id', referencedColumnName: 'id')]
    #[Groups(['api:detail', 'api:write'])]
    private ?User $assignedUser = null;

    #[ORM\ManyToOne(targetEntity: Pipeline::class)]
    #[ORM\JoinColumn(name: 'pipeline_id', referencedColumnName: 'id')]
    #[Groups(['api:detail', 'api:write'])]
    private ?Pipeline $pipeline = null;

    #[ORM\Column]
    #[Groups(['api:list', 'api:detail'])]
    private \DateTimeImmutable $createdAt;

    #[ORM\Column]
    #[Groups(['api:detail'])]
    private \DateTime $updatedAt;

    #[ORM\OneToMany(mappedBy: 'deal', targetEntity: Activity::class)]
    private Collection $activities;

    #[ORM\Column(type: 'json', nullable: true)]
    #[Groups(['api:detail', 'api:write'])]
    private ?array $customFields = [];

    public function __construct()
    {
        $this->activities = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTime();
    }

    // Méthodes utilitaires
    public function isWon(): bool
    {
        return $this->stage === 'closed_won';
    }

    public function isLost(): bool
    {
        return $this->stage === 'closed_lost';
    }

    public function isClosed(): bool
    {
        return $this->isWon() || $this->isLost();
    }

    public function getFormattedValue(): string
    {
        return number_format((float)$this->value, 2) . ' ' . $this->currency;
    }

    public function getDaysInStage(): int
    {
        return $this->updatedAt->diff(new \DateTime())->days;
    }
}
```

## Repositories CRM

### ContactRepository avec Requêtes Optimisées

```php
<?php
// src/Repository/Crm/ContactRepository.php

namespace App\Repository\Crm;

use App\Entity\Crm\Contact;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;

class ContactRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Contact::class);
    }

    public function findByFilters(array $filters = []): array
    {
        $qb = $this->createQueryBuilder('c')
            ->select('c', 'u', 's')
            ->leftJoin('c.assignedUser', 'u')
            ->leftJoin('c.source', 's');

        $this->applyFilters($qb, $filters);

        return $qb->getQuery()
            ->useQueryCache(true)
            ->setLifetime(1800) // 30 minutes
            ->getResult();
    }

    public function findActiveContactsWithRecentActivity(int $days = 30): array
    {
        return $this->createQueryBuilder('c')
            ->select('c', 'a')
            ->innerJoin('c.activities', 'a')
            ->where('c.status = :active')
            ->andWhere('a.createdAt >= :since')
            ->setParameter('active', 'active')
            ->setParameter('since', new \DateTime("-{$days} days"))
            ->orderBy('a.createdAt', 'DESC')
            ->getQuery()
            ->getResult();
    }

    public function getContactsStatistics(): array
    {
        $result = $this->createQueryBuilder('c')
            ->select('
                c.status,
                COUNT(c.id) as count,
                AVG(CASE WHEN c.lastContactDate IS NOT NULL
                    THEN DATEDIFF(NOW(), c.lastContactDate)
                    ELSE NULL END) as avg_days_since_contact
            ')
            ->groupBy('c.status')
            ->getQuery()
            ->getArrayResult();

        $statistics = [];
        foreach ($result as $row) {
            $statistics[$row['status']] = [
                'count' => (int)$row['count'],
                'avg_days_since_contact' => $row['avg_days_since_contact'] ? round($row['avg_days_since_contact']) : null
            ];
        }

        return $statistics;
    }

    public function findDuplicates(): array
    {
        return $this->createQueryBuilder('c')
            ->select('c.email, COUNT(c.id) as duplicate_count')
            ->groupBy('c.email')
            ->having('COUNT(c.id) > 1')
            ->getQuery()
            ->getArrayResult();
    }

    public function findContactsToReactivate(int $daysSinceContact = 90): array
    {
        return $this->createQueryBuilder('c')
            ->where('c.status = :active')
            ->andWhere('c.lastContactDate < :threshold OR c.lastContactDate IS NULL')
            ->andWhere('c.createdAt < :threshold')
            ->setParameter('active', 'active')
            ->setParameter('threshold', new \DateTime("-{$daysSinceContact} days"))
            ->orderBy('c.lastContactDate', 'ASC')
            ->getQuery()
            ->getResult();
    }

    private function applyFilters(QueryBuilder $qb, array $filters): void
    {
        if (!empty($filters['search'])) {
            $qb->andWhere($qb->expr()->orX(
                $qb->expr()->like('c.firstName', ':search'),
                $qb->expr()->like('c.lastName', ':search'),
                $qb->expr()->like('c.email', ':search'),
                $qb->expr()->like('c.company', ':search')
            ))->setParameter('search', '%' . $filters['search'] . '%');
        }

        if (!empty($filters['status'])) {
            $qb->andWhere('c.status = :status')
               ->setParameter('status', $filters['status']);
        }

        if (!empty($filters['assignedUser'])) {
            $qb->andWhere('c.assignedUser = :assignedUser')
               ->setParameter('assignedUser', $filters['assignedUser']);
        }

        if (!empty($filters['source'])) {
            $qb->andWhere('c.source = :source')
               ->setParameter('source', $filters['source']);
        }

        if (!empty($filters['dateFrom'])) {
            $qb->andWhere('c.createdAt >= :dateFrom')
               ->setParameter('dateFrom', $filters['dateFrom']);
        }

        if (!empty($filters['dateTo'])) {
            $qb->andWhere('c.createdAt <= :dateTo')
               ->setParameter('dateTo', $filters['dateTo']);
        }
    }
}
```

### DealRepository avec Analytics

```php
<?php
// src/Repository/Crm/DealRepository.php

namespace App\Repository\Crm;

use App\Entity\Crm\Deal;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class DealRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Deal::class);
    }

    public function getPipelineStatistics(): array
    {
        $stageStats = $this->createQueryBuilder('d')
            ->select('
                d.stage,
                COUNT(d.id) as deal_count,
                SUM(d.value) as total_value,
                AVG(d.value) as average_value,
                AVG(d.probability) as average_probability
            ')
            ->where('d.stage NOT IN (:closedStages)')
            ->setParameter('closedStages', ['closed_won', 'closed_lost'])
            ->groupBy('d.stage')
            ->orderBy('FIELD(d.stage, \'prospect\', \'qualification\', \'proposition\', \'negociation\')')
            ->getQuery()
            ->getArrayResult();

        $totalValue = array_sum(array_column($stageStats, 'total_value'));
        $totalDeals = array_sum(array_column($stageStats, 'deal_count'));

        return [
            'stages' => $stageStats,
            'total_value' => $totalValue,
            'total_deals' => $totalDeals,
            'average_deal_size' => $totalDeals > 0 ? $totalValue / $totalDeals : 0,
            'conversion_rates' => $this->getConversionRates()
        ];
    }

    public function getConversionRates(): array
    {
        $stages = ['prospect', 'qualification', 'proposition', 'negociation', 'closed_won'];
        $conversions = [];

        for ($i = 0; $i < count($stages) - 1; $i++) {
            $fromStage = $stages[$i];
            $toStage = $stages[$i + 1];

            $fromCount = $this->createQueryBuilder('d')
                ->select('COUNT(d.id)')
                ->where('d.stage = :stage OR (d.stage IN (:nextStages) AND d.createdAt >= :since)')
                ->setParameter('stage', $fromStage)
                ->setParameter('nextStages', array_slice($stages, $i + 1))
                ->setParameter('since', new \DateTime('-6 months'))
                ->getQuery()
                ->getSingleScalarResult();

            $toCount = $this->createQueryBuilder('d')
                ->select('COUNT(d.id)')
                ->where('d.stage IN (:stages)')
                ->setParameter('stages', array_slice($stages, $i + 1))
                ->getQuery()
                ->getSingleScalarResult();

            $conversions["{$fromStage}_to_{$toStage}"] = $fromCount > 0 ? ($toCount / $fromCount) * 100 : 0;
        }

        return $conversions;
    }

    public function findDealsAtRisk(): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.stage NOT IN (:closedStages)')
            ->andWhere('d.expectedCloseDate < :now')
            ->andWhere('d.updatedAt < :staleThreshold')
            ->setParameter('closedStages', ['closed_won', 'closed_lost'])
            ->setParameter('now', new \DateTime())
            ->setParameter('staleThreshold', new \DateTime('-7 days'))
            ->orderBy('d.expectedCloseDate', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function getMonthlyRevenue(\DateTime $from, \DateTime $to): array
    {
        return $this->createQueryBuilder('d')
            ->select('
                YEAR(d.actualCloseDate) as year,
                MONTH(d.actualCloseDate) as month,
                SUM(d.value) as revenue,
                COUNT(d.id) as deals_count
            ')
            ->where('d.stage = :won')
            ->andWhere('d.actualCloseDate BETWEEN :from AND :to')
            ->setParameter('won', 'closed_won')
            ->setParameter('from', $from)
            ->setParameter('to', $to)
            ->groupBy('year', 'month')
            ->orderBy('year', 'ASC')
            ->addOrderBy('month', 'ASC')
            ->getQuery()
            ->getArrayResult();
    }
}
```

## Validations et Contraintes

### Validateurs Personnalisés

```php
<?php
// src/Validator/UniqueContactEmail.php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

#[\Attribute(\Attribute::TARGET_CLASS)]
class UniqueContactEmail extends Constraint
{
    public string $message = 'Un contact avec cet email existe déjà.';

    public function getTargets(): string
    {
        return self::CLASS_CONSTRAINT;
    }
}
```

```php
<?php
// src/Validator/UniqueContactEmailValidator.php

namespace App\Validator;

use App\Entity\Crm\Contact;
use App\Repository\Crm\ContactRepository;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;

class UniqueContactEmailValidator extends ConstraintValidator
{
    public function __construct(private ContactRepository $contactRepository)
    {
    }

    public function validate(mixed $value, Constraint $constraint): void
    {
        if (!$constraint instanceof UniqueContactEmail) {
            throw new UnexpectedTypeException($constraint, UniqueContactEmail::class);
        }

        if (!$value instanceof Contact) {
            return;
        }

        if (empty($value->getEmail())) {
            return;
        }

        $existingContact = $this->contactRepository->findOneBy(['email' => $value->getEmail()]);

        if ($existingContact && $existingContact->getId() !== $value->getId()) {
            $this->context->buildViolation($constraint->message)
                ->atPath('email')
                ->addViolation();
        }
    }
}
```

## Events et Listeners

### Events CRM

```php
<?php
// src/Event/Crm/ContactCreatedEvent.php

namespace App\Event\Crm;

use App\Entity\Crm\Contact;
use Symfony\Contracts\EventDispatcher\Event;

class ContactCreatedEvent extends Event
{
    public const NAME = 'crm.contact.created';

    public function __construct(private Contact $contact)
    {
    }

    public function getContact(): Contact
    {
        return $this->contact;
    }
}
```

### Listeners pour l'Automatisation

```php
<?php
// src/EventListener/Crm/ContactListener.php

namespace App\EventListener\Crm;

use App\Event\Crm\ContactCreatedEvent;
use App\Service\Crm\AutoAssignmentService;
use App\Service\Integration\EmailMarketingService;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

class ContactListener
{
    public function __construct(
        private AutoAssignmentService $autoAssignment,
        private EmailMarketingService $emailMarketing
    ) {
    }

    #[AsEventListener(event: ContactCreatedEvent::NAME)]
    public function onContactCreated(ContactCreatedEvent $event): void
    {
        $contact = $event->getContact();

        // Attribution automatique
        if (!$contact->getAssignedUser()) {
            $this->autoAssignment->assignContact($contact);
        }

        // Synchronisation avec l'outil de marketing
        if ($contact->isMarketingOptIn()) {
            $this->emailMarketing->syncContact($contact);
        }
    }

    #[AsEntityListener(event: Events::preUpdate, method: 'preUpdate', entity: Contact::class)]
    public function preUpdate(Contact $contact): void
    {
        // Mise à jour automatique de lastContactDate lors de certaines modifications
        if ($this->hasRelevantChanges($contact)) {
            $contact->setLastContactDate(new \DateTime());
        }
    }

    private function hasRelevantChanges(Contact $contact): bool
    {
        // Logique pour déterminer si les changements sont significatifs
        return true; // Simplified for example
    }
}
```
