import straightHair from "@/assets/straight-hair.png";
import copperHair from "@/assets/copper-hair.png";
import { Droplets, Sparkles, Sun, Shield } from "lucide-react";

const treatments = [
  { icon: Droplets, title: "Tratamientos de Keratina", description: "Control total del frizz con resultados que duran meses." },
  { icon: Sparkles, title: "Hair Botox", description: "Rejuvenecimiento capilar profundo para un cabello sedoso." },
  { icon: Sun, title: "Hidratación Profunda", description: "Restaura la vitalidad del cabello seco y dañado." },
  { icon: Shield, title: "Reparación y Fortalecimiento", description: "Fortalece las fibras capilares desde la raíz hasta las puntas." },
];

const LuxuryHairSection = () => {
  return (
    <section id="tratamientos" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Cabello de Lujo</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tratamientos Capilares <span className="italic text-primary">Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Transforma tu cabello con nuestros tratamientos profesionales de alta gama. Control del frizz, brillo intenso y suavidad incomparable.
          </p>
        </div>

        {/* Before/After Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
            <img src={straightHair} alt="Resultado de tratamiento capilar - cabello liso" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
            <img src={copperHair} alt="Resultado de color y tratamiento capilar" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {treatments.map((t) => (
            <div key={t.title} className="bg-background rounded-2xl p-8 shadow-soft text-center hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-5">
                <t.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-gold-dark transition-all duration-300 shadow-glow"
          >
            Reservar Tratamiento Capilar
          </a>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHairSection;
