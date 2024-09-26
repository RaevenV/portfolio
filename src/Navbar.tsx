import { useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Typewriter from "./Typewriter";
gsap.registerPlugin(ScrollTrigger);


export default function NavbarMain() {

  useEffect(() => {
    const menu = document.querySelector("#menu");
    const close = document.querySelector("#close");
    const smallnav = document.querySelector("#small-nav");
    const links = document.querySelectorAll(".nav-links a");


    const tl = gsap.timeline({
      scrollTrigger: "#nav-container",
    });

    tl.fromTo("#nav-container", { y: 0 }, { y: 15, duration: 0.3 })
      .to("#nav-container", { y: 10, duration: 0.6 });

    close?.classList.add("hidden");

    menu?.addEventListener("click", () => {
      smallnav?.classList.remove("hidden");
      smallnav?.classList.add("flex");
      gsap.fromTo(
        smallnav,
        { right: "100%", opacity: 1 },
        { right: "12%", duration: 0.5, ease: "power2.out", onComplete: () => {
          gsap.to(
            smallnav,{
              right: "16%",
              duration: 0.3, ease: "bounce.out"
            }
          );
        }}
      );

      menu?.classList.add("hidden");
      close?.classList.remove("hidden");
    });

    close?.addEventListener("click", () => {
      gsap.to(smallnav, {
        right: "100%",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          smallnav?.classList.remove("flex");
          smallnav?.classList.add("hidden");
        },
      });

      menu?.classList.remove("hidden");
      close?.classList.add("hidden");
    });

    links.forEach((link) => {
      const line = link.querySelector(".line");
      link.addEventListener("mouseenter", () => {
        gsap.fromTo(
          line,
          { width: "0%", opacity: 1 },
          { width: "100%", duration: 0.15, ease: "power2.out" }
        );
      });
      link.addEventListener("mouseleave", () => {
        gsap.to(line, {
          width: "0%",
          duration: 0.5,
          ease: "power2.out",
          opacity: 0,
        });
      });
    });




  }, []);

  return (
    <div
      id="nav-container"
      className="relative mt-[-10px] md:pt-[10px] lg:fixed border-b-1  border-slate-800   h-20 w-full bg-slate-50   flex flex-row justify-center items-center z-[10]"
    >
      <div
        id="small-nav"
        className="z-6 flex justify-center items-start md:hidden absolute top-[30px] right-[100%]  bg-slate-50 rounded-3xl border-1  border-black  w-[70%] md:w-1/2 h-screen text-slate-800 "
      >
        <div className="nav-links h-1/2 flex flex-col justify-center items-center w-[80%] gap-y-4">
          <a
            className="font-semibold w-[50%] h-[15%]  flex flex-col justify-center items-center rounded-2xl hover:text-[#36b1ff] transition-colors duration-200 ease-in"
            href="#intro"
          >
            Profile
            <span className="line w-0 bg-[#36b1ff] mt-2 h-[1px] block opacity-0"></span>
          </a>
          <a
            className="font-semibold w-[50%] h-[15%]  flex flex-col justify-center items-center rounded-2xl hover:text-[#36b1ff] transition-colors duration-200 ease-in"
            href="#projects"
          >
            Projects
            <span className="line w-0 bg-[#36b1ff] mt-2 h-[1px] block opacity-0"></span>
          </a>
          <a
            className="font-semibold w-[50%] h-[15%]  flex flex-col justify-center items-center rounded-2xl hover:text-[#36b1ff] transition-colors duration-200 ease-in"
            href="#experiences"
          >
            Experiences
            <span className="line w-0 bg-[#36b1ff] mt-2 h-[1px] block opacity-0"></span>
          </a>
        </div>
      </div>
      <nav
        className="pb-2 w-full h-4/5  bg-transparent text-slate-800 flex flex-row  justify-end md:justify-center items-center px-[2%] md:px-[6%] z-5"
        id="nav-wrapper"
      >
        <div className="w-20 h-full relative align-middle mb-2">
          <img
            className="md:hidden w-9 h-9 absolute top-[25%] right-[25%] z-3 cursor-pointer"
            src="/menu.png"
            alt="Menu"
            id="menu"
          />
          <img
            className="hidden md:hidden w-9 h-9 absolute top-[25%] right-[25%] z-2 cursor-pointer"
            src="/close.png"
            alt="Close"
            id="close"
          />
        </div>
        <div className="nav-links hidden md:flex w-2/5 flex-row justify-between items-center font-kanit font-[300] pt-2">
          <a
            className="relative h-10 w-20 flex flex-col items-center justify-center hover:text-[#36b1ff] transition-colors duration-200 ease-in"
            href="#intro"
          >
            <div className="mb-1 font-roboto ">Profile</div>
            <span className="line w-0 bg-[#36b1ff] h-[1px] block opacity-0"></span>
          </a>
          <a
            className="relative h-10 w-20 flex flex-col items-center justify-center hover:text-[#36b1ff] transition-colors duration-200 ease-in"
            href="#projects"
          >
            <div className="mb-1 font-roboto">Projects</div>
            <span className="line w-0 bg-[#36b1ff] h-[1px] block opacity-0"></span>
          </a>
          <a
            className="relative h-10 w-22 flex flex-col items-center justify-center hover:text-[#36b1ff] transition-colors duration-200 ease-in"
            href="#experiences"
          >
            <div className="mb-1 font-roboto text-nowrap">Experiences</div>
            <span className="line w-0 bg-[#36b1ff] h-[1px] block opacity-0 text-nowrap"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}
