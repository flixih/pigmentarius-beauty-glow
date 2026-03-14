import eyebrowDesign from "@/assets/eyebrow-design.jpg";

const benefits = [
  "Realce de cejas de larga duración",
  "Despierta todos los días con cejas perfectas",
  "Pigmentos personalizados para resultados naturales",
  "Procedimientos profesionales con técnicas seguras",
];

const PermanentMakeupSection = () => {
  return (
    <section id="maquillaje-permanente" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={eyebrowDesign}
                alt="Maquillaje permanente de cejas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Belleza Duradera</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Maquillaje <span className="italic text-primary">Permanente</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Despierta cada mañana con cejas perfectamente definidas. Nuestros pigmentos de alta calidad se personalizan para complementar tu tono de piel y estilo natural.
            </p>
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              Agenda tu Consulta de Cejas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermanentMakeupSection;
