"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Email",
    value: "brooklynjblackshear@gmail.com",
    link: "mailto:brooklynjblackshear@gmail.com",
  },
  {
    icon: <Phone className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Phone",
    value: "+1 (432) 528-4570",
    link: "tel:+14325284570",
  },
  {
    icon: <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
    title: "Location",
    value: "Texas, USA",
    link: null,
  },
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_URL as string,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formState),
        }
      );

      if (response.ok) {
        setSubmitMessage("Thank you! Your message has been sent.");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitMessage("Error sending message.");
      console.error(error);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-container relative">
      {/* Purple gradient background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl"></div>

      <div className="text-center relative z-10">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 relative z-10">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardHeader className="border-b border-purple-100 dark:border-purple-800/50">
            <CardTitle className="text-purple-800 dark:text-purple-300">
              Send a Message
            </CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="border-purple-200 dark:border-purple-800 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="border-purple-200 dark:border-purple-800 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="border-purple-200 dark:border-purple-800 focus:ring-purple-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="border-purple-200 dark:border-purple-800 focus:ring-purple-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              {submitMessage && (
                <p className="text-center text-green-600 dark:text-green-400 mt-2">
                  {submitMessage}
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        <Card className="border-purple-200 dark:border-purple-800">
          <CardHeader className="border-b border-purple-100 dark:border-purple-800/50">
            <CardTitle className="text-purple-800 dark:text-purple-300">
              Contact Information
            </CardTitle>
            <CardDescription>
              Here are the ways you can reach me directly.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-purple-800 dark:text-purple-300">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-medium mb-4 text-purple-800 dark:text-purple-300">
                Connect with me
              </h3>
              <p className="text-muted-foreground mb-4">
                Follow me on social media to stay updated with my latest
                projects and articles.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  asChild
                >
                  <a
                    href="https://github.com/BlackshearDevCo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/brooklynblackshear/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
