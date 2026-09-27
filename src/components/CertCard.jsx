export default function CertCard({ title, date, issuer, description, link, comingSoon }) {
  return (
    <a
      href={comingSoon ? undefined : link}
      target={comingSoon ? undefined : "_blank"}
      rel="noopener noreferrer"
      className={`cert-card ${comingSoon ? "soon" : ""}`}
      onClick={(e) => comingSoon && e.preventDefault()}
    >
      <div className="cert-face">
        <h3>{title}</h3>
        <div className="cert-row">
          <span className="cert-date">{date}</span>
        </div>
        <p>{description || `Issued by ${issuer}.`}</p>
        <span className="card-link">
          {comingSoon ? "Certificate Coming Soon →" : "View Certificate →"}
        </span>
      </div>

      <div className="cert-preview">
        <div className="cert-visual">
          <span className="cert-seal">🎖</span>
          <div className="cert-kicker">Certificate of Completion</div>
          <div className="cert-title-big">{title}</div>
          <div className="cert-name">Siddhi Sikchi</div>
          <div className="cert-issuer">{issuer} · {date}</div>
          <span className="cert-sig" />
        </div>
        <span className="card-link cert-cta">
          {comingSoon ? "Coming Soon" : "Open Certificate ↗"}
        </span>
      </div>
    </a>
  );
}
