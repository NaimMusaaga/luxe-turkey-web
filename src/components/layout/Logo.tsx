import Link from "next/link";
import { Building2 } from "lucide-react";
import { SITE } from "@/src/constants/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-3 ${className}`}
      aria-label={`${SITE.name} — الصفحة الرئيسية`}
    >
      <span className="flex size-10 items-center justify-center rounded-lg border border-gold/50 bg-gold/10 text-gold">
        <Building2 className="size-5" aria-hidden />
      </span>
      <span
        dir="ltr"
        className="font-display text-xl font-semibold tracking-wide text-white"
      >
        Luxe<span className="text-gold">Turkey</span>
      </span>
    </Link>
  );
}
