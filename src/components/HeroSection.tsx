import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MagneticButton from "./MagneticButton";
import ScrambleText from "./ScrambleText";

const PHOTOS = [
  "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3765147/pexels-photo-3765147.jpeg?auto=compress&cs=tinysrgb&w=900",
];

export const CursorGlow = () => null;

const MobileCarousel = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % PHOTOS.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full rounded overflow-hidden mt-10" style={{ aspectRatio: "16/9" }}>
      {PHOTOS.map((src, i) => (
        <img key={i} src={src} alt="" draggable={false}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.04)" }} />
      ))}
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {PHOTOS.map((_, i) => (
          <div key={i} className="h-1 rounded-full transition-all duration-300 cursor-pointer"
            style={{ width: i === active ? "20px" : "6px", background: i === active ? "white" : "rgba(255,255,255,0.3)" }}
            onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const headlineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse glow — very faint pink that follows cursor with lag
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove);

    const animate = () => {
      glowRef.current.x += (mouse.x - glowRef.current.x) * 0.06;
      glowRef.current.y += (mouse.y - glowRef.current.y) * 0.06;
      setGlowPos({ x: glowRef.current.x, y: glowRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [mouse.x, mouse.y]);

  const headline = lang === "es" ? "Tu transformación empieza aquí" : "Your transformation starts here";

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 overflow-hidden" style={{ background: "#050505" }}>

      {/* Very faint pink mouse glow — desktop only */}
      <div className="fixed pointer-events-none z-0 hidden md:block"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(330 85% 60% / 0.07) 0%, transparent 65%)",
          transform: `translate(${glowPos.x - 250}px, ${glowPos.y - 250}px)`,
          transition: "none",
        }} />

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      <div className={`relative z-10 max-w-5xl transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>

        {/* Location tag */}
        <div className="flex items-center gap-4 mb-10 md:mb-16">
          <div className="w-6 h-px bg-white/30" />
          <span className="text-white/30 text-xs tracking-[0.4em] uppercase">Añasco, Puerto Rico</span>
        </div>

        {/* Headline — parallax on scroll + mouse tilt */}
        <div
          ref={headlineRef}
          style={{
            transform: `translateY(${scrollY * -0.18}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {/* Pink glow bloom behind text — barely visible */}
          <div className="absolute pointer-events-none hidden md:block"
            style={{
              width: "700px",
              height: "300px",
              left: "-50px",
              top: "-30px",
              background: "radial-gradient(ellipse, hsl(330 85% 55% / 0.06) 0%, transparent 70%)",
              filter: "blur(40px)",
            }} />

          <h1 className="font-serif font-bold text-white relative"
            style={{
              fontSize: "clamp(2.8rem, 8vw, 7rem)",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}>
            <ScrambleText text={headline} delay={300} trigger={lang === "es"} />
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12 md:mt-16 pt-8 border-t border-white/8">
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-sm">
            {t("hero_desc")}
          </p>
          <div className="flex items-center gap-6">
            <MagneticButton href="#contacto"
              className="inline-flex items-center gap-3 text-white text-sm font-semibold tracking-wide group link-underline">
              {t("hero_cta")}
              <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/70 transition-colors">
                <ArrowRight size={14} />
              </span>
            </MagneticButton>
            <div className="text-white/20 text-xs tracking-[0.3em] uppercase hidden md:flex flex-col gap-1">
              <span>4.8★ Google</span>
              <span>211+ Reviews</span>
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <MobileCarousel />
        </div>

        {/* Desktop floating images */}
        <div className="hidden md:grid grid-cols-2 gap-4 mt-12 max-w-lg ml-auto">
          {PHOTOS.slice(0, 2).map((src, i) => (
            <div key={i} className="overflow-hidden rounded animate-float" style={{ animationDelay: `${i * 1.2}s`, aspectRatio: "3/4" }}>
              <img src={src} alt="" className="w-full h-full object-cover opacity-75 hover:opacity-100 transition-opacity duration-500" draggable={false} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3 text-white/20">
        <div className="w-px h-12 bg-white/15 relative overflow-hidden">
          <div className="absolute top-0 w-full bg-white/60 animate-[line-reveal_2s_ease-in-out_infinite]" style={{ height: "40%" }} />
        </div>
        <span className="text-xs tracking-[0.3em] uppercase" style={{ writingMode: "vertical-lr" }}>
          {lang === "es" ? "Desplaza" : "Scroll"}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
