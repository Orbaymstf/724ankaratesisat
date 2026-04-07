import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { districts } from '@/lib/districts';
import EmergencyHero from '@/components/EmergencyHero';
import ServiceCards from '@/components/ServiceCards';
import DistrictList from '@/components/DistrictList';
import StickyCallButton from '@/components/StickyCallButton';
import Footer from '@/components/Footer';
import ServiceContentSlider from '@/components/ServiceContentSlider';
import LeadForm from '@/components/LeadForm';

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
    title: `${district.name} Tesisatçı - Ankara 7/24 Acil Su Tesisatçısı`,
    description: `${district.name} bölgesinde 7/24 kırmadan su kaçağı tespiti, robotla tıkanıklık açma ve acil su tesisatı tamiri. ${district.name} en yakın tesisatçı ekibi 30 dakikada adrese varır.`,
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
    "@type": "ProfessionalService",
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
        "item": `https://724ankaratesisat.com/${slug}`
      }
    ]
  };

  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero 
        districtName={district.name} 
        h1={`${district.name} Tesisatçı & Acil Su Tesisatçısı`} 
      />
      <ServiceCards districtSlug={district.slug} />
      <div className="relative z-10 bg-[#020617]">
        <DistrictList />
      </div>
      
      {/* Dynamic SEO Content Slider replacing the static block */}
      <ServiceContentSlider districtName={district.name} />

      <LeadForm initialDistrict={district.name} />

      <Footer />
      
      {/* Dynamic Structured Data for Local SEO */}
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
