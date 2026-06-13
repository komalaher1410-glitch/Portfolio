import { useMemo } from 'react';
import { motion } from 'framer-motion';
import useGithubProjects from '../hooks/useGithubProjects';

const featuredPriority = ['komalA-portfolio', 'direct-farm-to-customer', 'weather-app', 'localconnect-pg', 'finance_dashboard'];

export default function FeaturedProjects() {
  const { projects, loading, error } = useGithubProjects('komalaher1410-glitch');

  const featuredProjects = useMemo(() => {
    return projects
      .slice()
      .sort((a, b) => {
        const aIndex = featuredPriority.findIndex((pattern) => a.github.toLowerCase().includes(pattern));
        const bIndex = featuredPriority.findIndex((pattern) => b.github.toLowerCase().includes(pattern));

        if (aIndex !== bIndex) {
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        }

        if ((a.featured ? 1 : 0) !== (b.featured ? 1 : 0)) {
          return a.featured ? -1 : 1;
        }

        return (b.stars || 0) - (a.stars || 0);
      })
      .slice(0, 4);
  }, [projects]);

  const mainProject = featuredProjects[0];
  const secondaryProjects = featuredProjects.slice(1);

  return (
    <section id="featured-projects">
      <div className="section-heading">Featured Projects</div>
      <div className="mt-8 space-y-6">
        {loading && <p className="text-slate-400">Loading featured projects...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && featuredProjects.length === 0 && (
          <p className="text-slate-400">No featured projects are available yet.</p>
        )}
      </div>

      {!loading && !error && mainProject && (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-glass">
          <div className="relative overflow-hidden">
            <img src={mainProject.image} alt={`${mainProject.title} preview`} className="h-96 w-full object-cover object-center transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/10 to-transparent p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-violet-500/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-950">Featured</span>
                <span className="rounded-full bg-slate-900/90 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">{mainProject.category}</span>
                <span className="rounded-full bg-slate-900/90 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300">{mainProject.status}</span>
              </div>
              <h3 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">{mainProject.title}</h3>
              <p className="mt-4 max-w-3xl text-slate-300">{mainProject.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {mainProject.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-slate-900/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={mainProject.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200">
                  View Code
                </a>
                {mainProject.demo ? (
                  <a href={mainProject.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">
                    Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-3 text-sm text-slate-400">Source Code Available</span>
                )}
              </div>
            </div>
          </div>
          <div className="space-y-6 p-8 sm:p-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {mainProject.features?.slice(0, 3).map((feature) => (
                <div key={feature} className="rounded-3xl bg-slate-900/80 p-6 text-slate-200">
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Feature</p>
                  <p className="mt-3 text-sm font-semibold">{feature}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">Why this project stands out</h4>
              <p className="mt-3 text-slate-300">
                This showcase card highlights your most impactful GitHub work with a polished preview image, real deployment status, and strong recruiter-facing detail.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {!loading && !error && secondaryProjects.length > 0 && (
        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {secondaryProjects.map((project) => (
            <motion.div key={project.github} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-glass">
              <img src={project.image} alt={`${project.title} preview`} className="h-64 w-full object-cover object-center" />
              <div className="space-y-5 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm uppercase tracking-[0.35em] text-cyan-300">{project.category}</p>
                  </div>
                  <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">{project.status}</span>
                </div>
                <p className="text-slate-300">{project.description}</p>
                <div className="grid gap-2 text-sm text-slate-300">
                  {project.features?.slice(0, 3).map((feature) => (
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
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200">
                    View Code
                  </a>
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">
                      Live Demo
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-5 py-3 text-sm text-slate-400">Source Code</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
