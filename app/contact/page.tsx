import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { InquiryForm } from "@/src/components/property/InquiryForm";
import { SITE, whatsappLink } from "@/src/constants/site";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "احصل على استشارة عقارية مجانية. أخبرنا بما تبحث عنه وسنرد عليك في أقرب وقت.",
};

export default function ContactPage() {
  const whatsapp = whatsappLink("مرحباً، أرغب في استشارة عقارية.");

  const channels = [
    {
      icon: Mail,
      label: "البريد الإلكتروني",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      ltr: true,
    },
    ...(whatsapp
      ? [
          {
            icon: MessageCircle,
            label: "واتساب",
            value: "ابدأ محادثة الآن",
            href: whatsapp,
            ltr: false,
          },
        ]
      : []),
    { icon: MapPin, label: "الموقع", value: SITE.location },
    {
      icon: Clock,
      label: "وقت الرد",
      value: "نرد على استفسارك في أقرب وقت",
    },
  ] as const;

  return (
    <>
      <header className="bg-navy py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="mb-3 text-sm font-semibold text-gold">تواصل معنا</p>
          <h1 className="text-balance text-3xl font-bold text-white sm:text-5xl">
            احصل على استشارة عقارية مجانية
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            أخبرنا بميزانيتك والمدينة التي تفضّلها، وسنرشّح لك ما يناسبك.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:py-20">
        <div className="space-y-4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-xs text-muted">
                    {channel.label}
                  </span>
                  <span
                    dir={"ltr" in channel && channel.ltr ? "ltr" : undefined}
                    className="block text-base font-semibold text-navy"
                  >
                    {channel.value}
                  </span>
                </span>
              </>
            );
            const cardClass =
              "flex items-center gap-4 rounded-2xl border border-line bg-white p-5";

            return "href" in channel ? (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`${cardClass} transition-colors hover:border-gold`}
              >
                {content}
              </a>
            ) : (
              <div key={channel.label} className={cardClass}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="rounded-3xl border border-line bg-white p-7 shadow-xl shadow-navy/5 sm:p-9">
          <h2 className="mb-6 text-xl font-bold text-navy">أرسل لنا رسالة</h2>
          <InquiryForm withEmail />
        </div>
      </div>
    </>
  );
}
