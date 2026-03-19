import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Every photo is matched exactly to what the service shows
// Source: Pexels (free commercial use, no attribution required)
const IMG = {
  haircut:      "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",   // scissors cutting hair
  color:        "https://images.pexels.com/photos/3993392/pexels-photo-3993392.jpeg?auto=compress&cs=tinysrgb&w=600",   // stylist applying dye
  highlights:   "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",   // foils in hair highlights
  keratina:     "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",   // glossy straight keratin result
  botox:        "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=600",   // hair mask treatment
  repair:       "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=600",   // hair repair treatment
  blowout:      "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600",   // blowdrying hair with round brush
  microblading: "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=600",   // microblading needle on eyebrow
  ombre:        "https://images.pexels.com/photos/5069398/pexels-photo-5069398.jpeg?auto=compress&cs=tinysrgb&w=600",   // powder ombre brows result
  cejas:        "https://images.pexels.com/photos/3765147/pexels-photo-3765147.jpeg?auto=compress&cs=tinysrgb&w=600",   // perfect shaped eyebrows close-up
  wax:          "https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=600",   // eyebrow waxing strip
  pmu_labios:   "https://images.pexels.com/photos/5069434/pexels-photo-5069434.jpeg?auto=compress&cs=tinysrgb&w=600",   // lip permanent makeup
  delineado:    "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=600",   // eye makeup close-up
  laser:        "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600",   // laser device on skin
  laser_face:   "https://images.pexels.com/photos/5069436/pexels-photo-5069436.jpeg?auto=compress&cs=tinysrgb&w=600",   // laser on face
  laser_legs:   "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=600",   // smooth legs result
  nails:        "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=600",   // gel nails being applied
  pedicure:     "https://images.pexels.com/photos/3997381/pexels-photo-3997381.jpeg?auto=compress&cs=tinysrgb&w=600",   // feet pedicure treatment
  facial:       "https://images.pexels.com/photos/3764019/pexels-photo-3764019.jpeg?auto=compress&cs=tinysrgb&w=600",   // woman getting facial
};

// Fallback gradient colors if image fails to load
const FALLBACK = {
  hair: "#8B6F5E", brows: "#C9A96E", laser: "#5A8A9F", nails: "#D4A8A0", facial: "#A89070",
};

const ServiceCard = ({ photo, fallback, name, price, desc }: {
  photo: string; fallback: string; name: string; desc: string;
}) => (
  <div className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5">
    <div className="aspect-video overflow-hidden relative" style={{ backgroundColor: fallback }}>
      <img
        src={photo}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
        onError={(e) => { e.currentTarget.style.display = "none"; }}
      />
    </div>
    <div className="p-3 md:p-4">
      <div className="flex justify-between items-start mb-1.5 gap-1">
        <h3 className="font-serif text-sm md:text-base font-semibold text-foreground leading-tight">{name}</h3>
        
      </div>
      <p className="text-muted-foreground text-xs leading-relaxed hidden md:block">{desc}</p>
    </div>
  </div>
);

