import { Link } from "react-router-dom";
import { projects, certificates, hackathons, techStack } from "../data/data.js";
import Reveal from "./Reveal.jsx";
import CertCard from "./CertCard.jsx";

const TABS = [
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certificates" },
  { id: "hack", label: "Hackathons" },
  { id: "stack", label: "Tech Stack" },
];

const rowVariant = (i) => ["left", "up", "right"][i % 3];

export default function Portfolio({ activeTab, setActiveTab }) {
  return (
    <section id="portfolio">
      <div className="wrap">
        <Reveal variant="down">
          <div className="eyebrow">Portfolio Showcase</div>
          <div className="sec-title">My Work &amp; Journey</div>
          <div className="sec-sub">
            Explore my projects, certifications, hackathons and technical expertise — each section is a
            milestone in my learning path.
          </div>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div className="tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>

        {activeTab === "projects" && (
          <div className="tab-panel active">
            <div className="grid3">
              {projects.map((p, i) => (
                <Reveal variant={rowVariant(i)} delay={i * 120} key={p.title} className="card">
                  <div className="proj-thumb">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <div className="tagrow">
                    {p.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>{p.description}</p>
                  <div className="proj-card-links">
                    <a className="card-link" href={p.link} target="_blank" rel="noopener noreferrer">
                      {p.linkLabel} →
                    </a>
                    <Link className="card-link" to={`/project/${p.slug}`}>
                      View Details ↗
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {activeTab === "certs" && (
          <div className="tab-panel active">
            <div className="grid3">
              {certificates.map((c, i) => (
                <Reveal variant={rowVariant(i)} delay={i * 100} key={c.title} className="cert-wrap">
                  <CertCard {...c} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {activeTab === "hack" && (
          <div className="tab-panel active">
            <div className="grid3">
              {hackathons.map((h, i) => (
                <Reveal variant={rowVariant(i)} delay={i * 120} key={h.title} className="cert-wrap">
                  <CertCard {...h} />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {activeTab === "stack" && (
          <div className="tab-panel active">
            <div className="stack-grid">
              {techStack.map((t, i) => (
                <Reveal variant="scale" delay={i * 60} key={t.label} className="stack-item">
                  <div className="ic">{t.icon}</div>
                  <span>{t.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
