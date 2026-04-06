import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { districts } from '@/lib/districts';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return districts.map((district) => ({
    slug: `${district.slug}-tesisatci`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const baseSlug = slug.replace('-tesisatci', '');
  const district = districts.find((d) => d.slug === baseSlug);
  
  if (!district) {
    return {
      title: 'Bulunamadı | 7/24 Ankara Tesisat',
    };
  }

  return {
    title: `${district.name} Tesisat & Acil Tesisatçı | 30 Dk'da Su Kaçağı Bulma`,
    description: `${district.name} tesisat ve sıhhi tesisat işlerinizde kırmadan su kaçağı tespiti, robotla gider açma. En yakın acil ${district.name} tesisatçı ekibi garantili hizmet verir.`,
    alternates: {
      canonical: `https://724ankaratesisat.com/${slug}`,
    }
  };
}

export default async function DistrictPage({ params }: Props) {
  const { slug } = await params;
  const baseSlug = slug.replace('-tesisatci', '');
  const district = districts.find((d) => d.slug === baseSlug);

  if (!district) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": `${district.name} Acil Tesisatçı - 7/24 Tesisat Servisi`,
    "url": `https://724ankaratesisat.com/${slug}`,
    "telephone": "+905368440799",
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": district.name,
      "addressRegion": "Ankara",
      "addressCountry": "TR"
    },
    "description": `${district.name} bölgesinde 7/24 kırmadan cihazla su kaçağı tespiti, tıkanıklık açma ve sıhhi tesisat tamir hizmetleri. 30 dakikada adrese varış garantisi.`
  };

  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero districtName={district.name} />
      <ServiceCards />
      <div className="relative z-10 bg-[#020617]">
        <DistrictList />
      </div>
      
      {/* Dynamic SEO Context Block */}
      <section className="bg-slate-50 py-16 px-4 md:px-8 border-t border-slate-200">
        <div className="max-w-4xl mx-auto space-y-6 text-slate-700 text-sm md:text-base leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            {district.name} Tesisatçı & Su Kaçağı Tespiti
          </h2>
          <p>
            <strong>{district.name} tesisatçı</strong> ihtiyaçlarınızda, 7 gün 24 saat kesintisiz ve profesyonel destek sunuyoruz. Evinizde veya iş yerinizde aniden ortaya çıkan su patlamaları, alt kata su sızmaları veya gider tıkanıklıkları beklemez. Bölgeyi çok iyi bilen mobil araçlı ekiplerimizle, <strong>{district.name}</strong> ve çevresindeki tüm mahallelere en geç 30 dakika içerisinde ulaşıyoruz.
          </p>
          <p>
            Özellikle en büyük sorunlardan olan su kaçaklarında, eski usul "kırarak bulma" yöntemlerini çöpe atıyoruz. Gelişmiş akustik dinleme cihazlarımız ve yüksek çözünürlüklü termal kameralarımız sayesinde <strong>kırmadan su kaçağı bulma</strong> işlemini tek bir seramik bile kırmadan noktasal olarak gerçekleştiriyoruz. Eğer <strong>{district.name} tıkalı tuvalet açma</strong> veya pimaş tıkanıklığı gibi sorunlarınız varsa, robot helezon makinelerimizle borulara hiçbir zarar vermeden tıkanıklığı %100 garantili olarak söküp atıyoruz. Arızalara kalıcı çözümler bulmak ve acil servis talebinde bulunmak için iletişim hattımızdan bize dilediğiniz an ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <Footer />
      
      {/* Dynamic Structured Data for Local SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
