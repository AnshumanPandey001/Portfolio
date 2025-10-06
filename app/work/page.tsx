import { ExperienceCard } from "@/components/experience-card"

type Highlight = {
  id: string
  position: string
  company: string
  start: string
  end: string
  description: string
}

const highlights: Highlight[] = [
  {
    id: "1",
    position: "Frontend Engineer",
    company: "Subskribe",
    start: "Jan 2023",
    end: "Present",
    description:
      "Built and shipped revenue workflows, improved quoting UI performance, and collaborated with design/PMs to deliver features on tight timelines.",
  },
  {
    id: "2",
    position: "UI Engineer",
    company: "Startup X",
    start: "Mar 2021",
    end: "Dec 2022",
    description:
      "Led redesign of web app shell, established component library, and improved a11y with semantic markup and better color contrast.",
  },
  {
    id: "3",
    position: "Frontend Intern",
    company: "Studio Y",
    start: "Jun 2020",
    end: "Feb 2021",
    description:
      "Prototyped dashboards, implemented responsive layouts, and optimized bundle size with code-splitting and image strategies.",
  },
]

export default function WorkPage() {
  const experiences = [
     {
      id: "1",
      title: "Frontend Developer",
      company: "Personal Project",
      period: "April 2025 - Present",
      location: "Mumabi, India",
      description:
        "Learning, Building , Applying",
    },
    {
id: "2",
title: "Full Stack Developer",
company: "Crowdfunding Platform - Final Year Project",
period: "Sept 2024 - March 2025",
location: "Mumbai, India",
description:
  "The crowdfunding platform helps raise funds for various causes such as health, education, and more. The platform allows users to create campaigns for their specific causes, and individuals can contribute by making donations. The primary objective of developing this platform is to provide a robust online ecosystem where creators can showcase their projects and attract funding from supporters.\n\nThis project encompasses the following:\n\n• Well Structured Landing Page for the User.\n• User registration and authentication systems.\n• User Login and authentication systems.\n• Well Structured Compaign Form for Fundraiser to create and start the campaign.\n• Contact-Us page which helps to get feedback and concern from the Users.\n• User registration and authentication systems.\n• Razorpay Integration for secure payment transaction(Razorpay Testing Environment with test API Key)\n• and Many more other Functionalities.",
},
   
    {
      id: "3",
      title: "Web Development Intern",
      company: "CodSoft",
      period: "1 Agust 2023 - 31 Agust 2023",
      location: "Remote",
      description:
        "I will build various projects using front-end technologies like HTML, CSS, and JavaScript. These hands-on projects will allow me to create responsive, interactive websites and significantly enhance my web development skills through real-world coding experience."
        ,
       
    },
    
  ]

  return (
    <main className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-gradient-brand">Professional Highlights</h1>
      <p className="mt-2 text-sm md:text-base text-foreground/80">
        Roles, timelines, and where I worked — presented as smooth, glassy cards.
      </p>

      <div className="mt-8 space-y-6 md:space-y-8">
        {experiences.map((e) => (
          <ExperienceCard
            key={e.id}
            title={e.title}
            company={e.company}
            period={e.period}
            location={e.location}
            description={e.description}
          />
        ))}
      </div>
    </main>
  )
}
