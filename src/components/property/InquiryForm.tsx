"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { SITE, mailtoLink, whatsappLink } from "@/src/constants/site";
import { buttonClass } from "@/src/components/ui/button";

interface InquiryFormProps {
  /** What the visitor is asking about, e.g. a property title. */
  subject?: string;
  /** Show the optional email field (used on the general contact page). */
  withEmail?: boolean;
  defaultMessage?: string;
}

const FIELD =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-2 focus:ring-gold/30";

export function InquiryForm({
  subject,
  withEmail = false,
  defaultMessage = "",
}: InquiryFormProps) {
  const [sent, setSent] = useState(false);
  const viaWhatsApp = Boolean(SITE.whatsapp);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = [
      `مرحباً ${SITE.name}،`,
      `الاسم: ${name}`,
      `الهاتف: ${phone}`,
      ...(email ? [`البريد: ${email}`] : []),
      ...(subject ? [`بخصوص: ${subject} (${window.location.href})`] : []),
      "",
      message,
    ].join("\n");

    const wa = whatsappLink(text);
    if (wa) {
      window.open(wa, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(subject ?? "استفسار عقاري", text);
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center"
      >
        <CheckCircle2 className="mx-auto mb-3 size-10 text-emerald-600" aria-hidden />
        <p className="font-semibold text-emerald-900">
          {viaWhatsApp
            ? "تم تجهيز رسالتك في واتساب"
            : "تم تجهيز رسالتك في تطبيق البريد"}
        </p>
        <p className="mt-2 text-sm leading-7 text-emerald-800">
          اضغط «إرسال» في التطبيق الذي فُتح لإتمام الإرسال. سنرد عليك في أقرب
          وقت.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 cursor-pointer text-sm font-medium text-emerald-900 underline underline-offset-4"
        >
          إرسال رسالة أخرى
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="inq-name" className="mb-1.5 block text-sm font-medium">
          الاسم الكامل
        </label>
        <input
          id="inq-name"
          name="name"
          required
          autoComplete="name"
          className={FIELD}
        />
      </div>
      <div>
        <label htmlFor="inq-phone" className="mb-1.5 block text-sm font-medium">
          رقم الهاتف
        </label>
        <input
          id="inq-phone"
          name="phone"
          type="tel"
          required
          dir="ltr"
          autoComplete="tel"
          placeholder="+966 5X XXX XXXX"
          className={`${FIELD} text-start`}
        />
      </div>
      {withEmail ? (
        <div>
          <label htmlFor="inq-email" className="mb-1.5 block text-sm font-medium">
            البريد الإلكتروني <span className="text-muted">(اختياري)</span>
          </label>
          <input
            id="inq-email"
            name="email"
            type="email"
            dir="ltr"
            autoComplete="email"
            className={`${FIELD} text-start`}
          />
        </div>
      ) : null}
      <div>
        <label htmlFor="inq-message" className="mb-1.5 block text-sm font-medium">
          رسالتك
        </label>
        <textarea
          id="inq-message"
          name="message"
          required
          rows={4}
          defaultValue={defaultMessage}
          className={FIELD}
        />
      </div>
      <button
        type="submit"
        className={buttonClass(viaWhatsApp ? "whatsapp" : "gold", "md", "w-full")}
      >
        {viaWhatsApp ? (
          <MessageCircle className="size-5" aria-hidden />
        ) : (
          <Send className="size-4 -scale-x-100" aria-hidden />
        )}
        {viaWhatsApp ? "إرسال عبر واتساب" : "إرسال بالبريد الإلكتروني"}
      </button>
      <p className="text-center text-xs leading-6 text-muted">
        لا نشارك بياناتك مع أي جهة. تُستخدم فقط للرد على استفسارك.
      </p>
    </form>
  );
}
