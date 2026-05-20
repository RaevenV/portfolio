const Footer = () => {
  return (
    <footer className="w-full bg-[#161830] px-6 md:px-12 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="flex flex-col gap-1">
        <span className="font-display font-bold text-white text-2xl">RV</span>
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          Fullstack Developer
        </span>
      </div>

      <div className="flex flex-col items-start md:items-center gap-1">
        <p className="text-sm text-slate-300 font-medium">Raeven Villarel</p>
        <p className="font-mono text-xs text-slate-500">
          &copy; {new Date().getFullYear()} — All rights reserved
        </p>
      </div>

      <div className="flex items-center gap-3">
        {[
          { href: "https://github.com/RaevenV", label: "GitHub" },
          { href: "https://www.linkedin.com/in/raeven-villarel-81093421a/", label: "LinkedIn" },
          { href: "https://www.instagram.com/raevenvw", label: "Instagram" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-slate-400 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-slate-600 hover:decoration-white"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
