import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const reviews = [
  { name: "Cliente de Pennsylvania", text: { es: "Viajé desde Pennsylvania y finalmente logré el rubio que siempre quise. El Botox capilar con colágeno quedó absolutamente hermoso. Les doy 5 estrellas.", en: "I flew from Pennsylvania and finally got the blonde I always wanted. The collagen hair Botox was absolutely beautiful. 5 stars." } },
  { name: "Cliente Verificada",      text: { es: "¡Me siento renacida! Windy me dio un corte rizado con capas largas y quedé impactada. Definitivamente aquí es donde ocurre la magia.", en: "I feel reborn! Windy gave me a curly cut with long layers and I was amazed. This is definitely where the magic happens." } },
  { name: "Cliente Local",           text: { es: "¡Una experiencia para repetir! Te llaman Princesa y te tratan de show. Windy está súper pendiente de todas las clientas.", en: "An experience worth repeating! They call you Princess and treat you like royalty. Windy is attentive to every client." } },
  { name: "Primera Visita",          text: { es: "Quedé encantada con el servicio. Su trabajo es excelente y la atención ni se diga. Lo recomiendo 100%.", en: "I was delighted with the service. The work is excellent and the attention is unmatched. 100% recommend." } },
  { name: "Cliente Fiel",            text: { es: "Este lugar es como ir al Mayo Clinic pero para el cabello. Nunca volveré a otro salón.", en: "This place is like going to the Mayo Clinic but for your hair. I will never go anywhere else." } },
  { name: "Clienta Satisfecha",      text: { es: "El tratamiento de cirugía plástica capilar me dejó completamente enamorada del resultado. Increíble profesionalismo.", en: "The hair treatment left me completely in love with the results. Incredible professionalism." } },
];

const ReviewsSection = () => {
  const { lang } = useLanguage();
  return (
    <section id="resenas" className="py-24 md:py-32" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "var(--pink)" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--ink-light)" }}>
              {lang === "es" ? "Reseñas Reales de Google" : "Real Google Reviews"}
            </span>
            <div className="h-px w-8" style={{ background: "var(--pink)" }} />
          </div>
          <h2 className="font-serif mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            {lang === "es" ? "Lo que dicen" : "What they say"}{" "}
            <em style={{ fontStyle: "italic", color: "var(--pink)" }}>{lang === "es" ? "nuestras clientas" : "our clients"}</em>
          </h2>
          {/* Stars */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" style={{ color: "var(--gold)" }} />)}
            </div>
            <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>4.8</span>
            <span className="text-sm" style={{ color: "var(--ink-light)" }}>· 211+ {lang === "es" ? "reseñas" : "reviews"}</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl p-5 md:p-7 flex flex-col bg-white transition-all duration-300 hover:shadow-md"
              style={{ border: "1px solid var(--border)" }}>
              <Quote size={20} className="mb-3 flex-shrink-0" style={{ color: "var(--pink-light)" }} />
              <p className="italic leading-relaxed flex-1 text-xs md:text-sm" style={{ color: "var(--ink-mid)" }}>
                "{r.text[lang]}"
              </p>
              <div className="flex items-center justify-between pt-4 mt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div>
                  <p className="font-semibold text-xs md:text-sm" style={{ color: "var(--ink)" }}>{r.name}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, j) => <Star key={j} size={8} className="fill-current" style={{ color: "var(--gold)" }} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://maps.google.com/?q=Pigmentarius+Hair+Brow+Salon+Añasco+Puerto+Rico"
            target="_blank" rel="noopener noreferrer"
            className="text-sm font-medium link-hover" style={{ color: "var(--pink)" }}>
            {lang === "es" ? "Ver todas las reseñas en Google →" : "View all reviews on Google →"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
