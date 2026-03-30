import { useEffect } from "react";
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

const Index = () => {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        (e.target as HTMLElement).style.opacity = "1";
        (e.target as HTMLElement).style.transform = "translateY(0)";
        obs.unobserve(e.target);
      }
    }), { threshold: 0.08 });
    els.forEach(el => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(30px)";
      (el as HTMLElement).style.transition = "opacity 0.8s ease, transform 0.8s ease";
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--cream)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <div data-reveal><ServicesSection /></div>
        <DragGallery />
        <div data-reveal><ReviewsSection /></div>
        <div data-reveal><FounderSection /></div>
        <div data-reveal><ShopSection /></div>
        <div data-reveal><ContactSection /></div>
      </main>
      <Footer />
      <FloatingBookButton />
    </div>
  );
};

export default Index;
