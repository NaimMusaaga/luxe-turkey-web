import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Bath,
  BedDouble,
  CalendarDays,
  Check,
  ChevronLeft,
  MapPin,
  Ruler,
  Building2,
} from "lucide-react";
import { LUXURY_PROPERTIES } from "@/src/constants/data";
import {
  CITY_LABELS,
  TYPE_LABELS,
  formatDate,
  formatPrice,
} from "@/src/lib/format";
import { getPropertyBySlug, getRelatedProperties } from "@/src/lib/properties";
import { StatusBadge } from "@/src/components/property/StatusBadge";
import { PropertyCard } from "@/src/components/property/PropertyCard";
import { InquiryForm } from "@/src/components/property/InquiryForm";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return LUXURY_PROPERTIES.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};

  return {
    title: property.title,
    description: property.shortDescription,
    openGraph: {
      title: property.title,
      description: property.shortDescription,
      images: [{ url: property.imageUrls[0] }],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  const related = getRelatedProperties(property);
  const facts = [
    { icon: BedDouble, label: "غرف النوم", value: property.bedrooms },
    { icon: Bath, label: "الحمامات", value: property.bathrooms },
    { icon: Ruler, label: "المساحة (م²)", value: property.areaSqm },
    { icon: CalendarDays, label: "سنة البناء", value: property.yearBuilt },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        <nav aria-label="مسار التنقل" className="mb-6 text-sm text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-navy">
                الرئيسية
              </Link>
            </li>
            <li aria-hidden>
              <ChevronLeft className="size-3.5" />
            </li>
            <li>
              <Link href="/properties" className="hover:text-navy">
                العقارات
              </Link>
            </li>
            <li aria-hidden>
              <ChevronLeft className="size-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-navy">
              {property.title}
            </li>
          </ol>
        </nav>

        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-sand sm:aspect-[21/9]">
          <Image
            src={property.imageUrls[0]}
            alt={property.title}
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={property.status} />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sand px-3 py-1 text-xs font-medium text-navy">
                <Building2 className="size-3.5" aria-hidden />
                {TYPE_LABELS[property.propertyType]}
              </span>
            </div>

            <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-navy sm:text-4xl">
              {property.title}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-muted">
              <MapPin className="size-4 text-gold-dark" aria-hidden />
              {property.district}، {CITY_LABELS[property.city]}
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-line bg-white p-5 text-center"
                >
                  <Icon className="mx-auto mb-2 size-5 text-gold-dark" aria-hidden />
                  <dd className="text-2xl font-bold text-navy">{value}</dd>
                  <dt className="mt-1 text-xs text-muted">{label}</dt>
                </div>
              ))}
            </dl>

            <section className="mt-12">
              <h2 className="text-xl font-bold text-navy">عن العقار</h2>
              <p className="mt-4 text-base leading-9 text-ink/85">
                {property.description}
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-xl font-bold text-navy">المميزات</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {property.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <p className="mt-10 text-sm text-muted">
              تاريخ الإدراج: {formatDate(property.listedAt)}
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-navy/5">
              <p className="text-sm text-muted">السعر</p>
              <p
                dir="ltr"
                className="mt-1 text-start font-display text-4xl font-semibold text-navy"
              >
                {formatPrice(property.price, property.currency)}
              </p>
              <div className="my-6 h-px bg-line" />
              <h2 className="mb-4 text-lg font-bold text-navy">
                استفسر عن هذا العقار
              </h2>
              <InquiryForm
                subject={property.title}
                defaultMessage={`أرغب في معرفة المزيد عن «${property.title}».`}
              />
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 ? (
        <section className="bg-sand py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="قد يعجبك أيضاً"
              title={`المزيد من عقارات ${CITY_LABELS[property.city]}`}
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.id} property={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
