<?php

namespace App\Controller;

use App\Service\HealthCheckService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HealthController extends AbstractController
{
    private HealthCheckService $healthCheckService;

    public function __construct(HealthCheckService $healthCheckService)
    {
        $this->healthCheckService = $healthCheckService;
    }

    #[Route('/health-check', name: 'health_check', methods: ['GET'])]
    public function check(): JsonResponse
    {
        $status = $this->healthCheckService->performHealthChecks();
        $responseCode = 'ok' === $status['status'] ? JsonResponse::HTTP_OK : JsonResponse::HTTP_SERVICE_UNAVAILABLE;

        return $this->json($status, $responseCode);
    }

    #[Route('/health-check/debug', name: 'health_check_debug', methods: ['GET'])]
    public function debug(): Response
    {
        $status = $this->healthCheckService->performHealthChecks();
        $output = "Health Check Debug:\n";

        // Formatage des informations pour un affichage en texte brut
        foreach ($status as $key => $value) {
            if (is_array($value)) {
                $stringValue = json_encode($value);
            } elseif (is_bool($value)) {
                $stringValue = $value ? 'true' : 'false';
            } elseif (is_scalar($value)) {
                $stringValue = (string) $value;
            } elseif (is_object($value) && method_exists($value, '__toString')) {
                $stringValue = $value->__toString();
            } else {
                $stringValue = gettype($value);
            }
            $output .= sprintf("%s: %s\n", ucfirst($key), $stringValue);
        }

        return new Response($output, Response::HTTP_OK, ['Content-Type' => 'text/plain']);
    }
}
