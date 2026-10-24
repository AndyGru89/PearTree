#!/usr/bin/env node
// Guards the staging deploy: the built Worker config must target peartree-staging only,
// with no domains/routes and no bindings beyond assets, images and APP_ENV.

import { readFileSync } from "node:fs";

const configPath = ".cloudflare/output/v0/workers/default/worker.config.json";
const config = JSON.parse(readFileSync(configPath, "utf8"));
const bindings = Object.entries(config.env ?? {})
  .map(([name, binding]) => `${name}:${binding.type}`)
  .sort()
  .join(",");

function fail(message) {
  console.error(`FAIL ${message}`);
  process.exit(1);
}

if (config.name !== "peartree-staging") fail(`unexpected Worker name ${config.name}`);
if (config.domains?.length || config.routes?.length) fail("staging must not declare domains or routes");
if (bindings !== "APP_ENV:text,ASSETS:assets,IMAGES:images") fail(`unexpected bindings ${bindings}`);
if (config.env.APP_ENV.value !== "staging") fail("APP_ENV must be staging");

console.log(`PASS worker=${config.name} bindings=${bindings} domains=none routes=none`);
