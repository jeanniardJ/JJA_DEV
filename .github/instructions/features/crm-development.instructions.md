---
applyTo: 'JJA_DEV/**'
---

# Développement CRM JJA_DEV

## Architecture CRM

### Structure Entités CRM

```
src/Entity/CRM/
├── Customer.php          # Clients
├── Contact.php          # Contacts clients
├── Lead.php             # Prospects/Leads
├── Opportunity.php      # Opportunités commerciales
├── Quote.php            # Devis
├── Invoice.php          # Factures
└── Project.php          # Projets/Contrats
```

### Services CRM

```
src/Service/CRM/
├── CustomerService.php      # Gestion clients
├── LeadService.php         # Gestion prospects
├── OpportunityService.php  # Pipeline commercial
├── QuoteService.php        # Génération devis
├── InvoiceService.php      # Facturation
└── ReportingService.php    # Reporting/Analytics
```

## Développement Entités CRM

### Entité Customer

```php
<?php
// src/Entity/CRM/Customer.php

namespace App\Entity\CRM;

use App\Repository\CRM\CustomerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: CustomerRepository::class)]
#[ORM\Table(name: 'crm_customers')]
class Customer
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Assert\NotBlank(message: 'Le nom de l\'entreprise est obligatoire')]
    #[Assert\Length(max: 255)]
    private ?string $companyName = null;

    #[ORM\Column(length: 255, unique: true)]
    #[Assert\NotBlank]
    #[Assert\Email]
    private ?string $email = null;

    #[ORM\Column(length: 20, nullable: true)]
    #[Assert\Regex(pattern: '/^[0-9+\-\s\(\)]+$/', message: 'Format téléphone invalide')]
    private ?string $phone = null;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $address = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $postalCode = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $city = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $country = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: 'datetime_immutable')]
    private ?\DateTimeImmutable $updatedAt = null;

    #[ORM\OneToMany(mappedBy: 'customer', targetEntity: Contact::class, cascade: ['persist', 'remove'])]
    private Collection $contacts;

    #[ORM\OneToMany(mappedBy: 'customer', targetEntity: Quote::class)]
    private Collection $quotes;

    #[ORM\OneToMany(mappedBy: 'customer', targetEntity: Invoice::class)]
    private Collection $invoices;

    public function __construct()
    {
        $this->contacts = new ArrayCollection();
        $this->quotes = new ArrayCollection();
        $this->invoices = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
    }

    // Getters et setters...
}
```

### Service Customer

```php
<?php
// src/Service/CRM/CustomerService.php

namespace App\Service\CRM;

use App\Entity\CRM\Customer;
use App\Repository\CRM\CustomerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class CustomerService implements CustomerServiceInterface
{
    public function __construct(
        private CustomerRepository $customerRepository,
        private EntityManagerInterface $entityManager,
        private ValidatorInterface $validator
    ) {}

    public function createCustomer(array $data): Customer
    {
        $customer = new Customer();
        $this->populateCustomer($customer, $data);

        $errors = $this->validator->validate($customer);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException('Données client invalides');
        }

        $this->entityManager->persist($customer);
        $this->entityManager->flush();

        return $customer;
    }

    public function updateCustomer(Customer $customer, array $data): Customer
    {
        $this->populateCustomer($customer, $data);
        $customer->setUpdatedAt(new \DateTimeImmutable());

        $errors = $this->validator->validate($customer);
        if (count($errors) > 0) {
            throw new \InvalidArgumentException('Données client invalides');
        }

        $this->entityManager->flush();

        return $customer;
    }

    public function deleteCustomer(Customer $customer): void
    {
        // Vérifier qu'il n'y a pas de factures impayées
        if ($this->hasUnpaidInvoices($customer)) {
            throw new \RuntimeException('Impossible de supprimer un client avec des factures impayées');
        }

        $this->entityManager->remove($customer);
        $this->entityManager->flush();
    }

    public function getCustomerStats(Customer $customer): array
    {
        return [
            'total_quotes' => $customer->getQuotes()->count(),
            'total_invoices' => $customer->getInvoices()->count(),
            'total_revenue' => $this->calculateTotalRevenue($customer),
            'last_activity' => $this->getLastActivity($customer)
        ];
    }

    private function populateCustomer(Customer $customer, array $data): void
    {
        if (isset($data['companyName'])) {
            $customer->setCompanyName($data['companyName']);
        }
        if (isset($data['email'])) {
            $customer->setEmail($data['email']);
        }
        if (isset($data['phone'])) {
            $customer->setPhone($data['phone']);
        }
        if (isset($data['address'])) {
            $customer->setAddress($data['address']);
        }
        if (isset($data['postalCode'])) {
            $customer->setPostalCode($data['postalCode']);
        }
        if (isset($data['city'])) {
            $customer->setCity($data['city']);
        }
        if (isset($data['country'])) {
            $customer->setCountry($data['country']);
        }
    }

    private function hasUnpaidInvoices(Customer $customer): bool
    {
        return $this->customerRepository->hasUnpaidInvoices($customer);
    }

    private function calculateTotalRevenue(Customer $customer): float
    {
        return $this->customerRepository->getTotalRevenue($customer);
    }

    private function getLastActivity(Customer $customer): ?\DateTimeImmutable
    {
        return $this->customerRepository->getLastActivity($customer);
    }
}
```

