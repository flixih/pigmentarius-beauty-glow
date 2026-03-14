import { Scissors, Paintbrush, Sun, Droplets, Sparkles, Wind, Eye, PenTool, Palette, FlameKindling, Heart } from "lucide-react";

const services = [
  { icon: Scissors, title: "Cortes de Cabello", description: "Cortes de precisión adaptados a la forma de tu rostro y estilo personal." },
  { icon: Paintbrush, title: "Color de Cabello", description: "Color vibrante y duradero con productos profesionales de salón." },
  { icon: Sun, title: "Highlights", description: "Highlights y balayage de aspecto natural para una dimensión hermosa." },
  { icon: Droplets, title: "Tratamientos de Keratina", description: "Cabello suave y sin frizz con nuestros servicios profesionales de keratina." },
  { icon: Sparkles, title: "Hair Botox", description: "Tratamiento de acondicionamiento profundo para un cabello sedoso y rejuvenecido." },
  { icon: Wind, title: "Blowouts", description: "Blowouts voluminosos y perfectos para cualquier ocasión." },
  { icon: Eye, title: "Diseño de Cejas", description: "Diseño experto de cejas para enmarcar y realzar tus facciones." },
  { icon: PenTool, title: "Microblading", description: "Arte semi-permanente de cejas para cejas perfectamente definidas." },
  { icon: Palette, title: "Maquillaje Permanente", description: "Realce de belleza duradero con técnicas expertas." },
  { icon: FlameKindling, title: "Depilación con Cera", description: "Depilación suave y efectiva para una piel hermosa y suave." },
  { icon: Heart, title: "Tratamientos Capilares", description: "Tratamientos restauradores para un cabello saludable y brillante." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Lo Que Ofrecemos</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros <span className="italic text-primary">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Desde arte capilar transformador hasta diseño de cejas impecable, ofrecemos una gama completa de servicios de belleza de lujo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <a href="#contacto" className="text-primary text-sm font-semibold tracking-wide hover:text-gold-dark transition-colors inline-flex items-center gap-1">
                Más Información →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
          >
            Reservar Cita
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
