import { motion } from 'framer-motion';
import { resumeItems } from '../data/resume';

export default function Resume() {
  return (
    <section id="resume" className="glass-card border-white/10 p-8 shadow-glass md:p-12">
      <div className="section-heading">Resume</div>
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Professional Timeline</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Download my resume or preview recent experience.</h2>
          <p className="text-slate-300">
            The resume contains my latest full stack projects, training experience, and the professional skills I bring to every development engagement.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="resume.pdf" download className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:opacity-95">
              Download Resume
            </a>
            <a href="resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-6 py-4 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
              View Resume
            </a>
          </div>
        </div>
        <div className="space-y-4">
          {resumeItems.map((item) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-glass">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.subtitle}</p>
                </div>
                <span className="rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">{item.date}</span>
              </div>
              <ul className="mt-4 space-y-3 text-slate-300">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
