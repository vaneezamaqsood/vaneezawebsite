import { socials, CONTACT_EMAIL } from "@/lib/consts";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-gradient-to-t from-purple-500/5 to-transparent">
      <div className="container py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-sm text-muted mb-2">
              © {new Date().getFullYear()} Vaneeza Maqsood
            </p>
            <p className="text-xs text-muted/80">
              Designer · Community Builder · Storyteller
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {CONTACT_EMAIL}
            </Link>
            <div className="flex flex-wrap gap-4">
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


