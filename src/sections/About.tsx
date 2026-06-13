import { motion } from 'framer-motion';

const highlights = [
  { label: 'Built & deployed projects', value: '8+' },
  { label: 'React.js applications', value: 'Real apps' },
  { label: 'REST API integration', value: 'Live data' },
  { label: 'Responsive UI development', value: 'Mobile-first' }
];

export default function About() {
  return (
    <section id="about" className="glass-card border-white/10 p-8 shadow-glass md:p-12">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="section-heading">About Me</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Frontend Web Developer from Nashik, Maharashtra.</h2>
            <p className="mt-6 text-base leading-8 text-slate-300">
              I build production-quality web applications with React.js, Tailwind CSS, and real-world functionality. My work focuses on responsive UI, REST API integration, dynamic rendering, and recruiter-ready deployment.
            </p>
            <div className="mt-8 grid gap-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-glass">
              <div>
                <h3 className="text-xl font-semibold text-white">Professional focus</h3>
                <p className="mt-3 text-slate-300">
                  Delivering frontend experiences that combine strong UX, clean component architecture, and polished interactive details.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">What I enjoy building</h3>
                <p className="mt-3 text-slate-300">
                  Responsive applications, API-driven dashboards, and deployment-ready React projects with real GitHub showcase links.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 text-center shadow-glass">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{item.label}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
