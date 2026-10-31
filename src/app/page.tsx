import Link from "next/link";
import type { Metadata } from "next";
import { Arrow, Star } from "@/components/icons";
import { Orbit } from "@/components/orbit";
import { ProjectVisual } from "@/components/project-visual";
import { Contact } from "@/components/footer";
import { experience, profile, projects, skills } from "@/content/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    type: "website",
    title: "Muhammad — Full-Stack Software Engineer",
    description:
      "Thoughtful code. Useful software. Selected engineering work and the thinking behind it.",
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

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="small-star">✳</span> FULL-STACK SOFTWARE ENGINEER
          </div>
          <h1 id="hero-title">
            Thoughtful code.
            <br />
            <em>Useful software.</em>
          </h1>
          <p className="hero-description">
            I’m Muhammad. I connect interfaces, APIs, and databases to turn
            complex requirements into practical software.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Arrow diagonal />
            </a>
            <a className="text-link" href="#contact">
              Let’s connect <Arrow />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="tiny-line" /> ENGINEERING WITH A BUSINESS
            PERSPECTIVE
          </div>
        </div>
        <Orbit />
        <div className="hero-bottom">
          <span>SOFTWARE DEVELOPMENT STUDENT · ZEWAIL CITY</span>
          <a href="#work">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
      </section>

      <section
        className="work-section shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-kicker">
          <span>01 / SELECTED WORK</span>
          <span>THE PROBLEMS. THE PROCESS. THE SOFTWARE.</span>
        </div>
        <div className="section-heading">
          <h2 id="work-title">
            Work with
            <br />
            <em>something behind it.</em>
          </h2>
          <p>
            Business workflows, learning platforms, and environmental data. A
            closer look at the systems—and the thinking—that connect them.
          </p>
        </div>
        <article className="featured-project">
          <Link
            href={`/work/${projects[0].slug}/`}
            className="project-image-link"
            aria-label={`Read ${projects[0].title} case study`}
          >
            <ProjectVisual theme="restaurant" />
            <span className="image-arrow">
              <Arrow diagonal />
            </span>
          </Link>
          <div className="featured-project-copy">
            <span className="project-number">PROJECT / 01</span>
            <span className="project-category">RESTAURANT TECHNOLOGY</span>
            <h3>
              <Link href={`/work/${projects[0].slug}/`}>
                Restaurant
                <br />
                <em>Operations.</em>
              </Link>
            </h3>
            <p>{projects[0].summary}</p>
            <div className="project-tags">
              <span>Full-stack</span>
              <span>Connected workflows</span>
            </div>
            <Link className="case-link" href={`/work/${projects[0].slug}/`}>
              Explore the case study <Arrow diagonal />
            </Link>
          </div>
        </article>
        <div className="project-pair">
          {projects.slice(1, 3).map((project) => (
            <article className="project-card" key={project.slug}>
              <Link
                className="project-image-link"
                href={`/work/${project.slug}/`}
                aria-label={`Read ${project.title} case study`}
              >
                <ProjectVisual theme={project.theme} />
                <span className="image-arrow">
                  <Arrow diagonal />
                </span>
              </Link>
              <div className="project-card-meta">
                <span>PROJECT / {project.number}</span>
                <span>
                  {project.theme === "geo"
                    ? "COMPETITION PROJECT · 2025"
                    : "LEARNING MANAGEMENT"}
                </span>
              </div>
              <h3>
                <Link href={`/work/${project.slug}/`}>
                  {project.title}
                  <Arrow diagonal />
                </Link>
              </h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
        <Link className="planning-project" href="/work/retail-erp/">
          <span className="planning-number">04 / IN DEVELOPMENT</span>
          <div>
            <span className="planning-label">PLANNING & PROTOTYPING</span>
            <h3>
              Before the code,
              <br />
              <em>understand the business.</em>
            </h3>
            <p>
              A multi-branch retail ERP, explored through requirements and
              domain modeling.
            </p>
          </div>
          <span className="planning-arrow">
            <Arrow diagonal />
          </span>
        </Link>
      </section>

      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="shell">
          <div className="section-kicker">
            <span>02 / THE PERSON BEHIND THE WORK</span>
            <span>ENGINEERING, WITH CONTEXT</span>
          </div>
          <div className="about-grid">
            <div className="about-title">
              <Star />
              <h2 id="about-title">
                A builder.
                <br />A learner.
                <br />
                <em>A bigger picture.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I’m an early-career engineer interested in how the whole system
                fits together.
              </p>
              <p>
                I study Software Development at Zewail City University of
                Science and Technology, in the School of Computational Sciences
                and Artificial Intelligence.
              </p>
              <p>
                My interests run from the interface people use to the APIs and
                databases behind it. Backend engineering, system design, and
                understanding business requirements are particular areas of
                focus.
              </p>
              <p>
                Through software projects and Digify Solution, I also work with
                the conversations around the code: requirements, coordination,
                and what makes a solution useful.
              </p>
              <a
                className="text-link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                More about my journey <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="principles">
            <div>
              <span>01</span>
              <h3>Understand first.</h3>
              <p>
                The workflow and the people using it shape the requirements.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Connect the layers.</h3>
              <p>
                Good interfaces need clear APIs and a thoughtful data model.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Keep learning.</h3>
              <p>Build, ask questions, and improve through practical work.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="experience-section shell"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="section-kicker">
          <span>03 / EXPERIENCE & LEADERSHIP</span>
          <span>BEYOND THE EDITOR</span>
        </div>
        <div className="experience-grid">
          <div className="experience-intro">
            <h2 id="experience-title">
              Different roles.
              <br />
              <em>A wider view.</em>
            </h2>
            <p>
              Software delivery, community leadership, teaching, and exposure to
              business operations.
            </p>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article className="experience-item" key={item.organization}>
                <span className="experience-number">0{index + 1}</span>
                <div>
                  <span className="experience-area">{item.area}</span>
                  <h3>{item.role}</h3>
                  <span className="experience-org">{item.organization}</span>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section shell" aria-labelledby="skills-title">
        <div className="section-kicker">
          <span>04 / TECHNICAL TOOLKIT</span>
          <span>ACROSS THE STACK</span>
        </div>
        <div className="section-heading">
          <h2 id="skills-title">
            From the interface
            <br />
            <em>to the infrastructure.</em>
          </h2>
          <p>
            A foundation across the stack, with different depths of experience.
            Each project provides context for the tools used.
          </p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-item" key={skill.number}>
              <span>{skill.number} /</span>
              <h3>{skill.title}</h3>
              <p className="skill-tools">{skill.text}</p>
              <p>{skill.note}</p>
            </article>
          ))}
        </div>
        <div className="language-line">
          <span>LANGUAGES</span>
          <p>
            JavaScript <i>/</i> TypeScript <i>/</i> Python <i>/</i> SQL
          </p>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            On GitHub <Arrow diagonal />
          </a>
        </div>
      </section>
      <Contact />
    </main>
  );
}
