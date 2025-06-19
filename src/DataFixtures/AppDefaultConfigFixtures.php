<?php

namespace App\DataFixtures;

use App\Entity\Config;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Bundle\FixturesBundle\FixtureGroupInterface;
use Doctrine\Persistence\ObjectManager;

/**
 * Fixture pour les configurations par défaut du CMS JJA_DEV
 * Contient les paramètres de site, propriétés, analyse et réseaux sociaux
 */
class AppDefaultConfigFixtures extends Fixture implements FixtureGroupInterface
{
    public function load(ObjectManager $manager): void
    {
        // Configuration principale du site
        $siteConfig = [
            'url' => 'https://jja-dev.fr',
            'logo' => 'build/images/jja-dev-logo.png',
            'name' => 'JJA-DEV',
            'title' => 'JJA-DEV - Développement Web sur Mesure',
            'favicon' => 'build/images/favicon.ico',
            'keywords' => 'développement web, site sur mesure, application web, e-commerce, Bourgogne-Franche-Comté',
            'description' => 'Spécialisé dans la conception et le développement de sites web et d\'applications sur mesure en Bourgogne-Franche-Comté'
        ];

        $site = new Config();
        $site->setName('site');
        $site->setValue($siteConfig);
        $manager->persist($site);

        // Informations de propriété/contact
        $proprietyConfig = [
            'city' => 'Besançon',
            'name' => 'JJA-DEV',
            'email' => 'contact@jja-dev.fr',
            'phone' => '03.81.XX.XX.XX',
            'siret' => null,
            'address' => 'Bourgogne-Franche-Comté',
            'country' => 'France',
            'zipCode' => '25000'
        ];

        $propriety = new Config();
        $propriety->setName('propriety');
        $propriety->setValue($proprietyConfig);
        $manager->persist($propriety);

        // Configuration des outils d'analyse
        $analyseConfig = [
            'google' => null,
            'twitter' => null,
            'facebook' => null,
            'linkedin' => null
        ];

        $analyse = new Config();
        $analyse->setName('analyse');
        $analyse->setValue($analyseConfig);
        $manager->persist($analyse);

        // Configuration des réseaux sociaux
        $socialConfig = [
            'twitterUrl' => null,
            'youtubeUrl' => null,
            'facebookUrl' => null,
            'linkedinUrl' => 'https://www.linkedin.com/company/jja-dev',
            'whatsappUrl' => null,
            'instagramUrl' => null
        ];

        $social = new Config();
        $social->setName('social');
        $social->setValue($socialConfig);
        $manager->persist($social);

        $manager->flush();
    }

    public static function getGroups(): array
    {
        return ['cms-config'];
    }
}
