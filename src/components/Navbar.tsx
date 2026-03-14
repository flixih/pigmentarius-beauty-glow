import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-foreground">
          Pigmentarius
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:7878261684"
            className="ml-4 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-colors duration-300"
          >
            <Phone size={14} />
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-foreground/80 hover:text-primary py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold mt-2"
            >
              <Phone size={14} />
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
