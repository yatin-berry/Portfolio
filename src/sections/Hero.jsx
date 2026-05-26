import { motion } from "framer-motion";
import { Mail, ArrowRight, Download, GraduationCap, Award } from "lucide-react";
import { Button } from "../components/common/Button";

const Github = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function Hero() {
  const techStack = [
    "React", "FastAPI", "Python", "Node.js", "MongoDB", "Supabase", "LLMs", "RAG"
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center px-6 md:px-8 pt-32 lg:pt-40 pb-20 overflow-hidden max-w-5xl mx-auto z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-start w-full">
        
        {/* Left Column: All text, Bio, and Actions */}
        <div className="lg:col-span-8 space-y-7 text-left order-2 lg:order-1 flex flex-col justify-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-tight leading-[1.15] bg-gradient-to-b from-white via-neutral-100 to-zinc-400 bg-clip-text text-transparent"
          >
            Full-Stack Developer & AI Engineer Building Practical Solutions
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light"
          >
            I build full-stack applications and AI-powered systems using React, FastAPI, Python, and modern web technologies.
          </motion.p>

          {/* Unified About Bio Paragraphs - text-base */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-5 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl pt-2 font-normal"
          >
            <p>
              I’m a Computer Science Engineering student with hands-on experience in full-stack development and AI-based applications. I have worked with React, FastAPI, Python, LLM APIs, and backend systems through internships and projects.
            </p>
            <p>
              I enjoy building clean, robust, and user-centric products that solve real problems, specifically operating at the intersection of production-grade software engineering and intelligent agentic systems.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full pt-4"
          >
            <Button
              variant="primary"
              icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              onClick={(e) => handleScrollTo(e, "projects")}
              className="group w-full sm:w-auto bg-white text-black hover:bg-neutral-100 font-semibold px-6 py-3.5 rounded-full text-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              View Projects
            </Button>

            <a href="#contact" onClick={(e) => handleScrollTo(e, "contact")} className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full border-zinc-800 hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm text-zinc-300 hover:text-white"
              >
                Get In Touch
              </Button>
            </a>

            <a
              href="/Yatin_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
              download="Yatin_Resume.pdf"
            >
              <Button
                variant="secondary"
                icon={<Download className="w-4 h-4 group-hover:translate-y-[1px] transition-transform" />}
                className="group w-full border-zinc-850 hover:bg-zinc-900 text-zinc-300 hover:text-white"
              >
                Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Contacts Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-start gap-6 pt-4"
          >
            <a
              href="https://github.com/yatin-berry"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all text-xs font-mono font-medium"
            >
              <Github className="w-4 h-4 group-hover:scale-105 transition-transform" />
              <span>GitHub</span>
            </a>
            <span className="w-[1px] h-3 bg-zinc-800" />
            <a
              href="https://www.linkedin.com/in/yatin-berry-993578246/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 text-zinc-500 hover:text-blue-400 transition-all text-xs font-mono font-medium"
            >
              <Linkedin className="w-4 h-4 group-hover:scale-105 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <span className="w-[1px] h-3 bg-zinc-800" />
            <a
              href="mailto:yatinberry201@gmail.com"
              className="group flex items-center gap-2 text-zinc-500 hover:text-emerald-400 transition-all text-xs font-mono font-medium"
            >
              <Mail className="w-4 h-4 group-hover:scale-105 transition-transform" />
              <span>Email</span>
            </a>
          </motion.div>

          {/* Tech stack row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="pt-4"
          >
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-[11px] font-mono text-zinc-400 bg-zinc-900/40 border border-white/[0.06] hover:border-blue-500/30 hover:text-blue-400 hover:bg-blue-500/5 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(59,130,246,0.1)] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Bento-style premium profile card */}
        <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 lg:pt-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative w-full max-w-[320px] rounded-3xl border border-white/[0.08] bg-zinc-950/60 p-6 backdrop-blur-md shadow-[0_24px_50px_-12px_rgba(0,0,0,0.9)] hover:border-blue-500/20 transition-all duration-500 group overflow-hidden"
          >
            {/* Corner glowing lines or light aura backing inside card */}
            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500 pointer-events-none" />

            <div className="flex flex-col items-center">
              {/* Premium image frame with glowing border ring */}
              <div className="relative p-1 rounded-full border border-white/[0.08] bg-zinc-900 group-hover:border-blue-500/40 transition-colors duration-500 shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm animate-pulse" />
                <img
                  src="/Yatin Berry.jpg"
                  alt="Yatin Berry"
                  className="relative w-36 h-36 rounded-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500 z-10"
                />
              </div>

              {/* Minimalist name display below photo */}
              <h2 className="mt-4 text-lg font-display font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors duration-300">
                Yatin Berry
              </h2>

              {/* Academic Info */}
              <div className="mt-6 w-full space-y-4 pt-5 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/5 border border-blue-500/15 text-blue-400 flex-shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] text-zinc-500 font-mono uppercase tracking-wider mb-0.5 leading-none">
                      Degree & Major
                    </span>
                    <span className="text-xs font-medium text-zinc-300 leading-snug block">
                      BE Computer Science Engineering
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-500/5 border border-emerald-500/15 text-emerald-400 flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] text-zinc-500 font-mono uppercase tracking-wider mb-0.5 leading-none">
                      Institution & CGPA
                    </span>
                    <span className="text-xs font-medium text-zinc-300 leading-snug block">
                      Chandigarh University <span className="text-zinc-600 font-mono text-[10px] mx-1">•</span> <span className="text-emerald-400 font-semibold font-mono">8.01 CGPA</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
export default Hero;
