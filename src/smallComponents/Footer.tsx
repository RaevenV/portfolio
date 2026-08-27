/* Hallmark · footer: Ft6 Letter close — a signoff, not a corporate "Thank You".
 * Includes the new Contact section anchor. */

const Footer = () => {
  return (
    <footer id="contact" className="w-full scroll-mt-24">
      <div className="w-full px-[6%] border-t border-ink pt-16 md:pt-24 pb-16">
        <p className="h-label mb-6">§ Contact</p>
        <p className="font-display font-normal text-ink [font-size:var(--text-display-s)] max-w-[18ch] leading-[1.05] [overflow-wrap:anywhere] min-w-0">
          Have something worth building? Let&apos;s talk.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.14em]">
          <a href="https://github.com/RaevenV" target="_blank" rel="noreferrer" className="h-link py-1">
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/raeven-villarel-81093421a/"
            target="_blank"
            rel="noreferrer"
            className="h-link py-1"
          >
            LinkedIn ↗
          </a>
          <a href="https://www.instagram.com/raevenvw" target="_blank" rel="noreferrer" className="h-link py-1">
            Instagram ↗
          </a>
        </div>
      </div>

      <div className="w-full px-[6%] border-t border-rule py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-display text-ink text-[length:var(--text-lg)]">
          Until next time,{" "}
          <span className="text-accent">Raeven.</span>
        </p>
        <p className="h-label">
          © {new Date().getFullYear()} Raeven Villarel Widjaja
        </p>
      </div>
    </footer>
  );
};

export default Footer;
