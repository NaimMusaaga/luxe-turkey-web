const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  name: "LuxeTurkey",
  nameAr: "لوكس تركيا",
  tagline: "عقارات فاخرة في إسطنبول وأنطاليا",
  description:
    "اكتشف مجموعة مختارة من أرقى العقارات في إسطنبول وأنطاليا، مع استشارة عقارية مجانية ودعم كامل باللغة العربية.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (productionHost ? `https://${productionHost}` : "http://localhost:3000"),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@luxeturkey.com",
  // Digits only, with country code and no "+" or leading 0 (e.g. 905551234567).
  // Override with NEXT_PUBLIC_WHATSAPP; set it to an empty string to hide all WhatsApp buttons.
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP ?? "905393044489").replace(
    /\D/g,
    "",
  ),
  location: "تركيا",
} as const;

export function whatsappLink(message: string): string | null {
  if (!SITE.whatsapp) return null;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${SITE.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
