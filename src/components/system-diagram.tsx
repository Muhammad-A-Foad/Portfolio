import type { Project } from "@/content/portfolio";

export function SystemDiagram({ nodes }: { nodes: Project["architecture"] }) {
  return (
    <figure className="system-diagram">
      <figcaption>
        THE SYSTEM AT A GLANCE <span>SIMPLIFIED VIEW</span>
      </figcaption>
      <ol>
        {nodes.map((node, index) => (
          <li key={node.label}>
            <span className="diagram-index">0{index + 1}</span>
            <small>{node.label}</small>
            <strong>{node.detail}</strong>
            {index < nodes.length - 1 && (
              <span className="diagram-arrow" aria-hidden="true">
                ↔
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
