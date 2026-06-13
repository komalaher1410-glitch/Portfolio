import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import useTypingText from '../hooks/useTypingText';

const heroStats = [
  { label: 'Recruiter-ready', value: 'Premium UX' },
  { label: 'Built with', value: 'React + TypeScript' },
  { label: 'Trusted by', value: 'Future employers' }
];

export default function Hero() {
  const typingText = useTypingText(['Full Stack Web Developer', 'React Expert', 'Premium UI Designer']);

  return (
    <section id="home" className="relative isolate overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/80 px-6 py-14 shadow-glass backdrop-blur-xl md:px-12 md:py-20 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.16),_transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_28%)]" />
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="relative mx-auto grid gap-12 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300 shadow-glass">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
            Frontend Web Developer · React.js Developer
          </div>
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Hi, I’m Komal Gorakhnath Aher</p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              I build responsive React web applications with production-ready UI.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              {typingText} with polished interfaces, thoughtful motion, and performance-first engineering. I help fast-moving teams ship web products that feel premium from first impression to final interaction.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95">
              Explore Projects <FaArrowRight />
            </a>
            <a href="resume.pdf" download className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-6 py-4 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-[28px] border border-white/10 bg-slate-900/80 p-5 shadow-glass">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">{stat.label}</p>
                <p className="mt-3 text-xl font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative mx-auto flex max-w-xl flex-col gap-6 rounded-[40px] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="absolute -right-10 top-6 hidden h-28 w-28 rounded-full bg-violet-500/10 blur-3xl lg:block" />
          <div className="rounded-[32px] border border-white/10 bg-slate-900/90 p-6 text-center shadow-glow">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-3xl font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
              KA
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.35em] text-cyan-300">Personal brand</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Premium Portfolio Experience</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">Designed to leave a strong impression on recruiters, clients, and hiring managers.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="https://github.com/komalaher1410-glitch" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">
              <FaGithub /> GitHub Profile
            </a>
            <a href="https://linkedin.com/in/komal-aher-35262a383" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95">
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Availability</p>
            <p className="mt-3 text-lg font-semibold text-white">Open for freelance and full-time opportunities.</p>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}
