"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/work/${p.slug}`}>
      <motion.article whileHover={{ y: -4 }} className="group card overflow-hidden">
        <div className="aspect-[16/9] overflow-hidden">
          {p.heroImage ? (
            <Image
              src={p.heroImage}
              alt={p.title}
              width={1200}
              height={675}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          ) : null}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold">{p.title}</h3>
          <p className="text-sm text-muted mt-1">{p.subtitle}</p>
          <div className="mt-3 flex gap-2 flex-wrap">
            {p.tags?.map((t: string) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Link>
  );
}


