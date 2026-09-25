# PearTree.pro — Architecture

## Architectural style
Start as a **Cloudflare-native modular monolith** in a TypeScript monorepo. Domain boundaries are explicit packages/modules; business logic remains portable, while compute, storage, queues, security and observability use Cloudflare platform primitives.

## Platform decision
PearTree runs primarily on **Cloudflare Workers**, not on a traditional VPS. Cloudflare is the default production platform for compute, DNS, CDN, security, object storage and asynchronous processing.

Current Cloudflare guidance recommends **vinext on Workers** for new Next.js applications. PearTree will therefore validate a vinext-based Next.js deployment during Foundation instead of assuming a conventional Node.js server deployment.

## Proposed logical applications
- `web`: public marketing/product surface and tenant rendering.
- `console`: customer control plane.
- `admin`: restricted PearTree operations console.

These may share one or more Workers initially, but authorization boundaries remain explicit.

## Core Cloudflare services
- **Workers** — application runtime/API/SSR at the edge.
- **D1** — primary relational database candidate for Foundation.
- **R2** — media, uploads, exports and other object storage.
- **Queues** — durable asynchronous jobs such as email, webhooks, imports and media processing.
- **KV** — optional cache/configuration for eventually consistent workloads only.
- **Durable Objects** — reserved for strongly coordinated per-entity state, realtime or concurrency-sensitive workloads.
- **Turnstile** — abuse protection for public forms/auth-sensitive entry points where appropriate.
- **WAF / DDoS / DNS / CDN** — default perimeter and delivery layer.
- **Workers Observability / analytics** — runtime visibility; additional providers require an ADR.
- **Workers AI / Vectorize / AI Gateway** — optional later AI capabilities, not Foundation dependencies.

## Core domains
Identity → Organizations/Memberships → Projects → Domains/Branding → Content → Listings → CRM → Commerce → Automation.

## Baseline stack
- TypeScript
- React / Next.js-compatible application architecture
- vinext + Cloudflare Workers (to be validated in Foundation)
- D1 for relational data unless ADR testing identifies a blocking requirement
- R2 for object/file storage
- Queues for retryable asynchronous processing
- Wrangler for local/remote Cloudflare development and deployment
- GitHub Actions and/or Workers Builds for CI/CD, finalized by ADR

## Data architecture
D1 is serverless SQL with SQLite semantics and Worker bindings. The domain model must remain storage-aware enough to respect D1 constraints without leaking vendor-specific bindings throughout business logic.

Database access goes through a repository/data-access boundary. If PearTree later requires PostgreSQL-specific capabilities, the architecture may introduce Hyperdrive/PostgreSQL behind that boundary through an ADR rather than rewriting domain services.

## Request invariants
1. Authenticate actor where required.
2. Resolve organization/project context server-side.
3. Authorize action against membership/role/policy.
4. Query/mutate data using tenant scope.
5. Validate input at trust boundary.
6. Emit audit/security event when applicable.
7. Never trust a client-supplied tenant ID as authorization.

## Module boundaries
Modules may depend on Core contracts but must not bypass another module's public service boundary for business mutations. Shared UI and utility packages cannot contain hidden domain authorization.

## API
Version externally consumed APIs. Use stable IDs, structured error codes, pagination and idempotency keys for retried mutations. Webhooks are signed, replay-resistant and idempotently consumed.

## Async work
Use Cloudflare Queues for durable retryable jobs such as email, domain verification, media processing, imports/exports and webhook delivery. Jobs always include authenticated tenant/project context and idempotency metadata.

Short non-critical post-response work may use Worker background execution primitives only where loss/retry semantics are acceptable.

## Object storage
Use R2 bindings from Workers for tenant media and generated artifacts. Access control remains application-mediated by default. Public buckets require explicit review and must not expose private tenant assets.

## Edge and security
Cloudflare DNS/CDN/WAF/DDoS protection is part of the platform boundary. Rate limiting, bot/abuse controls and Turnstile can be applied at exposed entry points. Application authorization remains mandatory even when edge controls are present.

## Observability
Structured logs with correlation IDs; metrics for availability/latency/errors; traces around external calls; Worker runtime observability; health/readiness probes where meaningful. Never log secrets or unnecessary personal data.

## Environments
Local → Preview/CI → Staging → Production. Each environment uses separate Cloudflare resources/bindings where practical. Local development must never default to production D1/R2 resources. Production data must not be copied to lower environments without approved sanitization.

## Infrastructure as code
Cloudflare resource definitions must be reproducible through version-controlled Wrangler configuration and, where resource lifecycle warrants it, Terraform or Pulumi. Manual dashboard-only configuration should be minimized and documented.

## Decision records
Material architectural choices are stored under `docs/adr/`. An ADR records context, decision, consequences and migration/reversal considerations.
