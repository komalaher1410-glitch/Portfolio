import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import type { Project } from '../types';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden">
          {project.image && (
            <img src={project.image} alt={`${project.title} screenshot`} className="h-80 w-full object-cover object-center" />
          )}
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-slate-200 transition hover:bg-slate-900"
          >
            <FiX className="h-5 w-5" />
          </button>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent px-6 py-5">
            <h2 className="text-3xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-cyan-300">{project.category}</p>
          </div>
        </div>

        <div className="space-y-8 p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-slate-300">{project.description}</p>
              {project.challenges && (
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">Challenges Solved</h3>
                  <ul className="list-disc space-y-2 pl-5 text-slate-300">
                    {project.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="space-y-6 rounded-3xl bg-slate-900/80 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Key metrics</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Status</p>
                    <p className="mt-2 text-xl font-semibold text-white">{project.status}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Stars</p>
                    <p className="mt-2 text-xl font-semibold text-white">{project.stars ?? 0}</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Updated</p>
                    <p className="mt-2 text-xl font-semibold text-white">{project.lastUpdated ? new Date(project.lastUpdated).toLocaleDateString() : '—'}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Tech stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
              {project.screenshots?.length ? (
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Screenshots</p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {project.screenshots.map((screenshot) => (
                      <img key={screenshot} src={screenshot} alt={`${project.title} screenshot`} className="h-44 w-full rounded-3xl object-cover" />
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="space-y-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <FiGithub /> View Source Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95"
                  >
                    <FiExternalLink /> View Live Demo
                  </a>
                ) : (
                  <div className="rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-300">
                    Source Code Available on GitHub
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <p className="text-sm text-slate-400">Click outside the panel or the close button to return to the project list.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
