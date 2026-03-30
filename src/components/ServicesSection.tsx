import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import imgKeratina     from "@/assets/svc-keratina.webp";
import imgMicroblading from "@/assets/svc-microblading.webp";
import imgCejas        from "@/assets/svc-cejas.webp";
import imgLaser        from "@/assets/svc-laser.webp";

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      img: imgKeratina,
      title: { es: "Keratina & Botox Capilar", en: "Keratin & Hair Botox" },
      desc:  { es: "Control total del frizz. Resultados sedosos que duran meses.", en: "Total frizz control. Silky results that last months." },
      tag:   { es: "Más Solicitado", en: "Most Requested" },
    },
    {
      img: imgMicroblading,
      title: { es: "Microblading", en: "Microblading" },
      desc:  { es: "Cejas perfectas diseñadas a medida. Duran 12–18 meses.", en: "Perfect brows designed just for you. Last 12–18 months." },
      tag:   { es: "Semi-Permanente", en: "Semi-Permanent" },
    },
    {
      img: imgCejas,
      title: { es: "Diseño de Cejas", en: "Brow Design" },
      desc:  { es: "Diseño experto que enmarca tu rostro y realza tu belleza natural.", en: "Expert design that frames your face and enhances your beauty." },
      tag:   { es: "Favorito", en: "Fan Favorite" },
    },
    {
      img: imgLaser,
      title: { es: "Depilación Láser", en: "Laser Hair Removal" },
      desc:  { es: "Piel suave y libre de vello para siempre. Para todo tipo de piel.", en: "Smooth, hair-free skin permanently. For all skin types." },
      tag:   { es: "Alta Demanda", en: "High Demand" },
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-36" style={{ background: "var(--cream-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--pink)" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--ink-light)" }}>
                {t("services_label")}
              </span>
            </div>
            <h2 className="font-serif leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              {t("services_title1")}{" "}
              <em style={{ fontStyle: "italic", color: "var(--pink)" }}>{t("services_title2")}</em>
            </h2>
          </div>
          <Link to="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium link-hover self-start md:self-auto"
            style={{ color: "var(--ink-mid)" }}>
            {lang === "es" ? "Ver todos los servicios" : "View all services"}
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((s) => (
            <a key={s.title.es} href="#contacto"
              className="group block overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              style={{ border: "1px solid var(--border)" }}>
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src={s.img} alt={s.title[lang]}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,20,16,0.55) 0%, transparent 55%)" }} />
                <span className="absolute top-3 left-3 text-[10px] md:text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ background: "rgba(250,247,244,0.9)", color: "var(--pink)" }}>
                  {s.tag[lang]}
                </span>
                {/* Hover CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-white text-xs font-semibold tracking-wide">
                    {lang === "es" ? "Reservar →" : "Book →"}
                  </p>
                </div>
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="font-serif font-medium leading-tight mb-1"
                  style={{ fontSize: "clamp(0.85rem, 2vw, 1rem)", color: "var(--ink)", letterSpacing: "-0.01em" }}>
                  {s.title[lang]}
                </h3>
                <p className="text-xs leading-relaxed hidden md:block" style={{ color: "var(--ink-light)" }}>
                  {s.desc[lang]}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
