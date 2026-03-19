import { useLanguage } from "@/contexts/LanguageContext";

const REAL_2 = "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80";

const services = [
  { name: { es: "Microblading", en: "Microblading" }, price: "Desde $150" },
  { name: { es: "Ombré / Powder Brows", en: "Ombré / Powder Brows" }, price: "Desde $180" },
  { name: { es: "Labios Permanentes", en: "Permanent Lips" }, price: "Desde $200" },
  { name: { es: "Delineado Permanente", en: "Permanent Eyeliner" }, price: "Consultar / Inquire" },
];

const PermanentMakeupSection = () => {
  const { lang } = useLanguage();
  return (
    <section id="maquillaje-permanente" className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
              <img src={REAL_2} alt="Maquillaje permanente Pigmentarius" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              {lang === "es" ? "Belleza Duradera" : "Lasting Beauty"}
            </p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              {lang === "es" ? "Maquillaje" : "Permanent"}{" "}
              <span className="italic text-primary">{lang === "es" ? "Permanente" : "Makeup"}</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              {lang === "es"
                ? "Especialistas en maquillaje permanente. Despierta cada mañana con una apariencia impecable — nuestros pigmentos se personalizan para tu tono de piel único."
                : "Permanent makeup specialists. Wake up every morning looking flawless — our pigments are customized for your unique skin tone."}
            </p>

            <div className="bg-[#070707] rounded-xl p-4 mb-6 space-y-2.5">
              {services.map((s) => (
                <div key={s.name.es} className="flex justify-between items-center py-1 border-b border-border last:border-0">
                  <span className="font-medium text-foreground text-sm">{s.name[lang]}</span>
                  <span className="text-primary font-semibold text-sm">{s.price}</span>
                </div>
              ))}
            </div>

            <a href="#contacto" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow">
              {lang === "es" ? "Agenda tu Consulta" : "Book Consultation"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermanentMakeupSection;
