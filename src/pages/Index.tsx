import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectsGrid from "../components/ProjectsGrid";
import SocialIcons from "../components/SocialIcons";
import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import Achievements from "../components/Achievements";
import React from "react";
import { useProjects } from "../contexts/ProjectsContext";

const DUMMY_COMMITS = 99;
const DUMMY_CONTRIBUTIONS = 52;

const Index = () => {
  const { projects } = useProjects();
  const pinnedProjects = projects.filter((p) => p.pinned).slice(0, 4);

  // Add logging for debugging state
  React.useEffect(() => {
    console.log("Pinned projects (Home):", pinnedProjects);
  }, [pinnedProjects]);

  // Remove filter by tech state and logic

  const filteredProjects = pinnedProjects;

  return (
    <div className="w-full flex flex-col gap-10">
      <Hero />
      {/* Stats & Achievements Combined */}
      <section className="max-w-4xl mx-auto w-full flex flex-col gap-8 mb-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center bg-card rounded-2xl shadow-[0_2px_16px_0_rgb(36_80_165/10%)] border p-6 transition hover:shadow-lg">
            <span className="font-bold text-3xl mb-1 text-primary">{projects.length}</span>
            <span className="text-xs text-muted-foreground tracking-wide font-semibold">Projects</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-2xl shadow-[0_2px_16px_0_rgb(36_80_165/10%)] border p-6 transition hover:shadow-lg">
            <span className="font-bold text-3xl mb-1 text-primary">{DUMMY_COMMITS}</span>
            <span className="text-xs text-muted-foreground tracking-wide font-semibold">Commits</span>
          </div>
          <div className="flex flex-col items-center bg-card rounded-2xl shadow-[0_2px_16px_0_rgb(36_80_165/10%)] border p-6 transition hover:shadow-lg">
            <span className="font-bold text-3xl mb-1 text-primary">{DUMMY_CONTRIBUTIONS}</span>
            <span className="text-xs text-muted-foreground tracking-wide font-semibold">Contributions</span>
          </div>
        </div>
        {/* Achievements & Certifications */}
        <div className="bg-card rounded-2xl shadow-[0_2px_16px_0_rgb(36_80_165/10%)] border p-7">
          <h2 className="font-display text-2xl font-bold mb-5 text-primary text-center">
            Achievements & Certifications
          </h2>
          <div className="flex justify-center">
            <Achievements />
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="max-w-7xl mx-auto w-full py-8">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-7 text-center text-primary mt-4">
          Projects
        </h2>
        <ProjectsGrid projects={filteredProjects} />
        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 px-7 py-3 text-lg font-semibold"
            asChild
          >
            <Link to="/projects-archive">
              <Archive className="mr-2" size={20} />
              View all projects archive
            </Link>
          </Button>
        </div>
      </section>
      <SocialIcons />
    </div>
  );
};

export default Index;
