import { useEffect } from "react";

export default function ResumeModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="resume-overlay" onClick={onClose}>
      <div className="resume-panel" onClick={(e) => e.stopPropagation()}>
        <div className="resume-panel-head">
          <span>Siddhi Sikchi — Resume</span>
          <div className="resume-actions">
            <a href="/resume.pdf" download className="btn btn-outline resume-dl">⬇ Download</a>
            <button className="resume-close" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
        <iframe src="/resume.pdf" title="Siddhi Sikchi Resume" className="resume-frame" />
      </div>
    </div>
  );
}
