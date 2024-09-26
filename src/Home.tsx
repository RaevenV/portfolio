import "@nextui-org/react";
import Typewriter from "./Typewriter";

export function Home() {
  return (
    <div className="home-container px-[10%] pt-10 text-slate-800  h-[1000px]">
      <Typewriter text="RAEVEN VILLAREL WIDJAJA" delay={120} />
    </div>
  );
}
