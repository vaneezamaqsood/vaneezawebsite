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
        backgroundColor: elevated ? "rgba(10,10,10,0.6)" : "transparent",
        // inline blur to avoid 'any' type
        backdropFilter: elevated ? ("blur(10px)" as unknown as string) : ("blur(0px)" as unknown as string),
        borderBottomColor: elevated ? "rgba(255,255,255,0.06)" : "transparent",
      }}
      className="sticky top-0 z-50 border-b"
    >
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Vaneeza<span className="gradient-text">.fi</span>
        </Link>
        <ul className="flex gap-5 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:opacity-90">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}


