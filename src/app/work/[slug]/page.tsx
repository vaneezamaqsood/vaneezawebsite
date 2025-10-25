"use client";

import { motion, useScroll } from "framer-motion";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import Section from "@/components/Section";

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  const { scrollYProgress } = useScroll();

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <main className="min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      {/* Hero Section */}
      <Section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-muted hover:text-fg transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
            
            <h1 className="text-display font-heading mb-4">{project.title}</h1>
            <p className="text-subtitle text-muted mb-8">{project.subtitle}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Role</h3>
                <p className="text-muted">{project.roles.join(", ")}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-muted">{project.tools.join(", ")}</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-card border border-white/10"
          >
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </Section>

      {/* Content Sections */}
      {project.content && (
        <Section className="container pb-20 md:pb-32">
          <div className="max-w-3xl mx-auto space-y-16">
            {project.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className="text-title font-heading mb-6">{section.heading}</h2>
                <p className="text-body text-muted mb-8">{section.body}</p>
                
                {section.media && (
                  <div className="grid gap-4">
                    {section.media.map((media, mediaIndex) => (
                      <div
                        key={mediaIndex}
                        className="relative aspect-[16/9] overflow-hidden rounded-xl bg-card border border-white/10"
                      >
                        <Image
                          src={media}
                          alt={`${section.heading} ${mediaIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Navigation */}
      <Section className="container pb-20 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href={`/work/${prevProject.slug}`}
              className="group p-6 rounded-2xl bg-card border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <ArrowLeft className="w-4 h-4 text-muted group-hover:text-fg transition-colors" />
                <span className="text-sm text-muted">Previous</span>
              </div>
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {prevProject.title}
              </h3>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group p-6 rounded-2xl bg-card border border-white/10 hover:border-white/20 transition-all duration-300 text-right"
            >
              <div className="flex items-center justify-end gap-3 mb-2">
                <span className="text-sm text-muted">Next</span>
                <ArrowRight className="w-4 h-4 text-muted group-hover:text-fg transition-colors" />
              </div>
              <h3 className="font-semibold group-hover:text-accent transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}