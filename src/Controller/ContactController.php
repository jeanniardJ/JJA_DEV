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

use App\Entity\Contact;
use App\Form\ContactType;
use Psr\Log\LoggerInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/contact')]
class ContactController extends AbstractController
{
	#[Route('/', name: 'app_contact', options: ['sitemap' => true, 'changefreq' => 'monthly', 'priority' => 0.7])]
	public function index(Request $request, EntityManagerInterface $entityManager, TranslatorInterface $translator): Response
	{
		$contact = new contact();
		$form = $this->createForm(ContactType::class, $contact);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager->persist($contact);
			$entityManager->flush();

			$this->addFlash('success', ['toast', $translator->trans('contact.message.success', [], 'contact')]);

			return $this->redirectToRoute('app_home');
		}

		return $this->render('contact/index.html.twig', [
			'contact' => $contact,
			'form' => $form
		]);
	}

	#[Route('/api', name: 'app_contact_api', options: ['sitemap' => false], methods: ['POST'], format: 'json')]
	public function api(Request $request, EntityManagerInterface $entityManager, LoggerInterface $logger): Response
	{

		$data = json_decode($request->getContent(), true);

		$logger->info('New contact request', ['data' => $data]);

		$object = $data['formObject'];
		$name = $data['formName'];
		$email = $data['formEmail'];
		$phone = $data['formPhone'];
		$message = $data['formMessage'];

		$logger->info('New contact request', ['object' => $object, 'name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $message]);

		if ($object !== null && $name !== null && $email !== null && $phone !== null && $message !== null) {

			$contact = new contact();
			$contact->setObjet($object);
			$contact->setPhone($phone);
			$contact->setName($name);
			$contact->setEmail($email);
			$contact->setSujet($message);

			$entityManager->persist($contact);

			try {
				$entityManager->flush();
			} catch (\Exception $e) {
				return new Response('error' . $e, Response::HTTP_INTERNAL_SERVER_ERROR);
			}

			return new Response('success', Response::HTTP_CREATED);
		}

		$logger->error('Missing parameters in the request', ['request' => $request]);
		return new Response('error', Response::HTTP_BAD_REQUEST);
	}
}
