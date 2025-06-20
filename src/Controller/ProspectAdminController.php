<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Prospect;
use App\Form\CsvImportType;
use App\Form\ProspectMaileType;
use App\Form\ProspectType;
use App\Repository\ProspectRepository;
use App\Service\ContactModuleImporter;
use App\Service\CsvImporter;
use App\Service\LinkedInContactImporter;
use Doctrine\ORM\EntityManagerInterface;
use OpenAI;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/prospect')]
class ProspectAdminController extends AbstractController
{
    #[Route('/', name: 'app_prospect_adm_index', methods: ['GET'])]
    public function index(ProspectRepository $prospectRepository): Response
    {
        return $this->render('prospect/admin/index.html.twig', [
            'prospects' => $prospectRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_prospect_adm_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $prospect = new Prospect();
        $form = $this->createForm(ProspectType::class, $prospect);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($prospect);
            $entityManager->flush();

            return $this->redirectToRoute('app_prospect_adm_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('prospect/admin/new.html.twig', [
            'prospect' => $prospect,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_prospect_adm_show', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function show(Prospect $prospect): Response
    {
        return $this->render('prospect/admin/show.html.twig', [
            'prospect' => $prospect,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_prospect_adm_edit', requirements: ['id' => '\d+'], methods: ['GET', 'POST'])]
    public function edit(Request $request, Prospect $prospect, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(ProspectType::class, $prospect);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_prospect_adm_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('prospect/admin/edit.html.twig', [
            'prospect' => $prospect,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_prospect_adm_delete', methods: ['POST'])]
    public function delete(Request $request, Prospect $prospect, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete' . $prospect->getId(), $request->request->get('_token'))) {
            $entityManager->remove($prospect);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_prospect_adm_index', [], Response::HTTP_SEE_OTHER);
    }

    #[Route('/import/contact/{id}', name: 'app_prospect_adm_import_contact')]
    public function importContact(ContactModuleImporter $contactModuleImporter, Contact $contact): Response
    {
        $contactModuleImporter->import($contact);
        //TODO ajouter des verification
        return $this->redirectToRoute('app_prospect_adm_index');
    }

    #[Route('/import/csv', name: 'app_prospect_adm_import_csv')]
    public function importCsv(CsvImporter $csvImporter, Request $request): Response
    {
        $form = $this->createForm(CsvImportType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $file = $form->get('csv_file')->getData();

            // Vérifiez si le fichier est bien un fichier CSV
            if ($file->getClientOriginalExtension() !== 'csv') {
                $this->addFlash('error', 'Invalid file type. Please upload a CSV file.');
                return $this->redirectToRoute('app_prospect_adm_index');
            }

            // Déplacez le fichier dans un répertoire temporaire
            $tempPath = sys_get_temp_dir() . '/' . $file->getClientOriginalName();
            $file->move(sys_get_temp_dir(), $file->getClientOriginalName());

            // Appelez la méthode d'importation sur CsvImporter
            $csvImporter->import($tempPath);

            // Supprimez le fichier temporaire
            unlink($tempPath);

            $this->addFlash('success', ['toast', 'Data imported successfully!']);
            return $this->redirectToRoute('app_prospect_adm_index');
        }

        return $this->render('prospect/admin/import_csv.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/import/linkedin', name: 'app_prospect_adm_import_linkedin')]
    public function importLinkedInContacts(LinkedInContactImporter $linkedInContactImporter): Response
    {
        try {
            $contacts = $linkedInContactImporter->importContacts();

            // Enregistrez les contacts importés dans votre base de données ici...

            $this->addFlash('success', sprintf('%d contacts imported successfully from LinkedIn.', count($contacts)));
        } catch (\Exception $e) {
            $this->addFlash('error', 'Failed to import contacts from LinkedIn: ' . $e->getMessage());
        }

        return $this->redirectToRoute('app_prospect_adm_index');
    }

    #[Route('/genereMail/{id}', name: 'app_prospect_adm_generate_mail')]
    public function genereMAil(Prospect $prospect, Request $request, MailerInterface $mailer)
    {
        $form = $this->createForm(ProspectMaileType::class, null, [
            'email_prospect' => $prospect->getEmail()
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $datasProspect = $form->getData();
            $email = (new Email())
                ->from($this->getParameter('app.mail_developper'))
                ->to('jonathan@jja-dev.fr') //$prospect->getEmail()
                ->subject($datasProspect['subject'])
                ->text($datasProspect['content'])
                ->html($this->renderView('prospect/admin/email.html.twig', ['content' => $datasProspect['content']]));

            try {
                $mailer->send($email);
            } catch (TransportExceptionInterface $e) {
                $this->addFlash('warning', ['modals', $e]);
            }
            $this->addFlash('succes', ['toats', 'app.send.mail']);
            return $this->redirectToRoute('app_prospect_adm_index');
        }

        return $this->render('prospect/admin/generate_mail.html.twig', [
            'form' => $form
        ]);
    }    #[Route('/generate-prompt', name: 'generate_prompt')]
    public function generatePrompt(Request $request): Response
    {
        $yourApiKey = getenv('OPENAI_API_KEY');
        if (!$yourApiKey) {
            return new JsonResponse(['error' => 'OpenAI API key not configured'], 500);
        }
        
        $orgId = getenv('OPENAI_ORG_ID');
        $client = OpenAI::client($yourApiKey, $orgId);
        
        $result = $client->completions()->create([
            'model' => 'gpt-3.5-turbo-instruct',
            'prompt' => 'PHP is',
        ]);

        return new JsonResponse(['response' => $result]);
    }
}
