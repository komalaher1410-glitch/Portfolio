import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="glass-card border-white/10 p-8 shadow-glass">
      <div className="section-heading">Achievements</div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {achievements.map((achievement) => (
          <div key={achievement.title} className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 text-center shadow-glass">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">{achievement.title}</p>
            <p className="mt-4 text-4xl font-semibold text-white">{achievement.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
