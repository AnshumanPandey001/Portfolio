import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// A component to render the education timeline
function EducationTimeline() {
  const educationData = [
    {
      degree: "BACHELOR OF SCIENCE (INFORMATION TECHNOLOGY)",
      years: "2022 - 2025",
      institution: "University OF Mumbai",
    },
    {
      degree: "CLASS 12TH ",
      years: "2021 - 2022",
      institution: "Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE)",
    },
    {
      degree: "CLASS 10TH ",
      years: "2019 - 2020",
      institution: "City Public School & College",
    },
  ]

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Education</h2>
      <div className="relative border-l border-muted-foreground/50 ml-2">
        {educationData.map((item, index) => (
          <div key={index} className="mb-8 ml-6">
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-8 ring-background border border-primary">
              <span className="block h-3 w-3 rounded-full bg-primary"></span>
            </span>
            <h3 className="font-semibold text-lg text-foreground tracking-wider leading-snug">
              {item.degree}
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">{item.years}</p>
            <p className="text-base text-foreground/80 mt-1">{item.institution}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pb-16 pt-8 md:px-6 md:pt-12">
      <div className="grid items-start gap-8 md:grid-cols-[160px_1fr]">
        <div className="flex justify-center md:justify-start">
          {/* Using placeholder for headshot */}
          <Image
            src="https://github.com/AnshumanPandey001/Portfolio/blob/main/public/developer-portrait.jpg?raw=true"
            alt="Portrait of Anshuman"
            width={160}
            height={160}
            className="h-40 w-40 animate-fadeIn rounded-lg object-cover ring-1 ring-border md:h-44 md:w-44"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-gradient-brand ">Hey, I&apos;m Anshuman</h1>
          <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
            I'm a Web Developer and Software Engineer based out of Mumbai, India. I recently graduated with a Bachelor's degree in Information Technology from Mumbai University and have been diving deep into real-world tech ever since.
          </p>
          <p className="mt-3 text-pretty leading-relaxed">
            <strong>Full story here</strong>
            <br />
            Over the past few years, I've built projects and sharpened my skills across web development, software engineering, database management, and cloud technologies. My experience spans working with tools like ReactJS, Tailwind CSS, Bootstrap, Git, and databases powered by MySQL — with strong foundations in JavaScript, Python, HTML, and CSS.
          </p>
          <p className="mt-3 text-pretty leading-relaxed">
            <strong>Read about my work</strong>
            <br />
            Right now, I'm focused on expanding my backend knowledge and exploring AWS Cloud technologies to better understand and build scalable, full-stack applications. I’m actively seeking opportunities where I can grow as a Web Developer, SQL Developer, or Database Administrator — and contribute meaningfully to real-world projects.
          </p>
          <p className="mt-3 text-pretty leading-relaxed">
            Apart from coding, you'll find me experimenting with personal tech projects, reading about emerging technologies, and connecting with fellow developers — either online or at local meetups — to learn from their journeys and stay inspired.
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Link href="/#projects">
              <Button variant="default">Checkout my projects</Button>
            </Link>
            <Link href="mailto:hey@exploreraadi.com">
              <Button variant="secondary">Reach out to me</Button>
            </Link>
          </div>

          <div className="mt-4 flex gap-4  ">
            {/* Social media icons */}
            <div className="flex gap-4 mt-3 ">
              <a href="https://x.com/exploreanshu001" aria-label="X" className="hover:text-blue-400">
                <i className="fa-brands fa-x-twitter text-lg "></i>
              </a>
              <a href="https://github.com/AnshumanPandey001" aria-label="Github" className="hover:text-blue-400">
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/in/anshuman-pandey-bb6ab5243/" aria-label="LinkedIn" className="hover:text-blue-500">
                <i className="fa-brands fa-linkedin text-lg"></i>
              </a>
              <a href="https://www.instagram.com/exploreanshu.jsx/" aria-label="Instagram" className="hover:text-pink-400">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
              <a
                href="mailto:anshumanpandey8433@gmail.com"
                aria-label="Mail"
                className="hover:text-pink-400"
              >
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Logos row (MERN + tools) */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold">Tech I use</h2>
        <div className="mt-4 grid grid-cols-4 items-center gap-4 sm:grid-cols-6">
          {[
            { alt: "MongoDB logo", src: "/mongodb-logo.png" },
            { alt: "Express logo", src: "/express-logo.jpg" },
            { alt: "React logo", src: "/react-logo.png" },
            { alt: "Node.js logo", src: "/nodejs-logo.png" },
            { alt: "Next.js logo", src: "/nextjs-logo.png" },
            { alt: "Tailwind CSS logo", src: "/tailwind-css-logo.png" },
          ].map((l) => (
            <Image
              key={l.alt}
              src={l.src || "/placeholder.svg"}
              alt={l.alt}
              width={96}
              height={48}
              className="mx-auto h-8 w-24 animate-fadeIn object-contain opacity-90"
            />
          ))}
        </div>
      </section>
      
      {/* Education Timeline - Now placed universally after the "Tech I use" section */}
      <EducationTimeline />
      
    </main>
  )
}