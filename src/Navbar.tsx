import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({
  scrollTrigger: "#nav-container", // ScrollTrigger configuration
});

export default function NavbarMain() {
  useEffect(() => {
    const links = document.querySelectorAll("#nav-links a"); // Select all links inside #nav-links
   
    tl.fromTo("#nav-container", { y: 0 }, { y: 25, duration: 0.3 }) // From 0 to 20
      .to("#nav-container", { y: 10, duration: 0.6 });

    links.forEach((link) => {
      const line = link.querySelector(".line");
      link.addEventListener("mouseenter", () => {
        gsap.fromTo(
          line,
          { width: "0%", opacity: 1 },
          { width: "100%", duration: 0.15, ease: "power2.out" }
        );
      })
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
      className="h-24 w-full px-[10%] flex flex-row justify-center items-center"
    >
      <nav
        className="pt-6 pb-2 w-full rounded-b-[30px] h-full border-b-1 border-white text-white flex flex-row justify-between items-center lg:px-[6%]"
        id="nav-wrapper"
      >
        <a
          className="relative h-10 w-20 flex flex-col items-center justify-center hover:text-[#31d2f5] transition-colors duration-200 ease-in"
          href="#"
        >
          <div className="mb-1 font-rowdies text-[20px]">RAEVEN</div>
        </a>
        <div
          id="nav-links"
          className="w-2/5 flex flex-row justify-between items-center font-kanit font-[300] "
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
            <div className="mb-1">Contact Me</div>
            <span className="line w-0 bg-[#31d2f5] h-[1px] block opacity-0"></span>
          </a>
        </div>
      </nav>
    </div>
  );
}
