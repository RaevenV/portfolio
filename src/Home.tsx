import { useEffect } from "react";
import { Intro } from "./Intro";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Projects } from "./Projects";

gsap.registerPlugin(ScrollTrigger);

export function Home() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <main>
      <div className="relative home-container pt-8 text-slate-800 min-h-screen">
        <Intro />
        <Projects />
      </div>
    </main>
  );
}
