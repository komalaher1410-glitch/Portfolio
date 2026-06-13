import { useEffect, useMemo, useState } from 'react';
import type { GitHubProject, ProjectCategory } from '../types';

const fallbackCategory = 'Frontend' as ProjectCategory;
const knownDemoUrls: Record<string, string> = {
  'komalA-portfolio': 'https://komalaher1410-glitch.github.io/komalA-portfolio/',
  'direct-farm-to-customer': 'https://komalaher1410-glitch.github.io/Direct-Farm-to-Customer/',
  'weather-app': 'https://komalaher1410-glitch.github.io/Weather-App/'
};

function formatTitle(name: string) {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (value) => value.toUpperCase())
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeCategory(repo: any): ProjectCategory {
  const name = repo.name.toLowerCase();
  const description = (repo.description || '').toLowerCase();
  const topics = (repo.topics || []).map((topic: string) => topic.toLowerCase());

  if (name.includes('portfolio') || description.includes('portfolio') || topics.includes('portfolio')) {
    return 'Portfolio';
  }
  if (name.includes('farm') || name.includes('localconnect') || description.includes('booking') || description.includes('firebase') || description.includes('map')) {
    return 'Full Stack';
  }
  if (name.includes('finance') || description.includes('dashboard') || description.includes('transactions') || description.includes('role-based')) {
    return 'Full Stack';
  }
  if (name.includes('weather') || description.includes('weather')) {
    return 'Frontend';
  }
  if (description.includes('react') || name.includes('react')) {
    return 'React';
  }
  if (description.includes('node') || description.includes('express') || description.includes('backend')) {
    return 'Backend';
  }
  if (description.includes('javascript') || description.includes('html') || description.includes('css')) {
    return 'JavaScript';
  }
  if (description.includes('ai') || name.includes('ai') || topics.includes('ai')) {
    return 'AI';
  }
  return fallbackCategory;
}

function extractTechnologies(repo: any) {
  const techSet = new Set<string>();

  if (repo.language) techSet.add(repo.language);
  if (repo.topics?.length) repo.topics.slice(0, 5).forEach((topic: string) => techSet.add(topic));

  const description = (repo.description || '').toLowerCase();
  if (description.includes('react')) techSet.add('React');
  if (description.includes('vite')) techSet.add('Vite');
  if (description.includes('tailwind')) techSet.add('Tailwind CSS');
  if (description.includes('firebase')) techSet.add('Firebase');
  if (description.includes('node')) techSet.add('Node.js');
  if (description.includes('express')) techSet.add('Express');
  if (description.includes('html')) techSet.add('HTML');
  if (description.includes('css')) techSet.add('CSS');
  if (description.includes('javascript')) techSet.add('JavaScript');
  if (description.includes('rest api') || description.includes('api')) techSet.add('REST API');
  if (description.includes('leaflet')) techSet.add('Leaflet');

  return Array.from(techSet).slice(0, 6);
}

function buildFeatures(repo: any) {
  const features: string[] = [];

  if (repo.homepage || knownDemoUrls[repo.name]) {
    features.push('Production-ready deployment');
  }
  if (repo.language) {
    features.push(`${repo.language} architecture`);
  }
  if (repo.topics?.length) {
    features.push(...repo.topics.slice(0, 3).map((topic: string) => `${topic.charAt(0).toUpperCase() + topic.slice(1)} focused`));
  }
  if (repo.description?.toLowerCase().includes('responsive')) {
    features.push('Responsive interface');
  }
  if (repo.description?.toLowerCase().includes('authentication')) {
    features.push('User authentication');
  }
  if (repo.description?.toLowerCase().includes('map')) {
    features.push('Interactive maps');
  }
  if (repo.archived) {
    features.push('Archived project');
  }

  if (!features.length) {
    features.push('Modern UI', 'Responsive design', 'Clean code structure');
  }

  return features;
}

function buildChallenges(repo: any) {
  const challenges: string[] = [];
  const description = (repo.description || '').toLowerCase();

  if (repo.name.toLowerCase().includes('portfolio')) {
    challenges.push('Designed a recruiter-friendly personal brand website.');
  }
  if (description.includes('api')) {
    challenges.push('Integrated REST API logic and dynamic data handling.');
  }
  if (description.includes('firebase')) {
    challenges.push('Built data persistence and authentication with Firebase.');
  }
  if (!challenges.length) {
    challenges.push('Created responsive user experiences for all screen sizes.');
    challenges.push('Delivered polished interactions with modern front-end patterns.');
  }

  return challenges;
}

function createScreenshotUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
}

function githubPagesUrl(username: string, name: string) {
  return `https://${username}.github.io/${name}/`;
}

async function inferDemoUrl(username: string, repo: any) {
  if (repo.homepage) return repo.homepage;

  const candidate = knownDemoUrls[repo.name] || githubPagesUrl(username, repo.name);
  try {
    const response = await fetch(candidate, { method: 'HEAD', redirect: 'follow' });
    return response.ok ? candidate : undefined;
  } catch {
    return undefined;
  }
}

function selectProjectImage(username: string, repo: any, demo?: string) {
  const imageSource = demo || repo.homepage || githubPagesUrl(username, repo.name) || repo.html_url;
  return createScreenshotUrl(imageSource);
}

function buildStatus(repo: any, demo?: string) {
  if (repo.archived) return 'Archived';
  if (demo) return 'Live';
  return 'Source Code Available';
}

function isFeaturedRepo(repo: any) {
  const name = repo.name.toLowerCase();
  return [
    'komala-portfolio',
    'komalA-portfolio'.toLowerCase(),
    'localconnect',
    'localconnect-pg',
    'direct-farm-to-customer',
    'finance_dashboard'
  ].some((keyword) => name.includes(keyword)) || repo.stargazers_count > 0;
}

export default function useGithubProjects(username: string) {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json',
            'User-Agent': 'portfolio-app'
          }
        });

        if (!response.ok) {
          throw new Error(`GitHub API error ${response.status}`);
        }

        const repos = await response.json();
        const mapped = await Promise.all(
          repos
            .filter((repo: any) => !repo.fork)
            .map(async (repo: any) => {
              const title = formatTitle(repo.name);
              const demo = await inferDemoUrl(username, repo);
              const technologies = extractTechnologies(repo);
              const image = selectProjectImage(username, repo, demo);
              return {
                title,
                description:
                  repo.description || 'A real project from GitHub showcasing production-quality web development work.',
                technologies,
                features: buildFeatures(repo),
                challenges: buildChallenges(repo),
                github: repo.html_url,
                demo,
                category: normalizeCategory(repo),
                status: buildStatus(repo, demo),
                stars: repo.stargazers_count,
                language: repo.language,
                archived: repo.archived,
                fork: repo.fork,
                homepage: repo.homepage,
                image,
                screenshots: demo ? [createScreenshotUrl(demo)] : [createScreenshotUrl(repo.html_url)],
                lastUpdated: repo.updated_at,
                topics: repo.topics || [],
                featured: isFeaturedRepo(repo)
              };
            })
        ) as GitHubProject[];

        setProjects(mapped);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unable to load GitHub projects');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const categories = useMemo(() => {
    return Array.from(new Set(['All', ...projects.map((project) => project.category)])) as ProjectCategory[];
  }, [projects]);

  return { projects, categories, loading, error };
}
