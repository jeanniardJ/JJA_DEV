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
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @see     https://jja-dev.fr
 */

namespace App\Controller;

use App\Entity\User;
use App\Form\UserAdminType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Class UserAdminController.
 *
 * @category Controller
 *
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @see     https://jja-dev.fr
 */
#[Route('/admin/user')]
class UserAdminController extends AbstractController
{
    #[Route('/', name: 'app_user_adm_index')]
    public function index(): Response
    {
        return $this->render('user/admin/index.html.twig');
    }

    public function userBlock(UserRepository $userRepository)
    {
        return $this->render('user/admin/block/index.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    #[Route('/json/{search?}{offset?}{limit?}', name: 'app_user_adm_index_json')]
    public function dataUser(Request $request, UserRepository $userRepository, TranslatorInterface $translator): Response
    {
        if (!$request->isXmlHttpRequest()) {
            return $this->redirectToRoute('app_user_adm_index');
        }

        $offset = max(0, $request->query->getInt('offset', 0));
        $limit = $request->query->getInt('limit', 10);
        $search = $request->query->getString('search');
        $sort = $request->query->getString('sort');
        $order = $request->query->getString('order');

        $countUsers = count($userRepository->findAll());

        $users = $userRepository->findByTable($limit, $offset, $search, $sort, $order);

        $transEdit = $translator->trans('admin.edit', [], 'user');
        $usersData = [];

        foreach ($users as $user) {
            $urlEdit = $this->generateUrl('app_user_adm_edit', ['id' => $user['id']]);

            $usersData[] = [
                'id' => $user['id'],
                'username' => $user['username'],
                'email' => $user['email'],
                'isVerified' => $user['isVerified'],
                'actions' => "<a class=\"shadow-sm btn btn-secondary btn-sm\"
                           href='$urlEdit'><i class=\"bi bi-pen-fill\"></i> $transEdit</a>",
            ];
        }

        return $this->json(['total' => $countUsers, 'rows' => $usersData]);
    }

    #[Route('/{id}', name: 'app_user_adm_show', methods: ['GET'])]
    public function show(User $user): Response
    {
        return $this->render('user/admin/show.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_user_adm_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserAdminType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();
            $this->addFlash('success', ['toast', 'admin.update.success']);

            return $this->redirectToRoute('app_user_adm_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('user/admin/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}/delete', name: 'app_user_adm_delete', methods: ['POST'])]
    public function delete(Request $request, $id, EntityManagerInterface $entityManager): Response
    {
        $user = $entityManager->getRepository(User::class)->findOneBy(['id' => $id]);

        if (!$user) {
            $this->addFlash('danger', ['toast', 'admin.delete.noexit']);

            return $this->redirectToRoute('app_user_adm_index');
        }

        if ($this->isCsrfTokenValid('delete'.$user->getId(), $request->request->get('_token'))) {
            $this->addFlash('warning', ['toast', 'admin.delete.success']);
            $entityManager->remove($user);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_user_adm_index', [], Response::HTTP_SEE_OTHER);
    }
}
