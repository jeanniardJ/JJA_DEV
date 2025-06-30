<?php
/**
 * MIT License.
 *
 * Copyright (c) 2023 JJA-DEV
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @category Service
 *
 * @author   JJA-DEV
 * @license  MIT <https://opensource.org/licenses/MIT>
 *
 * @see      https://jja-dev.fr
 */

namespace App\Service;

use Github\AuthMethod;
use Github\Client;
use Github\Exception\RuntimeException;
use Psr\Log\LoggerInterface;

class GithubService
{
    private string $username;
    private Client $client;
    private LoggerInterface $logger;

    public function __construct(Client $client, LoggerInterface $logger, string $githubToken)
    {
        $this->client = $client;
        $this->logger = $logger;
        $this->username = $_ENV['GITHUB_USERNAME'] ?? 'default_username';

        // Modification de la méthode d'authentification
        $this->client->authenticate($githubToken, null, AuthMethod::ACCESS_TOKEN);
    }

    /**
     * Liste les repositories publics de l'utilisateur.
     *
     * @return array<mixed>
     */
    public function getRepositoriesUser(int $page = 1): array
    {
        try {
            $repos = $this->client->user()->repositories($this->username, 'owner', 'created');
            $filtered = array_filter($repos, fn ($repo) => 'Bundle' === substr($repo['name'], -6));

            return array_values($filtered);
        } catch (RuntimeException $e) {
            $this->logger->error('Erreur récupération repositories GitHub', ['exception' => $e]);

            return [];
        }
    }

    /**
     * Détail d'un repository par nom.
     *
     * @return array<mixed>|null
     */
    public function getRepositoryByName(string $repo): ?array
    {
        try {
            return $this->client->repo()->show($this->username, $repo);
        } catch (RuntimeException $e) {
            $this->logger->error('Erreur récupération repository GitHub', ['repo' => $repo, 'exception' => $e]);

            return null;
        }
    }

    /**
     * Récupère les derniers commits d'un repo GitHub.
     *
     * @return array<mixed>
     */
    public function getLastCommits(string $repo, int $limit = 10): array
    {
        try {
            /** @var array<mixed> $commits */ // Typage explicite pour PHPStan
            $commits = $this->client->repo()->commits()->all($this->username, $repo, ['per_page' => $limit]);
            $result = [];
            foreach ($commits as $commit) {
                if (!is_array($commit) || !isset($commit['commit']) || !is_array($commit['commit'])) {
                    continue;
                }
                $commitData = $commit['commit'];
                $fullMessage = $commitData['message'] ?? '';
                // Limiter le message à 80 caractères pour l'affichage
                $shortMessage = strlen($fullMessage) > 70 ? substr($fullMessage, 0, 66).' ...' : $fullMessage;

                $result[] = [
                    'sha' => $commit['sha'] ?? null,
                    'message' => $shortMessage,
                    'full_message' => substr($fullMessage, 0, 250).' ...', // Message complet disponible si nécessaire
                    'author' => $commitData['author']['name'] ?? '',
                    'date' => $commitData['author']['date'] ?? '',
                    'url' => $commit['html_url'] ?? '',
                ];
            }

            return $result;
        } catch (RuntimeException $e) {
            $this->logger->error('Erreur récupération commits GitHub', ['repo' => $repo, 'exception' => $e]);

            return [];
        }
    }

    /**
     * Récupère les issues Roadmap du repo principal (label 'roadmap').
     *
     * @return array<mixed>
     */
    public function getRoadmapIssues(string $repo, int $limit = 10): array
    {
        try {
            $issues = $this->fetchIssues($repo, $limit);

            return $this->formatIssues($issues);
        } catch (\Exception $e) {
            return ['error' => 'Erreur lors de la récupération des issues : '.$e->getMessage()];
        }
    }

