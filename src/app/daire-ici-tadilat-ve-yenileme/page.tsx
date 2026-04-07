import type { Metadata } from 'next';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Ankara Anahtar Teslim Tadilat & Tamirat | Fayans, Alçı, Boya',
  description: 'Ankara komple daire içi tadilat ve yenileme servisi. Fayans döşeme, alçı pano, boya badana ve mutfak/banyo tasarımı. Profesyonel ekip, anahtar teslim çözüm.',
  alternates: {
    canonical: 'https://724ankaratesisat.com/daire-ici-tadilat-ve-yenileme',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Anahtar Teslim Daire Tadilatı",
  "serviceType": "Home Improvement",
  "provider": {
    "@type": "PlumbingService",
    "name": "7/24 Ankara Tesisat",
    "telephone": "+905368440799",
    "image": "https://724ankaratesisat.com/logo.png"
  },
  "areaServed": {
    "@type": "State",
    "name": "Ankara"
  },
  "description": "Ankara genelinde fayans, alçı, boya ve komple daire içi yenileme hizmeti sunuyoruz. Anahtar teslim tadilat çözümleri.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
};

export default function TadilatYenilemePage() {
  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero h1="Ankara Anahtar Teslim Tadilat & Yenileme" />
      
      <section className="py-16 px-4 md:px-8 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ankara Komple Daire İçi Değişim & Tadilat
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Evinizi yenilemek mi istiyorsunuz? Sadece tesisat değil; **fayans, alçı ve boya** işlerini de kapsayan anahtar teslim çözümlerimizle dairenizi baştan aşağı değiştiriyoruz. Uzman usta kadromuzla hayalinizdeki evi inşa ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">01</div>
               <h3 className="text-xl font-bold">Fayans & Seramik</h3>
               <p className="text-sm text-slate-600">Eski fayansların sökülmesi, zemin hazırlığı ve modern seramiklerin milimetrik işçilikle döşenmesi.</p>
            </div>
            <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">02</div>
               <h3 className="text-xl font-bold">Alçı & Kartonpiyer</h3>
               <p className="text-sm text-slate-600">Duvar düzeltme, alçı sıva, asma tavan ve modern ışık bandı uygulamaları ile estetik dokunuşlar.</p>
            </div>
            <div className="space-y-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mb-4">03</div>
               <h3 className="text-xl font-bold">Boya & Badana</h3>
               <p className="text-sm text-slate-600">Silinebilir, koku yapmayan kaliteli boyalarla evinizin havasını değiştiren profesyonel işçilik.</p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h4 className="text-xl font-bold mb-4 text-blue-900">Neden Bizi Seçmelisiniz?</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-blue-800 font-medium">
              <li className="flex items-center gap-2">✓ Tek Elden Anahtar Teslim Çözüm</li>
              <li className="flex items-center gap-2">✓ Planlanan Zamanda Teslimat Garantisi</li>
              <li className="flex items-center gap-2">✓ Yüksek Kalite Malzeme Kullanımı</li>
              <li className="flex items-center gap-2">✓ Şeffaf ve Sabit Fiyat Garantisi</li>
              <li className="flex items-center gap-2">✓ Temiz ve Titiz Çalışma Prensibi</li>
              <li className="flex items-center gap-2">✓ Ücretsiz Keşif ve Fiyatlandırma</li>
            </ul>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed italic">
              "Evinizdeki her metrekareye değer katıyoruz. Kentsel dönüşüm veya eski yapılarınızın modern bir görünüme kavuşması için Ankara&apos;nın her bölgesine uzman mobil ekiplerimizle hizmet veriyoruz."
            </p>
          </div>
        </div>
      </section>

      <ServiceCards />
      <LeadForm initialService="Daire İçi Tadilat" />
      <div className="relative z-10 bg-[#020617]">
        <DistrictList />
      </div>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
