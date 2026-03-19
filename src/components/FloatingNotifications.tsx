import { useEffect, useState } from "react";
import { Star, Scissors, Sparkles, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const notifications = [
  { icon: Star,     color: "hsl(40 80% 60%)",  text: { es: "Nueva reseña · 5 estrellas ⭐",        en: "New review · 5 stars ⭐"             }, sub: { es: "Añasco, Puerto Rico",    en: "Añasco, Puerto Rico"    } },
  { icon: Scissors, color: "hsl(330 85% 65%)", text: { es: "Cita confirmada · Keratina",            en: "Appointment confirmed · Keratin"    }, sub: { es: "Mañana · 10:00 AM",      en: "Tomorrow · 10:00 AM"    } },
  { icon: Sparkles, color: "hsl(270 70% 65%)", text: { es: "Microblading · Resultado increíble",    en: "Microblading · Amazing result"      }, sub: { es: "Clienta de PA · Windy",  en: "Client from PA · Windy" } },
  { icon: Zap,      color: "hsl(200 80% 60%)", text: { es: "Sesión láser completada ✓",             en: "Laser session completed ✓"          }, sub: { es: "Pigmentarius · Añasco", en: "Pigmentarius · Añasco"   } },
];

const FloatingNotifications = () => {
  const { lang } = useLanguage();
  const [queue, setQueue] = useState<{ id: number; notifIdx: number }[]>([]);
  const counter = { current: 0 };

  useEffect(() => {
    let idx = 0;
    const show = () => {
      const notifIdx = idx % notifications.length;
      const id = counter.current++;
      setQueue(prev => [...prev, { id, notifIdx }]);
      setTimeout(() => setQueue(prev => prev.filter(n => n.id !== id)), 3500);
      idx++;
    };

    // Stagger first appearances nicely
    const timers = [
      setTimeout(show, 2000),
      setTimeout(show, 5500),
      setTimeout(show, 9500),
      setTimeout(show, 14000),
    ];
    const interval = setInterval(show, 8000);

    return () => { timers.forEach(clearTimeout); clearInterval(interval); };
  }, []);

  return (
    <>
      {/* Mobile: bottom center */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 flex flex-col gap-2 pointer-events-none md:hidden" style={{ width: "240px" }}>
        {queue.map(({ id, notifIdx }) => {
          const n = notifications[notifIdx];
          const Icon = n.icon;
          return (
            <div key={id} className="rounded-xl border border-white/12 px-3 py-2.5 flex items-center gap-2.5 animate-fade-in-up"
              style={{ background: "rgba(14,14,20,0.95)", backdropFilter: "blur(20px)", boxShadow: `0 8px 32px rgba(0,0,0,0.6), 0 0 20px ${n.color}33` }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: `${n.color}22`, color: n.color }}>
                <Icon size={13} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-[11px] font-semibold leading-tight">{n.text[lang]}</p>
                <p className="text-white/40 text-[9px] mt-0.5">{n.sub[lang]}</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: n.color }} />
            </div>
          );
        })}
      </div>

      {/* Desktop: bottom left */}
      <div className="fixed bottom-24 left-4 z-40 hidden md:flex flex-col gap-2 pointer-events-none" style={{ maxWidth: "220px" }}>
        {queue.map(({ id, notifIdx }) => {
          const n = notifications[notifIdx];
          const Icon = n.icon;
          return (
            <div key={id} className="rounded-xl border border-white/12 px-3 py-2.5 flex items-center gap-2.5 animate-fade-in-up"
              style={{ background: "rgba(14,14,20,0.92)", backdropFilter: "blur(20px)", boxShadow: `0 8px 32px rgba(0,0,0,0.5), 0 0 20px ${n.color}22` }}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border border-white/10" style={{ background: `${n.color}22`, color: n.color }}>
                <Icon size={13} />
              </div>
              <div className="min-w-0">
                <p className="text-white text-[11px] font-semibold leading-tight truncate">{n.text[lang]}</p>
                <p className="text-white/40 text-[9px] mt-0.5">{n.sub[lang]}</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 animate-pulse" style={{ background: n.color }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FloatingNotifications;
