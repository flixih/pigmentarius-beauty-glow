import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  strength?: number;
}

// Unseen-style magnetic button that warps toward cursor
const MagneticButton = ({ children, href, onClick, className = "", strength = 0.4 }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const onLeave = () => setPos({ x: 0, y: 0 });

  const Tag = href ? "a" : "button";

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="inline-block" style={{ willChange: "transform" }}>
      <Tag
        href={href}
        onClick={onClick}
        className={className}
        style={{
          display: "inline-flex",
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: pos.x === 0 && pos.y === 0
            ? "transform 0.6s cubic-bezier(0.16,1,0.3,1)"
            : "transform 0.15s ease-out",
        }}
      >
        {children}
      </Tag>
    </div>
  );
};

export default MagneticButton;
