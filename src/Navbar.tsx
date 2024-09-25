import { useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavbarMain() {

  useEffect(() => {
    const menu = document.querySelector("#menu");
    const close = document.querySelector("#close");
    const smallnav = document.querySelector("#small-nav");
    const links = document.querySelectorAll("#nav-links a"); // Select all links inside #nav-links
    const tl = gsap.timeline({
      scrollTrigger: "#nav-container",
    });
    tl.fromTo("#nav-container", { y: 0 }, { y: 25, duration: 0.3 }) // From 0 to 20
      .to("#nav-container", { y: 10, duration: 0.6 });

    close?.classList.add("hidden");

    menu?.addEventListener("click", () => {
      smallnav?.classList.remove("hidden");
      smallnav?.classList.add("flex");
      gsap.fromTo(
        smallnav,
        { right: "100%", opacity: 1 },
        { right: "19%", duration: 0.5, ease: "power2.out" }
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
      className=" relative h-24 w-full  md:px-[6%] lg:px-[8%] xl:px-[10%]   flex flex-row justify-center items-center "
    >
      <div
        id="small-nav"
        className="md:hidden absolute top-[30px] right-[100%] bg-slate-900 rounded-3xl border-1  w-2/3 md:w-1/2 h-screen text-white justify-center items-center"
      >
        <div className="h-1/2 flex flex-col justify-center items-center w-full gap-y-4">
          <a
            className="font-semibold w-[90%] h-[15%]  flex justify-center items-center rounded-2xl hover:bg-[#31d2f5] transition-colors ease-in duration-400 hover:text-slate-900"
            href=""
          >
            Profile
          </a>
          <a
            className="font-semibold w-[90%] h-[15%]  flex justify-center items-center rounded-2xl hover:bg-[#31d2f5] transition-colors ease-in duration-400 hover:text-slate-900"
            href=""
          >
            Projects
          </a>
          <a
            className="font-semibold w-[90%] h-[15%]  flex justify-center items-center rounded-2xl hover:bg-[#31d2f5] transition-colors ease-in duration-400 hover:text-slate-900"
            href=""
          >
            Contact Me
          </a>
        </div>
      </div>
      <nav
        className="md:rounded-b-[40px] pt-4 md:pt-6 pb-2 w-full  h-full border-b-1 border-white text-white flex flex-row justify-between items-center px-[6%]"
        id="nav-wrapper"
      >
        <a
          className="w-auto px-[4%] md:px-[0%] h-10 md:w-20 flex flex-col items-center justify-center hover:text-[#31d2f5] transition-colors duration-200 ease-in"
          href="#"
        >
          <div className="mb-1 font-rowdies text-[20px]">RAEVEN</div>
        </a>
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
        <div
          id="nav-links"
          className="hidden md:flex w-2/5 flex-row justify-between items-center font-kanit font-[300]"
        >
          <a
            className="relative h-10 w-20 flex flex-col items-center justify-center hover:text-[#31d2f5] transition-colors duration-200 ease-in"
            href="#"
          >
            <div className="mb-1 ">Profile</div>
            <span className="line w-0 bg-[#31d2f5] h-[1px] block opacity-0"></span>
          </a>
          <a
            className="relative h-10 w-20 flex flex-col items-center justify-center hover:text-[#31d2f5] transition-colors duration-200 ease-in"
            href="#"
          >
            <div className="mb-1">Projects</div>
            <span className="line w-0 bg-[#31d2f5] h-[1px] block opacity-0"></span>
          </a>
          <a
            className="relative h-10 w-22 flex flex-col items-center justify-center hover:text-[#31d2f5] transition-colors duration-200 ease-in"
            href="#"
          >
            <div className="mb-1 text-nowrap">Contact Me</div>
            <span className="line w-0 bg-[#31d2f5] h-[1px] block opacity-0 text-nowrap"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}
