import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Contáctanos</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Visítanos <span className="italic text-primary">Hoy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">Plaza del Valle Mall, Suite 1</p>
                <p className="text-muted-foreground">Añasco, Puerto Rico</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Teléfono</h3>
                <a href="tel:7878261684" className="text-primary hover:text-gold-dark transition-colors">
                  (787) 826-1684
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Horario</h3>
                <p className="text-muted-foreground">Abierto todos los días hasta las 5:30 PM</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-elevated h-80 lg:h-auto">
            <iframe
              title="Ubicación de Pigmentarius Hair & Brow Salon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.8!2d-67.14!3d18.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDE2JzQ4LjAiTiA2N8KwMDgnMjQuMCJX!5e0!3m2!1sen!2spr!4v1700000000000!5m2!1sen!2spr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
