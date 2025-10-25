"use client";
import { useState } from "react";
import { CONTACT_EMAIL, socials } from "@/lib/consts";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <main className="container py-16">
      <h1 className="text-4xl font-semibold">Contact</h1>
      <p className="mt-3 text-muted max-w-xl">
        I’m open to roles, collaborations, and creative projects. Say hello!
      </p>

      <div className="mt-8 flex items-center gap-4">
        <button onClick={copy} className="rounded-xl bg-white/10 px-4 py-2">
          {copied ? "Copied!" : "Copy email"}
        </button>
        <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>Open mail</a>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        {socials.map((s) => (
          <a key={s.name} href={s.href} target="_blank" className="hover:text-fg">
            {s.name}
          </a>
        ))}
      </div>
    </main>
  );
}



