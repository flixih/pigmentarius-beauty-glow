import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-real.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  return (
    <footer style={{ background: "var(--ink)", color: "rgba(250,247,244,0.7)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Pigmentarius" className="h-8 w-auto mb-5 brightness-0 invert opacity-90" />
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "rgba(250,247,244,0.5)" }}>
              {lang === "es"
                ? "Salón de belleza de confianza en Añasco, Puerto Rico. Especialistas en cabello y cejas desde hace más de 20 años."
                : "Trusted beauty salon in Añasco, Puerto Rico. Hair and brow specialists for over 20 years."}
            </p>
            <div className="flex gap-4">
              {[
                { href: "https://www.instagram.com/pigmentariushs/", Icon: Instagram },
                { href: "https://www.facebook.com/pigmentariuspr/", Icon: Facebook },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                  style={{ border: "1px solid rgba(250,247,244,0.2)" }}>
                  <Icon size={14} color="rgba(250,247,244,0.7)" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-5" style={{ color: "rgba(250,247,244,0.9)" }}>
              {lang === "es" ? "Menú" : "Menu"}
            </p>
            {[
              { label: lang === "es" ? "Servicios" : "Services", href: "#servicios" },
              { label: lang === "es" ? "Galería" : "Gallery", href: "#galeria" },
              { label: lang === "es" ? "Nosotros" : "About", href: "#nosotros" },
              { label: lang === "es" ? "Reseñas" : "Reviews", href: "#resenas" },
              { label: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
            ].map(l => (
              <a key={l.href} href={l.href}
                className="block text-sm py-1.5 hover:opacity-100 transition-opacity"
                style={{ color: "rgba(250,247,244,0.5)" }}>
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.25em] uppercase font-semibold mb-5" style={{ color: "rgba(250,247,244,0.9)" }}>
              {lang === "es" ? "Contacto" : "Contact"}
            </p>
            <div className="space-y-3 text-sm" style={{ color: "rgba(250,247,244,0.5)" }}>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>Plaza del Valle Mall, Suite 1<br />Añasco, Puerto Rico 00610</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:7878261684" className="hover:opacity-100 transition-opacity">(787) 826-1684</a>
              </div>
              <div className="mt-4 text-xs" style={{ color: "rgba(250,247,244,0.35)" }}>
                {lang === "es" ? "Mar–Sáb: 9AM–5PM · Dom & Lun: Cerrado" : "Tue–Sat: 9AM–5PM · Sun & Mon: Closed"}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 mt-10 text-xs gap-3"
          style={{ borderTop: "1px solid rgba(250,247,244,0.1)", color: "rgba(250,247,244,0.3)" }}>
          <span>© {new Date().getFullYear()} Pigmentarius Hair & Brow Salon. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}</span>
          <span>Añasco, Puerto Rico</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
