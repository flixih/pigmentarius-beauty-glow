const items = [
  "Cortes de Cabello",
  "Microblading",
  "Coloración & Highlights",
  "Maquillaje Permanente",
  "Botox Capilar",
  "Tratamientos Capilares",
  "Diseño de Cejas",
  "Cambios de Imagen",
  "Manicura & Pedicura",
  "Faciales",
];

const MarqueeStrip = () => {
  const doubled = [...items, ...items];
  return (
    <div className="bg-foreground py-4 overflow-hidden">
      <div className="flex gap-10 animate-marquee w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-gold-light text-xs font-semibold tracking-[0.3em] uppercase whitespace-nowrap flex items-center gap-4"
          >
            {item}
            <span className="text-primary opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
