import { motion } from "framer-motion";
import { ShieldAlert, Users, Award, Calendar, ChevronRight, Terminal } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";

export function Leadership() {
  const leadershipImpact = [
    {
      title: "Cross-Functional Management",
      desc: "Supervised and coordinated active technical and operations committees consisting of 30+ organizers to execute University-wide events.",
      icon: <Users className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Technical Event Campaigns",
      desc: "Organized coding bootcamps, security audits, and hackathons targeting more than 800+ total cumulative student entries.",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "Strategic Partnerships",
      desc: "Established collaborations with industry professionals and solutioning experts to deliver technical mentorship sessions.",
      icon: <Award className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="leadership" className="relative py-20 px-6 md:px-8 max-w-5xl mx-auto z-10">
      <SectionHeading
        badge="Leadership"
        title="Leadership & Influence"
        subtitle="Spearheading technical communities and organizing competitive engineering hackathons."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-8">
        
        {/* Left Column Profile Summary card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-2xl border border-white/5 bg-zinc-950/40 p-6 md:p-8 flex flex-col justify-between"
        >
          <div className="space-y-4">
            <span className="text-[10px] font-mono font-semibold uppercase text-zinc-500 tracking-widest block">
              CHANDIGARH UNIVERSITY
            </span>
            <h3 className="font-display font-bold text-2xl text-white">
              Vice President
            </h3>
            <h4 className="font-display font-medium text-sm text-blue-400">
              ISTE Student Chapter
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed font-light pt-2">
              Served as elected student lead of the Indian Society for Technical Education (ISTE) branch at Chandigarh University. Directed organizational structure, drafted project initiatives, and mentored younger student engineers.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500 font-mono">
            <Calendar className="w-4 h-4 text-zinc-600" />
            <span>Active Leadership Tenure</span>
          </div>
        </motion.div>

        {/* Right Column Impact list */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {leadershipImpact.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-xl border border-white/5 bg-zinc-950/20 hover:border-white/10 transition-all flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white">
                  {item.title}
                </h4>
                <p className="text-xs leading-relaxed text-zinc-400 font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default Leadership;
