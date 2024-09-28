import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const downImgRef = useRef(null);

  useEffect(() => {
    const downImg = downImgRef.current;

    const removeDownTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projects",
        onEnter: () => {
          gsap.to("#down-container", {
            marginBottom: 0,
            duration: 0.4,
            onComplete: () => {
              gsap.to("#down-img", { opacity: 0 });
              gsap.fromTo(
                "#title",
                { top: 80 },
                { top: 10, duration: 0.8, ease: "back.out(1.7)" }
              );
              gsap.to("#hor-line2", {
                right: "-2%",
                duration: 0.4,
                delay: 0.2,
              });
              gsap.to("#hor-line3", {
                left: "-2%",
                duration: 0.4,
                delay: 0.2,
              });
            },
          });
        },
      },
    });

    const ProfileTl = gsap.timeline({ repeat: -1, yoyo: true });

    ProfileTl.to(downImg, {
      y: 10,
      duration: 0.4,
      ease: "power1.inOut",
    });

    return () => {
      removeDownTl.kill();
      ProfileTl.kill();
    };
  }, []);

  return (
    <>
      <div
        id="down-container"
        className="hidden md:block mt-8 md:mt-4 mb-6 h-[60px] lg:h-[50px] w-full relative"
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
        className="relative w-full mt-4 lg:mt-0 min-h-screen flex justify-center items-center mb-32 md:mb-20 md:pt-20"
      >
        <div
          id="title"
          className="w-[270px] h-20 absolute bottom-0 font-raleway font-extrabold text-[40px] lg:text-[58px] flex justify-center items-center"
        >
          PROJECTS
        </div>

        <div
          id="project-window"
          className="relative md:w-[80%] w-[85%] min-h-[75%] md:h-[90%] pt-16 rounded-md flex flex-col justify-start items-start mb-20"
        >
          <div className="min-w-[700px] bg-red-500 h-[700px] flex flex-col justify-between items-center rounded-2xl">
            test
          </div>
          <div className="mt-4 min-w-[200px] bg-red-500 h-[700px] flex flex-col justify-between items-center rounded-2xl">
            test
          </div>
          <div className="mt-4 min-w-[200px] bg-red-500 h-[700px] flex flex-col justify-between items-center rounded-2xl">
            test
          </div>
        </div>
      </div>
    </>
  );
}
