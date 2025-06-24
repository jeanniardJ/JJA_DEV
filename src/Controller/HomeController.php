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
 * @package  App\Controller
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\GithubService;
use App\Service\RoadmapService;
use App\Repository\ModuleRepository;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

/**
 * Class HomeController
 *
 * @package App\Controller
 */
class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home', options: ['sitemap' => true])]
    public function index(
        Request $request,
        GithubService $githubService,
        RoadmapService $roadmapService,
        ModuleRepository $moduleRepository,
        ParameterBagInterface $params
    ): Response {
        // Commits GitHub (exemple: repo principal JJA_DEV)
        $commits = $githubService->getLastCommits('JJA_DEV', 10);
        // Roadmap (parser le markdown)
        $roadmapPath = $params->get('kernel.project_dir') . '/.github/ROADMAP.md';
        $roadmap = $roadmapService->getTopRoadmapItems($roadmapPath, 3);
        // Modules (Doctrine)
        $modules = $moduleRepository->findBy([], null, 4);
        return $this->render('home/index.html.twig', [
            'commits' => $commits,
            'roadmap' => $roadmap,
            'modules' => $modules,
        ]);
    }
}
