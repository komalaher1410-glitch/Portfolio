import { motion } from 'framer-motion';
import type { TimelineItem } from '../types';

interface TimelineCardProps {
  item: TimelineItem;
}

export default function TimelineCard({ item }: TimelineCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-glass">
      <span className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-500/20">
        •
      </span>
      <div className="ml-16 space-y-3">
        <p className="text-sm text-cyan-300">{item.duration}</p>
        <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
        <p className="text-sm text-slate-300">{item.company}</p>
        <p className="mt-2 text-sm leading-7 text-slate-400">{item.description}</p>
      </div>
    </motion.div>
  );
}
