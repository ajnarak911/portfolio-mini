import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, ExternalLink, Download, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"} min-h-screen p-6 transition-colors`}>
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="flex justify-end">
          <Button variant="ghost" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </Button>
        </div>

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5"
        >
          <h1 className="text-5xl font-bold">Douglas Karanja</h1>
          <p className="text-xl text-gray-500">
            Full-Stack Software Developer · AI & Data Systems
          </p>
          <div className="flex justify-center flex-wrap gap-4">
            <Button asChild>
              <a href="mailto:karanjadouglas1@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Contact
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/ajnarak911" target="_blank">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <a href="/Douglas_Karanja_IT_Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </motion.section>

        {/* About */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">About Me</h2>
          <p className="text-gray-600 max-w-3xl">
            I am a software developer and University of Nairobi student with training from ALX Africa and the Power Learn Project. I specialize in full-stack web development and AI-support systems, building technology that solves real-world problems.
          </p>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["JavaScript", "Python", "C", "React", "Next.js", "Node.js", "Express", "MongoDB", "Git", "AI Data Annotation"].map(
              (skill) => (
                <Card key={skill} className="rounded-2xl">
                  <CardContent className="p-5 text-center font-medium">{skill}</CardContent>
                </Card>
              )
            )}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">Hao-Chapchap Housing Platform</h3>
                <p className="text-gray-600">MERN stack platform helping students find housing efficiently.</p>
                <div className="flex gap-3">
                  <a href="https://github.com/ajnarak911/Hao-Chapchap" target="_blank" className="flex items-center gap-1 text-blue-500">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-green-500">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">OneEntry (Next.js)</h3>
                <p className="text-gray-600">Modern responsive web app built with Next.js and Tailwind.</p>
                <div className="flex gap-3">
                  <a href="https://github.com/ajnarak911/OneEntry_project" target="_blank" className="flex items-center gap-1 text-blue-500">
                    <Github size={16} /> Code
                  </a>
                  <a href="#" className="flex items-center gap-1 text-green-500">
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">GitHub Activity</h2>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ajnarak911&show_icons=true&theme=transparent"
            alt="GitHub stats"
            className="max-w-xl"
          />
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-10">
          © {new Date().getFullYear()} Douglas Karanja · Built with Next.js
        </footer>
      </div>
    </div>
  );
}
