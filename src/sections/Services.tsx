import { motion } from 'framer-motion';
import { FaLaptopCode, FaCode, FaPalette, FaServer } from 'react-icons/fa';
import { services } from '../data/services';

const iconMap = {
  FaLaptopCode: <FaLaptopCode size={20} />,
  FaCode: <FaCode size={20} />,
  FaPalette: <FaPalette size={20} />,
  FaServer: <FaServer size={20} />
};

export default function Services() {
  return (
    <section id="services">
      <div className="section-heading">Services</div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <motion.div key={service.title} whileHover={{ y: -10 }} className="glass-card rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-glow transition-transform duration-300">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-cyan-500/20">
              {iconMap[service.icon as keyof typeof iconMap]}
            </div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{service.description}</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
