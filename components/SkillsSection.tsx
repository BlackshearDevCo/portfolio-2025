import { Card, CardContent } from "@/components/ui/Card";
import { Boxes, Code, Database, Globe, Layout, Server } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Layout className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    skills: [
      "Next.js",
      "React.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Apollo / SWR",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    skills: ["Node.js", "Express", "Python", "Ruby", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    skills: ["MongoDB", "Supabase", "PostgreSQL", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    icon: <Code className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    skills: ["Git", "Docker", "CI/CD", "Vercel", "GitHub Actions"],
  },
  {
    title: "Other",
    icon: <Globe className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    skills: [
      "Cypress",
      "Jest / React Testing Library",
      "Fullstory",
      "JWT / OAuth",
      "UI/UX Design",
    ],
  },
  {
    title: "Misc",
    icon: <Boxes className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
    skills: [
      "Performance Optimization",
      "Responsive Web Design",
      "Progressive Web Apps",
      "SEO Optimization",
      "Leading Development Teams",
      "Agile Development",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <div className="text-center">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle mx-auto">
          I&apos;ve worked with a variety of technologies and frameworks.
          Here&apos;s a snapshot of my technical skills.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_CATEGORIES.map((category, index) => (
          <Card
            key={index}
            className="overflow-hidden border-purple-200 dark:border-purple-800 hover:shadow-md hover:shadow-purple-200 dark:hover:shadow-purple-900/30 transition-all"
          >
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-300">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
