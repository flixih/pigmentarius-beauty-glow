import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  { src: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600",  label: { es: "Keratina",        en: "Keratin"      }, span: "col-span-2 md:col-span-1 row-span-2" },
  { src: "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=600",  label: { es: "Microblading",    en: "Microblading" }, span: "" },
  { src: "https://images.pexels.com/photos/3765147/pexels-photo-3765147.jpeg?auto=compress&cs=tinysrgb&w=600",  label: { es: "Diseño de Cejas", en: "Brow Design"  }, span: "" },
  { src: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600",  label: { es: "Corte",           en: "Haircut"      }, span: "" },
  { src: "https://images.pexels.com/photos/5069612/pexels-photo-5069612.jpeg?auto=compress&cs=tinysrgb&w=600",  label: { es: "Láser",           en: "Laser"        }, span: "" },
  { src: "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=600",  label: { es: "Uñas Gel",        en: "Gel Nails"    }, span: "" },
];

const GallerySection = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="galeria" className="py-20 md:py-32 relative" style={{ background: "var(--bg2)" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/50 text-xs font-medium tracking-widest uppercase mb-5">
              {t("gallery_label")}
            </div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">
              {t("gallery_title1")}{" "}
              <span className="italic" style={{ background: "linear-gradient(135deg, hsl(330 85% 70%) 0%, hsl(40 80% 65%) 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {t("gallery_title2")}
              </span>
            </h2>
          </div>
          <a href="https://instagram.com/pigmentariushs" target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold hover:text-white transition-colors whitespace-nowrap" style={{ color: "hsl(330 85% 60%)" }}>
            {t("gallery_follow")}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[200px]">
          {photos.map((p, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-xl border border-white/5 hover:border-white/15 transition-all duration-500 ${p.span}`}>
              <img src={p.src} alt={p.label[lang]} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" loading="lazy" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }}>
                <span className="text-white font-semibold text-sm">{p.label[lang]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
