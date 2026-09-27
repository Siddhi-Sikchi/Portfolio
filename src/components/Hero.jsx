import { profile, socials } from "../data/data.js";
import HeroIllustration from "./HeroIllustration.jsx";
import TypeText from "./TypeText.jsx";

export default function Hero({ onProjectsClick, onResumeClick, loaded }) {
  return (
    <section id="home">
      <div className="wrap hero-grid">
        <div className={`hero hero-enter-left ${loaded ? "in-view" : ""}`}>
          <span className="badge">
            <i></i> {profile.badge}
          </span>
          <h1>
            Software
            <br />
            <span className="line2">Developer</span>
          </h1>
          <div className="role">{profile.tagline}</div>
          <TypeText text={profile.description} speed={14} className="desc" />
          <div className="pills">
            {profile.skillsPreview.map((s) => (
              <span className="pill" key={s}>
                {s}
              </span>
            ))}
          </div>
          <div className="hero-btns">
            <button className="btn btn-primary" onClick={onProjectsClick}>
              📁 Projects
            </button>
            <button className="btn btn-outline" onClick={onResumeClick}>
              📄 View Resume
            </button>
            <a href="#contact" className="btn btn-outline">
              ✉ Contact
            </a>
          </div>
          <div className="socials">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" title="GitHub">GH</a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
            <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" title="LeetCode">LC</a>
          </div>
        </div>

        <div className={`hero-enter-illust ${loaded ? "in-view" : ""}`}>
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
