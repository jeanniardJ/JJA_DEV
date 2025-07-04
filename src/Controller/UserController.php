<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/user')]
class UserController extends AbstractController
{
    #[Route('/{id}', name: 'app_user_index', methods: ['GET'])]
    public function index(User $user): Response
    {
        return $this->render('user/index.html.twig', [
            'users' => $user,
        ]);
    }
}
