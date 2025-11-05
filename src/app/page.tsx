"use client";

import ImageGallery from "@/components/ImageGallery";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";

const workImages = [
  "/work1.jpg",
  "/work2.jpg", 
  "/work3.jpg",
  "/work4.jpg",
  "/work5.jpg",
  "/work6.jpg",
  "/work7.jpg",
  "/work8.jpg",
  "/work9.jpg",
  "/work10.jpg",
  "/work11.jpg",
  "/work12.jpg",
  "/work13.jpg",
  "/work14.jpg",
  "/work15.jpg",
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section with Image Gallery */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        <ImageGallery images={workImages}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto px-6 relative z-10 text-center"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-8">
              Hi, I&apos;m{" "}
              <span className="text-white">Vaneeza Maqsood</span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted mb-12">
              Product Designer & Ecosystem Lead crafting meaningful connections between people, technology, and community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/work"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-lg transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                Let&apos;s Talk
              </Link>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-muted"
              >
                <ChevronDown className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </motion.div>
        </ImageGallery>
      </section>

      {/* Story Section */}
      <section className="py-32 md:py-40 bg-gradient-to-b from-bg to-card">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              The story behind{" "}
              <span className="gradient-text">my work</span>
            </h2>
            
            <div className="space-y-6 text-xl md:text-2xl text-muted leading-relaxed">
              <p>
                Over the past few years, I&apos;ve been building experiences that don&apos;t just look good—they feel right. What started as a curiosity in design systems has grown into a deep passion for creating digital products that truly connect.
              </p>
              
              <p>
                I believe great design is more than aesthetics. It&apos;s about understanding people, solving real problems, and crafting experiences that resonate. That&apos;s why I approach every project with attention to detail, empathy, and purpose.
              </p>
              
              <p>
                Whether it&apos;s building communities, designing interfaces, or leading product strategy, I help brands and teams create meaningful impact. No cookie-cutter solutions—just authentic work that tells your story.
              </p>
            </div>

            <div className="mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-xl text-white hover:gap-5 transition-all duration-300"
              >
                Get in touch
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 md:py-40">
        <div className="container max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-end justify-between mb-16">
              <h2 className="text-5xl md:text-7xl font-bold">Cases</h2>
              <Link
                href="/work"
                className="group text-xl text-muted hover:text-fg transition-colors"
              >
                View all
                <ArrowRight className="inline w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {featured.map((p, index) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="scale-[0.9] md:scale-90">
                    <ProjectCard p={p} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-card to-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center text-xl md:text-2xl"
          >
            {["CREATIVE", "IMMERSIVE", "STRATEGIC", "IMPACTFUL"].map((tag) => (
              <motion.span
                key={tag}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 md:py-40">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let&apos;s create{" "}
              <span className="gradient-text">something great</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted mb-12">
              I&apos;m always excited to connect with people who are passionate about making a difference.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              Start a conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}