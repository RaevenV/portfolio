import { ExperienceCard } from "./smallComponents/experienceCard";

/* Hallmark · Long Document — editorial hero, about, experience.
 * Left-biased hero, hairline dividers, prose measure, roman display. */

const SOCIALS = [
  { href: "https://github.com/RaevenV", label: "GitHub" },
  { href: "https://www.linkedin.com/in/raeven-villarel-81093421a/", label: "LinkedIn" },
  { href: "https://www.instagram.com/raevenvw", label: "Instagram" },
];

const EXPERIENCE = [
  {
    name: "Full Stack Developer",
    company: "Polytron Indonesia",
    year: "Feb 2025 - Present",
    description:
      "Maintained and improved multi-stack applications using Express.js, MySQL, Flutter, and Java. Resolved production bugs, delivered PoCs for new libraries, and enhanced usability for Polytron's SPG sales workforce across hundreds of users in Indonesia. Completed 100% of tasks ahead of schedule, averaging 20 to 30% earlier than deadlines.",
    img: null,
  },
  {
    name: "Fullstack Developer",
    company: "PT Solusi Ifvent Indonesia",
    year: "June 2024 - Feb 2025",
    description:
      "Managed and improved API, Admin Dashboard, and product features using Laravel, PHP, and AWS. Revised and optimized database structures for better performance.",
    img: null,
  },
  {
    name: "Scholarship Mentor",
    company: "SASC · BINUS University",
    year: "Feb 2024 - Aug 2024",
    description:
      "Offered personalized academic guidance and support to students, helping them enhance their learning strategies and achieve their academic goals through tailored mentoring sessions.",
    img: "./sasc.png",
  },
  {
    name: "Android Developer Intern",
    company: "Skybridge Indonesia",
    year: "Aug 2023 - Oct 2023",
    description:
      "Gained hands-on experience with Android development using Kotlin, XML layouts, and Jetpack Compose in a collaborative, senior-heavy team environment.",
    img: "./skybridge.jpeg",
  },
  {
    name: "iOS Foundation, Cohort 18",
    company: "Apple Developer Academy",
    year: "May 2023 (1 month)",
    description:
      "One of 31 students selected from around 500 applicants. Built Social Peers, an app to motivate student mentors through challenges and badges, using Swift and SwiftUI.",
    img: "./apple.jpeg",
  },
];

export function Profile() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section
        id="profile"
        className="w-full px-[6%] pt-16 md:pt-24 pb-16 md:pb-24 scroll-mt-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] gap-x-14 gap-y-10 items-end">
          <div>
            <p className="h-label h-rise mb-6">
              Computer Science Graduate · Binus Alam Sutera
            </p>
            <h1 className="h-rise h-rise-2 font-display font-normal text-ink [font-size:var(--text-display)] max-w-[12ch] [overflow-wrap:anywhere] min-w-0">
              Raeven Villarel Widjaja
            </h1>
            <p className="h-rise h-rise-3 mt-8 max-w-measure text-ink-2 text-[length:var(--text-md)] leading-relaxed">
              Computer Science graduate from Binus Alam Sutera, specializing in
              Software Engineering. I build full-stack products that are both
              functional and visually considered, and care about leadership,
              continuous growth, and shipping things that matter.
            </p>

            <div className="h-rise h-rise-3 mt-8">
              <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-link py-1"
                  >
                    {s.label} <span aria-hidden>↗</span>
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Editorial portrait */}
          <figure className="h-rise h-rise-2 lg:justify-self-end w-full max-w-[320px]">
            <div className="border border-ink p-1.5 bg-paper-2">
              <img
                src="./me.png"
                alt="Raeven Villarel Widjaja"
                className="w-full h-auto object-contain grayscale contrast-[1.05]"
              />
            </div>
          </figure>
        </div>
      </section>

      <div className="w-full px-[6%]">
        <div className="border-t border-ink" />
      </div>

      {/* ── About ──────────────────────────────────────────── */}
      <section className="w-full px-[6%] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-14 gap-y-6">
          <p className="h-label pt-2">§ About</p>
          <div className="max-w-prose">
            <p className="text-ink-2 text-[length:var(--text-md)] leading-relaxed">
              My work sits between the front and the back: interfaces built with
              intent, and the services that keep them honest. Outside the editor
              I spend my time on self-improvement and leadership, mentoring
              peers, learning in the open, and building things worth finishing.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full px-[6%]">
        <div className="border-t border-rule" />
      </div>

      {/* ── Experience ─────────────────────────────────────── */}
      <section className="w-full px-[6%] py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-14 gap-y-10">
          <div className="pt-2">
            <p className="h-label mb-3">§ Experience</p>
            <h2 className="font-display font-normal text-ink text-[length:var(--text-2xl)]">
              Where I&apos;ve worked, and what I did there.
            </h2>
          </div>

          <ol className="flex flex-col">
            {EXPERIENCE.map((exp, i) => (
              <ExperienceCard key={exp.name} index={i + 1} {...exp} />
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
