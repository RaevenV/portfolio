import { useEffect } from "react";
import { Profile } from "./Profile";
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
        <Profile />
        <Projects />
      </div>
    </main>
  );
}
