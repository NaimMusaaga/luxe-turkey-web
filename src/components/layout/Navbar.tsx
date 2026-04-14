import Link from "next/link";
import { Building2 } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/55 shadow-[0_8px_32px_rgba(15,23,42,0.35)] backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-primary/40">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-100 transition-colors hover:text-gold"
        >
          <Building2 className="size-8 shrink-0 text-gold" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">
            Luxe<span className="text-gold">Turkey</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-gold"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
