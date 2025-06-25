
import * as React from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // Always default to dark theme on first load
  const [isDark, setIsDark] = React.useState(true);

  // Add smooth transition on theme switch
  const animateThemeTransition = () => {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    // Remove after animation finishes for snappy feel
    setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 300);
  };

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    animateThemeTransition();
    // eslint-disable-next-line
  }, [isDark]);

  return (
    <button
      type="button"
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-accent transition shadow"
      aria-label="Toggle dark mode"
      onClick={() => setIsDark((p) => !p)}
    >
      {isDark ? (
        <Moon size={20} className="text-primary transition-all" />
      ) : (
        <Sun size={20} className="text-primary transition-all" />
      )}
    </button>
  );
};

export default ThemeToggle;
