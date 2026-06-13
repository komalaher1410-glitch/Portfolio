import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import useGithubProjects from '../hooks/useGithubProjects';
import type { ProjectCategory } from '../types';

const searchCategories: ProjectCategory[] = ['All', 'React', 'Full Stack', 'Frontend', 'Node.js', 'AI'];

export default function GithubProjects() {
  const { projects, loading, error } = useGithubProjects('komalaher1410-glitch');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchTerm]);

  return (
    <section id="projects">
      <div className="section-heading">GitHub Projects</div>
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="relative max-w-xl">
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-3xl border border-white/10 bg-slate-950/70 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {searchCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-3 text-sm font-semibold transition ${activeCategory === category ? 'bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950' : 'border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">
        {loading && <p className="text-slate-400">Loading GitHub projects...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && !error && filteredProjects.length === 0 && (
          <p className="text-slate-400">No projects found. Try a different search or category.</p>
        )}
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <motion.div key={project.github} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
