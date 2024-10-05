import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const downImgRef = useRef(null);
  const [isProject2Expanded, setIsProject2Expanded] = useState(false);
  const [isProject1Expanded, setIsProject1Expanded] = useState(false);
  const [isProject3Expanded, setIsProject3Expanded] = useState(false);
  const [isProject4Expanded, setIsProject4Expanded] = useState(false);
  const [isProject5Expanded, setIsProject5Expanded] = useState(false);
  const [isProject6Expanded, setIsProject6Expanded] = useState(false);

  useEffect(() => {
    const downImg = downImgRef.current;

    const removeDownTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-block",
        start: "top 90%",
        onEnter: () => {
          gsap.to("#down-container", {
            marginBottom: 0,
            duration: 0.4,
            onComplete: () => {
              gsap.to("#down-img", { opacity: 0, duration: 0.1 });
              gsap.fromTo(
                "#title",
                { top: 400 },
                { top: 0, duration: 0.6, ease: "back.out(1.7)" }
              );
            },
          });
        },
      },
    });

    const introTl = gsap.timeline({ repeat: -1, yoyo: true });

    introTl.to(downImg, {
      y: 10,
      duration: 0.4,
      ease: "power1.inOut",
    });

    gsap.utils
      .toArray<HTMLDivElement>(".project-section")
      .forEach((project) => {
        gsap.set(project, { scale: 1 });
        project.addEventListener("mouseenter", () => {
          gsap.to(project, {
            scale: 1.015,
            duration: 0.1,
            ease: "power2.out",
          });
        });
        project.addEventListener("mouseleave", () => {
          gsap.to(project, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      });

    return () => {
      removeDownTl.kill();
      introTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleProjectExpand = (
    projectId: string,
    isExpanded: boolean,
    setExpanded: (value: boolean) => void
  ) => {
    const projectContent = document.querySelector(`#${projectId}-content`);

    if (!isExpanded) {
      gsap.to(projectContent, {
        height: "340px",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(`#${projectId} .clicktoread`, {
        display: "none",
        duration: 0.4,
      });
    } else {
      gsap.to(projectContent, {
        height: "200px",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(`#${projectId} .clicktoread`, {
        display: "block",
        duration: 0.4,
      });
    }

    setExpanded(!isExpanded);
  };

  return (
    <>
      <div
        id="down-container"
        className="block mt-8 mb-6 h-[60px] lg:h-[50px] w-full relative"
      >
        <img
          ref={downImgRef}
          id="down-img"
          className="w-[40px] h-[40px] left-[50%] absolute"
          src="./down.png"
          alt="Scroll down"
        />
      </div>
      <div
        id="projects"
        ref={containerRef}
        className="relative w-full mt-4 lg:mt-0 min-h-screen flex flex-col items-center mb-32 md:mb-20 pt-[220px] md:pt-[240px]"
      >
        <div className="scroll-block top-0 absolute w-full h-10"></div>
        <div
          id="title"
          className="w-full h-20 absolute font-raleway flex flex-col items-center"
        >
          <div className="flex flex-col">
            <div className="top w-full flex justify-start items-center font-medium font-bitter mb-[-18px] text-[18px] italic">
              personal
            </div>
            <div className="w-full font-extrabold text-[35px] lg:text-[52px] flex justify-start items-start">
              PROJECTS
            </div>
          </div>
          <div className="mt-4 desc w-[380px] h-auto font-raleway text-center">
            These projects reflect my journey in blending creativity with
            technology, each solving real-world problems through thoughtful
            design and code.
          </div>
        </div>

        <div
          id="project-window"
          className="w-full md:w-[80%] min-h-[1800px] md:min-h-[1400px] rounded-md flex flex-col md:flex-row flex-wrap justify-between items-center md:items-start gap-y-4 md:gap-y-8 cursor-pointer scroll-smooth"
        >
          <ProjectCard
            id="project1"
            title="SOCIAL PEERS"
            description="is an innovative app designed to help freshmen at Binus University navigate their first year with ease."
            backgroundImage="./socialPeers.png"
            technologies={["swift.png", "swiftui.png"]}
            role="Fullstack Developer"
            details="The app connects new students with experienced upperclassmen who serve as freshmen partners. As challenges get completed, they earn rewards, making the experience fun and rewarding."
            collaborators="Aryo Bimo, Alfakhri Rizqulloh, Michelle Angela, Alexander Theodore"
            isExpanded={isProject1Expanded}
            setExpanded={setIsProject1Expanded}
            handleExpand={handleProjectExpand}
          />

          <ProjectCard
            id="project2"
            title="DOOIT"
            description="is a web-based financial education app that fills the gap of financial literacy in Indonesia."
            backgroundImage="./dooit.png"
            technologies={["react.png", "firebase.png"]}
            role="Fullstack Developer"
            details="The app doesn't focus on how to generate money. Instead, we focus on how to manage the money that we have, increasing self-worth, and laying the fundamentals of building a business."
            collaborators="Ryan Errando, Samantha Michelle Ferdi Karjadiputra, and Darwin Anathapindika"
            isExpanded={isProject2Expanded}
            setExpanded={setIsProject2Expanded}
            handleExpand={handleProjectExpand}
          />

          <ProjectCard
            id="project3"
            title="OTOCARE"
            description="is an innovative platform where users can look up services for their car from nearest repair shops and place a reservation on a certain time."
            backgroundImage="./otocare.png"
            technologies={["react.png", "firebase.png"]}
            role="Fullstack Developer"
            details="The app connects new students with experienced upperclassmen who serve as freshmen partners. As challenges get completed, they earn rewards, making the experience fun and rewarding."
            collaborators="Samuel Dwiputra, Daniel Christian Purba, Ivan Yonathan Siwu, James Santoso"
            isExpanded={isProject3Expanded}
            setExpanded={setIsProject3Expanded}
            handleExpand={handleProjectExpand}
          />

          <ProjectCard
            id="project4"
            title="IFVENT - (continuation)"
            description="is a comprehensive event management solution that integrates advanced tech to simplify event planning and coordination in Indonesia."
            backgroundImage="./ifvent.png"
            technologies={["php.png", "laravel.png", "aws.png", "eb.png"]}
            role="Junior Fullstack Developer"
            details="Specializing in ticket registration, seat allocation, and other essential technical services to ensure smooth attendee experiences while empowering event organizers with reliable tools for efficient execution."
            collaborators="Andrew J Mulia, Arvan Kusniawan, Bobby Stenly, Irfandi Riawan"
            isExpanded={isProject4Expanded}
            setExpanded={setIsProject4Expanded}
            handleExpand={handleProjectExpand}
          />

          <ProjectCard
            id="project5"
            title="PANTRY PARTY - in progress"
            description="is a culinary themed web app that provides solutions for college students that struggle in making daily meals"
            backgroundImage="./pantry.png"
            technologies={["typescript.png", "react.png", "tailwind.png"]}
            role="Fullstack Developer"
            details="The app helps young adults who struggle to cook by providing features like preportioning meals, step-by-step cooking guide, and vast curated simple menu options. Aiming to make the cooking experience more fun and efficient for them!"
            collaborators="Samantha Michelle, Angel Pricilla Salim, Benedictus Bryant"
            isExpanded={isProject5Expanded}
            setExpanded={setIsProject5Expanded}
            handleExpand={handleProjectExpand}
          />

          <ProjectCard
            id="project6"
            title="WASTENOT - in progress"
            description="is a web app that aims to solve SDG number 2 - Zero Hunger by providing restaurants with dashboards to track their wastage"
            backgroundImage="./mockup-example.jpg"
            technologies={["php.png", "laravel.png", "tailwind.png"]}
            role="Fullstack Developer"
            details="The app connects new students with experienced upperclassmen who serve as freshmen partners. As challenges get completed, they earn rewards, making the experience fun and rewarding."
            collaborators="Aryo Bimo, Alfakhri Rizqulloh, Michelle Angela, Alexander Theodore"
            isExpanded={isProject6Expanded}
            setExpanded={setIsProject6Expanded}
            handleExpand={handleProjectExpand}
          />
        </div>
      </div>
    </>
  );
}

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

const ProjectCard: React.FC<ProjectCardProps> = ({
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
        className="content w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
      >
        <div className="text-2xl font-extrabold mb-2 text-white">{title}</div>
        <div className="text-sm text-white/80 font-medium">{description}</div>
        <div className="w-[100px] h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
          {technologies.map((tech, index) => (
            <img key={index} className="w-8 h-6 rounded-md" src={tech} alt="" />
          ))}
        </div>
        <div className="clicktoread text-sm text-slate-100 mt-2">
          click to read more
        </div>
        <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
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