import { motion } from 'framer-motion';
import useGitHubStats from '../hooks/useGitHubStats';

export default function GithubStats() {
  const { stats, loading, error } = useGitHubStats('komalaher1410-glitch');

  return (
    <section id="github-stats">
      <div className="section-heading">GitHub Stats</div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card border-white/10 p-8 shadow-glass">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/80 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Repos</p>
              <p className="mt-3 text-3xl font-semibold text-white">{loading ? '...' : stats.publicRepos}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Followers</p>
              <p className="mt-3 text-3xl font-semibold text-white">{loading ? '...' : stats.followers}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Stars</p>
              <p className="mt-3 text-3xl font-semibold text-white">{loading ? '...' : stats.totalStars}</p>
            </div>
          </div>
          <div className="mt-8 space-y-4 text-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Top languages</p>
            <div className="flex flex-wrap gap-3">
              {(loading ? ['JavaScript', 'React', 'TypeScript'] : stats.topLanguages).map((language) => (
                <span key={language} className="rounded-full bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          <div className="glass-card border-white/10 p-6 shadow-glass">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Contribution graph</p>
            <img src={stats.contributionsChartUrl} alt="GitHub contribution graph" className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-950/80" />
          </div>
          <div className="glass-card border-white/10 p-6 shadow-glass">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Streak stats</p>
            <img src={stats.streakStatsUrl} alt="GitHub streak stats" className="mt-4 w-full rounded-3xl border border-white/10 bg-slate-950/80" />
          </div>
        </div>
      </motion.div>
      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}
    </section>
  );
}
