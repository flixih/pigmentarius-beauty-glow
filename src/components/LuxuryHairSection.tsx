import { Droplets, Sparkles, Sun, Shield, Scissors, Wind } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&q=80";
const REAL_2 = "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80";

const treatments = [
  { icon: Droplets, title: { es: "Keratina", en: "Keratin Treatment" }, desc: { es: "Control total del frizz. Perfecto para el clima de Puerto Rico.", en: "Total frizz control. Perfect for Puerto Rico's tropical climate." }, price: "Desde $120" },
  { icon: Sparkles, title: { es: "Botox Capilar", en: "Hair Botox" }, desc: { es: "Rejuvenecimiento profundo con colágeno para cabello sedoso.", en: "Deep rejuvenation with collagen for silky, frizz-free hair." }, price: "Desde $130" },
  { icon: Sun, title: { es: "Coloración & Highlights", en: "Color & Highlights" }, desc: { es: "Color, mechas, balayage y corrección con productos premium.", en: "Color, highlights, balayage and correction with premium products." }, price: "Desde $80" },
  { icon: Scissors, title: { es: "Cortes Especializados", en: "Specialist Cuts" }, desc: { es: "Expertos en cabello rizado, liso, fino y grueso.", en: "Experts in curly, straight, fine and thick hair." }, price: "Desde $35" },
  { icon: Shield, title: { es: "Cirugía Capilar", en: "Hair Repair" }, desc: { es: "Tratamiento intensivo para cabello muy dañado.", en: "Intensive repair treatment for severely damaged hair." }, price: "Desde $150" },
  { icon: Wind, title: { es: "Blowouts", en: "Blowouts" }, desc: { es: "Blowouts voluminosos y perfectos para cualquier ocasión.", en: "Voluminous, perfect blowouts for any occasion." }, price: "Desde $45" },
];

const LuxuryHairSection = () => {
  const { lang } = useLanguage();
  return (
    <section id="tratamientos" className="py-16 md:py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
            {lang === "es" ? "Cabello de Lujo" : "Luxury Hair"}
          </p>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-3">
            {lang === "es" ? "Tratamientos Capilares" : "Hair Treatments"}{" "}
            <span className="italic text-primary">{lang === "es" ? "Premium" : "Premium"}</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            {lang === "es" ? "Control del frizz, brillo intenso y suavidad incomparable." : "Frizz control, intense shine and unmatched softness."}
          </p>
        </div>

        {/* Real photos — simple 2-col on mobile */}
        <div className="grid grid-cols-2 gap-3 mb-10 rounded-2xl overflow-hidden">
          <img src={REAL_1} alt="Hair transformation" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700 rounded-xl" loading="lazy" />
          <img src={REAL_2} alt="Hair color" className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-700 rounded-xl" loading="lazy" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {treatments.map((t) => (
            <div key={t.title.es} className="bg-background rounded-xl p-5 shadow-soft hover:shadow-elevated transition-all duration-500 group">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <t.icon size={18} />
              </div>
              <h3 className="font-serif text-sm md:text-base font-semibold text-foreground mb-1">{t.title[lang]}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed mb-2 hidden md:block">{t.desc[lang]}</p>
              <span className="text-primary font-semibold text-xs">{t.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contacto" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow">
            {lang === "es" ? "Reservar Tratamiento" : "Book Treatment"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHairSection;
