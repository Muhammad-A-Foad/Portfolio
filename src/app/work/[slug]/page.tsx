import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/content/portfolio";
import { ProjectVisual } from "@/components/project-visual";
import { Arrow } from "@/components/icons";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.summary,
    alternates: { canonical: `/work/${slug}/` },
    openGraph: {
      title: project?.title,
      description: project?.summary,
      type: "article",
      url: `/work/${slug}/`,
      images: [
        {
          url: "/social.png",
          width: 1200,
          height: 630,
          alt: "Muhammad — Full-Stack Software Engineer",
        },
      ],
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="case-study">
      <div className="shell">
        <Link className="back-link" href="/#work">
          ← Back to selected work
        </Link>
        <header className="case-hero">
          <div className="eyebrow">CASE STUDY / {project.number}</div>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-metadata">
            <div>
              <span>CONTEXT</span>
              <p>{project.category}</p>
            </div>
            <div>
              <span>STATUS</span>
              <p>{project.status}</p>
            </div>
            <div>
              <span>TECHNICAL SCOPE</span>
              <p>{project.stack.join(" · ")}</p>
            </div>
          </div>
        </header>
        <ProjectVisual theme={project.theme} />
        <div className="case-content">
          <aside className="case-toc">
            <span>INSIDE THE PROJECT</span>
            <a href="#context">01 / Context</a>
            <a href="#approach">02 / The approach</a>
            <a href="#contribution">03 / My contribution</a>
            <a href="#outcome">04 / Status & evidence</a>
          </aside>
          <div className="case-narrative">
            <section id="context">
              <span className="section-label">01 / THE CONTEXT</span>
              <h2>
                Start with
                <br />
                <em>the problem.</em>
              </h2>
              <p>{project.context}</p>
              <h3>Requirements & scope</h3>
              <ul>
                {project.requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="approach">
              <span className="section-label">02 / THE APPROACH</span>
              <h2>
                How the pieces
                <br />
                <em>fit together.</em>
              </h2>
              <p>{project.approach}</p>
              <div className="case-focus">
                {project.focus.map((focus, i) => (
                  <article key={focus.title}>
                    <span>0{i + 1}</span>
                    <h3>{focus.title}</h3>
                    <p>{focus.body}</p>
                  </article>
                ))}
              </div>
              <p className="evidence-note">
                These are engineering areas to explore, rather than a claim that
                every implementation decision has been independently verified.
              </p>
            </section>
            <section id="contribution">
              <span className="section-label">03 / INDIVIDUAL & TEAM WORK</span>
              <h2>My contribution.</h2>
              <p>{project.contribution}</p>
            </section>
            <section id="outcome">
              <span className="section-label">04 / STATUS & EVIDENCE</span>
              <h2>Where it stands.</h2>
              <p>{project.outcome}</p>
              <div className="case-limitations">
                <span>PUBLIC MATERIALS & LIMITATIONS</span>
                <p>{project.limitations}</p>
              </div>
            </section>
          </div>
        </div>
        <Link className="next-project" href={`/work/${next.slug}/`}>
          <span>CONTINUE EXPLORING / {next.number}</span>
          <strong>{next.title}</strong>
          <Arrow diagonal />
        </Link>
        <div className="case-contact">
          <p>Have a similar problem in mind?</p>
          <Link className="text-link" href="/#contact">
            Let’s talk about it <Arrow diagonal />
          </Link>
        </div>
      </div>
    </main>
  );
}
