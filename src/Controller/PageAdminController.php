<?php

namespace App\Controller;

use App\Entity\Page;
use App\Form\PageType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/admin/page')]
class PageAdminController extends AbstractController
{
    #[Route('/', name: 'app_page_adm_index')]
    public function index(): Response
    {
        return $this->render('page/admin/index.html.twig', [
        ]);
    }

    #[Route('/new', name: 'app_page_adm_new')]
    public function new(Request $request): Response
    {
        $page = new Page();
        $form = $this->createForm(PageType::class, $page);

        if ($form->isSubmitted() && $form->isValid()) {
        }

        return $this->render('page/admin/new.html.twig', [
            'form' => $form,
        ]);
    }

    public function edit()
    {
    }

    public function delete()
    {
    }
}
