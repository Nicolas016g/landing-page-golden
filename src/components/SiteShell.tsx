import { BackToTop } from "./extras/BackToTop";
import { StickyCTA } from "./extras/StickyCTA";
import { WhatsAppButton } from "./extras/WhatsAppButton";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { CTABanner } from "./sections/CTABanner";
import { FeaturesSection } from "./sections/FeaturesSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { MarketSection } from "./sections/MarketSection";
import { PricingSection } from "./sections/PricingSection";
import { TourSection } from "./sections/TourSection";

export function SiteShell() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MarketSection />
        <PricingSection />
        <TourSection />
        <CTABanner />
        <BenefitsSection />
        <FeaturesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <StickyCTA />
    </>
  );
}
