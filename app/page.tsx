import Image from "next/image";
import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/property/Hero";
import { LUXURY_PROPERTIES } from "@/src/constants/data";
import Link from "next/link";

export default function Home() {
  // الحصول على أرخص عقارين
  const cheapestProperties = LUXURY_PROPERTIES
    .filter(property => property.status === "for-sale")
    .sort((a, b) => a.price - b.price)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col bg-primary">
      <Navbar />
      <Hero />

      {/* قسم العروض */}
      <section className="bg-[#0F172A] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">
              Special offers
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              اكتشف أفضل العروض على أرقى العقارات في تركيا بأسعار لا تُقاوم
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cheapestProperties.map((property) => (
              <div key={property.id} className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 group shadow-xl">
                {/* الصورة */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={property.imageUrls[0]}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    عرض خاص
                  </div>
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {property.city}
                  </div>
                </div>

                {/* التفاصيل */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white leading-tight">{property.title}</h3>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {property.shortDescription}
                  </p>

                  <div className="flex items-center text-[#D4AF37] font-bold text-2xl mb-6">
                    {property.price.toLocaleString()} <span className="text-sm ml-1 uppercase">{property.currency}</span>
                  </div>

                  {/* المواصفات */}
                  <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-700 text-gray-300 text-sm">
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 uppercase">غرف</span>
                      <span className="font-semibold">{property.bedrooms}</span>
                    </div>
                    <div className="flex flex-col items-center border-x border-gray-700">
                      <span className="text-xs text-gray-500 uppercase">حمام</span>
                      <span className="font-semibold">{property.bathrooms}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-xs text-gray-500 uppercase">مساحة</span>
                      <span className="font-semibold">{property.areaSqm}m²</span>
                    </div>
                  </div>

                  <Link
                    href={`/properties/${property.slug}`}
                    className="block w-full text-center mt-4 py-3 bg-transparent border border-[#D4AF37] text-[#D4AF37] rounded-xl hover:bg-[#D4AF37] hover:text-[#0F172A] transition-colors font-bold"
                  >
                    عرض التفاصيل
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
