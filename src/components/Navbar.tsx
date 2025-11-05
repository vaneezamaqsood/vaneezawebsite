"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/photography", label: "Photography" },
  { href: "/tech", label: "Tech" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="absolute top-0 left-0 right-0 z-50 bg-transparent"
    >
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">
          <span className="gradient-text">VM</span>
        </Link>
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-fg transition-colors relative group"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}