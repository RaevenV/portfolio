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
          duration: 1.4,
          ease: "power2.out",
          onStart: () => {
            gsap.to(textElement, {
              color: "slate-800",
              duration: 0.8,
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
      className="mb-20 md:mb-0 relative w-full h-auto md:h-[590px] pb-1 flex flex-col md:flex-row items-center justify-between overflow-hidden pt-10 md:pt-20 px-[6%]"
    >
      <div className="w-full md:w-[60%] h-full bg-slate-800 p-8  rounded-2xl md:p-16 shadow-md">
        <div
          id="Profile-data"
          className="w-full h-full flex flex-col justify-start items-start"
        >
          <h1 className="relative text-[35px] md:text-[52px] font-bold font-raleway tracking-tight z-20 italic text-white mb-8">
            <div ref={nameRef} className="relative z-20 ">
              RAEVEN VILLAREL
            </div>
            <div className="absolute w-[102%] h-12 bg-slate-400 z-[-1] top-[100%] translate-y-[-80%] md:translate-y-[-100%] opacity-[0.8]"></div>
          </h1>
          <p className="max-w-[550px] font-raleway tracking-tight font-medium text-[16px] text-left mt-4 text-white mb-8">
            Currently a student at Binus Alam Sutera, majoring in Computer
            Science and specializing in Software Engineering. Passionate about
            frontend development, self-improvement, and leadership.
          </p>

          <div
            id="job-container"
            ref={jobContainerRef}
            className="relative font-raleway w-auto px-4 h-10 border border-white flex justify-center items-center mt-8 rounded-md overflow-hidden mb-8"
          >
            <div
              id="black-skew"
              className="absolute w-0 h-full bg-slate-50 left-[-10px] skew-x-12 z-10"
            ></div>
            <span id="job-text" className="relative z-20 text-white">
              frontend developer
            </span>
          </div>

          <div className="">
            <div className="flex justify-start items-center gap-x-8">
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
                  className="social-button cursor-pointer w-8 h-8 flex justify-center items-center z-20 bg-white rounded-md"
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

      <div className="w-full md:w-[38%] h-[500px] bg-slate-800 flex flex-col items-center justify-start pt-16  rounded-2xl shadow-md text-white gap-y-8">
        <div className="w-full flex-grow overflow-y-auto overflow-x-hidden">
          <div className="w-full flex flex-col justify-start items-start text-white gap-y-4">
            <div className="item1 w-full h-20 flex flex-row justify-start items-start gap-x-4">
              <span className="w-16 h-[1px] bg-white mt-4"></span>
              <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
                <div className="text-[20px] font-bold">Fullstack Developer</div>
                <div className="text-[16px] font-medium">
                  Pt. Solusi Ifvent Indonesia
                </div>
              </div>
            </div>

            <div className="w-full h-20 flex flex-row justify-start items-start gap-x-4">
              <span className="w-16 h-[1px] bg-white mt-4"></span>
              <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
                <div className="text-[20px] font-bold">Fullstack Developer</div>
                <div className="text-[16px] font-medium">
                  Pt. Solusi Ifvent Indonesia
                </div>
              </div>
            </div>

            <div className="w-full h-20 flex flex-row justify-start items-start gap-x-4">
              <span className="w-16 h-[1px] bg-white mt-4"></span>
              <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
                <div className="text-[20px] font-bold">Fullstack Developer</div>
                <div className="text-[16px] font-medium">
                  Pt. Solusi Ifvent Indonesia
                </div>
              </div>
            </div>

            <div className="w-full h-20 flex flex-row justify-start items-start gap-x-4">
              <span className="w-16 h-[1px] bg-white mt-4"></span>
              <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
                <div className="text-[20px] font-bold">Fullstack Developer</div>
                <div className="text-[16px] font-medium">
                  Pt. Solusi Ifvent Indonesia
                </div>
              </div>
            </div>

            <div className="w-full h-20 flex flex-row justify-start items-start gap-x-4">
              <span className="w-16 h-[1px] bg-white mt-4"></span>
              <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
                <div className="text-[20px] font-bold">Fullstack Developer</div>
                <div className="text-[16px] font-medium">
                  Pt. Solusi Ifvent Indonesia
                </div>
              </div>
            </div>

            <div className=" w-full h-20 flex flex-row justify-start items-start gap-x-4">
              <span className="w-16 h-[1px] bg-white mt-4"></span>
              <div className="w-[70%]  h-full flex flex-col justify-start items-start gap-y-1">
                <div className="text-[20px] font-bold">Fullstack Developer</div>
                <div className="text-[16px] font-medium">
                  Pt. Solusi Ifvent Indonesia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
