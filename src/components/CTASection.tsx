import { Phone, Calendar, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REAL_3 = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const CTASection = () => {
  const { t } = useLanguage();
  return (
    <section className="relative bg-foreground overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-48 lg:h-auto order-2 lg:order-1">
          <img src={REAL_3} alt="Pigmentarius result" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/60 hidden lg:block" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-16 py-14 md:py-20 flex flex-col justify-center order-1 lg:order-2">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3 relative z-10">{t("cta_label")}</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-cream mb-5 leading-tight relative z-10">
            {t("cta_title1")}{" "}<span className="italic text-primary">{t("cta_title2")}</span>?
          </h2>
          <p className="text-cream/70 text-sm md:text-base max-w-sm mb-8 leading-relaxed relative z-10">{t("cta_desc")}</p>
          <div className="flex flex-col sm:flex-row gap-3 relative z-10">
            <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-300 shadow-glow">
              <Calendar size={15} />{t("cta_book")}
            </a>
            <a href="tel:7878261684" className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors duration-300">
              <Phone size={15} />(787) 826-1684
            </a>
          </div>
          <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-cream/40 hover:text-gold-light transition-colors text-xs relative z-10 w-fit">
            <Instagram size={13} />{t("cta_follow")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
