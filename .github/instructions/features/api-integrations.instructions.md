---
applyTo: 'JJA_DEV/**'
---
# Instructions - API et Intégrations

## Architecture API

### Structure RESTful

```
/api/v1/
├── /contacts          # CRUD des contacts
├── /prospects         # Gestion des prospects
├── /deals             # Opportunités commerciales
├── /activities        # Activités et tâches
├── /reports           # Rapports et statistiques
└── /webhooks          # Points d'entrée webhook
```

### Standards API

#### Format des Réponses

```json
{
    "status": "success|error",
    "data": {
        // Données de la réponse
    },
    "meta": {
        "pagination": {
            "current_page": 1,
            "per_page": 20,
            "total": 150,
            "total_pages": 8
        },
        "filters": {
            "applied": ["status:active", "type:prospect"]
        }
    },
    "errors": [
        {
            "field": "email",
            "code": "INVALID_FORMAT",
            "message": "Format d'email invalide"
        }
    ]
}
```

#### Codes de Statut HTTP

```php
// src/Controller/Api/BaseApiController.php
abstract class BaseApiController extends AbstractController
{
    protected function successResponse($data = null, int $status = 200): JsonResponse
    {
        return $this->json([
            'status' => 'success',
            'data' => $data
        ], $status);
    }

    protected function errorResponse(array $errors, int $status = 400): JsonResponse
    {
        return $this->json([
            'status' => 'error',
            'errors' => $errors
        ], $status);
    }

    protected function validationErrorResponse(ConstraintViolationListInterface $violations): JsonResponse
    {
        $errors = [];
        foreach ($violations as $violation) {
            $errors[] = [
                'field' => $violation->getPropertyPath(),
                'code' => 'VALIDATION_ERROR',
                'message' => $violation->getMessage()
            ];
        }

        return $this->errorResponse($errors, 422);
    }
}
```

### Authentification API

#### Token JWT

```php
// src/Security/JwtTokenManager.php
class JwtTokenManager
{
    public function createToken(User $user): string
    {
        $payload = [
            'sub' => $user->getId(),
            'username' => $user->getUserIdentifier(),
            'roles' => $user->getRoles(),
            'iat' => time(),
            'exp' => time() + 3600, // 1 heure
            'scope' => 'api:crm'
        ];

        return JWT::encode($payload, $this->secretKey, 'HS256');
    }

    public function validateToken(string $token): ?User
    {
        try {
            $decoded = JWT::decode($token, new Key($this->secretKey, 'HS256'));
            return $this->userRepository->find($decoded->sub);
        } catch (Exception $e) {
            $this->logger->warning('Invalid JWT token', ['error' => $e->getMessage()]);
            return null;
        }
    }
}
```

#### API Key Authentication

```php
// src/Security/ApiKeyAuthenticator.php
class ApiKeyAuthenticator extends AbstractAuthenticator
{
    public function supports(Request $request): ?bool
    {
        return $request->headers->has('X-API-KEY') &&
               str_starts_with($request->getPathInfo(), '/api/');
    }

    public function authenticate(Request $request): Passport
    {
        $apiKey = $request->headers->get('X-API-KEY');

        if (!$apiKey) {
            throw new CustomUserMessageAuthenticationException('API Key manquante');
        }

        return new SelfValidatingPassport(
            new UserBadge($apiKey, [$this->userProvider, 'loadUserByApiKey'])
        );
    }
}
```

## Contrôleurs API CRM

### Gestion des Contacts

