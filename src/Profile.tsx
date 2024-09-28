import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Profile() {
  const roleBoxRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socialButtons = document.querySelectorAll(".social-button");
    socialButtons.forEach((socialBtn) => {
      socialBtn.addEventListener("mouseenter", () => {
        gsap.to(socialBtn, {
          translateY: -20,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      });

      socialBtn.addEventListener("mouseleave", () => {
        gsap.to(socialBtn, {
          translateY: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    });

    if (nameRef.current) {
      const text = nameRef.current.textContent || "";
      nameRef.current.innerHTML = text
        .split("")
        .map((char) => `<span class="inline-block">${char}</span>`)
        .join("");
      
      const letters = nameRef.current.children;

      
      nameRef.current.addEventListener("mouseenter", () => {
        gsap.to(letters, {
          translateY: 20,
          duration: 0.3,
          stagger: 0.02,
          ease: "back.out(1.7)",
        });
      });

      nameRef.current.addEventListener("mouseleave", () => {
        gsap.to(letters, {
          translateY: -6,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.out",
        });
      });
    }
  }, []);

  return (
    <div
      id="Profile"
      className="relative px-[10%] md:px-[10%] md:mt-[20px] w-full md:h-[590px] pb-1 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      <div
        id="Profile-data"
        className="w-full md:w-1/2 flex flex-col justify-between items-start md:mb-24"
      >
        <h1 className="relative text-[45px] md:text-[58px] font-bold font-raleway tracking-tight z-20">
          <div ref={nameRef} className="relative z-20">
            RAEVEN VILLAREL
          </div>
          <div className="absolute w-[102%] h-12 bg-blue z-[-1] top-[100%] translate-y-[-100%]"></div>
        </h1>
        <p className="max-w-[550px] font-raleway tracking-tight font-medium text-[16px] text-left mt-4">
          Currently a student at Binus Alam Sutera, majoring in Computer Science
          and specializing in Software Engineering. Passionate about frontend
          development, self improvement, and leadership.
        </p>

        <div className="font-raleway w-auto px-4 h-10 border border-black flex justify-center items-center mt-4 rounded-md">
          frontend developer
        </div>
      </div>

      <div
        id="role-box"
        className="relative w-full md:w-1/2 flex justify-end items-end h-[120px] md:h-full z-[1] pb-4"
      >
        <img src="./me.png" className="hidden md:block absolute md:top-[15%] right-[-4%]" alt="" />
        <div
          ref={roleBoxRef}
          className="relative w-full md:w-[60%] h-full flex items-end"
        >
          <div className="w-full flex justify-center items-center gap-x-8">
            {[
              {
                href: "https://github.com/RaevenV",
                src: "./git.png",
                alt: "git",
              },
              {
                href: "https://www.linkedin.com/in/raeven-villarel-81093421a/",
                src: "./linkedin.png",
                alt: "linkedin",
              },
              {
                href: "https://www.instagram.com/raevenvw",
                src: "./instagram.png",
                alt: "instagram",
              },
            ].map((social) => (
              <a
                key={social.alt}
                href={social.href}
                className="social-button cursor-pointer w-10 h-10 border border-black rounded-md flex justify-center items-center bg-white z-20 hover:shadow-md hover:shadow-gray-500/50 transition-shadow duration-300"
              >
                <img
                  src={social.src}
                  className="w-[60%] h-[60%]"
                  alt={social.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width line */}
      <span className="absolute w-full h-0 border-t border-black bottom-0 left-0 z-10"></span>
    </div>
  );
}
