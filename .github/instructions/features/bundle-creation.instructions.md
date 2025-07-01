---
applyTo: 'JJA_DEV/**'
---

# Création de Bundles JJA_DEV

## Bundle Devis & Factures

### Structure Bundle

```
src/Bundle/QuoteInvoiceBundle/
├── QuoteInvoiceBundle.php           # Classe principale bundle
├── DependencyInjection/             # Configuration DI
│   ├── Configuration.php            # Configuration bundle
│   └── QuoteInvoiceBundleExtension.php
├── Controller/                      # Controllers bundle
│   ├── QuoteController.php
│   └── InvoiceController.php
├── Entity/                          # Entités bundle
│   ├── Quote.php
│   ├── QuoteItem.php
│   ├── Invoice.php
│   └── InvoiceItem.php
├── Service/                         # Services bundle
│   ├── QuoteService.php
│   ├── InvoiceService.php
│   ├── PdfGeneratorService.php
│   └── EmailService.php
├── Form/                           # Formulaires
│   ├── QuoteType.php
│   └── InvoiceType.php
├── Repository/                     # Repositories
│   ├── QuoteRepository.php
│   └── InvoiceRepository.php
├── Resources/
│   ├── config/
│   │   ├── services.yaml           # Services bundle
│   │   └── routes.yaml             # Routes bundle
│   └── views/                      # Templates bundle
│       ├── quote/
│       └── invoice/
└── Tests/                          # Tests bundle
    ├── Service/
    └── Controller/
```

### Classe Principale Bundle

```php
<?php
// src/Bundle/QuoteInvoiceBundle/QuoteInvoiceBundle.php

namespace App\Bundle\QuoteInvoiceBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class QuoteInvoiceBundle extends Bundle
{
    public function getPath(): string
    {
        return \dirname(__DIR__);
    }
}
```

### Configuration Bundle

```php
<?php
// src/Bundle/QuoteInvoiceBundle/DependencyInjection/Configuration.php

namespace App\Bundle\QuoteInvoiceBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('quote_invoice');

        $treeBuilder->getRootNode()
            ->children()
                ->arrayNode('pdf')
                    ->children()
                        ->scalarNode('generator')->defaultValue('tcpdf')->end()
                        ->scalarNode('template_path')->defaultValue('templates/pdf/')->end()
                        ->arrayNode('options')
                            ->children()
                                ->scalarNode('format')->defaultValue('A4')->end()
                                ->scalarNode('orientation')->defaultValue('P')->end()
                                ->scalarNode('margin_top')->defaultValue(20)->end()
                                ->scalarNode('margin_bottom')->defaultValue(20)->end()
                                ->scalarNode('margin_left')->defaultValue(15)->end()
                                ->scalarNode('margin_right')->defaultValue(15)->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
                ->arrayNode('email')
                    ->children()
                        ->scalarNode('from_email')->defaultValue('noreply@example.com')->end()
                        ->scalarNode('from_name')->defaultValue('Your Company')->end()
                        ->arrayNode('templates')
                            ->children()
                                ->scalarNode('quote')->defaultValue('emails/quote.html.twig')->end()
                                ->scalarNode('invoice')->defaultValue('emails/invoice.html.twig')->end()
                            ->end()
                        ->end()
                    ->end()
                ->end()
                ->arrayNode('company')
                    ->children()
                        ->scalarNode('name')->defaultValue('Your Company Name')->end()
                        ->scalarNode('address')->defaultValue('')->end()
                        ->scalarNode('phone')->defaultValue('')->end()
                        ->scalarNode('email')->defaultValue('')->end()
                        ->scalarNode('website')->defaultValue('')->end()
                        ->scalarNode('logo_path')->defaultValue('')->end()
                    ->end()
                ->end()
            ->end();

        return $treeBuilder;
    }
}
```

### Extension Bundle

```php
<?php
// src/Bundle/QuoteInvoiceBundle/DependencyInjection/QuoteInvoiceBundleExtension.php

namespace App\Bundle\QuoteInvoiceBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class QuoteInvoiceBundleExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container): void
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        // Charger services
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yaml');

        // Paramètres configuration
        $container->setParameter('quote_invoice.pdf', $config['pdf']);
        $container->setParameter('quote_invoice.email', $config['email']);
        $container->setParameter('quote_invoice.company', $config['company']);
    }
}
```

## Entités Bundle

### Entité Quote

