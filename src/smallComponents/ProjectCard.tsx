import { useState } from "react";

interface ProjectCardProps {
  index: number;
  title: string;
  ongoing?: boolean;
  description: string;
  backgroundImage: string;
  technologies: string[];
  role: string;
  details: string;
  collaborators: string;
}

/* Hallmark · editorial project entry — numbered, hairline-divided, two-column
 * (text ↔ screenshot) that stacks on mobile. Details expand in place; the whole
 * row lifts a hair on hover. Ongoing work is flagged with a quiet rust marker. */

export const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  ongoing,
  description,
  backgroundImage,
  technologies,
  role,
  details,
  collaborators,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="border-t border-rule first:border-t-0">
      <div className="group grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-10 gap-y-6 py-10">
        {/* Text column */}
        <div className="min-w-0 order-2 md:order-1">
          <div className="flex items-baseline gap-x-4">
            <span className="font-mono text-xs text-accent pt-1 tabular-nums">
              {String(index).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display font-normal text-ink text-[length:var(--text-2xl)] leading-none [overflow-wrap:anywhere]">
                  {title}
                </h3>
                {ongoing && (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Ongoing
                  </span>
                )}
              </div>

              <p className="mt-4 max-w-measure text-ink-2 text-[length:var(--text-sm)] leading-relaxed">
                {description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 border border-rule px-2 py-1 rounded-[2px]"
                  >
                    <img src={tech} alt="" className="w-4 h-4 object-contain" />
                  </span>
                ))}
                <span className="ml-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
                  {role}
                </span>
              </div>

              {/* Expandable detail */}
              <div
                className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="mt-5 max-w-measure text-[length:var(--text-sm)] leading-relaxed text-muted">
                    {details}
                  </p>
                  <p className="mt-3 max-w-measure text-[length:var(--text-xs)] leading-relaxed text-neutral">
                    <span className="font-mono uppercase tracking-[0.12em] text-muted">
                      Collaborators:{" "}
                    </span>
                    {collaborators}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="h-link mt-5 font-mono text-xs uppercase tracking-[0.14em] text-ink py-1"
              >
                {open ? "Close ↑" : "Read more →"}
              </button>
            </div>
          </div>
        </div>

        {/* Screenshot column */}
        <figure className="order-1 md:order-2 self-start w-full">
          <div className="inline-block border border-ink p-1 bg-paper-2 overflow-hidden">
            <img
              src={backgroundImage}
              alt={`${title} screenshot`}
              loading="lazy"
              className="block w-full h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transform-none"
            />
          </div>
        </figure>
      </div>
    </li>
  );
};
