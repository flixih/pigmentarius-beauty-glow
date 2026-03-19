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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-6">
            {lang === "es" ? "Productos Profesionales" : "Professional Products"}
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">
            {lang === "es" ? "Lleva el Salón " : "Bring the Salon "}
            <span style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {lang === "es" ? "a Tu Casa" : "Home"}
            </span>
          </h2>
          <p className="text-white/40 max-w-md mx-auto text-sm">
            {lang === "es"
              ? "Los mismos productos que usamos en el salón, disponibles para ti. Contáctanos para disponibilidad."
              : "The same products we use in the salon, available for you. Contact us for availability."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {products.map((p) => (
            <div key={p.name.es} className="group rounded-2xl p-6 border border-white/8 hover:border-white/15 transition-all duration-500 hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.03)" }}>
              <div className="text-3xl mb-4">{p.emoji}</div>
              <h3 className="font-serif text-base font-semibold text-white mb-2">{p.name[lang]}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{p.desc[lang]}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className="rounded-2xl p-6 flex flex-col justify-between border border-white/10" style={{ background: "linear-gradient(135deg, hsl(330 85% 55% / 0.15) 0%, hsl(330 85% 45% / 0.08) 100%)" }}>
            <div>
              <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
                {lang === "es" ? "¿Tienes preguntas?" : "Have questions?"}
              </p>
              <h3 className="font-serif text-lg font-bold text-white mb-3">
                {lang === "es" ? "Consúltanos sobre cualquier producto" : "Ask us about any product"}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {lang === "es"
                  ? "Nuestro equipo te guiará para elegir los productos perfectos para tu cabello."
                  : "Our team will guide you to choose the perfect products for your hair type."}
              </p>
            </div>
            <a href="tel:7878261684"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors duration-300">
              <Phone size={14} />
              {lang === "es" ? "Llamar al Salón" : "Call the Salon"}
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-8 md:p-10 text-center border border-white/8" style={{ background: "rgba(255,255,255,0.03)" }}>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            {lang === "es" ? "¿Quieres saber más?" : "Want to know more?"}
          </h3>
          <p className="text-white/40 mb-8 max-w-md mx-auto text-sm">
            {lang === "es"
              ? "Escríbenos o llámanos directamente. Productos exclusivos para nuestras clientas."
              : "Write to us or call us directly. Exclusive products for our clients."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/pigmentariushs/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 20px hsl(330 85% 60% / 0.3)" }}>
              <Instagram size={15} />
              {lang === "es" ? "Escribir en Instagram" : "Message on Instagram"}
            </a>
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-300">
              <Phone size={15} />(787) 826-1684
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
