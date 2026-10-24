# PearTree.pro — Cloudflare Foundation runtime proof

**Status:** implementation candidate
**Date:** 2026-10-24
**Tracked by:** GitHub issue #1

## Proven locally

- official Cloudflare C3 flow selected vinext for a new Next.js-compatible Workers application;
- clean dependency graph is locked by `package-lock.json` and installable with `npm ci`;
- strict TypeScript checking succeeds after Cloudflare binding type generation;
- a Workers-compatible production build succeeds for the staging mode;
- the App Router homepage renders through the local Workers runtime;
- `/api/health` reads `APP_ENV` through `cloudflare:workers` and returns `environment: local`;
- staging and production compile to distinct Worker names;
- production custom domains are declared only in the explicit production mode.

## Environment map

| Mode | Worker | Domain behavior | Observability |
| --- | --- | --- | --- |
| local/development | `peartree-local` | local only | disabled |
| preview | `peartree-preview` | preview URL only | full sampling |
| staging | `peartree-staging` | `workers.dev` until explicitly configured | full sampling |
| production | `peartree-production` | `peartree.pro`, `www.peartree.pro` | 10% head sampling |

Unqualified `npm run deploy` intentionally targets staging. Production requires the explicit `npm run deploy:production` command.

## Commands

```bash
npm ci
npm run dev
npm run typecheck
npm run build:staging
npm run deploy:staging
```

Production deployment is not part of this proof and must follow the reviewed release path.

## Compatibility findings

Cloudflare's official generator on 2026-10-24 produced vinext with the Cloudflare Vite plugin, typed `cloudflare.config.ts`, the `cf` CLI and `@vinext/cloudflare`. These components are beta and remain behind the Foundation validation boundary. The application keeps standard App Router source structure, so replacing the deployment adapter does not require rewriting product modules.

The generated build emits non-fatal sourcemap and chunk-analysis warnings from beta vinext/Vite plugins. They do not fail typecheck or the Workers build, but should be rechecked on dependency upgrades.

The local runtime attempted to fetch a realistic `Request.cf` fixture and timed out in the restricted development network, then used Miniflare's documented placeholder. Homepage rendering, the health route and binding access still succeeded.

## Security properties

- no credentials or production resource identifiers are stored in source control;
- preview/staging do not inherit production domains;
- URL query strings are redacted from configured Worker observability;
- deployment dependencies and GitHub Actions are pinned; transitive security fixes for `fflate`, `undici` and `zod` are enforced through tested npm overrides while the upstream beta stack catches up;
- CI is read-only and receives no Cloudflare deployment credential;
- baseline browser security headers are configured at the application boundary;
- production is not deployed from this unreviewed branch.

The initial CSP permits inline scripts/styles required by the current vinext hydration output. Before tenant-authored content or authenticated UI ships, replace this compatibility allowance with a nonce/hash-based policy and verify SSR, route handlers and error responses. HSTS is intentionally deferred until the production hostname and certificate path are verified at Cloudflare's edge.

## Staging deployment path

Staging is deployed by `.github/workflows/deploy-staging.yml`, a dedicated deployment identity separate from human developer credentials (see `docs/ENVIRONMENTS.md`):

- triggers: push to `main`, push to `infra/cloudflare-foundation` (temporary, for the Issue #1 proof before merge; remove after PR #7 merges) and manual `workflow_dispatch`; never pull requests or forks;
- runs in the GitHub `staging` environment and reads only `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` from it;
- the token is account-scoped with **Workers Scripts: Edit** only, with no zone, DNS, D1, R2, Queues or KV permissions, and is never a global API key;
- `scripts/verify-staging-config.mjs` aborts the deploy unless the built Worker is `peartree-staging` with no domains/routes and only the `ASSETS`, `IMAGES` and `APP_ENV=staging` bindings;
- after deploy, `scripts/smoke.mjs <workers.dev URL> staging` checks the homepage, CSS/JS assets, security headers, the `/api/health` body and `Cache-Control: no-store`, and that nothing redirects to a production domain.

The same steps work from an authenticated workstation:

```bash
npm run build:staging && node scripts/verify-staging-config.mjs
npm run deploy:staging
node scripts/smoke.mjs https://peartree-staging.<account-subdomain>.workers.dev staging
```

### Rollback

1. List the Worker's deployments and versions: `cf workers deployments list --worker peartree-staging`.
2. Redeploy the previous known-good version to 100% traffic with `cf workers deployments create --worker peartree-staging` (`percentage` strategy, the previous `version_id` at 100).
3. Re-run `scripts/smoke.mjs` against the staging URL.
4. Source rollback: revert the offending commit on `main`; the staging workflow redeploys it.

## Local verification evidence (2026-10-24, head `52bf9ca` + staging deploy path)

- `npm ci`, `npm run typecheck`, `npm run build:staging`: pass;
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilities;
- the built `worker.config.json` is `peartree-staging` with no domains and bindings `APP_ENV:text`, `ASSETS:assets` and `IMAGES:images`; a production build is rejected by the staging guard and is the only mode that declares `peartree.pro`/`www.peartree.pro`;
- `scripts/smoke.mjs` against the local dev runtime (`local`) and against the built staging bundle served by local workerd (`vite preview --mode staging`, reports `staging`): all checks pass, including 6 `/_next/static` CSS/JS assets returning 200;
- build warnings are non-fatal beta-toolchain notices only: `SOURCEMAP_BROKEN` from rsc/vinext plugins, one `INEFFECTIVE_DYNAMIC_IMPORT` for vinext's default global error shim, and the "unclassified route" notice for `/`.

## Still required for issue #1 acceptance

- provision the GitHub `staging` environment secrets (or an equivalent scoped token for a workstation deploy);
- deploy the candidate to the real `peartree-staging` Worker;
- verify the public staging URL and `/api/health` at Cloudflare's edge;
- record the deployed version/commit and rollback target.

These steps require authenticated Cloudflare access and are intentionally separate from local proof. As of 2026-10-24 no `peartree-*` Worker exists on the account, so there is no name conflict.
