import Image from "next/image";
import { BadgeCheck, Languages, PhoneCall } from "lucide-react";
import { SearchForm } from "@/src/components/property/SearchForm";

const TRUST_POINTS = [
  { icon: BadgeCheck, label: "عقارات مختارة ومراجَعة" },
  { icon: PhoneCall, label: "استشارة أولية مجانية" },
  { icon: Languages, label: "دعم كامل بالعربية" },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy/90 via-navy/75 to-navy"
        aria-hidden
      />

      <div className="mx-auto max-w-5xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-24 sm:pt-28">
        <p className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold-light">
          <span className="size-1.5 rounded-full bg-gold" aria-hidden />
          إسطنبول · أنطاليا · الساحل المتوسطي
        </p>

        <h1 className="text-balance text-4xl font-bold leading-[1.25] text-white sm:text-5xl lg:text-6xl">
          اعثر على عقار أحلامك
          <span className="block text-gold-light">في تركيا بثقة ووضوح</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
          مجموعة مختارة من الفلل والبنتهاوس والشقق الفاخرة، بأسعار معلنة ودعم
          عقاري باللغة العربية من أول استفسار حتى تسلّم المفتاح.
        </p>

        <div className="mt-12 text-start">
          <SearchForm variant="hero" />
        </div>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-300">
          {TRUST_POINTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="size-4 text-gold" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
