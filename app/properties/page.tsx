import type { Metadata } from "next";
import Link from "next/link";
import { SearchX } from "lucide-react";
import { PropertyCard } from "@/src/components/property/PropertyCard";
import { SearchForm } from "@/src/components/property/SearchForm";
import { buttonClass } from "@/src/components/ui/button";
import {
  filterProperties,
  hasActiveFilters,
  parseFilters,
} from "@/src/lib/properties";

export const metadata: Metadata = {
  title: "العقارات",
  description:
    "تصفّح الفلل والبنتهاوس والشقق الفاخرة في إسطنبول وأنطاليا، وفلتر حسب المدينة والنوع والسعر.",
};

export default async function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const filters = parseFilters(await searchParams);
  const results = filterProperties(filters);
  const filtered = hasActiveFilters(filters);

  return (
    <>
      <header className="bg-navy pb-24 pt-16 text-center sm:pt-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold text-gold">العقارات</p>
          <h1 className="text-balance text-3xl font-bold text-white sm:text-5xl">
            عقارات فاخرة في تركيا
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            من إطلالات البوسفور في إسطنبول إلى شواطئ أنطاليا، اختر ما يناسبك.
          </p>
        </div>
      </header>

      <div className="mx-auto -mt-12 max-w-7xl px-5 pb-20 sm:px-8">
        <SearchForm defaults={filters} showSort />

        <div className="mb-8 mt-10 flex items-center justify-between gap-4">
          <p className="text-sm text-muted" aria-live="polite">
            {results.length === 0
              ? "لا توجد نتائج"
              : `${results.length} ${results.length > 2 ? "عقارات" : "عقار"}`}
          </p>
          {filtered ? (
            <Link
              href="/properties"
              className="text-sm font-medium text-gold-dark underline underline-offset-4"
            >
              مسح الفلاتر
            </Link>
          ) : null}
        </div>

        {results.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                priority={index < 3}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
            <SearchX className="mx-auto mb-4 size-10 text-gold-dark" aria-hidden />
            <h2 className="text-xl font-bold text-navy">
              لا توجد عقارات مطابقة لبحثك
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted">
              جرّب توسيع نطاق السعر أو تغيير المدينة، أو أخبرنا بما تبحث عنه
              وسنرشّح لك خيارات مناسبة.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/properties" className={buttonClass("dark", "md")}>
                عرض كل العقارات
              </Link>
              <Link href="/contact" className={buttonClass("outline", "md")}>
                اطلب ترشيحاً مخصصاً
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
