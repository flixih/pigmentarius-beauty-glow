import { useEffect, useRef } from "react";

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

    // Fewer particles on mobile for performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 60;

    const particles = Array.from({ length: particleCount }, () => ({
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

      // Grid — slightly larger cells on mobile
      const gridSize = isMobile ? 60 : 80;
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Blue light beam — always visible including mobile
      const beamX = W * 0.15 + Math.sin(t * 0.3) * (isMobile ? 15 : 30);
      const grad = ctx.createLinearGradient(beamX - 40, 0, beamX + 40, H);
      grad.addColorStop(0, "rgba(100,120,255,0)");
      grad.addColorStop(0.4, "rgba(120,100,255,0.08)");
      grad.addColorStop(0.6, "rgba(160,120,255,0.14)");
      grad.addColorStop(1, "rgba(100,120,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(beamX - 60, 0, 120, H);

      // Pink beam — on right
      const beamX2 = W * 0.82 + Math.sin(t * 0.2 + 1) * (isMobile ? 12 : 20);
      const grad2 = ctx.createLinearGradient(beamX2 - 25, 0, beamX2 + 25, H * 0.7);
      grad2.addColorStop(0, "rgba(220,60,120,0)");
      grad2.addColorStop(0.4, "rgba(220,60,120,0.06)");
      grad2.addColorStop(0.6, "rgba(220,60,120,0.1)");
      grad2.addColorStop(1, "rgba(220,60,120,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(beamX2 - 40, 0, 80, H * 0.7);

      // Particles
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
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};

export default AnimatedBackground;
