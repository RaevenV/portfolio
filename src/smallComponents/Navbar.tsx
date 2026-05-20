import { useState } from "react";
import { Link } from "react-scroll";

export default function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-surface/90 backdrop-blur-sm border-b border-border flex items-center px-6 md:px-12">
      <div className="w-full flex items-center justify-between">
        <span className="font-display font-bold text-lg text-ink tracking-tight">
          RV
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink-light">
          <Link
            to="profile"
            smooth={true}
            duration={800}
            offset={-64}
            className="relative cursor-pointer hover:text-ink transition-colors duration-200 group"
          >
            Profile
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-64}
            className="relative cursor-pointer hover:text-ink transition-colors duration-200 group"
          >
            Projects
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-6 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
          />
          <span
            className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`}
          />
          <span
            className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2.5" : "w-6"}`}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`absolute top-16 left-0 right-0 bg-surface border-b border-border flex flex-col items-center gap-6 py-8 text-sm font-medium text-ink-light transition-all duration-300 md:hidden ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <Link
          to="profile"
          smooth={true}
          duration={800}
          offset={-64}
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer hover:text-ink transition-colors duration-200"
        >
          Profile
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={800}
          offset={-64}
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer hover:text-ink transition-colors duration-200"
        >
          Projects
        </Link>
      </div>
    </header>
  );
}
