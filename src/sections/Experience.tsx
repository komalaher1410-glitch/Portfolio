import { motion } from 'framer-motion';
import TimelineCard from '../components/TimelineCard';
import { experience } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-heading">Experience</div>
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((item) => (
          <TimelineCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