## Controllers CRM Admin

### Controller Customer Admin

```php
<?php
// src/Controller/Admin/CRM/CustomerController.php

namespace App\Controller\Admin\CRM;

use App\Entity\CRM\Customer;
use App\Form\CRM\CustomerType;
use App\Service\CRM\CustomerServiceInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/admin/crm/customers', name: 'admin_crm_customers_')]
#[IsGranted('ROLE_CRM_MANAGER')]
class CustomerController extends AbstractController
{
    public function __construct(
        private CustomerServiceInterface $customerService,
        private PaginatorInterface $paginator
    ) {}

    #[Route('', name: 'index', methods: ['GET'])]
    public function index(Request $request): Response
    {
        $queryBuilder = $this->customerService->getCustomersQueryBuilder();

        $pagination = $this->paginator->paginate(
            $queryBuilder,
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('admin/crm/customer/index.html.twig', [
            'pagination' => $pagination,
        ]);
    }

    #[Route('/new', name: 'new', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_CRM_ADMIN')]
    public function new(Request $request): Response
    {
        $form = $this->createForm(CustomerType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                $customer = $this->customerService->createCustomer($form->getData());

                $this->addFlash('success', 'Client créé avec succès');

                return $this->redirectToRoute('admin_crm_customers_show', [
                    'id' => $customer->getId()
                ]);

            } catch (\Exception $e) {
                $this->addFlash('error', 'Erreur lors de la création: ' . $e->getMessage());
            }
        }

        return $this->render('admin/crm/customer/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'show', methods: ['GET'])]
    public function show(Customer $customer): Response
    {
        $stats = $this->customerService->getCustomerStats($customer);

        return $this->render('admin/crm/customer/show.html.twig', [
            'customer' => $customer,
            'stats' => $stats,
        ]);
    }

    #[Route('/{id}/edit', name: 'edit', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_CRM_ADMIN')]
    public function edit(Request $request, Customer $customer): Response
    {
        $form = $this->createForm(CustomerType::class, $customer);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            try {
                $this->customerService->updateCustomer($customer, $form->getData());

                $this->addFlash('success', 'Client modifié avec succès');

                return $this->redirectToRoute('admin_crm_customers_show', [
                    'id' => $customer->getId()
                ]);

            } catch (\Exception $e) {
                $this->addFlash('error', 'Erreur lors de la modification: ' . $e->getMessage());
            }
        }

        return $this->render('admin/crm/customer/edit.html.twig', [
            'customer' => $customer,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}/delete', name: 'delete', methods: ['POST'])]
    #[IsGranted('ROLE_CRM_ADMIN')]
    public function delete(Request $request, Customer $customer): Response
    {
        if ($this->isCsrfTokenValid('delete'.$customer->getId(), $request->request->get('_token'))) {
            try {
                $this->customerService->deleteCustomer($customer);
                $this->addFlash('success', 'Client supprimé avec succès');

            } catch (\Exception $e) {
                $this->addFlash('error', 'Erreur lors de la suppression: ' . $e->getMessage());
            }
        }

        return $this->redirectToRoute('admin_crm_customers_index');
    }
}
```

