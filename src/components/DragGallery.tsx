import { useRef, useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import g01 from "@/assets/gallery-01.webp";
import g02 from "@/assets/gallery-02.webp";
import g03 from "@/assets/gallery-03.webp";
import g04 from "@/assets/gallery-04.webp";
import g05 from "@/assets/gallery-05.webp";
import g06 from "@/assets/gallery-06.webp";
import g07 from "@/assets/gallery-07.webp";
import g08 from "@/assets/gallery-08.webp";
import g09 from "@/assets/gallery-09.webp";
import g10 from "@/assets/gallery-10.webp";
import g11 from "@/assets/gallery-11.webp";
import g12 from "@/assets/gallery-12.webp";
import g13 from "@/assets/gallery-13.webp";

const photos = [
  { src: g01, label: "01" },
  { src: g02, label: "02" },
  { src: g03, label: "03" },
  { src: g04, label: "04" },
  { src: g05, label: "05" },
  { src: g06, label: "06" },
  { src: g07, label: "07" },
  { src: g08, label: "08" },
  { src: g09, label: "09" },
  { src: g10, label: "10" },
  { src: g11, label: "11" },
  { src: g12, label: "12" },
  { src: g13, label: "13" },
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
              alt={p.label}
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
                <p className="text-white/50 text-sm font-semibold tracking-widest">{p.label}</p>
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
