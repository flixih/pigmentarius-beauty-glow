import { Award, Users, Gem, MessageCircle, Flower2, Heart } from "lucide-react";

const benefits = [
  { icon: Award, title: "20+ Años de Experiencia", description: "Dos décadas de experiencia de belleza confiable en Puerto Rico." },
  { icon: Users, title: "Estilistas Altamente Capacitados", description: "Equipo en constante capacitación dominando las últimas técnicas." },
  { icon: Gem, title: "Productos Premium", description: "Solo los mejores productos profesionales de belleza." },
  { icon: MessageCircle, title: "Consultas Personalizadas", description: "Cada servicio comienza entendiendo tus necesidades únicas." },
  { icon: Flower2, title: "Atmósfera de Lujo", description: "Un espacio sereno y hermoso diseñado para tu comodidad." },
  { icon: Heart, title: "Cientos de Clientes Felices", description: "Confianza de nuestra comunidad con 215+ reseñas positivas." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">La Diferencia Pigmentarius</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Por Qué <span className="italic text-primary">Elegirnos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <b.icon size={26} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
