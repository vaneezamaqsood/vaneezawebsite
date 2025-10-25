"use client";

import { useEffect } from "react";

export default function StaticFeatures() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const href = target.getAttribute("href");
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    }, observerOptions);

    // Observe all sections for fade-in effect
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("fade-in-section");
      observer.observe(section);
    });

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroVisual = document.querySelector(".hero-visual");
      if (heroVisual) {
        (heroVisual as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Loading animation
    const handleLoad = () => {
      document.body.style.opacity = "0";
      setTimeout(() => {
        document.body.style.transition = "opacity 0.5s ease";
        document.body.style.opacity = "1";
      }, 100);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      document.removeEventListener("click", handleSmoothScroll);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleLoad);
      observer.disconnect();
    };
  }, []);

  return null;
}
