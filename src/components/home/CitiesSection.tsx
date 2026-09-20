import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Reveal } from "@/src/components/ui/Reveal";
import { CITY_LABELS } from "@/src/lib/format";
import { countByCity } from "@/src/lib/properties";
import type { City } from "@/src/types/property";

const CITIES: readonly {
  city: City;
  image: string;
  blurb: string;
}[] = [
  {
    city: "istanbul",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80",
    blurb: "مدينة القارتين: إطلالات البوسفور، الأحياء الراقية، وحياة لا تتوقف.",
  },
  {
    city: "antalya",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    blurb: "الساحل الفيروزي: شواطئ، منتجعات، وفلل بمسابح مطلة على المتوسط.",
  },
];

export function CitiesSection() {
  return (
    <section className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="الوجهات"
            title="اختر مدينتك أولاً"
            description="نركّز على مدينتين رئيسيتين لنعرفهما جيداً، من الأحياء إلى الأسعار."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CITIES.map(({ city, image, blurb }, index) => (
            <Reveal key={city} delay={index * 0.1}>
              <Link
                href={`/properties?location=${city}`}
                className="group relative block h-80 overflow-hidden rounded-2xl sm:h-96"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                  <p className="mb-2 text-sm font-medium text-gold-light">
                    {countByCity(city)} عقارات
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    {CITY_LABELS[city]}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-slate-200">
                    {blurb}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all group-hover:gap-3">
                    تصفّح عقارات {CITY_LABELS[city]}
                    <ArrowLeft className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
