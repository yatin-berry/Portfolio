import { motion } from "framer-motion";
import { SectionHeading } from "../components/common/SectionHeading";
import { skillsData } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="relative py-16 px-6 md:px-8 max-w-5xl mx-auto z-10">
      <SectionHeading
        badge="Skills"
        title="Technical Arsenal"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {skillsData.map((categoryObj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="p-5 rounded-xl border border-white/5 bg-zinc-950/20 hover:border-white/10 transition-all duration-300 flex flex-col justify-between shadow-glass-sm"
          >
            <div>
              {/* Category Header */}
              <h3 className="font-display font-semibold text-sm text-white border-b border-white/5 pb-2.5 mb-4 flex justify-between items-center">
                {categoryObj.category}
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              </h3>

              {/* Skill Badges Cloud */}
              <div className="flex flex-wrap gap-1.5">
                {categoryObj.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/5 cursor-default hover:border-zinc-700 transition-colors"
                  >
                    {skill}
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
export default Skills;
