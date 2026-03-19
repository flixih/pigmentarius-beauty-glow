import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { palette } from "@/lib/theme";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IMG = {
  haircut:      "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",
  color:        "https://images.pexels.com/photos/3993392/pexels-photo-3993392.jpeg?auto=compress&cs=tinysrgb&w=600",
  highlights:   "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
  keratina:     "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",
  botox:        "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=600",
  repair:       "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=600",
  blowout:      "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600",
  microblading: "https://images.pexels.com/photos/7755208/pexels-photo-7755208.jpeg?auto=compress&cs=tinysrgb&w=600",
  ombre:        "https://images.pexels.com/photos/5069398/pexels-photo-5069398.jpeg?auto=compress&cs=tinysrgb&w=600",
  cejas:        "https://images.pexels.com/photos/6663356/pexels-photo-6663356.jpeg?auto=compress&cs=tinysrgb&w=600",
  wax:          "https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=600",
  pmu_labios:   "https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=600",
  delineado:    "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=600",
  laser:        "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg?auto=compress&cs=tinysrgb&w=600",
  laser_face:   "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg?auto=compress&cs=tinysrgb&w=600",
  laser_legs:   "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600",
  nails:        "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=600",
  pedicure:     "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=600",
  facial:       "https://images.pexels.com/photos/3764019/pexels-photo-3764019.jpeg?auto=compress&cs=tinysrgb&w=600",
};

