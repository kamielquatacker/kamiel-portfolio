import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default async function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="container project-detail-container">
      <h1 className="project-title">{project.title}</h1>
      <div className="technologies">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <ImageCarousel images={project.images || []} title={project.title} />

      {/* PROJECT DATE AND LINKS  */}
      <div className="project-meta">
        <span className="project-date">{project.date}</span>
        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" className="btn">
              <FontAwesomeIcon icon={faGlobe} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" className="btn">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
        </div>
      </div>

      <p>{project.longDescription}</p>
    </main>
  );
}
