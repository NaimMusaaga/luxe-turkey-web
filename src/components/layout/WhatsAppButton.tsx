import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/src/constants/site";

/** Floating WhatsApp button. Renders nothing until a real number is configured. */
export function WhatsAppButton() {
  const href = whatsappLink("مرحباً، أرغب في الاستفسار عن العقارات.");
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 start-5 z-40 flex size-14 items-center justify-center rounded-full bg-[#1FA855] text-white shadow-lg shadow-black/25 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" aria-hidden />
    </a>
  );
}
