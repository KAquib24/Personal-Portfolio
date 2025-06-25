
import React, { createContext, useContext, useState, useEffect } from "react";
import { PROJECTS as INITIAL_PROJECTS, Project } from "../data/projects";

interface ProjectsContextType {
  projects: Project[];
  pinnedIds: number[];
  pinToggle: (id: number) => void;
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
}

const LOCAL_KEY = "lovable.projects";

const ProjectsContext = createContext<ProjectsContextType>({
  projects: INITIAL_PROJECTS,
  pinnedIds: [],
  pinToggle: () => {},
  setProjects: () => {},
});

export const useProjects = () => useContext(ProjectsContext);

function hydrateProjects(): Project[] {
  try {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (!raw) return INITIAL_PROJECTS;
    const saved: Project[] = JSON.parse(raw);

    // Merge pin status from localStorage onto the reference projects list
    // (in case new projects got added to the hardcoded source)
    const pinMap = new Map(saved.map(p => [p.id, p.pinned]));
    return INITIAL_PROJECTS.map(p =>
      pinMap.has(p.id) ? { ...p, pinned: !!pinMap.get(p.id) } : p
    );
  } catch {
    return INITIAL_PROJECTS;
  }
}

export const ProjectsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjectsState] = useState<Project[]>(() => hydrateProjects());

  // Whenever projects change, persist the pin state in localStorage
  useEffect(() => {
    // Only save the pin state, not the whole project details
    localStorage.setItem(LOCAL_KEY, JSON.stringify(projects.map(p => ({
      id: p.id,
      pinned: p.pinned,
    }))));
  }, [projects]);

  // Provide a setProjects that both updates and persists
  const setProjects: React.Dispatch<React.SetStateAction<Project[]>> = updater => {
    setProjectsState(prev => {
      const next = typeof updater === "function" ? (updater as any)(prev) : updater;
      // The useEffect will write next to localStorage
      return [...next]; // ensure new reference
    });
  };

  const pinnedIds = projects.filter(p => p.pinned).map(p => p.id);

  const pinToggle = (id: number) => {
    setProjectsState(prev =>
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

  return (
    <ProjectsContext.Provider value={{ projects, pinnedIds, pinToggle, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};
