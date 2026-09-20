import type { MetadataRoute } from "next";
import { LUXURY_PROPERTIES } from "@/src/constants/data";
import { SITE } from "@/src/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/properties", "/about", "/contact"].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const properties = LUXURY_PROPERTIES.map((property) => ({
    url: `${SITE.url}/properties/${property.slug}`,
    lastModified: new Date(property.listedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...properties];
}
