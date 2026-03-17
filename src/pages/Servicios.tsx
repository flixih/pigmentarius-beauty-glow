import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Free Unsplash photos — commercial use, no watermark
const IMG = {
  haircut:     "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
  color:       "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80",
  highlights:  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  keratina:    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
  botox:       "https://images.unsplash.com/photo-1580618432270-7e8e5ce4beb5?w=600&q=80",
  repair:      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
  blowout:     "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  microblading:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
  ombre:       "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  cejas:       "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
  wax:         "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
  pmu:         "https://images.unsplash.com/photo-1503236823255-94d871a157d7?w=600&q=80",
  laser:       "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80",
  nails:       "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
  pedicure:    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
  facial:      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
};

const allServices = [
  {
    category: { es: "💆 Cabello", en: "💆 Hair" },
    items: [
      { name: { es: "Corte de Cabello", en: "Haircut" }, price: "$25", desc: { es: "Especialistas en todo tipo de cabello — rizado, liso, fino o grueso.", en: "Specialists in all hair types — curly, straight, fine or thick." }, photo: IMG.haircut },
      { name: { es: "Coloración", en: "Hair Color" }, price: "Desde $80", desc: { es: "Color vibrante y duradero con productos profesionales.", en: "Vibrant, long-lasting color with professional products." }, photo: IMG.color },
      { name: { es: "Highlights & Balayage", en: "Highlights & Balayage" }, price: "Desde $90", desc: { es: "Mechas y balayage de aspecto natural para una dimensión hermosa.", en: "Natural-looking highlights and balayage for beautiful dimension." }, photo: IMG.highlights },
      { name: { es: "Keratina", en: "Keratin Treatment" }, price: "Desde $79", desc: { es: "Control total del frizz. Perfecto para el clima tropical de Puerto Rico.", en: "Total frizz control. Perfect for Puerto Rico's tropical climate." }, photo: IMG.keratina },
      { name: { es: "Botox Capilar", en: "Hair Botox" }, price: "$90", desc: { es: "Rejuvenecimiento profundo con colágeno para un cabello sedoso y brillante.", en: "Deep rejuvenation with collagen for silky, shiny hair." }, photo: IMG.botox },
      { name: { es: "Cirugía Plástica Capilar", en: "Hair Repair Treatment" }, price: "Desde $189", desc: { es: "Tratamiento intensivo de reparación para cabello muy dañado.", en: "Intensive repair treatment for severely damaged hair." }, photo: IMG.repair },
      { name: { es: "Brazilian Blowout", en: "Brazilian Blowout" }, price: "Desde $99", desc: { es: "Alisado suave y duradero con brillo intenso.", en: "Smooth, long-lasting straightening with intense shine." }, photo: IMG.blowout },
    ],
  },
  {
    category: { es: "✨ Cejas & Maquillaje Permanente", en: "✨ Brows & Permanent Makeup" },
    items: [
      { name: { es: "Microblading", en: "Microblading" }, price: "$370", desc: { es: "Trazos ultra finos semi-permanentes. Retoque incluido a las 4–6 semanas.", en: "Ultra-fine semi-permanent strokes. Touch-up included at 4–6 weeks." }, photo: IMG.microblading },
      { name: { es: "Sombreado de Cejas (Ombré Brows)", en: "Brow Shading (Ombré Brows)" }, price: "$270", desc: { es: "Técnica de sombreado suave para cejas con más densidad y aspecto natural.", en: "Soft shading for fuller, more natural-looking brows." }, photo: IMG.ombre },
      { name: { es: "Diseño de Cejas", en: "Brow Design" }, price: "Desde $30", desc: { es: "Diseño y depilación experta que enmarca y realza tu rostro.", en: "Expert design and waxing that frames and enhances your face." }, photo: IMG.cejas },
      { name: { es: "Wax de Cejas", en: "Brow Wax" }, price: "$12", desc: { es: "Depilación con cera para cejas perfectamente definidas.", en: "Waxing for perfectly defined brows." }, photo: IMG.wax },
      { name: { es: "Maquillaje Permanente de Labios", en: "Permanent Lip Makeup" }, price: "Consultar", desc: { es: "Labios perfectamente definidos sin esfuerzo cada mañana.", en: "Perfectly defined lips effortlessly every morning." }, photo: IMG.pmu },
      { name: { es: "Delineado Permanente", en: "Permanent Eyeliner" }, price: "Consultar", desc: { es: "Ojos definidos y expresivos sin maquillaje diario.", en: "Defined, expressive eyes without daily makeup." }, photo: IMG.pmu },
    ],
  },
  {
    category: { es: "⚡ Depilación Láser", en: "⚡ Laser Hair Removal" },
    items: [
      { name: { es: "Rostro Completo", en: "Full Face" }, price: "$65", desc: { es: "Tratamiento completo de rostro para piel suave y sin vello.", en: "Full face treatment for smooth, hair-free skin." }, photo: IMG.laser },
      { name: { es: "Bigote", en: "Upper Lip" }, price: "$25", desc: { es: "Resultados visibles desde la primera sesión.", en: "Visible results from the first session." }, photo: IMG.laser },
      { name: { es: "Mentón", en: "Chin" }, price: "$25", desc: { es: "Eliminación permanente del vello en mentón.", en: "Permanent hair removal on the chin." }, photo: IMG.laser },
      { name: { es: "Axilas", en: "Underarms" }, price: "$25", desc: { es: "Piel suave y libre de vello en axilas.", en: "Smooth, hair-free underarms." }, photo: IMG.laser },
      { name: { es: "Piernas Completas", en: "Full Legs" }, price: "Desde $145", desc: { es: "Piernas perfectamente suaves para siempre.", en: "Perfectly smooth legs permanently." }, photo: IMG.laser },
      { name: { es: "Zona Bikini", en: "Bikini Area" }, price: "$45", desc: { es: "Tratamiento de zona bikini clásica.", en: "Classic bikini area treatment." }, photo: IMG.laser },
      { name: { es: "Laser Brazilian", en: "Laser Brazilian" }, price: "$65", desc: { es: "Tratamiento completo de zona brasileña.", en: "Full Brazilian area treatment." }, photo: IMG.laser },
      { name: { es: "Cuerpo Completo", en: "Full Body" }, price: "Consultar", desc: { es: "El paquete completo — olvídate de la cera y la rasuradora para siempre.", en: "The complete package — forget waxing and razors forever." }, photo: IMG.laser },
    ],
  },
  {
    category: { es: "💅 Uñas & Más", en: "💅 Nails & More" },
    items: [
      { name: { es: "Shellac / Gel", en: "Shellac / Gel" }, price: "$20", desc: { es: "Esmalte en gel de larga duración para uñas perfectas.", en: "Long-lasting gel polish for perfect nails." }, photo: IMG.nails },
      { name: { es: "Pedicura", en: "Pedicure" }, price: "$45", desc: { es: "Relajante tratamiento completo de pies.", en: "Relaxing complete foot treatment." }, photo: IMG.pedicure },
      { name: { es: "Facial Rejuvenecedor", en: "Rejuvenating Facial" }, price: "$55", desc: { es: "Limpieza profunda y tratamiento revitalizante para tu piel.", en: "Deep cleanse and revitalizing treatment for your skin." }, photo: IMG.facial },
    ],
  },
];

