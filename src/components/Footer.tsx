import { socials, CONTACT_EMAIL } from "@/lib/consts";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg/50 mt-24">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Vaneeza Maqsood</p>
          <div className="flex items-center gap-6">
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors"
            >
              <Mail className="w-4 h-4" />
              {CONTACT_EMAIL}
            </Link>
            <div className="flex gap-4">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  className="text-sm text-muted hover:text-fg transition-colors"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}