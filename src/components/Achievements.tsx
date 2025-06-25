
import React from "react";
import { BadgeCheck, Badge } from "lucide-react";

const ACHIEVEMENTS = [
  {
    label: "HackerRank (Verified)",
    image: "https://hrcdn.net/community-frontend/assets/badges/problem-solving-7dfdeec9b6.png",
    url: "https://www.hackerrank.com/certificates", // Replace with your real profile/certificate link
    org: "HackerRank",
  },
  // {
  //   label: "LeetCode",
  //   image: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  //   url: "https://leetcode.com/your-username", // Replace with your real LeetCode profile
  //   org: "LeetCode",
  // },
  // {
  //   label: "FreeCodeCamp",
  //   image: "https://cdn.freecodecamp.org/platform/universal/fcc_secondary.svg",
  //   url: "https://www.freecodecamp.org/certification", // Replace with your FCC cert link
  //   org: "FreeCodeCamp",
  // },
  // {
  //   label: "Google Certificate",
  //   image: "https://cdn-icons-png.flaticon.com/512/281/281764.png",
  //   url: "https://coursera.org/verify/google-cert", // Example, replace with your link
  //   org: "Google/Coursera",
  // },
  // {
  //   label: "Meta Front-End",
  //   image: "https://static.coursera.org/asset-v1:Meta+MetaFE+Meta_Front-End_Professional_Certificate+type@thumbnail+block@img.png",
  //   url: "https://coursera.org/verify/meta-cert", // Example, replace with your link
  //   org: "Meta/Coursera",
  // },
];

const Achievements = () => (
  <div className="flex flex-wrap gap-5">
    {ACHIEVEMENTS.map((item) => (
      <a
        key={item.label}
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-card shadow border border-border rounded-xl flex flex-col items-center p-5 w-[155px] hover:shadow-lg group transition-all focus:ring-2 ring-primary outline-none"
        title={item.label}
      >
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-muted mb-3 overflow-hidden border border-primary/25">
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image} alt={item.label} className="w-10 h-10 object-contain" />
          ) : (
            <Badge className="text-primary" size={36} />
          )}
        </span>
        <span className="font-semibold text-xs text-center mb-1">{item.label}</span>
        <span className="text-[11px] text-muted-foreground text-center">{item.org}</span>
        <span className="mt-3 text-emerald-600 font-bold flex items-center gap-1 text-xs">
          <BadgeCheck className="inline" size={14} /> Verified
        </span>
      </a>
    ))}
  </div>
);

export default Achievements;

