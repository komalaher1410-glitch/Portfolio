import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect?: () => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      onClick={onSelect}
      tabIndex={0}
      role={onSelect ? 'button' : undefined}
      onKeyDown={(event) => {
        if (onSelect && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          onSelect();
        }
      }}
      className="glass-card overflow-hidden shadow-glow transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image || `https://opengraph.githubassets.com/1/komalaher1410-glitch/${project.title.replace(/\s+/g, '-')}`}
          alt={`${project.title} thumbnail`}
          className="h-52 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-slate-950/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-cyan-200">{project.category}</span>
          {project.featured && (
            <span className="rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-slate-950">
              Featured
            </span>
          )}
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            {project.status || 'Source'}
          </span>
        </div>
        <p className="text-slate-300">{project.description}</p>
        <div className="grid gap-2 text-sm text-slate-300">
          {project.features?.map((feature) => (
            <span key={feature} className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-2">
              • {feature}
            </span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-gradient-to-r from-violet-500/15 to-cyan-400/15 px-3 py-1 text-xs font-medium text-slate-200">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            <FiGithub /> Repository
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-3 text-sm text-slate-400">Source Code Available on GitHub</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
