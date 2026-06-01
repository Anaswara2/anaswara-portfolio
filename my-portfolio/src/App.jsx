
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Add your images here (import them if they are in your src/assets folder)
import pic1 from "./assets/polariod1.png"; 
import pic2 from "./assets/polariod2.png";
// Add your project images alongside pic1 and pic2
import proj1 from "./assets/project1.png"; // GDGOC Branding
import proj2 from "./assets/project2.png"; // Full-Stack Web App
import proj3 from "./assets/project3.png"; // Zoho Integration

import canvaLogo from "./assets/canva.png";

/* ── EmailJS config ── */
const EMAILJS_SERVICE  = "service_qj7v1qp";
const EMAILJS_TEMPLATE = "template_w4bnjj9";
const EMAILJS_KEY      = "6yXzzoPOEQmmMoNh1";

/* ══════════════════════════════════════════
   SCROLL REVEAL HOOK
══════════════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .timeline-item")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
export default function App() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const formRef = useRef();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY);
      setSent(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Oops! Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  }

  // --- TOOL DATA ---
  const designTools = [
    { name: "Photoshop", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
    { name: "Illustrator", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
{ name: "Canva", img: canvaLogo }  ];

  const techTools = [
    { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
{ name: "Zoho", img: "https://cdn.simpleicons.org/zoho/E83637" }  ];

  return (
    <>
      <style>{CSS}</style>

      {/* CHECKER BAR */}
      <div className="checker-bar" />

      {/* NAV */}
      <nav>
        <div className="nav-logo">anaswara<span>.</span>anish</div>
        <ul className="nav-links">
          {["about","skills","experience","education","projects","contact"].map((s) => (
            <li key={s}><a href={`#${s}`}>{s}</a></li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">☰</button>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {["about","skills","experience","education","projects","contact"].map((s) => (
          <a key={s} href={`#${s}`} onClick={() => setMenuOpen(false)}>{s}</a>
        ))}
      </div>

      {/* ═══ HERO ═══ */}
      <section id="hero">
        <div className="hero-pattern" />
        <div className="hero-inner">
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
  <img src={pic1} alt="Anaswara Anish" className="hero-img" />
</div>
            <div className="hero-sticker sticker-1">✦ Open to opportunities</div>
            <div className="hero-sticker sticker-2">Creative Computing</div>
            <div className="hero-sticker sticker-3">Design × Code</div>
          </div>
          <div className="hero-text">
            <div className="hello-tag"> Hello, I'm</div>
            <h1>Anaswara<br /><em>Anish</em></h1>
            <p className="hero-subtitle">
              A Creative Computing student passionate about bridging the gap between design and technology.
              Organizer at Google Developer Groups On Campus, Bath Spa University UAE.
            </p>
            <div className="hero-contacts">
              <a href="tel:0588874154" className="hero-contact-pill">0588874154</a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=anaswara268@gmail.com" target="_blank" rel="noreferrer" className="hero-contact-pill">anaswara268@gmail.com</a>            </div>
            <div className="hero-cta">
  <a href="#projects" className="btn-primary">View my work </a>
  <a href="/Anaswara_Anish_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
    Download Resume
  </a>
</div>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">About Me</span>
            <div className="section-line" />
          </div>
          <div className="about-grid">
            <div className="about-card reveal-left">
              <div className="about-avatar">
  <img src={pic2} alt="Anaswara Anish" className="about-img" />
