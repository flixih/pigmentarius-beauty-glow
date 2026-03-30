import { Phone, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ShopSection = () => {
  const { lang } = useLanguage();

  const products = [
    { emoji: "💆‍♀️", name: { es: "Productos de Reparación Capilar", en: "Hair Repair Products" }, desc: { es: "Mascarillas, aceites y tratamientos de uso profesional para mantener tu cabello en casa.", en: "Masks, oils and professional-grade treatments to maintain your hair at home." } },
    { emoji: "✨",    name: { es: "Mantenimiento de Keratina",        en: "Keratin Maintenance"  }, desc: { es: "Shampoos y acondicionadores sin sal para prolongar los resultados de tu keratina.",  en: "Salt-free shampoos and conditioners to extend your keratin results." } },
    { emoji: "🎨",   name: { es: "Protección para Cabello con Color", en: "Color Protection"     }, desc: { es: "Protege la vibrancia y la intensidad de tu color entre visitas al salón.",           en: "Protect the vibrancy of your color between salon visits." } },
    { emoji: "💛",   name: { es: "Mascarillas Capilares Premium",     en: "Premium Hair Masks"   }, desc: { es: "Hidratación profunda y nutrición para todo tipo de cabello, especialmente el rizado.", en: "Deep hydration for all hair types, especially curly." } },
    { emoji: "💫",   name: { es: "Productos de Estilizado",           en: "Styling Products"     }, desc: { es: "Cremas, geles y sprays profesionales para lograr el estilo perfecto en casa.",       en: "Professional creams, gels and sprays for the perfect style at home." } },
  ];

  return (
    <section id="tienda" className="py-20 md:py-32" style={{ background: "var(--cream-alt)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "var(--pink)" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--ink-light)" }}>
              {lang === "es" ? "Productos Profesionales" : "Professional Products"}
            </span>
            <div className="h-px w-8" style={{ background: "var(--pink)" }} />
          </div>
          <h2 className="font-serif mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            {lang === "es" ? "Lleva el Salón " : "Bring the Salon "}
            <em style={{ fontStyle: "italic", color: "var(--pink)" }}>
              {lang === "es" ? "a Tu Casa" : "Home"}
            </em>
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--ink-mid)" }}>
            {lang === "es"
              ? "Los mismos productos que usamos en el salón, disponibles para ti. Contáctanos para disponibilidad."
              : "The same products we use in the salon, available for you. Contact us for availability."}
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {products.map((p) => (
            <div key={p.name.es}
              className="rounded-2xl p-5 md:p-6 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{ border: "1px solid var(--border)" }}>
              <div className="text-2xl md:text-3xl mb-3">{p.emoji}</div>
              <h3 className="font-serif font-medium mb-2 leading-tight text-sm md:text-base" style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}>
                {p.name[lang]}
              </h3>
              <p className="text-xs leading-relaxed hidden md:block" style={{ color: "var(--ink-light)" }}>
                {p.desc[lang]}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-2xl p-8 md:p-12 text-center bg-white" style={{ border: "1px solid var(--border)" }}>
          <h3 className="font-serif mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            {lang === "es" ? "¿Quieres saber más?" : "Want to know more?"}
          </h3>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "var(--ink-mid)" }}>
            {lang === "es"
              ? "Escríbenos o llámanos directamente. Productos exclusivos para nuestras clientas."
              : "Write to us or call us directly. Exclusive products for our clients."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--pink)" }}>
              <Instagram size={15} />
              {lang === "es" ? "Escribir en Instagram" : "Message on Instagram"}
            </a>
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white"
              style={{ color: "var(--ink-mid)", border: "1px solid var(--border)" }}>
              <Phone size={15} />(787) 826-1684
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
