import { Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const REAL_PHOTO_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_PHOTO_2 = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen grid lg:grid-cols-2">
      {/* Left: Content */}
      <div className="relative flex flex-col justify-center px-8 md:px-16 py-32 bg-foreground z-10">
        {/* subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(ellipse_at_top_left,_hsl(36_60%_70%)_0%,_transparent_60%)]" />

        <div className="relative z-10 max-w-lg">
          <div className="inline-flex items-center gap-2 border border-gold-light/40 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold-light text-gold-light" />
              ))}
            </div>
            <span className="text-gold-light text-xs font-medium tracking-wider">4.8 · 211+ Reseñas Google</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Cabello Hermoso.{" "}
            <span className="text-gold-light italic">Cejas Perfectas.</span>{" "}
            Tu Confianza Empieza Aquí.
          </h1>

          <p className="text-cream/70 text-base md:text-lg leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Especialistas en coloración, microblading, maquillaje permanente y tratamientos capilares avanzados en Añasco, Puerto Rico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              Reservar Cita
            </a>
            <a
              href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream/80 px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-cream/10 transition-all duration-300"
            >
              <Phone size={14} />
              (787) 826-1684
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-cream/10 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "4.8★", label: "Google Rating" },
              { value: "211+", label: "Reseñas Reales" },
              { value: "20+", label: "Años de Experiencia" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-2xl font-bold text-gold-light">{s.value}</p>
                <p className="text-xs text-cream/50 tracking-wide mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Real photos stacked */}
      <div className="hidden lg:grid grid-rows-2 h-screen sticky top-0">
        <div className="overflow-hidden">
          <img
            src={REAL_PHOTO_1}
            alt="Trabajo de Pigmentarius Hair Salon"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={REAL_PHOTO_2}
            alt="Transformación capilar en Pigmentarius"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
        </div>
        {/* Floating rating badge */}
        <div className="absolute bottom-8 left-0 -translate-x-1/2 bg-foreground border border-primary/30 rounded-2xl p-5 shadow-elevated text-center min-w-[110px]">
          <p className="font-serif text-3xl font-bold text-primary">4.8</p>
          <div className="flex justify-center my-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-cream/50 text-xs">211+ reseñas</p>
        </div>
      </div>

      {/* Mobile: fallback hero bg */}
      <div className="lg:hidden absolute inset-0 -z-10">
        <img src={heroImage} alt="Pigmentarius Salon" className="w-full h-full object-cover opacity-20" />
      </div>
    </section>
  );
};

export default HeroSection;
