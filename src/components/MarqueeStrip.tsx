import { useLanguage } from "@/contexts/LanguageContext";

const items = ["Keratina", "Microblading", "Coloración", "Maquillaje Permanente", "Botox Capilar", "Diseño de Cejas", "Depilación Láser", "Sombreado de Cejas", "Brazilian Blowout", "Shellac & Gel"];

const MarqueeStrip = () => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden py-5 border-y border-white/6" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="flex gap-12 animate-marquee w-max">
        {doubled.map((item, i) => (
          <span key={i} className="text-white/30 text-xs font-semibold tracking-[0.3em] uppercase whitespace-nowrap flex items-center gap-5">
            {item}
            <span style={{ color: "hsl(330 85% 60%)", opacity: 0.6 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
