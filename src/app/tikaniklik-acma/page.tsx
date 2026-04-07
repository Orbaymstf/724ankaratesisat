import type { Metadata } from 'next';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata: Metadata = {
  title: 'Ankara Tıkanıklık Açma | Robotla Kırmadan Gider Açma Servisi',
  description: 'Ankara tıkalı tuvalet, lavabo ve pimaş açma servisi. Robot makinelerimizle hiçbir yeri kırmadan tıkanıklığı %100 garantili açıyoruz. 7/24 acil servis.',
  alternates: {
    canonical: 'https://724ankaratesisat.com/tikaniklik-acma',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Tıkanıklık Açma",
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
  "description": "Ankara genelinde robot cihazlarla kırmadan tuvalet ve gider tıkanıklığı açma hizmeti. Kırmadan dökmeden profesyonel kanal açma.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
};

export default function TikaniklikAcmaPage() {
  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero h1="Ankara Tıkanıklık Açma & Gider Temizliği" />
      
      {/* Detaylı SEO Bölümü */}
      <section className="py-16 px-4 md:px-8 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              Robotla Kırmadan Tıkanıklık Açma Ankara
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium capitalize">
              Tuvalet mi tıkandı? Mutfak lavabosundan su gitmiyor mu? Hemen bizi arayın, robot makinelerimizle hiçbir yeri kırmadan tıkanıklığı açalım!
            </p>
          </div>

          <div className="grid grid-cols-1 md:gap-12 gap-8 py-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-l-4 border-orange-500 pl-4">Robot Cihazlarla Kırmadan Pimaş Açma</h2>
              <p className="text-slate-600 leading-relaxed italic border-l-4 border-orange-100 pl-4">
                7/24 Ankara Tesisat olarak, pimaş borularınızdaki tıkanıklıkları son teknoloji robot cihazlarla gideriyoruz. Boru içine gönderilen özel yaylı sistemler, tıkanıklığa sebep olan bez, yağlanma veya kireçlenmeyi parçalayarak kanalizasyona gönderir. Evi kirletmeden, hiçbir şey kırmadan sorununuza kökten çözüm sağlıyoruz.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold lowercase">Hangi Tıkanıklıkları Açıyoruz?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-sm">Tıkalı Tuvalet & Klozet Açma</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-sm">Banyo ve Balkon Gideri Açma</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-sm">Mutfak Lavabosu Tıkanıklığı</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-orange-600 font-bold">✓</span>
                <span className="text-sm">Logar ve Ana Kanal Açma</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <h4 className="text-xl font-bold text-slate-900 border-l-4 border-orange-500 pl-4 mb-4 uppercase">Kalıcı Çözüm, %100 Garanti!</h4>
            <p>
              Tıkanıklık açıldıktan sonra eğer gerek görürsek kameralı pimaş görüntüleme sistemimizle boru içini kontrol ediyoruz. Borularda çökme veya ters eğim gibi yapısal sorunlar varsa size raporluyoruz. Amacımız sadece tıkanıklığı anlık açmak değil, sorunun tekrar etmemesini sağlamaktır. 7/24 acil ekibimiz bir telefon kadar yakınınızda!
            </p>
          </div>
        </div>
      </section>

      <ServiceCards />
      <LeadForm initialService="Tıkanıklık Açma" />
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
