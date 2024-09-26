import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef} from "react";
import { Intro } from "./intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Projects } from "./Projects";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  const containerRef = useRef(null);

  return (
    <>
      
      <LocomotiveScrollProvider
        options={{ smooth: true }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <div
            className="relative home-container pt-8 text-slate-800 min-h-screen overflow-hidden"
            data-scroll-section
          >
            <Intro />
            <Projects />
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
