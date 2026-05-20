import { ExperienceCard } from "./smallComponents/experienceCard";

export function Profile() {
  const socials = [
    { href: "https://github.com/RaevenV", src: "./git.png", alt: "GitHub" },
    {
      href: "https://www.linkedin.com/in/raeven-villarel-81093421a/",
      src: "./linkedin.png",
      alt: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/raevenvw",
      src: "./instagram.png",
      alt: "Instagram",
    },
  ];

  return (
    <section
      id="profile"
      className="w-full min-h-screen pt-24 pb-20 px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-16 items-start"
    >
      {/* Left column — intro */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        {/* Eyebrow */}
        <div className="font-mono text-xs text-ink-light uppercase tracking-widest mb-6">
          Portfolio — 2025
        </div>

        {/* Name */}
        <h1 className="font-display text-[clamp(2rem,5vw,3.8rem)] font-black leading-[1.05] text-ink mb-2">
          Raeven
          <br />
          <span className="italic font-normal text-accent">Villarel</span>
        </h1>

        {/* Role chip */}
        <div className="inline-flex items-center gap-2 mt-6 mb-8">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="font-mono text-sm text-ink-light">
            Fullstack Developer · CS Graduate
          </span>
        </div>

        {/* Bio */}
        <p className="text-ink-light leading-relaxed text-[14px] md:text-[15px] max-w-md mb-10">
          Computer Science graduate from Binus Alam Sutera, specializing in
          Software Engineering. Passionate about building full-stack products
          that are both functional and visually considered — and about
          leadership, continuous growth, and shipping things that matter.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.alt}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.alt}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border bg-surface hover:border-accent hover:bg-surface-alt transition-all duration-200"
            >
              <img src={s.src} alt={s.alt} className="w-4 h-4 object-contain" />
            </a>
          ))}
        </div>
      </div>

      {/* Right column — experience timeline */}
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="font-mono text-xs text-ink-light uppercase tracking-widest mb-8">
          Experience
        </div>
        <div className="relative flex flex-col gap-8 border-l-2 border-accent/25 ml-[3px]">
          <ExperienceCard
            name="Full Stack Developer"
            company="Polytron Indonesia"
            year="Feb 2025 – Present"
            description="Maintained and improved multi-stack applications using Express.js, MySQL, Flutter, and Java. Resolved production bugs, delivered PoCs for new libraries, and enhanced usability features for Polytron's SPG sales workforce across hundreds of users in Indonesia. Completed 100% of tasks ahead of schedule, averaging 20–30% earlier than deadlines."
            img="./favicon.ico"
          />
          <ExperienceCard
            name="Fullstack Developer"
            company="PT Solusi Ifvent Indonesia"
            year="June 2024 – Feb 2025"
            description="Managed and improved API, Admin Dashboard, and product features using Laravel, PHP, and AWS. Revised and optimized database structures for better performance."
            img={null}
          />
          <ExperienceCard
            name="Scholarship Mentor"
            company="SASC BINUS University"
            year="Feb 2024 – Aug 2024"
            description="Offered personalized academic guidance and support to students, helping them enhance their learning strategies and achieve their academic goals through tailored mentoring sessions."
            img="./sasc.png"
          />
          <ExperienceCard
            name="Android Developer Intern"
            company="Skybridge Indonesia"
            year="Aug 2023 – Oct 2023"
            description="Gained hands-on experience with Android development using Kotlin, XML layouts, and Jetpack Compose in a collaborative, senior-heavy team environment."
            img="./skybridge.jpeg"
          />
          <ExperienceCard
            name="iOS Foundation Cohort 18"
            company="Apple Developer Academy"
            year="May 2023 (1 month)"
            description="One of 31 students selected from ~500 applicants. Built Social Peers — an app to motivate student mentors through challenges and badges — using Swift and SwiftUI."
            img="./apple.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
