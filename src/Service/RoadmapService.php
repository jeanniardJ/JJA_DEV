<?php

namespace App\Service;

class RoadmapService
{
    /**
     * Parse le fichier .github/ROADMAP.md et retourne les 3 premiers tickets structurés
     * @param string $roadmapPath
     * @param int $limit
     * @return array<mixed>
     */
    public function getTopRoadmapItems(string $roadmapPath, int $limit = 3): array
    {
        if (!file_exists($roadmapPath)) {
            return [];
        }
        $content = file_get_contents($roadmapPath);
        $items = [];
        $matches = [];
        // On extrait les sections de priorité
        preg_match_all('/### [^\n]+\n([\s\S]*?)(?=### |$)/', $content, $matches);
        foreach ($matches[0] as $section) {
            preg_match('/### ([^\n]+)/', $section, $titleMatch);
            $title = $titleMatch[1] ?? '';
            preg_match('/-   \*\*Status\*\* ?: ([^\n]+)/', $section, $statusMatch);
            $status = $statusMatch[1] ?? '';
            preg_match('/-   \*\*Timeline\*\* ?: ([^\n]+)/', $section, $timelineMatch);
            $timeline = $timelineMatch[1] ?? '';
            preg_match('/\*\*Objectifs :\*\*([\s\S]*?)(?=^### |$)/m', $section, $objMatch);
            $objectifs = [];
            if (!empty($objMatch[1])) {
                preg_match_all('/-   (.+)/', $objMatch[1], $objList);
                $objectifs = $objList[1] ?? [];
            }
            $items[] = [
                'title' => trim($title),
                'status' => trim($status),
                'timeline' => trim($timeline),
                'objectifs' => $objectifs,
            ];
        }
        return array_slice($items, 0, $limit);
    }
}
