import Image from "next/image";
import { Building2, ChevronDown, MapPin, Search, Wallet } from "lucide-react";

const LOCATIONS = [
  { value: "", label: "All locations" },
  { value: "istanbul", label: "Istanbul" },
  { value: "antalya", label: "Antalya" },
] as const;

const PROPERTY_TYPES = [
  { value: "", label: "All types" },
  { value: "villa", label: "Villa" },
  { value: "penthouse", label: "Penthouse" },
  { value: "apartment", label: "Apartment" },
  { value: "mansion", label: "Mansion" },
] as const;

const PRICE_RANGES = [
  { value: "", label: "Any price" },
  { value: "0-50000000", label: "Under ₺50M" },
  { value: "50000000-100000000", label: "₺50M – ₺100M" },
  { value: "100000000-200000000", label: "₺100M – ₺200M" },
  { value: "200000000", label: "₺200M+" },
] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col justify-center overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
        alt="Luxury modern residence with pool at dusk"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1
            className="font-arabic text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            dir="rtl"
            lang="ar"
          >
            ابحث عن عقار أحلامك في تركيا
          </h1>
          <p className="mt-4 text-pretty text-base text-slate-300 sm:text-lg">
            Curated luxury homes across Istanbul &amp; the Mediterranean coast.
          </p>
        </div>

        <form
          className="rounded-2xl border border-white/15 bg-primary/55 p-4 shadow-2xl backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-primary/40 sm:p-6"
          action="/properties"
          method="get"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <MapPin className="size-4 shrink-0" aria-hidden />
                Location
              </span>
              <div className="relative">
                <select
                  name="location"
                  className="w-full appearance-none rounded-lg border border-gold/35 bg-primary/90 py-3 pl-3 pr-10 text-sm text-slate-100 shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
                  defaultValue=""
                >
                  {LOCATIONS.map(({ value, label }) => (
                    <option key={value || "all"} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gold/80"
                  aria-hidden
                />
              </div>
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <Building2 className="size-4 shrink-0" aria-hidden />
                Type
              </span>
              <div className="relative">
                <select
                  name="type"
                  className="w-full appearance-none rounded-lg border border-gold/35 bg-primary/90 py-3 pl-3 pr-10 text-sm text-slate-100 shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
                  defaultValue=""
                >
                  {PROPERTY_TYPES.map(({ value, label }) => (
                    <option key={value || "all"} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gold/80"
                  aria-hidden
                />
              </div>
            </label>

            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <Wallet className="size-4 shrink-0" aria-hidden />
                Price
              </span>
              <div className="relative">
                <select
                  name="price"
                  className="w-full appearance-none rounded-lg border border-gold/35 bg-primary/90 py-3 pl-3 pr-10 text-sm text-slate-100 shadow-inner outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/40"
                  defaultValue=""
                >
                  {PRICE_RANGES.map(({ value, label }) => (
                    <option key={value || "any"} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gold/80"
                  aria-hidden
                />
              </div>
            </label>

            <div className="flex flex-col justify-end gap-2 sm:col-span-2 lg:col-span-1">
              <span className="hidden text-xs font-semibold uppercase tracking-wider text-transparent lg:block">
                Search
              </span>
              <button
                type="submit"
                className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-gold px-4 text-sm font-semibold text-primary shadow-lg transition hover:bg-gold/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <Search className="size-4 shrink-0" aria-hidden />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
