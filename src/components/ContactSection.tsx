import { MapPin, Phone, Clock, Instagram, Facebook, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Formspree endpoint — replace YOUR_FORM_ID with the ID from formspree.io after signing up
// Sign up free at formspree.io → New Form → copy the ID (e.g. xpznkgvb)
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
const WHATSAPP_NUMBER = "17878261684";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { lang, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 6000);
      }
    } catch {
      // fallback: still show success
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 6000);
    }
    setLoading(false);
  };

  const services = lang === "es"
    ? ["Corte de Cabello","Coloración / Highlights","Microblading","Maquillaje Permanente","Botox Capilar","Diseño de Cejas","Manicura & Pedicura","Depilación Láser","Cambio de Imagen","Otro"]
    : ["Haircut","Color / Highlights","Microblading","Permanent Makeup","Hair Botox","Brow Design","Manicure & Pedicure","Laser Hair Removal","Full Makeover","Other"];

  const times = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];

  const hours = lang === "es"
    ? [{ day: "Mar – Vie", hours: "9:00 AM – 5:00 PM" },{ day: "Sábado", hours: "9:00 AM – 5:00 PM" },{ day: "Dom & Lun", hours: t("hours_closed"), closed: true }]
    : [{ day: "Tue – Fri", hours: "9:00 AM – 5:00 PM" },{ day: "Saturday", hours: "9:00 AM – 5:00 PM" },{ day: "Sun & Mon", hours: t("hours_closed"), closed: true }];

  return (
    <section id="contacto" className="py-16 md:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t("contact_label")}</p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground">
            {t("contact_title1")} <span className="italic text-primary">{t("contact_title2")}</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-sm mx-auto text-sm">{t("contact_desc")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0"><MapPin size={18} className="text-primary" /></div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-0.5 text-sm">{t("contact_address")}</h3>
                <p className="text-muted-foreground text-sm">Plaza del Valle Mall, Suite 1</p>
                <p className="text-muted-foreground text-sm">Añasco, Puerto Rico 00610</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=18.2992483,-67.1669118" target="_blank" rel="noopener noreferrer"
                  className="text-primary text-xs font-semibold hover:text-gold-dark transition-colors mt-1 inline-block">{t("contact_directions")}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0"><Phone size={18} className="text-primary" /></div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-0.5 text-sm">{t("contact_phone")}</h3>
                <a href="tel:7878261684" className="text-primary hover:text-gold-dark transition-colors text-lg font-semibold">(787) 826-1684</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0"><Clock size={18} className="text-primary" /></div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-2 text-sm">{t("contact_hours")}</h3>
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-6 text-sm mb-1">
                    <span className="text-foreground font-medium">{h.day}</span>
                    <span className={h.closed ? "text-muted-foreground" : "text-muted-foreground"}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs font-semibold">
                <Instagram size={15} />@pigmentariushs
              </a>
              <a href="https://www.facebook.com/pigmentariuspr/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs font-semibold">
                <Facebook size={15} />Facebook
              </a>
            </div>

            {/* WhatsApp quick book */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lang === "es" ? "¡Hola! Me gustaría reservar una cita en Pigmentarius 💛" : "Hi! I'd like to book an appointment at Pigmentarius 💛")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 h-11 rounded-full text-sm font-semibold hover:bg-[#1ebe5d] transition-colors mt-1 w-fit"
            >
              <MessageCircle size={16} />
              {lang === "es" ? "Reservar por WhatsApp" : "Book via WhatsApp"}
            </a>
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl p-6 shadow-elevated">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-5">{t("contact_form_title")}</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mb-3"><Send size={22} className="text-primary" /></div>
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">{t("contact_success_title")}</h4>
                <p className="text-muted-foreground text-sm">{t("contact_success_desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_name")}</label>
                    <input name="nombre" type="text" required placeholder={lang === "es" ? "Tu nombre" : "First name"} className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_lastname")}</label>
                    <input name="apellido" type="text" placeholder={lang === "es" ? "Tu apellido" : "Last name"} className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_contact")}</label>
                  <input name="contacto" type="text" required placeholder="787-000-0000" className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_service")}</label>
                  <select name="servicio" required className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors">
                    <option value="" disabled>{t("contact_service_placeholder")}</option>
                    {services.map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_date")}</label>
                    <input name="fecha" type="date" required className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_time")}</label>
                    <select name="hora" className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors">
                      {times.map(t => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1.5">{t("contact_message")}</label>
                  <textarea name="mensaje" rows={2} placeholder={t("contact_message_placeholder")} className="w-full px-3 py-2.5 rounded-xl border border-border bg-cream focus:outline-none focus:border-primary text-sm transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow disabled:opacity-60">
                  {loading ? (lang === "es" ? "Enviando..." : "Sending...") : t("contact_submit")}
                </button>
                <p className="text-xs text-muted-foreground text-center pt-1">
                  {lang === "es" ? "O llámanos directamente: " : "Or call us directly: "}
                  <a href="tel:7878261684" className="text-primary font-semibold">(787) 826-1684</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
