import { Award, Users, Gem, MessageCircle, Flower2, Heart } from "lucide-react";

const benefits = [
  { icon: Award, title: "20+ Years Experience", description: "Two decades of trusted beauty expertise in Puerto Rico." },
  { icon: Users, title: "Highly Trained Stylists", description: "Continuously educated team mastering the latest techniques." },
  { icon: Gem, title: "Premium Products", description: "Only the finest professional-grade beauty products." },
  { icon: MessageCircle, title: "Personalized Consultations", description: "Every service begins with understanding your unique needs." },
  { icon: Flower2, title: "Luxury Atmosphere", description: "A serene, beautiful space designed for your comfort." },
  { icon: Heart, title: "Hundreds of Happy Clients", description: "Trusted by our community with 215+ glowing reviews." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">The Pigmentarius Difference</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Why Choose <span className="italic text-primary">Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <b.icon size={26} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
