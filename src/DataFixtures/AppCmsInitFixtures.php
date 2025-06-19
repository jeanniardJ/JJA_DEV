<?php

namespace App\DataFixtures;

use App\Entity\Config;
use App\Entity\ConfigTemplate;
use App\Entity\Status;
use App\Entity\Role;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;

/**
 * Fixture pour l'initialisation du CMS JJA_DEV
 * Données de base nécessaires au fonctionnement du système
 */
class AppCmsInitFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        // Configuration de base du site
        $configs = [
            ['name' => 'site_name', 'value' => ['JJA-DEV CMS']],
            ['name' => 'site_description', 'value' => ['Système de gestion de contenu pour développeurs']],
            ['name' => 'admin_email', 'value' => ['admin@jja-dev.fr']],
            ['name' => 'default_language', 'value' => ['fr']],
            ['name' => 'timezone', 'value' => ['Europe/Paris']],
            ['name' => 'maintenance_mode', 'value' => [false]],
        ];

        foreach ($configs as $configData) {
            $config = new Config();
            $config->setName($configData['name']);
            $config->setValue($configData['value']);
            $manager->persist($config);
        }

        // Templates de configuration par défaut
        $templates = [
            [
                'name' => 'default_page_template',
                'value' => [
                    'layout' => 'base.html.twig',
                    'sections' => ['header', 'content', 'footer'],
                    'meta' => ['charset' => 'utf-8', 'viewport' => 'width=device-width, initial-scale=1']
                ]
            ],
            [
                'name' => 'email_template',
                'value' => [
                    'from' => 'noreply@jja-dev.fr',
                    'layout' => 'emails/base.html.twig',
                    'signature' => 'L\'équipe JJA-DEV'
                ]
            ]
        ];

        foreach ($templates as $templateData) {
            $template = new ConfigTemplate();
            $template->setName($templateData['name']);
            $template->setValue($templateData['value']);
            $manager->persist($template);
        }

        // Statuts par défaut pour le CRM
        $statuses = [
            ['name' => 'Nouveau', 'description' => 'Contact nouvellement créé'],
            ['name' => 'En cours', 'description' => 'Contact en cours de qualification'],
            ['name' => 'Qualifié', 'description' => 'Contact qualifié, prêt pour la vente'],
            ['name' => 'Fermé', 'description' => 'Affaire conclue avec succès'],
            ['name' => 'Perdu', 'description' => 'Affaire perdue ou abandonnée'],
        ];

        foreach ($statuses as $statusData) {
            $status = new Status();
            $status->setName($statusData['name']);
            $status->setDescription($statusData['description']);
            $manager->persist($status);
        }

        // Rôles utilisateur par défaut
        $roles = [
            ['name' => 'ROLE_SUPER_ADMIN', 'secondName' => 'Super Administrateur'],
            ['name' => 'ROLE_ADMIN', 'secondName' => 'Administrateur'],
            ['name' => 'ROLE_EDITOR', 'secondName' => 'Éditeur'],
            ['name' => 'ROLE_USER', 'secondName' => 'Utilisateur'],
        ];

        foreach ($roles as $roleData) {
            $role = new Role();
            $role->setName($roleData['name']);
            $role->setSecondName($roleData['secondName']);
            $manager->persist($role);
        }

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['cms-init'];
    }
}
