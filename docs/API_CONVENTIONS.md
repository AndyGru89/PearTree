# PearTree.pro — API Conventions

## Scope
Applies to internal HTTP endpoints and future external/public API surfaces.

## Principles
- explicit versioning for external APIs;
- stable opaque identifiers;
- tenant context resolved server-side;
- consistent error model;
- idempotency for retryable mutations;
- predictable pagination/filtering;
- no leakage of internal stack details.

## Resource naming
Use nouns and consistent pluralization. Prefer stable resource-oriented paths over action-heavy RPC paths unless the operation is genuinely a command.

## Authentication
Authentication mechanism is defined by ADR-0005. Authorization is always PearTree policy/RBAC.

## Errors
Canonical envelope concept:
- `code`: stable machine-readable error code;
- `message`: safe human-readable summary;
- `requestId`: correlation identifier;
- `details`: optional structured field validation or safe metadata.

Do not expose SQL, secrets, stack traces, internal object paths or third-party credentials.

## Status behavior
Use standard HTTP semantics. Authorization should avoid unnecessary resource-existence leakage when denying access to cross-tenant resources.

## Validation
All external input is schema-validated before business logic.

## Pagination
Prefer cursor pagination for large mutable collections. Offset pagination is acceptable for small/admin views where documented.

## Filtering/sorting
Allowlisted fields only. Never interpolate arbitrary user sort/filter expressions into SQL.

## Idempotency
Required for:
- billing-like commands;
- webhook-driven state changes;
- queue-triggering commands with external side effects;
- destructive/retry-sensitive operations.

## Rate limits
Public/auth endpoints define abuse thresholds. Limits may be enforced at Cloudflare edge and/or application policy.

## Compatibility
Breaking external API changes require a new version or explicit migration process.
