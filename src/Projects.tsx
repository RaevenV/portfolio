import "@nextui-org/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  useEffect(() => {

    const removeDownTl = gsap.timeline({
      scrollTrigger: "#projects",
    });

    removeDownTl.to("#down-container", {
      opacity: 0,
      duration: 0.2, 
      delay: 0.2,
      onComplete: () => {
       introTl.pause(0);
        const downContainer = document.querySelector(
          "#down-container"
        ) as HTMLElement;
        if (downContainer) {
          downContainer.style.display = "none";
        }
       gsap.fromTo("#title", { bottom:0 ,opacity: 0 }, {top:30, opacity:100, duration:0.4, ease:"back.out(1.6)"});
      },
    });

    const introTl = gsap.timeline({
      scrollTrigger: ".home-container",
      repeat: -1,
    });

    introTl.fromTo(
      "#down-container",
      { alignItems: "flex-start" },
      {
        alignItems: "flex-end",
        duration: 0.4,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to("#down-container", {
            alignItems: "flex-start",
            duration: "0.2",
            ease: "power1.inOut",
          });
        },
      }
    );
  }, []);

  return (
    <>
      <div
        id="down-container"
        className="mt-8 md:mt-4 mb-6 h-[60px] lg:h-[50px] w-full flex justify-center items-start"
      >
        {" "}
        <img
          id="down-img"
          className="w-[40px] h-[40px]"
          src="./down.png"
          alt=""
        />
      </div>
      <section
        id="projects"
        className="relative md:px-[10%] w-full mt-4 lg:mt-0 h-[300px] md:h-[555px] flex flex-col  items-center justify-start lg:overflow-hidden"
      >
        <div
          id="title"
          className="absolute bottom-0 font-roboto font-extrabold text-[40px] lg:text-[85px]"
        >
          MY PROJECTS
        </div>
      </section>
    </>
  );
}
