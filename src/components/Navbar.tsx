import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/logo-real.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: t("nav_inicio"),    href: "#inicio" },
    { label: t("nav_servicios"), href: "#servicios" },
    { label: t("nav_galeria"),   href: "#galeria" },
    { label: t("nav_contacto"),  href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 flex items-center justify-between h-16 md:h-20 transition-all duration-500"
      style={{ background: scrolled ? "rgba(5,5,5,0.9)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none" }}>

      <a href="#inicio" className="flex items-center">
        <img src={logo} alt="Pigmentarius" className="h-7 md:h-9 w-auto brightness-0 invert opacity-90" />
      </a>

      {/* Desktop: minimal links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map(l => (
          <a key={l.href} href={l.href}
            className="text-white/40 hover:text-white text-xs tracking-[0.2em] uppercase transition-colors duration-300 link-underline">
            {l.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button onClick={toggleLang}
          className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs tracking-widest transition-colors border border-white/10 hover:border-white/30 px-3 py-1.5 rounded-full">
          <Globe size={11} />{lang === "es" ? "EN" : "ES"}
        </button>
        <a href="#contacto"
          className="hidden md:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300">
          {t("nav_reservar")}
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white/60 hover:text-white p-1">
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
