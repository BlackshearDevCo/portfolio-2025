import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-200 dark:border-purple-800 bg-background">
      <div className="container py-8 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
              <div className="h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">
                BB
              </div>
              <span className="font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {currentYear} Brooklyn Blackshear. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link
              href="#home"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
