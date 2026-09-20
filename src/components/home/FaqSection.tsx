import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const FAQS = [
  {
    q: "هل يستطيع الأجنبي شراء عقار في تركيا؟",
    a: "نعم، يتيح القانون التركي للأجانب التملك بشكل عام، مع استثناءات مثل بعض المناطق العسكرية والأمنية. نتحقق لك من وضع العقار قبل الحجز.",
  },
  {
    q: "هل يمنح الشراء الإقامة أو الجنسية؟",
    a: "هناك برامج للإقامة والجنسية عبر الاستثمار العقاري، ولها حدّ أدنى للقيمة وشروط يحدّدها القانون وقد تتغير. نزوّدك بالشروط المحدَّثة عند التواصل ولا نبني وعودنا على معلومات قديمة.",
  },
  {
    q: "ما التكاليف الإضافية غير سعر العقار؟",
    a: "تشمل عادةً رسوم تسجيل الملكية (الطابو) والضرائب ورسوماً إدارية أخرى. نوضّح لك التقدير الكامل قبل التعاقد حتى لا تفاجأ بأي بند.",
  },
  {
    q: "هل يمكنني المعاينة عن بُعد؟",
    a: "نعم، نرتّب لك معاينة مصوّرة أو مكالمة فيديو للعقار، كما نساعدك في ترتيب زيارة ميدانية إن رغبت.",
  },
  {
    q: "هل أتلقى دعماً بعد الشراء؟",
    a: "نعم، يستمر التواصل بعد التسليم للإجابة عن أسئلتك، ونساعدك في الخطوات التالية مثل الاشتراكات والخدمات.",
  },
] as const;

export function FaqSection() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="أسئلة شائعة" title="قبل أن تسأل، ربما تجد الجواب هنا" />

        <div className="mt-12 space-y-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-2xl border border-line bg-white p-6 open:shadow-md"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown
                  className="size-5 shrink-0 text-gold-dark transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-4 text-sm leading-8 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
