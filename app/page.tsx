import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faFileArrowDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { projects } from "@/data/projects";
import { experiences } from '@/data/experience';
import { education } from '@/data/education';
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import TabView from "@/components/TabView";
import EducationItem from "@/components/EducationItem";

const featuredProjects = projects.filter((p) => p.featured);

export default function Home() {
  return (
    <main className="container">
      <header className="hero" id="top">
        <h1>Hey! I'm Kamiel Quatacker.</h1>
        <p>
          21-year-old software developer from Belgium.
          <br />
          I’m a hands-on developer with a passion for automotive tech and
          building practical products. I bring a wide range of skills across
          software engineering, 3D design, and production, and I enjoy turning
          ideas into real, working products.
        </p>
        <div className="hero-buttons">
          <a className="btn" href="/resume.pdf" download>
            <span>Resume</span>
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
          <a
            className="btn"
            href="https://github.com/kamielquatacker"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="btn"
            href="https://www.linkedin.com/in/kamiel-quatacker"
            target="_blank"
            rel="noreferrer"
          >
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
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="section">
        <TabView
          tabs={[
            {
              id: "experience",
              label: "Experience",
              content: (
                <div className="experience-list">
                  {experiences.map((exp) => (
                    <ExperienceItem key={exp.id} experience={exp} />
                  ))}
                </div>
              ),
            },
            {
              id: "education",
              label: "Education",
              content: (
                <div className="education-list">
                  {education.map((edu) => (
                    <EducationItem key={edu.id} education={edu} />
                  ))}
                </div>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}
