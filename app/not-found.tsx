import Link from "next/link";
import { buttonClass } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-28 text-center">
      <p className="font-display text-7xl font-semibold text-gold/60">404</p>
      <h1 className="mt-4 text-3xl font-bold text-navy">
        الصفحة التي تبحث عنها غير موجودة
      </h1>
      <p className="mt-4 leading-8 text-muted">
        ربما تغيّر الرابط أو أُزيل العقار. يمكنك العودة إلى قائمة العقارات
        ومتابعة التصفح.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/properties" className={buttonClass("dark", "md")}>
          تصفّح العقارات
        </Link>
        <Link href="/" className={buttonClass("outline", "md")}>
          الصفحة الرئيسية
        </Link>
      </div>
    </section>
  );
}
