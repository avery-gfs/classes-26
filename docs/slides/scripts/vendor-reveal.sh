#!/usr/bin/env bash
# Copies the subset of reveal.js we ship from node_modules into vendor/.
# Run after bumping the reveal.js version in package.json:
#   npm install && npm run vendor
set -euo pipefail
cd "$(dirname "$0")/.."

src=node_modules/reveal.js
dst=vendor/reveal

[ -d "$src" ] || { echo "run 'npm install' first" >&2; exit 1; }

fonts=dist/theme/fonts/source-sans-pro

mkdir -p "$dst"/dist/theme "$dst"/plugin/{markdown,math,highlight,notes} "$dst"/"$fonts"

cp "$src"/dist/reset.css       "$dst"/dist/
cp "$src"/dist/reveal.css      "$dst"/dist/
cp "$src"/dist/reveal.esm.js   "$dst"/dist/
cp "$src"/dist/theme/white.css "$dst"/dist/theme/

# white.css @imports this, and without it every deck silently falls back to
# whatever the system calls Helvetica — which on Linux is Nimbus Sans, whose
# vertical metrics put a quarter of an em of slack under every line.
# Only the .woff files ship: the .eot and .ttf alternates beside them upstream
# are for browsers that predate it, and they are four fifths of the weight.
cp "$src"/"$fonts"/*.woff "$src"/"$fonts"/LICENSE "$dst"/"$fonts"/
node -e '
  const fs = require("fs");
  const [from, to] = process.argv.slice(1);
  const css = fs.readFileSync(from, "utf8").replace(
    / *src:[^;]*;(?:\n *src:[^;]*;)?/g,
    (block) => {
      const woff = /url\(([^)]*\.woff[^)]*)\)/.exec(block);
      return woff ? `    src: url(${woff[1]}) format("woff");` : block;
    },
  );
  fs.writeFileSync(to, css);
' "$src"/"$fonts"/source-sans-pro.css "$dst"/"$fonts"/source-sans-pro.css

cp "$src"/plugin/markdown/markdown.esm.js   "$dst"/plugin/markdown/
cp "$src"/plugin/math/math.esm.js           "$dst"/plugin/math/
cp "$src"/plugin/highlight/highlight.esm.js "$dst"/plugin/highlight/
cp "$src"/plugin/notes/notes.esm.js         "$dst"/plugin/notes/

node -e 'console.log("vendored reveal.js " + require("./node_modules/reveal.js/package.json").version)'
