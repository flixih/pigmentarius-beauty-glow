import { useLanguage } from "@/contexts/LanguageContext";

const itemsEs = ["Cabello", "Cejas", "Keratina", "Microblading", "Láser", "Maquillaje Permanente", "Botox Capilar", "Shellac & Gel"];
const itemsEn = ["Hair",    "Brows", "Keratin",  "Microblading", "Laser", "Permanent Makeup",     "Hair Botox",    "Shellac & Gel"];

const MarqueeStrip = () => {
  const { lang } = useLanguage();
  const items = lang === "es" ? itemsEs : itemsEn;
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/5 py-4" style={{ background: "#050505" }}>
      {/* Row 1 — left */}
      <div className="flex gap-8 animate-marquee w-max mb-3">
        {doubled.map((item, i) => (
          <span key={i} className="text-white/15 text-xs font-medium tracking-[0.35em] uppercase whitespace-nowrap flex items-center gap-6">
            {item} <span className="text-white/10">◇</span>
          </span>
        ))}
      </div>
      {/* Row 2 — right (stroke text) */}
      <div className="flex gap-8 animate-marquee-rev w-max" style={{ animationDelay: "-15s" }}>
        {doubled.map((item, i) => (
          <span key={i} className="text-xs font-bold tracking-[0.35em] uppercase whitespace-nowrap flex items-center gap-6"
            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)", color: "transparent" }}>
            {item} <span style={{ WebkitTextStroke: "1px rgba(255,255,255,0.06)" }}>◇</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
