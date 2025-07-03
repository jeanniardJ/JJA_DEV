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

use App\Form\ConfigTemplateType;
use App\Model\ConfigTemplateDesc;
use App\Model\ConfigTemplatePresentation;
use App\Model\ConfigTemplateService;
use App\Repository\ConfigTemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class ConfigTemplateAdminController.
 *
 * @autor JJA-DEV
 *
 * @license JJA DEV © 2021 par Jeanniard Jonathan sous licence CC BY-NC-ND 4.0.
 * Pour voir une copie de cette licence, visitez https://creativecommons.org/licenses/by-nc-nd/4.0/
 *
 * @see https://jja-dev.fr
 */
#[Route('/admin/config/template')]
class ConfigTemplateAdminController extends AbstractController
{
    #[Route('/', name: 'app_config_template_admin')]
    public function index(ConfigTemplateRepository $configTemplateRepository, Request $request, EntityManagerInterface $entityManagerInterface, SerializerInterface $serializerInterface): Response
    {
        $presentation = $configTemplateRepository->findOneBy(['name' => 'presentation']);
        $description = $configTemplateRepository->findOneBy(['name' => 'description']);
        $servicesDatas = $configTemplateRepository->findOneBy(['name' => 'services']);

        $presentationUnserialise = null;
        $descriptionUnserialise = null;
        $servicesUnserialise = null;
        if (null !== $presentation) {
            $presentationUnserialise = $serializerInterface->deserialize(json_encode($presentation->getValue()), ConfigTemplatePresentation::class, 'json');
        }
        if (null !== $description) {
            $descriptionUnserialise = $serializerInterface->deserialize(json_encode($description->getValue()), ConfigTemplateDesc::class, 'json');
        }
        if (null !== $servicesDatas) {
            $servicesUnserialise = $serializerInterface->deserialize(json_encode($servicesDatas->getValue()), ConfigTemplateService::class.'[]', 'json');
        }

        $form = $this->createForm(ConfigTemplateType::class, [
            'presentation' => $presentationUnserialise,
            'description' => $descriptionUnserialise,
            'services' => $servicesUnserialise,
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $presentationSubmit = $form->get('presentation')->getData();
            $descriptionSubmit = $form->get('description')->getData();
            $servicesSubmit = $form->get('services')->getData();

            if (null !== $presentation) {
                $decoded = json_decode($serializerInterface->serialize($presentationSubmit, 'json'), true);
                $presentation->setValue(is_array($decoded) ? $decoded : []);
                $entityManagerInterface->persist($presentation);
            }
            if (null !== $description) {
                $decoded = json_decode($serializerInterface->serialize($descriptionSubmit, 'json'), true);
                $description->setValue(is_array($decoded) ? $decoded : []);
                $entityManagerInterface->persist($description);
            }
            if (null !== $servicesDatas) {
                $decoded = json_decode($serializerInterface->serialize($servicesSubmit, 'json'), true);
                $servicesDatas->setValue(is_array($decoded) ? $decoded : []);
                $entityManagerInterface->persist($servicesDatas);
            }

            $entityManagerInterface->flush();

            $this->addFlash('success', ['toast', 'admin.template.success']);

            return $this->redirectToRoute('app_config_template_admin');
        }

        return $this->render('admin/template/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
