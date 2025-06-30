<?php

namespace App\Tests\Service;

use App\Service\GithubService;
use Github\Client;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

// Stub dynamique pour simuler les sous-APIs dynamiques de KnpLabs
class GithubClientStub extends Client
{
    private array $apis;

    public function __construct(array $apis)
    {
        $this->apis = $apis;
    }

    public function __call($name, $args): \Github\Api\AbstractApi
    {
        if (isset($this->apis[$name])) {
            return $this->apis[$name];
        }
        throw new \BadMethodCallException("API '$name' non stubée");
    }
}

class DummyLogger implements \Psr\Log\LoggerInterface
{
    public function emergency(string|\Stringable $message, array $context = []): void {}
    public function alert(string|\Stringable $message, array $context = []): void {}
    public function critical(string|\Stringable $message, array $context = []): void {}
    public function error(string|\Stringable $message, array $context = []): void {}
    public function warning(string|\Stringable $message, array $context = []): void {}
    public function notice(string|\Stringable $message, array $context = []): void {}
    public function info(string|\Stringable $message, array $context = []): void {}
    public function debug(string|\Stringable $message, array $context = []): void {}
    public function log($level, string|\Stringable $message, array $context = []): void {}
}

class GithubServiceTest extends TestCase
{
    public function testGetRepositoriesOrgReturnsFilteredRepos()
    {
        $fakeClient = new Client();
        $orgApi = new class($fakeClient) extends \Github\Api\AbstractApi {
            public function __construct($client)
            {
                parent::__construct($client);
            }
            public function repositories($org, $type, $page)
            {
                return [
                    ['name' => 'BlogBundle'],
                    ['name' => 'NotABundleX'],
                    ['name' => 'InvoiceBundle'],
                ];
            }
        };
        $client = new class($orgApi) extends Client {
            private $orgApi;
            public function __construct($orgApi)
            {
                $this->orgApi = $orgApi;
            }
            public function __call($name, $args): \Github\Api\AbstractApi
            {
                if ($name === 'organization') return $this->orgApi;
                throw new \BadMethodCallException();
            }
        };
        $logger = new DummyLogger();
        $service = new GithubService($client, $logger);
        $repos = $service->getRepositoriesOrg();
        $this->assertCount(2, $repos);
        $this->assertEquals('BlogBundle', $repos[0]['name']);
        $this->assertEquals('InvoiceBundle', $repos[1]['name']);
    }

    public function testGetRepositoryByNameReturnsRepo()
    {
        $fakeClient = new Client();
        $repoApi = new class($fakeClient) extends \Github\Api\AbstractApi {
            public function __construct($client)
            {
                parent::__construct($client);
            }
            public function show($org, $repo)
            {
                return [
                    'name' => $repo,
                    'org' => $org,
                ];
            }
        };
        $client = new GithubClientStub(['repo' => $repoApi]);
        $logger = new DummyLogger();
        $service = new GithubService($client, $logger);
        $repo = $service->getRepositoryByName('BlogBundle');
        $this->assertEquals('BlogBundle', $repo['name']);
        $this->assertEquals('JJA-DEV-FR', $repo['org']);
    }

    public function testGetLastCommitsReturnsCommits()
    {
        $fakeClient = new Client();
        $repoApi = new class($fakeClient) extends \Github\Api\AbstractApi {
            public function __construct($client)
            {
                parent::__construct($client);
            }
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
        $client = new GithubClientStub(['repo' => $repoApi]);
        $logger = new DummyLogger();
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
