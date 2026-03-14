import { Phone, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-light blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready for Your New Look?
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-md mx-auto mb-10">
          Book your appointment today and discover the luxury beauty experience you deserve.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-cream text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-cream-dark transition-colors duration-300"
          >
            <Calendar size={16} />
            Book Appointment
          </a>
          <a
            href="tel:7878261684"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            <Phone size={16} />
            Call (787) 826-1684
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
