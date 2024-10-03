import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const downImgRef = useRef(null);
  const [isProject2Expanded, setIsProject2Expanded] = useState(false);
  const [isProject1Expanded, setIsProject1Expanded] = useState(false);
  const [isProject3Expanded, setIsProject3Expanded] = useState(false);
  const [isProject4Expanded, setIsProject4Expanded] = useState(false);
  const [isProject5Expanded, setIsProject5Expanded] = useState(false);
  const [isProject6Expanded, setIsProject6Expanded] = useState(false);
  useEffect(() => {
    const downImg = downImgRef.current;

    const removeDownTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-block",
        start: "top 90%",
        onEnter: () => {
          gsap.to("#down-container", {
            marginBottom: 0,
            duration: 0.4,
            onComplete: () => {
              gsap.to("#down-img", { opacity: 0, duration: 0.1 });
              gsap.fromTo(
                "#title",
                { top: 400 },
                { top: 40, duration: 0.6, ease: "back.out(1.7)" }
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

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: "#project1",
        start: "top 80%",
        end: "bottom 89%",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress * 160;
          const progress3 = self.progress * 80;
          gsap.fromTo(
            "#project2",
            { y: gsap.getProperty("#project2", "y") },
            {
              y: progress,
              duration: 0.5,
              ease: "power2.out",
            }
          );

          gsap.fromTo(
            "#project1",
            { y: gsap.getProperty("#project1", "y") },
            {
              y: progress3,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        },
      });

      ScrollTrigger.create({
        trigger: "#project4",
        start: "top 80%",
        end: "bottom 90.5%",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress * 100;
          gsap.fromTo(
            "#project3",
            { y: gsap.getProperty("#project3", "y") },
            {
              y: -progress,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        },
      });

      ScrollTrigger.create({
        trigger: "#project5",
        start: "top 80%",
        end: "bottom 90.5%",
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress * 70;
          gsap.fromTo(
            "#project5",
            { y: gsap.getProperty("#project5", "y") },
            {
              y: -progress,
              duration: 0.3,
              ease: "power2.out",
            }
          );
        },
      });
    });

    gsap.utils
    .toArray<HTMLDivElement>(".project-section")
    .forEach((project) => {
      gsap.set(project, { scale: 1 });
      project.addEventListener("mouseenter", () => {
        gsap.to(project, {
          scale: 1.015,
          duration: 0.3,
          ease: "power2.out",
        });
      });
      project.addEventListener("mouseleave", () => {
        gsap.to(project, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
    

    return () => {
      removeDownTl.kill();
      introTl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const project2 = document.querySelector("#project2");
  const project2Content = document.querySelector("#project2-content");
  const project1 = document.querySelector("#project1");
  const project1Content = document.querySelector("#project1-content");
  const project3 = document.querySelector("#project3");
  const project3Content = document.querySelector("#project3-content");
  const project4 = document.querySelector("#project4");
  const project4Content = document.querySelector("#project4-content");
  const project5 = document.querySelector("#project5");
  const project5Content = document.querySelector("#project5-content");
  const project6 = document.querySelector("#project6");
  const project6Content = document.querySelector("#project6-content");

  project1?.addEventListener("click", () => {
    if (!isProject1Expanded) {
      gsap.fromTo(
        project1Content,
        {
          height: "200px",
        },
        {
          height: "380px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread", {
        display: "none",
        duration: 0.4,
      });
    } else {
      gsap.fromTo(
        project1Content,
        {
          height: "380px",
        },
        {
          height: "200px",
          duration: 1,
          ease: "power2.out",
        }
      );

      gsap.to(".clicktoread1", {
        display: "block",
        duration: 0.4,
      });
    }

    setIsProject1Expanded(!isProject1Expanded);
  });

  project2?.addEventListener("click", () => {
    if (!isProject2Expanded) {
      gsap.fromTo(project2Content,{
        height: "200px",
      },{
        height: "380px",
        duration: 1,
        ease: "power2.out",
      });
      gsap.to(".clicktoread2", {
        display: "none",
        duration: 0.4,
      });
    } else {
      gsap.fromTo(
        project2Content,
        {
          height: "380px",
        },
        {
          height: "200px",
          duration: 1,
          ease: "power2.out",
        }
      );

      gsap.to(".clicktoread2", {
        display: "block",
        duration: 0.4,
      });
    }

    setIsProject2Expanded(!isProject2Expanded);
  });

  project3?.addEventListener("click", () => {
    if (!isProject3Expanded) {
      gsap.fromTo(
        project3Content,
        {
          height: "200px",
        },
        {
          height: "350px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread3", {
        display: "none",
        duration: 0.4,
      });
    } else {
      gsap.fromTo(
        project3Content,
        {
          height: "350px",
        },
        {
          height: "200px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread3", {
        display: "block",
        duration: 0.4,
      });
    }

    setIsProject3Expanded(!isProject3Expanded);
  });

  project4?.addEventListener("click", () => {
    if (!isProject4Expanded) {
      gsap.fromTo(
        project4Content,
        {
          height: "200px",
        },
        {
          height: "330px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread4", {
        display: "none",
        duration: 0.4,
      });
    } else {
      gsap.fromTo(
        project4Content,
        {
          height: "330px",
        },
        {
          height: "200px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread4", {
        display: "block",
        duration: 0.4,
      });
    }

    setIsProject4Expanded(!isProject4Expanded);
  });
  
  project5?.addEventListener("click", () => {
    if (!isProject5Expanded) {
      gsap.fromTo(
        project5Content,
        {
          height: "200px",
        },
        {
          height: "380px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread5", {
        display: "none",
        duration: 0.4,
      });
    } else {
      gsap.fromTo(
        project5Content,
        {
          height: "380px",
        },
        {
          height: "200px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread5", {
        display: "block",
        duration: 0.4,
      });
    }

    setIsProject5Expanded(!isProject5Expanded);
  });

  project6?.addEventListener("click", () => {
    if (!isProject6Expanded) {
      gsap.fromTo(
        project6Content,
        {
          height: "200px",
        },
        {
          height: "380px",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread6", {
        display: "none",
        duration: 0.4,
      });
      
    } else {
      gsap.fromTo(
        project6Content,
        {
          height: "380px",
        },
        {
          height: "200px",
          overflowY : "scroll",
          duration: 1,
          ease: "power2.out",
        }
      );
      gsap.to(".clicktoread6", {
        display: "block",
        duration: 0.4,
      });
      
    }

    setIsProject6Expanded(!isProject6Expanded);
  });

  return (
    <>
      <div
        id="down-container"
        className="block mt-8 md:mt-[-20px] mb-6 h-[60px] lg:h-[50px] w-full relative"
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
        className="relative w-full mt-4 lg:mt-0 min-h-screen flex flex-col justify-center items-center mb-32 md:mb-20 pt-[220px] md:pt-[240px]"
      >
        <div className="scroll-block top-0 absolute w-full h-10"></div>
        <div
          id="title"
          className="w-full h-20 absolute  font-raleway  flex flex-col justify-center items-center"
        >
          <div className="flex flex-col">
            <div className="top w-full flex justify-start items-center font-medium font-bitter mb-[-18px] text-[18px] italic">
              personal
            </div>
            <div className="w-full font-extrabold text-[35px] lg:text-[52px] flex justify-start items-start ">
              PROJECTS
            </div>
          </div>
          <div className="mt-4 desc w-[380px] h-auto font-raleway text-center">
            These projects reflect my journey in blending creativity with
            technology, each solving real-world problems through thoughtful
            design and code.{" "}
          </div>
        </div>

        <div
          id="project-window"
          className="relative md:w-[80%] w-[85%] min-h-[1800px] md:min-h-[2000px] rounded-md flex flex-col justify-start items-center mb-10 gap-y-4 cursor-pointer "
        >
          <div
            id="project1"
            className="shadow-xl project-section md:absolute left-0 top-0 w-full md:w-[50%] h-[350px] md:h-[650px] flex flex-col justify-end items-center rounded-2xl overflow-hidden "
            style={{
              backgroundImage: "url('./socialPeers.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="project1-content"
              className="content w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
            >
              <div className="text-2xl font-extrabold mb-2 text-white">
                SOCIAL PEERS
              </div>
              <div className="text-sm text-white/80 font-medium">
                is an innovative app designed to help freshmen at Binus
                University navigate their first year with ease.
              </div>
              <div className="w-[100px]  h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
                <img className="w-8 h-8 rounded-md" src="./swift.png" alt="" />
                <img
                  className="w-8 h-8 rounded-md"
                  src="./swiftui.png"
                  alt=""
                />
              </div>

              <div className="clicktoread text-sm text-slate-100 mt-2 ">
                click to read more
              </div>
              <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
                <b>Role : Fullstack Developer</b>
              </div>
              <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2">
                <div className="text-sm font-medium">
                  The app connects new students with experienced upperclassmen
                  who serve as freshmen partners.As challenges get completed,
                  they earn rewards, making the experience fun and rewarding.
                </div>

                <div className="text-sm">
                  <b>Collaborators: </b>Aryo Bimo, Alfakhri Rizqulloh, Michelle
                  Angela, Alexander Theodore
                </div>
              </div>
            </div>
          </div>

          {/* project2 */}
          <div
            id="project2"
            className="shadow-xl hover:shadow-2xl transition-shadow  project-section md:absolute right-0 md:top-10 w-full md:w-[47%] bg-yellow-500 h-[350px] md:h-[470px] flex flex-col justify-end items-center rounded-2xl cursor-pointer"
            style={{
              backgroundImage: "url('./dooit.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="project2-content"
              className="content w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
            >
              <div className="text-2xl font-extrabold mb-2 text-white">DOOIT</div>
              <div className="text-sm text-white/80 font-medium">
                is a web-based finantial education app that fills the gap of
                financial literation in Indonesia.
              </div>
              <div className="w-[100px]  h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
                <img className="w-8 h-8 rounded-md" src="./react.png" alt="" />
                <img
                  className="w-8 h-8 rounded-md"
                  src="./firebase.png"
                  alt=""
                />
              </div>

              <div className="clicktoread2 text-sm text-slate-100 mt-2 ">
                click to read more
              </div>
              <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
                <b>Role : Fullstack Developer</b>
              </div>
              <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2">
                <div className="text-sm font-medium">
                  The app doesn’t focus on how to generate money. Instead, we
                  focus on how to manage the money that we have, increasing
                  self-worth, and laying the fundamentals of building a
                  business.
                </div>

                <div className="text-sm">
                  <b>Collaborators: </b> : Ryan Errando, Samantha Michelle Ferdi
                  Karjadiputra, and Darwin Anathapindika
                </div>
              </div>
            </div>
          </div>

          {/* project3 */}
          <div
            id="project3"
            className="shadow-xl hover:shadow-2xl transition-shadow  project-section md:absolute md:top-[840px] w-full md:w-[44%] left-0 bg-blue h-[350px] md:h-[550px] flex flex-col justify-end items-center rounded-2xl cursor-pointer overflowhi"
            style={{
              backgroundImage: "url('./otocare.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="project3-content"
              className="content w-full h-[200px]  bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
            >
              <div className="text-2xl font-extrabold mb-2 text-white">OTOCARE</div>
              <div className="text-sm text-white/80 font-medium">
                is an innovative platform where users can look up services for
                their car from nearest repair shops and place a reservation on a
                certain time.
              </div>
              <div className="w-[100px]  h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
                <img className="w-8 h-8 rounded-md" src="./react.png" alt="" />
                <img
                  className="w-8 h-8 rounded-md"
                  src="./firebase.png"
                  alt=""
                />
              </div>
              <div className="clicktoread3 text-sm text-slate-100 mt-2 ">
                click to read more
              </div>
              <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
                <b>Role : Fullstack Developer</b>
              </div>
              <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2 ">
                <div className="text-sm font-medium">
                  The app connects new students with experienced upperclassmen
                  who serve as freshmen partners. s challenges get completed,
                  they earn rewards, making the experience fun and rewarding.
                </div>

                <div className="text-sm">
                  <b>Collaborators: </b>Aryo Bimo, Alfakhri Rizqulloh, Michelle
                  Angela, Alexander Theodore
                </div>
              </div>
            </div>
          </div>

          {/* project4*/}
          <div
            id="project4"
            className="shadow-xl hover:shadow-2xl transition-shadow  project-section md:absolute md:top-[780px] right-0 w-full md:w-[53%] bg-green-500 h-[350px] md:h-[600px] flex flex-col justify-end items-center rounded-2xl cursor-pointer"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="project4-content"
              className="content w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
            >
              <div className="text-2xl font-extrabold mb-2 text-white">
                IFVENT - <span className="font-extrabold">(continuation)</span>
              </div>
              <div className="text-sm text-white/80 font-medium">
                is a comprehensive event management solution that integrates
                advanced tech to simplify event planning and coordination in
                Indonesia.
              </div>
              <div className="w-[100px]  h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
                <img className="w-8 h-6 rounded-md" src="./php.png" alt="" />
                <img
                  className="w-8 h-8 rounded-md"
                  src="./laravel.png"
                  alt=""
                />
              </div>
              <div className="clicktoread4 text-sm text-slate-100 mt-2 ">
                click to read more
              </div>

              <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
                <b>Role : Junior Fullstack Developer</b>
              </div>
              <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2">
                <div className="text-sm font-medium">
                  Specializing in ticket registration, seat allocation, and
                  other essential technical services to ensure smooth attendee
                  experiences while empowering event organizers with reliable
                  tools for efficient execution.
                </div>

                <div className="text-sm">
                  <b>Collaborators: </b>Andrew J Mulia, Arvan Kusniawan, Bobby
                  Stenly, Irfandi Riawan
                </div>
              </div>
            </div>
          </div>

          {/* project5 */}
          <div
            id="project5"
            className="shadow-xl hover:shadow-2xl transition-shadow  project-section md:absolute md:top-[1420px] w-full md:w-[40%] left-0 h-[350px] md:h-[500px] flex flex-col justify-end items-center rounded-2xl cursor-pointer"
            style={{
              backgroundImage: "url('./pantry.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="project5-content"
              className="content w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
            >
              <div className="text-2xl font-extrabold mb-2 text-white">
                PANTRY PARTY - in progress
              </div>
              <div className="text-sm text-white/80 font-medium">
                is a culinary themed web app that provides solutions for college
                students that struggle in making daily meals
              </div>
              <div className="w-[100px]  h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
                <img
                  className="w-8 h-8 rounded-md"
                  src="./typescript.png"
                  alt=""
                />
                <img className="w-8 h-8 rounded-md" src="./react.png" alt="" />
                <img
                  className="w-10 h-6 rounded-md"
                  src="./tailwind.png"
                  alt=""
                />
              </div>
              <div className="clicktoread5 text-sm text-slate-100 mt-2 ">
                click to read more
              </div>
              <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
                <b>Role : Fullstack Developer</b>
              </div>
              <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2">
                <div className="text-sm font-medium">
                  The app helps young adults who struggle to cook by providing
                  features like preportioning meals, step-by-step cooking guide,
                  and vast curated simple menu options. Aiming to make the
                  cooking experience more fun and efficient for them!
                </div>

                <div className="text-sm">
                  <b>Collaborators: </b>Samantha Michelle, Angel Pricilla Salim,
                  Benedictus Bryant
                </div>
              </div>
            </div>
          </div>

          {/* project6 */}
          <div
            id="project6"
            className="shadow-xl hover:shadow-2xl transition-shadow  project-section md:absolute md:top-[1480px] right-0 w-full md:w-[56%]  h-[350px] md:h-[500px] flex flex-col justify-end items-center rounded-2xl cursor-pointer"
            style={{
              backgroundImage: "url('./mockup-example.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              id="project6-content"
              className="content w-full h-[200px] bg-gradient-to-t from-black via-black/70 to-transparent p-6 rounded-b-2xl font-raleway relative px-[5%] overflow-hidden"
            >
              <div className="text-2xl font-extrabold mb-2 text-white">
                WASTENOT - in progress
              </div>
              <div className="text-sm text-white/80 font-medium">
                is a web app that aims to solve SDG number 2 - Zero Hunger by
                providing restaurants with dashboards to track their wastage
              </div>
              <div className="w-[150px]  h-10 mt-2 flex flex-row justify-start items-center gap-x-2">
                <img className="w-8 h-6 rounded-md" src="./php.png" alt="" />
                <img
                  className="w-8 h-8 rounded-md"
                  src="./laravel.png"
                  alt=""
                />
                <img
                  className="w-10 h-6 rounded-md"
                  src="./tailwind.png"
                  alt=""
                />
              </div>
              <div className="clicktoread6 text-sm text-slate-100 mt-2 ">
                click to read more
              </div>
              <div className="text-sm text-slate-100 mt-2 pt-[20px] md:pt-[10px]">
                <b>Role : Fullstack Developer</b>
              </div>
              <div className="flex flex-col w-[88%] justify-start items-start text-sm text-white/80 mt-2 absolute pr-[5%] gap-y-2">
                <div className="text-sm font-medium">
                  The app connects new students with experienced upperclassmen
                  who serve as freshmen partners. s challenges get completed,
                  they earn rewards, making the experience fun and rewarding.
                </div>

                <div className="text-sm">
                  <b>Collaborators: </b>Aryo Bimo, Alfakhri Rizqulloh, Michelle
                  Angela, Alexander Theodore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
