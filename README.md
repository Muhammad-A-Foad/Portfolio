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
- `public/resume/Muhammad-Ahmad-Foad-CV-Nov-2026.pdf`: the exact supplied November 2026 CV, linked through a shared download component.
- `public/projects`: approved public-homepage screenshots in responsive WebP sizes. Source and review notes are in `docs/content-sources.md`.
- `src/app/refinements.css`: résumé, timeline, screenshot presentation, and responsive visual enhancements.

Manrope and Newsreader are self-hosted through `next/font`; license notices are included in `public/fonts/licenses`. Public website screenshots are labeled separately from original conceptual artwork. Scroll reveals are progressive enhancements, disabled for reduced motion, and content remains visible without JavaScript.

## Content still awaiting review

The November 2026 CV supplies updated Dewan Soft experience, Mama Fattoum and LMS delivery details, education dates, and AWS leadership dates. It also supplies the downloadable résumé. Muhammad approved reviewed screenshots of the three public project homepages. Client names and materials remain withheld wherever permission is not established, and the retail ERP remains planned scope.

Still needed: detailed individual/team attribution for GeoBasira and the ERP planning artifacts, approved private-product screenshots if desired, project repository links, and a current-learning classification. Do not replace these gaps with invented claims or guessed links.

The local `PORTFOLIO_BRIEF.md` contains planning information and client identities. It is intentionally ignored by Git and must remain outside this public source repository until its contents are approved for publication. Read it when present, together with `AGENTS.md`, before editing content. On a fresh clone, obtain the brief privately from the owner; the approved public content lives in `src/content/portfolio.ts`.

## Hosting

`.openai/hosting.json` records the private Sites deployment identity and static output directory. GitHub `origin` remains the owner-specified Portfolio repository. Publishing a private Sites preview does not make it publicly accessible. A custom host must serve directory index files and use `404.html` for missing routes. Set `NEXT_PUBLIC_SITE_URL` to the final origin before generating canonical URLs and the sitemap.

No application backend, database, analytics, cookies, contact-submission service, or external runtime font request is required. Contact links open an email draft; the website itself does not send messages.

## Docker and Dokploy

The root `Dockerfile` builds and validates the static export with Node.js, then copies only the generated site into Nginx. The runtime runs as the unprivileged `nginx` user, listens on **8080**, and includes a **`/healthz`** health check. Node.js, npm dependencies, source files, and private planning material are absent from the runtime. Image digests are pinned for reproducibility; update them when adopting base-image security updates.

### Deploy as a Dokploy Application

1. Create an **Application** and connect `Muhammad-A-Foad/Portfolio`, branch **`main`**, with the repository root as the build path.
2. Select the **Dockerfile** build type. Use **`Dockerfile`** and build context **`.`**. Leave the run command unset so the image starts Nginx itself.
3. In **Environment → Build Time Arguments**, set `NEXT_PUBLIC_SITE_URL` to the full public origin, such as `https://portfolio.example.com` (replace this example with your domain). Use a build argument rather than only a runtime environment variable.
4. Add your domain with path **`/`**, **container port `8080`**, and HTTPS enabled. Point its DNS records to the VPS. Let Dokploy/Traefik terminate TLS and forward HTTP to the container.
5. Deploy. No database, persistent volume, custom start command, or public host-port mapping is needed. Use `/healthz` if configuring a separate readiness check.

`NEXT_PUBLIC_SITE_URL` is required by the Docker build. It sets canonical URLs, social-image URLs, and the sitemap. Changing a runtime environment variable after the image is built does not update static files: **rebuild/redeploy whenever the origin changes**. Docker builds need outbound access to npm and Google Fonts; fonts are self-hosted in the resulting image and require no external font requests at runtime.

Dokploy references: [Dockerfile build configuration](https://docs.dokploy.com/docs/core/applications/build-type), [environment variables](https://docs.dokploy.com/docs/core/variables), and [domain/container-port settings](https://docs.dokploy.com/docs/core/domains).

### Run the production container locally

Replace the example origin with your intended domain:

```sh
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://portfolio.example.com -t muhammad-portfolio .
docker run --rm -d --name muhammad-portfolio -p 127.0.0.1:8080:8080 --read-only --tmpfs /tmp:rw,noexec,nosuid,size=16m --cap-drop ALL --security-opt no-new-privileges:true muhammad-portfolio
```

Visit `http://127.0.0.1:8080`. Check health with `docker inspect --format '{{.State.Health.Status}}' muhammad-portfolio`, and stop it with `docker stop muhammad-portfolio`.

Nginx serves generated case-study directories directly, uses the real portfolio 404 page for missing routes (with HTTP 404), keeps slash redirects relative for proxy compatibility, compresses text assets, and gives hashed Next.js assets immutable caching. HTML and other stable filenames revalidate on subsequent visits.
