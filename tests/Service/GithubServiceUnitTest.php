<?php

namespace App\Tests\Service;

use App\Service\GithubService;
use Github\Api\Issue;
use Github\Api\Repo;
use Github\Client;
use PHPUnit\Framework\TestCase;
use Psr\Log\LoggerInterface;

class MockLogger implements LoggerInterface
{
    public function emergency(\Stringable|string $message, array $context = []): void
    {
    }

    public function alert(\Stringable|string $message, array $context = []): void
    {
    }

    public function critical(\Stringable|string $message, array $context = []): void
    {
    }

    public function error(\Stringable|string $message, array $context = []): void
    {
    }

    public function warning(\Stringable|string $message, array $context = []): void
    {
    }

    public function notice(\Stringable|string $message, array $context = []): void
    {
    }

    public function info(\Stringable|string $message, array $context = []): void
    {
    }

    public function debug(\Stringable|string $message, array $context = []): void
    {
    }

    public function log($level, \Stringable|string $message, array $context = []): void
    {
    }
}

class GithubServiceUnitTest extends TestCase
{
    /**
     * @param array<int, array<string, mixed>> $issuesData
     * @param array<int, array<string, mixed>> $commitsData
     *
     * @return \PHPUnit\Framework\MockObject\MockObject|Client
     */
    private function createMockClient(array $issuesData = [], array $commitsData = [])
    {
        $client = $this->createMock(Client::class);

        // Mock Issue API
        $issueApi = $this->createMock(Issue::class);
        $issueApi->method('all')->willReturn($issuesData);

        // Mock Repo API
        $repoApi = $this->createMock(Repo::class);

        // Créer un mock pour l'API commits sans spécifier la classe exacte
        $commitsApi = $this->createMock(\Github\Api\AbstractApi::class);
        $commitsApi->method('all')->willReturn($commitsData);
        $repoApi->method('commits')->willReturn($commitsApi);

        $client->method('issues')->willReturn($issueApi);
        $client->method('repo')->willReturn($repoApi);
        $client->method('authenticate')->willReturn(null);

        return $client;
    }

    public function testGetRoadmapIssuesFiltersOutPullRequests(): void
    {
        $issuesData = [
            [
                'title' => 'Issue valide',
                'state' => 'open',
                'body' => 'Ceci est une issue',
                'html_url' => 'https://github.com/user/repo/issues/1',
                'created_at' => '2024-01-01T00:00:00Z',
                'labels' => [],
            ],
            [
                'title' => 'Pull Request',
                'state' => 'open',
                'body' => 'Ceci est une PR',
                'html_url' => 'https://github.com/user/repo/pull/2',
                'created_at' => '2024-01-01T00:00:00Z',
                'pull_request' => ['url' => 'https://api.github.com/repos/user/repo/pulls/2'],
                'labels' => [],
            ],
        ];

        $client = $this->createMockClient($issuesData);
        $logger = new MockLogger();
        $service = new GithubService($client, $logger, 'fake_token');

        $result = $service->getRoadmapIssues('test-repo', 10);

        $this->assertIsArray($result);
        $this->assertCount(1, $result);
        $this->assertEquals('Issue valide', $result[0]['title']);
        $this->assertEquals('open', $result[0]['status']);
    }

    public function testGetLastCommitsLimitsMessageLength(): void
    {
        $longMessage = str_repeat('a', 100);
        $commitsData = [
            [
                'sha' => 'abcd1234',
                'commit' => [
                    'message' => $longMessage,
                    'author' => [
                        'name' => 'John Doe',
                        'date' => '2024-01-01T00:00:00Z',
                    ],
                ],
                'html_url' => 'https://github.com/user/repo/commit/abcd1234',
            ],
        ];

        $client = $this->createMockClient([], $commitsData);
        $logger = new MockLogger();
        $service = new GithubService($client, $logger, 'fake_token');

        $result = $service->getLastCommits('test-repo', 1);

        $this->assertIsArray($result);
        $this->assertCount(1, $result);
        $this->assertLessThanOrEqual(80, strlen($result[0]['message']));
        $this->assertStringEndsWith('...', $result[0]['message']);
        $this->assertEquals($longMessage, $result[0]['full_message']);
    }

    public function testGetRoadmapIssuesHandlesError(): void
    {
        $client = $this->createMock(Client::class);
        $client->expects($this->any())
            ->method('issues')
            ->will($this->throwException(new \Exception('API Error')));
        $client->method('authenticate')->willReturn(null);

        $logger = new MockLogger();
        $service = new GithubService($client, $logger, 'fake_token');

        $result = $service->getRoadmapIssues('test-repo', 10);

        $this->assertIsArray($result);
        $this->assertArrayHasKey('error', $result);
        $this->assertStringContainsString('Erreur lors de la récupération des issues', $result['error']);
    }

    public function testGetLastCommitsHandlesEmptyResponse(): void
    {
        $client = $this->createMockClient([], []);
        $logger = new MockLogger();
        $service = new GithubService($client, $logger, 'fake_token');

        $result = $service->getLastCommits('test-repo', 10);

        $this->assertIsArray($result);
        $this->assertCount(0, $result);
    }
}
