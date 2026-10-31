# Muhammad — Personal Portfolio

A dark editorial portfolio for Muhammad, Full-Stack Software Engineer. Built with Next.js App Router, TypeScript, original SVG illustrations, and a static export.

## Local development

Requires Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4173. To inspect the production export:

```sh
npm run check
npm start
```

`npm run check` runs TypeScript, creates the production export, and checks generated HTML, local links, anchors, and required metadata. `npm run format:check` checks formatting. The preview server is local-only; deploy the `out/` directory to a static host.

## Content and design

- `src/content/portfolio.ts`: profile, contact links, project narratives, experience, and skills.
- `src/content/site.ts`: canonical origin, configurable with `NEXT_PUBLIC_SITE_URL` before building.
- `src/app/page.tsx`: homepage composition.
- `src/app/work/[slug]/page.tsx`: case-study layout. New project records automatically receive static routes.
- `src/components`: navigation, contact, illustration, and other reusable components.
- `src/app/globals.css`: design tokens, page styles, responsive rules, and reduced-motion support.
- `public/social.svg` and `public/social.png`: social artwork source and exported image.

Manrope and Newsreader are self-hosted through `next/font`; license notices are included in `public/fonts/licenses`. Visuals are original code-native illustrations and explicitly labeled as conceptual. They are not product screenshots or measured environmental data.

## Content still awaiting review

The interface is complete, but project attribution, current deployment status, and project outcomes need owner review. Case studies preserve those uncertainties. Client names and branding are withheld where publication permission is not established. ERP modules remain explicitly planned scope.

Still needed: approved product screenshots, project repository/demo URLs, experience dates, a résumé, detailed individual/team contributions, current-learning classification, and any custom domain. Do not replace these gaps with invented claims or guessed links.

The local `PORTFOLIO_BRIEF.md` contains planning information and client identities. It is intentionally ignored by Git and must remain outside this public source repository until its contents are approved for publication. Read it when present, together with `AGENTS.md`, before editing content. On a fresh clone, obtain the brief privately from the owner; the approved public content lives in `src/content/portfolio.ts`.

## Hosting

`.openai/hosting.json` records the private Sites deployment identity and static output directory. GitHub `origin` remains the owner-specified Portfolio repository. Publishing a private Sites preview does not make it publicly accessible. A custom host must serve directory index files and use `404.html` for missing routes. Set `NEXT_PUBLIC_SITE_URL` to the final origin before generating canonical URLs and the sitemap.

No application backend, database, analytics, cookies, contact-submission service, or external runtime font request is required. Contact links open an email draft; the website itself does not send messages.
