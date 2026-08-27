import { Profile } from "./Profile";
import { Projects } from "./Projects";

export function Home() {
  return (
    <main className="home-container w-full bg-paper text-ink">
      <Profile />
      <Projects />
    </main>
  );
}
