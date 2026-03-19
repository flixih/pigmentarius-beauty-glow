import { useEffect, useRef } from "react";

// Huly-style: grid lines + floating particles + light beam
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.008;

      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Light beam (left side, like Huly screenshot)
      const beamX = W * 0.12 + Math.sin(t * 0.3) * 30;
      const grad = ctx.createLinearGradient(beamX - 40, 0, beamX + 40, H);
      grad.addColorStop(0,   "rgba(100,120,255,0)");
      grad.addColorStop(0.3, "rgba(120,100,255,0.06)");
      grad.addColorStop(0.5, "rgba(160,120,255,0.12)");
      grad.addColorStop(0.7, "rgba(120,100,255,0.06)");
      grad.addColorStop(1,   "rgba(100,120,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(beamX - 60, 0, 120, H);

      // Pink glow beam
      const beamX2 = W * 0.85 + Math.sin(t * 0.2 + 1) * 20;
      const grad2 = ctx.createLinearGradient(beamX2 - 30, 0, beamX2 + 30, H * 0.6);
      grad2.addColorStop(0,   "rgba(220,60,120,0)");
      grad2.addColorStop(0.4, "rgba(220,60,120,0.05)");
      grad2.addColorStop(0.6, "rgba(220,60,120,0.08)");
      grad2.addColorStop(1,   "rgba(220,60,120,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(beamX2 - 50, 0, 100, H * 0.6);

      // Floating particles
      particles.forEach((p) => {
        p.x += p.vx + Math.sin(t + p.y * 0.01) * 0.15;
        p.y += p.vy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,170,200,${p.alpha * (0.5 + 0.5 * Math.sin(t * 2 + p.x))})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default AnimatedBackground;
