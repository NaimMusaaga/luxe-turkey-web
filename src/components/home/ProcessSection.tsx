import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Reveal } from "@/src/components/ui/Reveal";

const STEPS = [
  {
    title: "تواصل معنا",
    text: "أخبرنا بميزانيتك والمدينة التي تفضّلها، ونرشّح لك ما يناسبك.",
  },
  {
    title: "اختر وتحقّق",
    text: "نرتّب لك المعاينة ونراجع معك بيانات العقار والتفاصيل القانونية.",
  },
  {
    title: "تفاوض بوضوح",
    text: "نوضح لك السعر النهائي والرسوم المتوقعة قبل أن تلتزم بأي شيء.",
  },
  {
    title: "أتمّ الشراء",
    text: "نرافقك في الإجراءات حتى تسلّم العقار، ويبقى الدعم متاحاً بعدها.",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="كيف نعمل"
            title="أربع خطوات من الاستفسار إلى المفتاح"
          />
        </Reveal>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, text }, index) => (
            <li key={title}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-white p-7">
                  <span
                    className="font-display text-5xl font-semibold text-gold/40"
                    aria-hidden
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
