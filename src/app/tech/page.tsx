"use client";

import { motion } from "framer-motion";
import TechOrbit from "@/components/TechOrbit";
import Section from "@/components/Section";

export default function TechPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-display font-heading mb-6"
          >
            Tech Stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-subtitle text-muted mb-12"
          >
            Tools and technologies I use to bring ideas to life
          </motion.p>
        </div>
      </Section>

      {/* Tech Orbit */}
      <Section className="container pb-20 md:pb-32">
        <TechOrbit />
      </Section>

      {/* Additional Info */}
      <Section className="container pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-sm text-muted">Figma, prototyping, user research, and design systems</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-sm text-muted">React, Next.js, TypeScript, and modern web technologies</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-white/10">
              <h3 className="text-lg font-semibold mb-2">AI & Creative</h3>
              <p className="text-sm text-muted">Midjourney, Runway, Wan, and AI-enhanced workflows</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}