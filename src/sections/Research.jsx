import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Copy, Check, Calendar, Award } from "lucide-react";
import { SectionHeading } from "../components/common/SectionHeading";
import { researchData } from "../data/research";

export function Research() {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCopyCitation = (citation, index) => {
    navigator.clipboard.writeText(citation);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="research" className="relative py-16 px-6 md:px-8 max-w-4xl mx-auto z-10">
      <SectionHeading
        badge="Research"
        title="Publications"
      />

      <div className="space-y-4">
        {researchData.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="p-6 rounded-xl border border-white/5 bg-zinc-950/40 hover:border-white/10 transition-all duration-300 space-y-3.5 shadow-glass-sm"
          >
            
            {/* Header metadata */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-md bg-blue-500/10 border border-blue-500/25 text-blue-400">
                  <BookOpen className="w-3.5 h-3.5" />
                </span>
                <span className="text-[9px] font-mono font-semibold uppercase text-zinc-500 tracking-wider">
                  CONFERENCE PAPER
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                  ITIDS {pub.year}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/25 text-[8px] font-semibold text-blue-400">
                  Peer-Reviewed
                </span>
              </div>
            </div>

            {/* Paper Title */}
            <h3 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
              {pub.title}
            </h3>

            {/* Publisher Venue - text-base for enhanced visibility */}
            <p className="text-base text-zinc-400 font-medium">
              Published in: <span className="text-zinc-300">{pub.venue}</span>
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-1.5">
              {pub.keywords.map((word, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded text-[9px] font-mono text-zinc-500 bg-white/5 border border-white/10"
                >
                  #{word}
                </span>
              ))}
            </div>

            {/* Abstract block */}
            <div className="pt-2">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-semibold"
              >
                {expandedIndex === index ? "Collapse Abstract [-]" : "Expand Abstract [+]"}
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {/* Increased abstract font size to text-base */}
                    <p className="mt-2.5 text-base leading-relaxed text-zinc-400 bg-zinc-900/30 p-3 rounded-lg border border-white/5 font-light">
                      {pub.abstract}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Citation copied trigger */}
            <div className="pt-3.5 border-t border-white/5 flex flex-wrap justify-between items-center gap-2">
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-zinc-500">
                <Award className="w-3 h-3 text-zinc-600" />
                <span>Citation verified (APA)</span>
              </div>

              <button
                onClick={() => handleCopyCitation(pub.citation, index)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-[10px] transition-all font-semibold ${
                  copiedIndex === index
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
                }`}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Research;
