import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { projects, certificates, timeline } from "./content";
import profile from "./assets/images/profile.png";
import Contact from "./components/Contacts";
import MotionStudio from "./components/MotionStudio";
import TechRibbon from "./components/TechRibbon";
import usePortfolioMotion from "./components/usePortfolioMotion";

const github = "https://github.com/Udbhav1105";
const linkedin = "https://www.linkedin.com/in/udbhav-mishra-7a567a286/";
const nav = [
  ["About", "about"],
  ["Work", "projects"],
  ["Journey", "experience"],
  ["Contact", "contact"],
];
const stacks = [
  [
    "The interface",
    "Frontend",
    [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
  ],
  [
    "Behind the scenes",
    "Backend",
    ["Node.js", "Express", "MongoDB", "MySQL", "Razorpay", "REST APIs"],
  ],
  [
    "The foundations",
    "Programming Languages",
    ["Java", "JavaScript", "MySQL", "HTML5", "CSS3", "Python"],
  ],
  [
    "From local to live",
    "Tools",
    ["Git", "GitHub", "Postman", "AWS", "Vercel", "Render"],
  ],
];
function Heading({ number, label, children, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          {number} / {label}
        </p>
        <h2>{children}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#141615" : "#f5f4ed");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
  }, [theme]);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  useEffect(() => {
    const updateNavbar = () => setScrolled(window.scrollY > 24);
    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);
  const [paused] = usePortfolioMotion();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a className="wordmark" href="#home" aria-label="Udbhav home">
          u<span>.</span>
        </a>
        <nav
          aria-label="Main navigation"
          className={menu ? "navigation open" : "navigation"}
        >
          {nav.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <FaSun aria-hidden="true" />
            ) : (
              <FaMoon aria-hidden="true" />
            )}
          </button>
          <a className="header-cta" href="mailto:udbhavmsr@gmail.com">
            Let’s talk ↗
          </a>
          <button
            className="menu-toggle"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-topline">
            <span>
              <i /> Open to full stack internships
            </span>
            <span>Uttar Pradesh, India ↗</span>
          </div>
          <div className="hero-layout">
            <div>
              {theme === "dark" ? (
                <>
                  <p className="eyebrow">Full stack developer</p>
                  <h1 aria-label="Udbhav Mishra">
                    <span className="title-line">
                      <span>Udbhav</span>
                    </span>
                    <span className="title-line">
                      <em>Mishra.</em>
                    </span>
                  </h1>
                  <p className="hero-description">
                    <strong>Ideas into interfaces. Code into impact.</strong>I
                    design and build full-stack web applications, from frontend
                    interfaces to backend APIs, databases, and secure payments.
                  </p>
                </>
              ) : (
                <>
                  <p className="eyebrow">Hello, I’m Udbhav Mishra</p>
                  <h1 aria-label="Ideas into interfaces. Code into impact.">
                    <span className="title-line">
                      <span>Ideas into</span>
                    </span>
                    <span className="title-line">
                      <em>interfaces.</em>
                    </span>
                    <span className="title-line">
                      <span>
                        Code into <span className="outlined">impact.</span>
                      </span>
                    </span>
                  </h1>
                  <p className="hero-description">
                    Full Stack Developer · Java · Next.js
                    <br />I design and build full-stack web applications, from
                    frontend interfaces to backend APIs, databases, and secure
                    payments.
                  </p>
                </>
              )}
              <div className="hero-actions">
                <a className="button dark" href="#projects">
                  Explore my work <FaArrowRight />
                </a>
                <a className="text-link" href="/resumeA2.pdf" download>
                  Download résumé ↓
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-orbit orbit-one" aria-hidden="true" />
              <div className="portrait-orbit orbit-two" aria-hidden="true" />
              <span className="portrait-spark" aria-hidden="true">
                ✳
              </span>
              <div className="photo-frame">
                <img src={profile} alt="Udbhav Mishra working at a laptop" />
                <div className="photo-caption">
                  <span>Building. Learning. Iterating.</span>
                  <span>↗</span>
                </div>
              </div>
              <div className="orbit-stamp" aria-hidden="true">
                &lt;/&gt;
                <span>
                  FULL STACK
                  <br />
                  DEVELOPER
                </span>
              </div>
              <div className="visual-footnote">
                <span>Currently at Rezillion Tech Pvt. Ltd.</span>
                <span>01 — INTRO</span>
              </div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>Good software starts with curiosity.</span>
            <a href="#about">A little more about me ↓</a>
            <div className="socials">
              <a
                href={github}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
        <TechRibbon />
        <section className="section wrap" id="about">
          <Heading number="01" label="The person behind the code">
            Curiosity is the start.
            <br />
            <em>Building is the story.</em>
          </Heading>
          <div className="about-layout">
            <div className="about-aside">
              <span className="asterisk">✳</span>
              <p>
                Student by chapter.
                <br />
                Developer by practice.
              </p>
              <span className="small-label">
                B.Tech CSE (Data Science)
                <br />
                ABES Engineering College · 2023 – 2027
              </span>
            </div>
            <div className="about-copy">
              <p className="lead">
                I’m Udbhav Mishra, a Computer Science (Data Science) student at
                ABES Engineering College, turning ideas into practical digital
                products.
              </p>
              <p>
                I build full-stack web applications that span frontend design,
                backend APIs, databases, authentication, and deployment. My
                toolkit includes React, Next.js, TypeScript, Node.js, Express,
                MongoDB/MySQL, and secure payment integrations such as Razorpay.
              </p>
              <p>
                I also enjoy solving Data Structures & Algorithms problems. My
                goal is to become a Software Engineer who can design and ship
                scalable full-stack solutions that create real-world impact.
              </p>
              <a className="text-link" href="#experience">
                Follow my journey ↗
              </a>
            </div>
          </div>
          <div className="stats">
            {[
              ["5+", "Projects built"],
              ["300+", "DSA problems"],
              ["4+", "Certifications"],
              ["2027", "Graduation"],
            ].map(([n, l]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </section>
        <MotionStudio paused={paused} />
        <section className="work-section" id="projects">
          <div className="section wrap">
            <Heading
              number="02"
              label="Selected work"
              note="A collection of ideas brought to life through code. Frontend to backend, and everything in between."
            >
              Built to work.
              <br />
              <em>Made to matter.</em>
            </Heading>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <article className="project" key={p.title}>
                  <a
                    className={`project-image tone-${i}`}
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title} live demo`}
                  >
                    <div className="browser-bar">
                      <i />
                      <i />
                      <i />
                      <span>{p.title}</span>
                    </div>
                    <img
                      src={p.image}
                      alt={`${p.title} website preview`}
                      loading="lazy"
                    />
                    <span className="project-open">↗</span>
                  </a>
                  <div className="project-title">
                    <h3>{p.title}</h3>
                    <span>0{i + 1}</span>
                  </div>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={p.live} target="_blank" rel="noreferrer">
                      Live demo ↗
                    </a>
                    <a href={p.github} target="_blank" rel="noreferrer">
                      <FaGithub /> Source code
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section wrap" id="skills">
          <Heading
            number="03"
            label="The toolkit"
            note="The technologies I work with to connect useful interfaces with reliable systems."
          >
            Different layers.
            <br />
            <em>One connected experience.</em>
          </Heading>
          <div className="stack-list">
            {stacks.map(([sub, title, skills], i) => (
              <div className="stack-row" key={title}>
                <span className="small-label">
                  0{i + 1} / {sub}
                </span>
                <h3>{title}</h3>
                <div className="tags">
                  {skills.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="journey-section" id="experience">
          <div className="section wrap journey-layout">
            <div className="journey-intro">
              <p className="eyebrow">04 / The journey</p>
              <h2>
                Always a<br />
                <em>work in progress.</em>
              </h2>
              <p>
                Learning the foundations. Applying them to real products.
                Finding the next problem worth solving.
              </p>
              <a className="text-link" href="/resumeA2.pdf" download>
                My résumé ↓
              </a>
            </div>
            <div className="timeline">
              {timeline.map((t, i) => (
                <article key={t.title}>
                  <span className="timeline-dot">0{i + 1}</span>
                  <p className="eyebrow">{t.duration}</p>
                  <h3>{t.title}</h3>
                  <span className="company">{t.subtitle}</span>
                  <p>{t.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section wrap" id="certificates">
          <Heading number="05" label="Continued learning">
            More perspectives.
            <br />
            <em>Stronger foundations.</em>
          </Heading>
          <div className="certificates-grid">
            {certificates.map((c) => (
              <a
                className="certificate"
                href={c.link}
                key={c.title}
                target="_blank"
                rel="noreferrer"
              >
                <div className="certificate-preview">
                  <img src={c.image} alt={c.title} loading="lazy" />
                </div>
                <div>
                  <p className="eyebrow">{c.issuer}</p>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <span className="text-link">View certificate ↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>
        <Contact />
        <footer className="wrap">
          <a className="wordmark" href="#home">
            u<span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} Udbhav Mishra. All Rights Reserved.
          </p>
          <a className="text-link" href="#home">
            Back to top ↑
          </a>
        </footer>
      </main>
    </>
  );
}
