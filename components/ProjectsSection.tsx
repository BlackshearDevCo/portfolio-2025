import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SectionTransition } from "@/components/SectionTransition";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, and payment processing.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      status: "completed",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team workspaces. Currently implementing the team collaboration features and finalizing the UI.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      githubUrl: "https://github.com",
      progress: 70,
      status: "in-progress",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates content based on user prompts and preferences.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Python", "Flask", "OpenAI API", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      status: "completed",
    },
  ];

  return (
    <>
      <SectionTransition />
      <section id="projects" className="bg-purple-50 dark:bg-purple-900/10">
        <div className="section-container">
          <div className="text-center">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto">
              Here are some of my recent projects. Each one was built to solve a
              specific problem or explore new technologies.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col h-full border-purple-200 dark:border-purple-800 hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-bold">{project.title}</h3>
                    </div>
                  </div>
                  {project.status === "in-progress" && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-purple-600 text-white">
                        In Progress
                      </Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-purple-800 dark:text-purple-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-800/70"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                    asChild
                  >
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>

                  {project.status === "in-progress" ? (
                    <div className="text-sm text-muted-foreground italic">
                      Coming soon
                    </div>
                  ) : (
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                      asChild
                    >
                      <Link
                        href={project.liveUrl ?? ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <SectionTransition reverse />
    </>
  );
}
