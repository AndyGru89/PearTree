# ADR-0001 — Cloudflare-native platform

**Status:** Accepted  
**Date:** 2026-09-25

## Context
PearTree is a greenfield multi-tenant SaaS. There is no requirement to preserve a traditional VPS/Node deployment model. The platform needs global delivery, tenant domains, security controls, object storage, asynchronous processing and a low-operations infrastructure model.

Cloudflare currently supports full-stack application runtimes on Workers. Its documentation recommends vinext as the default path for new Next.js applications on Workers. D1 provides serverless relational SQL with SQLite semantics, R2 provides object storage accessible through Worker bindings, and Queues provides background job/message processing.

## Decision
PearTree will be designed **Cloudflare-native**.

Foundation defaults:
- application runtime: Cloudflare Workers;
- web framework: Next.js-compatible architecture using vinext, subject to compatibility validation;
- relational data: Cloudflare D1;
- object/media storage: Cloudflare R2;
- asynchronous jobs: Cloudflare Queues;
- DNS/CDN/perimeter: Cloudflare;
- configuration/deployment: Wrangler plus version-controlled infrastructure definitions;
- optional later services: KV, Durable Objects, Turnstile, Workers AI, Vectorize and AI Gateway where their workload matches the product need.

The core PearTree production runtime will not depend on a traditional VPS.

## Consequences
### Positive
- One operational platform for runtime, DNS, edge security, storage and jobs.
- Direct Worker bindings reduce infrastructure glue.
- Edge-native tenant delivery and custom-domain workflows fit the product.
- Lower server administration burden.

### Constraints
- Code must target the Workers runtime rather than assume unrestricted Node.js server behavior.
- vinext is currently documented as beta; Foundation must run compatibility tests and maintain an exit path.
- D1 uses SQLite semantics; schema/query design must be tested against expected multi-tenant workloads.
- Vendor bindings must be isolated behind domain/data service boundaries where practical.

## Exit / fallback strategy
This ADR does not permit business logic to become inseparable from Cloudflare-specific APIs.

If D1 proves unsuitable, the data-access boundary may move relational persistence to PostgreSQL (for example through Hyperdrive) without changing domain contracts.

If vinext compatibility blocks required application behavior, PearTree may use another Workers-compatible framework/runtime path through a replacement ADR.

## Validation required before 0.1 implementation
1. Minimal full-stack app builds and runs on Workers.
2. Local/staging/prod binding separation is proven.
3. D1 migration and recovery workflow is documented/tested.
4. R2 private-asset access pattern is tested.
5. Queue retry/idempotency behavior is specified.
6. Authentication/session design is verified in Workers runtime.
7. CI/CD can deploy without exposing production secrets.
