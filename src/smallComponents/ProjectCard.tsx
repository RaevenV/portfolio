interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  technologies: string[];
  role: string;
  details: string;
  collaborators: string;
  isExpanded: boolean;
  setExpanded: (value: boolean) => void;
  handleExpand: (
    projectId: string,
    isExpanded: boolean,
    setExpanded: (value: boolean) => void
  ) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  backgroundImage,
  technologies,
  role,
  details,
  collaborators,
  isExpanded,
  setExpanded,
  handleExpand,
}) => {
  return (
    <div
      id={id}
      className={`shadow-md shadow-slate-800 transition-all project-section flex flex-col justify-end items-center rounded-2xl overflow-hidden w-[90%] md:w-[48%] h-[500px]`} // Set fixed height
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => handleExpand(id, isExpanded, setExpanded)}
    >
      <div
        id={`${id}-content`}
        className="content w-full h-[200px] md:h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%]"
      >
        <div className="text-lg md:text-2xl font-extrabold mb-2 text-white">{title}</div>
        <div className=" text-[12px] md:text-sm text-white/80 font-medium">{description}</div>
        <div className="w-[100px] h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
          {technologies.map((tech, index) => (
            <img key={index} className="md:w-8 md:h-6 h-6 w-6 rounded-md" src={tech} alt="" />
          ))}
        </div>
        <div className="clicktoread text-sm text-slate-100 mt-2 ">
          click to read more
        </div>
        <div className="text-sm text-slate-100  pt-[15px] md:pt-[20px]">
          <b>Role: {role}</b>
        </div>
        <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2">
          <div className="text-sm font-medium">{details}</div>
          <div className="text-sm">
            <b>Collaborators: </b>
            {collaborators}
          </div>
        </div>
      </div>
    </div>
  );
};
