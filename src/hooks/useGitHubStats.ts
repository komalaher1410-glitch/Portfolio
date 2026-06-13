import { useEffect, useState } from 'react';
import type { GitHubStats } from '../types';

const defaultStats: GitHubStats = {
  username: 'komalaher1410-glitch',
  followers: 0,
  publicRepos: 0,
  totalStars: 0,
  topLanguages: [],
  contributionsChartUrl: 'https://ghchart.rshah.org/komalaher1410-glitch',
  streakStatsUrl: 'https://github-readme-streak-stats.herokuapp.com/?user=komalaher1410-glitch&theme=dark&hide_border=true',
  profileUrl: 'https://github.com/komalaher1410-glitch'
};

export default function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats>(defaultStats);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('GitHub profile not available');
        const userData = await userResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('GitHub repositories not available');
        const repoData = (await reposResponse.json()) as any[];

        const languageMap = repoData.reduce((map: Record<string, number>, repo: any) => {
          if (repo.language) map[repo.language] = (map[repo.language] || 0) + 1;
          return map;
        }, {});

        const topLanguages = (Object.entries(languageMap) as [string, number][]) 
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([language]) => language);

        const totalStars = repoData.reduce((total: number, repo: any) => total + (repo.stargazers_count || 0), 0);

        setStats({
          ...defaultStats,
          username,
          followers: userData.followers,
          publicRepos: userData.public_repos,
          totalStars,
          topLanguages,
          profileUrl: userData.html_url
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load GitHub stats');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, loading, error };
}
