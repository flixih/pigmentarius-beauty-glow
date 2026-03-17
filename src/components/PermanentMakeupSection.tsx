import eyebrowDesign from "@/assets/eyebrow-design.jpg";

const REAL_PMU = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";

const benefits = [
  "Despierta todos los días con cejas perfectamente definidas",
  "Pigmentos personalizados para resultados 100% naturales",
  "Técnica segura y certificada con colores estables",
  "Ideal para todo tipo de piel y tono de cabello",
  "Duración de 1–3 años con mantenimiento opcional",
];

const services = [
  { name: "Microblading", price: "Desde $150" },
  { name: "Ombré / Powder Brows", price: "Desde $180" },
  { name: "Labios Permanentes", price: "Desde $200" },
  { name: "Delineado Permanente", price: "Consultar" },
];

const PermanentMakeupSection = () => {
  return (
    <section id="maquillaje-permanente" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={REAL_PMU}
                alt="Maquillaje permanente de cejas en Pigmentarius"
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
              Especialistas en maquillaje permanente en Puerto Rico. Despierta cada mañana con una apariencia impecable sin esfuerzo — nuestros pigmentos de alta calidad se personalizan para tu tono de piel y estilo único.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            {/* Price list */}
            <div className="bg-cream-dark rounded-xl p-5 mb-8 space-y-3">
              {services.map((s) => (
                <div key={s.name} className="flex justify-between items-center py-1 border-b border-border last:border-0">
                  <span className="font-medium text-foreground text-sm">{s.name}</span>
                  <span className="text-primary font-semibold text-sm">{s.price}</span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              Agenda tu Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermanentMakeupSection;
