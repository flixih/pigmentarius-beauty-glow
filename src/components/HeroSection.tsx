import { Star, ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=900";
const REAL_2 = "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=900";
const REAL_3 = "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=900";

const HeroSection = () => {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16">

      {/* Background glow orbs — Huly style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.12) 0%, transparent 70%)" }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, hsl(40 80% 60% / 0.08) 0%, transparent 70%)", animationDelay: "1.5s" }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full animate-pulse-glow" style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.08) 0%, transparent 70%)", animationDelay: "3s" }} />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
          {[...Array(5)].map((_, i) => <Star key={i} size={11} className="fill-[hsl(330_85%_60%)] text-[hsl(330_85%_60%)]" />)}
          <span className="text-white/70 text-xs font-medium tracking-wider">4.8 · 211+ {t("hero_stat2")}</span>
        </div>

        {/* Main headline — Huly-style gradient */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="text-white">{t("hero_title1")}</span>
          <br />
          <span style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t("hero_title2")}
          </span>
          <br />
          <span className="text-white/80 text-3xl md:text-4xl lg:text-5xl font-normal italic">{t("hero_title3")}</span>
        </h1>

        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {t("hero_desc")}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <a href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 group"
            style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 30px hsl(330 85% 60% / 0.4)" }}>
            {t("hero_cta")}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:7878261684"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white/70 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
            <Phone size={14} />
            (787) 826-1684
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-16 pt-10 border-t border-white/8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "4.8★", label: t("hero_stat1") },
            { value: "211+", label: t("hero_stat2") },
            { value: "20+", label: t("hero_stat3") },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl md:text-3xl font-bold" style={{ background: "linear-gradient(135deg, #fff 0%, hsl(330 85% 70%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.value}</p>
              <p className="text-white/40 text-xs tracking-widest uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating image row — Huly-style preview cards */}
      <div className="relative z-10 mt-16 w-full max-w-4xl mx-auto animate-fade-in-up hidden md:flex gap-4 justify-center" style={{ animationDelay: "0.5s" }}>
        {[REAL_1, REAL_2, REAL_3].map((src, i) => (
          <div key={i} className="flex-1 max-w-xs rounded-2xl overflow-hidden border border-white/8 shadow-2xl animate-float" style={{ animationDelay: `${i * 0.8}s`, aspectRatio: "4/3" }}>
            <img src={src} alt="Pigmentarius" className="w-full h-full object-cover opacity-80" loading="eager" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
