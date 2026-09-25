# PearTree.pro — Project and Domain Lifecycle

## Project lifecycle
States:
- DRAFT
- ACTIVE
- SUSPENDED
- ARCHIVED

### DRAFT
Project exists in Console but is not publicly available as an active tenant site.

### ACTIVE
Public rendering and enabled project modules may operate.

### SUSPENDED
Customer access may remain available for remediation, but public/project operations are restricted according to suspension reason.

### ARCHIVED
Project is inactive and retained according to retention policy. Archive is preferred over immediate destructive deletion.

## Allowed transitions
DRAFT -> ACTIVE
DRAFT -> ARCHIVED
ACTIVE -> SUSPENDED
ACTIVE -> ARCHIVED
SUSPENDED -> ACTIVE
SUSPENDED -> ARCHIVED
ARCHIVED -> restored state only through an explicit future recovery policy.

All privileged transitions are audited.

## Domain model
Domain types:
- platform subdomain;
- custom domain.

Domain states:
- PENDING
- VERIFYING
- VERIFIED
- ACTIVE
- FAILED
- REMOVED

A Project may have multiple domains but one canonical public domain.

## Domain onboarding
1. Customer enters hostname.
2. Normalize and validate hostname.
3. Enforce global uniqueness.
4. Produce required ownership/DNS verification instructions.
5. Verify ownership/configuration asynchronously.
6. Provision routing/TLS.
7. Mark ACTIVE only after validation.
8. Optionally set canonical.
9. Audit all state changes.

## Routing
Request hostname resolves to one active Project/Domain mapping. Unknown or inactive domains fail safely and must not fall back to another tenant.

## Domain removal
Removal:
- disables routing;
- invalidates canonical status;
- schedules provider cleanup;
- preserves audit history.

## Failure UX
Console must expose:
- current state;
- actionable verification details;
- last error category without leaking secrets;
- retry action when safe;
- support path for non-recoverable cases.
