import type { MouseEventHandler } from "react";
import { profile } from "@/content/portfolio";
import { Download } from "./icons";

export function ResumeLink({
  className = "",
  compact = false,
  onClick,
}: {
  className?: string;
  compact?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      href={profile.resumeUrl}
      download={profile.resumeFilename}
      className={`resume-link ${className}`}
      aria-label={`Download my résumé (PDF, ${profile.resumeEdition})`}
      onClick={onClick}
    >
      <span>{compact ? "Résumé" : "Download my résumé"}</span>
      <Download />
    </a>
  );
}
