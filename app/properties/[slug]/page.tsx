import { LUXURY_PROPERTIES } from '@/src/constants/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = LUXURY_PROPERTIES.find(p => p.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0F172A] pt-28 pb-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* زر العودة */}
        <Link
          href="/properties"
          className="inline-flex items-center text-[#D4AF37] hover:text-white transition-colors mb-8"
        >
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          العودة للعقارات
        </Link>

        {/* الصورة الرئيسية */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
          <img
            src={property.imageUrls[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0F172A] px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            {property.city}
          </div>
        </div>

        {/* تفاصيل العقار */}
        <div className="bg-[#1E293B]/50 backdrop-blur-sm border border-[#D4AF37]/10 rounded-2xl p-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {property.title}
              </h1>
              <p className="text-gray-400 text-lg">
                {property.district}, {property.city}
              </p>
            </div>
            <div className="mt-4 lg:mt-0 lg:text-right">
              <div className="text-3xl font-bold text-[#D4AF37]">
                {property.price.toLocaleString()} {property.currency}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                {property.status === 'for-sale' ? 'متاح للبيع' :
                 property.status === 'sold' ? 'مباع' : 'قيد الانتظار'}
              </div>
            </div>
          </div>

          {/* الوصف */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">الوصف</h2>
            <p className="text-gray-300 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* المواصفات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">{property.bedrooms}</div>
              <div className="text-gray-400 text-sm">غرف نوم</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">{property.bathrooms}</div>
              <div className="text-gray-400 text-sm">حمام</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">{property.areaSqm}</div>
              <div className="text-gray-400 text-sm">متر مربع</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#D4AF37]">{property.yearBuilt}</div>
              <div className="text-gray-400 text-sm">سنة البناء</div>
            </div>
          </div>

          {/* المميزات */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">المميزات</h2>
            <div className="flex flex-wrap gap-2">
              {property.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* معلومات إضافية */}
          <div className="border-t border-gray-700 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400">نوع العقار:</span>
                <span className="text-white ml-2">
                  {property.propertyType === 'villa' ? 'فيلا' :
                   property.propertyType === 'penthouse' ? 'بنتهاوس' :
                   property.propertyType === 'apartment' ? 'شقة' : 'قصر'}
                </span>
              </div>
              <div>
                <span className="text-gray-400">تاريخ الإدراج:</span>
                <span className="text-white ml-2">{property.listedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}