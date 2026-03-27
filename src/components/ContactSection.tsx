import { MapPin, Phone, Clock, Instagram, Facebook, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
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
      const { error } = await supabase.functions.invoke("send-booking", {
        body: { nombre, apellido, contacto, servicio, fecha: fechaFormatted, hora, mensaje: mensaje || "" },
      });
      if (error) throw error;
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
  const inputStyle = { background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" };

  return (
    <section id="contacto" className="py-20 md:py-32 relative" style={{ background: "#0a0a0a" }}>
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
              <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl border border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", color: "hsl(330 85% 60%)" }}>
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
                  className="flex items-center gap-2 px-4 h-10 rounded-full text-xs font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <s.icon size={14} />{s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="rounded-2xl p-6 border border-white/8 flex flex-col items-center justify-center text-center" style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(20px)" }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-white/10" style={{ background: "rgba(255,255,255,0.05)", color: "hsl(330 85% 60%)" }}>
              <Phone size={28} />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-white mb-3">{lang === "es" ? "Llámanos" : "Call Us"}</h3>
            <p className="text-white/40 text-sm mb-6 max-w-xs">{lang === "es" ? "Llámanos para reservar tu cita o resolver cualquier duda." : "Call us to book your appointment or ask any questions."}</p>
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 20px hsl(330 85% 60% / 0.3)" }}>
              <Phone size={18} />(787) 826-1684
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
