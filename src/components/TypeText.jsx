import { useEffect, useRef, useState } from "react";

/**
 * Types the given text out character-by-character like someone is writing it,
 * the first time it scrolls into view — and types it again every time it
 * re-enters view after scrolling away, no reload needed.
 */
export default function TypeText({ text, speed = 16, as: Tag = "p", className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.4,
      rootMargin: "0px 0px -40px 0px",
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) {
      setChars(0);
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setChars(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);

  const done = chars >= text.length;

  return (
    <Tag ref={ref} className={`type-text ${className}`}>
      {text.slice(0, chars)}
      <span className={`type-cursor ${inView && !done ? "" : "type-cursor-hide"}`}>|</span>
    </Tag>
  );
}
