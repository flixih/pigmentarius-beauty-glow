import hairStyling from "@/assets/hair-styling.jpg";

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={hairStyling}
                alt="Estilismo profesional en el Salón Pigmentarius"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-elevated hidden md:block">
              <p className="font-serif text-3xl font-bold">20+</p>
              <p className="text-sm tracking-wide">Años de Excelencia</p>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Nuestra Historia</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              Donde la Belleza se Encuentra con el{" "}
              <span className="italic text-primary">Arte</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Pigmentarius Hair & Brow Salon es un destino de belleza de confianza en Puerto Rico, reconocido por su excepcional arte capilar, diseño perfecto de cejas y cuidado personalizado.
              </p>
              <p>
                Por más de dos décadas, nuestros estilistas expertos han ayudado a nuestros clientes a lucir y sentirse mejor con técnicas profesionales, productos de alta calidad y un ambiente acogedor.
              </p>
              <p>
                Nuestro salón es orgullosamente un negocio de mujeres, dedicado a crear un espacio relajante e inclusivo para cada cliente.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {[
                { value: "215+", label: "Clientes Felices" },
                { value: "4.8", label: "Estrellas" },
                { value: "20+", label: "Años de Experiencia" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
