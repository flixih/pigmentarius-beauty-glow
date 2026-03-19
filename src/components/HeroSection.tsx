import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MagneticButton from "./MagneticButton";
import ScrambleText from "./ScrambleText";

const PHOTOS = [
  "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3765147/pexels-photo-3765147.jpeg?auto=compress&cs=tinysrgb&w=900",
];

// Cursor glow (desktop)
export const CursorGlow = () => null; // replaced by CustomCursor

// Mobile carousel
const MobileCarousel = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % PHOTOS.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full rounded overflow-hidden mt-10" style={{ aspectRatio: "16/9" }}>
      {PHOTOS.map((src, i) => (
        <img key={i} src={src} alt="" draggable={false}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.04)" }} />
      ))}
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {PHOTOS.map((_, i) => (
          <div key={i} className="h-1 rounded-full transition-all duration-300 cursor-pointer"
            style={{ width: i === active ? "20px" : "6px", background: i === active ? "white" : "rgba(255,255,255,0.3)" }}
            onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 overflow-hidden" style={{ background: "#050505" }}>

      {/* Subtle grain texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      {/* Content grid */}
      <div className={`relative z-10 max-w-5xl transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>

        {/* Location tag — Unseen style */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="w-6 h-px bg-white/30" />
          <span className="text-white/30 text-xs tracking-[0.4em] uppercase">Añasco, Puerto Rico</span>
        </div>

        {/* Giant headline */}
        <div className="overflow-hidden mb-2">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-none text-white"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.9 }}>
            <ScrambleText text={lang === "es" ? "Cabello" : "Beautiful"} delay={300} trigger={lang === "es"} />
          </h1>
        </div>
        <div className="overflow-hidden mb-2">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-none"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.9, WebkitTextStroke: "1px rgba(255,255,255,0.2)", color: "transparent" }}>
            <ScrambleText text={lang === "es" ? "& Cejas" : "& Brows"} delay={500} trigger={lang === "es"} />
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-none text-white"
            style={{ letterSpacing: "-0.03em", lineHeight: 0.9 }}>
            <ScrambleText text={lang === "es" ? "Perfectos" : "Perfected"} delay={700} trigger={lang === "es"} />
          </h1>
        </div>

        {/* Bottom row — description + CTA */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12 md:mt-16 pt-8 border-t border-white/8">
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm">
            {t("hero_desc")}
          </p>

          <div className="flex items-center gap-6">
            <MagneticButton href="#contacto"
              className="inline-flex items-center gap-3 text-white text-sm font-semibold tracking-wide group link-underline">
              {t("hero_cta")}
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors">
                <ArrowRight size={14} />
              </span>
            </MagneticButton>

            <div className="text-white/20 text-xs tracking-[0.3em] uppercase hidden md:flex flex-col gap-1">
              <span>4.8★ Google</span>
              <span>211+ Reviews</span>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <MobileCarousel />
        </div>

        {/* Desktop: floating image pair */}
        <div className="hidden md:grid grid-cols-2 gap-4 mt-12 max-w-lg ml-auto">
          {PHOTOS.slice(0, 2).map((src, i) => (
            <div key={i} className="overflow-hidden rounded animate-float" style={{ animationDelay: `${i * 1.2}s`, aspectRatio: "3/4" }}>
              <img src={src} alt="" className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transition-transform" draggable={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3 text-white/20">
        <div className="w-px h-12 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-white/60 animate-[line-reveal_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
        </div>
        <span className="text-xs tracking-[0.3em] uppercase" style={{ writingMode: "vertical-lr" }}>
          {lang === "es" ? "Desplaza" : "Scroll"}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
