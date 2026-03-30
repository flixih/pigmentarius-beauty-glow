import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

import g01 from "@/assets/gallery-01.png"; import g02 from "@/assets/gallery-02.png"; import g03 from "@/assets/gallery-03.png";
import g04 from "@/assets/gallery-04.png"; import g05 from "@/assets/gallery-05.png"; import g06 from "@/assets/gallery-06.png";
import g07 from "@/assets/gallery-07.png"; import g08 from "@/assets/gallery-08.png"; import g09 from "@/assets/gallery-09.png";
import pg01 from "@/assets/pg-01.webp"; import pg02 from "@/assets/pg-02.webp"; import pg03 from "@/assets/pg-03.webp";
import pg04 from "@/assets/pg-04.webp"; import pg05 from "@/assets/pg-05.webp"; import pg06 from "@/assets/pg-06.webp";
import pg07 from "@/assets/pg-07.webp"; import pg08 from "@/assets/pg-08.webp"; import pg09 from "@/assets/pg-09.webp";
import pg10 from "@/assets/pg-10.webp"; import pg11 from "@/assets/pg-11.webp"; import pg12 from "@/assets/pg-12.webp";
import pg13 from "@/assets/pg-13.webp"; import pg14 from "@/assets/pg-14.webp"; import pg15 from "@/assets/pg-15.webp"; import pg16 from "@/assets/pg-16.webp";

const photos = [g01,g02,g03,g04,g05,g06,g07,g08,g09,pg01,pg02,pg03,pg04,pg05,pg06,pg07,pg08,pg09,pg10,pg11,pg12,pg13,pg14,pg15,pg16];

const DragGallery = () => {
  const { lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0); const lastTime = useRef(0); const rafRef = useRef(0);

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(x - (trackRef.current?.offsetLeft || 0));
    setScrollLeft(trackRef.current?.scrollLeft || 0);
    lastX.current = x; lastTime.current = Date.now(); cancelAnimationFrame(rafRef.current);
  };
  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return; e.preventDefault();
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    trackRef.current.scrollLeft = scrollLeft - (x - startX - (trackRef.current.offsetLeft || 0));
    const dt = Date.now() - lastTime.current;
    if (dt > 0) setVelocity((lastX.current - x) / dt * 16);
    lastX.current = x; lastTime.current = Date.now();
  };
  const onUp = () => {
    setIsDragging(false);
    let vel = velocity;
    const coast = () => { if (!trackRef.current || Math.abs(vel) < 0.5) return; trackRef.current.scrollLeft += vel; vel *= 0.93; rafRef.current = requestAnimationFrame(coast); };
    coast();
  };

  return (
    <section id="galeria" className="py-24 md:py-32 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--pink)" }} />
              <span className="text-xs tracking-[0.3em] uppercase" style={{ color: "var(--ink-light)" }}>
                {lang === "es" ? "Nuestro Trabajo" : "Our Work"}
              </span>
            </div>
            <h2 className="font-serif leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)", fontWeight: 300, letterSpacing: "-0.02em" }}>
              {lang === "es" ? "Galería" : "Gallery"}
            </h2>
          </div>
          <span className="hidden md:block text-xs tracking-widest uppercase" style={{ color: "var(--ink-light)" }}>
            ← {lang === "es" ? "Arrastra" : "Drag"} →
          </span>
        </div>
      </div>

      <div ref={trackRef} className="flex gap-3 px-6 md:px-12 overflow-x-scroll no-scroll select-none"
        style={{ cursor: isDragging ? "grabbing" : "grab", userSelect: "none" }}
        onMouseDown={onDown} onMouseMove={onMove} onMouseUp={onUp} onMouseLeave={onUp}
        onTouchStart={onDown} onTouchMove={onMove} onTouchEnd={onUp}>
        {photos.map((src, i) => (
          <div key={i} className="flex-shrink-0 relative overflow-hidden rounded-xl group"
            style={{ width: "clamp(200px, 28vw, 340px)", aspectRatio: "3/4", transform: isDragging ? "scale(0.98)" : "scale(1)", transition: "transform 0.3s ease" }}>
            <img src={src} alt={`${i+1}`} loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: isDragging ? "scale(1.04)" : "scale(1)" }}
              draggable={false} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(26,20,16,0.6) 0%, transparent 60%)" }}>
              <span className="text-white text-xs font-medium tracking-widest">{String(i+1).padStart(2,"0")}</span>
            </div>
          </div>
        ))}
        <div className="flex-shrink-0 w-6" />
      </div>
    </section>
  );
};

export default DragGallery;
