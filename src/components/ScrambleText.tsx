import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  trigger?: boolean; // re-trigger on change
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

const ScrambleText = ({ text, className = "", delay = 0, trigger, as: Tag = "span" }: ScrambleTextProps) => {
  const [displayed, setDisplayed] = useState(text);
  const frame = useRef(0);
  const iteration = useRef(0);

  const scramble = () => {
    const total = text.length * 3;
    const run = () => {
      setDisplayed(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < iteration.current / 3) return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (iteration.current < total) {
        iteration.current += 1;
        frame.current = requestAnimationFrame(run);
      } else {
        setDisplayed(text);
      }
    };
    iteration.current = 0;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(run);
  };

  // Run on mount after delay
  useEffect(() => {
    const t = setTimeout(scramble, delay);
    return () => { clearTimeout(t); cancelAnimationFrame(frame.current); };
  }, []);

  // Re-run when trigger changes (language switch)
  useEffect(() => {
    scramble();
  }, [text, trigger]);

  return <Tag className={className}>{displayed}</Tag>;
};

export default ScrambleText;
