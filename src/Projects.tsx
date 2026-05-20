import { ProjectCard } from "./smallComponents/ProjectCard";

const projects = [
  {
    id: "project0",
    title: "KIN",
    description:
      "A mobile app designed to strengthen communication and deepen the bond between parents and children through shared daily moments.",
    backgroundImage: "./kin.png",
    technologies: ["react.png", "typescript.png", "supabase.png"],
    role: "Fullstack Developer",
    details:
      "KIN bridges the gap between busy parents and their children by providing a shared space for meaningful interaction, habit building, and emotional connection — all from a mobile-first experience.",
    collaborators: "Ryan Errando, Samuel Dwiputra Tjan",
  },
  {
    id: "project1",
    title: "SOCIAL PEERS",
    description:
      "An innovative app to help Binus freshmen navigate their first year with ease through peer mentorship and challenges.",
    backgroundImage: "./socialPeers.png",
    technologies: ["swift.png", "swiftui.png"],
    role: "Fullstack Developer",
    details:
      "Connects new students with experienced upperclassmen who serve as freshmen partners. As challenges are completed, they earn rewards, making the experience fun and rewarding.",
    collaborators:
      "Aryo Bimo, Alfakhri Rizqulloh, Michelle Angela, Alexander Theodore",
  },
  {
    id: "project2",
    title: "DOOIT",
    description:
      "A web app bridging the financial literacy gap in Indonesia via curated modules, mentoring, and forum discussions.",
    backgroundImage: "./dooit.png",
    technologies: ["react.png", "firebase.png"],
    role: "Fullstack Developer",
    details:
      "Focuses on money management, increasing self-worth, and laying the fundamentals of building a business.",
    collaborators:
      "Ryan Errando, Samantha Michelle Ferdi Karjadiputra, Darwin Anathapindika",
  },
  {
    id: "project3",
    title: "OTOCARE",
    description:
      "A platform where users can find nearby car repair services and place reservations with ease.",
    backgroundImage: "./otocare.png",
    technologies: ["react.png", "firebase.png"],
    role: "Fullstack Developer",
    details:
      "Helps car owners find nearby repair shops, browse available services, and quickly schedule automotive care.",
    collaborators:
      "Samuel Dwiputra, Daniel Christian Purba, Ivan Yonathan Siwu, James Santoso",
  },
  {
    id: "project4",
    title: "IFVENT",
    description:
      "A comprehensive event management solution integrating advanced tech to simplify planning and coordination.",
    backgroundImage: "./ifvent.png",
    technologies: ["php.png", "laravel.png", "aws.png", "eb.png"],
    role: "Junior Fullstack Developer",
    details:
      "Specializes in ticket registration, seat allocation, and essential technical services for smooth attendee experiences.",
    collaborators:
      "Andrew J Mulia, Arvan Kusniawan, Bobby Stenly, Irfandi Riawan",
  },
  {
    id: "project5",
    title: "PANTRY PARTY",
    description:
      "A culinary web app providing solutions for college students who struggle with daily meal planning.",
    backgroundImage: "./pantry.png",
    technologies: ["typescript.png", "react.png", "tailwind.png"],
    role: "Fullstack Developer",
    details:
      "Features pre-portioned meals, step-by-step cooking guides, and simple menu options to make cooking fun and efficient for young adults.",
    collaborators:
      "Samantha Michelle, Angel Pricilla Salim, Benedictus Bryant",
  },
  {
    id: "project6",
    title: "WASTENOT",
    description:
      "A web app tackling SDG #2 by giving restaurants dashboards to track and minimize food wastage.",
    backgroundImage: "./mockup-example.jpg",
    technologies: ["php.png", "laravel.png", "tailwind.png"],
    role: "Fullstack Developer",
    details:
      "Provides restaurants with analytics dashboards to track food wastage, make informed decisions, and promote sustainability.",
    collaborators:
      "Christopher Nathan, Candy Valencia, Darwin Anathapindika",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 md:px-12 pb-24"
    >
      {/* Section header */}
      <div className="flex items-end justify-between mb-10 border-t border-border pt-10">
        <div>
          <div className="font-mono text-xs text-ink-light uppercase tracking-widest mb-2">
            Selected work
          </div>
          <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-black text-ink leading-tight">
            Projects
          </h2>
        </div>
        <p className="hidden md:block text-sm text-ink-light max-w-xs text-right leading-relaxed">
          A blend of creativity and technology — each solving real-world
          problems through thoughtful design and code.
        </p>
      </div>

      {/* Mobile description */}
      <p className="md:hidden text-sm text-ink-light mb-8 leading-relaxed">
        A blend of creativity and technology — each solving real-world problems
        through thoughtful design and code.
      </p>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
