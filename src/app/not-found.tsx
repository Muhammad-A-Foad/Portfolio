import Link from "next/link";
import { Arrow } from "@/components/icons";

export default function NotFound() {
  return (
    <main id="main" className="not-found shell">
      <span className="eyebrow">404 / A SMALL DETOUR</span>
      <h1>
        This page took
        <br />
        <em>a different route.</em>
      </h1>
      <p>
        The page you’re looking for isn’t here. There’s still plenty of work to
        explore.
      </p>
      <Link className="button button-primary" href="/">
        Back to the portfolio <Arrow />
      </Link>
    </main>
  );
}
