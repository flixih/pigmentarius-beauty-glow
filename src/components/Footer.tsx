import { Instagram, Facebook, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4">Pigmentarius</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Luxury beauty services in Puerto Rico. Hair artistry, eyebrow design, and personalized beauty care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Services", "About", "Gallery", "Reviews", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-cream/60 text-sm hover:text-gold-light transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-cream/60 text-sm">
              <p>Plaza del Valle Mall, Suite 1</p>
              <p>Añasco, Puerto Rico</p>
              <a href="tel:7878261684" className="block hover:text-gold-light transition-colors">(787) 826-1684</a>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-gold-light transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Pigmentarius Hair & Brow Salon. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs inline-flex items-center gap-1">
            Made with <Heart size={10} className="fill-gold-light text-gold-light" /> in Puerto Rico
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
