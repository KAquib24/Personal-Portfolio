
import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialIcons = () => (
  <div className="flex gap-5 mt-4 justify-center">
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <Github size={28} className="hover:text-primary transition" />
    </a>
    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <Linkedin size={28} className="hover:text-primary transition" />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <Twitter size={28} className="hover:text-primary transition" />
    </a>
  </div>
);

export default SocialIcons;
