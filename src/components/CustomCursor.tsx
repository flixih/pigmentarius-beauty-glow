import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [clicked, setClicked] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const followerPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    let raf: number;

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };

    const animate = () => {
      followerPos.current.x += (pos.current.x - followerPos.current.x) * 0.1;
      followerPos.current.y += (pos.current.y - followerPos.current.y) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerPos.current.x - 20}px, ${followerPos.current.y - 20}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const down = () => setClicked(true);
    const up   = () => setClicked(false);

    // Detect hoverable elements
    const addHover = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach(el => {
        el.addEventListener("mouseenter", () => {
          const lbl = (el as HTMLElement).dataset.cursor || "";
          setLabel(lbl);
          followerRef.current?.classList.add("expanded");
        });
        el.addEventListener("mouseleave", () => {
          setLabel("");
          followerRef.current?.classList.remove("expanded");
        });
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    setTimeout(addHover, 500);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Small dot cursor */}
      <div ref={cursorRef} className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ background: "var(--t1)", transition: "transform 0.05s linear" }} />

      {/* Large follower ring */}
      <div ref={followerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        style={{
          width: "40px", height: "40px",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: "50%",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease",
        }}>
        {label && (
          <span className="text-white text-[9px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap absolute" style={{ top: "-20px" }}>
            {label}
          </span>
        )}
      </div>

      <style>{`
        .expanded {
          width: 70px !important;
          height: 70px !important;
          border-color: rgba(255,255,255,0.7) !important;
        }
        @media (pointer: coarse) {
          /* Hide custom cursor on touch devices */
          div[class*="fixed top-0 left-0 w-3"],
          div[class*="fixed top-0 left-0 pointer"] { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
