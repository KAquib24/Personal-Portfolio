
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";

// Custom sliding underline class with Tailwind
const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Projects", to: "/projects" },
  { name: "Resume", to: "/resume" },
  { name: "Contact", to: "/contact" },
];

// CSS for sliding underline (put this at top or in index.css)
// Use Tailwind's group-hover:scale-x-100 and transform
const navUnderlineClass =
  "relative after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:h-[2.5px] after:w-full after:bg-primary after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100" +
  " transition-colors duration-200 hover:text-accent-foreground";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-30 w-full bg-background/80 shadow-sm backdrop-blur">
      <nav className="container max-w-[1100px] mx-auto flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-primary flex items-center gap-2">
          <span className="text-primary">Aquib Khan</span>
        </Link>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 font-semibold">
          {NAV_LINKS.map((link) => (
            <li key={link.to} className="group relative">
              <Link
                to={link.to}
                className={`${navUnderlineClass} px-2 py-1 ${
                  location.pathname === link.to
                    ? "text-primary after:scale-x-100 after:origin-bottom-left"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
        {/* Mobile nav button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="ml-2 p-2 rounded-lg hover:bg-accent focus:outline-none transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute w-full bg-background border-b border-border shadow flex flex-col z-50 animate-fade-in">
          <ul className="flex flex-col gap-1 py-3 font-medium container max-w-[1100px] mx-auto">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    location.pathname === link.to
                      ? "bg-accent text-primary"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
