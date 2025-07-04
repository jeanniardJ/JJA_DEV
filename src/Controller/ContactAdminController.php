<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Repository\ContactRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/contact')]
class ContactAdminController extends AbstractController
{
    #[Route('/', name: 'app_contact_adm_index')]
    public function index(ContactRepository $contactRepository): Response
    {
        return $this->render('contact/admin/index.html.twig', [
            'contacts' => $contactRepository->findAll(),
        ]);
    }

    public function contactsBloc(ContactRepository $contactRepository): Response
    {
        return $this->render('contact/admin/bloc/index.html.twig', ['contacts' => $contactRepository->findAll()]);
    }

    #[Route('/{id}', name: 'app_contact_adm_show', methods: 'GET')]
    public function show(Contact $contact): Response
    {
        return $this->render('contact/admin/show.html.twig', ['contact' => $contact]);
    }

    #[Route('/{id}', name: 'app_contact_adm_delete', methods: 'POST')]
    public function delete(Request $request, Contact $contact, ContactRepository $contactRepository): Response
    {
        $token = $request->get('_token');
        if (is_string($token) && $this->isCsrfTokenValid('delete'.$contact->getId(), $token)) {
            $contactRepository->remove($contact);
            $this->addFlash('success', 'La suppression du contact à été effectuer.');
        }

        return $this->redirectToRoute('app_contact_adm_index', [], Response::HTTP_SEE_OTHER);
    }
}
