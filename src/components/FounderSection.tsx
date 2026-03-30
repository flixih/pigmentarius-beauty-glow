import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import w01 from "@/assets/windy-01.png";
import w02 from "@/assets/windy-02.png";
import w03 from "@/assets/windy-03.png";
import wn1 from "@/assets/windy-new-01.webp";
import wn2 from "@/assets/windy-new-02.webp";

const photos = [w01, w02, w03, wn1, wn2];

const FounderSection = () => {
  const { lang } = useLanguage();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % photos.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="nosotros" className="py-24 md:py-36" style={{ background: "var(--cream-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Photo */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl" style={{ aspectRatio: "4/5" }}>
              {photos.map((src, i) => (
                <img key={i} src={src} alt="Windy Arroyo"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
                  style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1.02)" : "scale(1)" }}
                  loading="lazy" />
              ))}
            </div>
            {/* Thumbnail dots */}
            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? "20px" : "6px",
                    height: "6px",
                    background: i === active ? "var(--pink)" : "var(--border)",
                  }} />
              ))}
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: "var(--pink)" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--ink-light)" }}>
                {lang === "es" ? "Sobre la Fundadora" : "About the Founder"}
              </span>
            </div>

            <h2 className="font-serif mb-2 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              Windy Arroyo
            </h2>
            <p className="text-sm tracking-widest uppercase mb-8 font-medium" style={{ color: "var(--pink)" }}>
              {lang === "es" ? "Fundadora & Dueña · Pigmentarius" : "Founder & Owner · Pigmentarius"}
            </p>

            <div className="space-y-5 text-sm md:text-base leading-relaxed" style={{ color: "var(--ink-mid)" }}>
              <p>{lang === "es"
                ? "Wildaliz \"Windy\" Arroyo es la mente y el corazón detrás de Pigmentarius Hair & Brow Salon en Añasco, Puerto Rico. Con más de 20 años de experiencia, ha construido un espacio donde cada clienta es tratada con cariño, profesionalismo y pasión."
                : "Wildaliz \"Windy\" Arroyo is the heart behind Pigmentarius Hair & Brow Salon in Añasco, Puerto Rico. With over 20 years of experience, she has built a space where every client is treated with warmth and passion."}</p>
              <p>{lang === "es"
                ? "Especialista certificada en microblading, maquillaje permanente y coloración avanzada. Sus clientas viajan desde estados como Pennsylvania solo para estar en sus manos."
                : "A certified specialist in microblading, permanent makeup and advanced color. Clients travel from as far as Pennsylvania just to be in her hands."}</p>
              <p>{lang === "es"
                ? "Su filosofía: desde el primer contacto, cada clienta es recibida como una princesa."
                : "Her philosophy: from the very first contact, every client is welcomed like a princess."}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { val: "20+", lbl: lang === "es" ? "Años de experiencia" : "Years experience" },
                { val: "211+", lbl: lang === "es" ? "Reseñas 5★" : "5★ reviews" },
                { val: "4.8★", lbl: "Google" },
              ].map(s => (
                <div key={s.val}>
                  <p className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: "var(--ink)", letterSpacing: "-0.02em" }}>{s.val}</p>
                  <p className="text-xs mt-1 leading-tight" style={{ color: "var(--ink-light)" }}>{s.lbl}</p>
                </div>
              ))}
            </div>

            <a href="#contacto"
              className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--pink)" }}>
              {lang === "es" ? "Reservar con Windy" : "Book with Windy"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
