import { useState } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  technologies: string[];
  role: string;
  details: string;
  collaborators: string;
  ongoing?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  backgroundImage,
  technologies,
  role,
  details,
  collaborators,
  ongoing,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl cursor-pointer w-full aspect-[4/3]"
      onClick={() => setExpanded((v) => !v)}
    >
      {/* Background image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Always-visible gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

      {/* Ongoing flag */}
      {ongoing && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/40">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">
            Ongoing
          </span>
        </div>
      )}

      {/* Collapsed state: title + tech icons */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 ease-out ${expanded ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"}`}
      >
        <div className="flex gap-2 mb-2">
          {technologies.map((tech, i) => (
            <img
              key={i}
              src={tech}
              alt=""
              className="w-8 h-8 rounded object-contain bg-white/10 p-1"
            />
          ))}
        </div>
        <div className="font-display font-bold text-xl text-white leading-tight">
          {title}
        </div>
        <div className="text-white/70 text-sm mt-1 line-clamp-2">{description}</div>
        <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1.5 rounded-md bg-white/15 border border-white/30 font-mono text-white text-xs tracking-wide backdrop-blur-sm">
          tap to expand →
        </div>
      </div>

      {/* Expanded detail overlay */}
      <div
        className={`absolute inset-0 bg-ink/92 flex flex-col justify-end p-5 transition-all duration-500 ease-out ${expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"}`}
      >
        <div className="font-display font-bold text-xl text-white mb-2">{title}</div>
        <div className="font-mono text-[#93c5fd] text-xs uppercase tracking-widest mb-3">
          {role}
        </div>
        <p className="text-white/80 text-sm leading-relaxed mb-3">{details}</p>
        <div className="text-white/50 text-xs">
          <span className="text-white/70 font-medium">With: </span>
          {collaborators}
        </div>
        <div className="flex gap-2 mt-4">
          {technologies.map((tech, i) => (
            <img
              key={i}
              src={tech}
              alt=""
              className="w-8 h-8 rounded object-contain bg-white/10 p-1"
            />
          ))}
        </div>
        <div className="text-white/40 text-xs mt-3">tap to close</div>
      </div>
    </div>
  );
};
