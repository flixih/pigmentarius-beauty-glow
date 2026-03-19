import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo-real.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t("nav_inicio"), href: "#inicio" },
    { label: t("nav_servicios"), href: "#servicios" },
    { label: t("nav_nosotros"), href: "#nosotros" },
    { label: t("nav_galeria"), href: "#galeria" },
    { label: t("nav_resenas"), href: "#resenas" },
    { label: t("nav_contacto"), href: "#contacto" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "border-b border-white/8" : ""
    }`}
    style={{ background: scrolled ? "rgba(10,10,10,0.85)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none" }}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">

        <a href="#inicio" className="flex items-center">
          <img src={logo} alt="Pigmentarius" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-white/50 hover:text-white transition-colors duration-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/70 text-xs font-semibold hover:border-white/30 hover:text-white transition-all duration-200">
            <Globe size={11} />
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a href="#contacto"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white transition-all duration-300"
            style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)" }}>
            {t("nav_reservar")}
          </a>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white/70 hover:text-white p-1.5 transition-colors" aria-label="Menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t border-white/8" style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)" }}>
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-white/60 hover:text-white py-2 border-b border-white/5 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white mt-2"
              style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)" }}>
              <Phone size={14} />(787) 826-1684
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
