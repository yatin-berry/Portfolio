import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-16 px-6 md:px-8 max-w-4xl mx-auto z-10">
      <SectionHeading
        badge="About Me"
        title="Background & Drive"
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/5 bg-zinc-950/30 p-6 md:p-8 space-y-6 shadow-glass-sm"
      >
        {/* Adjusted content text size explicitly to text-base */}
        <div className="space-y-4 text-zinc-400 text-base leading-relaxed font-light">
          <p>
            I’m a Computer Science Engineering student with hands-on experience in full-stack development and AI-based applications. I have worked with React, FastAPI, Python, LLM APIs, and backend systems through internships and projects.
          </p>
          <p>
            I enjoy building practical products that solve real problems, especially at the intersection of software engineering and AI.
          </p>
        </div>

        {/* Academic Card */}
        <div className="pt-6 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-blue-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                Degree & Major
              </span>
              <span className="text-sm font-semibold text-white">
                BE Computer Science Engineering
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                Institution & CGPA
              </span>
              <span className="text-sm font-semibold text-white">
                Chandigarh University • CGPA: 8.01
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default About;
