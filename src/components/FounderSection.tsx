import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import w01 from "@/assets/windy-01.png";
import w02 from "@/assets/windy-02.png";
import w03 from "@/assets/windy-03.png";
import w04 from "@/assets/windy-04.png";
import w05 from "@/assets/windy-05.png";
import wn1 from "@/assets/windy-new-01.webp";
import wn2 from "@/assets/windy-new-02.webp";
import wn3 from "@/assets/windy-new-03.webp";

const photos = [w01, w02, w03, w04, w05, wn1, wn2, wn3];

const FounderSection = () => {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % photos.length), 3000);
    return () => clearInterval(t);
  }, []);

  const content = {
    es: {
      label: "Sobre la Fundadora",
      name: "Windy Arroyo",
      title: "Fundadora & Dueña · Pigmentarius",
      bio1: "Wildaliz \"Windy\" Arroyo es la mente y el corazón detrás de Pigmentarius Hair & Brow Salon en Añasco, Puerto Rico. Con más de 20 años de experiencia en la industria de la belleza, Windy ha construido un espacio donde cada clienta es tratada con cariño, profesionalismo y pasión.",
      bio2: "Especialista certificada en microblading, maquillaje permanente, coloración avanzada y tratamientos capilares, Windy ha llevado el nombre de Pigmentarius más allá de Puerto Rico — con clientas que viajan desde estados como Pennsylvania solo para estar en sus manos.",
      bio3: "Su filosofía es simple: cada persona merece sentirse bella, confiada y especial. Por eso, desde el primer contacto, cada clienta es recibida como una princesa.",
      stat1: { value: "20+", label: "Años de experiencia" },
      stat2: { value: "211+", label: "Reseñas de 5 estrellas" },
      stat3: { value: "4.8★", label: "Rating en Google" },
    },
    en: {
      label: "About the Founder",
      name: "Windy Arroyo",
      title: "Founder & Owner · Pigmentarius",
      bio1: "Wildaliz \"Windy\" Arroyo is the mind and heart behind Pigmentarius Hair & Brow Salon in Añasco, Puerto Rico. With over 20 years of experience in the beauty industry, Windy has built a space where every client is treated with warmth, professionalism, and passion.",
      bio2: "A certified specialist in microblading, permanent makeup, advanced color and hair treatments, Windy has taken the Pigmentarius name beyond Puerto Rico — with clients traveling from states like Pennsylvania just to be in her hands.",
      bio3: "Her philosophy is simple: every person deserves to feel beautiful, confident and special. That's why, from the very first contact, every client is welcomed like a princess.",
      stat1: { value: "20+", label: "Years of experience" },
      stat2: { value: "211+", label: "5-star reviews" },
      stat3: { value: "4.8★", label: "Google rating" },
    },
  };

  const c = content[lang];

  return (
    <section id="nosotros" className="py-20 md:py-32 relative overflow-hidden" style={{ background: "#070707" }}>
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.07) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 md:px-16">
        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-6 h-px bg-white/20" />
          <span className="text-white/30 text-xs tracking-[0.4em] uppercase">{c.label}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT: Photos */}
          <div className="space-y-3">
            {/* Main active photo */}
            <div className="relative rounded-2xl overflow-hidden border border-white/8" style={{ aspectRatio: "4/5" }}>
              {photos.map((src, i) => (
                <img key={i} src={src} alt={`Windy Arroyo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
                  style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.03)" }} />
              ))}
              {/* Subtle overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,7,7,0.5) 0%, transparent 50%)" }} />
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2">
              {photos.map((src, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="flex-1 rounded-lg overflow-hidden border transition-all duration-300"
                  style={{ aspectRatio: "1/1", borderColor: i === active ? "hsl(330 85% 60%)" : "rgba(255,255,255,0.08)" }}>
                  <img src={src} alt="" className="w-full h-full object-cover object-top transition-opacity duration-300"
                    style={{ opacity: i === active ? 1 : 0.4 }} />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Text */}
          <div className="lg:pt-4">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
              {c.name}
            </h2>
            <p className="text-xs tracking-[0.3em] uppercase mb-8" style={{ color: "hsl(330 85% 60%)" }}>
              {c.title}
            </p>

            <div className="space-y-5 text-white/50 text-sm md:text-base leading-relaxed">
              <p>{c.bio1}</p>
              <p>{c.bio2}</p>
              <p>{c.bio3}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-white/8">
              {[c.stat1, c.stat2, c.stat3].map((s) => (
                <div key={s.value}>
                  <p className="font-serif text-2xl md:text-3xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                    {s.value}
                  </p>
                  <p className="text-white/30 text-xs mt-1 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#contacto"
                className="inline-flex items-center gap-3 text-sm font-semibold text-white group link-underline">
                {lang === "es" ? "Reservar con Windy" : "Book with Windy"}
                <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors text-xs">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
