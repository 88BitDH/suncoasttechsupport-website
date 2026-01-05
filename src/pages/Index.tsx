import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ProblemSection from "@/components/ProblemSection";
import ServicePackages from "@/components/ServicePackages";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import UrgencyCTA from "@/components/UrgencyCTA";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <ProblemSection />
        <ServicePackages />
        <Benefits />
        <Testimonials />
        <UrgencyCTA />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
