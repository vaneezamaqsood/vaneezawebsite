import TechOrbit from "@/components/TechOrbit";

export default function TechPage() {
  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold">Tools & Tech</h1>
      <p className="mt-3 text-muted">Design, code, and AI tools I use regularly.</p>
      <div className="mt-10 grid place-items-center">
        <TechOrbit />
      </div>
    </main>
  );
}



