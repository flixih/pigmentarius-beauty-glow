import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "María G.",
    text: "I've been coming here for over 20 years. The service is always amazing and the staff is incredibly welcoming.",
    rating: 5,
  },
  {
    name: "Ana R.",
    text: "The salon is beautiful, clean, and relaxing. The results exceeded my expectations. Highly recommend!",
    rating: 5,
  },
  {
    name: "Carmen L.",
    text: "The best place for eyebrows and hair in Puerto Rico. Professional, friendly, and always consistent.",
    rating: 5,
  },
  {
    name: "Laura M.",
    text: "My hair has never looked better! The keratin treatment was exactly what I needed. Amazing results.",
    rating: 5,
  },
  {
    name: "Sofia P.",
    text: "A truly luxury experience without the pretension. I feel pampered every time I visit.",
    rating: 5,
  },
  {
    name: "Isabella D.",
    text: "The microblading was flawless. Natural-looking, perfectly shaped brows. I couldn't be happier!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Client Love</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients <span className="italic text-primary">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.8</span>
            <span className="text-muted-foreground text-sm">· 215+ happy clients</span>
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
                  <p className="text-xs text-muted-foreground">Verified Client</p>
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
