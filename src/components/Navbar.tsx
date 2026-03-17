import { useState, useEffect } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo-real.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
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
      scrolled
        ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
        : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* Logo: white/inverted on transparent, normal on scrolled */}
        <a href="#inicio" className="flex items-center">
          <img
            src={logo}
            alt="Pigmentarius Hair & Brow Salon"
            className={`h-10 md:h-12 w-auto object-contain transition-all duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}
              className={`text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-cream/80 hover:text-gold-light"
              }`}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: lang toggle + CTA — always solid/visible */}
        <div className="flex items-center gap-2">
          {/* Language toggle — always has solid background so it's always visible */}
          <button
            onClick={toggleLang}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 ${
              scrolled
                ? "bg-accent border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
                : "bg-white/20 backdrop-blur-sm border border-white/40 text-cream hover:bg-white/30"
            }`}
            aria-label="Toggle language"
          >
            <Globe size={12} />
            {lang === "es" ? "EN" : "ES"}
          </button>

          <a href="tel:7878261684"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-300 shadow-glow">
            <Phone size={13} />
            {t("nav_reservar")}
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-cream"}`}
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-primary py-2 border-b border-border/50 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold mt-2">
              <Phone size={14} />
              (787) 826-1684
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
