// Static file server for local development, with no dependencies:
//
//   npm run serve
//
// It exists mainly to send `Cache-Control: no-store`. Python's http.server
// sends no cache headers at all, which lets the browser heuristically cache
// app/*.js — so an edit here would appear to have no effect, and even a hard
// reload doesn't reliably reach a script's own fetch() calls. Nothing is cached
// here, so what you load is always what's on disk.
import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const port = Number(process.env.PORT) || 6700;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://localhost").pathname);

  // normalize() collapses `..`, so the join can't escape the project.
  const file = join(root, normalize(path).replace(/^(\.\.[/\\])+/, ""));
  const target = (await isDirectory(file)) ? join(file, "index.html") : file;

  try {
    const info = await stat(target);
    if (!info.isFile()) throw new Error("not a file");

    res.writeHead(200, {
      "Content-Type": TYPES[extname(target).toLowerCase()] ?? "application/octet-stream",
      "Content-Length": info.size,
      "Cache-Control": "no-store",
    });
    createReadStream(target).pipe(res);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain", "Cache-Control": "no-store" });
    res.end(`Not found: ${path}\n`);
  }
}).listen(port, () => console.log(`http://localhost:${port}`));

async function isDirectory(path) {
  try {
    return (await stat(path)).isDirectory();
  } catch {
    return false;
  }
}
