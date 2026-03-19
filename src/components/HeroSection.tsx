import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { palette } from "@/lib/theme";
import ownerPhoto from "@/assets/owner-wildaliz-cropped.png";
import ScrambleText from "./ScrambleText";

const PHOTOS = [
  "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/5069397/pexels-photo-5069397.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=900",
];

export const CursorGlow = () => null;

const MobileCarousel = ({ ownerPhoto: op, p }: { ownerPhoto: string; p: ReturnType<typeof palette> }) => {
  const allPhotos = [op, ...PHOTOS];
  const [active, setActive] = useState(0);
  const { lang } = useLanguage();
  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % allPhotos.length), 2800);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative w-full rounded overflow-hidden mt-10" style={{ aspectRatio: "16/9" }}>
      {allPhotos.map((src, i) => (
        <img key={i} src={src} alt="" draggable={false}
          className="absolute inset-0 w-full h-full object-cover object-top transition-all duration-700"
          style={{ opacity: i === active ? 1 : 0, transform: i === active ? "scale(1)" : "scale(1.04)" }} />
      ))}
      {active === 0 && (
        <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}>
          <p className="text-white font-semibold text-sm">Windy Arroyo</p>
          <p className="text-white/50 text-xs">{lang === "es" ? "Fundadora & Dueña · Pigmentarius" : "Founder & Owner · Pigmentarius"}</p>
        </div>
      )}
      <div className="absolute bottom-3 right-4 flex gap-1.5">
        {allPhotos.map((_, i) => (
          <div key={i} className="h-1 rounded-full transition-all duration-300 cursor-pointer"
            style={{ width: i === active ? "20px" : "6px", background: i === active ? "var(--t1)" : "var(--t3)" }}
            onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { t, lang } = useLanguage();
  const { theme } = useTheme();
  const p = palette(theme);
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const glowRef = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    const animate = () => {
      glowRef.current.x += (mouse.current.x - glowRef.current.x) * 0.06;
      glowRef.current.y += (mouse.current.y - glowRef.current.y) * 0.06;
      setGlowPos({ x: glowRef.current.x, y: glowRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafRef.current); };
  }, []);

  const strokeColor = theme === "dark" ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)";

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 overflow-hidden"
      style={{ background: p.pageBg, transition: "background 0.4s ease" }}>

      {/* Faint pink mouse glow */}
      <div className="fixed pointer-events-none z-0 hidden md:block"
        style={{ width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, hsl(330 85% 60% / 0.07) 0%, transparent 70%)",
          transform: `translate(${glowPos.x - 250}px, ${glowPos.y - 250}px)` }} />

      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "200px" }} />

      <div className={`relative z-10 max-w-5xl transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
        {/* Location */}
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <div className="w-6 h-px" style={{ background: p.textMuted }} />
          <span className="text-xs tracking-[0.4em] uppercase" style={{ color: p.textMuted }}>Añasco, Puerto Rico</span>
        </div>

        {/* Three-line headline */}
        <div style={{ transform: `translateY(${scrollY * -0.18}px)`, transition: "transform 0.05s linear" }}>
          <div className="overflow-visible mb-1">
            <h1 className="font-serif font-bold leading-none" style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: p.textPrimary }}>
              <ScrambleText text={lang === "es" ? "Cabello" : "Beautiful"} delay={300} trigger={lang === "es"} />
            </h1>
          </div>
          <div className="overflow-visible mb-1 pb-3">
            <h1 className="font-serif font-bold leading-none" style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 0.92, WebkitTextStroke: `1.5px ${strokeColor}`, color: "transparent" }}>
              <ScrambleText text={lang === "es" ? "& Cejas" : "& Brows"} delay={500} trigger={lang === "es"} />
            </h1>
          </div>
          <div className="overflow-visible">
            <h1 className="font-serif font-bold leading-none" style={{ fontSize: "clamp(3rem, 9vw, 8rem)", letterSpacing: "-0.03em", lineHeight: 0.92, color: p.textPrimary }}>
              <ScrambleText text={lang === "es" ? "Perfectas" : "Perfected"} delay={700} trigger={lang === "es"} />
            </h1>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12 md:mt-16 pt-8"
          style={{ borderTop: `1px solid ${p.border}` }}>
          <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: p.textSecondary }}>
            {t("hero_desc")}
          </p>
          <div className="flex items-center gap-6">
            <a href="#contacto"
              className="inline-flex items-center gap-3 text-sm font-semibold tracking-wide group link-underline"
              style={{ color: p.textPrimary }}>
              {t("hero_cta")}
              <span className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ border: `1px solid ${p.border}` }}>
                <ArrowRight size={14} />
              </span>
            </a>
            <div className="text-xs tracking-[0.3em] uppercase hidden md:flex flex-col gap-1" style={{ color: p.textMuted }}>
              <span>4.8★ Google</span>
              <span>211+ Reviews</span>
            </div>
          </div>
        </div>

        <div className="md:hidden"><MobileCarousel ownerPhoto={ownerPhoto} p={p} /></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 md:left-16 flex items-center gap-3" style={{ color: p.textMuted }}>
        <div className="w-px h-12 relative overflow-hidden" style={{ background: `${p.textMuted}33` }}>
          <div className="absolute top-0 w-full animate-[line-reveal_2s_ease-in-out_infinite]" style={{ height: "40%", background: p.textSecondary }} />
        </div>
        <span className="text-xs tracking-[0.3em] uppercase" style={{ writingMode: "vertical-lr" }}>
          {lang === "es" ? "Desplaza" : "Scroll"}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
