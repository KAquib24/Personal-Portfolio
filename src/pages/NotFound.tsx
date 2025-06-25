
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route.");
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center animate-fade-in">
      <h1 className="font-display text-7xl mb-4 text-primary font-bold">404</h1>
      <p className="text-xl text-muted-foreground mb-5">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
