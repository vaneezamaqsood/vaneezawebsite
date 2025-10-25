"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/work/${p.slug}`}>
      <motion.article
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card hover:border-white/20 transition-all duration-300"
      >
        <div className="aspect-[16/9] relative overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
          {p.heroImage ? (
            <Image
              src={p.heroImage}
              alt={p.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            {p.title}
          </h3>
          <p className="text-sm text-muted mb-4 line-clamp-2">{p.subtitle}</p>
          <div className="flex gap-2 flex-wrap">
            {p.tags?.map((t: string) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}


