export type PropertyStatus = "for-sale" | "sold" | "pending";

export type PropertyType =
  | "villa"
  | "penthouse"
  | "apartment"
  | "mansion";

export type ListingCurrency = "TRY" | "USD" | "EUR";

export interface Property {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly city: string;
  readonly district: string;
  readonly country: "Turkey";
  readonly price: number;
  readonly currency: ListingCurrency;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly areaSqm: number;
  readonly yearBuilt: number;
  readonly propertyType: PropertyType;
  readonly features: readonly string[];
  readonly imageUrls: readonly string[];
  readonly listedAt: string;
  readonly status: PropertyStatus;
}
