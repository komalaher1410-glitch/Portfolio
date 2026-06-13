import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailsModal from '../components/ProjectDetailsModal';
import useGithubProjects from '../hooks/useGithubProjects';
import type { ProjectCategory } from '../types';

export default function Projects() {
  const { projects, categories, loading, error } = useGithubProjects('komalaher1410-glitch');
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime();
      });
  }, [activeFilter, projects, searchTerm]);

  const activeProject = projects.find((project) => project.github === selectedProject) ?? null;

  return (
    <section id="projects">
      <div className="section-heading">Projects</div>
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative max-w-xl">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition ${activeFilter === filter ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {loading && <p className="text-slate-400">Loading GitHub projects...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && filteredProjects.length === 0 && (
          <p className="text-slate-400">No projects found yet. Check back after your GitHub activity updates.</p>
        )}
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.div key={project.github} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <ProjectCard project={project} onSelect={() => setSelectedProject(project.github)} />
          </motion.div>
        ))}
      </div>

      {activeProject && <ProjectDetailsModal project={activeProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
