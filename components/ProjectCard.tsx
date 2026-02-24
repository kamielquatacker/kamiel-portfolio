import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`card project-card ${styles["project-card"]}`}
    >
      

      <div className={styles["project-content"]}>
        <div>
          <div className={styles["project-image"]}>
        {project.images && project.images.length > 0 && (
          <Image
            src={project.images[0]}
            alt={project.title}
            width={1280}
            height={960}
          />
        )}
      </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <div className="technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
