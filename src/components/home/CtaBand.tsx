import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { buttonClass } from "@/src/components/ui/button";
import { whatsappLink } from "@/src/constants/site";

export function CtaBand() {
  const whatsapp = whatsappLink("مرحباً، أرغب في استشارة عقارية مجانية.");

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-balance text-3xl font-bold leading-tight text-white sm:text-4xl">
          جاهز للخطوة الأولى؟ احصل على استشارة مجانية
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-300">
          أخبرنا بما تبحث عنه، وسنرشّح لك خيارات مناسبة لميزانيتك وأهدافك.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className={buttonClass("gold", "lg")}>
            تواصل معنا
          </Link>
          {whatsapp ? (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("outlineLight", "lg")}
            >
              <MessageCircle className="size-5" aria-hidden />
              واتساب
            </a>
          ) : (
            <Link href="/properties" className={buttonClass("outlineLight", "lg")}>
              تصفّح العقارات
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
