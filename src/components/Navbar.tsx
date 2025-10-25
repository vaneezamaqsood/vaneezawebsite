"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/photography", label: "Photography" },
  { href: "/tech", label: "Tech" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [elevated, setElevated] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setElevated(y > 8));

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: elevated ? "rgba(10,10,10,0.8)" : "transparent",
        backdropFilter: elevated ? ("blur(20px)" as unknown as string) : ("blur(0px)" as unknown as string),
        borderBottomColor: elevated ? "rgba(255,255,255,0.08)" : "transparent",
      }}
      className="sticky top-0 z-50 border-b transition-all duration-300"
    >
      <nav className="container flex items-center justify-between py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          Vaneeza<span className="gradient-text">.fi</span>
        </Link>
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative text-muted hover:text-fg transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}


