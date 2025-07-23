
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  image: string;
  pinned?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Career Path Finder",
    description: "Help the students to choose the right path toward thier career.",
    tech: ["React", "TypeScript", "Node.js"],
    live: "#",
    github: "https://github.com/example3",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700",
    pinned: true,
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "Modern portfolio using TypeScript, React, animations, theme toggle, and more.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://personal-portfolio-git-main-kaquib24s-projects.vercel.app/",
    github: "https://github.com/example1",
    image: "/homepage.png",
    pinned: true,
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description: "Full-featured admin dashboard with analytics and real-time sales.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    github: "https://github.com/example2",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
    pinned: true,
  },
  {
    id: 3,
    title: "PodTalks",
    description: "PodCast Streaming Website Feature More Then 1800+ Podcasts In All Languages",
    tech: ["React", "Typescript", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/KAquib24/Personal-Portfolio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
    pinned: true,
  },
];

