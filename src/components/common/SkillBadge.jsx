import { motion } from "framer-motion";

export function SkillBadge({ name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ 
        y: -3, 
        scale: 1.05,
        borderColor: "rgba(59, 130, 246, 0.4)",
        boxShadow: "0 0 12px rgba(59, 130, 246, 0.15)"
      }}
      className="cursor-default px-3 py-1.5 rounded-full text-xs font-mono text-zinc-300 bg-zinc-900/50 border border-white/5 transition-all duration-300 flex items-center gap-1.5 shadow-glass-sm"
    >
      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_6px_#3b82f6]" />
      {name}
    </motion.div>
  );
}
export default SkillBadge;
