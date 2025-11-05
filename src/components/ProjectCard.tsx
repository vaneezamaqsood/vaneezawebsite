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
        whileHover={{ y: -6 }}
        className="group relative overflow-hidden rounded-xl border border-white/10 bg-card hover:border-white/20 transition-all duration-300"
      >
        <div className="relative h-44 md:h-52 overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10">
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
          <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-3 left-3 pr-2">
            <span className="inline-flex items-center gap-2 text-sm font-semibold bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
              {p.title}
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="p-4">
          <p className="text-xs text-muted line-clamp-2">{p.subtitle}</p>
        </div>
      </motion.article>
    </Link>
  );
}


