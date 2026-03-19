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
import AnimatedBackground from "@/components/AnimatedBackground";
import { CursorGlow } from "@/components/HeroSection";
import { useEffect } from "react";

// Scroll-reveal: watches elements and fades them in
const useScrollReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).style.opacity = "1";
          (e.target as HTMLElement).style.transform = "translateY(0)";
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(32px)";
      (el as HTMLElement).style.transition = "opacity 0.7s ease, transform 0.7s ease";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
};

const Index = () => {
  useScrollReveal();
  return (
    <div style={{ background: "#0a0a0a" }}>
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <MarqueeStrip />
        <div data-reveal><AboutSection /></div>
        <div data-reveal><ServicesSection /></div>
        <div data-reveal><LuxuryHairSection /></div>
        <div data-reveal><MicrobladingSection /></div>
        <div data-reveal><PermanentMakeupSection /></div>
        <div data-reveal><LaserSection /></div>
        <div data-reveal><WhyChooseUs /></div>
        <div data-reveal><GallerySection /></div>
        <div data-reveal><ReviewsSection /></div>
        <div data-reveal><ShopSection /></div>
        <div data-reveal><CTASection /></div>
        <div data-reveal><ContactSection /></div>
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;
