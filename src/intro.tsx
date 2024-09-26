import "@nextui-org/react";
// import Typewriter from "./Typewriter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger);

export function Intro() {
    

    useEffect(() => {
        const tl = gsap.timeline({
        scrollTrigger: ".home-container",
        });

        tl.fromTo(
          "#role-box2",
          { scale: 1,  },
          {
            scale: 1.01,
            ease: "power1.out",
            duration: 0.3,
            delay: 0.45,
            onComplete: () => {
              gsap.to("#role-box2", {
                scale: 1,
                duration: 0.3,
                ease: "power1.in",
              });
            },
          }
        );

        
        const rolebox = document.querySelector("#role-box2");

        if (rolebox) {
          rolebox.addEventListener("mouseenter", () => {
            gsap.to(rolebox, {
              scale: 1.015,
              boxShadow: "0 4px 10px -3px rgba(0, 0, 0, 0.1)",
              duration: 0.3,
              ease: "power1.out",
            });
          });

          rolebox.addEventListener("mouseleave", () => {
            gsap.to(rolebox, {
              scale: 1,
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
              duration: 0.3,
              ease: "power1.out",
            });
          });
        }

    }, []);

    return (
      <div className="md:px-[10%] w-full h-auto md:h-[500px] flex flex-col md:flex-row items-center justify-between">
        <div className=" w-1/2 h-auto flex flex-col justify-between items-start md:mb-24">
          <div className="w-full text-[30px] md:text-[40px] font-extrabold  font-roboto tracking-wide">
            <span className="">Hi There, I'm</span>
          </div>
          <div className="text-[45px] md:text-[58px] font-extrabold  font-roboto tracking-wide">
            RAEVEN VILLAREL
          </div>

          <div className="max-w-[550px] font-roboto font-normal text-[16px] text-left h-auto mt-4">
            I am currently a student at Binus Alam Sutera, majoring in Computer
            Science and specializing in Software Engineering. I have grown to be
            passionate surrounding frontend development, self improvement, and
            leadership.
          </div>
        </div>
        <div
          id="role-box"
          className="mt-16 md:mt-0 w-full md:w-1/2 flex justify-end items-end h-[120px] md:h-full z-[1]"
        >
          <div
            id="role-box2"
            className="mt-[-20px] md:mt-0 cursor-pointer md:rounded-xl border-y-1 md:border-1 border-slate-800 flex flex-row justify-center md:justify-between items-center bg-slate-50 w-[100%] md:w-[88%] h-full  md:h-1/4 px-[28px] py-4"
          >
            <div className="relative  h-full w-full  lg:w-[80%] pt-2 items-middle flex justify-center items-center md:block">
              <div className="w-auto h-2/3 text-slate-800 font-roboto font-extrabold text-[30px] md:text-[25px] lg:text-[35px] text-nowrap text-center md:text-justify tracking-wider ">
                Frontend Developer
              </div>
              <span className="hidden md:block absolute w-[100%] border-1 border-slate-800"></span>
            </div>
            <img src="./radio.png" className="hidden xl:block w-[70px]" alt="" />
          </div>
        </div>
      </div>
    );
}
