import copperHair from "@/assets/copper-hair.png";
import redCurls from "@/assets/red-curls.png";
import { Droplets, Sparkles, Sun, Shield, Scissors, Wind } from "lucide-react";

const REAL_HAIR = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";

const treatments = [
  { icon: Droplets, title: "Tratamientos de Keratina", description: "Control total del frizz con resultados que duran meses. Perfecto para el clima tropical de Puerto Rico.", price: "Desde $120" },
  { icon: Sparkles, title: "Botox Capilar", description: "Rejuvenecimiento capilar profundo con colágeno para un cabello sedoso, brillante y sin frizz.", price: "Desde $130" },
  { icon: Sun, title: "Coloración & Highlights", description: "Color, mechas, balayage y corrección de color con técnicas avanzadas y productos premium.", price: "Desde $80" },
  { icon: Scissors, title: "Cortes Especializados", description: "Especialistas en cabello rizado, liso, fino y grueso. Cortes de capas, pixie y cambios de imagen.", price: "Desde $35" },
  { icon: Shield, title: "Cirugía Plástica Capilar", description: "Tratamiento intensivo de reparación y fortalecimiento para cabello muy dañado.", price: "Desde $150" },
  { icon: Wind, title: "Blowouts Profesionales", description: "Blowouts voluminosos y perfectos. Salte del salón con el cabello de tus sueños.", price: "Desde $45" },
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
            Transforma tu cabello con nuestros tratamientos profesionales. Control del frizz, brillo intenso y suavidad incomparable.
          </p>
        </div>

        {/* Real photo + accent photos */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-elevated aspect-video">
            <img src={REAL_HAIR} alt="Transformación capilar en Pigmentarius" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={copperHair} alt="Coloración cobre" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img src={redCurls} alt="Rizos con color" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Treatment cards with pricing */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((t) => (
            <div key={t.title} className="bg-background rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 group">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <t.icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t.description}</p>
              <span className="text-primary font-semibold text-sm">{t.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
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
