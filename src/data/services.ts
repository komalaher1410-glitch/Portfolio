import type { Service } from '../types';

export const services: Service[] = [
  {
    title: 'Frontend Development',
    description: 'Build polished, responsive web experiences with modern frontend architecture.',
    icon: 'FaLaptopCode',
    highlights: ['React.js applications', 'Mobile-first design', 'Tailwind CSS styling']
  },
  {
    title: 'React.js Development',
    description: 'Create dynamic user interfaces with React Hooks, component patterns, and clean state flow.',
    icon: 'FaCode',
    highlights: ['React Hooks', 'Dynamic rendering', 'Local storage workflows']
  },
  {
    title: 'API Integration',
    description: 'Connect apps to REST APIs for realtime data, weather lookups, and booking workflows.',
    icon: 'FaServer',
    highlights: ['REST API integration', 'Dynamic data handling', 'Production demos']
  },
  {
    title: 'Deployment & Launch',
    description: 'Deploy frontend applications to GitHub Pages and Vercel with robust release workflows.',
    icon: 'FaPalette',
    highlights: ['GitHub Pages', 'Vercel hosting', 'Deployment-ready apps']
  }
];
