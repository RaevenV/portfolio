import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const downImgRef = useRef(null);

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
              gsap.to("#down-img", { opacity: 0, duration: 0.2 });
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

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: "#project1",
        start: "top 50%",
        end: "bottom 89%",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress * 250;
          const progress2 = self.progress * 100;
          gsap.to("#project2", { y: -progress, ease: "none" });
          gsap.to("#project1", { width: "47%", ease: "none" });
          gsap.to("#project4", { y: -progress2, ease: "none" });
          gsap.to("#project3", { width: "54%", ease: "none", delay: 1 });
          gsap.to("#project4", { width: "43%", ease: "none", delay: 1 });
        },
      });

      ScrollTrigger.create({
        trigger: "#project4",
        start: "top 40%",
        end: "bottom 90.5%",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress * 150;
          const progress2 = self.progress * 200;
          gsap.to("#project3", { y: -progress, ease: "none" });
          
          gsap.to("#project5", { y: -progress2, ease: "none" });
          gsap.to("#project6", { y: -progress, ease: "none" });
          gsap.to("#project5", { width: "40%", ease: "none", delay: 1 });
          gsap.to("#project6", { width: "57%", ease: "none", delay: 1 });
        },
      });

      ScrollTrigger.create({
        trigger: "#project6",
        start: "top 50%",
        end: "bottom 90%",
        scrub: 1.5,
        onUpdate: () => {
          
          gsap.to("#project1", { width: "50%", ease: "none" });
          gsap.to("#project2", { width: "47%", ease: "none" });
          gsap.to("#project3", { width: "54%", ease: "none" });
        },
      });
    });

    gsap.utils
      .toArray<HTMLDivElement>(".project-section")
      .forEach((project) => {
        gsap.set(project, { scale: 1 });
        project.addEventListener("mouseenter", () => {
          gsap.to(project, {
            scale: 1.015,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        project.addEventListener("mouseleave", () => {
          gsap.to(project, {
            scale: 1,
            duration: 0.3,
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
        ref={containerRef}
        className="relative w-full mt-4 lg:mt-0 min-h-screen flex flex-col justify-center items-center mb-32 md:mb-20 pt-32"
      >
        <div className="scroll-block top-0 absolute w-full h-10"></div>
        <div
          id="title"
          className="w-[270px] h-20 absolute top-400 font-raleway font-extrabold text-[40px] lg:text-[58px] flex justify-center items-center"
        >
          PROJECTS
        </div>

        <div
          id="project-window"
          className="relative md:w-[80%] w-[85%] min-h-[1800px] md:min-h-[3000px] rounded-md flex flex-col justify-start items-center mb-10 gap-y-4 "
        >
          <div
            id="project1"
            className=" shadow-2xl project-section md:absolute left-0 top-0 w-full md:w-[50%] bg-red-500 h-[350px] md:h-[650px] flex flex-col justify-center items-center rounded-2xl"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">Project 1</div>
          </div>
          <div
            id="project2"
            className="shadow-2xl project-section md:absolute right-0 md:top-60 w-full md:w-[47%] bg-yellow-500 h-[350px] md:h-[470px] flex flex-col justify-between items-center rounded-2xl"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">Project 2</div>
          </div>
          <div
            id="project3"
            className="shadow-2xl project-section md:absolute md:top-[800px] w-full md:w-[44%] left-0 bg-blue h-[350px] md:h-[450px] flex flex-col justify-between items-center rounded-2xl"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">Project 3</div>
          </div>
          <div
            id="project4"
            className="shadow-2xl project-section md:absolute md:top-[780px] right-0 w-full md:w-[53%] bg-green-500 h-[350px] md:h-[600px] flex flex-col justify-between items-center rounded-2xl"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">Project 4</div>
          </div>
          <div
            id="project5"
            className="shadow-2xl project-section md:absolute md:top-[1400px] w-full md:w-[49%] left-0 bg-purple-500 h-[350px] md:h-[500px] flex flex-col justify-between items-center rounded-2xl"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">Project 5</div>
          </div>
          <div
            id="project6"
            className="shadow-2xl project-section md:absolute md:top-[1480px] right-0 w-full md:w-[49%] bg-pink-500 h-[350px] md:h-[500px] flex flex-col justify-between items-center rounded-2xl"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">Project 6</div>
          </div>
        </div>
      </div>
    </>
  );
}
