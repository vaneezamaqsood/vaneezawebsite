"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_EMAIL, socials } from "@/lib/consts";
import { Copy, Mail, Check } from "lucide-react";
import Section from "@/components/Section";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Let&apos;s Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-subtitle text-muted mb-12"
          >
            I&apos;m open to roles, collaborations, and creative projects. Let&apos;s build something amazing together.
          </motion.p>
        </div>
      </Section>

      {/* Contact Methods */}
      <Section className="container pb-20 md:pb-32">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email */}
            <div className="p-8 rounded-2xl bg-card border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={copyEmail}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </motion.button>
              </div>
              <p className="text-muted mb-4">{CONTACT_EMAIL}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
              >
                <Mail className="w-4 h-4" />
                Open mail client
              </a>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-card border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Social</h3>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-center"
                  >
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}



