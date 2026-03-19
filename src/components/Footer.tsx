import { Instagram, Facebook, Heart } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { palette } from "@/lib/theme";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { theme } = useTheme();
  const p = palette(theme);
  const { lang, t } = useLanguage();
  const links = [
    { label: t("nav_inicio"), href: "#inicio" },
    { label: t("nav_servicios"), href: "#servicios" },
    { label: t("nav_nosotros"), href: "#nosotros" },
    { label: t("nav_galeria"), href: "#galeria" },
    { label: t("nav_resenas"), href: "#resenas" },
    { label: t("nav_contacto"), href: "#contacto" },
  ];
  return (
    <footer className="border-t border-white/8 py-12" style={{ background: p.sectionBg }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl font-semibold text-white mb-3">Pigmentarius</h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {lang==="es" ? "Salón de belleza de lujo en Añasco, Puerto Rico." : "Luxury beauty salon in Añasco, Puerto Rico."}
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors"><Instagram size={16} /></a>
              <a href="https://www.facebook.com/pigmentariuspr/" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors"><Facebook size={16} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">{t("footer_links")}</h4>
            <div className="space-y-2">
              {links.map((l) => <a key={l.label} href={l.href} className="block text-white/30 text-sm hover:text-white transition-colors">{l.label}</a>)}
            </div>
          </div>
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">{t("footer_contact")}</h4>
            <div className="space-y-2 text-white/30 text-sm">
              <p>Plaza del Valle Mall, Suite 1</p>
              <p>Añasco, Puerto Rico 00610</p>
              <a href="tel:7878261684" className="block hover:text-white transition-colors">(787) 826-1684</a>
              <p className="text-xs pt-1">{lang==="es"?"Mar–Sáb: 9AM–5PM":"Tue–Sat: 9AM–5PM"}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© {new Date().getFullYear()} Pigmentarius Hair & Brow Salon. {t("footer_rights")}</p>
          <p className="text-white/20 text-xs inline-flex items-center gap-1">{t("footer_made")} <Heart size={10} className="fill-[hsl(330_85%_60%)] text-[hsl(330_85%_60%)]" /> {t("footer_in")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
