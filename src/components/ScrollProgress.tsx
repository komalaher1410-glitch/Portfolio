import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollValue(percent);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-40 h-1 w-full bg-slate-900/80">
      <div className="h-full bg-gradient-to-r from-violet-500 via-sky-400 to-cyan-300 transition-all duration-150" style={{ width: `${scrollValue}%` }} />
    </div>
  );
}
