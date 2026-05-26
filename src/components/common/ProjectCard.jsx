import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle } from "lucide-react";

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{
        "--mouse-x": `${coords.x}px`,
        "--mouse-y": `${coords.y}px`
      }}
      className="glow-card group relative rounded-2xl border border-white/5 bg-zinc-950/40 p-6 hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full shadow-glass-sm"
    >
      {/* Subtle mouse spotlight backing */}
      <div className="glow-card-bg absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Main core layout details (Top aligned content) */}
      <div className="relative z-10 flex-grow flex flex-col">
        
        {/* Top row: Left type, Right status/featured */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded">
            {project.type}
          </span>
          {project.featured && (
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded">
              Featured
            </span>
          )}
        </div>

        {/* Project title */}
        <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-blue-400 transition-colors mb-3">
          {project.title}
        </h3>

        {/* Short description - text-base leading-relaxed */}
        <p className="text-zinc-400 text-base leading-relaxed mb-5 font-light">
          {project.description}
        </p>

        {/* Tech stack badges - highly visible */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded text-xs font-mono text-zinc-300 bg-zinc-900 border border-white/5 hover:border-zinc-700 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Key features bullets - text-sm leading-relaxed */}
        <div className="space-y-2 mb-6">
          <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2.5">
            Key Features:
          </h4>
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed font-light">
              <CheckCircle className="w-4 h-4 text-blue-500/80 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Buttons aligned perfectly at bottom */}
      <div className="relative z-10 pt-4 border-t border-white/5 mt-auto flex items-center justify-start gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors py-1.5 font-semibold"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors py-1.5 font-semibold"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>

    </motion.div>
  );
}
export default ProjectCard;
