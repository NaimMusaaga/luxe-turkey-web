import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, HardHat, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Reveal } from "@/src/components/ui/Reveal";
import { CtaBand } from "@/src/components/home/CtaBand";
import { buttonClass } from "@/src/components/ui/button";
import { LUXURY_PROPERTIES } from "@/src/constants/data";
import { CITY_LABELS } from "@/src/lib/format";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرّف على LuxeTurkey: منصة عقارية تجمع الشفافية والدعم بالعربية لمن يبحث عن عقار فاخر في تركيا.",
};

const VALUES = [
  {
    icon: HardHat,
    title: "إشراف هندسي",
    text: "نراجع العقار وبياناته فنياً قبل عرضه، لنقدّم لك خيارات واضحة يمكن الاعتماد عليها.",
  },
  {
    icon: Banknote,
    title: "شفافية مالية",
    text: "أسعار معلنة وتكاليف مشروحة، بلا مفاجآت بعد أن تتخذ قرارك.",
  },
  {
    icon: ShieldCheck,
    title: "احترام الخصوصية",
    text: "بياناتك تُستخدم للرد على استفسارك فقط، ولا نشاركها مع أي جهة أخرى.",
  },
] as const;

export default function AboutPage() {
  const cityCount = Object.keys(CITY_LABELS).length;

  return (
    <>
      <header className="bg-navy py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold text-gold">من نحن</p>
          <h1 className="text-balance text-3xl font-bold leading-tight text-white sm:text-5xl">
            نجعل الاستثمار العقاري في تركيا أوضح وأبسط
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            LuxeTurkey منصة عقارية تجمع بين عرض واضح للعقارات ودعم بالعربية، لمن
            يبحث عن منزل أو استثمار في إسطنبول وأنطاليا.
          </p>
        </div>
      </header>

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold text-navy">لماذا أنشأنا المنصة؟</h2>
            <div className="mt-6 space-y-5 text-base leading-9 text-ink/85">
              <p>
                الشراء في بلد آخر يعني معلومات مبعثرة وأسعاراً غير واضحة ولغة
                مختلفة. أردنا أن يجد الباحث عن عقار في تركيا مكاناً واحداً يعرض
                له الخيارات بوضوح، ويجيب عن أسئلته بلغته.
              </p>
              <p>
                لذلك نعرض كل عقار بسعره وتفاصيله الأساسية، ونرافق العميل من
                الاستفسار الأول حتى إتمام الشراء.
              </p>
            </div>
            <Link href="/properties" className={buttonClass("dark", "md", "mt-8")}>
              تصفّح العقارات
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-4">
              {[
                { value: LUXURY_PROPERTIES.length, label: "عقارات مختارة" },
                { value: cityCount, label: "مدن رئيسية" },
                { value: "AR", label: "دعم كامل بالعربية" },
                { value: "مجانية", label: "الاستشارة الأولية" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-line bg-white p-6 text-center"
                >
                  <dd className="font-display text-4xl font-semibold text-gold-dark">
                    {value}
                  </dd>
                  <dt className="mt-2 text-sm text-muted">{label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading eyebrow="قيمنا" title="ما نلتزم به معك" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-8">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <h3 className="text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-3 text-sm leading-8 text-muted">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
