import Hero3D from "@/components/Hero3D";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main className="container py-10 md:py-16">
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Designer. <span className="gradient-text">Community Builder.</span> Storyteller.
          </h1>
          <p className="mt-4 text-lg text-muted">
            I blend <strong>UX</strong>, <strong>AI tools</strong>, and <strong>marketing</strong> to craft
            experiences that inspire creativity and connection.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="/work" className="rounded-xl bg-white/10 px-4 py-2">View Work</Link>
            <Link href="/contact" className="rounded-xl border border-white/15 px-4 py-2">Contact</Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Hero3D />
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <header className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Work</h2>
          <Link href="/work" className="text-sm text-muted hover:text-fg">See all →</Link>
        </header>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {featured.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </main>
  );
}


