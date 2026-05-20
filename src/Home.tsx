import { Profile } from "./Profile";
import { Projects } from "./Projects";

export function Home() {
  return (
    <main className="w-full bg-surface">
      <Profile />
      <Projects />
    </main>
  );
}
