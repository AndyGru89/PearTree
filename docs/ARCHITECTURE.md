# PearTree.pro — Architecture

## Architectural style
Start as a **modular monolith** in a TypeScript monorepo. Domain boundaries are explicit packages/modules; database ownership and service interfaces must make later extraction possible without premature distributed systems.

## Proposed logical applications
- `web`: public marketing/product surface and, where appropriate, tenant rendering.
- `console`: customer control plane.
- `admin`: restricted PearTree operations console.

Deployment topology may combine these initially; logical authorization boundaries remain separate.

## Core domains
Identity → Organizations/Memberships → Projects → Domains/Branding → Content → Listings → CRM → Commerce → Automation.

## Baseline stack
- TypeScript
- React / Next.js
- PostgreSQL
- Prisma or equivalent typed data layer
- object storage compatible with S3 API
- queue/cache only when a documented workload requires it
- GitHub Actions for CI

Specific vendors require ADRs rather than being hard-coded into the product model.

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
Use background jobs for domain verification, email, media processing, imports/exports, webhook delivery and other retryable operations. Jobs carry tenant/project context and are safe to retry.

## Observability
Structured logs with correlation IDs; metrics for availability/latency/errors; traces across external calls; error reporting; health/readiness endpoints. Never log secrets or unnecessary personal data.

## Security
Fail-closed authorization, least privilege, CSRF/session protections appropriate to auth model, rate limiting at abuse-sensitive boundaries, encryption in transit/at rest through infrastructure, secure secret management, dependency scanning and auditable privileged actions.

## Environments
Local → Preview/CI → Staging → Production. Production data must not be copied to lower environments without an approved sanitization process.

## Decision records
Material architectural choices are stored under `docs/adr/`. An ADR records context, decision, consequences and migration/reversal considerations.
