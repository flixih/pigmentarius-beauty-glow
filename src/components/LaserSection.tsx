import { Zap, Shield, Sparkles, Target } from "lucide-react";

const benefits = [
  { icon: Zap, title: "Piel Suave y Sin Vello", description: "Resultados visibles desde la primera sesión para una piel impecable." },
  { icon: Shield, title: "Tecnología Segura", description: "Equipos profesionales con la más alta tecnología del mercado." },
  { icon: Sparkles, title: "Resultados Duraderos", description: "Reducción permanente del vello con sesiones periódicas." },
  { icon: Target, title: "Tratamiento Completo", description: "Rostro, piernas, axilas, bikini y cuerpo completo." },
];

const LaserSection = () => {
  return (
    <section id="laser" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Servicio Premium</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Depilación <span className="italic text-primary">Láser</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Olvídate de la cera y la rasuradora. Disfruta de una piel suave y libre de vello con nuestra tecnología láser profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <b.icon size={26} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
          >
            Reservar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default LaserSection;
