import { Droplets, PenTool, Eye, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

// Pexels free commercial photos — each one matched to its exact service
const IMG = {
  // Keratin: woman with glossy, perfectly straight treated hair
  keratina: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
  // Microblading: beautician applying pigment to eyebrow close-up
  microblading: "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=600",
  // Brow design: perfectly shaped eyebrows close-up
  cejas: "https://images.pexels.com/photos/3765147/pexels-photo-3765147.jpeg?auto=compress&cs=tinysrgb&w=600",
  // Laser: laser device being applied to skin
  laser: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      icon: Droplets,
      photo: IMG.keratina,
      fallback: "#8B6F5E",
      title: { es: "Keratina & Botox Capilar", en: "Keratin & Hair Botox" },
      desc: { es: "Transforma tu cabello con control total del frizz. Resultados sedosos que duran meses.", en: "Transform your hair with total frizz control. Silky results that last months." },
      price: "",
      tag: { es: "Más Solicitado", en: "Most Requested" },
    },
    {
      icon: PenTool,
      photo: IMG.microblading,
      fallback: "#C9A96E",
      title: { es: "Microblading", en: "Microblading" },
      desc: { es: "Cejas perfectas diseñadas a medida. Trazos ultra finos que duran 12–18 meses.", en: "Perfect brows designed just for you. Ultra-fine strokes lasting 12–18 months." },
      price: "",
      tag: { es: "Semi-Permanente", en: "Semi-Permanent" },
    },
    {
      icon: Eye,
      photo: IMG.cejas,
      fallback: "#D4A8A0",
      title: { es: "Diseño de Cejas", en: "Brow Design" },
      desc: { es: "Diseño experto que enmarca tu rostro y realza tu belleza natural.", en: "Expert design that frames your face and enhances your natural beauty." },
      price: "",
      tag: { es: "Favorito", en: "Fan Favorite" },
    },
    {
      icon: Zap,
      photo: IMG.laser,
      fallback: "#5A8A9F",
      title: { es: "Depilación Láser", en: "Laser Hair Removal" },
      desc: { es: "Piel suave y libre de vello para siempre. Tecnología profesional para todo tipo de piel.", en: "Smooth, hair-free skin permanently. Professional technology for all skin types." },
      price: "",
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

        {/* 2-col grid on ALL screen sizes */}
        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {services.map((s) => (
            <div key={s.title.es} className="group bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 flex flex-col">
              <div className="overflow-hidden aspect-[4/3] relative" style={{ backgroundColor: s.fallback }}>
                <img
                  src={s.photo}
                  alt={s.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <div className="p-3 md:p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <s.icon size={14} />
                    </div>
                    <h3 className="font-serif text-xs md:text-base font-semibold text-foreground leading-tight">{s.title[lang]}</h3>
                  </div>
                  <span className="inline-block text-xs bg-accent text-primary px-2 py-0.5 rounded-full font-semibold mb-2">{s.tag[lang]}</span>
                  <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{s.desc[lang]}</p>
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
                  
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
