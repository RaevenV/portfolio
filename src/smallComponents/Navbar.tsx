import { useState } from "react";
import { Link } from "react-scroll";

/* Hallmark · nav: N6 Newspaper masthead — full-width wordmark, issue/date row,
 * double rule below. Editorial default. Mobile collapses the nav row behind a
 * "menu" disclosure. */

const NAV = [
  { to: "profile", label: "Profile", offset: -120 },
  { to: "work", label: "Selected Work", offset: -80 },
  { to: "contact", label: "Contact", offset: -80 },
];

const issueDate = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-paper border-b border-rule">

      {/* Masthead */}
      <div className="w-full px-[6%] pt-5 pb-4 flex items-end justify-end gap-4">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-x-7 pb-1 font-mono text-xs uppercase tracking-[0.14em]">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={800}
              offset={item.offset}
              className="h-link cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile disclosure */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden font-mono text-xs uppercase tracking-[0.14em] text-ink px-3 py-2 min-h-[44px]"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Double rule below the masthead */}
      <div className="w-full border-b-2 border-ink" />
      <div className="w-full border-b border-ink mt-[3px]" />

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden w-full px-[6%] py-3 flex flex-col border-b border-rule bg-paper-2">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              duration={800}
              offset={item.offset}
              onClick={() => setOpen(false)}
              className="cursor-pointer font-mono text-sm uppercase tracking-[0.14em] py-3 min-h-[44px] flex items-center border-b border-rule last:border-b-0 text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
