import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";

const root = path.resolve("out");
function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const filename = path.join(directory, name);
    return statSync(filename).isDirectory() ? walk(filename) : [filename];
  });
}
assert.ok(existsSync(root), "Build output is missing. Run npm run build.");
const pages = walk(root).filter((filename) => filename.endsWith(".html"));
let links = 0;
for (const filename of pages) {
  const html = readFileSync(filename, "utf8");
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) ?? []).length,
    1,
    `Expected one h1: ${filename}`,
  );
  assert.ok(html.includes('lang="en"'), `Missing language: ${filename}`);
  assert.ok(
    html.includes('name="description"'),
    `Missing description: ${filename}`,
  );
  assert.ok(
    html.includes('id="main"'),
    `Missing main skip-link target: ${filename}`,
  );
  const isErrorPage =
    filename.endsWith("404.html") ||
    filename.includes(`${path.sep}404${path.sep}`) ||
    filename.includes("_not-found");
  if (!isErrorPage) {
    assert.ok(/rel="canonical"/.test(html), `Missing canonical: ${filename}`);
    assert.ok(
      /property="og:image"/.test(html),
      `Missing social image: ${filename}`,
    );
  }
  for (const match of html.matchAll(/(?:href|src)="([^"#]*)(#[^"]*)?"/g)) {
    const [, href, fragment] = match;
    if (/^(https?:|mailto:|data:|tel:)/.test(href)) continue;
    const cleanHref = href.split("?")[0];
    const target = cleanHref.startsWith("/")
      ? path.join(root, cleanHref)
      : cleanHref
        ? path.join(path.dirname(filename), cleanHref)
        : filename;
    const resolved =
      existsSync(target) && statSync(target).isDirectory()
        ? path.join(target, "index.html")
        : target;
    assert.ok(existsSync(resolved), `Broken local link ${href} in ${filename}`);
    if (fragment && resolved.endsWith(".html")) {
      const id = decodeURIComponent(fragment.slice(1));
      assert.ok(
        readFileSync(resolved, "utf8").includes(`id="${id}"`),
        `Missing anchor ${fragment} in ${resolved}`,
      );
    }
    links++;
  }
}
for (const asset of ["robots.txt", "sitemap.xml", "social.png", "icon.svg"])
  assert.ok(existsSync(path.join(root, asset)), `Missing ${asset}`);
const home = readFileSync(path.join(root, "index.html"), "utf8");
const resumeLinks = [
  ...home.matchAll(/<a\b[^>]*href="(\/resume\/[^"#]+\.pdf)"[^>]*>/g),
];
assert.ok(
  resumeLinks.length >= 3,
  "Résumé must be accessible from multiple homepage locations.",
);
for (const [tag, href] of resumeLinks) {
  assert.ok(
    /\bdownload(?:=|\s|>)/.test(tag),
    `Résumé link must download: ${href}`,
  );
  const pdf = readFileSync(path.join(root, href));
  assert.equal(
    pdf.subarray(0, 5).toString(),
    "%PDF-",
    "Résumé must be a real PDF.",
  );
}
console.log(
  `Verified ${pages.length} HTML pages, ${links} local links/assets, metadata, anchors, and ${resumeLinks.length} résumé download links.`,
);
