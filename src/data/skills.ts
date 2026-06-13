import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    description: 'Production-quality frontend development for modern web applications.',
    skills: [
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 96 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'React.js', level: 94 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Responsive Web Design', level: 93 }
    ]
  },
  {
    title: 'React & JavaScript',
    description: 'Dynamic UI rendering and state-driven component architecture.',
    skills: [
      { name: 'React Hooks', level: 94 },
      { name: 'State Management', level: 92 },
      { name: 'Event Handling', level: 90 },
      { name: 'Conditional Rendering', level: 91 },
      { name: 'Dynamic UI Rendering', level: 92 },
      { name: 'Local Storage', level: 88 }
    ]
  },
  {
    title: 'Tools',
    description: 'Developer tools for reliable workflows, testing, and deployment.',
    skills: [
      { name: 'Git', level: 96 },
      { name: 'GitHub', level: 95 },
      { name: 'VS Code', level: 94 },
      { name: 'Chrome DevTools', level: 90 },
      { name: 'Figma', level: 88 },
      { name: 'Claude', level: 85 }
    ]
  },
  {
    title: 'Database',
    description: 'Data foundations for real-world frontend projects and prototypes.',
    skills: [
      { name: 'SQL', level: 85 },
      { name: 'MySQL', level: 84 },
      { name: 'MongoDB (Basics)', level: 78 }
    ]
  },
  {
    title: 'Deployment',
    description: 'Launch modern web apps with reliable hosting and continuous delivery.',
    skills: [
      { name: 'GitHub Pages', level: 92 },
      { name: 'Vercel', level: 90 }
    ]
  }
];
