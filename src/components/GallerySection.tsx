import { useLanguage } from "@/contexts/LanguageContext";

const REAL_1 = "https://picheapp.com/wp-content/uploads/2025/09/import-9610.jpg";
const REAL_2 = "https://picheapp.com/wp-content/uploads/2025/09/import-9611.jpg";
const REAL_3 = "https://picheapp.com/wp-content/uploads/2025/09/import-9612.jpg";

const images = [
  { src: REAL_1, label: "Transformación Capilar / Hair Transformation", featured: true },
  { src: REAL_2, label: "Coloración / Color" },
  { src: REAL_3, label: "Cejas / Brows" },
  { src: REAL_1, label: "Estilo / Styling" },
  { src: REAL_2, label: "Tratamiento / Treatment" },
  { src: REAL_3, label: "Resultados / Results" },
];

const GallerySection = () => {
  const { t } = useLanguage();
  return (
    <section id="galeria" className="py-16 md:py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-3">
          <div>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">{t("gallery_label")}</p>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-cream">
              {t("gallery_title1")} <span className="italic text-primary">{t("gallery_title2")}</span>
            </h2>
          </div>
          <a href="https://instagram.com/pigmentariushs" target="_blank" rel="noopener noreferrer"
            className="text-gold-light text-xs font-semibold hover:text-primary transition-colors tracking-wide whitespace-nowrap">
            {t("gallery_follow")}
          </a>
        </div>

        {/* Mobile: 2-col grid. Desktop: masonry-style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {images.map((img, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl ${img.featured ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
              style={{ aspectRatio: img.featured ? "1/1" : "4/3" }}>
              <img src={img.src} alt={img.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-500 flex items-end">
                <div className="p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-cream font-serif text-sm font-semibold">{img.label}</p>
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
