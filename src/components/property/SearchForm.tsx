import { Building2, ChevronDown, MapPin, Search, Wallet } from "lucide-react";
import type { ReactNode } from "react";
import { CITY_LABELS, TYPE_LABELS } from "@/src/lib/format";
import {
  PRICE_RANGES,
  SORT_OPTIONS,
  type PropertyFilters,
} from "@/src/lib/properties";
import { buttonClass } from "@/src/components/ui/button";

interface SearchFormProps {
  defaults?: Partial<PropertyFilters>;
  variant?: "hero" | "bar";
  showSort?: boolean;
}

const SELECT_BASE =
  "w-full cursor-pointer appearance-none rounded-xl border py-3 pe-4 ps-10 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

function Field({
  label,
  icon,
  tone,
  children,
}: {
  label: string;
  icon: ReactNode;
  tone: "hero" | "bar";
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span
        className={`flex items-center gap-2 text-xs font-semibold ${
          tone === "hero" ? "text-gold" : "text-gold-dark"
        }`}
      >
        {icon}
        {label}
      </span>
      <span className="relative block">
        {children}
        <ChevronDown
          className={`pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 ${
            tone === "hero" ? "text-gold" : "text-muted"
          }`}
          aria-hidden
        />
      </span>
    </label>
  );
}

export function SearchForm({
  defaults = {},
  variant = "bar",
  showSort = false,
}: SearchFormProps) {
  const hero = variant === "hero";
  const selectClass = `${SELECT_BASE} ${
    hero
      ? "border-white/15 bg-navy/70 text-white"
      : "border-line bg-white text-ink"
  }`;
  const iconClass = "size-4";

  return (
    <form
      action="/properties"
      method="get"
      role="search"
      aria-label="البحث عن عقار"
      className={
        hero
          ? "rounded-2xl border border-white/15 bg-navy/60 p-4 shadow-2xl backdrop-blur-xl sm:p-6"
          : "rounded-2xl border border-line bg-white p-4 shadow-sm sm:p-5"
      }
    >
      <div
        className={`grid gap-4 sm:grid-cols-2 ${
          showSort ? "lg:grid-cols-5" : "lg:grid-cols-4"
        }`}
      >
        <Field
          label="الموقع"
          tone={variant}
          icon={<MapPin className={iconClass} aria-hidden />}
        >
          <select
            name="location"
            defaultValue={defaults.location ?? ""}
            className={selectClass}
          >
            <option value="">كل المدن</option>
            {Object.entries(CITY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="نوع العقار"
          tone={variant}
          icon={<Building2 className={iconClass} aria-hidden />}
        >
          <select
            name="type"
            defaultValue={defaults.type ?? ""}
            className={selectClass}
          >
            <option value="">كل الأنواع</option>
            {Object.entries(TYPE_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="السعر"
          tone={variant}
          icon={<Wallet className={iconClass} aria-hidden />}
        >
          <select
            name="price"
            defaultValue={defaults.price ?? ""}
            className={selectClass}
          >
            <option value="">أي سعر</option>
            {PRICE_RANGES.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </Field>

        {showSort ? (
          <Field
            label="الترتيب"
            tone={variant}
            icon={<ChevronDown className={iconClass} aria-hidden />}
          >
            <select
              name="sort"
              defaultValue={defaults.sort ?? "newest"}
              className={selectClass}
            >
              {SORT_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </Field>
        ) : null}

        <div className="flex items-end">
          <button
            type="submit"
            className={buttonClass("gold", "md", "w-full")}
          >
            <Search className="size-4" aria-hidden />
            بحث
          </button>
        </div>
      </div>
    </form>
  );
}
