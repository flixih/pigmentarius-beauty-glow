import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const reviews = [
  { name: "Cliente de Pennsylvania", text: { es: "Viajé desde Pennsylvania y ¡finalmente logré el rubio que siempre quise! El Botox capilar con colágeno quedó absolutamente hermoso. Les doy 5 estrellas.", en: "I flew in from Pennsylvania and finally got the blonde I always wanted! The collagen hair Botox was absolutely beautiful. I give this place 5 stars." } },
  { name: "Cliente Verificada", text: { es: "¡Me siento renacida! Windy me dio un corte rizado con capas largas y quedé impactada. Definitivamente aquí es donde ocurre la magia.", en: "I feel reborn! Windy gave me a curly cut with long layers and I was shocked. This is definitely where the magic happens." } },
  { name: "Cliente Local", text: { es: "¡Una experiencia para repetir! Te llaman Princesa y te tratan de show. Windy está súper pendiente de TODAS las clientas.", en: "An experience worth repeating! They call you Princess and treat you like royalty. Windy is attentive to ALL her clients." } },
  { name: "Primera Visita", text: { es: "Hoy por primera vez visité el lugar, quedé encantada con el servicio. Su trabajo es excelente y la atención ni se diga. Lo recomiendo 100%.", en: "First time visiting today — I was delighted with the service. The work is excellent and the attention is unmatched. 100% recommend." } },
  { name: "Cliente Fiel", text: { es: "Este lugar es como ir al Mayo Clinic o Cedars Sinaí pero para el cabello. Nunca volveré a otro salón.", en: "This place is like going to the Mayo Clinic or Cedars Sinai but for your hair. I will never go anywhere else." } },
  { name: "Clienta Satisfecha", text: { es: "Me atendió Coralis y fue increíblemente servicial. El tratamiento de cirugía plástica capilar me dejó completamente enamorada del resultado.", en: "Coralis attended me and was incredibly helpful. The hair treatment left me completely in love with the results." } },
];

const ReviewsSection = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="resenas" className="py-16 md:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t("reviews_label")}</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
            {t("reviews_title1")} <span className="italic text-primary">{t("reviews_title2")}</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-primary text-primary" />)}</div>
            <span className="text-foreground font-semibold text-sm">4.8</span>
            <span className="text-muted-foreground text-xs">· 211+ {t("reviews_count")}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, i) => (
            <div key={i} className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col">
              <Quote size={24} className="text-primary/20 mb-3 flex-shrink-0" />
              <p className="text-foreground leading-relaxed mb-4 italic text-sm flex-1">"{review.text[lang]}"</p>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div>
                  <p className="font-serif font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{t("reviews_verified")}</p>
                </div>
                <div className="flex">{[...Array(5)].map((_, j) => <Star key={j} size={10} className="fill-primary text-primary" />)}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://maps.google.com/?q=Pigmentarius+Hair+Brow+Salon+Añasco+Puerto+Rico" target="_blank" rel="noopener noreferrer"
            className="text-primary font-semibold text-sm hover:text-gold-dark transition-colors">
            {t("reviews_google")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
