"use client";

import { projects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";

export default function WorkIndexPage() {
  return (
    <main className="container py-24 md:py-32">
      <div className="mb-12 md:mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Cases</h1>
        <p className="mt-4 text-muted text-lg md:text-xl">
          Selected projects, product explorations, and community initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((p, index) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="mt-3 text-muted">Case studies, process pages, and interactive work.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </main>
  );
}



