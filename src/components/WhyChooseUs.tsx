import { Award, Users, Gem, MessageCircle, Flower2, Heart } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "20+ Años de Excelencia",
    description: "Dos décadas transformando vidas en Puerto Rico bajo la dirección de Windy Arroyo, fundadora y artista certificada.",
  },
  {
    icon: Users,
    title: "Equipo Altamente Capacitado",
    description: "Nuestro equipo se mantiene en constante formación dominando las últimas técnicas de coloración, microblading y tratamientos.",
  },
  {
    icon: Gem,
    title: "Productos Premium",
    description: "Solo los mejores productos profesionales de belleza para resultados que duran y cuidan la salud de tu cabello.",
  },
  {
    icon: MessageCircle,
    title: "Atención Personalizada",
    description: "Desde el primer llamado te llamamos Princesa. Cada servicio inicia con una consulta para entender exactamente lo que necesitas.",
  },
  {
    icon: Flower2,
    title: "Ambiente Cálido y Profesional",
    description: "Un espacio acogedor donde el equipo trabaja como familia. Nuestras clientes se sienten como en casa.",
  },
  {
    icon: Heart,
    title: "211+ Reseñas de 5 Estrellas",
    description: "La confianza de nuestra comunidad habla por sí sola. Clientes viajan desde Pennsylvania solo para visitarnos.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">La Diferencia Pigmentarius</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Qué <span className="italic text-primary">Elegirnos</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            "Este lugar es como ir al Mayo Clinic o Cedars Sinaí, pero para el cabello." — Cliente Real, Google ⭐⭐⭐⭐⭐
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="group flex gap-5 items-start">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <b.icon size={24} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border text-center">
          {[
            { value: "4.8★", label: "Rating Promedio Google" },
            { value: "211+", label: "Reseñas Verificadas" },
            { value: "20+", label: "Años en el Mercado" },
            { value: "100%", label: "Satisfacción Garantizada" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground tracking-wide mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
