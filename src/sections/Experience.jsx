import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { experienceData } from "../data/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 px-6 md:px-8 max-w-4xl mx-auto z-10">
      <SectionHeading
        badge="Experience"
        title="Work History"
      />

      <div className="relative mt-8 pl-6 border-l border-zinc-800">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Minimal node node indicator */}
            <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-950 border border-zinc-800">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
            </span>

            <div className="p-6 rounded-xl border border-white/5 bg-zinc-950/20 hover:border-white/10 transition-all duration-300 space-y-4 shadow-glass-sm">
              
              {/* Header metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-lg text-white">
                    {exp.role}
                  </h3>
                  <h4 className="font-display font-medium text-sm text-zinc-400 mt-0.5 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-zinc-500" />
                    {exp.company}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                  {exp.period}
                </div>
              </div>

              {/* Bullet tasks list - text-base leading-relaxed */}
              <ul className="space-y-3 pt-2">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-base text-zinc-400 font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 mt-2.5 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies row */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest mr-1.5">
                  Applied Tech:
                </span>
                {exp.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Experience;
