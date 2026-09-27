import Reveal from "../components/Reveal.jsx";

export default function ProjectPreview({ stats }) {
  return (
    <Reveal variant="scale" className="proj-preview">
      <div className="proj-preview-bar">
        <span className="dot d1"></span><span className="dot d2"></span><span className="dot d3"></span>
        <span className="proj-preview-title">model_evaluation.ipynb</span>
      </div>
      <div className="proj-preview-body">
        <div className="pp-metric">
          <div className="pp-label">Records Analyzed</div>
          <div className="pp-value">{stats.records}</div>
        </div>
        <div className="pp-bar-row">
          <div className="pp-bar-label">Decision Tree Accuracy</div>
          <div className="pp-bar-track"><div className="pp-bar-fill pp-fill-1" style={{ "--target": stats.accuracy }} /></div>
          <div className="pp-bar-pct">{stats.accuracy}</div>
        </div>
        <div className="pp-bar-row">
          <div className="pp-bar-label">Random Forest Accuracy</div>
          <div className="pp-bar-track"><div className="pp-bar-fill pp-fill-2" style={{ "--target": stats.accuracy2 }} /></div>
          <div className="pp-bar-pct">{stats.accuracy2}</div>
        </div>
        <div className="pp-scanline" />
      </div>
    </Reveal>
  );
}
