import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const REAL_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_2 = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";
const REAL_3 = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const allServices = [
  {
    category: { es: "💆 Cabello", en: "💆 Hair" },
    items: [
      { name: { es: "Corte de Cabello", en: "Haircut" }, price: "Desde $35", desc: { es: "Especialistas en todo tipo de cabello — rizado, liso, fino o grueso.", en: "Specialists in all hair types — curly, straight, fine or thick." }, photo: REAL_1 },
      { name: { es: "Coloración", en: "Hair Color" }, price: "Desde $80", desc: { es: "Color vibrante y duradero con productos profesionales de salón.", en: "Vibrant, long-lasting color with professional salon products." }, photo: REAL_2 },
      { name: { es: "Highlights & Balayage", en: "Highlights & Balayage" }, price: "Desde $90", desc: { es: "Mechas y balayage de aspecto natural para una dimensión hermosa.", en: "Natural-looking highlights and balayage for beautiful dimension." }, photo: REAL_1 },
      { name: { es: "Keratina", en: "Keratin Treatment" }, price: "Desde $120", desc: { es: "Control total del frizz con resultados que duran meses.", en: "Total frizz control with results lasting months." }, photo: REAL_2 },
      { name: { es: "Botox Capilar", en: "Hair Botox" }, price: "Desde $130", desc: { es: "Rejuvenecimiento profundo con colágeno para un cabello sedoso.", en: "Deep rejuvenation with collagen for silky hair." }, photo: REAL_1 },
      { name: { es: "Cirugía Plástica Capilar", en: "Hair Repair Treatment" }, price: "Desde $150", desc: { es: "Tratamiento intensivo de reparación para cabello muy dañado.", en: "Intensive repair treatment for severely damaged hair." }, photo: REAL_2 },
      { name: { es: "Blowout", en: "Blowout" }, price: "Desde $45", desc: { es: "Blowouts voluminosos y perfectos para cualquier ocasión.", en: "Voluminous, perfect blowouts for any occasion." }, photo: REAL_1 },
      { name: { es: "Tratamiento de Hidratación", en: "Deep Hydration Treatment" }, price: "Desde $60", desc: { es: "Restaura la vitalidad del cabello seco y dañado.", en: "Restores vitality to dry and damaged hair." }, photo: REAL_2 },
    ],
  },
  {
    category: { es: "✨ Cejas & Maquillaje Permanente", en: "✨ Brows & Permanent Makeup" },
    items: [
      { name: { es: "Microblading", en: "Microblading" }, price: "Desde $150", desc: { es: "Trazos ultra finos semi-permanentes. Retoque incluido a las 4–6 semanas.", en: "Ultra-fine semi-permanent strokes. Touch-up included at 4–6 weeks." }, photo: REAL_3 },
      { name: { es: "Ombré / Powder Brows", en: "Ombré / Powder Brows" }, price: "Desde $180", desc: { es: "Técnica de sombreado suave para un efecto natural con más densidad.", en: "Soft shading technique for a natural effect with more density." }, photo: REAL_3 },
      { name: { es: "Diseño de Cejas", en: "Brow Design" }, price: "Desde $30", desc: { es: "Diseño y depilación experta que enmarca tu rostro.", en: "Expert design and waxing that frames your face." }, photo: REAL_3 },
      { name: { es: "Maquillaje Permanente de Labios", en: "Permanent Lip Makeup" }, price: "Desde $200", desc: { es: "Labios perfectamente definidos sin esfuerzo cada mañana.", en: "Perfectly defined lips effortlessly every morning." }, photo: REAL_3 },
      { name: { es: "Delineado Permanente", en: "Permanent Eyeliner" }, price: "Consultar", desc: { es: "Ojos definidos y expresivos sin necesidad de maquillaje diario.", en: "Defined, expressive eyes without daily makeup." }, photo: REAL_3 },
    ],
  },
  {
    category: { es: "⚡ Depilación Láser", en: "⚡ Laser Hair Removal" },
    items: [
      { name: { es: "Rostro Completo", en: "Full Face" }, price: "Consultar", desc: { es: "Labio, mentón, mejillas y frente.", en: "Lip, chin, cheeks and forehead." }, photo: REAL_1 },
      { name: { es: "Axilas", en: "Underarms" }, price: "Consultar", desc: { es: "Resultados visibles desde la primera sesión.", en: "Visible results from the first session." }, photo: REAL_1 },
      { name: { es: "Piernas Completas", en: "Full Legs" }, price: "Consultar", desc: { es: "Piel suave y sin vello para siempre.", en: "Smooth, hair-free skin permanently." }, photo: REAL_1 },
      { name: { es: "Zona Bikini", en: "Bikini Area" }, price: "Consultar", desc: { es: "Tratamiento completo o brasileño.", en: "Full or Brazilian treatment." }, photo: REAL_1 },
      { name: { es: "Cuerpo Completo", en: "Full Body" }, price: "Consultar", desc: { es: "El paquete completo para olvidarte de la cera y la rasuradora para siempre.", en: "The complete package to forget about waxing and razors forever." }, photo: REAL_1 },
    ],
  },
  {
    category: { es: "💅 Uñas & Más", en: "💅 Nails & More" },
    items: [
      { name: { es: "Manicura", en: "Manicure" }, price: "Desde $25", desc: { es: "Cuidado profesional de manos y uñas.", en: "Professional hand and nail care." }, photo: REAL_2 },
      { name: { es: "Pedicura", en: "Pedicure" }, price: "Desde $35", desc: { es: "Relajante tratamiento completo de pies.", en: "Relaxing complete foot treatment." }, photo: REAL_2 },
      { name: { es: "Facial Rejuvenecedor", en: "Rejuvenating Facial" }, price: "Desde $45", desc: { es: "Limpieza profunda y tratamiento revitalizante para tu piel.", en: "Deep cleanse and revitalizing treatment for your skin." }, photo: REAL_3 },
      { name: { es: "Dermaplaning", en: "Dermaplaning" }, price: "Desde $55", desc: { es: "Exfoliación profunda para piel radiante.", en: "Deep exfoliation for radiant skin." }, photo: REAL_3 },
      { name: { es: "Depilación con Hilo / Cera", en: "Threading / Waxing" }, price: "Desde $15", desc: { es: "Técnica precisa para cejas, labio y más.", en: "Precise technique for brows, lip and more." }, photo: REAL_3 },
    ],
  },
];

