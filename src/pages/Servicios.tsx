import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

// Local optimized images
import imgHaircut from "@/assets/svc-haircut.webp";
import imgColor from "@/assets/svc-color.webp";
import imgHighlights from "@/assets/svc-highlights.webp";
import imgKeratina from "@/assets/svc-keratina.webp";
import imgBotox from "@/assets/svc-botox.webp";
import imgRepair from "@/assets/svc-repair.webp";
import imgBlowout from "@/assets/svc-blowout.webp";
import imgMicroblading from "@/assets/svc-microblading.webp";
import imgOmbre from "@/assets/svc-ombre.webp";
import imgCejas from "@/assets/svc-cejas.webp";
import imgBrowWax from "@/assets/svc-browwax.webp";
import imgWax from "@/assets/svc-wax.webp";
import imgLaser from "@/assets/svc-laser.webp";
import imgLaserFace from "@/assets/svc-laser-face.webp";
import imgBikini from "@/assets/svc-bikini.webp";
import imgBigote from "@/assets/svc-bigote.webp";
import imgBrazilian from "@/assets/svc-brazilian.webp";
import imgPedicura from "@/assets/svc-pedicura.webp";

const ServiceCard = ({ photo, name, desc }: { photo?: string; name: string; desc: string }) => (
  <div className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.03)" }}>
    {photo && (
      <div className="aspect-video overflow-hidden">
        <img src={photo} alt={name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
      </div>
    )}
    <div className="p-3 md:p-4">
      <h3 className="font-serif text-sm md:text-base font-semibold text-white leading-tight mb-1">{name}</h3>
      <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Servicios = () => {
  const { lang } = useLanguage();

  const allServices = [
    {
      category: { es: "💆 Cabello", en: "💆 Hair" },
      items: [
        { photo: imgHaircut,    name: { es: "Corte de Cabello",         en: "Haircut"               }, desc: { es: "Especialistas en rizado, liso, fino o grueso.",              en: "Specialists in curly, straight, fine or thick hair."      } },
        { photo: imgColor,      name: { es: "Coloración",               en: "Hair Color"             }, desc: { es: "Color vibrante con productos profesionales.",                 en: "Vibrant color with professional products."                } },
        { photo: imgHighlights, name: { es: "Highlights & Balayage",    en: "Highlights & Balayage"  }, desc: { es: "Mechas y balayage de aspecto natural.",                       en: "Natural-looking highlights and balayage."                 } },
        { photo: imgKeratina,   name: { es: "Keratina",                 en: "Keratin Treatment"      }, desc: { es: "Control total del frizz. Perfecto para el clima de PR.",      en: "Total frizz control. Perfect for PR's tropical climate."  } },
        { photo: imgBotox,      name: { es: "Botox Capilar",            en: "Hair Botox"             }, desc: { es: "Rejuvenecimiento profundo con colágeno.",                      en: "Deep rejuvenation with collagen for silky hair."          } },
        { photo: imgRepair,     name: { es: "Cirugía Plástica Capilar", en: "Hair Repair Treatment"  }, desc: { es: "Tratamiento intensivo para cabello muy dañado.",              en: "Intensive repair for severely damaged hair."              } },
        { photo: imgBlowout,    name: { es: "Brazilian Blowout",        en: "Brazilian Blowout"      }, desc: { es: "Alisado suave y duradero con brillo intenso.",                en: "Smooth, long-lasting straightening with intense shine."   } },
      ],
    },
    {
      category: { es: "✨ Cejas & Maquillaje Permanente", en: "✨ Brows & Permanent Makeup" },
      items: [
        { photo: imgMicroblading, name: { es: "Microblading",                 en: "Microblading"         }, desc: { es: "Trazos ultra finos semi-permanentes. Retoque incluido.", en: "Ultra-fine semi-permanent strokes. Touch-up included."  } },
        { photo: imgOmbre,        name: { es: "Sombreado de Cejas (Ombré)",   en: "Brow Shading (Ombré)" }, desc: { es: "Sombreado suave para cejas con más densidad.",         en: "Soft shading for fuller, natural-looking brows."        } },
        { photo: imgCejas,        name: { es: "Diseño de Cejas",              en: "Brow Design"          }, desc: { es: "Diseño experto que enmarca y realza tu rostro.",       en: "Expert design that frames and enhances your face."      } },
        { photo: imgBrowWax,      name: { es: "Wax de Cejas",                 en: "Brow Wax"             }, desc: { es: "Depilación con cera para cejas perfectamente definidas.", en: "Waxing for perfectly defined brows."                  } },
        { photo: imgWax,          name: { es: "Maquillaje Permanente Labios", en: "Permanent Lip Makeup" }, desc: { es: "Labios perfectamente definidos cada mañana.",          en: "Perfectly defined lips every morning."                  } },
        { photo: imgCejas,        name: { es: "Delineado Permanente",         en: "Permanent Eyeliner"   }, desc: { es: "Ojos definidos sin maquillaje diario.",               en: "Defined eyes without daily makeup."                     } },
      ],
    },
    {
      category: { es: "⚡ Depilación Láser", en: "⚡ Laser Hair Removal" },
      items: [
        { photo: imgLaserFace, name: { es: "Rostro Completo",   en: "Full Face"       }, desc: { es: "Tratamiento completo de rostro.",             en: "Full face laser treatment."              } },
        { photo: imgBigote,    name: { es: "Bigote",            en: "Upper Lip"       }, desc: { es: "Resultados desde la primera sesión.",         en: "Visible results from the first session." } },
        
        { photo: imgBikini,    name: { es: "Zona Bikini",       en: "Bikini Area"     }, desc: { es: "Tratamiento de zona bikini clásica.",        en: "Classic bikini area treatment."          } },
        { photo: imgBrazilian, name: { es: "Laser Brazilian",   en: "Laser Brazilian" }, desc: { es: "Tratamiento completo zona brasileña.",       en: "Full Brazilian area treatment."          } },
      ],
    },
    {
      category: { es: "💅 Uñas & Más", en: "💅 Nails & More" },
      items: [
        { photo: imgPedicura, name: { es: "Pedicura", en: "Pedicure" }, desc: { es: "Relajante tratamiento completo de pies.", en: "Relaxing complete foot treatment." } },
      ],
    },
  ];

  return (
    <div className="servicios-page" style={{ minHeight: "100vh" }}>
      <CustomCursor />
      <Navbar />
      <main className="pt-20 relative z-10">

        {/* Header */}
        <div className="px-6 md:px-16 pt-12 pb-10 border-b border-white/8">
          <Link to="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors mb-8 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            {lang === "es" ? "Volver" : "Back"}
          </Link>
          <div className="flex items-center gap-4 mb-3">
            <div className="w-6 h-px bg-white/20" />
            <span className="text-white/30 text-xs tracking-[0.4em] uppercase">Pigmentarius Hair & Brow Salon</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
            {lang === "es" ? "Todos los " : "All "}
            <span style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {lang === "es" ? "Servicios" : "Services"}
            </span>
          </h1>
        </div>

        {/* Services by category */}
        <div className="px-6 md:px-16 py-12 space-y-16">
          {allServices.map((cat) => (
            <div key={cat.category.es}>
              <h2 className="text-white/30 text-xs tracking-[0.4em] uppercase mb-6 pb-4 border-b border-white/8">
                {cat.category[lang]}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {cat.items.map((item) => (
                  <ServiceCard
                    key={item.name.es}
                    photo={item.photo}
                    name={item.name[lang]}
                    desc={item.desc[lang]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 md:px-16 py-16 border-t border-white/8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === "es" ? "¿Lista para reservar?" : "Ready to book?"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(330 85% 45%) 100%)", boxShadow: "0 0 20px hsl(330 85% 60% / 0.3)" }}>
              {lang === "es" ? "Reservar Cita" : "Book Appointment"}
            </Link>
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-white/20 hover:text-white transition-all duration-300">
              <Phone size={14} />(787) 826-1684
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
