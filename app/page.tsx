import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faFileArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const featuredProjects = projects.filter(p => p.featured);

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
        <div className="projects-header">
          <h2 className="section-title">
            <FontAwesomeIcon className="section-title-icon" icon={faStar} />
            <span>Featured Projects</span>
          </h2>
          <a href="/projects" className="view-all-link">
            <span className="">View all </span>
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>

        <div className="grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
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