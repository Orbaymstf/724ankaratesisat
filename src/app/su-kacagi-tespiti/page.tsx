import type { Metadata } from 'next';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Ankara Su Kaçağı Tespiti | Kırmadan Cihazla Su Kaçağı Bulma',
  description: 'Ankara kırmadan su kaçağı tespiti servisi. Kameralı ve akustik dinleme cihazları ile noktasal su sızıntısı bulma. 7/24 acil tesisatçı, 30 dk adrese varış.',
  alternates: {
    canonical: 'https://724ankaratesisat.com/su-kacagi-tespiti',
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Su Kaçağı Tespiti",
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
  "description": "Ankara genelinde modern cihazlarla kırmadan su kaçağı tespiti hizmeti sunuyoruz. Akustik dinleme ve termal kamera ile noktasal tespit.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "TRY",
    "availability": "https://schema.org/InStock"
  }
};

export default function SuKacagiPage() {
  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero />
      
      {/* Detaylı SEO Bölümü */}
      <section className="py-16 px-4 md:px-8 bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Kırmadan Cihazla Su Kaçağı Tespiti Ankara
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Evinizde veya iş yerinizde gizli bir su sızıntısı mı var? Alt komşunuz tavanından su damladığını mı söylüyor? Artık fayansları kırmanıza, parkeleri sökmenize gerek yok!
            </p>
          </div>

          <div className="grid grid-cols-1 md:gap-12 gap-8 py-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold border-l-4 border-red-600 pl-4">Kameralı ve Akustik Dinleme ile Noktasal Tespit</h2>
              <p className="text-slate-600 leading-relaxed italic border-l-4 border-red-100 pl-4">
                7/24 Ankara Tesisat olarak, en gelişmiş Avrupa menşeili cihazları kullanıyoruz. Akustik dinleme cihazlarımız, duvar arkasındaki borularda oluşan sızıntı sesini milimetrik olarak duymamıza olanak sağlar. Termal kameralarımız ise sıcak su tesisatındaki sızıntıları anında renk farkıyla gösterir.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Neden Bizi Tercih Etmelisiniz?</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-sm">Hiçbir yeri kırmadan tespit garantisi</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-sm">En geç 30 dakikada Ankara içi servis</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-sm">Tüm tespit ve onarımlarda garanti</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-4 rounded-xl">
                <span className="text-red-600 font-bold">✓</span>
                <span className="text-sm">Ekonomik fiyat politikası</span>
              </li>
            </ul>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
            <h4 className="text-xl font-bold text-slate-900 border-l-4 border-red-600 pl-4 mb-4">Gözle Görülmeyen Kaçaklara Son!</h4>
            <p>
              Su faturanız her zamankinden yüksek geliyorsa, parkelerinizde kabarma varsa veya duvarlarda rutubet kokusu alıyorsanız gizli bir kaçak olabilir. Uzman ekibimiz adresinize gelerek tüm tesisatı komple tarar. Kaçağın yerini bulduktan sonra size onarım seçeneklerini sunarız. Onayınız dahilinde sadece kaçağın olduğu tek bir seramiği kaldırarak arızayı gideriyoruz.
            </p>
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
