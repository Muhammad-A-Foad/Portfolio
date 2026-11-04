import Link from "next/link";
import type { Metadata } from "next";
import { Arrow, Star } from "@/components/icons";
import { Orbit } from "@/components/orbit";
import { ProjectVisual } from "@/components/project-visual";
import { ProjectPreview } from "@/components/project-preview";
import { ProjectCard } from "@/components/project-card";
import { ResumeLink } from "@/components/resume-link";
import { ScrollEffects } from "@/components/scroll-effects";
import { Contact } from "@/components/footer";
import {
  education,
  experience,
  leadership,
  profile,
  projects,
  skills,
} from "@/content/portfolio";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    type: "website",
    title: "Muhammad Ahmad Foad — Full-Stack Software Engineer",
    description:
      "Production software. Full-stack thinking. Web, mobile, desktop, and AI integrations—explore the work and download my résumé.",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ahmad Foad — Full-Stack Software Engineer",
      },
    ],
  },
};

export default function Home() {
  const flagship = projects[0];
  return (
    <main id="main">
      <ScrollEffects />
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="small-star" aria-hidden="true">
              ✳
            </span>{" "}
            FULL-STACK SOFTWARE ENGINEER
          </div>
          <h1 id="hero-title">
            Thoughtful code.
            <br />
            <em>Useful software.</em>
          </h1>
          <p className="hero-description">
            I’m <strong>Muhammad Ahmad Foad.</strong> I build web, mobile, and
            desktop applications—from everyday business workflows to AI-powered
            integrations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Arrow diagonal />
            </a>
            <ResumeLink className="button button-outline" />
          </div>
          <a className="current-role" href="#experience">
            <span className="status-dot" />
            Software Engineer (Contract) <span>at Dewan Soft</span>
            <Arrow diagonal />
          </a>
          <div className="hero-socials">
            <span>BASED IN EGYPT</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>
        <Orbit />
        <div className="hero-bottom">
          <span>FROM THE INTERFACE TO THE SYSTEM BEHIND IT</span>
          <a href="#work">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
      </section>

      <div className="practice-strip shell" aria-label="Engineering focus">
        <div>
          <span>01 / EXPERIENCES</span>
          <strong>Web. Mobile. Desktop.</strong>
        </div>
        <div>
          <span>02 / SYSTEMS</span>
          <strong>ERP & business workflows.</strong>
        </div>
        <div>
          <span>03 / CONNECTIONS</span>
          <strong>APIs & AI integrations.</strong>
        </div>
      </div>

      <section
        className="work-section shell"
        id="work"
        aria-labelledby="work-title"
      >
        <div className="section-kicker">
          <span>01 / SELECTED WORK</span>
          <span>REAL PRODUCTS. CONSIDERED ENGINEERING.</span>
        </div>
        <div className="section-heading" data-reveal>
          <h2 id="work-title">
            Built to be used.
            <br />
            <em>Made to connect.</em>
          </h2>
          <p>
            Production restaurant software and live learning platforms. A closer
            look at what I built, how the pieces fit, and the business behind
            each system.
          </p>
        </div>
        <article className="featured-project" data-reveal>
          <Link
            href={`/work/${flagship.slug}/`}
            className="project-image-link"
            aria-label="Read Mama Fattoum case study"
          >
            <ProjectPreview project={flagship} />
            <span className="image-arrow">
              <Arrow diagonal />
            </span>
          </Link>
          <div className="featured-project-copy">
            <div className="featured-topline">
              <span className="project-number">PROJECT / 01</span>
              <span className="project-live">
                <i />
                Production
              </span>
            </div>
            <span className="project-category">RESTAURANT TECHNOLOGY</span>
            <h3>
              <Link href={`/work/${flagship.slug}/`}>
                Mama
                <br />
                <em>Fattoum.</em>
              </Link>
            </h3>
            <p>{flagship.summary}</p>
            <div className="project-tags">
              <span>Web + mobile + kiosk</span>
              <span>NestJS / PostgreSQL</span>
            </div>
            <div className="flagship-detail">
              <span>MY CONTRIBUTION</span>
              <p>
                Full-stack applications, iPad barcode scanning, and configurable
                subscriptions.
              </p>
            </div>
            <Link className="case-link" href={`/work/${flagship.slug}/`}>
              Explore the case study <Arrow diagonal />
            </Link>
          </div>
        </article>
        <div className="project-pair">
          {projects.slice(1, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="more-work-label">
          <span>EXPLORATIONS & EARLY-STAGE WORK</span>
          <span>DIFFERENT STAGES, CLEARLY MARKED</span>
        </div>
        <div className="exploration-grid">
          {projects.slice(3).map((project) => (
            <Link
              className="exploration-card"
              href={`/work/${project.slug}/`}
              key={project.slug}
              data-reveal
            >
              <div className="exploration-art">
                <ProjectVisual theme={project.theme} />
              </div>
              <div className="exploration-copy">
                <span>
                  {project.number} / {project.status}
                </span>
                <h3>
                  {project.title}
                  <Arrow diagonal />
                </h3>
                <p>{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
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
          <div className="about-grid" data-reveal>
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
                I care about the whole journey—from a business requirement to
                the software someone uses.
              </p>
              <p>
                I’m an early-career Full-Stack Software Engineer and Computer
                Science undergraduate at Zewail City, majoring in Software
                Development.
              </p>
              <p>
                My work spans production restaurant applications, learning
                platforms, ERP modules, and current AI integration work at Dewan
                Soft. I enjoy connecting a useful interface with clear
                application logic and a thoughtful data model.
              </p>
              <p>
                Founding Digify Solution has also given me a business
                perspective: listening to clients, gathering requirements,
                coordinating delivery, and checking that the result meets the
                need.
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
              <h3>Understand the workflow.</h3>
              <p>
                Start with the people, constraints, and business requirements.
              </p>
            </div>
            <div>
              <span>02</span>
              <h3>Connect the layers.</h3>
              <p>
                Bring the interface, services, data, and integrations together.
              </p>
            </div>
            <div>
              <span>03</span>
              <h3>Stay curious.</h3>
              <p>
                Learn through practical work, collaboration, and better
                questions.
              </p>
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
          <span>03 / EXPERIENCE & GROWTH</span>
          <span>THE WORK BEHIND THE WORK</span>
        </div>
        <div className="experience-grid">
          <div className="experience-intro" data-reveal>
            <h2 id="experience-title">
              In the code.
              <br />
              <em>In the real world.</em>
            </h2>
            <p>
              From resolving ERP issues to building new modules and AI-powered
              integrations. Practical experience, with room to keep growing.
            </p>
            <ResumeLink className="text-link experience-resume" />
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article
                className={`experience-item ${item.current ? "experience-current" : ""}`}
                key={`${item.organization}-${item.type}`}
                data-reveal
              >
                <span className="experience-number">0{index + 1}</span>
                <div>
                  <div className="experience-topline">
                    <span className="experience-area">{item.type}</span>
                    <span className="experience-date">{item.period}</span>
                  </div>
                  <h3>{item.role}</h3>
                  <span className="experience-org">{item.organization}</span>
                  <p>{item.body}</p>
                  <span className="experience-detail">{item.detail}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="growth-grid">
          <article className="growth-card" data-reveal>
            <span className="growth-label">EDUCATION / {education.period}</span>
            <h3>{education.degree}</h3>
            <p className="growth-highlight">{education.major}</p>
            <p>{education.institution}</p>
            <span className="growth-note">
              Arabic · Native <i>/</i> English · Professional proficiency
            </span>
          </article>
          <article className="growth-card" data-reveal>
            <span className="growth-label">
              COMMUNITY / {leadership.period}
            </span>
            <h3>{leadership.role}</h3>
            <p>{leadership.body}</p>
            <span className="growth-note">{leadership.activities}</span>
          </article>
        </div>
      </section>

      <section className="skills-section shell" aria-labelledby="skills-title">
        <div className="section-kicker">
          <span>04 / TECHNICAL TOOLKIT</span>
          <span>EXPERIENCE, IN CONTEXT</span>
        </div>
        <div className="section-heading" data-reveal>
          <h2 id="skills-title">
            Across the stack.
            <br />
            <em>Connected by purpose.</em>
          </h2>
          <p>
            Tools I’ve used across projects and professional work. Different
            depths of experience, with the case studies providing context.
          </p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-item" key={skill.number} data-reveal>
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
            TypeScript <i>/</i> JavaScript <i>/</i> C++ <i>/</i> Python <i>/</i>{" "}
            SQL
          </p>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            Explore my GitHub <Arrow diagonal />
          </a>
        </div>
      </section>

      <section
        className="collaboration-section shell"
        aria-labelledby="collaboration-title"
        data-reveal
      >
        <div className="collaboration-heading">
          <span className="section-label">FOR BUSINESSES & COLLABORATORS</span>
          <h2 id="collaboration-title">
            Start with the problem.
            <br />
            <em>Build the right thing.</em>
          </h2>
          <a className="text-link" href="#contact">
            Discuss a software project <Arrow diagonal />
          </a>
        </div>
        <div className="collaboration-list">
          <div>
            <span>01</span>
            <h3>Business applications</h3>
            <p>Operational workflows, ERP modules, and administration tools.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Connected experiences</h3>
            <p>
              Web, mobile, and desktop applications connected through shared
              services.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>API & AI integrations</h3>
            <p>
              Payments, messaging, LLM APIs, and document ingestion for RAG.
            </p>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
