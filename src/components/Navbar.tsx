import { useState, useEffect } from "react";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo-real.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: lang === "es" ? "Inicio" : "Home", href: "#inicio" },
    { label: lang === "es" ? "Servicios" : "Services", href: "#servicios" },
    { label: lang === "es" ? "Galería" : "Gallery", href: "#galeria" },
    { label: lang === "es" ? "Nosotros" : "About", href: "#nosotros" },
    { label: lang === "es" ? "Contacto" : "Contact", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(250,247,244,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E0D0C4" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(26,20,16,0.06)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio">
          <img src={logo} alt="Pigmentarius" className="h-8 md:h-10 w-auto"
            style={{ filter: "brightness(0)" }} />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="link-hover text-xs tracking-[0.18em] uppercase font-medium"
              style={{ color: "var(--ink-mid)" }}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 md:gap-3">
          <button onClick={toggleLang}
            className="flex items-center gap-1 text-xs tracking-widest font-medium px-3 py-1.5 rounded-full transition-all"
            style={{ color: "var(--ink-mid)", border: "1px solid var(--border)" }}>
            <Globe size={11} />{lang === "es" ? "EN" : "ES"}
          </button>
          <button onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
            style={{ color: "var(--ink-mid)", border: "1px solid var(--border)" }}>
            {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
          </button>
          <a href="#contacto"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-xs tracking-widest uppercase font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--pink)", letterSpacing: "0.15em" }}>
            {lang === "es" ? "Reservar" : "Book Now"}
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-1" style={{ color: "var(--ink)" }}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t px-6 py-6 space-y-4" style={{ background: "var(--cream)", borderColor: "var(--border)" }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-sm tracking-widest uppercase font-medium py-2"
              style={{ color: "var(--ink-mid)" }}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)}
            className="inline-flex items-center px-6 py-3 rounded-full text-xs tracking-widest uppercase font-semibold text-white mt-2"
            style={{ background: "var(--pink)" }}>
            {lang === "es" ? "Reservar Cita" : "Book Appointment"}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
