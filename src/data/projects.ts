
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
    live: "#",
    github: "https://github.com/example1",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=700",
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
  // {
  //   id: 4,
  //   title: "Weather Visualizer",
  //   description: "Fetch weather data & visualize in graphs and maps.",
  //   tech: ["React", "JavaScript", "Recharts"],
  //   live: "#",
  //   github: "https://github.com/example4",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700",
  //   pinned: true,
  // },
  // {
  //   id: 5,
  //   title: "Task Manager",
  //   description: "Stay organized with powerful and simple task management.",
  //   tech: ["React", "TypeScript"],
  //   live: "#",
  //   github: "https://github.com/example5",
  //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=700",
  // },
  // {
  //   id: 6,
  //   title: "Finance Tracker",
  //   description: "Track expenses, budgets, and visualize insights over time.",
  //   tech: ["React", "JavaScript", "Chart.js"],
  //   live: "#",
  //   github: "https://github.com/example6",
  //   image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=700",
  // },
  // {
  //   id: 7,
  //   title: "Recipe Finder",
  //   description: "Find and share recipes. Beautiful UI inspiration for kitchen lovers.",
  //   tech: ["React", "Typescript", "API"],
  //   live: "#",
  //   github: "https://github.com/example7",
  //   image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=700",
  // },
  // {
  //   id: 8,
  //   title: "Fitness Planner",
  //   description: "Plan your workouts and log daily progress. Responsive design.",
  //   tech: ["React", "TypeScript", "CSS"],
  //   live: "#",
  //   github: "https://github.com/example8",
  //   image: "https://images.unsplash.com/photo-1505672678657-cc7037095e2c?w=700",
  // },
  // {
  //   id: 9,
  //   title: "Travel Blog",
  //   description: "Share trips, adventures, and best experiences worldwide.",
  //   tech: ["React", "Markdown", "Tailwind CSS"],
  //   live: "#",
  //   github: "https://github.com/example9",
  //   image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=700",
  // },
  // {
  //   id: 10,
  //   title: "Movie Database",
  //   description: "Browse trending movies & TV series, rate and review.",
  //   tech: ["React", "TMDB API"],
  //   live: "#",
  //   github: "https://github.com/example10",
  //   image: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?w=700",
  // },
  // {
  //   id: 11,
  //   title: "Habit Tracker",
  //   description: "Build positive habits with streak charts & reminders.",
  //   tech: ["React", "Typescript", "Dexie.js"],
  //   live: "#",
  //   github: "https://github.com/example11",
  //   image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=700",
  // },
  // {
  //   id: 12,
  //   title: "Event Planner",
  //   description: "Organize events, RSVP guests, sync with Google calendar.",
  //   tech: ["React", "Calendar API"],
  //   live: "#",
  //   github: "https://github.com/example12",
  //   image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=700",
  // },
  // {
  //   id: 13,
  //   title: "Crypto Dashboard",
  //   description: "Monitor live crypto prices and track your portfolio.",
  //   tech: ["React", "JavaScript", "Recharts"],
  //   live: "#",
  //   github: "https://github.com/example13",
  //   image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700",
  // },
  // {
  //   id: 14,
  //   title: "News Aggregator",
  //   description: "Follow latest news from trusted sources and custom topics.",
  //   tech: ["React", "API", "Tailwind CSS"],
  //   live: "#",
  //   github: "https://github.com/example14",
  //   image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=700",
  // },
];

