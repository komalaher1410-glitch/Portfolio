export type ProjectCategory =
  | 'All'
  | 'Frontend'
  | 'Full Stack'
  | 'React'
  | 'Node.js'
  | 'AI'
  | 'Web'
  | 'E-Commerce'
  | 'Productivity'
  | 'Backend'
  | 'Portfolio'
  | 'JavaScript';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: ProjectCategory;
  features?: string[];
  status?: string;
  image?: string;
  homepage?: string;
  lastUpdated?: string;
  stars?: number;
  screenshots?: string[];
  featured?: boolean;
  challenges?: string[];
  topics?: string[];
}

export interface TimelineItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  issueDate?: string; // e.g. '25-Aug-2023' or duration 'Sep 2024 – Sep 2025'
  year?: string;
  grade?: string;
  type?: string; // e.g. 'Diploma', 'Certificate'
  image?: string; // relative path to image asset
  downloadUrl?: string; // optional certificate PDF or image download link
  credentialId?: string;
  verified?: boolean;
}

export interface Achievement {
  title: string;
  value: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export interface ResumeItem {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
}

export interface GitHubProject extends Project {
  stars: number;
  language?: string;
  archived: boolean;
  fork: boolean;
  homepage?: string;
}

export interface GitHubStats {
  username: string;
  followers: number;
  publicRepos: number;
  totalStars: number;
  topLanguages: string[];
  contributionsChartUrl: string;
  streakStatsUrl: string;
  profileUrl: string;
}