const Servicios = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        {/* Header */}
        <div className="bg-foreground py-14 px-4">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-cream/60 hover:text-gold-light text-sm mb-6 transition-colors">
              <ArrowLeft size={16} />
              {lang === "es" ? "Volver al inicio" : "Back to home"}
            </Link>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
              {lang === "es" ? "Pigmentarius Hair & Brow Salon" : "Pigmentarius Hair & Brow Salon"}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4">
              {lang === "es" ? "Todos Nuestros " : "All Our "}
              <span className="italic text-primary">{lang === "es" ? "Servicios" : "Services"}</span>
            </h1>
            <p className="text-cream/60 max-w-md text-sm leading-relaxed">
              {lang === "es"
                ? "Desde cortes y coloración hasta microblading y depilación láser — todo bajo un mismo techo en Añasco, Puerto Rico."
                : "From cuts and color to microblading and laser hair removal — all under one roof in Añasco, Puerto Rico."}
            </p>
          </div>
        </div>

        {/* Services by category */}
        <div className="container mx-auto px-4 py-12 space-y-14">
          {allServices.map((cat) => (
            <div key={cat.category.es}>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {cat.category[lang]}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div key={item.name.es} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
                    <div className="h-36 overflow-hidden">
                      <img src={item.photo} alt={item.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif text-base font-semibold text-foreground">{item.name[lang]}</h3>
                        <span className="text-primary font-bold text-sm ml-2 whitespace-nowrap">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-cream-dark py-14 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === "es" ? "¿Lista para reservar?" : "Ready to book?"}
            </h2>
            <p className="text-muted-foreground mb-8 max-w-sm mx-auto text-sm">
              {lang === "es"
                ? "Llámanos o reserva tu cita directamente desde nuestra página principal."
                : "Call us or book your appointment directly from our main page."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contacto" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gold-dark transition-colors shadow-glow">
                {lang === "es" ? "Reservar Cita" : "Book Appointment"}
              </Link>
              <a href="tel:7878261684" className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                <Phone size={15} />(787) 826-1684
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Servicios;
