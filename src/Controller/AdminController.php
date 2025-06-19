<?php

namespace App\Controller;

use App\Twig\Components\BreadCrumb;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin')]
class AdminController extends AbstractController
{
    #[Route('/', name: 'app_adm_accueil')]
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'user' => $this->getUser()->getUserIdentifier(),
        ]);
    }
}
