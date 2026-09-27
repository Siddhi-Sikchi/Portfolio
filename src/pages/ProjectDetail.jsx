import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/data.js";
import Reveal from "../components/Reveal.jsx";
import TypeText from "../components/TypeText.jsx";
import ProjectPreview from "../components/ProjectPreview.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <div className="wrap" style={{ paddingTop: 160, textAlign: "center" }}>
        <h2>Project not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: 20, display: "inline-flex" }}>
          ← Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="proj-detail">
      <header className="proj-detail-head">
        <div className="wrap proj-detail-head-inner">
          <Link to="/" className="logo">Siddhi<span>.</span></Link>
          <div className="crumbs">
            <Link to="/">Home</Link> / <Link to="/#portfolio">Projects</Link> / <span>{project.title}</span>
          </div>
        </div>
      </header>

      <section style={{ paddingTop: 130 }}>
        <div className="wrap">
          <Reveal variant="left">
            <Link to="/#portfolio" className="back-link">← Back to Projects</Link>
            <h1 className="proj-detail-title">{project.title}</h1>
          </Reveal>

          <div className="proj-detail-grid">
            <div>
              <Reveal variant="left" delay={100}>
                <TypeText text={project.longDescription} speed={10} className="about-txt" />
              </Reveal>

              <Reveal variant="up" delay={200}>
                <div className="proj-detail-stats">
                  <div className="mini-stat"><b>{project.tags.length}</b><span>Technologies Used</span></div>
                  <div className="mini-stat"><b>{project.features.length}</b><span>Key Features</span></div>
                  <div className="mini-stat"><b>{project.stats.records}</b><span>Records Analyzed</span></div>
                </div>
              </Reveal>

              <Reveal variant="up" delay={280}>
                <div className="hero-btns" style={{ marginTop: 24 }}>
                  <a className="btn btn-primary" href={project.link} target="_blank" rel="noopener noreferrer">🐙 GitHub Repository</a>
                  {project.demoLink && (
                    <a className="btn btn-outline" href={project.demoLink} target="_blank" rel="noopener noreferrer">▶ Live Demo</a>
                  )}
                </div>
              </Reveal>
            </div>

            <Reveal variant="right" delay={150}>
              <ProjectPreview stats={project.stats} />
            </Reveal>
          </div>

          <Reveal variant="up" delay={100}>
            <div className="proj-detail-block">
              <h3>⭐ Key Features</h3>
              <ul className="feature-list">
                {project.features.map((f, i) => (
                  <li key={i} style={{ transitionDelay: `${i * 70}ms` }}>{f}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="up" delay={100}>
            <div className="proj-detail-block">
              <h3>🛠 Technologies Used</h3>
              <div className="tagrow">
                {project.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer>&copy; {new Date().getFullYear()} Siddhi Sikchi. All Rights Reserved.</footer>
    </div>
  );
}
