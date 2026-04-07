import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { districts } from '@/lib/districts';
import { services } from '@/lib/services';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';
import { getPossessiveName } from '@/lib/districts';

type Props = {
  params: Promise<{ slug: string; serviceSlug: string }>;
};

export async function generateStaticParams() {
  const params: { slug: string; serviceSlug: string }[] = [];
  
  districts.forEach((district) => {
    services.forEach((service) => {
      params.push({
        slug: district.slug,
        serviceSlug: service.slug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, serviceSlug } = await params;
  
  const district = districts.find((d) => d.slug === slug);
  const service = services.find((s) => s.slug === serviceSlug);
  
  if (!district || !service) {
    return {
      title: 'Bulunamadı | 7/24 Ankara Tesisat',
    };
  }

  const title = `${district.name} ${service.title} - Kırmadan Cihazla Tespit`;
  const description = `${district.name} bölgesinde 7/24 profesyonel kırmadan ${service.title.toLowerCase()} hizmeti. %100 garantili ve ekonomik çözümler. 30 dakikada kapınızdayız.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://724ankaratesisat.com/${slug}/${serviceSlug}`,
    }
  };
}

export default async function DistrictServicePage({ params }: Props) {
  const { slug, serviceSlug } = await params;
  
  const district = districts.find((d) => d.slug === slug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!district || !service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${district.name} ${service.title}`,
    "serviceType": "Plumbing",
    "provider": {
      "@type": "PlumbingService",
      "name": "7/24 Ankara Tesisatçı",
      "telephone": "+905368440799",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": district.name,
        "addressRegion": "Ankara",
        "addressCountry": "TR"
      }
    },
    "description": `${district.name} bölgesinde uzman ekiplerimizle kırmadan ${service.title.toLowerCase()} hizmeti veriyoruz. 7/24 acil müdahale.`
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://724ankaratesisat.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${district.name} Tesisatçı`,
        "item": `https://724ankaratesisat.com/${district.slug}-tesisatci`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://724ankaratesisat.com/${slug}/${serviceSlug}`
      }
    ]
  };

  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero 
        districtName={district.name} 
        h1={`${district.name} ${service.title} & Acil Servis`} 
      />
      
      {/* Targeted SEO Content Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {district.name} {service.title} Hizmetleri
              </h2>
              <div className="w-20 h-2 bg-primary rounded-full" />
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                {getPossessiveName(district.name)} her mahallesine 30 dakikada ulaşan mobil ekiplerimizle, profesyonel <strong>{service.title.toLowerCase()}</strong> çözümleri sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
              <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">7/24 Acil Destek</h3>
                <p className="text-slate-600 leading-relaxed">
                  Günün her saatinde bizi arayabilirsiniz. Özellikle {service.title.toLowerCase()} gibi beklemez arızalarda, en yakın ekibimizi hemen adresinize yönlendiriyoruz.
                </p>
              </div>
              <div className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900">Teknolojik Ekipman</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.slug === 'su-kacagi-tespiti' ? 'Kameralı ve akustik dinleme cihazları' : 'Robot makineler ve pimaş görüntüleme sistemleri'} ile kırmadan dökmeden kesin çözüm üretiyoruz.
                </p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
              <h4 className="text-2xl font-bold text-slate-900">Profesyonel Yaklaşım, %100 Memnuniyet</h4>
              <p>
                {district.name} sakinleri için yıllardır süregelen tecrübemizle, sıhhi tesisat arızalarını dert olmaktan çıkarıyoruz. 
                {service.description}
              </p>
              <p>
                Evinizin konforunu bozmadan, en az kırım ve en yüksek verimle çalışıyoruz. İster gece yarısı ister sabahın ilk ışıklarında, {getPossessiveName(district.name)} en güvenilir tesisatçısı yanınızda.
              </p>
            </div>
            
            <div className="mt-12 p-8 bg-red-600 rounded-[2rem] text-white text-center space-y-6 shadow-2xl shadow-red-600/20">
              <h3 className="text-3xl font-black italic">HEMEN ARA, 30 DAKİKADA GELELİM!</h3>
              <div className="text-4xl md:text-6xl font-black tracking-tighter">0536 844 07 99</div>
              <p className="font-bold opacity-90">{district.name} ve tüm Ankara geneli servisimiz vardır.</p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCards districtSlug={district.slug} />
      <div className="relative z-10 bg-[#020617]">
        <DistrictList />
      </div>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </main>
  );
}
