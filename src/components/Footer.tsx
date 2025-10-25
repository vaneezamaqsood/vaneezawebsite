import { socials, CONTACT_EMAIL } from "@/lib/consts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-10 text-sm text-muted">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p>© {new Date().getFullYear()} Vaneeza Maqsood</p>
          <div className="flex flex-wrap gap-4">
            <Link href={`mailto:${CONTACT_EMAIL}`} className="hover:text-fg">
              {CONTACT_EMAIL}
            </Link>
            {socials.map((s) => (
              <Link key={s.name} href={s.href} target="_blank" className="hover:text-fg">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}


