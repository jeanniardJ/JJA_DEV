<?php

namespace App\Tests\Service;

use App\Service\GithubService;
use Github\Client;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class GithubServiceTest extends TestCase
{
    public function testGetRepositoriesOrgReturnsFilteredRepos()
    {
        $orgApi = new class {
            public function repositories($org, $type, $page)
            {
                return [
                    ['name' => 'BlogBundle'],
                    ['name' => 'NotABundle'],
                    ['name' => 'InvoiceBundle'],
                ];
            }
        };
        $client = $this->createMock(Client::class);
        $client->method('organization')->willReturn($orgApi);
        $logger = $this->createMock(LoggerInterface::class);
        $service = new GithubService($client, $logger);
        $repos = $service->getRepositoriesOrg();
        $this->assertCount(2, $repos);
        $this->assertEquals('BlogBundle', $repos[0]['name']);
        $this->assertEquals('InvoiceBundle', $repos[1]['name']);
    }

    public function testGetRepositoryByNameReturnsRepo()
    {
        $repoApi = new class {
            public function show($org, $repo)
            {
                return [
                    'name' => $repo,
                    'org' => $org,
                ];
            }
        };
        $client = $this->createMock(Client::class);
        $client->method('repo')->willReturn($repoApi);
        $logger = $this->createMock(LoggerInterface::class);
        $service = new GithubService($client, $logger);
        $repo = $service->getRepositoryByName('BlogBundle');
        $this->assertEquals('BlogBundle', $repo['name']);
        $this->assertEquals('JJA-DEV-FR', $repo['org']);
    }

    public function testGetLastCommitsReturnsCommits()
    {
        $repoApi = new class {
            public function commits($org, $repo, $params)
            {
                return [
                    [
                        'sha' => 'abcdef1234567890',
                        'commit' => [
                            'message' => 'Initial commit',
                            'author' => [
                                'name' => 'John',
                                'date' => '2024-01-01T00:00:00Z'
                            ]
                        ],
                        'html_url' => 'https://github.com/JJA-DEV-FR/BlogBundle/commit/abcdef1'
                    ]
                ];
            }
        };
        $client = $this->createMock(Client::class);
        $client->method('repo')->willReturn($repoApi);
        $logger = $this->createMock(LoggerInterface::class);
        $service = new GithubService($client, $logger);
        $commits = $service->getLastCommits('BlogBundle');
        $this->assertCount(1, $commits);
        $this->assertEquals('Initial commit', $commits[0]['message']);
        $this->assertEquals('John', $commits[0]['author']);
        $this->assertEquals('2024-01-01T00:00:00Z', $commits[0]['date']);
        $this->assertEquals('abcdef1', $commits[0]['hash']);
        $this->assertEquals('https://github.com/JJA-DEV-FR/BlogBundle/commit/abcdef1', $commits[0]['url']);
    }
}
