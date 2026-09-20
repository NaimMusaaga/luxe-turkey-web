import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/src/components/layout/Logo";
import { CITY_LABELS } from "@/src/lib/format";
import { SITE, whatsappLink } from "@/src/constants/site";

const QUICK_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/properties", label: "العقارات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

export function Footer() {
  const whatsapp = whatsappLink("مرحباً، أرغب في الاستفسار عن العقارات.");

  return (
    <footer className="border-t border-gold/20 bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              نساعدك على اختيار عقارك في تركيا بثقة: عقارات مختارة، أسعار واضحة،
              ودعم كامل باللغة العربية.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">روابط سريعة</h3>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">الوجهات</h3>
            <ul className="space-y-3 text-sm">
              {Object.entries(CITY_LABELS).map(([value, label]) => (
                <li key={value}>
                  <Link
                    href={`/properties?location=${value}`}
                    className="text-slate-400 transition-colors hover:text-gold"
                  >
                    عقارات في {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold text-white">تواصل معنا</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" aria-hidden />
                <a
                  href={`mailto:${SITE.email}`}
                  dir="ltr"
                  className="transition-colors hover:text-gold"
                >
                  {SITE.email}
                </a>
              </li>
              {whatsapp ? (
                <li className="flex items-center gap-3">
                  <MessageCircle className="size-4 shrink-0 text-gold" aria-hidden />
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold"
                  >
                    واتساب
                  </a>
                </li>
              ) : null}
              <li className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-gold" aria-hidden />
                <span>{SITE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. جميع الحقوق محفوظة.
          </p>
          <p>الأسعار والتفاصيل قابلة للتغيير دون إشعار مسبق.</p>
        </div>
      </div>
    </footer>
  );
}
