import { motion } from "framer-motion";

export function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const isLeft = align === "left";

  return (
    <div className={`mb-16 flex flex-col ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
      {/* Sleek Category Badge */}
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 font-display text-[10px] font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
        >
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]" />
          {badge}
        </motion.div>
      )}

      {/* Main Title heading with glowing gradient */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold text-3xl md:text-5xl text-gradient tracking-tight leading-tight max-w-3xl mb-4"
      >
        {title}
      </motion.h2>

      {/* Subheading text */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 font-sans text-sm md:text-base max-w-2xl leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
export default SectionHeading;
