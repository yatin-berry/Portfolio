import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 transition-all duration-75 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
export default ScrollProgress;
