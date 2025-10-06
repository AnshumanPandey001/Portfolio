import { AnimatedCharacter } from "@/components/animated-character"
import { AnimatedText } from "@/components/animated-text"
import { ProjectCard, type Project } from "@/components/project-card"

export default function HomePage() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A responsive admin dashboard with charts, tables, and theming.",
      tags: ["React", "Next.js", "Tailwind", "TypeScript"],
      repo: "#",
      live: "#",
    },
    {
      title: "Crowdfunding Platform-Final Year Project",
      description: "The crowdfunding platform helps raise funds for various causes such as health, education, and more. The platform allows users to create campaigns for their specific causes, and individuals can contribute by making donations. The primary objective of developing a crowdfunding platform is to provide a robust online ecosystem where creators can showcase their projects and attract funding from supporters.",
      tags: ["HTML", "CSS", "JavaScript", "Frontend", "Tailwind CSS", "React js", "ASP.NET Web API", "PostgreSQL", "Swagger API"],
      repo: "https://github.com/AnshumanPandey001/Final-Project#",
      live: "#",
    },
    {
      title: "Weather-App",
      description: "Shows Weather Data",
      tags: ["JavaScript", "API"],
      repo: "https://github.com/AnshumanPandey001/Weather-App",
      live: "https://anshumanpandey001.github.io/Weather-App/",
    },
    {
      title: "Quiz-App",
      description: "The Quiz App Mini Project is designed to provide a hands-on experience with fundamental web development concepts. By creating a simple quiz application, users can interact with questions, select answers, and receive a score at the end. Whether you are a beginner looking to understand core concepts or an experienced developer seeking a quick example, this project is a valuable resource",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      repo: "https://github.com/AnshumanPandey001/-Quiz-App-",
      live: "https://anshumanpandey001.github.io/-Quiz-App-/",
    },
    {
      title: "Expense-Tracker-App",
      description: "Expense Tracker App Welcome to the Expense Tracker App, a micro project created with HTML, CSS, and JavaScript. This project serves as a learning exercise, focusing on key JavaScript concepts such as arrays, objects, DOM manipulation, and local storage.",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      repo: "https://github.com/AnshumanPandey001/Expense-Tracker-App",
      live: "https://anshumanpandey001.github.io/Expense-Tracker-App/",
    },
    {
      title: "To-Do-list-App",
      description: "This project is a simple To-Do List application built with HTML, CSS, and JavaScript. It demonstrates the fundamental concepts of web development. JavaScript To-Do List App! This mini project is designed to showcase the concepts of functions, DOM handling, event handling, and DOM manipulation using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "Frontend"],
      repo: "https://github.com/AnshumanPandey001/To-Do-list-App",
      live: "https://anshumanpandey001.github.io/To-Do-list-App/",
    },
  ]

  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
      {/* Hero */}
      <section className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
        <div className="order-2 text-center md:order-1 md:text-left">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-5xl">
           Where vision meets execution – welcome in.
          </h1>
          <div className="mt-3">
            {/* Animated phrases now colored via tokenized primary */}
            <AnimatedText />
          </div>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            I build fast, accessible MERN apps focusing on clean UX, strong interactions, and business impact across web
            and mobile experiences.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start" aria-label="Key technologies">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">React</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">Next.js</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">TypeScript</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">Tailwind</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">Mongodb</span>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">SQL</span>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <AnimatedCharacter />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12 border-t border-primary/30 pt-6 md:mt-16 md:pt-8">
        <h2 className="text-xl font-semibold text-primary">Projects</h2>
        <p className="text-sm text-muted-foreground">A selection of recent work and experiments.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </main>
  )
}