const Servicios = () => {
  const { lang } = useLanguage();
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="bg-foreground py-14 px-4">
          <div className="container mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-cream/60 hover:text-gold-light text-sm mb-6 transition-colors">
              <ArrowLeft size={16} />{lang === "es" ? "Volver al inicio" : "Back to home"}
            </Link>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Pigmentarius Hair & Brow Salon</p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-cream mb-4">
              {lang === "es" ? "Todos Nuestros " : "All Our "}
              <span className="italic text-primary">{lang === "es" ? "Servicios" : "Services"}</span>
            </h1>
            <p className="text-cream/60 max-w-md text-sm leading-relaxed">
              {lang === "es"
                ? "Todo bajo un mismo techo en Añasco, Puerto Rico."
                : "All under one roof in Añasco, Puerto Rico."}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 space-y-14">
          {allServices.map((cat) => (
            <div key={cat.category.es}>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {cat.category[lang]}
              </h2>
              {/* 2-col on mobile, 3-col on desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cat.items.map((item) => (
                  <div key={item.name.es} className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
                    <div className="aspect-video overflow-hidden">
                      <img src={item.photo} alt={item.name[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                    </div>
                    <div className="p-3 md:p-4">
                      <div className="flex justify-between items-start mb-1.5 gap-1">
                        <h3 className="font-serif text-sm md:text-base font-semibold text-foreground leading-tight">{item.name[lang]}</h3>
                        <span className="text-primary font-bold text-xs md:text-sm whitespace-nowrap flex-shrink-0">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{item.desc[lang]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-cream-dark py-14 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              {lang === "es" ? "¿Lista para reservar?" : "Ready to book?"}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
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
