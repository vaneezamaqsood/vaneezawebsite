"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function ClientLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}


