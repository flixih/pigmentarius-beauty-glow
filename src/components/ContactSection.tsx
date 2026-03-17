import { MapPin, Phone, Clock, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contacto" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Contáctanos</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Reserva tu <span className="italic text-primary">Cita</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm">
            Llámanos, escríbenos o completa el formulario. Somos flexibles y estamos pendientes de ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info column */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Dirección</h3>
                <p className="text-muted-foreground">Plaza del Valle Mall, Suite 1</p>
                <p className="text-muted-foreground">Añasco, Puerto Rico 00610</p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=18.2992483,-67.1669118"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-semibold hover:text-gold-dark transition-colors mt-1 inline-block"
                >
                  Obtener Direcciones →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Teléfono</h3>
                <a href="tel:7878261684" className="text-primary hover:text-gold-dark transition-colors text-lg font-semibold">
                  (787) 826-1684
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Horario</h3>
                {[
                  { day: "Martes – Viernes", hours: "9:00 AM – 5:30 PM" },
                  { day: "Sábado", hours: "9:00 AM – 5:30 PM" },
                  { day: "Domingo & Lunes", hours: "Cerrado", closed: true },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between gap-8 text-sm mb-1">
                    <span className="text-foreground font-medium">{h.day}</span>
                    <span className={h.closed ? "text-muted-foreground" : "text-muted-foreground"}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/pigmentariushs/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-auto px-5 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-semibold"
                aria-label="Instagram"
              >
                <Instagram size={18} />
                @pigmentariushs
              </a>
              <a
                href="https://www.facebook.com/pigmentariuspr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 w-auto px-5 h-12 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-semibold"
                aria-label="Facebook"
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div className="bg-background rounded-2xl p-8 shadow-elevated">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Solicitar Cita</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4">
                  <Send size={24} className="text-primary" />
                </div>
                <h4 className="font-serif text-xl font-semibold text-foreground mb-2">¡Solicitud Enviada!</h4>
                <p className="text-muted-foreground text-sm">Te contactaremos pronto para confirmar tu cita. 💛</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Nombre</label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Apellido</label>
                    <input
                      type="text"
                      placeholder="Tu apellido"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Teléfono o Email</label>
                  <input
                    type="text"
                    required
                    placeholder="787-000-0000 o tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Servicio Deseado</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors"
                  >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option>Corte de Cabello</option>
                    <option>Coloración / Highlights</option>
                    <option>Microblading</option>
                    <option>Maquillaje Permanente</option>
                    <option>Tratamiento Capilar / Botox</option>
                    <option>Diseño de Cejas</option>
                    <option>Manicura & Pedicura</option>
                    <option>Cambio de Imagen Completo</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Fecha Preferida</label>
                    <input
                      type="date"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Hora</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors">
                      {["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"].map(t => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Mensaje (opcional)</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos más sobre lo que deseas..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow mt-2"
                >
                  Solicitar Cita →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
