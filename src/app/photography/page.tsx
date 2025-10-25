"use client";

import { motion } from "framer-motion";
import PhotoGrid from "@/components/PhotoGrid";
import Section from "@/components/Section";

export default function PhotographyPage() {
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
            Photography
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-subtitle text-muted mb-8"
          >
            Capturing moments, stories, and the essence of human connection through the lens.
          </motion.p>
        </div>
      </Section>

      {/* Photo Grid */}
      <Section className="container pb-20 md:pb-32">
        <PhotoGrid />
      </Section>
    </main>
  );
}
