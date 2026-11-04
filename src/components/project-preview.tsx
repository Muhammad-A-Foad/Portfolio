import type { Project } from "@/content/portfolio";

export function ProjectPreview({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  if (!project.screenshot) return null;
  return (
    <div className={`project-preview preview-${project.theme}`}>
      <div className="preview-orbit" aria-hidden="true" />
      <div className="browser-frame">
        <div className="browser-bar">
          <span className="browser-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>
            {project.website
              ? new URL(project.website).hostname
              : project.title}
          </span>
          <span aria-hidden="true">↗</span>
        </div>
        <div className="browser-screen">
          <img
            src={project.screenshot}
            srcSet={`${project.screenshot.replace(".webp", "-small.webp")} 640w, ${project.screenshot} 1265w`}
            sizes={
              large
                ? "(max-width: 760px) 90vw, 1100px"
                : "(max-width: 760px) 90vw, 650px"
            }
            width="1265"
            height="712"
            alt={`Public homepage of ${project.title}`}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <span className="preview-caption">
        PUBLIC WEBSITE <span>NOV 2026</span>
      </span>
    </div>
  );
}
