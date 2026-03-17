import heroSalon from "@/assets/hero-salon.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import eyebrowDesign from "@/assets/eyebrow-design.jpg";
import hairColor from "@/assets/hair-color.jpg";
import straightHair from "@/assets/straight-hair.png";
import copperHair from "@/assets/copper-hair.png";
import redCurls from "@/assets/red-curls.png";
import eyebrowCloseup from "@/assets/eyebrow-closeup.png";

// Real photos from Pigmentarius salon
const REAL_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_2 = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";
const REAL_3 = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const images = [
  { src: REAL_1, alt: "Trabajo real de Pigmentarius", label: "Transformación Capilar", featured: true },
  { src: REAL_2, alt: "Resultado real en Pigmentarius", label: "Coloración Premium" },
  { src: REAL_3, alt: "Cejas diseñadas en Pigmentarius", label: "Diseño de Cejas" },
  { src: copperHair, alt: "Coloración cobre profesional", label: "Color Cobre" },
  { src: redCurls, alt: "Rizos rojos vibrantes", label: "Color Vibrante" },
  { src: eyebrowCloseup, alt: "Cejas perfectas closeup", label: "Microblading" },
  { src: straightHair, alt: "Tratamiento alisado", label: "Tratamiento Capilar" },
  { src: hairColor, alt: "Color de cabello", label: "Highlights" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Nuestro Trabajo Real</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream">
              Galería de <span className="italic text-primary">Transformaciones</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/pigmentariushs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light text-sm font-semibold hover:text-primary transition-colors tracking-wide"
          >
            Síguenos @pigmentariushs →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                img.featured ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: img.featured ? "1/1" : "4/3" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-500 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream font-serif text-base font-semibold">{img.label}</p>
                  {img.featured && (
                    <p className="text-gold-light text-xs mt-1 tracking-wide">Pigmentarius · Añasco, PR</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