```php
// src/Controller/Api/ContactController.php
#[Route('/api/v1/contacts', name: 'api_contacts_')]
class ContactController extends BaseApiController
{
    #[Route('', methods: ['GET'])]
    public function list(
        Request $request,
        ContactRepository $repository,
        PaginatorInterface $paginator
    ): JsonResponse {
        $page = max(1, $request->query->getInt('page', 1));
        $limit = min(100, max(1, $request->query->getInt('limit', 20)));

        $queryBuilder = $repository->createQueryBuilder('c')
            ->select('c', 'u')
            ->leftJoin('c.assignedUser', 'u')
            ->orderBy('c.createdAt', 'DESC');

        // Filtres
        if ($search = $request->query->get('search')) {
            $queryBuilder
                ->andWhere('c.firstName LIKE :search OR c.lastName LIKE :search OR c.email LIKE :search')
                ->setParameter('search', "%{$search}%");
        }

        if ($status = $request->query->get('status')) {
            $queryBuilder
                ->andWhere('c.status = :status')
                ->setParameter('status', $status);
        }

        $pagination = $paginator->paginate($queryBuilder, $page, $limit);

        return $this->successResponse([
            'contacts' => $this->normalizer->normalize($pagination->getItems(), 'json', ['groups' => 'api:list']),
            'meta' => [
                'pagination' => [
                    'current_page' => $pagination->getCurrentPageNumber(),
                    'per_page' => $pagination->getItemNumberPerPage(),
                    'total' => $pagination->getTotalItemCount(),
                    'total_pages' => ceil($pagination->getTotalItemCount() / $limit)
                ]
            ]
        ]);
    }

    #[Route('/{id}', methods: ['GET'], requirements: ['id' => '\d+'])]
    public function show(Contact $contact): JsonResponse
    {
        return $this->successResponse(
            $this->normalizer->normalize($contact, 'json', ['groups' => 'api:detail'])
        );
    }

    #[Route('', methods: ['POST'])]
    public function create(
        Request $request,
        ValidatorInterface $validator,
        CrmManager $crmManager
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $contact = new Contact();
        $this->denormalizer->denormalize($data, Contact::class, 'json', [
            'object_to_populate' => $contact,
            'groups' => 'api:write'
        ]);

        $violations = $validator->validate($contact);
        if (count($violations) > 0) {
            return $this->validationErrorResponse($violations);
        }

        try {
            $crmManager->createContact($contact);

            return $this->successResponse(
                $this->normalizer->normalize($contact, 'json', ['groups' => 'api:detail']),
                201
            );
        } catch (CrmException $e) {
            return $this->errorResponse([
                ['code' => 'CRM_ERROR', 'message' => $e->getMessage()]
            ], 422);
        }
    }

    #[Route('/{id}', methods: ['PUT'], requirements: ['id' => '\d+'])]
    public function update(
        Contact $contact,
        Request $request,
        ValidatorInterface $validator,
        CrmManager $crmManager
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        $this->denormalizer->denormalize($data, Contact::class, 'json', [
            'object_to_populate' => $contact,
            'groups' => 'api:write'
        ]);

        $violations = $validator->validate($contact);
        if (count($violations) > 0) {
            return $this->validationErrorResponse($violations);
        }

        try {
            $crmManager->updateContact($contact);

            return $this->successResponse(
                $this->normalizer->normalize($contact, 'json', ['groups' => 'api:detail'])
            );
        } catch (CrmException $e) {
            return $this->errorResponse([
                ['code' => 'CRM_ERROR', 'message' => $e->getMessage()]
            ], 422);
        }
    }
}
```

### Gestion des Opportunités

```php
// src/Controller/Api/DealController.php
#[Route('/api/v1/deals', name: 'api_deals_')]
class DealController extends BaseApiController
{
    #[Route('/pipeline', methods: ['GET'])]
    public function pipeline(DealRepository $repository): JsonResponse
    {
        $pipeline = $repository->getPipelineStatistics();

        return $this->successResponse([
            'stages' => $pipeline['stages'],
            'total_value' => $pipeline['total_value'],
            'average_deal_size' => $pipeline['average_deal_size'],
            'conversion_rates' => $pipeline['conversion_rates']
        ]);
    }

    #[Route('/{id}/stage', methods: ['PATCH'], requirements: ['id' => '\d+'])]
    public function updateStage(
        Deal $deal,
        Request $request,
        CrmManager $crmManager
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);
        $newStage = $data['stage'] ?? null;

        if (!$newStage || !in_array($newStage, DealStage::getValidStages())) {
            return $this->errorResponse([
                ['code' => 'INVALID_STAGE', 'message' => 'Étape invalide']
            ], 422);
        }

        try {
            $crmManager->updateDealStage($deal, $newStage);

            return $this->successResponse([
                'id' => $deal->getId(),
                'stage' => $deal->getStage(),
                'updated_at' => $deal->getUpdatedAt()->format('c')
            ]);
        } catch (CrmException $e) {
            return $this->errorResponse([
                ['code' => 'CRM_ERROR', 'message' => $e->getMessage()]
            ], 422);
        }
    }
}
```

