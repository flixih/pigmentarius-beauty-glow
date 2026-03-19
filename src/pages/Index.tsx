import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DragGallery from "@/components/DragGallery";
import ReviewsSection from "@/components/ReviewsSection";
import FounderSection from "@/components/FounderSection";
import ShopSection from "@/components/ShopSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { palette } from "@/lib/theme";

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
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(40px)";
      (el as HTMLElement).style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
};

const Index = () => {
  const { theme } = useTheme();
  const p = palette(theme);
  useScrollReveal();

  return (
    <div style={{ background: p.pageBg, minHeight: "100vh", transition: "background 0.4s ease, color 0.4s ease", color: p.textPrimary }}>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <div data-reveal><ReviewsSection /></div>
        <FounderSection />
        <div data-reveal><ServicesSection /></div>
        <DragGallery />
        <div data-reveal><ShopSection /></div>
        <div data-reveal><ContactSection /></div>
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;

