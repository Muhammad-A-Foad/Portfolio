import Link from "next/link";
import { Arrow } from "./icons";
import { MobileMenu } from "./mobile-menu";
import { ResumeLink } from "./resume-link";

const links = [
  { href: "/#work", title: "Work" },
  { href: "/#about", title: "About" },
  { href: "/#experience", title: "Experience" },
];

export function Header() {
  return (
    <header className="site-header shell">
      <Link className="wordmark" href="/" aria-label="Muhammad — home">
        muhammad<span>.</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link key={link.title} href={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <ResumeLink className="header-resume" compact />
        <Link className="header-contact" href="/#contact">
          Let’s talk <Arrow diagonal />
        </Link>
      </div>
      <MobileMenu />
    </header>
  );
}
