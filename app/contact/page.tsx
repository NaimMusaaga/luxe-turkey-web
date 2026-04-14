"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // محاكاة أتمتة الإرسال (Form Submission Automation)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // محاكاة تأخير الشبكة كما في أنظمة السحاب
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("تم استلام رسالتك بنجاح! فريقنا الهندسي سيتواصل معك.");
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-[#0F172A] pt-28 pb-20 px-6 text-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* رأس الصفحة مع أنيميشن */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-black text-[#D4AF37] mb-4">تواصل مع الخبراء</h1>
          <p className="text-gray-400 text-lg">نحن هنا للإجابة على استفساراتك العقارية والتقنية على مدار الساعة.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* قسم معلومات التواصل - أنيميشن دخول جانبي */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white/5 p-8 rounded-3xl border border-[#D4AF37]/20">
              <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 flex items-center gap-3">
                معلومات الاتصال <MessageSquare className="w-6 h-6" />
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: <Phone className="w-6 h-6 text-[#D4AF37]" />, label: "الهاتف", val: "+90 5XX XXX XX XX" },
                  { icon: <Mail className="w-6 h-6 text-[#D4AF37]" />, label: "البريد الإلكتروني", val: "info@luxeturkey.com" },
                  { icon: <MapPin className="w-6 h-6 text-[#D4AF37]" />, label: "الموقع", val: "Düzce, Türkiye" },
                  { icon: <Clock className="w-6 h-6 text-[#D4AF37]" />, label: "ساعات العمل", val: "24/7 طوال الأسبوع" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: -10 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-[#D4AF37]/10 rounded-xl group-hover:bg-[#D4AF37] group-hover:text-[#0F172A] transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">{item.label}</p>
                      <p className="text-lg font-medium">{item.val}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* نموذج المراسلة - Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 rounded-3xl border border-[#D4AF37]/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 text-right">
                  <label className="text-sm text-gray-400">الاسم الكامل</label>
                  <input required type="text" className="w-full bg-[#0F172A] border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none transition-all" />
                </div>
                <div className="space-y-2 text-right">
                  <label className="text-sm text-gray-400">البريد الإلكتروني</label>
                  <input required type="email" className="w-full bg-[#0F172A] border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2 text-right">
                <label className="text-sm text-gray-400">الموضوع</label>
                <input required type="text" className="w-full bg-[#0F172A] border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none transition-all" />
              </div>
              <div className="space-y-2 text-right">
                <label className="text-sm text-gray-400">رسالتك</label>
                <textarea required rows={4} className="w-full bg-[#0F172A] border border-white/10 rounded-xl p-4 focus:border-[#D4AF37] outline-none transition-all"></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-[#D4AF37] text-[#0F172A] font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-[#B8860B] transition-all disabled:opacity-50"
              >
                {isSubmitting ? "جاري الإرسال عبر السحاب..." : "إرسال الرسالة"}
                <Send className="w-5 h-5 rotate-180" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}