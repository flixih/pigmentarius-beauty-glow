import { Star, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRef, useEffect, useState } from "react";

const PHOTOS = [
  "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3765147/pexels-photo-3765147.jpeg?auto=compress&cs=tinysrgb&w=800",
];

// Cursor glow (desktop only)
export const CursorGlow = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div ref={dotRef} className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 transition-transform duration-300 ease-out hidden md:block"
      style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.06) 0%, transparent 70%)" }} />
  );
};

// Mobile: auto-rotating photo carousel
const MobileCarousel = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % PHOTOS.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 mt-8">
      {PHOTOS.map((src, i) => (
        <img key={i} src={src} alt="" className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.05)" }} />
      ))}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }} />
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {PHOTOS.map((_, i) => (
          <div key={i} className="rounded-full transition-all duration-300" onClick={() => setActive(i)}
            style={{ width: i === active ? "16px" : "6px", height: "6px", background: i === active ? "hsl(330 85% 65%)" : "rgba(255,255,255,0.3)" }} />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t } = useLanguage();

  const gradientText = {
    background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-12">

      {/* Glow orbs — visible on both mobile & desktop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.14) 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/4 w-48 md:w-80 h-48 md:h-80 rounded-full animate-pulse-glow"
          style={{ background: "radial-gradient(circle, hsl(40 80% 60% / 0.09) 0%, transparent 70%)", animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 md:mb-8 animate-fade-in-up">
          {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-[hsl(330_85%_60%)] text-[hsl(330_85%_60%)]" />)}
          <span className="text-white/70 text-xs font-medium tracking-wider">4.8 · 211+ {t("hero_stat2")}</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-white">{t("hero_title1")}</span>
          <br />
          <span style={gradientText}>{t("hero_title2")}</span>
          <br />
          <span className="text-white/70 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal italic">{t("hero_title3")}</span>
        </h1>

        <p className="text-white/50 text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {t("hero_desc")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group active:scale-95"
            style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 30px hsl(330 85% 60% / 0.4)" }}>
            {t("hero_cta")} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:7878261684"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/70 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 active:scale-95">
            <Phone size={14} />(787) 826-1684
          </a>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-8 md:gap-10 mt-10 md:mt-16 pt-8 border-t border-white/8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "4.8★", label: t("hero_stat1") },
            { value: "211+", label: t("hero_stat2") },
            { value: "20+",  label: t("hero_stat3") },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-xl md:text-3xl font-bold" style={gradientText}>{s.value}</p>
              <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Mobile: auto-rotating carousel of real photos */}
        <div className="md:hidden animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <MobileCarousel />
        </div>

        {/* Desktop: floating image cards */}
        <div className="hidden md:flex gap-4 justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          {PHOTOS.slice(0,3).map((src, i) => (
            <div key={i} className="flex-1 max-w-xs rounded-2xl overflow-hidden border border-white/8 shadow-2xl animate-float"
              style={{ animationDelay: `${i * 0.8}s`, aspectRatio: "4/3" }}>
              <img src={src} alt="Pigmentarius" className="w-full h-full object-cover opacity-80" loading="eager" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