const Servicios = () => {
  const { lang } = useLanguage();

  const allServices = [
    {
      category: { es: "💆 Cabello", en: "💆 Hair" },
      fallback: FALLBACK.hair,
      items: [
        { photo: IMG.haircut,    name: { es: "Corte de Cabello",          en: "Haircut"                  }, desc: { es: "Especialistas en rizado, liso, fino o grueso.",               en: "Specialists in curly, straight, fine or thick hair."       } },
        { photo: IMG.color,      name: { es: "Coloración",                en: "Hair Color"               }, desc: { es: "Color vibrante con productos profesionales.",                  en: "Vibrant color with professional products."                } },
        { photo: IMG.highlights, name: { es: "Highlights & Balayage",     en: "Highlights & Balayage"    }, desc: { es: "Mechas y balayage de aspecto natural.",                        en: "Natural-looking highlights and balayage."                  } },
        { photo: IMG.keratina,   name: { es: "Keratina",                  en: "Keratin Treatment"        }, desc: { es: "Control total del frizz. Perfecto para el clima de PR.",       en: "Total frizz control. Perfect for PR's tropical climate."   } },
        { photo: IMG.botox,      name: { es: "Botox Capilar",             en: "Hair Botox"               }, desc: { es: "Rejuvenecimiento profundo con colágeno.",                       en: "Deep rejuvenation with collagen for silky hair."           } },
        { photo: IMG.repair,     name: { es: "Cirugía Plástica Capilar",  en: "Hair Repair Treatment"    }, desc: { es: "Tratamiento intensivo para cabello muy dañado.",               en: "Intensive repair treatment for severely damaged hair."     } },
        { photo: IMG.blowout,    name: { es: "Brazilian Blowout",         en: "Brazilian Blowout"        }, desc: { es: "Alisado suave y duradero con brillo intenso.",                 en: "Smooth, long-lasting straightening with intense shine."    } },
      ],
    },
    {
      category: { es: "✨ Cejas & Maquillaje Permanente", en: "✨ Brows & Permanent Makeup" },
      fallback: FALLBACK.brows,
      items: [
        { photo: IMG.microblading, name: { es: "Microblading",                  en: "Microblading"           }, desc: { es: "Trazos ultra finos semi-permanentes. Retoque incluido.",     en: "Ultra-fine semi-permanent strokes. Touch-up included."    } },
        { photo: IMG.ombre,        name: { es: "Sombreado de Cejas (Ombré)",    en: "Brow Shading (Ombré)"   }, desc: { es: "Sombreado suave para cejas con más densidad.",              en: "Soft shading for fuller, more natural-looking brows."     } },
        { photo: IMG.cejas,        name: { es: "Diseño de Cejas",               en: "Brow Design"            }, desc: { es: "Diseño experto que enmarca y realza tu rostro.",            en: "Expert design that frames and enhances your face."        } },
        { photo: IMG.wax,          name: { es: "Wax de Cejas",                  en: "Brow Wax"               }, desc: { es: "Depilación con cera para cejas perfectamente definidas.",   en: "Waxing for perfectly defined brows."                      } },
        { photo: IMG.pmu_labios,   name: { es: "Maquillaje Permanente Labios",  en: "Permanent Lip Makeup"   }, desc: { es: "Labios perfectamente definidos cada mañana.",              en: "Perfectly defined lips effortlessly every morning."       } },
        { photo: IMG.delineado,    name: { es: "Delineado Permanente",          en: "Permanent Eyeliner"     }, desc: { es: "Ojos definidos sin maquillaje diario.",                    en: "Defined, expressive eyes without daily makeup."           } },
      ],
    },
    {
      category: { es: "⚡ Depilación Láser", en: "⚡ Laser Hair Removal" },
      fallback: FALLBACK.laser,
      items: [
        { photo: IMG.laser_face, name: { es: "Rostro Completo",    en: "Full Face"      }, desc: { es: "Tratamiento completo de rostro.",          en: "Full face laser treatment."              } },
        { photo: IMG.laser_face, name: { es: "Bigote",             en: "Upper Lip"      }, desc: { es: "Resultados desde la primera sesión.",      en: "Visible results from the first session." } },
        { photo: IMG.laser_face, name: { es: "Mentón",             en: "Chin"           }, desc: { es: "Eliminación permanente del vello.",        en: "Permanent hair removal on the chin."     } },
        { photo: IMG.laser,      name: { es: "Axilas",             en: "Underarms"      }, desc: { es: "Piel suave y libre de vello.",             en: "Smooth, hair-free underarms."            } },
        { photo: IMG.laser_legs, name: { es: "Piernas Completas",  en: "Full Legs"      }, desc: { es: "Piernas perfectamente suaves para siempre.", en: "Perfectly smooth legs permanently."    } },
        { photo: IMG.laser,      name: { es: "Zona Bikini",        en: "Bikini Area"    }, desc: { es: "Tratamiento de zona bikini clásica.",      en: "Classic bikini area treatment."          } },
        { photo: IMG.laser,      name: { es: "Laser Brazilian",    en: "Laser Brazilian"}, desc: { es: "Tratamiento completo zona brasileña.",     en: "Full Brazilian area treatment."          } },
        { photo: IMG.laser,      name: { es: "Cuerpo Completo",    en: "Full Body"      }, desc: { es: "Olvídate de la cera y la rasuradora.",     en: "Forget waxing and razors forever."       } },
      ],
    },
    {
      category: { es: "💅 Uñas & Más", en: "💅 Nails & More" },
      fallback: FALLBACK.nails,
      items: [
        { photo: IMG.nails,    name: { es: "Shellac / Gel",         en: "Shellac / Gel"       }, desc: { es: "Esmalte en gel de larga duración.",              en: "Long-lasting gel polish."               } },
        { photo: IMG.pedicure, name: { es: "Pedicura",              en: "Pedicure"            }, desc: { es: "Relajante tratamiento completo de pies.",        en: "Relaxing complete foot treatment."      } },
        { photo: IMG.facial,   name: { es: "Facial Rejuvenecedor",  en: "Rejuvenating Facial" }, desc: { es: "Limpieza profunda y tratamiento revitalizante.", en: "Deep cleanse and revitalizing facial."  } },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        {/* Header */}
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
              {lang === "es" ? "Todo bajo un mismo techo en Añasco, Puerto Rico." : "All under one roof in Añasco, Puerto Rico."}
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="container mx-auto px-4 py-12 space-y-14">
          {allServices.map((cat) => (
            <div key={cat.category.es}>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                {cat.category[lang]}
              </h2>
              {/* 2-col mobile, 3-col desktop */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {cat.items.map((item) => (
                  <ServiceCard
                    key={item.name.es}
                    photo={item.photo}
                    fallback={cat.fallback}
                    name={item.name[lang]}
                    price={item.price}
                    desc={item.desc[lang]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-cream-dark py-14 px-4">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
              {lang === "es" ? "¿Lista para reservar?" : "Ready to book?"}
            </h2>
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
