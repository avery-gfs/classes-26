import { CLASS_REPO, deckHref, deckPaths, dirOf, fetchTree } from "./github.js";

const outlineEl = document.getElementById("outline");
const freshnessEl = document.getElementById("freshness");

// The listing lives in localStorage, which no amount of reloading clears — so
// reloading is the way to force a refetch: treat any reload, hard or not, as a
// request to go back to GitHub. A plain visit uses the cache if it's fresh.
load({ force: navigationType() === "reload" });

// -- the class repo listing --------------------------------------------------

async function load({ force = false } = {}) {
  setStatus("Loading…");
  freshnessEl.textContent = "";

  let tree;
  try {
    tree = await fetchTree(CLASS_REPO, { force });
  } catch (err) {
    setStatus(err.message, "error");
    return;
  }

  render(deckPaths(tree.paths));

  // Only a stale list is worth saying anything about: it is out of date and
  // there is a reason why.
  freshnessEl.textContent = tree.stale
    ? `Showing a cached list — ${
      tree.error?.message ?? "GitHub is unreachable."
    }`
    : "";
  freshnessEl.classList.toggle("warn", !!tree.stale);
}

function navigationType() {
  try {
    return performance.getEntriesByType("navigation")[0]?.type;
  } catch {
    return "";
  }
}

// -- rendering ---------------------------------------------------------------

function render(paths) {
  // docs/ is this site's own source rather than course work, so it isn't
  // listed; the top-level readme and any sibling notes are, as the
  // curriculum's overview.
  const units = paths
    .map((path) => ({ dir: dirOf(path), loc: { ...CLASS_REPO, path } }))
    .filter(({ dir }) => !/^docs(\/|$)/.test(dir));

  if (!units.length) {
    setStatus("No decks found in this repo.");
    return;
  }

  outlineEl.replaceChildren(
    el(
      "ul",
      { class: "decks" },
      units.map(({ dir, loc }) =>
        el(
          "li",
          {},
          el("a", { class: "unit", href: deckHref(loc) }, dir || loc.path),
        )
      ),
    ),
  );
}

function setStatus(text, kind = "") {
  outlineEl.replaceChildren(el("p", { class: `status ${kind}` }, text));
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v != null) node.setAttribute(k, v);
  }
  for (const child of [].concat(children)) {
    if (child != null) node.append(child);
  }
  return node;
}
