import { Droplets, PenTool, Eye, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_2 = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";
const REAL_3 = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      photo: REAL_1,
      title: { es: "Keratina & Botox Capilar", en: "Keratin & Hair Botox" },
      desc: { es: "Transforma tu cabello con control total del frizz. Resultados sedosos que duran meses.", en: "Transform your hair with total frizz control. Silky results that last months." },
      price: "Desde $120",
      tag: { es: "Más Solicitado", en: "Most Requested" },
    },
    {
      icon: PenTool,
      photo: REAL_3,
      title: { es: "Microblading", en: "Microblading" },
      desc: { es: "Cejas perfectas y naturales diseñadas a medida. Trazos ultra finos que duran 12–18 meses.", en: "Perfect, natural brows designed just for you. Ultra-fine strokes lasting 12–18 months." },
      price: "Desde $150",
      tag: { es: "Semi-Permanente", en: "Semi-Permanent" },
    },
    {
      icon: Eye,
      photo: REAL_3,
      title: { es: "Diseño de Cejas", en: "Brow Design" },
      desc: { es: "Diseño experto que enmarca tu rostro y realza tu belleza natural. Incluye depilación y definición.", en: "Expert design that frames your face and enhances your natural beauty. Includes waxing and shaping." },
      price: "Desde $30",
      tag: { es: "Favorito", en: "Fan Favorite" },
    },
    {
      icon: Zap,
      photo: REAL_1,
      title: { es: "Depilación Láser", en: "Laser Hair Removal" },
      desc: { es: "Piel suave y libre de vello para siempre. Tecnología profesional para todo tipo de piel.", en: "Smooth, hair-free skin permanently. Professional technology for all skin types." },
      price: "Consultar",
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
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold-dark transition-colors group whitespace-nowrap"
          >
            {lang === "es" ? "Ver todos los servicios" : "View all services"}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => (
            <div key={s.title.es} className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row">
              {/* Photo */}
              <div className="sm:w-36 md:w-44 flex-shrink-0 overflow-hidden">
                <img
                  src={s.photo}
                  alt={s.title[lang]}
                  className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <s.icon size={16} />
                      </div>
                      <h3 className="font-serif text-base md:text-lg font-semibold text-foreground">{s.title[lang]}</h3>
                    </div>
                    <span className="text-xs bg-accent text-primary px-2 py-0.5 rounded-full font-semibold whitespace-nowrap flex-shrink-0">{s.tag[lang]}</span>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{s.desc[lang]}</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
                  <span className="text-primary font-bold text-sm">{s.price}</span>
                  <a href="#contacto" className="text-xs font-semibold text-primary hover:text-gold-dark transition-colors">
                    {t("services_more")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full services link */}
        <div className="mt-8 text-center">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            {lang === "es" ? "Ver Lista Completa de Servicios" : "View Full Services List"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
