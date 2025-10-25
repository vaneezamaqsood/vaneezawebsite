"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export default function MotionLink({ href, children, className = "", external = false }: MotionLinkProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link
        href={href}
        className={`inline-block ${className}`}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {children}
      </Link>
    </motion.div>
  );
}
