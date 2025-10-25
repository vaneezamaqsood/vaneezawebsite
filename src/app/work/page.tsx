import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold">Projects</h1>
      <p className="mt-3 text-muted">Case studies, process pages, and interactive work.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
    </main>
  );
}



