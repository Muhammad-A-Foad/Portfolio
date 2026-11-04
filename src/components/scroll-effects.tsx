"use client";
import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.setAttribute("data-reveal-ready", "true");
      observer.observe(element);
    });
    const revealAll = () => {
      elements.forEach((element) =>
        element.removeAttribute("data-reveal-ready"),
      );
      observer.disconnect();
    };
    const handlePreference = () => {
      if (preference.matches) revealAll();
    };
    preference.addEventListener("change", handlePreference);
    return () => {
      revealAll();
      preference.removeEventListener("change", handlePreference);
    };
  }, []);
  return null;
}
