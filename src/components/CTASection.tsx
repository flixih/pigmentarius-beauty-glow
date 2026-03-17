import { Phone, Calendar, Instagram } from "lucide-react";
import redCurls from "@/assets/red-curls.png";

const CTASection = () => {
  return (
    <section className="py-0 bg-foreground relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative h-64 lg:h-auto order-2 lg:order-1">
          <img
            src={redCurls}
            alt="Resultado espectacular en Pigmentarius"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/60 lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent lg:hidden" />
        </div>

        {/* CTA side */}
        <div className="relative z-10 px-8 md:px-16 py-20 flex flex-col justify-center order-1 lg:order-2">
          {/* Glow effects */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gold-light/5 blur-3xl pointer-events-none" />

          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 relative z-10">Añasco, Puerto Rico</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight relative z-10">
            ¿Lista para tu{" "}
            <span className="italic text-primary">Nuevo Look</span>?
          </h2>
          <p className="text-cream/70 text-lg max-w-md mb-10 leading-relaxed relative z-10">
            Únete a más de 211 clientas satisfechas. Reserva tu cita hoy y descubre por qué nos llaman "el Mayo Clinic del cabello."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-300 shadow-glow"
            >
              <Calendar size={16} />
              Reservar Cita
            </a>
            <a
              href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-cream/10 transition-colors duration-300"
            >
              <Phone size={16} />
              (787) 826-1684
            </a>
          </div>

          <a
            href="https://www.instagram.com/pigmentariushs/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-cream/50 hover:text-gold-light transition-colors text-sm relative z-10 w-fit"
          >
            <Instagram size={14} />
            Síguenos @pigmentariushs para ver nuestro trabajo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
