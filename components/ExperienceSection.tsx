import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionTransition } from "@/components/SectionTransition";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the development of a microservices architecture for the company's flagship product. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    title: "Software Engineer",
    company: "Digital Solutions Ltd.",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    technologies: ["JavaScript", "TypeScript", "React", "Express", "MongoDB"],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    description:
      "Assisted in the development of web applications. Participated in code reviews and implemented new features based on client requirements.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Tech University",
    period: "2014 - 2016",
    description:
      "Specialized in Software Engineering and Artificial Intelligence.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University",
    period: "2010 - 2014",
    description:
      "Graduated with honors. Participated in multiple hackathons and coding competitions.",
  },
];

export function ExperienceSection() {
  return (
    <>
      <SectionTransition />
      <section id="experience" className="bg-purple-50 dark:bg-purple-900/10">
        <div className="section-container">
          <div className="text-center">
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle mx-auto">
              My professional journey and educational background.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300">
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="border-purple-200 dark:border-purple-800 hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all"
                  >
                    <CardHeader className="border-b border-purple-100 dark:border-purple-800/50">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div>
                          <CardTitle className="text-purple-800 dark:text-purple-300">
                            {exp.title}
                          </CardTitle>
                          <CardDescription>{exp.company}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="w-fit border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 dark:hover:bg-purple-800/70"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="border-purple-200 dark:border-purple-800 hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all"
                  >
                    <CardHeader className="border-b border-purple-100 dark:border-purple-800/50">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <div>
                          <CardTitle className="text-purple-800 dark:text-purple-300">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription>{edu.institution}</CardDescription>
                        </div>
                        <Badge
                          variant="outline"
                          className="w-fit border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p>{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionTransition reverse />
    </>
  );
}
