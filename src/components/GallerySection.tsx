import heroSalon from "@/assets/hero-salon.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import eyebrowDesign from "@/assets/eyebrow-design.jpg";
import hairColor from "@/assets/hair-color.jpg";
import blowout from "@/assets/blowout.jpg";
import treatment from "@/assets/treatment.jpg";

const images = [
  { src: hairStyling, alt: "Beautiful hair styling result", label: "Hair Artistry" },
  { src: eyebrowDesign, alt: "Perfect eyebrow design", label: "Brow Design" },
  { src: hairColor, alt: "Professional hair coloring", label: "Color & Highlights" },
  { src: heroSalon, alt: "Luxury salon interior", label: "Our Salon" },
  { src: blowout, alt: "Professional blowout styling", label: "Blowout" },
  { src: treatment, alt: "Luxury salon treatment room", label: "Treatments" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">Our Work</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Beauty <span className="italic text-primary">Gallery</span>
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
