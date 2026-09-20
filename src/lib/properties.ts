import { LUXURY_PROPERTIES } from "@/src/constants/data";
import type { City, Property, PropertyType } from "@/src/types/property";
import { CITY_LABELS, TYPE_LABELS } from "@/src/lib/format";

export const PRICE_RANGES = [
  { value: "0-50000000", label: "أقل من 50 مليون ₺" },
  { value: "50000000-100000000", label: "50 – 100 مليون ₺" },
  { value: "100000000-200000000", label: "100 – 200 مليون ₺" },
  { value: "200000000", label: "أكثر من 200 مليون ₺" },
] as const;

export const SORT_OPTIONS = [
  { value: "newest", label: "الأحدث" },
  { value: "price-asc", label: "السعر: من الأقل" },
  { value: "price-desc", label: "السعر: من الأعلى" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

export interface PropertyFilters {
  location?: City;
  type?: PropertyType;
  price?: string;
  sort: SortValue;
}

type RawParams = Record<string, string | string[] | undefined>;

function first(value: string | string[] | undefined): string {
  return (Array.isArray(value) ? value[0] : value) ?? "";
}

/** Turns untrusted query-string values into a validated filter object. */
export function parseFilters(params: RawParams): PropertyFilters {
  const location = first(params.location);
  const type = first(params.type);
  const price = first(params.price);
  const sort = first(params.sort);

  return {
    location: Object.hasOwn(CITY_LABELS, location)
      ? (location as City)
      : undefined,
    type: Object.hasOwn(TYPE_LABELS, type) ? (type as PropertyType) : undefined,
    price: PRICE_RANGES.some((range) => range.value === price)
      ? price
      : undefined,
    sort: SORT_OPTIONS.some((option) => option.value === sort)
      ? (sort as SortValue)
      : "newest",
  };
}

export function hasActiveFilters(filters: PropertyFilters): boolean {
  return Boolean(filters.location || filters.type || filters.price);
}

export function filterProperties(filters: PropertyFilters): Property[] {
  const [min, max] = (filters.price ?? "").split("-").map(Number);

  const results = LUXURY_PROPERTIES.filter((property) => {
    if (filters.location && property.city !== filters.location) return false;
    if (filters.type && property.propertyType !== filters.type) return false;
    if (filters.price) {
      if (property.price < min) return false;
      if (max !== undefined && property.price >= max) return false;
    }
    return true;
  });

  return results.sort((a, b) => {
    if (filters.sort === "price-asc") return a.price - b.price;
    if (filters.sort === "price-desc") return b.price - a.price;
    return b.listedAt.localeCompare(a.listedAt);
  });
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return LUXURY_PROPERTIES.find((property) => property.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return LUXURY_PROPERTIES.filter((property) => property.featured);
}

export function getRelatedProperties(property: Property, limit = 3): Property[] {
  return LUXURY_PROPERTIES.filter(
    (candidate) =>
      candidate.id !== property.id && candidate.city === property.city,
  ).slice(0, limit);
}

export function countByCity(city: City): number {
  return LUXURY_PROPERTIES.filter((property) => property.city === city).length;
}
