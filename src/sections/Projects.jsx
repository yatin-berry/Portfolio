import { useState } from "react";
import { SectionHeading } from "../components/common/SectionHeading";
import { ProjectCard } from "../components/common/ProjectCard";
import { projectsData } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "GenAI", "Full-Stack"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <section id="projects" className="relative py-16 px-6 md:px-8 max-w-6xl mx-auto z-10">
      <SectionHeading
        badge="Projects"
        title="Featured Projects"
      />

      {/* Filter Tabs Tray */}
      <div className="flex justify-center items-center gap-1.5 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
              filter === cat
                ? "bg-white border-white text-black shadow-md"
                : "bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:border-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="h-full">
            <ProjectCard
              project={project}
              index={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
