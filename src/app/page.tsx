"use client";

import ImageGallery from "@/components/ImageGallery";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

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
  return (
    <main className="min-h-screen flex items-center justify-center">
      {/* Full Screen Hero Section with Image Gallery */}
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
          </motion.div>
        </ImageGallery>
      </section>
    </main>
  );
}