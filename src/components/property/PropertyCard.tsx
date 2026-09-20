import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import type { Property } from "@/src/types/property";
import {
  CITY_LABELS,
  TYPE_LABELS,
  formatPriceShort,
} from "@/src/lib/format";
import { StatusBadge } from "@/src/components/property/StatusBadge";

export function PropertyCard({
  property,
  priority = false,
}: {
  property: Property;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={property.imageUrls[0]}
          alt={property.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <StatusBadge status={property.status} />
          <span className="rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {TYPE_LABELS[property.propertyType]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 flex items-center gap-1.5 text-sm text-muted">
          <MapPin className="size-4 text-gold-dark" aria-hidden />
          {property.district}، {CITY_LABELS[property.city]}
        </p>
        <h3 className="text-xl font-bold leading-snug text-navy">
          {property.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-7 text-muted">
          {property.shortDescription}
        </p>

        <p className="mt-5 text-2xl font-bold text-gold-dark">
          {formatPriceShort(property.price, property.currency)}
        </p>

        <ul className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-5 text-sm text-ink">
          <li className="flex items-center gap-2">
            <BedDouble className="size-4 text-muted" aria-hidden />
            <span>{property.bedrooms} غرف</span>
          </li>
          <li className="flex items-center gap-2">
            <Bath className="size-4 text-muted" aria-hidden />
            <span>{property.bathrooms} حمام</span>
          </li>
          <li className="flex items-center gap-2">
            <Ruler className="size-4 text-muted" aria-hidden />
            <span dir="ltr">{property.areaSqm} m²</span>
          </li>
        </ul>
      </div>
    </Link>
  );
}
