interface ExperienceCardProps {
  name: string;
  company: string;
  year: string;
  description: string;
  img:string | null;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
    name,
    company,
    year,
    description,
    img,
}) => {
    return (
      <div className="item1 w-full h-auto flex flex-row justify-start items-start gap-x-4">
        <span className="w-12 h-[1px] bg-white mt-4"></span>
        <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
          <div className="text-[18px] font-bold italic">{name}</div>
          <div className="text-[14px] font-light mb-2">{year}</div>
          <div className="flex flex-row w-full gap-x-2 items-center mb-2">
            {img && <img src={img} alt={company} className="w-6 h-6" />}
            <div className="text-[15px] font-normal">{company}</div>
          </div>

          <div className="text-[14px] font-light">{description}</div>
        </div>
      </div>
    );
};
