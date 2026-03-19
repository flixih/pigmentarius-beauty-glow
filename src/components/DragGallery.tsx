import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const photos = [
  // Keratin: sleek straight shiny hair result ✓
  { src: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=700",  label: { es: "Keratina",        en: "Keratin"      } },
  // Microblading: artist applying pigment to eyebrow ✓
  { src: "https://images.pexels.com/photos/7755208/pexels-photo-7755208.jpeg?auto=compress&cs=tinysrgb&w=700",  label: { es: "Microblading",    en: "Microblading" } },
  // Brow Design: perfect eyebrows close-up ✓
  { src: "https://images.pexels.com/photos/6663356/pexels-photo-6663356.jpeg?auto=compress&cs=tinysrgb&w=700",  label: { es: "Diseño de Cejas", en: "Brow Design"  } },
  // Haircut: scissors cutting hair ✓
  { src: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=700",  label: { es: "Corte",           en: "Haircut"      } },
  // Laser: laser device on skin ✓
  { src: "https://images.pexels.com/photos/7659565/pexels-photo-7659565.jpeg?auto=compress&cs=tinysrgb&w=700",  label: { es: "Láser",           en: "Laser"        } },
  // Gel nails: nails being painted with gel ✓
  { src: "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg?auto=compress&cs=tinysrgb&w=700",  label: { es: "Uñas Gel",        en: "Gel Nails"    } },
];

const DragGallery = () => {
  const { lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafRef = useRef(0);

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(x - (trackRef.current?.offsetLeft || 0));
    setScrollLeft(trackRef.current?.scrollLeft || 0);
    lastX.current = x;
    lastTime.current = Date.now();
    cancelAnimationFrame(rafRef.current);
  };

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const dx = x - startX - (trackRef.current.offsetLeft || 0);
    trackRef.current.scrollLeft = scrollLeft - dx;

    // Track velocity
    const dt = Date.now() - lastTime.current;
    if (dt > 0) setVelocity((lastX.current - x) / dt * 16);
    lastX.current = x;
    lastTime.current = Date.now();
  };

  const onUp = () => {
    setIsDragging(false);
    // Momentum scrolling
    let vel = velocity;
    const coast = () => {
      if (!trackRef.current || Math.abs(vel) < 0.5) return;
      trackRef.current.scrollLeft += vel;
      vel *= 0.93;
      rafRef.current = requestAnimationFrame(coast);
    };
    coast();
  };

  return (
    <section id="galeria" className="py-20 md:py-32 overflow-hidden" style={{ background: "#000" }}>
      <div className="container mx-auto px-6 md:px-12 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/30 text-xs tracking-[0.4em] uppercase mb-4">{lang === "es" ? "Nuestro Trabajo" : "Our Work"}</p>
            <ScrambleHeading lang={lang} />
          </div>
          <div className="hidden md:flex items-center gap-2 text-white/30 text-xs tracking-widest uppercase select-none">
            <span>←</span>
            <span data-cursor="DRAG">{lang === "es" ? "Arrastra" : "Drag"}</span>
            <span>→</span>
          </div>
        </div>
      </div>

      {/* Drag track */}
      <div
        ref={trackRef}
        className="flex gap-4 px-6 md:px-12 overflow-x-scroll select-none"
        style={{
          scrollbarWidth: "none",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
        data-cursor="DRAG"
      >
        {photos.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden group"
            style={{
              width: "clamp(240px, 35vw, 420px)",
              aspectRatio: "3/4",
              filter: activeIdx !== null && activeIdx !== i ? "brightness(0.5)" : "brightness(1)",
              transition: "filter 0.4s ease, transform 0.4s ease",
              transform: isDragging ? "scale(0.97)" : "scale(1)",
            }}
            onMouseEnter={() => setActiveIdx(i)}
            onMouseLeave={() => setActiveIdx(null)}
          >
            <img
              src={p.src}
              alt={p.label[lang]}
              className="w-full h-full object-cover"
              style={{
                transform: isDragging ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.6s ease",
              }}
              draggable={false}
            />
            {/* Overlay */}
            <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}>
              <div>
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-1">0{i + 1}</p>
                <p className="text-white font-semibold text-lg">{p.label[lang]}</p>
              </div>
            </div>
          </div>
        ))}
        {/* Spacer */}
        <div className="flex-shrink-0 w-6" />
      </div>

      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

const ScrambleHeading = ({ lang }: { lang: "es" | "en" }) => {
  const text = lang === "es" ? "Galería" : "Gallery";
  return (
    <h2 className="font-serif text-5xl md:text-7xl font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
      {text}
    </h2>
  );
};

export default DragGallery;
