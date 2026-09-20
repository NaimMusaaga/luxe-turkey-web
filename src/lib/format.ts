import type {
  City,
  ListingCurrency,
  PropertyStatus,
  PropertyType,
} from "@/src/types/property";

export const CITY_LABELS: Record<City, string> = {
  istanbul: "إسطنبول",
  antalya: "أنطاليا",
};

export const TYPE_LABELS: Record<PropertyType, string> = {
  villa: "فيلا",
  penthouse: "بنتهاوس",
  apartment: "شقة",
  mansion: "قصر",
};

export const STATUS_LABELS: Record<PropertyStatus, string> = {
  "for-sale": "متاح للبيع",
  pending: "محجوز",
  sold: "مباع",
};

const CURRENCY_SYMBOL: Record<ListingCurrency, string> = {
  TRY: "₺",
  USD: "$",
  EUR: "€",
};

const numberFormat = new Intl.NumberFormat("en-US");

/** Full price, e.g. "₺185,000,000". Render inside a dir="ltr" element. */
export function formatPrice(price: number, currency: ListingCurrency): string {
  return `${CURRENCY_SYMBOL[currency]}${numberFormat.format(price)}`;
}

/** Compact Arabic price for cards, e.g. "185 مليون ₺". */
export function formatPriceShort(
  price: number,
  currency: ListingCurrency,
): string {
  const symbol = CURRENCY_SYMBOL[currency];
  if (price < 1_000_000) return `${numberFormat.format(price)} ${symbol}`;
  const millions = Number((price / 1_000_000).toFixed(1));
  return `${millions} مليون ${symbol}`;
}

const dateFormat = new Intl.DateTimeFormat("ar-u-nu-latn", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatDate(iso: string): string {
  return dateFormat.format(new Date(iso));
}
