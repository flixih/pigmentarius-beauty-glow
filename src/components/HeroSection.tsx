import { Star } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pigmentarius Hair & Brow Salon luxury interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-gold-light/30 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < 5 ? "fill-gold-light text-gold-light" : "text-gold-light/40"}
                />
              ))}
            </div>
            <span className="text-cream text-sm font-medium">4.8 Stars · 215+ Reviews</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Beautiful Hair.{" "}
            <span className="text-gold-light italic">Perfect Brows.</span>{" "}
            Confidence Starts Here.
          </h1>

          <p className="text-cream/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            A luxury beauty experience in Añasco, Puerto Rico with over 20 years of trusted service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border-2 border-cream/40 text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-cream/10 transition-all duration-300"
            >
              View Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {["Women-Owned", "LGBTQ+ Friendly", "20+ Years"].map((badge) => (
              <span
                key={badge}
                className="text-cream/70 text-xs tracking-widest uppercase border border-cream/20 rounded-full px-4 py-1.5"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
