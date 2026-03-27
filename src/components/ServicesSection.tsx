// v2 - real salon photos
import { Droplets, PenTool, Eye, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

import svcKeratina    from "@/assets/svc-keratina.webp";
import svcMicroblading from "@/assets/svc-microblading.webp";
import svcCejas        from "@/assets/svc-cejas.webp";
import svcLaser        from "@/assets/svc-laser.webp";

const IMG = {
  keratina:     svcKeratina,
  microblading: svcMicroblading,
  cejas:        svcCejas,
  laser:        svcLaser,
};

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      icon: Droplets, photo: IMG.keratina,
      title: { es: "Keratina & Botox Capilar", en: "Keratin & Hair Botox" },
      desc:  { es: "Control total del frizz. Resultados sedosos que duran meses.", en: "Total frizz control. Silky results that last months." },
      tag:   { es: "Más Solicitado", en: "Most Requested" },
    },
    {
      icon: PenTool, photo: IMG.microblading,
      title: { es: "Microblading", en: "Microblading" },
      desc:  { es: "Cejas perfectas diseñadas a medida. Duran 12–18 meses.", en: "Perfect brows designed just for you. Last 12–18 months." },
      tag:   { es: "Semi-Permanente", en: "Semi-Permanent" },
    },
    {
      icon: Eye, photo: IMG.cejas,
      title: { es: "Diseño de Cejas", en: "Brow Design" },
      desc:  { es: "Diseño experto que enmarca tu rostro y realza tu belleza.", en: "Expert design that frames your face and enhances your beauty." },
      tag:   { es: "Favorito", en: "Fan Favorite" },
    },
    {
      icon: Zap, photo: IMG.laser,
      title: { es: "Depilación Láser", en: "Laser Hair Removal" },
      desc:  { es: "Piel suave y libre de vello para siempre.", en: "Smooth, hair-free skin permanently." },
      tag:   { es: "Alta Demanda", en: "High Demand" },
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-6">
            {t("services_label")}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            {t("services_title1")}{" "}
            <span style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("services_title2")}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title.es} className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="overflow-hidden aspect-[4/3] relative">
                <img src={s.photo} alt={s.title[lang]} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 55%)" }} />
                <span className="absolute top-2 left-2 md:top-3 md:left-3 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-semibold border border-white/20" style={{ background: "rgba(255,255,255,0.1)", color: "hsl(330 85% 75%)", backdropFilter: "blur(8px)" }}>
                  {s.tag[lang]}
                </span>
              </div>
              <div className="p-3 md:p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-1 md:mb-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", color: "hsl(330 85% 65%)" }}>
                    <s.icon size={12} />
                  </div>
                  <h3 className="text-white font-semibold text-xs md:text-sm leading-tight">{s.title[lang]}</h3>
                </div>
                <p className="text-white/40 text-xs leading-relaxed hidden md:block mb-3">{s.desc[lang]}</p>
                <a href="#contacto" className="mt-auto inline-flex items-center gap-1 text-xs font-semibold" style={{ color: "hsl(330 85% 65%)" }}>
                  {t("services_more")} <ArrowRight size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/servicios" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300">
            {lang === "es" ? "Ver todos los servicios" : "View all services"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
