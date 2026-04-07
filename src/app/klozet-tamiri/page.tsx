import type { Metadata } from 'next';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ankara Klozet Tamiri & Gömme Rezervuar Servisi | 7/24 Acil',
  description: 'Ankara klozet tamiri, sifon değişimi ve gömme rezervuar onarımı. Geberit, Siamp, Kale gibi tüm markalarda garantili parça değişimi. 30 dakikada servis.',
  alternates: {
    canonical: 'https://724ankaratesisat.com/klozet-tamiri',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Klozet Tamiri ve Gömme Rezervuar Servisi",
  "serviceType": "Plumbing",
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
  "description": "Ankara genelinde her marka klozet tamiri, gömme rezervuar onarımı ve iç takım değişimi hizmeti sunuyoruz.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
};

export default function KlozetTamiriPage() {
  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero h1="Ankara Klozet & Gömme Rezervuar Tamiri" />
      
      <section className="py-16 px-4 md:px-8 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ankara Klozet Tamiri & Sifon Onarımı
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Klozetiniz su mu kaçırıyor? Sifonunuz basmıyor mu? Ya da gömme rezervuarınızda arıza mı var? Uzman ekibimizle her marka ve model klozet sorununa yerinde, garantili çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">Gömme Rezervuar Servisi</h3>
              <p className="text-slate-600 leading-relaxed">
                Geberit, Siamp, Kale, Grohe ve Visam gibi popüler markaların gömme rezervuar sistemlerinde uzmanız. Duvarı kırmadan, sadece panel üzerinden müdahale ederek iç takım değişimini ve ayarlarını yapıyoruz.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">İç Takım Değişimi</h3>
              <p className="text-slate-600 leading-relaxed">
                Klozetin sürekli su kaçırması hem faturanızı artırır hem de can sıkar. Kaliteli yedek parçalarımızla iç takım ve şamandıra değişimini 1 yıl garantili olarak gerçekleştiriyoruz.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="text-xl font-bold mb-4">Hizmet Kapsamımız:</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2">✓ Asma Klozet Montajı</li>
              <li className="flex items-center gap-2">✓ Gömme Rezervuar Tamiri</li>
              <li className="flex items-center gap-2">✓ Sifon & Basma Butonu Değişimi</li>
              <li className="flex items-center gap-2">✓ Taharet Musluğu Onarımı</li>
              <li className="flex items-center gap-2">✓ Klozet Flex Boru Değişimi</li>
              <li className="flex items-center gap-2">✓ Sızdırmazlık Silikonu Uygulaması</li>
            </ul>
          </div>
        </div>
      </section>

      <ServiceCards />
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
