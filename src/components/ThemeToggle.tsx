import { FaMoon, FaSun } from 'react-icons/fa';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
    >
      {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
}
