"use client";

import Link from "next/link";
import { useRef } from "react";
import { Arrow } from "./icons";

export function MobileMenu() {
  const menu = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (menu.current) menu.current.open = false;
  };

  return (
    <details
      ref={menu}
      className="mobile-nav"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          close();
          menu.current?.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label="Open navigation">
        Menu <span>+</span>
      </summary>
      <nav aria-label="Mobile navigation">
        {[
          { href: "/#work", title: "Work" },
          { href: "/#about", title: "About" },
          { href: "/#experience", title: "Experience" },
          { href: "/#contact", title: "Contact" },
        ].map((link) => (
          <Link key={link.title} href={link.href} onClick={close}>
            {link.title}
            {link.title === "Contact" && <Arrow diagonal />}
          </Link>
        ))}
      </nav>
    </details>
  );
}
