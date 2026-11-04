import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const port = Number(process.env.PORT ?? 4173);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".webp": "image/webp",
};
if (!existsSync(path.join(root, "index.html")))
  throw new Error("Run npm run build before npm start.");

const server = http.createServer((request, response) => {
  let filename;
  try {
    const pathname = decodeURIComponent(
      new URL(request.url ?? "/", "http://localhost").pathname,
    );
    filename = path.resolve(root, `.${pathname}`);
    if (filename !== root && !filename.startsWith(`${root}${path.sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if (existsSync(filename) && statSync(filename).isDirectory())
      filename = path.join(filename, "index.html");
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const exists = existsSync(filename) && statSync(filename).isFile();
  if (!exists) filename = path.join(root, "404.html");
  response.writeHead(exists ? 200 : 404, {
    "Content-Type": mime[path.extname(filename)] ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    ...(exists && path.extname(filename) === ".pdf"
      ? {
          "Content-Disposition": `attachment; filename="${path.basename(filename)}"`,
        }
      : {}),
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(filename).pipe(response);
});
server.listen(port, "127.0.0.1", () =>
  console.log(`Portfolio preview: http://127.0.0.1:${port}`),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => server.close(() => process.exit(0)));
