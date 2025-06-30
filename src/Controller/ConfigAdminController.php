<?php

/**
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site web ne peut être reproduit, affiché, modifié ou distribué sans la permission écrite préalable du titulaire du droit d'auteur.
 * Ce site web, son contenu et tous les produits créés par JJA DEV sont protégés par les lois sur les droits d'auteur et la propriété intellectuelle. Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site, y compris, mais sans s'y limiter, le texte, les images, les dessins, les graphiques, les logos et les marques de commerce, peut constituer une violation des lois sur le droit d'auteur, des lois sur les marques de commerce ou d'autres lois applicables et peut entraîner des poursuites judiciaires.
 *
 * Pour obtenir la permission d'utiliser du contenu de ce site, veuillez contacter JJA DEV.
 *
 * Merci de votre compréhension et de votre respect envers notre travail créatif et nos droits de propriété intellectuelle.
 *
 * @category Controller
 * @package  App\Controller
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 by Jeanniard Jonathan is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */

namespace App\Controller;

use App\Entity\Config;

use App\Model\ConfigAnalyse;
use App\Model\ConfigGeneral;
use App\Model\ConfigPropriety;
use App\Model\ConfigSeo;
use App\Model\ConfigSocial;

use App\Form\ConfigAnalyseType;
use App\Form\ConfigGeneralType;
use App\Form\ConfigProprietyType;
use App\Form\ConfigSeoType;
use App\Form\ConfigSocialType;
use App\Repository\ConfigRepository;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class ConfigAdminController
 *
 * @category Controller
 * @package  App\Controller
 * @author   JJA-DEV
 * @license  JJA DEV © 2021 by Jeanniard Jonathan is licensed under CC BY-NC-ND 4.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/4.0/
 * @link     https://jja-dev.fr
 */
#[Route('/admin/config')]
class ConfigAdminController extends AbstractController
{
    #[Route('/', name: 'app_config_adm_index', methods: ['GET', 'POST'])]
    public function index(Request $request, ConfigRepository $configRepository, EntityManagerInterface $entityManager, SerializerInterface $serializer, string $uploadImagesDirectory): Response
    {
        $config = $configRepository->findOneByName('site');
        $configGeneral = null;

        if ($config === null) {
            if (!$request->isMethod('POST')) {
                $this->addFlash('danger', ['toast', 'La configuration générale n\'est pas encore définie.']);
            }
            $config = new Config();
            $config->setName('site');
            $configGeneral = new ConfigGeneral();
        }

        if (!empty($config->getValue())) {
            $configGeneral = $serializer->deserialize(json_encode($config->getValue()), ConfigGeneral::class, 'json');
        }

        $form = $this->createForm(ConfigGeneralType::class, $configGeneral);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $logoFile = $form->get('logo')->getData();
            $faviconFile = $form->get('favicon')->getData();

            if ($logoFile) {
                $newFilename = 'logo.' . $logoFile->guessExtension();

                try {
                    $logoFile->move(
                        $uploadImagesDirectory,
                        $newFilename
                    );
                } catch (FileException $e) {
                    $this->addFlash('danger', ['toast', 'Erreur lors de l\'upload du logo.']);
                }

                $configGeneral->setLogo($uploadImagesDirectory . '/' . $newFilename);
            }

            if ($faviconFile) {
                $newFilename = 'favicon.' . $faviconFile->guessExtension();

                try {
                    $faviconFile->move(
                        $uploadImagesDirectory,
                        $newFilename
                    );
                } catch (FileException $e) {
                    $this->addFlash('danger', ['toast', 'Erreur lors de l\'upload du favicon.']);
                }

                $configGeneral->setFavicon($uploadImagesDirectory . '/' . $newFilename);
            }

            $json = $serializer->serialize($form->getData(), 'json');

            $config->setValue(json_decode($json, true));

            $entityManager->persist($config);
            $entityManager->flush();

            $this->addFlash('success', ['toast', 'Configuration enregistrée avec succès.']);
        }


