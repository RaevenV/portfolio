import "@nextui-org/react";
import { Intro } from "./intro";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export function Home() {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home-container",
      },
    });

    tl.fromTo(
      "#hor-line",
      { right: "100%" },
      { right: "40%", duration: 0.6 }
    );
  }, []);

  return (
    <div className="relative home-container pt-8 text-slate-800 h-[1000px]">
      <Intro />
      <img src="./me.png" className="hidden xl:block absolute top-[20px] right-[15%]" alt="" />
      <span
        id="hor-line"
        className="w-0 md:w-full absolute h-0 border-1 border-slate-500 top-[470px] right-[100%]"
      ></span>
      <span className="w-0 h-0 md:w-1/4 md:h-[480px] absolute rounded-2xl  border-b-1 border-r-1  border-slate-700  top-[-10px] right-20 z-[0]"></span>
    </div>
  );
}
