import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real Pigmentarius photos
import svcKeratina     from "@/assets/svc-keratina.webp";
import svcMicroblading from "@/assets/svc-microblading.webp";
import svcCejas        from "@/assets/svc-cejas.webp";
import svcLaser        from "@/assets/svc-laser.webp";
import pg01 from "@/assets/pg-01.webp";
import pg02 from "@/assets/pg-02.webp";
import pg03 from "@/assets/pg-03.webp";
import pg04 from "@/assets/pg-04.webp";
import pg05 from "@/assets/pg-05.webp";
import pg06 from "@/assets/pg-06.webp";
import pg07 from "@/assets/pg-07.webp";
import pg08 from "@/assets/pg-08.webp";
import pg09 from "@/assets/pg-09.webp";

const ServiceCard = ({ photo, name, desc }: { photo: string; name: string; desc: string }) => (
  <div className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
    style={{ border: "1px solid var(--border)" }}>
    <div className="aspect-video overflow-hidden">
      <img src={photo} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
    </div>
    <div className="p-4">
      <h3 className="font-serif font-medium leading-tight mb-1 text-sm md:text-base" style={{ color: "var(--ink)", letterSpacing: "-0.01em" }}>{name}</h3>
      <p className="text-xs leading-relaxed hidden md:block" style={{ color: "var(--ink-light)" }}>{desc}</p>
    </div>
  </div>
);

