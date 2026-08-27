interface ExperienceCardProps {
  index: number;
  name: string;
  company: string;
  year: string;
  description: string;
  img: string | null;
}

/* Hallmark · editorial timeline row — numbered, hairline-divided, roman heads. */

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  index,
  name,
  company,
  year,
  description,
  img,
}) => {
  return (
    <li className="group grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 md:gap-x-8 py-7 border-t border-rule first:border-t-0">
      <span className="font-mono text-xs text-accent pt-1.5 tabular-nums">
        {String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="font-display font-normal text-ink text-[length:var(--text-lg)] leading-tight">
            {name}
          </h3>
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted whitespace-nowrap">
            {year}
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-x-2">
          {img && (
            <img
              src={img}
              alt={company}
              className="w-5 h-5 object-contain rounded-[2px]"
            />
          )}
          <span className="text-[length:var(--text-sm)] font-medium text-ink-2">
            {company}
          </span>
        </div>

        <p className="mt-3 max-w-measure text-[length:var(--text-sm)] leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </li>
  );
};
