import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials">
      <div className="section-heading">Testimonials</div>
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/80 p-8 shadow-glass">
        <motion.div key={currentTestimonial.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
          <p className="text-lg leading-8 text-slate-300">“{currentTestimonial.quote}”</p>
          <div className="flex flex-col gap-1 text-sm text-slate-400">
            <p className="font-semibold text-white">{currentTestimonial.name}</p>
            <p>{currentTestimonial.role} @ {currentTestimonial.company}</p>
          </div>
        </motion.div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)} type="button" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400 hover:text-white">
            <FaChevronLeft />
          </button>
          <button onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)} type="button" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400 hover:text-white">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
