<?php
/**
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see     https://jja-dev.fr
 */

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

#[Route('/contact')]
class ContactController extends AbstractController
{
    #[Route('/', name: 'app_contact', options: ['sitemap' => true, 'changefreq' => 'monthly', 'priority' => 0.7])]
    public function index(Request $request, EntityManagerInterface $entityManager, TranslatorInterface $translator): Response
    {
        $contact = new Contact();
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
            'form' => $form,
        ]);
    }

    #[Route('/api', name: 'app_contact_api', options: ['sitemap' => false], methods: ['POST'], format: 'json')]
    public function api(Request $request, EntityManagerInterface $entityManager, LoggerInterface $logger): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!is_array($data) || !isset($data['formObject'], $data['formName'], $data['formEmail'], $data['formPhone'], $data['formMessage'])) {
            $logger->error('Invalid or missing parameters in the request', ['request' => $request->getContent()]);

            return new Response('error: invalid parameters', Response::HTTP_BAD_REQUEST);
        }

        $object = (string) $data['formObject'];
        $name = (string) $data['formName'];
        $email = (string) $data['formEmail'];
        $phone = (string) $data['formPhone'];
        $message = (string) $data['formMessage'];

        $logger->info('New contact request', ['object' => $object, 'name' => $name, 'email' => $email, 'phone' => $phone, 'message' => $message]);

        $contact = new Contact();
        $contact->setObjet($object);
        $contact->setPhone($phone);
        $contact->setName($name);
        $contact->setEmail($email);
        $contact->setSujet($message);

        $entityManager->persist($contact);

        try {
            $entityManager->flush();
        } catch (\Exception $e) {
            $logger->error('Error while saving contact', ['exception' => $e]);

            return new Response('error: internal server error', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return new Response('success', Response::HTTP_CREATED);
    }
}
