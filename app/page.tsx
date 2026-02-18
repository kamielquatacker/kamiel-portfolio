import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="container">
      <header className="hero" id="top">
        <h1>Hey! I'm Kamiel Quatacker.</h1>
        <p>
          21-year-old software developer from Belgium.<br />
          I’m a hands-on developer with a passion for automotive tech and building practical products. I bring a wide range of skills across software engineering, 3D design, and production, and I enjoy turning ideas into real, working products.
        </p>
        <div className="hero-buttons">
          <a className="btn" href="/resume.pdf" download>
            <span>Resume</span>
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
          <a className="btn" href="https://github.com/kamielquatacker" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a className="btn" href="https://www.linkedin.com/in/kamiel-quatacker" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        
      </header>

      <section className="section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid">
          <div className="card">Project placeholder</div>
          <div className="card">Project placeholder</div>
        </div>
      </section>

      <section className="section" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="card">Experience placeholder</div>
      </section>

      <section className="section" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="card">Skills placeholder</div>
      </section>

      <section className="section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="card">Contact placeholder</div>
      </section>
    </main>
  );
}