import { Phone } from "lucide-react";

const FloatingBookButton = () => {
  return (
    <a
      href="tel:7878261684"
      className="fixed bottom-6 right-6 z-50 lg:hidden bg-primary text-primary-foreground w-14 h-14 rounded-full shadow-elevated flex items-center justify-center hover:bg-gold-dark transition-all duration-300 animate-fade-in"
      aria-label="Llamar para reservar cita"
    >
      <Phone size={22} />
    </a>
  );
};

export default FloatingBookButton;
