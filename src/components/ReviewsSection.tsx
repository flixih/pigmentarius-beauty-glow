import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    text: "Llevo más de 20 años viniendo aquí. El servicio siempre es increíble y el personal es sumamente acogedor.",
    rating: 5,
  },
  {
    name: "Ana R.",
    text: "El salón es hermoso, limpio y relajante. Los resultados superaron mis expectativas. ¡Lo recomiendo!",
    rating: 5,
  },
  {
    name: "Carmen L.",
    text: "El mejor lugar para cejas y cabello en Puerto Rico. Profesionales, amables y siempre consistentes.",
    rating: 5,
  },
  {
    name: "Laura M.",
    text: "¡Mi cabello nunca se ha visto mejor! El tratamiento de keratina fue exactamente lo que necesitaba. Resultados increíbles.",
    rating: 5,
  },
  {
    name: "Sofía P.",
    text: "Una experiencia verdaderamente de lujo sin pretensiones. Me siento consentida cada vez que visito.",
    rating: 5,
  },
  {
    name: "Isabella D.",
    text: "El microblading quedó impecable. Cejas de aspecto natural, perfectamente moldeadas. ¡No podría estar más feliz!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="resenas" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Opiniones de Clientes</p>
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
            <span className="text-muted-foreground text-sm">· 215+ clientes felices</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500"
            >
              <Quote size={28} className="text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">Cliente Verificado</p>
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
      </div>
    </section>
  );
};

export default ReviewsSection;
