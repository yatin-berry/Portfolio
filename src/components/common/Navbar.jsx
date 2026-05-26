import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

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

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "research", label: "Research" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = navItems.map((item) => document.getElementById(item.id));
      let currentSection = "home";

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = navItems[i].id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
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
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 rounded-full transition-all duration-500 ${
        scrolled
          ? "bg-zinc-950/70 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] border border-white/[0.08] py-2.5 px-6"
          : "bg-zinc-950/30 backdrop-blur-sm border border-white/[0.03] py-3.5 px-5"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand/Logo - Set exactly to Yatin Berry */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight group"
        >
          <div className="relative p-1.5 rounded-full bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)] transition-all duration-300">
            <Cpu className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
          </div>
          <span className="text-white group-hover:text-neutral-300 transition-colors font-bold font-display">
            Yatin <span className="text-blue-500 font-extrabold">Berry</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-3.5 py-1.5 rounded-full font-medium text-xs md:text-[13px] tracking-wide transition-all duration-300 ${
                activeSection === item.id
                  ? "text-blue-400 bg-white/5 shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              )}
            </a>
          ))}
        </div>

        {/* Right side Social shortcuts */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://github.com/yatin-berry"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/10 hover:bg-white/5 hover:shadow-[0_0_12px_rgba(255,255,255,0.05)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/yatin-berry-993578246/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/5 bg-white/[0.02] text-zinc-400 hover:text-blue-400 hover:border-blue-500/20 hover:bg-blue-500/5 hover:shadow-[0_0_12px_rgba(59,130,246,0.15)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white rounded-full bg-white/5 border border-white/10"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full glass shadow-glass-md rounded-2xl p-5 border border-white/10 flex flex-col gap-2 mt-2 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                activeSection === item.id
                  ? "text-blue-400 bg-white/5"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Social Row */}
          <div className="flex items-center gap-3 pt-3 mt-1 border-t border-white/5">
            <a
              href="https://github.com/yatin-berry"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-mono text-zinc-450 hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yatin-berry-993578246/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-mono text-zinc-450 hover:text-blue-400"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
