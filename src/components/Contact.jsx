import { useState } from "react";
import { profile, socials } from "../data/data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact from " + form.name);
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal variant="down">
          <div className="eyebrow">Contact Me</div>
          <div className="sec-title">Let's Work Together</div>
          <div className="sec-sub">Got a question or an opportunity? Send me a message and I'll get back to you soon.</div>
        </Reveal>

        <div className="contact-grid">
          <Reveal variant="left" className="panel">
            <h3>Get in Touch</h3>
            <div className="hint">Have something to discuss? Send me a message and let's talk.</div>
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label>Your Name</label>
                <input type="text" name="name" required placeholder="Enter your name" value={form.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Your Email</label>
                <input type="email" name="email" required placeholder="Enter your email" value={form.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label>Your Message</label>
                <textarea rows="4" name="message" required placeholder="Write your message here..." value={form.message} onChange={handleChange}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                📤 Send Message
              </button>
              {sent && <div className="formmsg" style={{ display: "block" }}>Thanks! A Gmail compose window just opened in a new tab with your message ready to send.</div>}
            </form>
          </Reveal>

          <Reveal variant="right" delay={100} className="panel">
            <h3>Connect With Me</h3>
            <div className="hint">Find me across the web.</div>
            <div className="connect-list">
              <a className="connect-item" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="ic">in</div>
                <div><div className="tt">LinkedIn</div><div className="sub">Let's connect</div></div>
              </a>
              <a className="connect-item" href={socials.github} target="_blank" rel="noopener noreferrer">
                <div className="ic">GH</div>
                <div><div className="tt">GitHub</div><div className="sub">Siddhi-Sikchi</div></div>
              </a>
              <a className="connect-item" href={socials.leetcode} target="_blank" rel="noopener noreferrer">
                <div className="ic">LC</div>
                <div><div className="tt">LeetCode</div><div className="sub">SiddhiSikchi22</div></div>
              </a>
              <a className="connect-item" href={`mailto:${profile.email}`}>
                <div className="ic">@</div>
                <div><div className="tt">Email</div><div className="sub">{profile.email}</div></div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
