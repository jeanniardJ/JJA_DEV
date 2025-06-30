<?php

/**
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site ne peut être reproduit sans permission écrite préalable.
 * Ce site, son contenu et tous les produits créés par JJA DEV sont protégés par les droits d'auteur.
 * Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site peut constituer une violation des lois applicables.
 * Cela peut entraîner des poursuites judiciaires.
 *
 * Pour utiliser du contenu de ce site, contactez JJA DEV.
 *
 * Merci de respecter notre travail créatif et nos droits de propriété intellectuelle.
 *
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 */

namespace App\Controller;

use App\Repository\ModuleRepository;
use App\Service\GithubService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class HomeController.
 */
class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', options: ['sitemap' => true])]
    public function index(
        Request $request,
        GithubService $githubService,
        ModuleRepository $moduleRepository,
        ParameterBagInterface $params
    ): Response {
        // Commits GitHub (exemple: repo principal JJA_DEV)
        $commits = $githubService->getLastCommits('JJA_DEV', 10);
        // Roadmap (issues GitHub)
        $roadmap = $githubService->getRoadmapIssues('JJA_DEV', 5);
        // Modules (Doctrine)
        $modules = $moduleRepository->findBy([], null, 4);

        return $this->render('home/index.html.twig', [
            'commits' => $commits,
            'roadmap' => $roadmap,
            'modules' => $modules,
        ]);
    }
}