## Templates CRM

### Template Index Customers

```twig
{# templates/admin/crm/customer/index.html.twig #}
{% extends 'admin/base.html.twig' %}

{% block title %}{{ parent() }} - Gestion Clients{% endblock %}

{% block body %}
<div class="admin-content">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1>Gestion Clients CRM</h1>
        {% if is_granted('ROLE_CRM_ADMIN') %}
            <a href="{{ path('admin_crm_customers_new') }}" class="btn btn-primary">
                <i class="fas fa-plus"></i> Nouveau Client
            </a>
        {% endif %}
    </div>

    <div class="card">
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Entreprise</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Ville</th>
                            <th>Créé le</th>
                            <th class="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {% for customer in pagination %}
                            <tr>
                                <td>
                                    <strong>{{ customer.companyName }}</strong>
                                </td>
                                <td>{{ customer.email }}</td>
                                <td>{{ customer.phone ?? '-' }}</td>
                                <td>{{ customer.city ?? '-' }}</td>
                                <td>{{ customer.createdAt|date('d/m/Y') }}</td>
                                <td class="text-end">
                                    <div class="btn-group" role="group">
                                        <a href="{{ path('admin_crm_customers_show', {id: customer.id}) }}"
                                           class="btn btn-sm btn-outline-primary">
                                            <i class="fas fa-eye"></i>
                                        </a>
                                        {% if is_granted('ROLE_CRM_ADMIN') %}
                                            <a href="{{ path('admin_crm_customers_edit', {id: customer.id}) }}"
                                               class="btn btn-sm btn-outline-secondary">
                                                <i class="fas fa-edit"></i>
                                            </a>
                                        {% endif %}
                                    </div>
                                </td>
                            </tr>
                        {% else %}
                            <tr>
                                <td colspan="6" class="text-center text-muted">
                                    Aucun client trouvé
                                </td>
                            </tr>
                        {% endfor %}
                    </tbody>
                </table>
            </div>

            {{ knp_pagination_render(pagination) }}
        </div>
    </div>
</div>
{% endblock %}
```

## Formulaires CRM

### Formulaire Customer

```php
<?php
// src/Form/CRM/CustomerType.php

namespace App\Form\CRM;

use App\Entity\CRM\Customer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TelType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CustomerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('companyName', TextType::class, [
                'label' => 'Nom de l\'entreprise',
                'attr' => ['placeholder' => 'Nom de l\'entreprise']
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'attr' => ['placeholder' => 'contact@entreprise.com']
            ])
            ->add('phone', TelType::class, [
                'label' => 'Téléphone',
                'required' => false,
                'attr' => ['placeholder' => '+33 1 23 45 67 89']
            ])
            ->add('address', TextareaType::class, [
                'label' => 'Adresse',
                'required' => false,
                'attr' => ['rows' => 3, 'placeholder' => 'Adresse complète']
            ])
            ->add('postalCode', TextType::class, [
                'label' => 'Code postal',
                'required' => false,
                'attr' => ['placeholder' => '75001']
            ])
            ->add('city', TextType::class, [
                'label' => 'Ville',
                'required' => false,
                'attr' => ['placeholder' => 'Paris']
            ])
            ->add('country', TextType::class, [
                'label' => 'Pays',
                'required' => false,
                'data' => 'France',
                'attr' => ['placeholder' => 'France']
            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Customer::class,
        ]);
    }
}
```

## Bonnes Pratiques CRM

### Navigation CRM

-   Ajouter liens dans menu admin BackOffice
-   Respecter hiérarchie CMS_SF existante
-   Utiliser icônes cohérentes avec le design
-   Gérer permissions appropriées

### Sécurité CRM

-   Vérifier rôles pour chaque action
-   Valider données côté serveur
-   Protéger contre injections SQL
-   Audit trail pour actions critiques

### Performance CRM

-   Pagination pour listes importantes
-   Index base de données appropriés
-   Cache pour statistiques complexes
-   Lazy loading pour relations
