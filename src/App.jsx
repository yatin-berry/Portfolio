import { AnimatedBackground } from "./components/common/AnimatedBackground";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { Navbar } from "./components/common/Navbar";
import { Hero } from "./sections/Hero";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Research } from "./sections/Research";
import { Achievements } from "./sections/Achievements";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <div className="relative min-h-screen selection:bg-blue-500/30 selection:text-white overflow-x-hidden font-sans">
      
      {/* Subtle background canvas and grid lines */}
      <AnimatedBackground />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Core sections layout */}
      <main className="relative z-10 mx-auto max-w-7xl">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Research />
        <Achievements />
        <Contact />
      </main>

      {/* Clean Vercel-style footer */}
      <Footer />
      
    </div>
  );
}

export default App;