const ServiceCard = ({ photo, name, desc }: { photo: string; name: string; desc: string }) => (
  <div className="group rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5" style={{ background: p.cardBg }}>
    <div className="aspect-video overflow-hidden">
      <img src={photo} alt={name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
    </div>
    <div className="p-3 md:p-4">
      <h3 className="font-serif text-sm md:text-base font-semibold text-white leading-tight mb-1">{name}</h3>
      <p className="text-white/40 text-xs leading-relaxed hidden md:block">{desc}</p>
    </div>
  </div>
);

const Servicios = () => {
  const { theme } = useTheme();
  const p = palette(theme);
  const { lang } = useLanguage();

  const allServices = [
    {
      category: { es: "💆 Cabello", en: "💆 Hair" },
      items: [
        { photo: IMG.haircut,    name: { es: "Corte de Cabello",         en: "Haircut"               }, desc: { es: "Especialistas en rizado, liso, fino o grueso.",              en: "Specialists in curly, straight, fine or thick hair."      } },
        { photo: IMG.color,      name: { es: "Coloración",               en: "Hair Color"             }, desc: { es: "Color vibrante con productos profesionales.",                 en: "Vibrant color with professional products."                } },
        { photo: IMG.highlights, name: { es: "Highlights & Balayage",    en: "Highlights & Balayage"  }, desc: { es: "Mechas y balayage de aspecto natural.",                       en: "Natural-looking highlights and balayage."                 } },
        { photo: IMG.keratina,   name: { es: "Keratina",                 en: "Keratin Treatment"      }, desc: { es: "Control total del frizz. Perfecto para el clima de PR.",      en: "Total frizz control. Perfect for PR's tropical climate."  } },
        { photo: IMG.botox,      name: { es: "Botox Capilar",            en: "Hair Botox"             }, desc: { es: "Rejuvenecimiento profundo con colágeno.",                      en: "Deep rejuvenation with collagen for silky hair."          } },
        { photo: IMG.repair,     name: { es: "Cirugía Plástica Capilar", en: "Hair Repair Treatment"  }, desc: { es: "Tratamiento intensivo para cabello muy dañado.",              en: "Intensive repair for severely damaged hair."              } },
        { photo: IMG.blowout,    name: { es: "Brazilian Blowout",        en: "Brazilian Blowout"      }, desc: { es: "Alisado suave y duradero con brillo intenso.",                en: "Smooth, long-lasting straightening with intense shine."   } },
      ],
    },
    {
      category: { es: "✨ Cejas & Maquillaje Permanente", en: "✨ Brows & Permanent Makeup" },
      items: [
        { photo: IMG.microblading, name: { es: "Microblading",                 en: "Microblading"         }, desc: { es: "Trazos ultra finos semi-permanentes. Retoque incluido.", en: "Ultra-fine semi-permanent strokes. Touch-up included."  } },
        { photo: IMG.ombre,        name: { es: "Sombreado de Cejas (Ombré)",   en: "Brow Shading (Ombré)" }, desc: { es: "Sombreado suave para cejas con más densidad.",         en: "Soft shading for fuller, natural-looking brows."        } },
        { photo: IMG.cejas,        name: { es: "Diseño de Cejas",              en: "Brow Design"          }, desc: { es: "Diseño experto que enmarca y realza tu rostro.",       en: "Expert design that frames and enhances your face."      } },
        { photo: IMG.wax,          name: { es: "Wax de Cejas",                 en: "Brow Wax"             }, desc: { es: "Depilación con cera para cejas perfectamente definidas.", en: "Waxing for perfectly defined brows."                  } },
        { photo: IMG.pmu_labios,   name: { es: "Maquillaje Permanente Labios", en: "Permanent Lip Makeup" }, desc: { es: "Labios perfectamente definidos cada mañana.",          en: "Perfectly defined lips every morning."                  } },
        { photo: IMG.delineado,    name: { es: "Delineado Permanente",         en: "Permanent Eyeliner"   }, desc: { es: "Ojos definidos sin maquillaje diario.",               en: "Defined eyes without daily makeup."                     } },
      ],
    },
    {
      category: { es: "⚡ Depilación Láser", en: "⚡ Laser Hair Removal" },
      items: [
        { photo: IMG.laser_face, name: { es: "Rostro Completo",   en: "Full Face"       }, desc: { es: "Tratamiento completo de rostro.",             en: "Full face laser treatment."              } },
        { photo: IMG.laser_face, name: { es: "Bigote",            en: "Upper Lip"       }, desc: { es: "Resultados desde la primera sesión.",         en: "Visible results from the first session." } },
        { photo: IMG.laser_face, name: { es: "Mentón",            en: "Chin"            }, desc: { es: "Eliminación permanente del vello.",           en: "Permanent hair removal on the chin."     } },
        { photo: IMG.laser,      name: { es: "Axilas",            en: "Underarms"       }, desc: { es: "Piel suave y libre de vello.",                en: "Smooth, hair-free underarms."            } },
        { photo: IMG.laser_legs, name: { es: "Piernas Completas", en: "Full Legs"       }, desc: { es: "Piernas perfectamente suaves para siempre.", en: "Perfectly smooth legs permanently."      } },
        { photo: IMG.laser,      name: { es: "Zona Bikini",       en: "Bikini Area"     }, desc: { es: "Tratamiento de zona bikini clásica.",        en: "Classic bikini area treatment."          } },
        { photo: IMG.laser,      name: { es: "Laser Brazilian",   en: "Laser Brazilian" }, desc: { es: "Tratamiento completo zona brasileña.",       en: "Full Brazilian area treatment."          } },
        { photo: IMG.laser,      name: { es: "Cuerpo Completo",   en: "Full Body"       }, desc: { es: "Olvídate de la cera y la rasuradora.",       en: "Forget waxing and razors forever."       } },
      ],
    },
    {
      category: { es: "💅 Uñas & Más", en: "💅 Nails & More" },
      items: [
        { photo: IMG.nails,    name: { es: "Shellac / Gel",        en: "Shellac / Gel"       }, desc: { es: "Esmalte en gel de larga duración.",              en: "Long-lasting gel polish."              } },
        { photo: IMG.pedicure, name: { es: "Pedicura",             en: "Pedicure"            }, desc: { es: "Relajante tratamiento completo de pies.",        en: "Relaxing complete foot treatment."     } },
        { photo: IMG.facial,   name: { es: "Facial Rejuvenecedor", en: "Rejuvenating Facial" }, desc: { es: "Limpieza profunda y tratamiento revitalizante.", en: "Deep cleanse and revitalizing facial." } },
      ],
    },
  ];

  return (
    <div style={{ background: p.pageBg, minHeight: "100vh" }}>
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
