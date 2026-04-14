"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white border-t border-[#D4AF37]/20 pt-16 pb-8 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* العمود الأول: الهوية */}
          <div className="col-span-1 md:col-span-1 text-right">
            <h2 className="text-2xl font-black text-[#D4AF37] mb-6 uppercase italic">
              LuxeTurkey
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              رائدون في تقديم الحلول العقارية الفاخرة، نجمع بين الهندسة الرقمية والرفاهية لضمان أفضل استثمار.
            </p>
            <div className="flex gap-4 justify-end">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-[#D4AF37] transition-colors">
                <span className="text-sm"></span>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-[#D4AF37] transition-colors">
                <span className="text-sm"></span>
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-[#D4AF37] transition-colors">
                <span className="text-sm"></span>
              </a>
            </div>
          </div>

          {/* الروابط السريعة */}
          <div className="text-right">
            <h3 className="text-lg font-bold text-white mb-6 border-r-2 border-[#D4AF37] pr-3">روابط سريعة</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-[#D4AF37]">الرئيسية</Link></li>
              <li><Link href="/about" className="hover:text-[#D4AF37]">عن LuxeTurkey</Link></li>
              <li><Link href="/properties" className="hover:text-[#D4AF37]">العقارات الفاخرة</Link></li>
              <li><Link href="/contact" className="hover:text-[#D4AF37]">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* الخدمات */}
          <div className="text-right">
            <h3 className="text-lg font-bold text-white mb-6 border-r-2 border-[#D4AF37] pr-3">خدماتنا</h3>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="italic">إشراف هندسي متكامل</li>
              <li className="italic">استشارات استثمارية</li>
              <li className="italic">إدارة أملاك سحابية</li>
              <li className="italic">تحليل السوق العقاري</li>
            </ul>
          </div>

          {/* التواصل */}
          <div className="text-right">
            <h3 className="text-lg font-bold text-white mb-6 border-r-2 border-[#D4AF37] pr-3">اتصل بنا</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3 justify-end">
                <span>Düzce, Türkiye</span>
                <MapPin size={18} className="text-[#D4AF37]" />
              </li>
              <li className="flex items-center gap-3 justify-end">
                <span dir="ltr">+90 5XX XXX XX XX</span>
                <Phone size={18} className="text-[#D4AF37]" />
              </li>
              <li className="flex items-center gap-3 justify-end">
                <span>info@luxeturkey.com</span>
                <Mail size={18} className="text-[#D4AF37]" />
              </li>
            </ul>
          </div>
        </div>

        {/* الحقوق واللمسة الهندسية النهائية */}
        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-xs">
          <p>© {currentYear} LuxeTurkey |</p>
          <div className="mt-2 flex justify-center gap-4 opacity-20 uppercase tracking-widest">
            <span>Identity Management: IAM</span>
            <span>Infrastructure: IaaS Enabled</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;