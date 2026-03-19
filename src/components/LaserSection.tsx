import { Zap, Shield, Sparkles, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80";

const LaserSection = () => {
  const { lang } = useLanguage();
  const benefits = [
    { icon: Zap, title: { es: "Piel Suave y Sin Vello", en: "Smooth, Hair-Free Skin" }, desc: { es: "Resultados visibles desde la primera sesión.", en: "Visible results from the very first session." } },
    { icon: Shield, title: { es: "Tecnología Segura", en: "Safe Technology" }, desc: { es: "Equipos profesionales de alta tecnología.", en: "Professional, high-tech equipment." } },
    { icon: Sparkles, title: { es: "Resultados Duraderos", en: "Long-Lasting Results" }, desc: { es: "Reducción permanente del vello.", en: "Permanent hair reduction." } },
    { icon: Target, title: { es: "Cuerpo Completo", en: "Full Body" }, desc: { es: "Rostro, piernas, axilas, bikini y más.", en: "Face, legs, underarms, bikini and more." } },
  ];

  return (
    <section id="laser" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            {lang === "es" ? "Servicio Premium" : "Premium Service"}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
            {lang === "es" ? "Depilación" : "Laser"}{" "}
            <span className="italic text-primary">{lang === "es" ? "Láser" : "Hair Removal"}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            {lang === "es"
              ? "Olvídate de la cera y la rasuradora. Disfruta de piel suave y libre de vello con nuestra tecnología profesional."
              : "Forget waxing and razors. Enjoy smooth, hair-free skin with our professional laser technology."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="rounded-2xl overflow-hidden shadow-elevated aspect-video md:aspect-[4/3]">
            <img src={REAL_1} alt="Laser treatment" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="grid grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title.es} className="text-center group">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <b.icon size={22} />
                </div>
                <h3 className="font-serif text-sm font-semibold text-foreground mb-1">{b.title[lang]}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{b.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a href="#contacto" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow">
            {lang === "es" ? "Reservar Consulta" : "Book Consultation"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LaserSection;
