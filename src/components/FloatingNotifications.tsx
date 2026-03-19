import { useEffect, useState } from "react";
import { Star, Scissors, Sparkles, Zap } from "lucide-react";

// Huly-style floating notification toasts that appear/disappear
const notifications = [
  { icon: Star,     color: "hsl(40 80% 60%)",   text: { es: "Nueva reseña ⭐ 5 estrellas",         en: "New review ⭐ 5 stars"              }, sub: { es: "Añasco, Puerto Rico",      en: "Añasco, Puerto Rico"       } },
  { icon: Scissors, color: "hsl(330 85% 65%)",   text: { es: "Cita confirmada · Keratina",          en: "Appointment confirmed · Keratin"   }, sub: { es: "Mañana · 10:00 AM",        en: "Tomorrow · 10:00 AM"       } },
  { icon: Sparkles, color: "hsl(270 70% 65%)",   text: { es: "Microblading · Resultado increíble",  en: "Microblading · Amazing result"     }, sub: { es: "Clienta de PA · Windy",    en: "Client from PA · Windy"    } },
  { icon: Zap,      color: "hsl(200 80% 60%)",   text: { es: "Sesión láser completada ✓",           en: "Laser session completed ✓"         }, sub: { es: "Pigmentarius · Añasco",    en: "Pigmentarius · Añasco"     } },
];

const FloatingNotifications = () => {
  const [visible, setVisible] = useState<number[]>([]);
  const [lang] = useState<"es" | "en">("es");

  useEffect(() => {
    let idx = 0;
    const show = () => {
      const notifIdx = idx % notifications.length;
      setVisible(prev => [...prev, notifIdx]);
      setTimeout(() => setVisible(prev => prev.filter(i => i !== notifIdx)), 3500);
      idx++;
    };

    const t1 = setTimeout(() => { show(); }, 2000);
    const t2 = setTimeout(() => { show(); }, 5500);
    const t3 = setTimeout(() => { show(); }, 9000);
    const t4 = setTimeout(() => { show(); }, 13000);
    const interval = setInterval(() => { show(); }, 7000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearInterval(interval); };
  }, []);

  return (
    <div className="fixed bottom-24 left-4 z-40 flex flex-col gap-2 pointer-events-none" style={{ maxWidth: "220px" }}>
      {notifications.map((n, i) => {
        const isVisible = visible.includes(i);
        const Icon = n.icon;
        return (
          <div
            key={i}
            className="rounded-xl border border-white/10 px-3 py-2.5 flex items-center gap-2.5"
            style={{
              background: "rgba(14,14,20,0.92)",
              backdropFilter: "blur(20px)",
              boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06), 0 0 20px ${n.color}22`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0) scale(1)" : "translateX(-20px) scale(0.95)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
              pointerEvents: isVisible ? "auto" : "none",
            }}
          >
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: `${n.color}22`, color: n.color }}>
              <Icon size={13} />
            </div>
            <div className="min-w-0">
              <p className="text-white text-[11px] font-semibold leading-tight truncate">{n.text[lang]}</p>
              <p className="text-white/40 text-[9px] mt-0.5">{n.sub[lang]}</p>
            </div>
            {/* Animated dot */}
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: n.color }} />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingNotifications;