        return $this->render('admin/config/index.html.twig', [
            'formGeneral' => $form->createView(),
            'imgLogo' => $configGeneral->getLogo() ?? '',
            'imgFavicon' => $configGeneral->getFavicon() ?? '',
        ]);
    }

    #[Route('/propriety', name: 'app_config_adm_propriety', methods: ['GET', 'POST'])]
    public function propriety(Request $request, ConfigRepository $configRepository, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {
        $form = $this->manageForm(ConfigProprietyType::class, $configRepository, $entityManager, 'propriety', ConfigPropriety::class, $request, $serializer);

        return $this->render('admin/config/propriety.html.twig', [
            'formPropriety' => $form->createView(),
        ]);
    }

    #[Route('/social', name: 'app_config_adm_social', methods: ['GET', 'POST'])]
    public function social(Request $request, ConfigRepository $configRepository, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    {
        $form = $this->manageForm(ConfigSocialType::class, $configRepository, $entityManager, 'social', ConfigSocial::class, $request, $serializer);

        return $this->render('admin/config/social.html.twig', [
            'formSocial' => $form->createView(),
        ]);
    }

    /*    #[Route('/seo', name: 'app_config_adm_seo', methods: ['GET', 'POST'])]
        public function seo(Request $request, ConfigRepository $configRepository, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
        {
            $config = $configRepository->findOneBy(['name' => 'configSeo']);
            $configSeo = null;

            if ($config === null) {
                if(!$request->isMethod('POST')) {
                    $this->addFlash('danger', ['toast', 'La configuration SEO n\'est pas encore définie.']);
                }
                $config = new Config();
                $config->setName('configSeo');
                $configSeo = new ConfigSeo();
            }

            if (!empty($config->getValue())) {
                $configSeo = $serializer->deserialize(json_encode($config->getValue()), ConfigSeo::class, 'json');
            }

            $form = $this->createForm(ConfigSeoType::class, $configSeo);

            $form->handleRequest($request);

            if ($form->isSubmitted() && $form->isValid()) {
                $json = $serializer->serialize($form->getData(), 'json');
                $config->setValue(json_decode($json, true));

                $entityManager->persist($config);
                $entityManager->flush();

                $this->addFlash('success', ['toast', 'Configuration enregistrée avec succès.']);
            }

            return $this->render('admin/config/seo.html.twig', [
                'formSeo' => $form->createView(),
            ]);
        }*/

    //    #[Route('/analytics', name: 'app_config_adm_analyse', methods: ['GET', 'POST'])]
    //    public function analyse(Request $request, ConfigRepository $configRepository, EntityManagerInterface $entityManager, SerializerInterface $serializer): Response
    //    {
    //        $form = $this->manageForm(ConfigAnalyseType::class, $configRepository, $entityManager, 'analyse', ConfigAnalyse::class, $request, $serializer);
    //
    //        return $this->render('admin/config/analyse.html.twig', [
    //            'formAnalyse' => $form->createView(),
    //        ]);
    //    }

    /**
     * @param $form
     * @param $configRepository
     * @param $entityManager
     * @param $configName
     * @param $classConfig
     * @param $request
     * @param $serializer
     * @return mixed
     */
    private function manageForm($form, $configRepository, $entityManager, $configName, $classConfig, $request, $serializer): mixed
    {
        $config = $configRepository->findOneByName($configName);

        $configEntity = null;

        if ($config === null) {
            if (!$request->isMethod('POST')) {
                $this->addFlash('danger', ['toast', 'La configuration n\'est pas encore définie.']);
            }
            $config = new Config();
            $config->setName($configName);
            $configEntity = new $classConfig();
        }

        if (!empty($config->getValue())) {
            $configEntity = $serializer->deserialize(json_encode($config->getValue()), $classConfig, 'json');
        }

        $form = $this->createForm($form, $configEntity);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $json = $serializer->serialize($form->getData(), 'json');
            $config->setValue(json_decode($json, true));

            $entityManager->persist($config);
            $entityManager->flush();

            $this->addFlash('success', ['toast', 'Configuration enregistrée avec succès.']);
        }

        return $form;
    }
}
