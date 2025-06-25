
import React, { useState, useMemo } from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import { PROJECTS } from "../data/projects";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

const ALL_TECH: string[] = Array.from(
  new Set(PROJECTS.flatMap((p) => p.tech.map((t) => t.toLowerCase())))
).sort();

const Projects = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (!activeTech) return PROJECTS;
    return PROJECTS.filter((p) =>
      p.tech.map((t) => t.toLowerCase()).includes(activeTech.toLowerCase())
    );
  }, [activeTech]);

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Filter by Tech Popover */}
      <section className="max-w-7xl mx-auto w-full mb-6 flex items-center">
        <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="text-muted-foreground" size={18} />
              <span className="font-semibold text-sm text-muted-foreground">
                Filter by Tech
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <div className="flex flex-wrap gap-2">
              <Badge
                key="all"
                variant={!activeTech ? "default" : "outline"}
                onClick={() => {
                  setActiveTech(null);
                  setPopoverOpen(false);
                }}
                className="cursor-pointer select-none"
              >
                All
              </Badge>
              {ALL_TECH.map((tech) => (
                <Badge
                  key={tech}
                  variant={activeTech === tech ? "default" : "outline"}
                  className="cursor-pointer select-none capitalize"
                  onClick={() => {
                    setActiveTech(tech);
                    setPopoverOpen(false);
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </section>
      <ProjectsGrid projects={filteredProjects} />
    </div>
  );
};

export default Projects;
