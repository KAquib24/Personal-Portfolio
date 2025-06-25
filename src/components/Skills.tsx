
import React from "react";
import { SiTypescript, SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiGit, SiNodedotjs } from "react-icons/si";

const SKILLS = [
  { label: "TypeScript", Icon: SiTypescript },
  { label: "React", Icon: SiReact },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
  { label: "HTML5", Icon: SiHtml5 },
  { label: "CSS3", Icon: SiCss3 },
  { label: "Git", Icon: SiGit },
  { label: "Node.js", Icon: SiNodedotjs },
];

const SkillBadge = ({
  Icon,
  label,
}: {
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
}) => (
  <div className="flex flex-col items-center mx-2 group">
    <div className="p-4 text-4xl rounded-full bg-muted group-hover:bg-primary group-hover:text-primary-foreground transition-all shadow">
      <Icon size={32} />
    </div>
    <span className="mt-2 font-semibold text-sm text-foreground group-hover:text-primary transition">
      {label}
    </span>
  </div>
);

const Skills = () => (
  <section
    className="w-full py-14 flex flex-col items-center animate-fade-in"
    id="skills"
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center text-primary">
      My Skills & Tech Stack
    </h2>
    <div className="flex flex-wrap justify-center items-center gap-y-6 max-w-2xl">
      {SKILLS.map((skill) => (
        <SkillBadge key={skill.label} {...skill} />
      ))}
    </div>
  </section>
);

export default Skills;
