import { Star, Quote } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { palette } from "@/lib/theme";
import { useLanguage } from "@/contexts/LanguageContext";

const reviews = [
  { name: "Cliente de Pennsylvania", text: { es: "Viajé desde Pennsylvania y finalmente logré el rubio que siempre quise. El Botox capilar con colágeno quedó absolutamente hermoso. Les doy 5 estrellas.", en: "I flew from Pennsylvania and finally got the blonde I always wanted. The collagen hair Botox was absolutely beautiful. 5 stars." } },
  { name: "Cliente Verificada",       text: { es: "¡Me siento renacida! Windy me dio un corte rizado con capas largas y quedé impactada. Definitivamente aquí es donde ocurre la magia.", en: "I feel reborn! Windy gave me a curly cut with long layers and I was amazed. This is definitely where the magic happens." } },
  { name: "Cliente Local",            text: { es: "¡Una experiencia para repetir! Te llaman Princesa y te tratan de show. Windy está súper pendiente de todas las clientas.", en: "An experience worth repeating! They call you Princess and treat you like royalty. Windy is attentive to every client." } },
  { name: "Primera Visita",           text: { es: "Quedé encantada con el servicio. Su trabajo es excelente y la atención ni se diga. Lo recomiendo 100%.", en: "I was delighted with the service. The work is excellent and the attention is unmatched. 100% recommend." } },
  { name: "Cliente Fiel",             text: { es: "Este lugar es como ir al Mayo Clinic pero para el cabello. Nunca volveré a otro salón.", en: "This place is like going to the Mayo Clinic but for your hair. I will never go anywhere else." } },
  { name: "Clienta Satisfecha",       text: { es: "El tratamiento de cirugía plástica capilar me dejó completamente enamorada del resultado. Increíble profesionalismo.", en: "The hair treatment left me completely in love with the results. Incredible professionalism." } },
];

const ReviewsSection = () => {
  const { theme } = useTheme();
  const p = palette(theme);
  const { lang, t } = useLanguage();
  return (
    <section id="resenas" className="py-20 md:py-32 relative" style={{ background: p.pageBg }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none" style={{ background: "radial-gradient(ellipse, hsl(330 85% 60% / 0.08) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-6">
            {t("reviews_label")}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            {t("reviews_title1")}{" "}
            <span className="italic" style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("reviews_title2")}
            </span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-[hsl(330_85%_60%)] text-[hsl(330_85%_60%)]" />)}</div>
            <span className="text-white font-semibold text-sm">4.8</span>
            <span className="text-white/30 text-xs">· 211+ {t("reviews_count")}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-500 flex flex-col group" style={{ background: p.cardBg }}>
              <Quote size={16} className="mb-2 md:mb-4 flex-shrink-0" style={{ color: "hsl(330 85% 60% / 0.4)" }} />
              <p className="text-white/60 leading-relaxed mb-3 md:mb-5 italic text-xs md:text-sm flex-1">"{review.text[lang]}"</p>
              <div className="flex items-center justify-between pt-3 border-t border-white/8">
                <div>
                  <p className="font-semibold text-white text-xs md:text-sm">{review.name}</p>
                  <p className="text-white/30 text-[10px] mt-0.5 hidden md:block">{t("reviews_verified")}</p>
                </div>
                <div className="flex">{[...Array(5)].map((_, j) => <Star key={j} size={8} className="fill-[hsl(330_85%_60%)] text-[hsl(330_85%_60%)]" />)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://maps.google.com/?q=Pigmentarius+Hair+Brow+Salon+Añasco+Puerto+Rico" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold transition-colors hover:text-white" style={{ color: "hsl(330 85% 60%)" }}>
            {t("reviews_google")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
