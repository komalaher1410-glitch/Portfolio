import { motion } from 'framer-motion';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-heading">Skills</div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {skills.map((category) => (
          <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <SkillCard category={category} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
