import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

interface NavBarProps {
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export default function NavBar({ theme, onThemeToggle }: NavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionElements = navItems.map((item) => document.querySelector(item.href));

    const updateActive = () => {
      const scrollPosition = window.scrollY + 140;
      let current = 'home';

      sectionElements.forEach((section, index) => {
        if (section instanceof HTMLElement && section.offsetTop <= scrollPosition) {
          current = navItems[index].href.replace('#', '');
        }
      });

      setActiveSection(current);
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });

    return () => window.removeEventListener('scroll', updateActive);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-4 z-40 rounded-full border border-white/10 bg-slate-950/80 px-5 py-4 backdrop-blur-xl shadow-glass"
    >
      <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-4 text-sm text-slate-300">
        <a href="#home" className="flex items-center gap-3 text-base font-semibold text-white transition hover:text-cyan-300">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25">
            KA
          </span>
          <span>Komal Gorakhnath Aher</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition ${activeSection === item.href.replace('#', '') ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 md:flex">
            <a href="https://github.com/komalaher1410-glitch" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white">
              <FaLinkedin size={16} />
            </a>
          </div>
          <ThemeToggle theme={theme} onToggle={onThemeToggle} />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white md:hidden"
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-xl shadow-slate-950/20 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-3xl px-4 py-3 transition ${activeSection === item.href.replace('#', '') ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a href="https://github.com/komalaher1410-glitch" target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 text-slate-200 transition hover:bg-slate-800 hover:text-white">
              <FaLinkedin size={16} />
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
