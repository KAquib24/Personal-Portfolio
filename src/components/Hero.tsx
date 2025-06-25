
import React from "react";
import Typewriter from "typewriter-effect";
import Random from "/public/assets/default-avatar-profile-icon-transparent-600nw-2534623311.webp"

// Use a remote placeholder developer photo (woman at laptop, from Unsplash)
const PROFILE_IMG =
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=400&h=400&facepad=2&q=80";

const HEADLINES = [
  "Front-End Developer",
  "React & TypeScript Enthusiast",
  "UI/UX Explorer",
  "Open Source Contributor",
];

const Hero = () => (
  <section
    className="flex flex-col lg:flex-row items-center justify-between gap-10 py-12 animate-fade-in"
    id="home"
  >
    <div className="flex-1 flex flex-col items-start lg:pr-16 transition-all">
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-fade-in">
        Hi, I'm Aquib Khan
      </h1>
      <div className="mt-2 mb-6 text-2xl text-muted-foreground font-sans min-h-[42px]">
        <Typewriter
          options={{
            strings: HEADLINES,
            autoStart: true,
            loop: true,
            delay: 55,
            deleteSpeed: 35,
            wrapperClassName: "font-semibold text-accent-foreground",
            cursorClassName: "text-primary text-2xl font-bold pl-1",
          }}
        />
      </div>
      <p className="text-lg max-w-xl mb-6 leading-relaxed text-muted-foreground">
        I build delightful digital interfaces with modern JavaScript, React, and beautiful design systems.
        Let's create something amazing together!
      </p>
      <a
        href="/#projects"
        className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-semibold shadow hover:scale-105 transition"
      >
        View Projects
      </a>
    </div>
    <div className="flex-1 flex justify-center items-center">
      <img
        src={Random}
        alt="Aquib Khan portrait"
        className="w-60 h-60 rounded-full object-cover border-4 border-primary shadow-lg bg-muted transition duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  </section>
);

export default Hero;

