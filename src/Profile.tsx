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
          translateY: 15,
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

      gsap.to(letters, {
        translateY: 15,
        duration: 0.3,
        stagger: 0.02,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

      gsap.to(letters, {
        translateY: -6,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.out",
        delay: 1.2,
      });
    }


    return () => {
      socialButtons.forEach((socialBtn) => {
        socialBtn.removeEventListener("mouseenter", () => {});
        socialBtn.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      id="Profile"
      className="mb-10 md:mb-0 relative px-[10%] md:px-[10%] md:mt-[20px] w-full h-[400px] md:h-[590px] pb-1 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      <div
        id="Profile-data"
        className="w-full h-[80%] md:h-auto md:w-1/2 flex flex-col justify-between items-start md:mb-24"
      >
        <h1 className="relative text-[35px] md:text-[52px] font-bold font-raleway tracking-tight z-20 italic ">
          <div ref={nameRef} className="relative z-20 ">
            RAEVEN VILLAREL
          </div>
          <div className="absolute w-[102%] h-12 bg-blue z-[-1] top-[100%] translate-y-[-80%] md:translate-y-[-100%] opacity-[0.8]"></div>
        </h1>
        <p className="max-w-[550px] font-raleway tracking-tight font-medium text-[16px] text-left mt-4">
          Currently a student at Binus Alam Sutera, majoring in Computer Science
          and specializing in Software Engineering. Passionate about frontend
          development, self-improvement, and leadership.
        </p>

        <div className="font-raleway w-auto px-4 h-10 border border-black flex justify-center items-center mt-8 rounded-md">
          frontend developer
        </div>
      </div>

      <div
        id="role-box"
        className="relative w-full md:w-1/2 flex justify-end items-end h-[120px] md:h-full z-[1] pb-4"
      >
        <img
          src="./me.png"
          className="hidden md:block absolute md:top-[15%] right-[-3%]"
          alt=""
        />
        <div
          ref={roleBoxRef}
          className="relative w-full md:w-[60%] h-full flex items-end"
        >
          <div className="w-full flex justify-center items-center">
            <div className=" 0 p-4 relative">
              <div className="flex justify-center items-center gap-x-8">
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
                    className="social-button cursor-pointer w-10 h-10 flex justify-center items-center z-20"
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
        </div>
      </div>
    </div>
  );
}
