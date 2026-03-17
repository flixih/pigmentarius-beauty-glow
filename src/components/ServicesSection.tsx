import { Droplets, PenTool, Eye, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Free Unsplash photos — commercial use, no attribution required
const IMG = {
  keratina:    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  microblading:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  cejas:       "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
  laser:       "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
};

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      photo: IMG.keratina,
      title: { es: "Keratina & Botox Capilar", en: "Keratin & Hair Botox" },
      desc: { es: "Transforma tu cabello con control total del frizz. Resultados sedosos que duran meses.", en: "Transform your hair with total frizz control. Silky results that last months." },
      price: "Desde $79",
      tag: { es: "Más Solicitado", en: "Most Requested" },
    },
    {
      icon: PenTool,
      photo: IMG.microblading,
      title: { es: "Microblading", en: "Microblading" },
      desc: { es: "Cejas perfectas y naturales diseñadas a medida. Trazos ultra finos que duran 12–18 meses.", en: "Perfect, natural brows designed just for you. Ultra-fine strokes lasting 12–18 months." },
      price: "$370",
      tag: { es: "Semi-Permanente", en: "Semi-Permanent" },
    },
    {
      icon: Eye,
      photo: IMG.cejas,
      title: { es: "Diseño de Cejas", en: "Brow Design" },
      desc: { es: "Diseño experto que enmarca tu rostro y realza tu belleza natural.", en: "Expert design that frames your face and enhances your natural beauty." },
      price: "Desde $30",
      tag: { es: "Favorito", en: "Fan Favorite" },
    },
    {
      icon: Zap,
      photo: IMG.laser,
      title: { es: "Depilación Láser", en: "Laser Hair Removal" },
      desc: { es: "Piel suave y libre de vello para siempre. Tecnología profesional para todo tipo de piel.", en: "Smooth, hair-free skin permanently. Professional technology for all skin types." },
      price: "Desde $25",
      tag: { es: "Alta Demanda", en: "High Demand" },
    },
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t("services_label")}</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">
              {t("services_title1")} <span className="italic text-primary">{t("services_title2")}</span>
            </h2>
          </div>
          <Link to="/servicios" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold-dark transition-colors group whitespace-nowrap">
            {lang === "es" ? "Ver todos los servicios" : "View all services"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2-col on mobile, 2-col on desktop */}
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {services.map((s) => (
            <div key={s.title.es} className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 flex flex-col">
              {/* Photo */}
              <div className="overflow-hidden aspect-[4/3]">
                <img src={s.photo} alt={s.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              {/* Content */}
              <div className="p-3 md:p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <s.icon size={14} />
                      </div>
                      <h3 className="font-serif text-sm md:text-base font-semibold text-foreground leading-tight">{s.title[lang]}</h3>
                    </div>
                  </div>
                  <span className="inline-block text-xs bg-accent text-primary px-2 py-0.5 rounded-full font-semibold mb-2">{s.tag[lang]}</span>
                  <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{s.desc[lang]}</p>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
                  <span className="text-primary font-bold text-sm">{s.price}</span>
                  <a href="#contacto" className="text-xs font-semibold text-primary hover:text-gold-dark transition-colors">{t("services_more")}</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/servicios" className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
            {lang === "es" ? "Ver Lista Completa de Servicios" : "View Full Services List"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
