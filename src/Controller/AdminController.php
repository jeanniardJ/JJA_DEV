<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin')]
class AdminController extends AbstractController
{
    #[Route('/', name: 'app_adm_accueil')]
    public function index(): Response
    {
        $user = $this->getUser();

        return $this->render('admin/index.html.twig', [
            'user' => $user ? $user->getUserIdentifier() : null,
        ]);
    }
}
