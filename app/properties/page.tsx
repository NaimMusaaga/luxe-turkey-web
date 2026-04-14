import { LUXURY_PROPERTIES } from '@/src/constants/data';
import Link from 'next/link';

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-[#0F172A] pt-28 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            عقاراتنا الحصرية في تركيا
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            نقدم لك مجموعة مختارة من أرقى العقارات في قلب إسطنبول وسحر أنطاليا، بمواصفات عالمية وتصاميم فريدة.
          </p>
        </header>
        
        {/* العرض المؤتمت بناءً على LUXURY_PROPERTIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {LUXURY_PROPERTIES.map((property) => (
            <div key={property.id} className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl overflow-hidden hover:border-[#D4AF37] transition-all duration-300 group shadow-xl">
              {/* الصورة */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={property.imageUrls[0]} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
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

                <div className="flex items-center text-[#D4AF37] font-bold text-xl mb-6">
                  {property.price.toLocaleString()} <span className="text-sm ml-1 uppercase">{property.currency}</span>
                </div>

                {/* المواصفات بلمسة مهندس */}
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
    </main>
  );
}