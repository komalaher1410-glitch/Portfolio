import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 rounded-[36px] border border-white/10 bg-slate-950/80 p-8 text-slate-300 shadow-glass md:p-10">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_auto] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Let’s build together</p>
          <h3 className="text-3xl font-semibold text-white">Have a concept or role in mind? I’m ready to help.</h3>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Whether you need a recruiter-friendly portfolio, product landing page, or full stack web app, I deliver polished front-end design with strong technical execution.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="inline-flex rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-95">
              Contact Me
            </a>
            <a href="resume.pdf" className="inline-flex rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
              View Resume
            </a>
          </div>
        </div>

        <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/90 p-6 shadow-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Connect instantly</p>
          <div className="grid gap-3">
            <a href="https://github.com/komalaher1410-glitch" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
              <span className="font-semibold text-white">GitHub</span>
              <span className="block text-xs text-slate-400">View latest repos & contributions</span>
            </a>
            <a href="https://linkedin.com/in/komal-aher-35262a383" target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-white">
              <span className="font-semibold text-white">LinkedIn</span>
              <span className="block text-xs text-slate-400">Connect for frontend collaboration</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/komalaher1410-glitch" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/komal-aher-35262a383" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500">
        <span>© {currentYear} Komal Gorakhnath Aher. Crafted for modern frontend growth.</span>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#certifications" className="hover:text-white transition">Certifications</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>
      </div>

      <a href="#home" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white">
        <FaArrowUp /> Back to top
      </a>
    </footer>
  );
}
