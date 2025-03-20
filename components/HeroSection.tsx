"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const [titles, setTitles] = useState([
    { id: 1, text: "Software Engineer", visible: true, exiting: false },
    { id: 2, text: "Frontend Developer", visible: false, exiting: false },
    { id: 3, text: "Full-stack Engineer", visible: false, exiting: false },
    { id: 4, text: "UI/UX Enthusiast", visible: false, exiting: false },
    { id: 5, text: "React Specialist", visible: false, exiting: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitles((currentTitles) => {
        // Find the currently visible title
        const visibleIndex = currentTitles.findIndex((title) => title.visible);
        const nextIndex = (visibleIndex + 1) % currentTitles.length;

        // Create a new array with the current title exiting
        const updatedTitles = currentTitles.map((title, index) => {
          if (index === visibleIndex) {
            return { ...title, exiting: true };
          }
          return title;
        });

        // After animation time, make the next title visible and remove the old one
        setTimeout(() => {
          setTitles((prevTitles) => {
            return prevTitles.map((title, index) => {
              if (index === visibleIndex) {
                return { ...title, visible: false, exiting: false };
              }
              if (index === nextIndex) {
                return { ...title, visible: true };
              }
              return title;
            });
          });
        }, 500); // Match animation duration

        return updatedTitles;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section-container relative">
      {/* Purple gradient background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>

      <div className="flex flex-col items-center text-center relative z-10">
        <div className="inline-block mb-6 px-6 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
          <div className="relative h-6 w-[160px]">
            {titles.map(
              (title) =>
                title.visible && (
                  <span
                    key={title.id}
                    className={`text-purple-800 dark:text-purple-300 font-medium absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                      title.exiting
                        ? "opacity-0 transform -translate-y-4"
                        : "opacity-100 transform translate-y-0"
                    }`}
                  >
                    {title.text}
                  </span>
                )
            )}
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          <span className="block">Hi, I&apos;m </span>
          <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Brooklyn Blackshear
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl text-muted-foreground">
          A passionate software engineer specializing in building exceptional
          digital experiences. I focus on creating clean, efficient, and
          user-friendly applications.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700" asChild>
            <Link href="#projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
            asChild
          >
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="mt-8 flex space-x-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:example@example.com"
            className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
