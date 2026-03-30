import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBg from "@/assets/pg-01.webp";
import heroRight from "@/assets/pg-03.webp";

export const CursorGlow = () => null;

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--cream)" }}>

      {/* Left — content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center min-h-screen pt-20 md:pt-0">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10" style={{ background: "var(--pink)" }} />
            <span className="text-xs tracking-[0.35em] uppercase font-medium" style={{ color: "var(--ink-light)" }}>
              Añasco, Puerto Rico · 4.8★ Google
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif mb-6 leading-none"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-0.02em", color: "var(--ink)", fontWeight: 300 }}>
            {lang === "es" ? (
              <>Cabello & Cejas<br /><em style={{ fontStyle: "italic", color: "var(--pink)" }}>Perfectas</em></>
            ) : (
              <>Perfect Hair<br /><em style={{ fontStyle: "italic", color: "var(--pink)" }}>& Brows</em></>
            )}
          </h1>

          <p className="text-base mb-10 max-w-md leading-relaxed" style={{ color: "var(--ink-mid)" }}>
            {lang === "es"
              ? "Especialistas en coloración, microblading, maquillaje permanente y tratamientos capilares. Ubicados en Plaza del Valle Mall, Añasco."
              : "Specialists in color, microblading, permanent makeup and hair treatments. Located at Plaza del Valle Mall, Añasco."}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{ background: "var(--pink)", letterSpacing: "0.05em" }}>
              {lang === "es" ? "Reservar Cita" : "Book Appointment"}
              <ArrowRight size={16} />
            </a>
            <a href="#galeria"
              className="inline-flex items-center gap-2 text-sm font-medium link-hover"
              style={{ color: "var(--ink-mid)" }}>
              {lang === "es" ? "Ver Trabajos" : "View Our Work"}
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-14 pt-10" style={{ borderTop: "1px solid var(--border)" }}>
            {[
              { val: "4.8★", lbl: lang === "es" ? "Rating Google" : "Google Rating" },
              { val: "211+", lbl: lang === "es" ? "Reseñas" : "Reviews" },
              { val: "20+", lbl: lang === "es" ? "Años" : "Years" },
            ].map(s => (
              <div key={s.val}>
                <p className="font-serif text-2xl font-semibold" style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}>{s.val}</p>
                <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "var(--ink-light)" }}>{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photos */}
        <div className={`hidden md:block relative transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ height: "80vh" }}>
          {/* Main large photo */}
          <div className="absolute top-0 right-0 overflow-hidden rounded-2xl shadow-2xl"
            style={{ width: "72%", height: "65%", top: "5%" }}>
            <img src={heroBg} alt="Salon result" className="w-full h-full object-cover animate-float" draggable={false} />
          </div>
          {/* Secondary smaller photo */}
          <div className="absolute overflow-hidden rounded-2xl shadow-xl animate-float delay-1"
            style={{ width: "52%", height: "48%", bottom: "2%", left: "0%", border: "4px solid var(--cream)" }}>
            <img src={heroRight} alt="Salon work" className="w-full h-full object-cover" draggable={false} />
          </div>
          {/* Decorative pill */}
          <div className="absolute rounded-2xl px-5 py-3 shadow-lg"
            style={{ background: "var(--white)", top: "58%", right: "4%", minWidth: "160px", border: "1px solid var(--border)" }}>
            <p className="text-xs font-semibold" style={{ color: "var(--ink)" }}>Plaza del Valle Mall</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--ink-light)" }}>Añasco, Puerto Rico</p>
          </div>
        </div>

        {/* Mobile hero photo */}
        <div className="md:hidden overflow-hidden rounded-2xl shadow-lg" style={{ height: "55vw" }}>
          <img src={heroBg} alt="Salon result" className="w-full h-full object-cover object-top" draggable={false} />
        </div>
      </div>

      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none hidden md:block"
        style={{ background: "linear-gradient(135deg, transparent 40%, #F2EBE4 100%)", zIndex: 0 }} />
    </section>
  );
};

export default HeroSection;