```php
<?php
// src/Bundle/QuoteInvoiceBundle/Entity/Quote.php

namespace App\Bundle\QuoteInvoiceBundle\Entity;

use App\Entity\CRM\Customer;
use App\Bundle\QuoteInvoiceBundle\Repository\QuoteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: QuoteRepository::class)]
#[ORM\Table(name: 'quote_invoices_quotes')]
class Quote
{
    public const STATUS_DRAFT = 'draft';
    public const STATUS_SENT = 'sent';
    public const STATUS_ACCEPTED = 'accepted';
    public const STATUS_REJECTED = 'rejected';
    public const STATUS_EXPIRED = 'expired';

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, unique: true)]
    private ?string $number = null;

    #[ORM\ManyToOne(targetEntity: Customer::class)]
    #[ORM\JoinColumn(nullable: false)]
    #[Assert\NotNull]
    private ?Customer $customer = null;

    #[ORM\Column(length: 20)]
    #[Assert\Choice(choices: [self::STATUS_DRAFT, self::STATUS_SENT, self::STATUS_ACCEPTED, self::STATUS_REJECTED, self::STATUS_EXPIRED])]
    private string $status = self::STATUS_DRAFT;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: 'date')]
    #[Assert\NotNull]
    private ?\DateTimeInterface $validUntil = null;

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    private string $totalHt = '0.00';

    #[ORM\Column(type: 'decimal', precision: 10, scale: 2)]
    private string $totalTtc = '0.00';

    #[ORM\Column(type: 'decimal', precision: 5, scale: 2)]
    private string $vatRate = '20.00';

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $notes = null;

    #[ORM\OneToMany(mappedBy: 'quote', targetEntity: QuoteItem::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Assert\Valid]
    #[Assert\Count(min: 1, minMessage: 'Un devis doit contenir au moins un élément')]
    private Collection $items;

    #[ORM\OneToOne(mappedBy: 'quote', targetEntity: Invoice::class)]
    private ?Invoice $invoice = null;

    public function __construct()
    {
        $this->items = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->validUntil = new \DateTime('+30 days');
    }

    public function calculateTotals(): void
    {
        $totalHt = 0;

        foreach ($this->items as $item) {
            $totalHt += $item->getTotal();
        }

        $this->totalHt = number_format($totalHt, 2, '.', '');
        $vatAmount = $totalHt * ($this->vatRate / 100);
        $this->totalTtc = number_format($totalHt + $vatAmount, 2, '.', '');
    }

    public function isExpired(): bool
    {
        return $this->validUntil < new \DateTime();
    }

    public function canBeConverted(): bool
    {
        return $this->status === self::STATUS_ACCEPTED && !$this->invoice;
    }

    // Getters et setters...
}
```

### Service Quote

```php
<?php
// src/Bundle/QuoteInvoiceBundle/Service/QuoteService.php

namespace App\Bundle\QuoteInvoiceBundle\Service;

use App\Bundle\QuoteInvoiceBundle\Entity\Quote;
use App\Bundle\QuoteInvoiceBundle\Entity\QuoteItem;
use App\Bundle\QuoteInvoiceBundle\Repository\QuoteRepository;
use App\Entity\CRM\Customer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class QuoteService implements QuoteServiceInterface
{
    public function __construct(
        private QuoteRepository $quoteRepository,
        private EntityManagerInterface $entityManager,
        private ValidatorInterface $validator,
        private PdfGeneratorService $pdfGenerator,
        private EmailService $emailService
    ) {}

    public function createQuote(Customer $customer, array $items): Quote
    {
        $quote = new Quote();
        $quote->setCustomer($customer);
        $quote->setNumber($this->generateQuoteNumber());

        foreach ($items as $itemData) {
            $item = new QuoteItem();
            $item->setDescription($itemData['description']);
            $item->setQuantity($itemData['quantity']);
            $item->setUnitPrice($itemData['unitPrice']);
            $item->setQuote($quote);

            $quote->addItem($item);
        }

        $quote->calculateTotals();

        $errors = $this->validator->validate($quote);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException('Données devis invalides');
        }

        $this->entityManager->persist($quote);
        $this->entityManager->flush();

        return $quote;
    }

    public function generatePdf(Quote $quote): string
    {
        return $this->pdfGenerator->generateQuotePdf($quote);
    }

    public function sendByEmail(Quote $quote, string $recipientEmail = null): void
    {
        $email = $recipientEmail ?: $quote->getCustomer()->getEmail();
        $pdfPath = $this->generatePdf($quote);

        $this->emailService->sendQuoteEmail($quote, $email, $pdfPath);

        // Mettre à jour statut
        if ($quote->getStatus() === Quote::STATUS_DRAFT) {
            $quote->setStatus(Quote::STATUS_SENT);
            $this->entityManager->flush();
        }
    }

    public function acceptQuote(Quote $quote): Quote
    {
        $quote->setStatus(Quote::STATUS_ACCEPTED);
        $this->entityManager->flush();

        return $quote;
    }

    public function convertToInvoice(Quote $quote): Invoice
    {
        if (!$quote->canBeConverted()) {
            throw new \RuntimeException('Ce devis ne peut pas être converti en facture');
        }

        $invoice = new Invoice();
        $invoice->setQuote($quote);
        $invoice->setCustomer($quote->getCustomer());
        $invoice->setNumber($this->generateInvoiceNumber());

        // Copier éléments du devis
        foreach ($quote->getItems() as $quoteItem) {
            $invoiceItem = new InvoiceItem();
            $invoiceItem->setDescription($quoteItem->getDescription());
            $invoiceItem->setQuantity($quoteItem->getQuantity());
            $invoiceItem->setUnitPrice($quoteItem->getUnitPrice());
            $invoiceItem->setInvoice($invoice);

            $invoice->addItem($invoiceItem);
        }

        $invoice->calculateTotals();

        $this->entityManager->persist($invoice);
        $this->entityManager->flush();

        return $invoice;
    }

    private function generateQuoteNumber(): string
    {
        $year = date('Y');
        $lastNumber = $this->quoteRepository->getLastNumberForYear($year);

        return sprintf('D%s-%04d', $year, $lastNumber + 1);
    }

    private function generateInvoiceNumber(): string
    {
        $year = date('Y');
        $lastNumber = $this->quoteRepository->getLastInvoiceNumberForYear($year);

        return sprintf('F%s-%04d', $year, $lastNumber + 1);
    }
}
```