    /**
     * Récupère les issues d'un repository GitHub.
     *
     * @param string $repo  nom du repository
     * @param int    $limit nombre maximum d'issues à récupérer
     *
     * @return array<int, array<string, mixed>> liste des issues
     */
    private function fetchIssues(string $repo, int $limit): array
    {
        $allItems = $this->client->issues()->all($this->username, $repo, [
            'state' => 'open',
            'per_page' => $limit * 2, // Récupérer plus pour compenser les PRs filtrées
        ]);

        // Filtrer pour ne garder que les vraies issues (pas les pull requests)
        $issues = array_filter($allItems, function ($item) {
            return !isset($item['pull_request']);
        });

        // Limiter au nombre demandé
        return array_slice(array_values($issues), 0, $limit);
    }

    /**
     * Formate les issues pour l'affichage.
     *
     * @param array<int, array<string, mixed>> $issues liste des issues à formater
     *
     * @return array<int, array<string, mixed>> liste des issues formatées
     */
    private function formatIssues(array $issues): array
    {
        return array_map(function (array $issue): array {
            $milestone = isset($issue['milestone']) && is_array($issue['milestone']) ? $issue['milestone'] : [];
            $labels = isset($issue['labels']) && is_array($issue['labels']) ? $issue['labels'] : [];

            $body = $issue['body'] ?? '';
            $description = '';
            if (is_string($body)) {
                // Supprimer le formatage Markdown
                $cleanBody = $this->removeMarkdownFormatting($body);
                $description = substr($cleanBody, 0, 250).'...';
            }

            return [
                'title' => is_string($issue['title'] ?? null) ? $issue['title'] : '',
                'status' => is_string($issue['state'] ?? null) ? $issue['state'] : '',
                'timeline' => is_string($milestone['due_on'] ?? null) ? $milestone['due_on'] : (is_string($issue['created_at'] ?? null) ? $issue['created_at'] : ''),
                'description' => $description,
                'url' => is_string($issue['html_url'] ?? null) ? $issue['html_url'] : null,
                'labels' => array_map(fn (array $label): string => is_string($label['name'] ?? null) ? $label['name'] : '', $labels),
            ];
        }, $issues);
    }

    /**
     * Supprime le formatage Markdown d'un texte.
     *
     * @param string $text texte avec formatage Markdown
     *
     * @return string texte sans formatage Markdown
     */
    private function removeMarkdownFormatting(string $text): string
    {
        // Supprimer les liens [texte](url)
        $text = preg_replace('/\[([^\]]+)\]\([^)]+\)/', '$1', $text) ?? $text;

        // Supprimer les images ![alt](url)
        $text = preg_replace('/!\[([^\]]*)\]\([^)]+\)/', '$1', $text) ?? $text;

        // Supprimer les titres # ## ### etc.
        $text = preg_replace('/^#{1,6}\s+(.+)$/m', '$1', $text) ?? $text;

        // Supprimer le formatage gras **texte** ou __texte__
        $text = preg_replace('/(\*\*|__)(.*?)\1/', '$2', $text) ?? $text;

        // Supprimer l'italique *texte* ou _texte_
        $text = preg_replace('/(\*|_)(.*?)\1/', '$2', $text) ?? $text;

        // Supprimer le code inline `code`
        $text = preg_replace('/`([^`]+)`/', '$1', $text) ?? $text;

        // Supprimer les blocs de code ```
        $text = preg_replace('/```[\s\S]*?```/', '', $text) ?? $text;

        // Supprimer les citations >
        $text = preg_replace('/^>\s+(.+)$/m', '$1', $text) ?? $text;

        // Supprimer les listes - ou *
        $text = preg_replace('/^[\s]*[-\*]\s+(.+)$/m', '$1', $text) ?? $text;

        // Supprimer les listes numérotées
        $text = preg_replace('/^\d+\.\s+(.+)$/m', '$1', $text) ?? $text;

        // Supprimer les lignes horizontales ---
        $text = preg_replace('/^-{3,}$/m', '', $text) ?? $text;

        // Nettoyer les espaces multiples et les sauts de ligne
        $text = preg_replace('/\s+/', ' ', $text) ?? $text;

        return trim($text);
    }
}
