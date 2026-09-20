"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/src/components/layout/Logo";
import { buttonClass } from "@/src/components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/properties", label: "العقارات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="التنقل الرئيسي">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? "page" : undefined}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive(href)
                  ? "text-gold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={buttonClass("gold", "sm", "max-sm:hidden")}
          >
            استشارة مجانية
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/15 text-white transition-colors hover:border-gold hover:text-gold md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="القائمة"
          className="border-t border-white/10 bg-navy px-5 pb-6 pt-3 md:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`block border-b border-white/5 py-4 text-base font-medium ${
                    isActive(href) ? "text-gold" : "text-slate-200"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={buttonClass("gold", "md", "mt-5 w-full")}
          >
            استشارة مجانية
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
