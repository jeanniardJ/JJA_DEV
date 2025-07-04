<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HealthController extends AbstractController
{
    #[Route('/health-check', name: 'health_check', methods: ['GET'])]
    public function check(EntityManagerInterface $em): JsonResponse
    {
        $status = [
            'status' => 'ok',
            'timestamp' => (new \DateTime())->format('c'),
            'environment' => $this->getParameter('kernel.environment'),
            'checks' => [],
        ];

        try {
            // Vérification base de données
            $em->getConnection()->connect();
            $status['checks']['database'] = 'ok';
        } catch (\Exception $e) {
            $status['checks']['database'] = 'error: '.$e->getMessage();
            $status['status'] = 'error';
        }

        // Vérification cache
        try {
            $cacheDir = $this->getParameter('kernel.cache_dir');
            if (is_dir($cacheDir) && is_writable($cacheDir)) {
                $status['checks']['cache'] = 'ok';
            } else {
                $status['checks']['cache'] = 'error: cache directory not writable';
                $status['status'] = 'error';
            }
        } catch (\Exception $e) {
            $status['checks']['cache'] = 'error: '.$e->getMessage();
            $status['status'] = 'error';
        }

        // Vérification assets
        $buildDir = $this->getParameter('kernel.project_dir').'/public/build';
        if (is_dir($buildDir)) {
            $status['checks']['assets'] = 'ok';
        } else {
            $status['checks']['assets'] = 'warning: build directory not found';
        }

        // Informations système
        $status['info'] = [
            'php_version' => PHP_VERSION,
            'symfony_version' => $this->getParameter('kernel.symfony_version') ?? 'unknown',
            'memory_usage' => memory_get_usage(true),
            'memory_limit' => ini_get('memory_limit'),
            'load_average' => function_exists('sys_getloadavg') ? sys_getloadavg()[0] : 'unknown',
        ];

        $responseCode = 'ok' === $status['status'] ? Response::HTTP_OK : Response::HTTP_SERVICE_UNAVAILABLE;

        return $this->json($status, $responseCode);
    }
}
