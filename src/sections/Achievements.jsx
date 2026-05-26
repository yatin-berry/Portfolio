import { motion } from "framer-motion";
import { Award, Zap, Code, Shield } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { achievementsData, metricsData } from "../data/achievements";

export function Achievements() {
  const iconMap = [
    <Zap className="w-4 h-4 text-blue-400" />,
    <Code className="w-4 h-4 text-emerald-400" />,
    <Shield className="w-4 h-4 text-purple-400" />,
    <Award className="w-4 h-4 text-rose-400" />
  ];

  return (
    <section id="achievements" className="relative py-16 px-6 md:px-8 max-w-5xl mx-auto z-10">
      <SectionHeading
        badge="Achievements"
        title="Accolades & Ranks"
      />

      {/* Metrics Counter Panels Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metricsData.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-5 rounded-xl border border-white/5 bg-zinc-950/40 text-center space-y-1.5 shadow-glass-sm"
          >
            <h4 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {metric.value}
            </h4>
            <p className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest leading-snug">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Achievements Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {achievementsData.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-5 rounded-xl border border-white/5 bg-zinc-950/20 hover:border-white/10 transition-all flex gap-4 relative overflow-hidden shadow-glass-sm"
          >
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 self-start">
              {iconMap[index % iconMap.length]}
            </div>

            <div className="space-y-1.5 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-blue-400 uppercase tracking-wider bg-blue-500/10 border border-blue-500/25 px-1.5 py-0.5 rounded">
                  {ach.category}
                </span>
                <span className="text-[9px] font-mono text-zinc-500">{ach.competition}</span>
              </div>
              <h3 className="font-display font-bold text-base text-white">
                {ach.title}
              </h3>
              {/* Increased text size to text-base */}
              <p className="text-base leading-relaxed text-zinc-400 font-light">
                {ach.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Achievements;
