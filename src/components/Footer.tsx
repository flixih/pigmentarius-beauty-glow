import { Instagram, Facebook, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang, t } = useLanguage();
  const footerLinks = [
    { label: t("nav_inicio"), href: "#inicio" },
    { label: t("nav_servicios"), href: "#servicios" },
    { label: t("nav_nosotros"), href: "#nosotros" },
    { label: t("nav_galeria"), href: "#galeria" },
    { label: t("nav_resenas"), href: "#resenas" },
    { label: t("nav_contacto"), href: "#contacto" },
  ];
  return (
    <footer className="bg-foreground text-cream py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-3">Pigmentarius</h3>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              {lang === "es"
                ? "Servicios de belleza de lujo en Puerto Rico. Arte capilar, diseño de cejas y cuidado personalizado."
                : "Luxury beauty services in Puerto Rico. Hair artistry, brow design and personalized care."}
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold-light transition-colors"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/pigmentariuspr/" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold-light transition-colors"><Facebook size={18} /></a>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-3 text-sm tracking-wide">{t("footer_links")}</h4>
            <div className="space-y-1.5">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="block text-cream/60 text-sm hover:text-gold-light transition-colors">{link.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-serif font-semibold mb-3 text-sm tracking-wide">{t("footer_contact")}</h4>
            <div className="space-y-1.5 text-cream/60 text-sm">
              <p>Plaza del Valle Mall, Suite 1</p>
              <p>Añasco, Puerto Rico 00610</p>
              <a href="tel:7878261684" className="block hover:text-gold-light transition-colors">(787) 826-1684</a>
              <p className="text-xs pt-1">Mar–Sáb / Tue–Sat: 9AM–5:30PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">© {new Date().getFullYear()} Pigmentarius Hair & Brow Salon. {t("footer_rights")}</p>
          <p className="text-cream/40 text-xs inline-flex items-center gap-1">{t("footer_made")} <Heart size={10} className="fill-gold-light text-gold-light" /> {t("footer_in")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
