import "@nextui-org/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {

  
  return (
    <section
      id="projects"
      className="md:px-[10%] mt-12 w-full h-auto md:h-[555px] flex flex-col  items-center justify-start overflow-hidden"
    >
      <div className="font-roboto font-extrabold lg:text-[65px]">
        MY PROJECTS
      </div>
    </section>
  );
}
