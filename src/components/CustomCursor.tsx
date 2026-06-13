import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const setHover = () => setActive(true);
    const removeHover = () => setActive(false);

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, input, textarea').forEach((element) => {
      element.addEventListener('mouseenter', setHover);
      element.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, input, textarea').forEach((element) => {
        element.removeEventListener('mouseenter', setHover);
        element.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-50 h-3 w-3 rounded-full bg-cyan-400 transition-transform duration-150"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`, opacity: active ? 0.9 : 0.75 }}
      />
      <div
        className={`pointer-events-none fixed z-50 h-11 w-11 rounded-full border border-cyan-400/60 transition-all duration-150 ${active ? 'scale-110' : 'scale-100'}`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }}
      />
    </>
  );
}
