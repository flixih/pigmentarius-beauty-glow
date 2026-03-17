import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import LaserSection from "@/components/LaserSection";
import MicrobladingSection from "@/components/MicrobladingSection";
import PermanentMakeupSection from "@/components/PermanentMakeupSection";
import LuxuryHairSection from "@/components/LuxuryHairSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ShopSection from "@/components/ShopSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <LaserSection />
        <MicrobladingSection />
        <PermanentMakeupSection />
        <LuxuryHairSection />
        <WhyChooseUs />
        <GallerySection />
        <ReviewsSection />
        <ShopSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingBookButton />
    </>
  );
};

export default Index;
