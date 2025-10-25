import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/lib/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="container py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-semibold">{project.title}</h1>
        <p className="mt-3 text-muted">{project.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {project.roles?.map((r) => <span key={r} className="bg-white/5 rounded-full px-3 py-1">{r}</span>)}
        </div>
      </header>

      {project.heroImage && (
        <div className="mt-8 overflow-hidden border border-white/10" style={{ borderRadius: "1rem" }}>
          <Image src={project.heroImage} alt={project.title} width={1600} height={900} className="w-full object-cover" />
        </div>
      )}

      <article className="prose prose-invert max-w-3xl mt-10">
        {project.content?.map((sec) => (
          <section key={sec.heading} className="mb-8">
            <h3>{sec.heading}</h3>
            <p dangerouslySetInnerHTML={{ __html: sec.body }} />
          </section>
        ))}
      </article>
    </main>
  );
}


