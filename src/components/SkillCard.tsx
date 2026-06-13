import { motion } from 'framer-motion';
import type { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} className="glass-card p-6 shadow-glow">
      <div className="mb-4">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">{category.title}</p>
        <p className="mt-3 text-slate-300">{category.description}</p>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm text-slate-200">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