## Webhooks et Intégrations

### Système de Webhooks

```php
// src/Service/Webhook/WebhookManager.php
class WebhookManager
{
    public function triggerWebhook(string $event, array $data): void
    {
        $webhooks = $this->webhookRepository->findByEvent($event);

        foreach ($webhooks as $webhook) {
            $this->dispatcher->dispatch(new WebhookEvent($webhook, $data));
        }
    }

    public function registerWebhook(string $url, array $events, ?string $secret = null): Webhook
    {
        $webhook = new Webhook();
        $webhook->setUrl($url);
        $webhook->setEvents($events);
        $webhook->setSecret($secret ?? $this->generateSecret());
        $webhook->setIsActive(true);

        $this->entityManager->persist($webhook);
        $this->entityManager->flush();

        return $webhook;
    }
}
```

### Listener de Webhooks

```php
// src/EventListener/WebhookListener.php
class WebhookListener
{
    #[AsEventListener(event: WebhookEvent::class)]
    public function onWebhook(WebhookEvent $event): void
    {
        $webhook = $event->getWebhook();
        $data = $event->getData();

        $payload = [
            'event' => $event->getEventName(),
            'data' => $data,
            'timestamp' => time(),
            'webhook_id' => $webhook->getId()
        ];

        try {
            $response = $this->httpClient->request('POST', $webhook->getUrl(), [
                'json' => $payload,
                'headers' => [
                    'User-Agent' => 'JJA-DEV-Webhook/1.0',
                    'X-Webhook-Signature' => $this->generateSignature($payload, $webhook->getSecret())
                ],
                'timeout' => 30
            ]);

            $this->logWebhookDelivery($webhook, $payload, $response->getStatusCode());

        } catch (Exception $e) {
            $this->logger->error('Webhook delivery failed', [
                'webhook_id' => $webhook->getId(),
                'url' => $webhook->getUrl(),
                'error' => $e->getMessage()
            ]);
        }
    }
}
```

### Intégration Email (Mailchimp/SendGrid)

```php
// src/Service/Integration/EmailMarketingService.php
class EmailMarketingService
{
    public function syncContactToMailchimp(Contact $contact): bool
    {
        if (!$contact->getEmail() || !$contact->isMarketingOptIn()) {
            return false;
        }

        try {
            $this->mailchimpClient->lists->addListMember($this->listId, [
                'email_address' => $contact->getEmail(),
                'status' => 'subscribed',
                'merge_fields' => [
                    'FNAME' => $contact->getFirstName(),
                    'LNAME' => $contact->getLastName(),
                    'COMPANY' => $contact->getCompany(),
                ],
                'tags' => $this->getContactTags($contact)
            ]);

            $this->logger->info('Contact synced to Mailchimp', [
                'contact_id' => $contact->getId(),
                'email' => $contact->getEmail()
            ]);

            return true;
        } catch (Exception $e) {
            $this->logger->error('Mailchimp sync failed', [
                'contact_id' => $contact->getId(),
                'error' => $e->getMessage()
            ]);

            return false;
        }
    }
}
```

## Documentation API

### Annotations OpenAPI

```php
// src/Controller/Api/ContactController.php
use OpenApi\Attributes as OA;

#[OA\Tag(name: 'Contacts', description: 'Gestion des contacts CRM')]
class ContactController extends BaseApiController
{
    #[OA\Get(
        path: '/api/v1/contacts',
        operationId: 'getContacts',
        summary: 'Liste des contacts',
        tags: ['Contacts']
    )]
    #[OA\Parameter(
        name: 'page',
        in: 'query',
        description: 'Numéro de page',
        schema: new OA\Schema(type: 'integer', minimum: 1, default: 1)
    )]
    #[OA\Parameter(
        name: 'limit',
        in: 'query',
        description: 'Nombre d\'éléments par page',
        schema: new OA\Schema(type: 'integer', minimum: 1, maximum: 100, default: 20)
    )]
    #[OA\Response(
        response: 200,
        description: 'Liste des contacts récupérée avec succès',
        content: new OA\JsonContent(ref: '#/components/schemas/ContactListResponse')
    )]
    public function list(Request $request): JsonResponse
    {
        // Implementation...
    }
}
```

