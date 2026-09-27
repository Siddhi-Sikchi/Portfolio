import { profile, stats } from "../data/data.js";
import Reveal from "./Reveal.jsx";
import TypeText from "./TypeText.jsx";

export default function About({ onProjectsClick, onResumeClick }) {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal variant="down">
          <div className="eyebrow">About Me</div>
          <div className="sec-title">Transforming Ideas Into Digital Solutions</div>
        </Reveal>

        <div className="about-top">
          <Reveal variant="left">
            <div className="about-hi">Hello, I'm</div>
            <div className="about-name">{profile.name}</div>
            <TypeText text={profile.aboutText} speed={10} className="about-txt" />
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">✉ Get In Touch</a>
              <button className="btn btn-outline" onClick={onResumeClick}>📄 View Resume</button>
              <button className="btn btn-outline" onClick={onProjectsClick}>View Projects</button>
            </div>
          </Reveal>
          <Reveal variant="right" delay={150} className="avatar-wrap">
            <div className="avatar">
              <img src={profile.photo} alt={profile.name} />
            </div>
          </Reveal>
        </div>

        <div className="stats">
          {stats.map((s, i) => (
            <Reveal variant="up" delay={i * 120} key={s.label} className="stat-card">
              <div className="stat-top">
                <div className="stat-num">{s.num}</div>
                <div className="stat-icon">{s.icon}</div>
              </div>
              <div className="stat-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
