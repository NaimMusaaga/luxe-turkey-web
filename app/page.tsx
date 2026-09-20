import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Hero } from "@/src/components/home/Hero";
import { CitiesSection } from "@/src/components/home/CitiesSection";
import { WhyUsSection } from "@/src/components/home/WhyUsSection";
import { ProcessSection } from "@/src/components/home/ProcessSection";
import { FaqSection } from "@/src/components/home/FaqSection";
import { CtaBand } from "@/src/components/home/CtaBand";
import { PropertyCard } from "@/src/components/property/PropertyCard";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { Reveal } from "@/src/components/ui/Reveal";
import { buttonClass } from "@/src/components/ui/button";
import { getFeaturedProperties } from "@/src/lib/properties";

export default function HomePage() {
  const featured = getFeaturedProperties();

  return (
    <>
      <Hero />

      <section className="bg-ivory py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="عقارات مميّزة"
              title="اخترنا لك هذه العقارات"
              description="مجموعة منتقاة من أفضل ما يتوفر حالياً في إسطنبول وأنطاليا."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((property, index) => (
              <Reveal key={property.id} delay={index * 0.08}>
                <PropertyCard property={property} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/properties" className={buttonClass("outline", "md")}>
              عرض كل العقارات
              <ArrowLeft className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <CitiesSection />
      <WhyUsSection />
      <ProcessSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
