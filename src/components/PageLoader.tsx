import { useEffect, useState } from "react";

const PageLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"letters" | "reveal" | "done">("letters");
  const [progress, setProgress] = useState(0);
  const word = "PIGMENTARIUS";

  useEffect(() => {
    const prog = setInterval(() => {
      setProgress(p => { if (p >= 100) { clearInterval(prog); return 100; } return p + Math.random() * 8 + 2; });
    }, 80);
    const t1 = setTimeout(() => setPhase("reveal"), 2200);
    const t2 = setTimeout(() => { setPhase("done"); onComplete(); }, 3000);
    return () => { clearInterval(prog); clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "var(--cream)",
        opacity: phase === "reveal" ? 0 : 1,
        transition: phase === "reveal" ? "opacity 0.8s ease" : "none",
      }}>
      {/* Letters */}
      <div className="flex items-end gap-0.5 md:gap-1 mb-8">
        {word.split("").map((letter, i) => (
          <span key={i} className="font-serif font-light block"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              animation: `loader-letter 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both`,
            }}>
            {letter}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p className="text-xs tracking-[0.4em] uppercase mb-8 font-medium"
        style={{ color: "var(--ink-light)", animation: "loader-letter 0.6s ease 0.7s both" }}>
        Hair & Brow Salon
      </p>

      {/* Progress bar */}
      <div className="w-40 md:w-56 h-px relative overflow-hidden" style={{ background: "var(--border)" }}>
        <div className="absolute inset-y-0 left-0 transition-all duration-200 ease-out"
          style={{ width: `${Math.min(progress, 100)}%`, background: "var(--pink)" }} />
      </div>

      <style>{`
        @keyframes loader-letter {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