const Servicios = () => {
  const { lang } = useLanguage();

  const allServices = [
    {
      category: { es: "💆 Cabello", en: "💆 Hair" },
      items: [
        { photo: pg02,         name: { es: "Corte de Cabello",         en: "Haircut"              }, desc: { es: "Especialistas en rizado, liso, fino o grueso.",                        en: "Specialists in curly, straight, fine or thick hair."            } },
        { photo: pg04,         name: { es: "Coloración",               en: "Hair Color"            }, desc: { es: "Color vibrante con productos profesionales.",                           en: "Vibrant color with professional products."                      } },
        { photo: pg03,         name: { es: "Highlights & Balayage",    en: "Highlights & Balayage" }, desc: { es: "Mechas y balayage de aspecto natural.",                                en: "Natural-looking highlights and balayage."                       } },
        { photo: svcKeratina,  name: { es: "Keratina",                 en: "Keratin Treatment"     }, desc: { es: "Control total del frizz. Perfecto para el clima de PR.",               en: "Total frizz control. Perfect for PR's tropical climate."        } },
        { photo: pg01,         name: { es: "Botox Capilar",            en: "Hair Botox"            }, desc: { es: "Rejuvenecimiento profundo con colágeno.",                              en: "Deep rejuvenation with collagen for silky hair."                } },
        { photo: pg05,         name: { es: "Cirugía Plástica Capilar", en: "Hair Repair Treatment" }, desc: { es: "Tratamiento intensivo para cabello muy dañado.",                       en: "Intensive repair for severely damaged hair."                    } },
        { photo: pg06,         name: { es: "Brazilian Blowout",        en: "Brazilian Blowout"     }, desc: { es: "Alisado suave y duradero con brillo intenso.",                         en: "Smooth, long-lasting straightening with intense shine."         } },
      ],
    },
    {
      category: { es: "✨ Cejas & Maquillaje Permanente", en: "✨ Brows & Permanent Makeup" },
      items: [
        { photo: svcMicroblading, name: { es: "Microblading",                 en: "Microblading"         }, desc: { es: "Trazos ultra finos semi-permanentes. Retoque incluido.", en: "Ultra-fine semi-permanent strokes. Touch-up included."  } },
        { photo: svcCejas,        name: { es: "Diseño de Cejas",              en: "Brow Design"          }, desc: { es: "Diseño experto que enmarca tu rostro.",               en: "Expert design that frames your face."                    } },
        { photo: svcCejas,        name: { es: "Sombreado de Cejas (Ombré)",   en: "Brow Shading (Ombré)" }, desc: { es: "Sombreado suave para cejas con más densidad.",        en: "Soft shading for fuller, natural-looking brows."        } },
        { photo: svcCejas,        name: { es: "Wax de Cejas",                 en: "Brow Wax"             }, desc: { es: "Depilación con cera para cejas perfectamente definidas.", en: "Waxing for perfectly defined brows."                  } },
        { photo: svcMicroblading, name: { es: "Maquillaje Permanente Labios", en: "Permanent Lip Makeup" }, desc: { es: "Labios perfectamente definidos cada mañana.",          en: "Perfectly defined lips every morning."                  } },
        { photo: svcMicroblading, name: { es: "Delineado Permanente",         en: "Permanent Eyeliner"   }, desc: { es: "Ojos definidos sin maquillaje diario.",               en: "Defined eyes without daily makeup."                     } },
      ],
    },
    {
      category: { es: "⚡ Depilación Láser", en: "⚡ Laser Hair Removal" },
      items: [
        { photo: svcLaser, name: { es: "Rostro Completo",   en: "Full Face"       }, desc: { es: "Tratamiento completo de rostro.",              en: "Full face laser treatment."               } },
        { photo: svcLaser, name: { es: "Bigote",            en: "Upper Lip"       }, desc: { es: "Resultados desde la primera sesión.",          en: "Visible results from the first session."  } },
        { photo: svcLaser, name: { es: "Mentón",            en: "Chin"            }, desc: { es: "Eliminación permanente del vello.",            en: "Permanent hair removal on the chin."      } },
        { photo: svcLaser, name: { es: "Axilas",            en: "Underarms"       }, desc: { es: "Piel suave y libre de vello.",                 en: "Smooth, hair-free underarms."             } },
        { photo: svcLaser, name: { es: "Piernas Completas", en: "Full Legs"       }, desc: { es: "Piernas perfectamente suaves para siempre.",  en: "Perfectly smooth legs permanently."       } },
        { photo: svcLaser, name: { es: "Zona Bikini",       en: "Bikini Area"     }, desc: { es: "Tratamiento de zona bikini clásica.",         en: "Classic bikini area treatment."           } },
        { photo: svcLaser, name: { es: "Laser Brazilian",   en: "Laser Brazilian" }, desc: { es: "Tratamiento completo zona brasileña.",        en: "Full Brazilian area treatment."           } },
        { photo: svcLaser, name: { es: "Cuerpo Completo",   en: "Full Body"       }, desc: { es: "Olvídate de la cera y la rasuradora.",        en: "Forget waxing and razors forever."        } },
      ],
    },
    {
      category: { es: "💅 Uñas & Más", en: "💅 Nails & More" },
      items: [
        { photo: pg07, name: { es: "Shellac / Gel",        en: "Shellac / Gel"       }, desc: { es: "Esmalte en gel de larga duración.",              en: "Long-lasting gel polish."              } },
        { photo: pg08, name: { es: "Pedicura",             en: "Pedicure"            }, desc: { es: "Relajante tratamiento completo de pies.",        en: "Relaxing complete foot treatment."     } },
        { photo: pg09, name: { es: "Facial Rejuvenecedor", en: "Rejuvenating Facial" }, desc: { es: "Limpieza profunda y tratamiento revitalizante.", en: "Deep cleanse and revitalizing facial." } },
      ],
    },
  ];

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      <Navbar />
      <main className="pt-20">

        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <Link to="/" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium mb-8 group link-hover"
            style={{ color: "var(--ink-mid)" }}>
            <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
            {lang === "es" ? "Volver" : "Back"}
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: "var(--pink)" }} />
            <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--ink-light)" }}>
              Pigmentarius Hair & Brow Salon
            </span>
          </div>
          <h1 className="font-serif leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            {lang === "es" ? "Todos los " : "All "}
            <em style={{ fontStyle: "italic", color: "var(--pink)" }}>
              {lang === "es" ? "Servicios" : "Services"}
            </em>
          </h1>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16">
          {allServices.map((cat) => (
            <div key={cat.category.es}>
              <h2 className="text-xs tracking-[0.35em] uppercase font-medium mb-6 pb-4"
                style={{ color: "var(--ink-light)", borderBottom: "1px solid var(--border)" }}>
                {cat.category[lang]}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {cat.items.map((item) => (
                  <ServiceCard key={item.name.es} photo={item.photo} name={item.name[lang]} desc={item.desc[lang]} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 text-center" style={{ borderTop: "1px solid var(--border)" }}>
          <h2 className="font-serif mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            {lang === "es" ? "¿Lista para reservar?" : "Ready to book?"}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: "var(--pink)" }}>
              {lang === "es" ? "Reservar Cita" : "Book Appointment"}
            </Link>
            <a href="tel:7878261684"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{ color: "var(--ink-mid)", border: "1px solid var(--border)" }}>
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
