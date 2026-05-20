interface ExperienceCardProps {
  name: string;
  company: string;
  year: string;
  description: string;
  img: string | null;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  name,
  company,
  year,
  description,
  img,
}) => {
  return (
    <div className="relative pl-6 group">
      {/* Dot on the shared timeline line */}
      <div className="absolute left-[-4px] top-[7px] w-2 h-2 rounded-full border-2 border-accent bg-surface group-hover:bg-accent transition-colors duration-300 z-10" />

      <div className="font-mono mb-0.5 text-xs text-ink-light tracking-wide uppercase">
        {year}
      </div>
      <div className="font-display font-bold text-[15px] text-ink leading-snug mb-0.5">
        {name}
      </div>
      <div className="flex items-center gap-2 mb-1.5">
        {img && (
          <img src={img} alt={company} className="w-4 h-4 rounded-sm object-cover" />
        )}
        <div className="text-[13px] text-ink-light font-medium">{company}</div>
      </div>
      <div className="text-[13px] text-ink-light leading-relaxed">{description}</div>
    </div>
  );
};