## Configuration Bundle

### Services Bundle

```yaml
# src/Bundle/QuoteInvoiceBundle/Resources/config/services.yaml
services:
    _defaults:
        autowire: true
        autoconfigure: true
        public: false

    App\Bundle\QuoteInvoiceBundle\Service\:
        resource: '../../Service/*'

    App\Bundle\QuoteInvoiceBundle\Controller\:
        resource: '../../Controller/*'
        tags: ['controller.service_arguments']

    # Services spécifiques
    App\Bundle\QuoteInvoiceBundle\Service\QuoteService:
        arguments:
            $pdfOptions: '%quote_invoice.pdf%'
            $emailConfig: '%quote_invoice.email%'
            $companyInfo: '%quote_invoice.company%'

    App\Bundle\QuoteInvoiceBundle\Service\PdfGeneratorService:
        arguments:
            $pdfOptions: '%quote_invoice.pdf%'
            $companyInfo: '%quote_invoice.company%'

    App\Bundle\QuoteInvoiceBundle\Service\EmailService:
        arguments:
            $emailConfig: '%quote_invoice.email%'
```

### Routes Bundle

```yaml
# src/Bundle/QuoteInvoiceBundle/Resources/config/routes.yaml
quote_invoice_admin:
    resource: '../../Controller/'
    type: annotation
    prefix: /admin/quote-invoice
```

## Activation Bundle

### Configuration Application

```php
// config/bundles.php
return [
    // ... autres bundles
    App\Bundle\QuoteInvoiceBundle\QuoteInvoiceBundle::class => ['all' => true],
];
```

### Configuration Bundle

```yaml
# config/packages/quote_invoice.yaml
quote_invoice:
    pdf:
        generator: tcpdf
        template_path: 'templates/pdf/'
        options:
            format: A4
            orientation: P
            margin_top: 20
            margin_bottom: 20
            margin_left: 15
            margin_right: 15

    email:
        from_email: '%env(MAILER_FROM_EMAIL)%'
        from_name: '%env(MAILER_FROM_NAME)%'
        templates:
            quote: 'emails/quote.html.twig'
            invoice: 'emails/invoice.html.twig'

    company:
        name: '%env(COMPANY_NAME)%'
        address: '%env(COMPANY_ADDRESS)%'
        phone: '%env(COMPANY_PHONE)%'
        email: '%env(COMPANY_EMAIL)%'
        website: '%env(COMPANY_WEBSITE)%'
        logo_path: '%env(COMPANY_LOGO_PATH)%'
```

## Tests Bundle

### Test Service Quote

```php
// src/Bundle/QuoteInvoiceBundle/Tests/Service/QuoteServiceTest.php
namespace App\Bundle\QuoteInvoiceBundle\Tests\Service;

use App\Bundle\QuoteInvoiceBundle\Service\QuoteService;
use App\Entity\CRM\Customer;
use PHPUnit\Framework\TestCase;

class QuoteServiceTest extends TestCase
{
    private QuoteService $quoteService;

    protected function setUp(): void
    {
        // Setup mocks et service
    }

    public function testCreateQuoteWithValidData(): void
    {
        $customer = new Customer();
        $items = [
            ['description' => 'Service 1', 'quantity' => 1, 'unitPrice' => 100.00]
        ];

        $quote = $this->quoteService->createQuote($customer, $items);

        $this->assertNotNull($quote->getId());
        $this->assertEquals($customer, $quote->getCustomer());
        $this->assertCount(1, $quote->getItems());
    }
}
```

## Bonnes Pratiques Bundle

### Structure Modulaire

-   Bundle autonome et réutilisable
-   Configuration flexible via YAML
-   Services découplés avec interfaces
-   Tests complets pour chaque composant

### Intégration CMS_SF

-   Respecter architecture existante
-   Utiliser systèmes CMS_SF (auth, templates)
-   Navigation cohérente dans BackOffice
-   Permissions appropriées
