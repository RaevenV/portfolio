import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Profile() {
  const nameRef = useRef<HTMLDivElement>(null);
  const jobContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socialButtons = document.querySelectorAll(".social-button");
    socialButtons.forEach((socialBtn) => {
      socialBtn.addEventListener("mouseenter", () => {
        gsap.to(socialBtn, {
          translateY: -10,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      socialBtn.addEventListener("mouseleave", () => {
        gsap.to(socialBtn, {
          translateY: 0,
          duration: 0.5,
          ease: "power2.in", 
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
          duration: 0.6,
          stagger: 0.02,
          ease: "back.out(1.7)",
        });
      });

      nameRef.current.addEventListener("mouseleave", () => {
        gsap.to(letters, {
          translateY: -6,
          duration: 0.4,
          stagger: 0.02,
          ease: "power2.out",
        });
      });

      gsap.to(letters, {
        translateY: 15,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out(1.7)",
        delay: 0.2,
      });

      gsap.to(letters, {
        translateY: -6,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        delay: 1.2,
      });
    }


    if (jobContainerRef.current) {
      const jobContainer = jobContainerRef.current;
      const blackSkew = jobContainer.querySelector("#black-skew");
      const textElement = jobContainer.querySelector("#job-text");

      if (blackSkew && textElement) {
        gsap.set(textElement, { color: "black", zIndex: 30 });
        gsap.to(blackSkew, {
          width: "120%",
          duration: 1.2,
          ease: "power2.out",
          onStart: () => {
            gsap.to(textElement, {
              color: "white",
              duration: 0.2,
              ease: "power2.out",
            });
          },
        });
      }
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
      className="mb-10 md:mb-0 relative px-[10%] md:px-[10%] mt-[20px] md:mt-[20px] w-full h-[300px] md:h-[590px] pb-1 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      <div
        id="Profile-data"
        className="w-full h-[70%] md:h-auto md:w-1/2 flex flex-col justify-between items-start md:mb-24"
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

        <div
          id="job-container"
          ref={jobContainerRef}
          className="relative font-raleway w-auto px-4 h-10 border border-black flex justify-center items-center md:mt-8 rounded-md overflow-hidden"
        >
          <div
            id="black-skew"
            className="absolute w-0 h-full bg-slate-800 left-[-10px] skew-x-12 z-10"
          ></div>
          <span id="job-text" className="relative z-20">
            frontend developer
          </span>
        </div>
      </div>
      <img
        src="./me.png"
        className="hidden md:block absolute md:top-[15%] right-[10%]"
        alt=""
      />
      <div
        id="role-box"
        className=" relative md:absolute md:left-[10%]  w-full md:w-1/2 flex justify-start items-end h-[80px] md:h-full z-[1] md:pb-36 md:mt-0 "
      >
        <div className=" w-full flex justify-start items-center">
          <div className="relative">
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
                  className="social-button cursor-pointer w-12 h-12 flex justify-center items-center z-20"
                >
                  <img
                    src={social.src}
                    className="w-[50%] h-[50%]"
                    alt={social.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
