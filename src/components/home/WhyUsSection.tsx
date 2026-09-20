import { Banknote, HardHat, Languages, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Reveal } from "@/src/components/ui/Reveal";

const REASONS = [
  {
    icon: HardHat,
    title: "مراجعة فنية قبل العرض",
    text: "نراجع العقار وبياناته قبل إدراجه، حتى تقارن بين خيارات واضحة لا وعود تسويقية.",
  },
  {
    icon: Banknote,
    title: "أسعار وتكاليف واضحة",
    text: "السعر معلن على كل عقار، ونشرح لك الرسوم والضرائب المرتبطة بالشراء قبل أي التزام.",
  },
  {
    icon: Languages,
    title: "تواصل بلغتك",
    text: "من الاستفسار الأول حتى إتمام الإجراءات، تتحدث مع فريق يفهم أولوياتك بالعربية.",
  },
  {
    icon: ShieldCheck,
    title: "خصوصية بياناتك",
    text: "لا نطلب منك سوى ما يلزم للرد على استفسارك، ولا نشاركه مع أي جهة أخرى.",
  },
] as const;

export function WhyUsSection() {
  return (
    <section className="bg-navy py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="لماذا LuxeTurkey"
            title="شراء عقار في بلد آخر قرار كبير، نجعله أبسط"
            description="نجمع لك الخيارات المناسبة ونرافقك في كل خطوة، لتقرر وأنت مطمئن."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold/40">
                <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
