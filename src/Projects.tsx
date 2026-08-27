import { ProjectCard } from "./smallComponents/ProjectCard";

/* Hallmark · Selected Work — editorial project index. Each entry: number,
 * title, role, tech, description, real screenshot, expandable details.
 * No gradient cards, no scroll-arrow theatre. Hairline dividers carry rhythm. */

const PROJECTS = [
  {
    id: "project7",
    title: "Little Booth",
    ongoing: true,
    description:
      "A full-stack photobooth platform pairing a packaged desktop app with an admin dashboard, built for a growing photobooth business.",
    backgroundImage: "./mockup-example.jpg",
    technologies: ["electron.webp", "c++.webp", "react.png", "tailwind.png", "postgresql.webp"],
    role: "Fullstack Developer",
    details:
      "Designed to facilitate an upcoming photobooth business, Little Booth includes admin dashboards and a packaged distributable app built for scalability. Features background removal, Canon camera SDK integration, and DNP printer SDK integration.",
    collaborators: "Ivan Yonathan Siwu, Michelle Jono",
  },
  {
    id: "project0",
    title: "KIN",
    description:
      "A mobile app designed to strengthen communication and deepen the bond between parents and children through shared daily moments.",
    backgroundImage: "./kin.png",
    technologies: ["react.png", "typescript.png", "supabase.png"],
    role: "Fullstack Developer",
    details:
      "KIN bridges the gap between busy parents and their children by providing a shared space for meaningful interaction, habit building, and emotional connection, all from a mobile-first experience.",
    collaborators: "Ryan Errando, Samuel Dwiputra Tjan",
  },
  {
    id: "project1",
    title: "Social Peers",
    description:
      "An innovative app to help Binus freshmen navigate their first year with ease through peer mentorship and challenges.",
    backgroundImage: "./socialPeers.png",
    technologies: ["swift.png", "swiftui.png"],
    role: "Fullstack Developer",
    details:
      "Connects new students with experienced upperclassmen who serve as freshmen partners. As challenges are completed, they earn rewards, making the experience fun and rewarding.",
    collaborators: "Aryo Bimo, Alfakhri Rizqulloh, Michelle Angela, Alexander Theodore",
  },
  {
    id: "project2",
    title: "Dooit",
    description:
      "A web app bridging the financial literacy gap in Indonesia via curated modules, mentoring, and forum discussions.",
    backgroundImage: "./dooit.png",
    technologies: ["react.png", "firebase.png"],
    role: "Fullstack Developer",
    details:
      "Focuses on money management, increasing self-worth, and laying the fundamentals of building a business.",
    collaborators: "Ryan Errando, Samantha Michelle, Ferdi Karjadiputra, Darwin Anathapindika",
  },
  {
    id: "project3",
    title: "Otocare",
    description:
      "A platform where users can find nearby car repair services and place reservations with ease.",
    backgroundImage: "./otocare.png",
    technologies: ["react.png", "firebase.png"],
    role: "Fullstack Developer",
    details:
      "Helps car owners find nearby repair shops, browse available services, and quickly schedule automotive care.",
    collaborators: "Samuel Dwiputra, Daniel Christian Purba, Ivan Yonathan Siwu, James Santoso",
  },
  {
    id: "project4",
    title: "Ifvent",
    description:
      "A comprehensive event-management solution integrating advanced tech to simplify planning and coordination.",
    backgroundImage: "./ifvent.png",
    technologies: ["php.png", "laravel.png", "aws.png", "eb.png"],
    role: "Junior Fullstack Developer",
    details:
      "Specializes in ticket registration, seat allocation, and essential technical services for smooth attendee experiences.",
    collaborators: "Andrew J Mulia, Arvan Kusniawan, Bobby Stenly, Irfandi Riawan",
  },
  {
    id: "project5",
    title: "Pantry Party",
    description:
      "A culinary web app providing solutions for college students who struggle with daily meal planning.",
    backgroundImage: "./pantry.png",
    technologies: ["typescript.png", "react.png", "tailwind.png"],
    role: "Fullstack Developer",
    details:
      "Features pre-portioned meals, step-by-step cooking guides, and simple menu options to make cooking fun and efficient for young adults.",
    collaborators: "Samantha Michelle, Angel Pricilla Salim, Benedictus Bryant",
  },
  {
    id: "project6",
    title: "WasteNot",
    description:
      "A web app tackling SDG #2 by giving restaurants dashboards to track and minimize food wastage.",
    backgroundImage: "./mockup-example.jpg",
    technologies: ["php.png", "laravel.png", "tailwind.png"],
    role: "Fullstack Developer",
    details:
      "Provides restaurants with analytics dashboards to track food wastage, make informed decisions, and promote sustainability.",
    collaborators: "Christopher Nathan, Candy Valencia, Darwin Anathapindika",
  },
];

export function Projects() {
  return (
    <section id="work" className="w-full px-[6%] py-16 md:py-24 scroll-mt-24">
      <div className="border-t border-ink pt-8 mb-12 md:mb-16 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="h-label mb-3">§ Selected Work</p>
          <h2 className="font-display font-normal text-ink [font-size:var(--text-display-s)] max-w-[16ch] [overflow-wrap:anywhere] min-w-0">
            Projects, built to solve something real.
          </h2>
        </div>
        <p className="max-w-measure text-muted text-[length:var(--text-sm)] leading-relaxed">
          A blend of creativity and technology, each solving a real-world
          problem through thoughtful design and code.
        </p>
      </div>

      <ol className="flex flex-col">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} index={i + 1} {...p} />
        ))}
      </ol>
    </section>
  );
}