</div>
              <div className="about-name">Anaswara Anish</div>
              <div className="about-role">Creative Computing Student</div>
              <div className="about-badges">
                <span className="badge">Designer</span>
                <span className="badge green">Developer</span>
                <span className="badge purple">GDGOC Organizer</span>
                {/* <span className="badge">Figma</span>
                <span className="badge green">MongoDB</span> */}
              </div>
            </div>
            <div className="about-body reveal-right">
              <p>Motivated second-year <strong>Creative Computing student</strong> at Bath Spa University UAE with a passion for bridging the gap between design and technology.</p>
              <p>Currently serving as the <strong>Organizer</strong> for Google Developer Groups On Campus BSU RAK, after previously leading visual storytelling and branding as the Design and Creative Lead for the student community.</p>
              <p>Gained practical industry experience through an internship at <strong>CodeLattice</strong>, building full-stack web applications and working on Zoho ecosystem integrations, as well as developing customer-centric platforms at <strong>Baniyas Optics</strong>. Eager to leverage skills in digital design, creative problem-solving, and leadership to contribute to innovative projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SKILLS ═══ */}
      <section id="skills">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Skills & Tools</span>
            <div className="section-line" />
          </div>
          <div className="skills-grid">
            
            {/* DESIGN TOOLS WITH LOGOS */}
            <div className="skill-category-card reveal delay-1">
              <div className="skill-cat-title">Design Tools</div>
              <div className="logo-grid">
                {designTools.map((tool) => (
                  <div key={tool.name} className="logo-item" title={tool.name}>
                    <img src={tool.img} alt={tool.name} />
                    <span className="logo-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TECHNICAL TOOLS WITH LOGOS */}
            <div className="skill-category-card green-card reveal delay-2">
              <div className="skill-cat-title green-title">Technical</div>
              <div className="logo-grid">
                {techTools.map((tool) => (
                  <div key={tool.name} className="logo-item" title={tool.name}>
                    <img src={tool.img} alt={tool.name} />
                    <span className="logo-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="skill-category-card purple-card reveal delay-3">
              <div className="skill-cat-title purple-title">Soft Skills</div>
              <div className="skill-pills">
                {["Leadership","Creative Direction","Team Collaboration","Project Management","Visual Storytelling"].map(s=><span key={s} className="skill-pill purple-pill">{s}</span>)}
              </div>
            </div>

            {/* LANGUAGES */}
            <div className="skill-category-card blue-card reveal delay-4">
              <div className="skill-cat-title blue-title">Languages</div>
              <div className="skill-pills">
                {["English","Malayalam","Hindi","Arabic"].map(s=><span key={s} className="skill-pill blue-pill">{s}</span>)}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Experience</span>
            <div className="section-line" />
          </div>
          <div className="timeline">
            
            {/* ITEM 1: GDGOC Organizer */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="tl-card">
                <div className="tl-company">Google Developer Groups On Campus (GDGOC)</div>
                <div className="tl-role">Organizer - United Arab Emirates</div>
                <div className="tl-date">May 2026 - Present</div>
                <ul>
                  <li>Oversee chapter operations, manage team coordination, and facilitate tech-focused events for the student community.</li>
                </ul>
                <div className="project-tags" style={{marginTop:"0.85rem"}}>
                  <span className="project-tag">Leadership</span>
                  <span className="project-tag">Community Management</span>
                </div>
              </div>
            </div>

            {/* ITEM 2: Baniyas Optics */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="tl-card purple-tl">
                <div className="tl-company">Baniyas Optics</div>
                <div className="tl-role purple-role">Web Developer Intern - Hybrid (Sharjah)</div>
                <div className="tl-date">Mar 2026 - May 2026</div>
                <ul>
                  <li>Led the design and implementation of a customer-centric web application for the optical store.</li>
                  <li>Managed end-to-end development, translating client requirements into UI/UX prototypes in Figma and handling backend integrations.</li>
                </ul>
                <div className="project-tags" style={{marginTop:"0.85rem"}}>
                  <span className="project-tag ptag">Web Application Development</span>
                  <span className="project-tag ptag">WebDev</span>
                </div>
              </div>
            </div>

            {/* ITEM 3: GDGOC Design & Creative Lead */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="tl-card blue-tl">
                <div className="tl-company">Google Developer Groups On Campus (GDGOC)</div>
                <div className="tl-role blue-role">Design & Creative Lead - United Arab Emirates</div>
                <div className="tl-date">Aug 2025 - May 2026</div>
                <ul>
                  <li>Spearheaded visual storytelling, poster design, and branding initiatives for campus events, workshops, and social media campaigns.</li>
                  <li>Collaborated with cross-functional teams to ensure consistent branding and engaging user experiences for the student community.</li>
                </ul>
                <div className="project-tags" style={{marginTop:"0.85rem"}}>
                  <span className="project-tag btag">Design</span>
                  <span className="project-tag btag">Poster Design</span>
                  <span className="project-tag btag">Branding</span>
                </div>
              </div>
            </div>

            {/* ITEM 4: CodeLattice */}
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="tl-card green-tl">
                <div className="tl-company">CodeLattice</div>
                <div className="tl-role green-role">Software Developer Intern - Remote (Dubai)</div>
                <div className="tl-date">Jun 2025 - Aug 2025</div>
                <ul>
                  <li>Developed full-stack web applications utilizing ReactJS for frontend interfaces and MongoDB for backend database management.</li>
                  <li>Worked on Zoho ecosystem integrations and customizations to streamline business workflows.</li>
                  <li>Collaborated with the development team to design and implement scalable technical solutions.</li>
                </ul>
                <div className="project-tags" style={{marginTop:"0.85rem"}}>
                  <span className="project-tag gtag">ReactJS</span>
                  <span className="project-tag gtag">MongoDB</span>
                  <span className="project-tag gtag">Software Testing</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section id="education">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Education</span>
            <div className="section-line" />
          </div>
          <div className="edu-stack">
            <div className="edu-card reveal">
  <div className="edu-icon">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--green-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  </div>
  <div>
    <div className="edu-school">Bath Spa University UAE, RAK</div>
    <div className="edu-degree">BSc in Creative Computing (Year 2 / Level 5)</div>
    <div className="edu-sub">Currently enrolled</div>
    <div style={{ color: "var(--pink-deep)", fontSize: "0.85rem", fontWeight: "800", marginTop: "6px" }}>
       Academic Excellence Awardee
    </div>
    <div className="tl-date" style={{marginTop:"0.75rem"}}>Present</div>
  </div>
</div>
            <div className="edu-card pink-edu reveal delay-2">
              <div className="edu-icon pink-icon">
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--pink-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19V9l8-5 8 5v10" />
    <path d="M14 22v-5a2 2 0 0 0-4 0v5" />
    <path d="M8 22h8" />
  </svg>
</div>
              <div>
                <div className="edu-school">Gulf Model School, Dubai</div>
                <div className="edu-degree pink-degree">High School Diploma</div>
                <div className="tl-date" style={{marginTop:"0.75rem"}}>2024 – 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Projects</span>
            <div className="section-line" />
          </div>
          <div className="projects-grid">
            <div className="project-card reveal delay-1">
              <div className="project-thumb">
  <img src={proj1} alt="GDGOC Campus Branding" className="project-img" />
</div>
              <div className="project-info">
                <div className="project-title">GDGOC Campus Branding</div>
                <div className="project-desc">Led the creation of a cohesive visual identity and social media campaign assets for Google Developer Groups On Campus events and workshops.</div>
                <div className="project-tags">
                  <span className="project-tag">Branding</span>
                  <span className="project-tag">Figma</span>
                  <span className="project-tag">Illustrator</span>
                </div>
              </div>
            </div>
            <div className="project-card reveal delay-2">
              <div className="project-thumb green-thumb">
  <img src={proj2} alt="Full-Stack Web App" className="project-img" />
</div>
              <div className="project-info">
                <div className="project-title">Full-Stack Web App</div>
                <div className="project-desc">Built a full-stack web application at Baniyas Optics & CodeLattice using ReactJS for the frontend and MongoDB for backend data management.</div>
                <div className="project-tags">
                  <span className="project-tag gtag">ReactJS</span>
                  <span className="project-tag gtag">MongoDB</span>
                  <span className="project-tag gtag">Full-Stack</span>
                </div>
              </div>
            </div>
            <div className="project-card reveal delay-3">
              <div className="project-thumb purple-thumb">
  <img src={proj3} alt="Zoho Ecosystem Integration" className="project-img" />
</div>
              <div className="project-info">
                <div className="project-title">Zoho Ecosystem Integration</div>
                <div className="project-desc">Worked on Zoho platform customizations and integrations to streamline client business workflows at CodeLattice.</div>
                <div className="project-tags">
                  <span className="project-tag ptag">Zoho</span>
                  <span className="project-tag ptag">Integration</span>
                  <span className="project-tag btag">Workflow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact">
        <div className="contact-pattern" />
        <div className="container contact-inner">
          <div className="section-header reveal">
            <span className="section-label">Let's Connect!</span>
            <div className="section-line" />
          </div>
          <div className="contact-grid">
            <div className="contact-text reveal-left">
              <h2>Got a project <em>in mind?</em></h2>
              <p>I'd love to collaborate on something creative and impactful; whether it's a design project, a web app, or anything at the intersection of design and technology!</p>
              <div className="contact-pill-list">
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=anaswara268@gmail.com" target="_blank" rel="noreferrer" className="contact-pill">anaswara268@gmail.com</a>                <a href="tel:0588874154" className="contact-pill">0588874154</a>
                <a href="https://maps.google.com/?q=Dubai,UAE" target="_blank" rel="noreferrer" className="contact-pill">Dubai, United Arab Emirates</a>
              </div>
            </div>
            <div className="reveal-right delay-2">
              <div className="contact-form-card">
                {sent ? (
                  <div className="form-success">
                    <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
  <svg 
    width="56" 
    height="56" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="var(--pink-deep)" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
</div>
                    <h3 style={{fontFamily:"DM Serif Display,serif",color:"var(--pink-deep)",marginBottom:"0.5rem"}}>Message sent!</h3>
                    <p style={{color:"var(--text2)",fontSize:"0.95rem"}}>Thanks for reaching out - I'll get back to you soon!</p>
                    <button className="form-submit" style={{marginTop:"1.5rem"}} onClick={()=>setSent(false)}>Send another</button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label>Your Name</label>
                      <input name="from_name" type="text" placeholder="Anaswara Anish" value={formState.name} onChange={e=>setFormState(p=>({...p,name:e.target.value}))} required />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input name="reply_to" type="email" placeholder="anu@email.com" value={formState.email} onChange={e=>setFormState(p=>({...p,email:e.target.value}))} required />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea name="message" placeholder="Tell me about your project..." value={formState.message} onChange={e=>setFormState(p=>({...p,message:e.target.value}))} required />
                    </div>
                    {error && <p className="form-error">{error}</p>}
                    <button type="submit" className="form-submit" disabled={sending}>
                      {sending ? "Sending... " : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-checker" />
        <p><strong>Anaswara Anish</strong> · 2026</p>
        <p style={{marginTop:"0.4rem"}}>Creative Computing Student · Designer · Developer</p>
      </footer>
    </>
  );
}

/* ══════════════════════════════════════════
   ALL CSS
══════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Nunito:wght@400;600;700;800;900&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --pink:#F9C6D7; --pink-dark:#E07A9A; --pink-deep:#C94F7A;
  --green:#B5CE7A; --green-dark:#7A9E3A; --green-deep:#4A6B1A;
  --cream:#FEF6EE; --cream2:#FDF0E6;
  --yellow:#F9E27A; --yellow-dark:#D4A017;
  --purple:#E8D5F5; --purple-dark:#9B59B6; --purple-deep:#6C3483;
  --blue:#D5EAF9; --blue-dark:#3498DB; --blue-deep:#1A5276;
  --text:#2A1A2E; --text2:#5A3A5E; --text3:#8A6A8E; --white:#fff;
}
html { scroll-behavior: smooth; }
body { background: var(--cream); font-family: 'Nunito', sans-serif; color: var(--text); overflow-x: hidden; }
.checker-bar { height:22px; background-image: repeating-linear-gradient(90deg,var(--pink) 0,var(--pink) 18px,var(--green) 18px,var(--green) 36px); position:sticky; top:0; z-index:100; }
nav { background:var(--white); border-bottom:2px solid var(--pink); display:flex; align-items:center; justify-content:space-between; padding:0.75rem 3rem; position:sticky; top:22px; z-index:99; box-shadow:0 2px 12px rgba(200,80,120,0.08); }
.nav-logo { font-family:'DM Serif Display',serif; font-size:1.5rem; color:var(--pink-deep); }
.nav-logo span { color:var(--green-dark); }
.nav-links { display:flex; gap:1.5rem; list-style:none; }
.nav-links a { font-size:0.85rem; font-weight:700; text-decoration:none; color:var(--text2); text-transform:uppercase; letter-spacing:0.08em; transition:color 0.2s; padding:4px 0; border-bottom:2px solid transparent; }
.nav-links a:hover { color:var(--pink-deep); border-bottom-color:var(--pink-deep); }
.hamburger { display:none; background:none; border:2px solid var(--pink-dark); border-radius:8px; padding:6px 10px; cursor:pointer; font-size:1.2rem; color:var(--pink-deep); }
.mobile-menu { display:none; flex-direction:column; background:var(--white); border-bottom:2px solid var(--pink); box-shadow:0 4px 12px rgba(200,80,120,0.1); }
.mobile-menu.open { display:flex; }
.mobile-menu a { padding:0.85rem 2rem; font-size:0.9rem; font-weight:700; text-decoration:none; color:var(--text2); text-transform:uppercase; letter-spacing:0.08em; border-bottom:1px solid var(--pink); transition:background 0.2s; }
.mobile-menu a:hover { background:var(--pink); }
section { padding:5rem 0; }
.container { max-width:1100px; margin:0 auto; padding:0 2rem; }
#hero { background:var(--pink); padding:0; min-height:92vh; display:flex; align-items:center; flex-direction:column; justify-content:center; position:relative; overflow:hidden; }
.hero-pattern { position:absolute; inset:0; background-image:radial-gradient(circle,var(--pink-dark) 1.5px,transparent 1.5px); background-size:28px 28px; opacity:0.18; }
.hero-inner { display:grid; grid-template-columns:1fr 1.1fr; align-items:center; gap:4rem; width:100%; max-width:1100px; margin:0 auto; padding:4rem 2rem; position:relative; z-index:1; }
.hero-photo-wrap { position:relative; display:flex; justify-content:center; }
.hero-photo-frame { width:300px; height:360px; background:var(--white); border:3px solid var(--pink-dark); border-radius:16px; transform:rotate(-3deg); box-shadow:8px 8px 0 var(--pink-dark); overflow:hidden; }
.hero-img { width:100%; height:100%; object-fit:cover; display:block; }
.about-img { width:100%; height:100%; object-fit:cover; display:block; border-radius:50%; }
.hero-sticker { position:absolute; background:var(--yellow); border:2px solid var(--yellow-dark); border-radius:50px; font-size:0.72rem; font-weight:800; padding:6px 14px; color:var(--yellow-dark); transform:rotate(6deg); box-shadow:3px 3px 0 var(--yellow-dark); white-space:nowrap; }
.sticker-1 { top:-12px; right:-10px; }
.sticker-2 { bottom:-10px; left:-10px; transform:rotate(-5deg); background:var(--green); border-color:var(--green-dark); color:var(--green-deep); }
.sticker-3 { top:45%; right:-30px; transform:rotate(8deg); background:var(--purple); border-color:var(--purple-dark); color:var(--purple-deep); font-size:0.65rem; }
.hello-tag { display:inline-block; background:var(--green); border:2px solid var(--green-dark); border-radius:50px; font-size:0.8rem; font-weight:800; padding:5px 18px; color:var(--green-deep); margin-bottom:1rem; box-shadow:3px 3px 0 var(--green-dark); }
.hero-text h1 { font-family:'DM Serif Display',serif; font-size:clamp(2.4rem,5vw,4.2rem); line-height:1.05; color:var(--text); margin-bottom:0.5rem; }
.hero-text h1 em { font-style:italic; color:var(--pink-deep); }
.hero-subtitle { font-size:1rem; line-height:1.75; color:var(--text2); margin:1.2rem 0 1.8rem; max-width:440px; }
.hero-contacts { display:flex; flex-wrap:wrap; gap:0.75rem; margin-bottom:2rem; }
.hero-contact-pill { display:flex; align-items:center; gap:6px; background:var(--white); border:2px solid var(--pink-dark); border-radius:50px; padding:7px 16px; font-size:0.8rem; font-weight:700; color:var(--pink-deep); box-shadow:3px 3px 0 var(--pink-dark); text-decoration:none; transition:transform 0.15s,box-shadow 0.15s; }
.hero-contact-pill:hover { transform:translate(-2px,-2px); box-shadow:5px 5px 0 var(--pink-dark); }
.btn-primary { display:inline-flex; align-items:center; gap:8px; background:var(--pink-deep); color:var(--white); border:2px solid var(--text); border-radius:50px; padding:12px 28px; font-size:0.95rem; font-weight:800; text-decoration:none; box-shadow:4px 4px 0 var(--text); transition:transform 0.15s,box-shadow 0.15s; cursor:pointer; }
.btn-primary:hover { transform:translate(-2px,-2px); box-shadow:6px 6px 0 var(--text); }
.btn-secondary { display:inline-flex; align-items:center; gap:8px; background:var(--white); color:var(--text); border:2px solid var(--text); border-radius:50px; padding:12px 28px; font-size:0.95rem; font-weight:800; text-decoration:none; box-shadow:4px 4px 0 var(--text); transition:transform 0.15s,box-shadow 0.15s; cursor:pointer; }
.btn-secondary:hover { transform:translate(-2px,-2px); box-shadow:6px 6px 0 var(--text); }
.hero-cta { display:flex; flex-wrap:wrap; gap:0.75rem; align-items:center; }
.scroll-indicator { position:absolute; bottom:2rem; left:50%; transform:translateX(-50%); display:flex; flex-direction:column; align-items:center; gap:6px; color:var(--pink-deep); font-size:0.75rem; font-weight:700; animation:bounce 2s infinite; text-transform:uppercase; letter-spacing:0.08em; z-index:1; }
.scroll-arrow { width:28px; height:28px; border:2px solid var(--pink-deep); border-radius:50%; display:flex; align-items:center; justify-content:center; }
@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
.section-header { display:flex; align-items:center; gap:1rem; margin-bottom:3rem; }
.section-label { font-family:'DM Serif Display',serif; font-size:clamp(1.8rem,4vw,2.8rem); font-style:italic; color:var(--pink-deep); }
.section-line { flex:1; height:3px; background:repeating-linear-gradient(90deg,var(--pink-dark) 0,var(--pink-dark) 8px,transparent 8px,transparent 14px); border-radius:2px; }.about-grid { display:grid; grid-template-columns:1fr 1.6fr; gap:3rem; align-items:center; }
.about-card { background:var(--pink); border:2px solid var(--pink-dark); border-radius:20px; padding:2rem; box-shadow:6px 6px 0 var(--pink-dark); text-align:center; }
.about-avatar { width:110px; height:110px; border-radius:50%; border:3px solid var(--white); margin:0 auto 1rem; box-shadow:4px 4px 0 var(--pink-dark); overflow:hidden; }
.about-name { font-family:'DM Serif Display',serif; font-size:1.4rem; color:var(--text); margin-bottom:0.3rem; }
.about-role { font-size:0.85rem; font-weight:700; color:var(--pink-deep); text-transform:uppercase; letter-spacing:0.08em; }
.about-badges { display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:center; margin-top:1rem; }
.badge { background:var(--white); border:2px solid var(--pink-dark); border-radius:50px; padding:4px 14px; font-size:0.75rem; font-weight:700; color:var(--pink-deep); box-shadow:2px 2px 0 var(--pink-dark); }
.badge.green { background:var(--green); border-color:var(--green-dark); color:var(--green-deep); box-shadow:2px 2px 0 var(--green-dark); }
.badge.purple { background:var(--purple); border-color:var(--purple-dark); color:var(--purple-deep); box-shadow:2px 2px 0 var(--purple-dark); }
.about-body p { font-size:1rem; line-height:1.75; color:var(--text2); margin-bottom:1rem; }
#skills { background:var(--cream2); }
.skills-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:1.5rem; }
.skill-category-card { background:var(--white); border:2px solid var(--pink-dark); border-radius:20px; padding:1.75rem; box-shadow:5px 5px 0 var(--pink-dark); transition:transform 0.2s,box-shadow 0.2s; }
.skill-category-card:hover { transform:translate(-3px,-3px); box-shadow:8px 8px 0 var(--pink-dark); }
.skill-category-card.green-card { border-color:var(--green-dark); box-shadow:5px 5px 0 var(--green-dark); }
.skill-category-card.green-card:hover { box-shadow:8px 8px 0 var(--green-dark); }
.skill-category-card.purple-card { border-color:var(--purple-dark); box-shadow:5px 5px 0 var(--purple-dark); }
.skill-category-card.purple-card:hover { box-shadow:8px 8px 0 var(--purple-dark); }
.skill-category-card.blue-card { border-color:var(--blue-dark); box-shadow:5px 5px 0 var(--blue-dark); }
.skill-category-card.blue-card:hover { box-shadow:8px 8px 0 var(--blue-dark); }
.skill-cat-title { font-size:0.75rem; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:var(--pink-deep); margin-bottom:1rem; display:flex; align-items:center; gap:8px; }
.skill-cat-title::before { content:''; display:block; width:10px; height:10px; background:var(--pink-dark); border-radius:50%; flex-shrink:0; }
.skill-cat-title.green-title { color:var(--green-deep); } .skill-cat-title.green-title::before { background:var(--green-dark); }
.skill-cat-title.purple-title { color:var(--purple-deep); } .skill-cat-title.purple-title::before { background:var(--purple-dark); }
.skill-cat-title.blue-title { color:var(--blue-deep); } .skill-cat-title.blue-title::before { background:var(--blue-dark); }

/* --- LOGO GRID CSS --- */
.logo-grid { display: flex; flex-wrap: wrap; gap: 1.25rem; }
.logo-item { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; width: 64px; }
.logo-item img { width: 42px; height: 42px; object-fit: contain; transition: transform 0.2s, filter 0.2s; }
.logo-item:hover img { transform: translateY(-4px) scale(1.05); filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.1)); }
.logo-name { font-size: 0.65rem; font-weight: 800; color: var(--text2); text-align: center; line-height: 1.1; margin-top: 2px; }

.skill-pills { display:flex; flex-wrap:wrap; gap:0.6rem; }
.skill-pill { background:var(--pink); border:2px solid var(--pink-dark); border-radius:50px; padding:6px 16px; font-size:0.82rem; font-weight:700; color:var(--pink-deep); box-shadow:2px 2px 0 var(--pink-dark); }
.skill-pill.green-pill { background:var(--green); border-color:var(--green-dark); color:var(--green-deep); box-shadow:2px 2px 0 var(--green-dark); }
.skill-pill.purple-pill { background:var(--purple); border-color:var(--purple-dark); color:var(--purple-deep); box-shadow:2px 2px 0 var(--purple-dark); }
.skill-pill.blue-pill { background:var(--blue); border-color:var(--blue-dark); color:var(--blue-deep); box-shadow:2px 2px 0 var(--blue-dark); }
#experience { background:var(--white); }
.timeline { position:relative; padding-left:2.5rem; }
.timeline::before { content:''; position:absolute; left:0; top:8px; bottom:8px; width:3px; background:repeating-linear-gradient(180deg,var(--pink-dark) 0,var(--pink-dark) 8px,transparent 8px,transparent 14px); border-radius:2px; }
.timeline-item { position:relative; margin-bottom:2.5rem; opacity:0; transform:translateX(-20px); transition:opacity 0.5s ease,transform 0.5s ease; }
.timeline-item.visible { opacity:1; transform:translateX(0); }
.timeline-dot { position:absolute; left:-2.85rem; top:6px; width:16px; height:16px; background:var(--pink-dark); border:3px solid var(--white); border-radius:50%; box-shadow:0 0 0 2px var(--pink-dark); }
.tl-card { background:var(--cream); border:2px solid var(--pink-dark); border-radius:16px; padding:1.5rem 1.75rem; box-shadow:4px 4px 0 var(--pink-dark); }
.tl-card.green-tl { border-color:var(--green-dark); box-shadow:4px 4px 0 var(--green-dark); }
.tl-card.purple-tl { border-color:var(--purple-dark); box-shadow:4px 4px 0 var(--purple-dark); }
.tl-card.blue-tl { border-color:var(--blue-dark); box-shadow:4px 4px 0 var(--blue-dark); }
.tl-company { font-size:1.1rem; font-weight:800; color:var(--text); margin-bottom:2px; }
.tl-role { font-size:0.9rem; font-weight:700; color:var(--pink-deep); }
.tl-role.green-role { color:var(--green-deep); }
.tl-role.purple-role { color:var(--purple-deep); }
.tl-role.blue-role { color:var(--blue-deep); }
.tl-date { display:inline-block; margin:0.6rem 0; background:var(--yellow); border:2px solid var(--yellow-dark); border-radius:50px; padding:3px 14px; font-size:0.75rem; font-weight:800; color:var(--yellow-dark); box-shadow:2px 2px 0 var(--yellow-dark); }
.tl-card ul { padding-left:1.2rem; margin-top:0.5rem; }
.tl-card li { font-size:0.9rem; line-height:1.65; color:var(--text2); margin-bottom:4px; }
#education { background:var(--cream2); }
.edu-stack { display:flex; flex-direction:column; gap:1.5rem; max-width:720px; }
.edu-card { background:var(--white); border:2px solid var(--green-dark); border-radius:20px; padding:1.75rem 2rem; box-shadow:6px 6px 0 var(--green-dark); display:grid; grid-template-columns:auto 1fr; gap:1.5rem; align-items:center; }
.edu-card.pink-edu { border-color:var(--pink-dark); box-shadow:6px 6px 0 var(--pink-dark); }
.edu-icon { width:64px; height:64px; border-radius:14px; background:var(--green); border:2px solid var(--green-dark); display:flex; align-items:center; justify-content:center; font-size:1.75rem; box-shadow:3px 3px 0 var(--green-dark); flex-shrink:0; }
.edu-icon.pink-icon { background:var(--pink); border-color:var(--pink-dark); box-shadow:3px 3px 0 var(--pink-dark); }
.edu-school { font-size:1.05rem; font-weight:800; color:var(--text); }
.edu-degree { font-size:0.95rem; font-weight:700; color:var(--green-deep); margin:2px 0; }
.edu-degree.pink-degree { color:var(--pink-deep); }
.edu-sub { font-size:0.85rem; color:var(--text3); }
#projects { background:var(--white); }
.projects-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(280px,1fr)); gap:1.5rem; }
.project-card { background:var(--cream); border:2px solid var(--pink-dark); border-radius:20px; overflow:hidden; box-shadow:5px 5px 0 var(--pink-dark); transition:transform 0.2s,box-shadow 0.2s; cursor:pointer; }
.project-card:hover { transform:translate(-4px,-4px); box-shadow:9px 9px 0 var(--pink-dark); }
.project-thumb { height:160px; background:var(--pink); border-bottom:2px solid var(--pink-dark); overflow:hidden; }
.project-thumb.green-thumb { background:var(--green); border-color:var(--green-dark); }
.project-thumb.purple-thumb { background:var(--purple); border-color:var(--purple-dark); }
.project-info { padding:1.25rem 1.5rem; }
.project-title { font-size:1rem; font-weight:800; color:var(--text); margin-bottom:4px; }
.project-desc { font-size:0.85rem; color:var(--text2); line-height:1.55; margin-bottom:0.75rem; }
.project-tags { display:flex; flex-wrap:wrap; gap:0.4rem; }
.project-tag { background:var(--pink); border:1.5px solid var(--pink-dark); border-radius:50px; padding:3px 12px; font-size:0.72rem; font-weight:700; color:var(--pink-deep); }
.project-tag.gtag { background:var(--green); border-color:var(--green-dark); color:var(--green-deep); }
.project-tag.ptag { background:var(--purple); border-color:var(--purple-dark); color:var(--purple-deep); }
.project-tag.btag { background:var(--blue); border-color:var(--blue-dark); color:var(--blue-deep); }
.project-img { width: 100%; height: 100%; object-fit: cover; display: block; }
#contact { background:var(--pink); position:relative; overflow:hidden; }
.contact-pattern { position:absolute; inset:0; background-image:radial-gradient(circle,var(--pink-dark) 1.5px,transparent 1.5px); background-size:28px 28px; opacity:0.2; }
.contact-inner { position:relative; z-index:1; }
.contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:3rem; align-items:start; }
.contact-text h2 { font-family:'DM Serif Display',serif; font-size:2.2rem; color:var(--text); margin-bottom:1rem; }
.contact-text h2 em { color:var(--pink-deep); }
.contact-text p { font-size:1rem; color:var(--text2); line-height:1.7; margin-bottom:1.5rem; }
.contact-pill-list { display:flex; flex-direction:column; gap:0.75rem; }
.contact-pill { display:flex; align-items:center; gap:12px; background:var(--white); border:2px solid var(--pink-dark); border-radius:50px; padding:10px 20px; font-size:0.88rem; font-weight:700; color:var(--text); box-shadow:3px 3px 0 var(--pink-dark); text-decoration:none; width:fit-content; transition:transform 0.15s,box-shadow 0.15s; }
.contact-pill:hover { transform:translate(-2px,-2px); box-shadow:5px 5px 0 var(--pink-dark); }
.contact-form-card { background:var(--white); border:2px solid var(--pink-dark); border-radius:20px; padding:2rem; box-shadow:6px 6px 0 var(--pink-dark); }
.form-group { margin-bottom:1.2rem; }
.form-group label { display:block; font-size:0.8rem; font-weight:800; text-transform:uppercase; letter-spacing:0.08em; color:var(--pink-deep); margin-bottom:6px; }
.form-group input, .form-group textarea { width:100%; background:var(--cream); border:2px solid var(--pink-dark); border-radius:10px; padding:10px 14px; font-family:'Nunito',sans-serif; font-size:0.9rem; color:var(--text); outline:none; transition:border-color 0.2s,box-shadow 0.2s; }
.form-group input:focus, .form-group textarea:focus { border-color:var(--pink-deep); box-shadow:3px 3px 0 var(--pink-deep); }
.form-group textarea { resize:vertical; min-height:110px; }
.form-submit { width:100%; background:var(--pink-deep); color:var(--white); border:2px solid var(--text); border-radius:50px; padding:12px; font-family:'Nunito',sans-serif; font-size:0.95rem; font-weight:800; box-shadow:4px 4px 0 var(--text); cursor:pointer; transition:transform 0.15s,box-shadow 0.15s; }
.form-submit:hover:not(:disabled) { transform:translate(-2px,-2px); box-shadow:6px 6px 0 var(--text); }
.form-submit:disabled { opacity:0.7; cursor:not-allowed; }
.form-error { color:var(--pink-deep); font-size:0.85rem; font-weight:700; margin-bottom:0.75rem; background:var(--pink); border:1.5px solid var(--pink-dark); border-radius:10px; padding:8px 14px; }
.form-success { text-align:center; padding:1rem 0; }
footer { background:var(--text); color:var(--white); padding:2rem; text-align:center; }
.footer-checker { height:16px; background-image:repeating-linear-gradient(90deg,var(--pink) 0,var(--pink) 16px,var(--green) 16px,var(--green) 32px); margin-bottom:1.5rem; }
footer p { font-size:0.85rem; opacity:0.7; }
footer strong { opacity:1; color:var(--pink); }
.reveal { opacity:0; transform:translateY(30px); transition:opacity 0.6s ease,transform 0.6s ease; }
.reveal.visible { opacity:1; transform:translateY(0); }
.reveal-left { opacity:0; transform:translateX(-30px); transition:opacity 0.6s ease,transform 0.6s ease; }
.reveal-left.visible { opacity:1; transform:translateX(0); }
.reveal-right { opacity:0; transform:translateX(30px); transition:opacity 0.6s ease,transform 0.6s ease; }
.reveal-right.visible { opacity:1; transform:translateX(0); }
.delay-1{transition-delay:0.1s} .delay-2{transition-delay:0.2s} .delay-3{transition-delay:0.3s} .delay-4{transition-delay:0.4s}
@media(max-width:900px){
  nav{padding:0.75rem 1.5rem;} .nav-links{display:none;} .hamburger{display:block;}
  .hero-inner{grid-template-columns:1fr;text-align:center;gap:2rem;padding:3rem 1.5rem;}
  .hero-photo-wrap{order:-1;} .hero-photo-frame{width:240px;height:290px;margin:0 auto;} .sticker-3{display:none;}
  .hero-contacts{justify-content:center;} .hero-subtitle{margin-left:auto;margin-right:auto;}
  .about-grid{grid-template-columns:1fr;} .contact-grid{grid-template-columns:1fr;}
}
@media(max-width:600px){
  nav{padding:0.75rem 1rem;} .container{padding:0 1rem;} section{padding:3.5rem 0;}
  .hero-inner{padding:2.5rem 1rem;} .hero-photo-frame{width:200px;height:240px;}
  .sticker-1,.sticker-2{font-size:0.6rem;padding:4px 10px;}
  .btn-primary,.btn-secondary{padding:10px 20px;font-size:0.85rem;}
  .edu-card{grid-template-columns:1fr;text-align:center;} .edu-icon{margin:0 auto;}
  .timeline{padding-left:1.75rem;} .timeline-dot{left:-2.1rem;}
  .skills-grid{grid-template-columns:1fr;} .projects-grid{grid-template-columns:1fr;}
  .section-label{font-size:1.6rem;} .contact-pill{font-size:0.8rem;padding:8px 14px;}
}
@media(max-width:400px){
  .hero-text h1{font-size:2rem;} .hero-photo-frame{width:180px;height:215px;}
}
`;