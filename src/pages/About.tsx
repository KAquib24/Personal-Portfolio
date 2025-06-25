
import React from "react";
import { GraduationCap, Briefcase } from "lucide-react";

const TIMELINE = [
  {
    type: "education",
    title: "B.Sc. in Computer Science",
    org: "Tech University",
    time: "2022 – 2026",
    icon: GraduationCap,
    desc: "Focused on software engineering and UI/UX.",
  },
  // {
  //   type: "work",
  //   title: "Front-End Developer",
  //   org: "ModernWeb Inc.",
  //   time: "2020 – 2022",
  //   icon: Briefcase,
  //   desc: "Built scalable web apps and design systems with React.",
  // },
  // {
  //   type: "work",
  //   title: "Senior Developer",
  //   org: "NextGen Apps",
  //   time: "2022 – Present",
  //   icon: Briefcase,
  //   desc: "Leading the front-end team for enterprise solutions.",
  // },
];

const About = () => (
  <div className="flex flex-col lg:flex-row items-start gap-16 animate-fade-in">
    <div className="flex-1">
      <h2 className="font-display text-4xl font-bold mb-5 text-primary">About Me</h2>
      <p className="mb-6 text-lg text-muted-foreground max-w-xl">
        Hi, I'm Aquib Khan. I'm passionate about building modern, accessible, and delightful applications for the web. With a knack for design systems, performance, and a love for teaching, I aim to make the web a better place.
      </p>
      <h3 className="font-semibold text-xl mb-1">Tech Stack:</h3>
      <ul className="flex flex-wrap gap-3 mb-2">
        <li className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-100 font-semibold text-sm">TypeScript</li>
        <li className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 font-semibold text-sm">React</li>
        <li className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-800 text-sky-700 dark:text-sky-100 font-semibold text-sm">Tailwind CSS</li>
        <li className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-100 font-semibold text-sm">JavaScript</li>
        <li className="px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-100 font-semibold text-sm">Node.js</li>
        <li className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-100 font-semibold text-sm">HTML</li>
        <li className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-800 text-pink-700 dark:text-pink-100 font-semibold text-sm">CSS</li>
        <li className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-800 text-orange-700 dark:text-orange-100 font-semibold text-sm">Git</li>
        <li className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-semibold text-sm">GitHub</li>
      </ul>
    </div>
    <div className="flex-1 mt-6 lg:mt-0">
      <h3 className="font-semibold text-xl mb-3 text-primary">My Journey</h3>
      <ol className="relative border-l-2 border-primary/30 ml-2">
        {TIMELINE.map((item, idx) => (
          <li key={idx} className="mb-10 ml-6 relative">
            <span className={`absolute flex items-center justify-center w-7 h-7 rounded-full -left-4 bg-primary text-primary-foreground shadow-md`}>
              <item.icon size={20} />
            </span>
            <div className="flex flex-col gap-1 bg-card rounded-lg px-5 py-3 shadow border border-border animate-fade-in">
              <h4 className="font-bold">{item.title}</h4>
              <span className="text-muted-foreground text-sm">{item.org} • {item.time}</span>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

export default About;
