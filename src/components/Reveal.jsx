import { useEffect, useRef, useState } from "react";

/**
 * Wraps any content and fades/slides it whenever it scrolls into view —
 * and resets + replays every time it leaves and re-enters (scrolling up or down),
 * with no reload needed.
 * variant: "up" | "down" | "left" | "right" | "scale"
 */
export default function Reveal({ children, variant = "up", delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${visible ? delay : 0}ms` }}
    >
      {children}
    </Tag>
  );
}
