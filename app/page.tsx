import { Github, Mail, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  const skills = {
    languages: ["Go", "Rust", "TypeScript", "JavaScript", "Python"],
    frameworks: ["Next.js", "React.js", "Tauri", "React Native", "Gin"],
    backend: ["Node.js", "REST APIs", "Rocket", "Shuttle"],
    databases: ["PostgreSQL", "MySQL", "Redis"],
    tools: ["Docker"],
  }

  const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Sillicon Tech Nepal",
    period: "May 2023 - June 2024",
    description:
      "Built mobile and web apps using React Native, TypeScript, and Node.js, focusing on clean code and user-friendly interfaces.",
    technologies: ["React Native", "TypeScript", "Node.js"],
  },
  {
    title: "Full Stack Developer",
    company: "Auditcity (Remote)",
    period: "June 2024 - May 2025",
    description:
      "Developed laterical.com, an efficient web scraping and API solution using Next.js, Node.js, and Go-based pipelines. Built an AI agent for real-time daily news aggregation with a customizable API Playground. Designed REST APIs with Express.js and MongoDB (including geospatial queries) and implemented WebSockets for dynamic features. Optimized performance using Docker and AWS, ensuring scalability and security. Collaborated in Agile teams, maintaining clean and well-documented code.",
    technologies: [
      "Next.js",
      "Node.js",
      "Go",
      "Express.js",
      "MongoDB",
      "Docker",
      "AWS",
      "WebSockets"
    ],
    languages: ["TypeScript", "Python", "Golang"],
  }
];


  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-6xl mx-auto px-4 py-16 grid gap-16 md:grid-cols-[300px_1fr]">
        {/* Left Column - Profile */}
        <div className="space-y-8">
          <div className="flex flex-col items-center md:items-start justify-center bg-zinc-900/50 rounded-lg p-6 border border-zinc-800">
            <h1 className="text-4xl font-bold">Prashidha Rawal</h1>
            <p className="text-xl text-zinc-400 mt-2">Full Stack Developer</p>
            <p className="text-sm text-zinc-400 mt-3 text-center md:text-left">
             Arranging 0s and 1s in just the right order.
            </p>
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            <Link
              href="https://github.com/Prashidha0O1"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:whoisprashidha@gmail.com"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/prashidha-rawal-032697212/"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                I&apos;m a 20-year-old undergraduate student and indie full stack developer. I enjoy building apps with Go, Rust, and TypeScript, focusing on tools that are straightforward and solve real problems.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-blue-950/50 text-blue-400 border-blue-900 hover:bg-blue-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-green-950/50 text-green-400 border-green-900 hover:bg-green-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-purple-950/50 text-purple-400 border-purple-900 hover:bg-purple-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-red-950/50 text-red-400 border-red-900 hover:bg-red-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-yellow-950/50 text-yellow-400 border-yellow-900 hover:bg-yellow-900"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-medium text-zinc-200">{exp.title}</h3>
                    <span className="text-sm text-zinc-400">{exp.period}</span>
                  </div>
                  <p className="text-base font-medium text-zinc-400">{exp.company}</p>
                  <p className="text-sm text-zinc-400">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:bg-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Love Letter Generator (Cupid Quill)",
                  description: "A mobile app that generates love letters in various tones, built with a clean and intuitive UI.",
                  technologies: ["React Native"],
                  github: "https://github.com/Prashidha0O1/loveletter_gen",
                  live: "https://github.com/Prashidha0O1/loveletter_gen/releases/tag/Beta",
                  image: "./Cupid.png",
                },
                {
                  title: "ChiyaKindeu",
                  description: "A Patreon-like platform for Nepali content creators, currently a work in progress.",
                  technologies: ["Rust", "HTML", "CSS"],
                  github: "https://github.com/Prashidha0O1/crowdfund",
                  live: "",
                  image: "./chiya.PNG",
                },
                {
                  title: "Movie Recommendator",
                  description: "A Rust-based app that suggests movies tailored to user preferences.",
                  technologies: ["Rust"],
                  github: "https://github.com/Prashidha0O1/movie-recommendator",
                  live: "",
                  image: "./movie.webp",
                },
                {
                  title: "Lightweight Docker Container",
                  description: "A simple lightweight docker container written in Go",
                  technologies: ["Go"],
                  github: "https://github.com/Prashidha0O1/cocker",
                  live: "",
                  image: "./docker.jpg",
                },
                {
                  title: "Password Manager",
                  description: "A secure desktop password manager built for performance and usability.",
                  technologies: ["Rust", "TypeScript", "JavaScript", "Tauri"],
                  github: "https://github.com/Prashidha0O1/PasswordsManager",
                  live: "",
                  image: "./Dashboard.png",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="group rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 transition-colors hover:bg-zinc-900"
                >
                  <div className="aspect-video relative mb-4 overflow-hidden rounded-lg bg-zinc-800">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-200">{project.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:bg-zinc-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>Source</span>
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>{project.title.includes("Cupid Quill") ? "Download" : "Live"}</span>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
