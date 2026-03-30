import { Phone, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ShopSection = () => {
  const { lang } = useLanguage();

  const products = [
    {
      emoji: "💆‍♀️",
      name:  { es: "Productos de Reparación Capilar",       en: "Hair Repair Products"           },
      desc:  { es: "Mascarillas, aceites y tratamientos de uso profesional para mantener tu cabello en casa.", en: "Masks, oils and professional-grade treatments to maintain your hair at home." },
    },
    {
      emoji: "✨",
      name:  { es: "Mantenimiento de Keratina",             en: "Keratin Maintenance"             },
      desc:  { es: "Shampoos y acondicionadores sin sal para prolongar los resultados de tu keratina.", en: "Salt-free shampoos and conditioners to extend your keratin results." },
    },
    {
      emoji: "🎨",
      name:  { es: "Protección para Cabello con Color",     en: "Color Protection"                },
      desc:  { es: "Protege la vibrancia y la intensidad de tu color entre visitas al salón.", en: "Protect the vibrancy and intensity of your color between salon visits." },
    },
    {
      emoji: "💛",
      name:  { es: "Mascarillas Capilares Premium",         en: "Premium Hair Masks"              },
      desc:  { es: "Hidratación profunda y nutrición para todo tipo de cabello, especialmente el rizado.", en: "Deep hydration and nutrition for all hair types, especially curly." },
    },
    {
      emoji: "💫",
      name:  { es: "Productos de Estilizado",               en: "Styling Products"                },
      desc:  { es: "Cremas, geles y sprays profesionales para lograr el estilo perfecto en casa.", en: "Professional creams, gels and sprays for the perfect style at home." },
    },
  ];

  return (
    <section id="tienda" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-warm bg-white/5 text-ink/50 text-xs font-medium tracking-widest uppercase mb-6">
            {lang === "es" ? "Productos Profesionales" : "Professional Products"}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-ink mb-4">
            {lang === "es" ? "Lleva el Salón " : "Bring the Salon "}
            <span style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {lang === "es" ? "a Tu Casa" : "Home"}
            </span>
          </h2>
          <p className="text-ink/40 max-w-md mx-auto text-sm">
            {lang === "es"
              ? "Los mismos productos que usamos en el salón, disponibles para ti. Contáctanos para disponibilidad."
              : "The same products we use in the salon, available for you. Contact us for availability."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-10">
          {products.map((p) => (
            <div key={p.name.es} className="group rounded-2xl p-4 md:p-6 border border-warm hover:border-white/15 transition-all duration-500 hover:-translate-y-1" style={{ background: "rgba(26,20,16,0.03)" }}>
              <div className="text-2xl md:text-3xl mb-3 md:mb-4">{p.emoji}</div>
              <h3 className="font-serif text-xs md:text-base font-semibold text-ink mb-1 md:mb-2 leading-tight">{p.name[lang]}</h3>
              <p className="text-ink/40 text-xs leading-relaxed hidden md:block">{p.desc[lang]}</p>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-center border border-warm" style={{ background: "rgba(26,20,16,0.03)" }}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-ink mb-3">
            {lang === "es" ? "¿Quieres saber más?" : "Want to know more?"}
          </h3>
          <p className="text-ink/40 mb-8 max-w-md mx-auto text-sm">
            {lang === "es"
              ? "Escríbenos o llámanos directamente. Productos exclusivos para nuestras clientas."
              : "Write to us or call us directly. Exclusive products for our clients."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-ink transition-all duration-300"
              style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 20px hsl(330 85% 60% / 0.3)" }}>
              <Instagram size={15} />
              {lang === "es" ? "Escribir en Instagram" : "Message on Instagram"}
            </a>
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-ink/60 border border-warm hover:border-white/20 hover:text-ink hover:bg-white/5 transition-all duration-300">
              <Phone size={15} />(787) 826-1684
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
