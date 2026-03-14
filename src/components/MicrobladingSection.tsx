import eyebrowCloseup from "@/assets/eyebrow-closeup.png";

const features = [
  "Técnica de trazos que imita el vello natural",
  "Diseño personalizado según la forma del rostro",
  "Resultados naturales y duraderos",
  "Ideal para cejas finas o poco definidas",
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
              Cejas perfectas diseñadas a medida para realzar tu belleza natural. Nuestras artistas certificadas crean trazos ultra finos que imitan el vello real.
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              Reservar Cita de Microblading
            </a>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={eyebrowCloseup}
                alt="Resultado de microblading profesional"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrobladingSection;
