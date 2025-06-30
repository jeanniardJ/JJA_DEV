<?php

namespace App\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class HomeControllerTest extends WebTestCase
{
    public function testIndexPageRendersCorrectly(): void
    {
        $client = static::createClient();

        // Tester la page d'accueil
        $crawler = $client->request('GET', '/');

        // Vérifier que la page se charge sans erreur
        $this->assertResponseIsSuccessful();

        // Vérifier que les sections GitHub sont présentes dans le HTML
        $this->assertSelectorExists('section#roadmap');
        $this->assertSelectorExists('section#github-commits');

        // Vérifier que les titres des sections sont présents
        $this->assertSelectorTextContains('h3', 'Roadmap');
        $this->assertSelectorTextContains('h3', 'Latest GitHub Commits');
    }

    public function testGithubServiceIsAccessible(): void
    {
        $client = static::createClient();

        // Récupérer le service du container
        $githubService = static::getContainer()->get(\App\Service\GithubService::class);

        $this->assertInstanceOf(\App\Service\GithubService::class, $githubService);
    }
}
