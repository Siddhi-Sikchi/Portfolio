import { useEffect, useState } from "react";

export default function Preloader({ loading }) {
  const [ready, setReady] = useState(false);

  // wait one frame before starting the entrance animation so it never
  // "pops" in — it always eases in smoothly, even on the very first paint.
  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div id="preloader" className={`${ready ? "ready" : ""} ${loading ? "" : "hide"}`}>
      <div className="pre-glow" />
      <div className="pre-inner">
        <div className="pre-icons">
          <span>&lt;/&gt;</span>
          <span>👤</span>
          <span>☁</span>
        </div>
        <div className="pre-line1">Welcome To My</div>
        <div className="pre-line2">Portfolio Website</div>
        <div className="pre-url">siddhi-sikchi.dev</div>
      </div>
    </div>
  );
}
