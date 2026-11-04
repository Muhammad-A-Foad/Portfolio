import Link from "next/link";
import type { Project } from "@/content/portfolio";
import { ProjectPreview } from "./project-preview";
import { Arrow } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" data-reveal>
      <Link
        className="project-image-link"
        href={`/work/${project.slug}/`}
        aria-label={`Read ${project.title} case study`}
      >
        <ProjectPreview project={project} />
        <span className="image-arrow">
          <Arrow diagonal />
        </span>
      </Link>
      <div className="project-card-meta">
        <span>PROJECT / {project.number}</span>
        <span className="project-live">
          <i />
          {project.status}
        </span>
      </div>
      <h3>
        <Link href={`/work/${project.slug}/`}>
          {project.title}
          <Arrow diagonal />
        </Link>
      </h3>
      <p>{project.summary}</p>
      <div className="project-bottom-meta">
        <span>{project.role}</span>
        <span>{project.period}</span>
      </div>
    </article>
  );
}