### Schémas OpenAPI

```php
// src/Entity/Crm/Contact.php
use OpenApi\Attributes as OA;

#[OA\Schema(
    schema: 'Contact',
    description: 'Entité Contact CRM',
    type: 'object'
)]
class Contact
{
    #[OA\Property(
        property: 'id',
        description: 'Identifiant unique',
        type: 'integer',
        example: 123
    )]
    private ?int $id = null;

    #[OA\Property(
        property: 'firstName',
        description: 'Prénom du contact',
        type: 'string',
        maxLength: 100,
        example: 'Jean'
    )]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $firstName = null;

    #[OA\Property(
        property: 'email',
        description: 'Adresse email',
        type: 'string',
        format: 'email',
        example: 'jean.dupont@example.com'
    )]
    #[Groups(['api:list', 'api:detail', 'api:write'])]
    private ?string $email = null;
}
```

## Rate Limiting et Sécurité

### Configuration Rate Limiting

```yaml
# config/packages/rate_limiter.yaml
framework:
    rate_limiter:
        api_general:
            policy: 'sliding_window'
            limit: 1000
            interval: '60 minutes'
            lock_factory: 'lock.redis.factory'
        api_write_operations:
            policy: 'fixed_window'
            limit: 100
            interval: '60 minutes'
            lock_factory: 'lock.redis.factory'
```

### Middleware de Sécurité

```php
// src/EventListener/ApiSecurityListener.php
class ApiSecurityListener
{
    #[AsEventListener(event: RequestEvent::class, priority: 256)]
    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        if (!str_starts_with($request->getPathInfo(), '/api/')) {
            return;
        }

        // Validation CORS
        $this->handleCors($request);

        // Rate limiting
        $this->checkRateLimit($request);

        // Validation IP si nécessaire
        $this->validateIpWhitelist($request);
    }

    private function checkRateLimit(Request $request): void
    {
        $limiter = $this->rateLimiterFactory->create('api_general');
        $limit = $limiter->consume();

        if (!$limit->isAccepted()) {
            throw new TooManyRequestsHttpException(
                $limit->getRetryAfter()->getTimestamp() - time(),
                'Trop de requêtes'
            );
        }
    }
}
```

## Tests API

### Tests d'Intégration

```php
// tests/Api/ContactControllerTest.php
class ContactControllerTest extends ApiTestCase
{
    public function testGetContactsRequiresAuthentication(): void
    {
        $this->client->request('GET', '/api/v1/contacts');

        $this->assertResponseStatusCodeSame(401);
    }

    public function testGetContactsWithValidToken(): void
    {
        $token = $this->getAuthToken();

        $this->client->request('GET', '/api/v1/contacts', [
            'headers' => ['Authorization' => "Bearer {$token}"]
        ]);

        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('Content-Type', 'application/json');

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals('success', $data['status']);
        $this->assertArrayHasKey('contacts', $data['data']);
    }

    public function testCreateContactWithInvalidData(): void
    {
        $token = $this->getAuthToken();

        $this->client->request('POST', '/api/v1/contacts', [
            'headers' => [
                'Authorization' => "Bearer {$token}",
                'Content-Type' => 'application/json'
            ],
            'content' => json_encode([
                'firstName' => '', // Invalide
                'email' => 'invalid-email' // Invalide
            ])
        ]);

        $this->assertResponseStatusCodeSame(422);

        $data = json_decode($this->client->getResponse()->getContent(), true);
        $this->assertEquals('error', $data['status']);
        $this->assertNotEmpty($data['errors']);
    }
}
```
