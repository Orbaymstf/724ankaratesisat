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

  return (
    <main className="bg-background min-h-screen">
      <StickyCallButton />
      <EmergencyHero districtName={district.name} />
      <ServiceCards />
      <div className="relative z-10 bg-[#020617]">
        <DistrictList />
      </div>
      <Footer />
    </main>
  );
}
