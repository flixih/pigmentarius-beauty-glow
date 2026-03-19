import { useRef, useState, useEffect } from "react";

// Huly-style floating UI preview card that appears on hover with 3D tilt
interface FloatingUICardProps {
  title: string;
  subtitle: string;
  tags?: string[];
  progress?: number;
  items?: string[];
  children: React.ReactNode;
  className?: string;
}

const FloatingUICard = ({ title, subtitle, tags = [], progress, items = [], children, className = "" }: FloatingUICardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = -((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setTilt({ x, y });
  };

  useEffect(() => {
    if (hovered) {
      const t = setTimeout(() => setPreviewVisible(true), 150);
      return () => clearTimeout(t);
    } else {
      setPreviewVisible(false);
    }
  }, [hovered]);

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }); }}
      style={{
        transform: hovered
          ? `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: hovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        transformStyle: "preserve-3d",
      }}
    >
      {children}

      {/* Floating preview UI card — Huly style */}
      <div
        className="absolute -top-4 -right-4 w-52 rounded-xl border border-white/12 pointer-events-none z-30 overflow-hidden"
        style={{
          background: "rgba(18,18,24,0.92)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)",
          opacity: previewVisible ? 1 : 0,
          transform: previewVisible
            ? "translateY(0) translateZ(40px)"
            : "translateY(8px) translateZ(40px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
        }}
      >
        {/* Card header */}
        <div className="p-3 border-b border-white/8">
          <p className="text-white text-xs font-semibold leading-tight mb-1">{title}</p>
          <p className="text-white/40 text-[10px]">{subtitle}</p>
          {tags.length > 0 && (
            <div className="flex gap-1 mt-2 flex-wrap">
              {tags.map(tag => (
                <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full border border-white/15 text-white/60" style={{ background: "var(--input-bg)" }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Progress if given */}
        {progress !== undefined && (
          <div className="px-3 py-2 border-b border-white/8">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${progress}%`, background: "linear-gradient(90deg, hsl(330 85% 55%), hsl(40 80% 55%))" }} />
              </div>
              <span className="text-white/40 text-[9px]">{progress}%</span>
            </div>
          </div>
        )}

        {/* Checklist items */}
        {items.length > 0 && (
          <div className="p-2 space-y-1">
            {items.map((item, i) => (
              <div key={item} className="flex items-center gap-2 px-1 py-1 rounded-lg" style={{ background: i === 0 ? "var(--card)" : "transparent" }}>
                <div className="w-3 h-3 rounded flex items-center justify-center flex-shrink-0 border border-white/20" style={{ background: i === 0 ? "hsl(330 85% 55%)" : "transparent" }}>
                  {i === 0 && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="var(--t1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span className={`text-[10px] ${i === 0 ? "text-white/70 line-through" : "text-white/40"}`}>{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Shimmer overlay */}
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)`,
          }}
        />
      </div>

      {/* Edge glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: "linear-gradient(135deg, hsl(330 85% 60% / 0.08) 0%, transparent 50%, hsl(40 80% 60% / 0.05) 100%)",
          border: "1px solid hsl(330 85% 60% / 0.2)",
        }}
      />
    </div>
  );
};

export default FloatingUICard;
