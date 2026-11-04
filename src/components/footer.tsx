import Link from "next/link";
import { profile } from "@/content/portfolio";
import { Arrow, Star } from "./icons";
import { ResumeLink } from "./resume-link";

export function Contact() {
  return (
    <section
      className="contact-section shell"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="section-kicker">
        <span>05 / GET IN TOUCH</span>
        <span>GOOD WORK STARTS WITH A CONVERSATION</span>
      </div>
      <div className="contact-heading">
        <h2 id="contact-title">
          Have something
          <br />
          <em>in mind?</em>
        </h2>
        <Star />
      </div>
      <div className="contact-options">
        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent("Engineering opportunity")}`}
        >
          <span className="contact-index">FOR TEAMS & RECRUITERS</span>
          <strong>
            Let’s work together <Arrow diagonal />
          </strong>
          <p>
            Have an engineering opportunity? I’d like to hear about the team and
            the work.
          </p>
        </a>
        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent("Software project inquiry")}`}
        >
          <span className="contact-index">FOR BUSINESSES & COLLABORATORS</span>
          <strong>
            Let’s build something <Arrow diagonal />
          </strong>
          <p>
            Have a software requirement? Let’s talk about the problem you’re
            trying to solve.
          </p>
        </a>
      </div>
      <div className="contact-bottom">
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email}
          <Arrow diagonal />
        </a>
        <ResumeLink className="button button-outline" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link className="wordmark" href="/">
        muhammad<span>.</span>
      </Link>
      <span className="footer-note">Thoughtful code. Useful software.</span>
      <div className="footer-links">
        <ResumeLink compact />
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub <Arrow diagonal />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn <Arrow diagonal />
        </a>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
