import { Droplets, PenTool, Eye, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import FloatingUICard from "./FloatingUICard";

const IMG = {
  // Keratin: woman with glossy sleek straight hair after treatment ✓
  keratina:     "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
  // Microblading: artist drawing/tattooing eyebrow strokes close up ✓
  microblading: "https://images.pexels.com/photos/7755208/pexels-photo-7755208.jpeg?auto=compress&cs=tinysrgb&w=600",
  // Brow Design: perfect shaped eyebrows close-up result ✓
  cejas:        "https://images.pexels.com/photos/6663356/pexels-photo-6663356.jpeg?auto=compress&cs=tinysrgb&w=600",
  // Laser: laser device being applied to skin on leg/arm ✓
  laser:        "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const ServicesSection = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      icon: Droplets, photo: IMG.keratina,
      title:    { es: "Keratina & Botox Capilar", en: "Keratin & Hair Botox"   },
      desc:     { es: "Control total del frizz. Resultados sedosos que duran meses.", en: "Total frizz control. Silky results that last months." },
      tag:      { es: "Más Solicitado", en: "Most Requested" },
      preview:  { title: "Keratina Tratamiento", subtitle: "Resultado después de 1 sesión", tags: ["Cabello", "Frizz Control"], progress: 85, items: ["Consulta inicial", "Aplicación keratina", "Sellado con calor"] },
    },
    {
      icon: PenTool, photo: IMG.microblading,
      title:    { es: "Microblading", en: "Microblading" },
      desc:     { es: "Cejas perfectas diseñadas a medida. Duran 12–18 meses.", en: "Perfect brows designed just for you. Last 12–18 months." },
      tag:      { es: "Semi-Permanente", en: "Semi-Permanent" },
      preview:  { title: "Sesión de Microblading", subtitle: "Artista certificada · 2–3 hrs", tags: ["Cejas", "Semi-Perm"], progress: 60, items: ["Diseño de forma", "Aplicación pigmento", "Retoque (4–6 sem)"] },
    },
    {
      icon: Eye, photo: IMG.cejas,
      title:    { es: "Diseño de Cejas", en: "Brow Design" },
      desc:     { es: "Diseño experto que enmarca tu rostro y realza tu belleza.", en: "Expert design that frames your face and enhances your beauty." },
      tag:      { es: "Favorito", en: "Fan Favorite" },
      preview:  { title: "Diseño de Cejas", subtitle: "Wax · Hilo · Tinte", tags: ["Cejas", "Express"], progress: 95, items: ["Diseño con lápiz", "Depilación", "Definición final"] },
    },
    {
      icon: Zap, photo: IMG.laser,
      title:    { es: "Depilación Láser", en: "Laser Hair Removal" },
      desc:     { es: "Piel suave y libre de vello para siempre. Para todo tipo de piel.", en: "Smooth, hair-free skin permanently. For all skin types." },
      tag:      { es: "Alta Demanda", en: "High Demand" },
      preview:  { title: "Sesión Láser", subtitle: "Tecnología profesional · Indoloro", tags: ["Láser", "Permanente"], progress: 40, items: ["Evaluación de piel", "Aplicación láser", "Próxima sesión"] },
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.06) 0%, transparent 70%)" }} />

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
          <p className="text-white/30 text-sm hidden md:block">{lang === "es" ? "Pasa el cursor por cada servicio para ver más detalles" : "Hover over each service to see details"}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {services.map((s) => (
            <FloatingUICard
              key={s.title.es}
              title={s.preview.title}
              subtitle={s.preview.subtitle}
              tags={s.preview.tags}
              progress={s.preview.progress}
              items={s.preview.items}
            >
              <div className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/16 transition-all duration-300 flex flex-col cursor-pointer" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="overflow-hidden aspect-[16/10] relative">
                  <img src={s.photo} alt={s.title[lang]} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)" }} />
                  <span className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full font-semibold border border-white/20" style={{ background: "rgba(255,255,255,0.1)", color: "hsl(330 85% 75%)", backdropFilter: "blur(8px)" }}>
                    {s.tag[lang]}
                  </span>
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10 transition-all duration-300 group-hover:border-[hsl(330_85%_60%/0.4)]" style={{ background: "rgba(255,255,255,0.05)", color: "hsl(330 85% 65%)" }}>
                      <s.icon size={14} />
                    </div>
                    <h3 className="text-white font-semibold text-xs md:text-sm leading-tight">{s.title[lang]}</h3>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed hidden md:block mb-3">{s.desc[lang]}</p>
                  <a href="#contacto" className="mt-auto inline-flex items-center gap-1 text-xs font-semibold transition-colors group/link" style={{ color: "hsl(330 85% 65%)" }}>
                    {t("services_more")} <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </FloatingUICard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/servicios" className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300">
            {lang === "es" ? "Ver todos los servicios" : "View all services"}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
