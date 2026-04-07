import type { Metadata } from 'next';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Ankara Petek Temizliği & Kombi Bakımı | İlaçlı Makineli Temizlik',
  description: 'Ankara makineli petek temizliği servisi. %30 yakıt tasarrufu sağlayın. İlaçlı petek temizleme, kombi tesisat bakımı ve reglaj ayarı. 2 yıl garantili.',
  alternates: {
    canonical: 'https://724ankaratesisat.com/petek-temizligi',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Makineli Petek Temizliği",
  "serviceType": "Heating Service",
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
  "description": "Ankara genelinde profesyonel makineler ve özel kimyasallar ile petek temizliği hizmeti sunuyoruz. Isınma sorunlarına kesin çözüm.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
};

export default function PetekTemizligiPage() {
  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero h1="Ankara Makineli Petek Temizliği & Bakımı" />
      
      <section className="py-16 px-4 md:px-8 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Ankara Petek Temizliği & Isınma Garantisi
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Peteklerinizin altı soğuk mu kalıyor? Kombiniz yüksek ayarda olmasına rağmen ev ısınmıyor mu? Makineli ve ilaçlı petek temizliği ile tesisatınızı ilk günkü verimine kavuşturuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-yellow-600 pl-4">İlaçlı & Makineli Temizlik</h3>
              <p className="text-slate-600 leading-relaxed">
                Tesisat içindeki çamur, kireç ve pas tabakasını özel kimyasallarımızla çözüyoruz. Yüksek basınçlı makinelerimizle tüm pisliği sistemden dışarı atıyor, peteklerinizin her noktasının ısınmasını sağlıyoruz.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold border-l-4 border-yellow-600 pl-4">%30 Yakıt Tasarrufu</h3>
              <p className="text-slate-600 leading-relaxed">
                Temiz bir tesisat, kombinin daha az efor sarf ederek daha çok ısıtması demektir. Petek temizliği sonrası doğalgaz faturalarınızda hissedilir bir düşüş ve konforlu bir ısınma garanti ediyoruz.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h4 className="text-xl font-bold mb-4">Adım Adım Petek Temizliği:</h4>
            <ol className="list-decimal list-inside space-y-3 text-slate-700">
              <li>Tesisatın genel kontrolü ve kaçak testi yapılır.</li>
              <li>Makineler banyodaki havlupan üzerinden sisteme bağlanır.</li>
              <li>Özel çözücü kimyasallar sisteme verilerek kireçler çözülür.</li>
              <li>Basınçlı su ile tüm çamur ve pas vakumlanarak tahliye edilir.</li>
              <li>Kombi filtresi temizlenir ve sisteme koruyucu ilaç eklenir.</li>
              <li>Hava alma ve reglaj ayarları yapılarak sistem teslim edilir.</li>
            </ol>
          </div>
        </div>
      </section>

      <ServiceCards />
      <LeadForm initialService="Petek Temizliği" />
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
