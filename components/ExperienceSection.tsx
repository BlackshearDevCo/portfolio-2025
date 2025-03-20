import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionTransition } from "@/components/SectionTransition";

const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "Autobooks",
    period: "May 2023 - Jan 2024",
    highlights: [
      "Swiftly acquired proficiency in a new programming language, seamlessly integrating it into my workflow within a few weeks.",
      "Successfully simplified and revamped a complex step in our on-boarding process increasing user conversions by over 50% while ensuring accessibility and mobile-friendliness.",
      "Collaborated with cross-functional teams to redesign the Autobooks platform interface, incorporating user feedback to enhance usability and streamline navigation, resulting in a 15% increase in user engagement.",
    ],
    technologies: ["React", "Rescript", "Typescript", "Material UI"],
  },
  {
    title: "Software Engineer",
    company: "Office Hours",
    period: "May 2022 - Feb 2023",
    highlights: [
      "Developed new client-facing features to enhance connectivity between clients and knowledge professionals.",
      "Enhanced internal tools to streamline workflows for the client sales team, contributing to 40% increased efficiency.",
      "Worked closely with a dedicated team to iteratively improve the Office Hours platform by gathering user feedback, implementing new features, conducting rigorous testing, and ensuring timely updates, leading to a 20% increase in user satisfaction.",
    ],
    technologies: [
      "React",
      "Next.js",
      "TailwindCSS",
      "SWR",
      "Nest.js",
      "MongoDB",
      "Jest / React Testing Library",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    title: "Frontend Developer",
    company: "CrateBind",
    period: "Jul 2018 - May 2022",
    highlights: [
      "Spearheaded the optimization of DestinFlorida.com's SEO strategy, resulting in its ascent to the #1 spot search result for the Destin, FL region.",
      "Improved performance for the DestinFlorida.com site by 88%, bringing the average load speed from 13 seconds down to just 1.5 seconds.",
      "Led a dynamic development team and engaged directly with clients on a daily basis, overseeing both the public-facing DestinFlorida.com platform and their internal owner portal.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Typescript",
      "Javascript",
      "TailwindCSS",
      "Styled Components",
      "Node.js",
      "Ruby",
      "GraphQL",
      "Prisma",
      "Jest / React Testing Library",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Full Stack Javascript Web Development",
    institution: "DevMountain",
    period: "Mar 2018 - Jun 2018",
    highlights: [
      "Created personal project, ConnectDevs. A social media dedicated to software engineers, which won the Best Overall Project award, judged by the instructors and mentors.",
      "Graduated at the top of my cohort, helping mentor others and assist in project work along the way to get their certification.",
      "Collaborated with fellow students to build our team project, WishTrip, over 3 weeks which was presented at the end of the cohort.",
      "Learned Fullstack Javscript development within the span of 12 weeks ranging from technologies like React, Node.js, Express.js, PostgreSQL, React Testing Library, and more.",
    ],
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
                {EXPERIENCES.map((exp, index) => (
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
                      <ul className="list-disc pl-4">
                        {exp.highlights.map((highlight, ind) => (
                          <li key={ind}>
                            <p className="mb-4">{highlight}</p>
                          </li>
                        ))}
                      </ul>
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
                {EDUCATION.map((edu, index) => (
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
                      <ul className="list-disc pl-4">
                        {edu.highlights.map((highlight, ind) => (
                          <li key={ind}>
                            <p className="mb-4">{highlight}</p>
                          </li>
                        ))}
                      </ul>
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
