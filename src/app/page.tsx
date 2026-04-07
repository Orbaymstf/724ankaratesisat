import EmergencyHero from "@/components/EmergencyHero";
import ServiceCards from "@/components/ServiceCards";
import SeoContent from "@/components/SeoContent";
import LeadForm from "@/components/LeadForm";
import FaqSection from "@/components/FaqSection";
import DistrictList from "@/components/DistrictList";
import StickyCallButton from "@/components/StickyCallButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-grow">
      <EmergencyHero h1="Ankara Tesisatçı & 7/24 Acil Su Tesisatı" />
      <ServiceCards />
      <SeoContent />
      <LeadForm />
      <FaqSection />
      <DistrictList />
      <Footer />
      <StickyCallButton />
    </main>
  );
}
