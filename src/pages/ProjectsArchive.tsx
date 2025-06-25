
import React, { useState, useMemo, useEffect } from "react";
import ProjectsGrid from "../components/ProjectsGrid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Save } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { useAdmin } from "../contexts/AdminContext";
import { useProjects } from "../contexts/ProjectsContext";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const ProjectsArchive: React.FC = () => {
  const { projects, setProjects } = useProjects();
  const navigate = useNavigate();
  const ALL_TECH: string[] = Array.from(new Set(projects.flatMap((p) => p.tech.map((t) => t.toLowerCase())))).sort();
  const [activeTech, setActiveTech] = useState<string | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const { isAdmin, logout } = useAdmin();

  // Local state for pending pin edits
  const [pendingProjects, setPendingProjects] = useState(projects);

  useEffect(() => {
    setPendingProjects(projects);
  }, [projects]);

  useEffect(() => {
    console.log("Pending projects changed in Archive", pendingProjects);
  }, [pendingProjects]);

  // Track pin toggling in local state
  const handlePinToggle = (id: number) => {
    setPendingProjects(prev =>
      prev.map(p => {
        if (p.id === id) {
          const countPinned = prev.filter(proj => proj.pinned).length;
          if (p.pinned) return { ...p, pinned: false };
          if (!p.pinned && countPinned < 4) return { ...p, pinned: true };
        }
        return p;
      }),
    );
  };

  // Filter by Tech
  const filteredProjects = useMemo(() => {
    if (!activeTech) return pendingProjects;
    return pendingProjects.filter((p) =>
      p.tech.map((t) => t.toLowerCase()).includes(activeTech.toLowerCase())
    );
  }, [pendingProjects, activeTech]);

  const pendingPinnedIds = pendingProjects.filter(p => p.pinned).map(p => p.id);
  const isModified = JSON.stringify(projects.map(p => p.pinned)) !== JSON.stringify(pendingProjects.map(p => p.pinned));

  // Save handler: update global state using a new array and navigate to home
  const handleSavePins = () => {
    // Make a deep copy to ensure state updates correctly
    setProjects([...pendingProjects]);
    toast({
      title: "Saved!",
      description: "Pinned projects have been updated.",
    });
    setTimeout(() => {
      navigate("/");
    }, 600); // Allow toast to show before navigation
  };

  return (
    <div className="max-w-7xl mx-auto w-full py-10">
      <div className="flex justify-between items-end">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-7 text-center text-primary mt-4">
          Projects Archive
        </h2>
        {isAdmin && (
          <Button variant="destructive" size="sm" className="mb-5" onClick={logout}>
            Logout
          </Button>
        )}
      </div>
      <p className="mb-6 text-center text-muted-foreground">
        All projects are shown here.{" "}
        {isAdmin
          ? "Pin or unpin up to 4 projects and click Save to feature them on the home page."
          : "Admin login required for pinning projects."}
      </p>
      <section className="mb-8 flex items-center">
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
        {isAdmin && (
          <Button
            onClick={handleSavePins}
            className="ml-4"
            disabled={!isModified}
            variant="default"
          >
            <Save className="mr-2" size={18} />
            Save
          </Button>
        )}
      </section>
      <ProjectsGrid
        projects={filteredProjects}
        enablePinning={isAdmin}
        pinnedIds={pendingPinnedIds}
        onPinToggle={isAdmin ? handlePinToggle : undefined}
      />
      <div className="flex justify-center mt-8">
        <Button asChild variant="secondary">
          <a href="/" className="gap-2 flex items-center">
            Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectsArchive;
