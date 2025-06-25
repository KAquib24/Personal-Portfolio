import React from "react";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

interface ProjectsGridProps {
  projects: Project[];
  enablePinning?: boolean;
  pinnedIds?: number[];
  onPinToggle?: (projectId: number) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  projects,
  enablePinning = false,
  pinnedIds = [],
  onPinToggle,
}) => {
  // Calculate ALL_TECH for filter if you'd like to keep it, but we keep only cards for now for archive simplicity
  return (
    <section className="w-full" id="projects">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-card shadow-lg rounded-lg overflow-hidden flex flex-col animate-fade-in group hover:scale-105 transition-all duration-300 border border-border relative"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-52 object-cover rounded-t-lg group-hover:opacity-85 transition duration-200"
              loading="lazy"
            />
            <div className="flex flex-col flex-1 p-5">
              <h3 className="text-xl font-bold font-display text-primary mb-1">
                {p.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-muted text-xs font-semibold rounded-full border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="flex-1 text-muted-foreground mb-3 text-sm">
                {p.description}
              </p>
              <div className="flex gap-5 mt-auto z-10">
                {p.live && (
                  <a href={p.live} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 hover:underline hover:text-primary">
                    <ExternalLink size={18} /> Live
                  </a>
                )}
                {p.github && (
                  <a href={p.github} rel="noopener noreferrer" target="_blank" className="inline-flex items-center gap-1 hover:underline hover:text-primary">
                    <Github size={18} /> Code
                  </a>
                )}
              </div>
            </div>
            {enablePinning && (
              <button
                onClick={() => onPinToggle && onPinToggle(p.id)}
                className={`absolute top-3 right-3 bg-white/80 hover:bg-primary/90 border rounded-full text-xs px-2 py-1 font-semibold z-20 transition ${
                  pinnedIds.includes(p.id)
                    ? "text-primary"
                    : "text-gray-500"
                }`}
              >
                {pinnedIds.includes(p.id) ? "Unpin" : "Pin"}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
