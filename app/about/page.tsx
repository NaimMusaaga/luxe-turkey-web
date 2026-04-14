"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Banknote, HardHat, Building2, Users, Star, Trophy, ArrowRight } from "lucide-react";

export default function AboutPage() {
  // بيانات الإحصائيات مع الأيقونات الجديدة
  const stats = [
    { label: "عقار فاخر", value: "+500", icon: <Building2 className="w-8 h-8 text-[#D4AF37]" /> },
    { label: "عملاء راضون", value: "+1200", icon: <Users className="w-8 h-8 text-[#D4AF37]" /> },
    { label: "سنوات خبرة", value: "+10", icon: <Star className="w-8 h-8 text-[#D4AF37]" /> },
    { label: "جوائز تميز", value: "15", icon: <Trophy className="w-8 h-8 text-[#D4AF37]" /> },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] pt-28 pb-20 px-6 text-white overflow-hidden" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* 1. رأس الصفحة - Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-8xl font-black text-[#D4AF37] uppercase tracking-tighter mb-4 italic">
            LuxeTurkey
          </h1>
          <p className="text-xl text-gray-400 font-light tracking-[0.3em] uppercase">
            Real Estate Engineering & Luxury
          </p>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "240px" }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* 2. قصة الشركة - Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-right"
          >
            <h2 className="text-3xl font-bold text-[#D4AF37] flex items-center gap-3 justify-end">
              رحلة التميز الهندسية <Building2 className="w-8 h-8" />
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              في <span className="text-[#D4AF37] font-bold">LuxeTurkey</span>، ندمج بين خبرتنا في هندسة البرمجيات وسوق العقارات لتقديم منصة ذكية تعمل على بنية تحتية سحابية (IaaS) فائقة الأمان[cite: 3398, 3842].
            </p>
            <p className="text-gray-300 leading-relaxed text-lg font-light">
              نضمن لك تجربة مستخدم سريعة بفضل استخدامنا لتقنيات الـ Containers والـ Serverless، مما يجعل موقعنا قادراً على تحمل آلاف الزوار في نفس الوقت[cite: 3843, 3942].
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center"
          >
            <div className="w-72 h-72 rounded-full border-2 border-[#D4AF37]/30 flex items-center justify-center p-8 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
              <Building2 className="w-32 h-32 text-[#D4AF37] opacity-80" />
            </div>
          </motion.div>
        </div>

        {/* 3. الإحصائيات - Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="p-8 rounded-2xl border border-[#D4AF37]/20 flex flex-col items-center gap-4 transition-colors"
            >
              {stat.icon}
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* 4. كروت القيم المحدثة - Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          {[
            { title: "أمان البيانات", icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />, desc: "نطبق أعلى معايير الـ IAM لحماية خصوصية استثماراتك." },
            { title: "شفافية مالية", icon: <Banknote className="w-10 h-10 text-[#D4AF37]" />, desc: "نظام دفع مرن وواضح يعتمد على قيمة العقار الحقيقية." },
            { title: "إشراف هندسي", icon: <HardHat className="w-10 h-10 text-[#D4AF37]" />, desc: "فريق هندسي متخصص يفحص العقارات تقنياً قبل عرضها." }
          ].map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center"
            >
              <div className="mb-6">{v.icon}</div>
              <h3 className="text-[#D4AF37] font-bold text-xl mb-4">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-6">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 5. القسم الختامي - CTA */}
        <motion.section 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="text-center py-20 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] rounded-[3rem] text-[#0F172A] shadow-[0_20px_50px_rgba(212,175,55,0.3)]"
        >
          <h2 className="text-4xl font-black mb-4">ابدأ رحلتك الفاخرة الآن</h2>
          <p className="text-lg mb-10 opacity-90">استشارة هندسية وعقارية مجانية بانتظارك</p>
          <button className="group bg-[#0F172A] text-[#D4AF37] px-12 py-5 rounded-full font-black text-xl flex items-center gap-3 mx-auto transition-all hover:gap-5">
            تواصل معنا <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
        </motion.section>
      </div>
    </main>
  );
}