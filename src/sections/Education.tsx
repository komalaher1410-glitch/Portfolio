import { motion } from 'framer-motion';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education">
      <div className="section-heading">Education</div>
      <div className="glass-card border-white/10 p-8 shadow-glass">
        {education.map((item) => (
          <motion.div key={item.degree} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-slate-100">{item.degree}</h3>
                <p className="text-sm text-slate-400">{item.institution}</p>
              </div>
              <span className="rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
                {item.duration}
              </span>
            </div>
            <ul className="space-y-3 text-slate-300">
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
    </section>
  );
}
