#!/usr/bin/env node
// Foundation smoke test for a running PearTree Worker.
// Usage: node scripts/smoke.mjs <base-url> <expected-environment>
// Prints only non-sensitive facts (status codes, header presence, health body).

const [baseArg, expectedEnvironment] = process.argv.slice(2);

if (!baseArg || !expectedEnvironment) {
  console.error("usage: node scripts/smoke.mjs <base-url> <expected-environment>");
  process.exit(2);
}

const base = new URL(baseArg);
const productionHosts = new Set(["peartree.pro", "www.peartree.pro"]);
const requiredPageHeaders = [
  "content-security-policy",
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "permissions-policy",
];

const failures = [];

function check(condition, message) {
  console.log(`${condition ? "PASS" : "FAIL"} ${message}`);
  if (!condition) failures.push(message);
}

async function get(path) {
  const url = new URL(path, base);
  const response = await fetch(url, { redirect: "manual", headers: { "user-agent": "peartree-smoke/1" } });
  return { url, response };
}

function assertNoProductionRedirect(label, response) {
  const location = response.headers.get("location");
  const target = location ? new URL(location, base).hostname : null;
  check(!target || !productionHosts.has(target), `${label} does not redirect to a production domain`);
}

if (expectedEnvironment !== "production") {
  check(!productionHosts.has(base.hostname), `target ${base.hostname} is not a production domain`);
}

const home = await get("/");
check(home.response.status === 200, `GET / -> ${home.response.status}`);
assertNoProductionRedirect("GET /", home.response);
for (const header of requiredPageHeaders) {
  check(home.response.headers.has(header), `GET / has ${header}`);
}
const html = await home.response.text();
check(/<html[\s>]/i.test(html), "GET / returns an HTML document");

const assetPaths = [...new Set([...html.matchAll(/(?:src|href)="(\/[^"]+\.(?:js|css))"/g)].map((match) => match[1]))];
check(assetPaths.length > 0, `GET / references ${assetPaths.length} JS/CSS assets`);
for (const assetPath of assetPaths) {
  const asset = await get(assetPath);
  check(asset.response.status === 200, `GET ${assetPath} -> ${asset.response.status}`);
  await asset.response.arrayBuffer();
}

const health = await get("/api/health");
check(health.response.status === 200, `GET /api/health -> ${health.response.status}`);
assertNoProductionRedirect("GET /api/health", health.response);
check(health.response.headers.get("cache-control") === "no-store", "GET /api/health has Cache-Control: no-store");
const body = await health.response.json().catch(() => null);
console.log(`health body: ${JSON.stringify(body)}`);
check(body?.status === "ok", 'health status is "ok"');
check(body?.service === "peartree", 'health service is "peartree"');
check(body?.environment === expectedEnvironment, `health environment is "${expectedEnvironment}"`);

if (failures.length > 0) {
  console.error(`${failures.length} smoke check(s) failed`);
  process.exit(1);
}
console.log("all smoke checks passed");
