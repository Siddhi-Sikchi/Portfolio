function Gear({ size = 60, className = "", duration = "8s", reverse = false }) {
  const teeth = Array.from({ length: 8 });
  return (
    <div
      className={`gear-icon ${className}`}
      style={{
        width: size,
        height: size,
        animationDuration: duration,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {teeth.map((_, i) => (
        <span key={i} className="tooth" style={{ transform: `rotate(${i * 45}deg)` }} />
      ))}
      <span className="ring" />
      <span className="hole" />
    </div>
  );
}

export default function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <div className="hi-orbit hi-orbit1" />
      <div className="hi-orbit hi-orbit2" />

      {/* data lines streaming to the left */}
      <div className="hi-lines">
        <span></span><span></span><span></span><span></span>
      </div>

      {/* floating gears */}
      <Gear size={70} className="hi-gear hi-gear-a" duration="10s" />
      <Gear size={40} className="hi-gear hi-gear-b" duration="7s" reverse />
      <Gear size={30} className="hi-gear hi-gear-c" duration="6s" />

      {/* the monitor */}
      <div className="hi-monitor">
        <div className="hi-screen">
          <span className="hi-highlight" />
          <span className="hi-line" style={{ width: "78%" }} />
          <span className="hi-line" style={{ width: "60%" }} />
          <span className="hi-line" style={{ width: "70%" }} />
          <span className="hi-line" style={{ width: "45%" }} />
        </div>
        <div className="hi-stand" />
        <div className="hi-base" />
      </div>

      {/* phone with checkmark */}
      <div className="hi-phone">
        <div className="hi-check">✓</div>
      </div>

      {/* floating teal chips */}
      <div className="hi-chip hi-chip-list">
        <span></span><span></span><span></span>
      </div>
      <div className="hi-chip hi-chip-code">&lt;/&gt;</div>
      <div className="hi-chip hi-chip-cloud">⬇</div>
      <div className="hi-chip hi-chip-gear">⚙</div>
    </div>
  );
}
