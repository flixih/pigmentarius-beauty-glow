import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Cliente de Pennsylvania",
    text: "Viajé desde Pennsylvania a Puerto Rico y decidí darles una oportunidad. ¡Finalmente logré el rubio que siempre quise! El Botox capilar con colágeno quedó absolutamente hermoso. El personal fue notable, respetuoso y amable. Les doy 5 estrellas.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Verificada",
    text: "¡Me siento renacida! La dueña Windy me dio un corte de cabello rizado con capas largas y quedé impactada. Estaba a punto de ir hasta San Juan para buscar una especialista en cabello rizado. ¡Definitivamente aquí es donde ocurre la magia!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Local",
    text: "¡Una experiencia para repetir! Hacer la cita fue fácil. La atención por teléfono se sintió con cariño. Te llaman Princesa y te tratan de show. Windy está súper pendiente de TODAS las clientas. ¡Gracias Pigmentarius!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Primera Visita",
    text: "Hoy por primera vez visité el lugar, quedé encantada con el servicio. Su trabajo es excelente y la atención ni se diga. Lo recomiendo 100%. ¡Volveré pronto sin duda alguna!",
    rating: 5,
    source: "Google",
  },
  {
    name: "Cliente Fiel",
    text: "Este lugar es como ir al Mayo Clinic o Cedars Sinaí pero para el cabello. Nunca había visto un salón que trabajara como familia con tanto profesionalismo. Nunca dejaré que nadie más trabaje mi cabello a menos que sea alguien de Pigmentarius.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Clienta Satisfecha",
    text: "Me atendió Coralis y fue increíblemente servicial. El tratamiento de cirugía plástica capilar me dejó completamente enamorada del resultado. Muy atenta y profesional. Llamé para ver si podían hacerme la manicura y pedicura del cabello y lo hicieron posible.",
    rating: 5,
    source: "Google",
  },
];

const ReviewsSection = () => {
  return (
    <section id="resenas" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Reseñas Reales de Google</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros <span className="italic text-primary">Clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.8</span>
            <span className="text-muted-foreground text-sm">· 211+ clientes felices en Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <Quote size={28} className="text-primary/20 mb-4 flex-shrink-0" />
              <p className="text-foreground leading-relaxed mb-6 italic text-sm flex-1">"{review.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="font-serif font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Reseña {review.source} ✓</p>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} className="fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://maps.google.com/?q=Pigmentarius+Hair+Brow+Salon+Añasco+Puerto+Rico"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-gold-dark transition-colors"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
