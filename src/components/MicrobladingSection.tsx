import eyebrowCloseup from "@/assets/eyebrow-closeup.png";

const REAL_BROW = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const features = [
  "Técnica de trazos ultra finos que imita el vello natural",
  "Diseño personalizado según la forma de tu rostro",
  "Resultados naturales y duraderos (12–18 meses)",
  "Artistas certificadas con pigmentos de alta calidad",
  "Ideal para cejas finas, escasas o poco definidas",
  "Sesión de retoque incluida a las 4–6 semanas",
];

const MicrobladingSection = () => {
  return (
    <section id="microblading" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Arte en Cejas</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Microblading <span className="italic text-primary">Profesional</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cejas perfectas diseñadas a medida para realzar tu belleza natural. Nuestras artistas certificadas crean trazos ultra finos que imitan el vello real — resultados que hablan por sí solos.
            </p>

            {/* Pricing badge */}
            <div className="inline-flex items-center gap-3 bg-background rounded-xl px-5 py-3 shadow-soft mb-8 border border-border">
              <span className="text-muted-foreground text-sm">Desde</span>
              <span className="font-serif text-2xl font-bold text-primary">$150</span>
              <span className="text-muted-foreground text-xs">· Retoque incluido</span>
            </div>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              Reservar Cita de Microblading
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={REAL_BROW}
                alt="Resultado de microblading profesional en Pigmentarius"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-elevated hidden md:block">
              <p className="font-serif text-2xl font-bold">211+</p>
              <p className="text-xs tracking-wide opacity-80">Clientes Felices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrobladingSection;
