import { Star, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_2 = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative min-h-screen grid lg:grid-cols-2">
      {/* Left: Content */}
      <div className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-28 pb-12 bg-foreground z-10">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_left,_hsl(36_60%_70%)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 border border-gold-light/40 rounded-full px-3 py-1.5 mb-6 animate-fade-in-up">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-gold-light text-gold-light" />)}</div>
            <span className="text-gold-light text-xs font-medium tracking-wider">4.8 · 211+ {t("hero_stat2")}</span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {t("hero_title1")}{" "}
            <span className="text-gold-light italic">{t("hero_title2")}</span>{" "}
            {t("hero_title3")}
          </h1>

          <p className="text-cream/70 text-sm md:text-base leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {t("hero_desc")}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a href="#contacto" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow">
              {t("hero_cta")}
            </a>
            <a href="tel:7878261684" className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream/80 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-cream/10 transition-all duration-300">
              <Phone size={14} />
              (787) 826-1684
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-cream/10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "4.8★", label: t("hero_stat1") },
              { value: "211+", label: t("hero_stat2") },
              { value: "20+", label: t("hero_stat3") },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-xl md:text-2xl font-bold text-gold-light">{s.value}</p>
                <p className="text-xs text-cream/50 tracking-wide mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Real photos — hidden on mobile to avoid extra scroll */}
      <div className="hidden lg:grid grid-rows-2 h-screen sticky top-0">
        <div className="overflow-hidden">
          <img src={REAL_1} alt="Pigmentarius Hair Salon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="eager" />
        </div>
        <div className="overflow-hidden">
          <img src={REAL_2} alt="Pigmentarius transformación" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="eager" />
        </div>
        <div className="absolute bottom-8 left-0 -translate-x-1/3 bg-foreground border border-primary/30 rounded-2xl p-4 shadow-elevated text-center min-w-[100px]">
          <p className="font-serif text-3xl font-bold text-primary">4.8</p>
          <div className="flex justify-center my-1">{[...Array(5)].map((_, i) => <Star key={i} size={9} className="fill-primary text-primary" />)}</div>
          <p className="text-cream/50 text-xs">211+</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
