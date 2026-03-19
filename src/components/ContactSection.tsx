import { MapPin, Phone, Clock, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { palette } from "@/lib/theme";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID  = "service_pigmentarius";
const EMAILJS_TEMPLATE_ID = "template_booking";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const { theme } = useTheme();
  const p = palette(theme);
  const { lang, t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const fd   = new FormData(form);
    const nombre   = fd.get("nombre")   as string;
    const apellido = fd.get("apellido") as string;
    const contacto = fd.get("contacto") as string;
    const servicio = fd.get("servicio") as string;
    const fecha    = fd.get("fecha")    as string;
    const hora     = fd.get("hora")     as string;
    const mensaje  = fd.get("mensaje")  as string;
    const fechaFormatted = fecha ? new Date(fecha + "T12:00:00").toLocaleDateString("es-PR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "No especificada";

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, { to_email: "pigmentariusforms@gmail.com", from_name: `${nombre} ${apellido}`, contacto, servicio, fecha: fechaFormatted, hora, mensaje: mensaje || "Ninguno", reply_to: contacto.includes("@") ? contacto : "pigmentariusforms@gmail.com" }, EMAILJS_PUBLIC_KEY);
      setSubmitted(true); form.reset(); setTimeout(() => setSubmitted(false), 7000);
    } catch {
      const body = encodeURIComponent(`Nueva Cita\n\nCliente: ${nombre} ${apellido}\nContacto: ${contacto}\nServicio: ${servicio}\nFecha: ${fechaFormatted}\nHora: ${hora}\nMensaje: ${mensaje}`);
      window.location.href = `mailto:pigmentariusforms@gmail.com?subject=Nueva Cita - ${servicio}&body=${body}`;
    }
    setLoading(false);
  };

  const services = lang === "es"
    ? ["Corte de Cabello","Coloración / Highlights","Keratina","Botox Capilar","Brazilian Blowout","Microblading","Sombreado de Cejas","Diseño de Cejas","Wax de Cejas","Maquillaje Permanente","Shellac / Gel","Pedicura","Facial Rejuvenecedor","Láser - Rostro","Láser - Axilas","Láser - Piernas","Láser - Bikini","Otro"]
    : ["Haircut","Color / Highlights","Keratin","Hair Botox","Brazilian Blowout","Microblading","Brow Shading","Brow Design","Brow Wax","Permanent Makeup","Shellac / Gel","Pedicure","Rejuvenating Facial","Laser - Face","Laser - Underarms","Laser - Legs","Laser - Bikini","Other"];

  const times   = ["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"];
  const inputCls = "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all duration-200 border border-white/8 focus:border-white/20";
  const inputStyle = { background: p.cardBg, backdropFilter: "blur(8px)" };

  return (
    <section id="contacto" className="py-20 md:py-32 relative" style={{ background: p.pageBg }}>
      <div className="absolute top-1/2 left-0 w-64 h-64 -translate-y-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, hsl(330 85% 60% / 0.07) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-6">
            {t("contact_label")}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-3">
            {t("contact_title1")}{" "}
            <span className="italic" style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {t("contact_title2")}
            </span>
          </h2>
          <p className="text-white/40 text-sm max-w-sm mx-auto">{t("contact_desc")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-5">
            {[
              { icon: MapPin,  title: t("contact_address"), content: <>Plaza del Valle Mall, Suite 1<br/>Añasco, Puerto Rico 00610<br/><a href="https://www.google.com/maps/dir/?api=1&destination=18.2992483,-67.1669118" target="_blank" rel="noopener noreferrer" className="text-xs mt-1 inline-block hover:text-white transition-colors" style={{ color: "hsl(330 85% 60%)" }}>{t("contact_directions")}</a></> },
              { icon: Phone,   title: t("contact_phone"),   content: <a href="tel:7878261684" className="text-lg font-semibold hover:text-white transition-colors" style={{ color: "hsl(330 85% 60%)" }}>(787) 826-1684</a> },
              { icon: Clock,   title: t("contact_hours"),   content: <><div className="flex justify-between text-sm text-white/50 mb-1"><span>{lang==="es"?"Mar – Vie":"Tue – Fri"}</span><span>9:00 AM – 5:00 PM</span></div><div className="flex justify-between text-sm text-white/50 mb-1"><span>{lang==="es"?"Sábado":"Saturday"}</span><span>9:00 AM – 5:00 PM</span></div><div className="flex justify-between text-sm text-white/30"><span>{lang==="es"?"Dom & Lun":"Sun & Mon"}</span><span>{lang==="es"?"Cerrado":"Closed"}</span></div></> },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-white/8" style={{ background: p.cardBg }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: p.cardBg, color: "hsl(330 85% 60%)" }}>
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-1">{item.title}</p>
                  <div className="text-white/70 text-sm">{item.content}</div>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              {[
                { href: "https://www.instagram.com/pigmentariushs/", icon: Instagram, label: "@pigmentariushs" },
                { href: "https://www.facebook.com/pigmentariuspr/",  icon: Facebook,  label: "Facebook"       },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 h-10 rounded-full text-xs font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300" style={{ background: p.cardBg }}>
                  <s.icon size={14} />{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl p-6 border border-white/8" style={{ background: p.cardBg, backdropFilter: "blur(20px)" }}>
            <h3 className="font-serif text-xl font-semibold text-white mb-5">{t("contact_form_title")}</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-white/10" style={{ background: p.cardBg, color: "hsl(330 85% 60%)" }}>
                  <Send size={22} />
                </div>
                <h4 className="font-serif text-lg font-semibold text-white mb-2">{t("contact_success_title")}</h4>
                <p className="text-white/40 text-sm">{t("contact_success_desc")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_name")}</label><input name="nombre" type="text" required placeholder={lang==="es"?"Tu nombre":"First name"} className={inputCls} style={inputStyle} /></div>
                  <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_lastname")}</label><input name="apellido" type="text" placeholder={lang==="es"?"Tu apellido":"Last name"} className={inputCls} style={inputStyle} /></div>
                </div>
                <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_contact")}</label><input name="contacto" type="text" required placeholder="787-000-0000" className={inputCls} style={inputStyle} /></div>
                <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_service")}</label>
                  <select name="servicio" required className={inputCls} style={inputStyle}><option value="">{t("contact_service_placeholder")}</option>{services.map(s=><option key={s}>{s}</option>)}</select>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_date")}</label><input name="fecha" type="date" required className={inputCls} style={inputStyle} /></div>
                  <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_time")}</label><select name="hora" className={inputCls} style={inputStyle}>{times.map(t=><option key={t}>{t}</option>)}</select></div>
                </div>
                <div><label className="block text-xs font-semibold tracking-wider uppercase text-white/30 mb-1.5">{t("contact_message")}</label><textarea name="mensaje" rows={2} placeholder={t("contact_message_placeholder")} className={`${inputCls} resize-none`} style={inputStyle} /></div>
                <button type="submit" disabled={loading}
                  className="w-full py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 disabled:opacity-50"
                  style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 20px hsl(330 85% 60% / 0.3)" }}>
                  {loading ? (lang==="es"?"Enviando...":"Sending...") : t("contact_submit")}
                </button>
                <p className="text-xs text-white/30 text-center">{lang==="es"?"O llámanos:":"Or call us:"} <a href="tel:7878261684" className="font-semibold hover:text-white transition-colors" style={{ color: "hsl(330 85% 60%)" }}>(787) 826-1684</a></p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
