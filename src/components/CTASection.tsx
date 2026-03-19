import { Calendar, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: "#070707" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.12) 0%, transparent 70%)" }} />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-8">
          {t("cta_label")}
        </div>
        <h2 className="font-serif text-4xl md:text-7xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
          {t("cta_title1")}{" "}
          <span className="italic" style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t("cta_title2")}
          </span>?
        </h2>
        <p className="text-white/40 text-lg max-w-md mx-auto mb-10">{t("cta_desc")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white group transition-all duration-300"
            style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 30px hsl(330 85% 60% / 0.4)" }}>
            <Calendar size={15} />{t("cta_book")}
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:7878261684"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300">
            <Phone size={15} />(787) 826-1684
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
