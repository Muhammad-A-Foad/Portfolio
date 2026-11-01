# syntax=docker/dockerfile:1

# Multi-platform image digests keep builds reproducible. Refresh them for base-image updates.
FROM node:24-bookworm-slim@sha256:c86ecead9e55a5210ac1727de38a4ca840bf03dcaf34dc9749addbf383b1920c AS dependencies
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund --fetch-retries=5

FROM dependencies AS build
COPY next.config.ts next-env.d.ts tsconfig.json ./
COPY src ./src
COPY public ./public
COPY scripts ./scripts

# Next.js embeds this origin into the static export, so it must be set at build time.
ARG NEXT_PUBLIC_SITE_URL
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
RUN test -n "$NEXT_PUBLIC_SITE_URL" \
    || (echo "NEXT_PUBLIC_SITE_URL is required: set it to the public site origin." >&2; exit 1)
RUN npm run build && npm run typecheck && npm run verify

FROM nginx:stable-alpine@sha256:0e52bd054126cdc040b1276c0af347aeb02a41b9cfe305d6094767ac30e97949 AS production
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/out /usr/share/nginx/html

USER nginx
EXPOSE 8080
STOPSIGNAL SIGQUIT
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1

# Bypass the base image's root-oriented configuration scripts.
ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
