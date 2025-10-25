"use client";

import ProjectCard from "@/components/ProjectCard";
import ImageGallery from "@/components/ImageGallery";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/consts";

const workImages = [
  "/work1.jpg",
  "/work2.jpg", 
  "/work3.jpg",
  "/work4.jpg",
  "/work5.jpg",
  "/work6.jpg",
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Simplified Hero Section */}
      <section className="container py-20 md:py-32 relative overflow-hidden">
        <ImageGallery images={workImages}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto relative z-10 text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I&apos;m{" "}
              <span className="text-white">Vaneeza Maqsood</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted mb-8">
              Product Designer & Ecosystem Lead crafting meaningful connections between people, technology, and community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Let&apos;s Talk
              </Link>
            </div>
          </motion.div>
        </ImageGallery>
      </section>

      {/* Expertise Section */}
      <section className="container py-16 md:py-24 border-t border-white/5">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "UX Design", desc: "Creating intuitive, user-centered experiences that solve real problems." },
            { title: "AI Tools", desc: "Leveraging AI to build smarter, more efficient design solutions." },
            { title: "Community Building", desc: "Fostering vibrant ecosystems and meaningful connections." },
            { title: "Product Strategy", desc: "Bringing a unique perspective to product development." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="container py-16 md:py-24 border-t border-white/5">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Selected Work</h2>
          <Link
            href="/work"
            className="group text-muted hover:text-fg transition-colors"
          >
            See all
            <ArrowRight className="inline w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((p, index) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard p={p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-16 md:py-24 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted mb-8">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
            >
              View Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}