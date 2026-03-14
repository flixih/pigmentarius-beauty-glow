import { Scissors, Paintbrush, Sun, Droplets, Sparkles, Wind, Eye, PenTool, Palette, FlameKindling, Heart } from "lucide-react";

const services = [
  { icon: Scissors, title: "Haircuts", description: "Precision cuts tailored to your face shape and personal style." },
  { icon: Paintbrush, title: "Hair Color", description: "Vibrant, long-lasting color using premium salon-grade products." },
  { icon: Sun, title: "Highlights", description: "Natural-looking highlights and balayage for beautiful dimension." },
  { icon: Droplets, title: "Keratin Treatments", description: "Smooth, frizz-free hair with our professional keratin services." },
  { icon: Sparkles, title: "Hair Botox", description: "Deep conditioning treatment for silky, rejuvenated hair." },
  { icon: Wind, title: "Blowouts", description: "Voluminous, salon-perfect blowouts for any occasion." },
  { icon: Eye, title: "Eyebrow Shaping", description: "Expert brow design to frame and enhance your features." },
  { icon: PenTool, title: "Microblading", description: "Semi-permanent brow artistry for perfectly defined brows." },
  { icon: Palette, title: "Permanent Makeup", description: "Long-lasting beauty enhancement with expert techniques." },
  { icon: FlameKindling, title: "Waxing", description: "Gentle, effective waxing for smooth, beautiful skin." },
  { icon: Heart, title: "Hair Treatments", description: "Restorative treatments for healthy, lustrous hair." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">What We Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="italic text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From transformative hair artistry to flawless brow design, we offer a complete range of luxury beauty services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <a href="#contact" className="text-primary text-sm font-semibold tracking-wide hover:text-gold-dark transition-colors inline-flex items-center gap-1">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
