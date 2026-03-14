import heroSalon from "@/assets/hero-salon.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import eyebrowDesign from "@/assets/eyebrow-design.jpg";
import hairColor from "@/assets/hair-color.jpg";
import straightHair from "@/assets/straight-hair.png";
import copperHair from "@/assets/copper-hair.png";
import redCurls from "@/assets/red-curls.png";
import eyebrowCloseup from "@/assets/eyebrow-closeup.png";

const images = [
  { src: straightHair, alt: "Resultado de tratamiento capilar profesional", label: "Tratamiento Capilar" },
  { src: eyebrowCloseup, alt: "Diseño perfecto de cejas", label: "Diseño de Cejas" },
  { src: copperHair, alt: "Coloración profesional de cabello", label: "Color & Highlights" },
  { src: heroSalon, alt: "Interior de lujo del salón", label: "Nuestro Salón" },
  { src: redCurls, alt: "Resultado de color rojo vibrante", label: "Color Vibrante" },
  { src: hairStyling, alt: "Estilismo capilar profesional", label: "Estilismo" },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Nuestro Trabajo</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Galería de <span className="italic text-primary">Belleza</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                i === 3 ? "col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream font-serif text-lg font-semibold">{img.label}</p>
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
