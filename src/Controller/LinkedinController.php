<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationLinkedFormType;
use Doctrine\ORM\EntityManagerInterface;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LinkedinController extends AbstractController
{
    #[Route('/connect/linkedin', name: 'app_connect_linkedin')]
    public function connect(ClientRegistry $clientRegistry)
    {
        return $clientRegistry
            ->getClient('linkedin')
            ->redirect();
    }

    #[Route("/connect/linkedin/check", name: "app_connect_linkedin_check")]
    public function connectCheck(Request $request, ClientRegistry $clientRegistry, EntityManagerInterface $entityManager)
    {
        $client = $clientRegistry->getClient('linkedin');
        $user = $client->fetchUser();

        $userInDb = $entityManager->getRepository(User::class)->findOneBy(['email' => $user->getEmail()]);
        if (!$userInDb) {
            // Stocker les données de l'utilisateur dans la session
            $request->getSession()->set('user_data', $user->toArray());
            // Rediriger vers le formulaire pré-rempli
            return $this->redirectToRoute('app_connect_register_linkedin');
        }

        // par exemple, renvoyer à la page d'accueil
        return $this->redirectToRoute('app_home');
    }

    #[Route('/register/linkedin', name: 'app_connect_register_linkedin')]
    public function registerLinkedIn(Request $request, EntityManagerInterface $entityManager): Response
    {
        // Vous pouvez récupérer des données de l'utilisateur depuis la session, par exemple :
        $userData = $request;

        $user = new User();
        $form = $this->createForm(RegistrationLinkedFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setEmail($request->getSession()->get('user_date')->email());
            $entityManager->persist($user);
            $entityManager->flush();
            return $this->redirectToRoute('app_home');
        }

        return $this->render('registration/linkedin.html.twig', [
            'form' => $form->createView(),
            'user_data' => $userData,
        ]);
    }
}
