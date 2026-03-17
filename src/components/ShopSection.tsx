import { Phone, Instagram, MessageCircle } from "lucide-react";

const products = [
  {
    name: "Productos de Reparación Capilar",
    description: "Mascarillas, aceites y tratamientos de uso profesional para mantener tu cabello en casa.",
    emoji: "💆‍♀️",
  },
  {
    name: "Mantenimiento de Keratina",
    description: "Shampoos y acondicionadores sin sal para prolongar los resultados de tu keratina.",
    emoji: "✨",
  },
  {
    name: "Protección para Cabello con Color",
    description: "Protege la vibrancia y la intensidad de tu color entre visitas al salón.",
    emoji: "🎨",
  },
  {
    name: "Mascarillas Capilares Premium",
    description: "Hidratación profunda y nutrición para todo tipo de cabello, especialmente el rizado.",
    emoji: "💛",
  },
  {
    name: "Productos de Estilizado",
    description: "Cremas, geles y sprays profesionales para lograr el estilo perfecto en casa.",
    emoji: "💫",
  },
];

const ShopSection = () => {
  return (
    <section id="tienda" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Productos Profesionales</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Lleva el Salón <span className="italic text-primary">a Tu Casa</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Los mismos productos profesionales que usamos en el salón, disponibles para ti. Contáctanos para disponibilidad y precios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {products.map((p) => (
            <div
              key={p.name}
              className="group bg-cream-dark rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="text-3xl mb-5">{p.emoji}</div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{p.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="bg-primary rounded-2xl p-8 shadow-elevated flex flex-col justify-between">
            <div>
              <p className="text-primary-foreground/70 text-xs tracking-widest uppercase mb-3">¿Tienes preguntas?</p>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">Consúltanos sobre cualquier producto</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Nuestro equipo te guiará para elegir los productos perfectos para tu tipo de cabello.
              </p>
            </div>
            <a
              href="tel:7878261684"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-cream-dark transition-colors duration-300"
            >
              <Phone size={14} />
              Llamar al Salón
            </a>
          </div>
        </div>

        {/* Contact CTAs */}
        <div className="bg-cream-dark rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Quieres comprar productos o saber más?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Escríbenos o llámanos directamente. Tenemos disponibilidad de productos profesionales exclusivos para nuestras clientas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/pigmentariushs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              <Instagram size={16} />
              Escribir en Instagram
            </a>
            <a
              href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 border-2 border-border text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-background transition-colors duration-300"
            >
              <Phone size={16} />
              (787) 826-1684
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
