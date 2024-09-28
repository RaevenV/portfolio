import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const downImgRef = useRef(null);

  useEffect(() => {
    const sections = sectionsRef.current;

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
                { top: 120 },
                { top: 0, duration: 0.8, ease: "back.out(1.7)" }
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

    let timelines: gsap.core.Timeline[] = [];

    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      const content = section.querySelector(".content");
      if (content) {
        tl.from(content, { y: 100, opacity: 0 });
      }

      if (index < sections.length - 1) {
        tl.to({}, { duration: 0.5 });
      }

      timelines.push(tl);
    });

    timelines.forEach((tl, index) => {
      if (index < timelines.length - 1) {
        ScrollTrigger.create({
          trigger: sections[index + 1],
          start: "top bottom",
          onEnter: () => tl.play(),
          onLeaveBack: () => tl.pause(),
        });
      }
    });

    return () => {
      timelines.forEach((tl) => tl.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
      removeDownTl.kill();
      introTl.kill();

    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

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
        className="relative w-full mt-4 lg:mt-0 min-h-screen flex flex-col justify-center items-center mb-32 md:mb-20 md:pt-32"
      >
        <div
          id="title"
          className="w-[270px] h-20 absolute top-10 font-raleway font-extrabold text-[40px] lg:text-[58px] flex justify-center items-center"
        >
          PROJECTS
        </div>

        <div
          id="project-window"
          className="relative md:w-[80%] w-[85%] min-h-[700px] md:min-h-[3500px] rounded-md flex flex-col justify-start items-start mb-20"
        >
          <div
            ref={addToRefs}
            className="project-section absolute top-0 w-full md:w-[60%] bg-red-500 h-[700px] flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="content">Project 1</div>
          </div>
          <div
            ref={addToRefs}
            className="project-section absolute right-0 top-40 w-full md:w-[37%] bg-yellow-500 h-[440px] flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="content">Project 2</div>
          </div>
          <div
            ref={addToRefs}
            className="project-section absolute top-[840px] w-full md:w-[43%] bg-blue-500 h-[450px] flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="content">Project 3</div>
          </div>
          <div
            ref={addToRefs}
            className="project-section absolute top-[760px] right-0 w-full md:w-[55%] bg-green-500 h-[600px] flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="content">Project 4</div>
          </div>
          <div
            ref={addToRefs}
            className="project-section absolute top-[1400px] w-full md:w-[49%] bg-purple-500 h-[500px] flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="content">Project 5</div>
          </div>
          <div
            ref={addToRefs}
            className="project-section absolute top-[1460px] right-0 w-full md:w-[49%] bg-pink-500 h-[500px] flex flex-col justify-between items-center rounded-2xl"
          >
            <div className="content">Project 6</div>
          </div>
        </div>
      </div>
    </>
  );
}
