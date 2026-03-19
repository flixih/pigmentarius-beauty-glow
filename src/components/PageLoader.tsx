import { useEffect, useState } from "react";

// Unseen-style full-screen intro loader
const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"letters" | "reveal" | "done">("letters");
  const [progress, setProgress] = useState(0);
  const word = "PIGMENTARIUS";

  useEffect(() => {
    // Count up progress
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(prog); return 100; }
        return p + Math.random() * 8 + 2;
      });
    }, 80);

    const t1 = setTimeout(() => setPhase("reveal"), 2200);
    const t2 = setTimeout(() => { setPhase("done"); onComplete(); }, 3000);

    return () => { clearInterval(prog); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "#000",
        opacity: phase === "reveal" ? 0 : 1,
        transition: phase === "reveal" ? "opacity 0.8s ease" : "none",
      }}
    >
      {/* Big letters staggered */}
      <div className="flex items-end gap-1 md:gap-2 overflow-hidden mb-8">
        {word.split("").map((letter, i) => (
          <span
            key={i}
            className="font-serif text-4xl sm:text-6xl md:text-8xl font-bold text-white block"
            style={{
              transform: "translateY(0)",
              animation: `loader-letter 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Progress line */}
      <div className="w-48 md:w-64 h-px bg-white/10 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-white transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-white/30 text-xs tracking-[0.4em] uppercase mt-4">
        {Math.min(Math.round(progress), 100)}
      </p>

      <style>{`
        @keyframes loader-letter {
          from { opacity: 0; transform: translateY(60px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
