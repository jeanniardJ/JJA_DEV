<?php
/*
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site web ne peut être reproduit, affiché, modifié ou distribué sans la permission écrite préalable du titulaire du droit d'auteur.
 * Ce site web, son contenu et tous les produits créés par JJA DEV sont protégés par les lois sur les droits d'auteur et la propriété intellectuelle. Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site, y compris, mais sans s'y limiter, le texte, les images, les dessins, les graphiques, les logos et les marques de commerce, peut constituer une violation des lois sur le droit d'auteur, des lois sur les marques de commerce ou d'autres lois applicables et peut entraîner des poursuites judiciaires.
 *
 * Pour obtenir la permission d'utiliser du contenu de ce site, veuillez contacter JJA DEV.
 *
 * Merci de votre compréhension et de votre respect envers notre travail créatif et nos droits de propriété intellectuelle.
 */

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
        if ($this->isCsrfTokenValid('delete' . $contact->getId(), $request->get('_token'))) {
            $contactRepository->remove($contact);
            $this->addFlash('success', 'La suppression du contact à été effectuer.');
        }
        return $this->redirectToRoute('app_contact_adm_index', [], Response::HTTP_SEE_OTHER);
    }
}
