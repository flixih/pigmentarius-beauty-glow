import { useLanguage } from "@/contexts/LanguageContext";

const REAL_3 = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80";

const MicrobladingSection = () => {
  const { lang } = useLanguage();
  const features = lang === "es" ? [
    "Trazos ultra finos que imitan el vello natural",
    "Diseño personalizado según tu forma de rostro",
    "Resultados naturales y duraderos (12–18 meses)",
    "Artistas certificadas con pigmentos premium",
    "Retoque incluido a las 4–6 semanas",
  ] : [
    "Ultra-fine strokes that mimic natural hair",
    "Custom design based on your face shape",
    "Natural, long-lasting results (12–18 months)",
    "Certified artists with premium pigments",
    "Touch-up included at 4–6 weeks",
  ];

  return (
    <section id="microblading" className="py-16 md:py-24 bg-[#070707]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              {lang === "es" ? "Arte en Cejas" : "Brow Artistry"}
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              Microblading <span className="italic text-primary">{lang === "es" ? "Profesional" : "Professional"}</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
              {lang === "es"
                ? "Cejas perfectas diseñadas a medida. Nuestras artistas certificadas crean trazos ultra finos que imitan el vello real."
                : "Perfect brows designed just for you. Our certified artists create ultra-fine strokes that mimic real hair."}
            </p>

            <ul className="space-y-2.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground text-sm">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#contacto" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow">
              {lang === "es" ? "Reservar Microblading" : "Book Microblading"}
            </a>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img src={REAL_3} alt="Microblading en Pigmentarius" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-elevated hidden md:block">
              <p className="font-serif text-2xl font-bold">211+</p>
              <p className="text-xs tracking-wide opacity-80">{lang === "es" ? "Clientas Felices" : "Happy Clients"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrobladingSection;
