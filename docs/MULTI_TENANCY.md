# PearTree.pro — Multi-Tenancy Specification

## Status
Baseline for Foundation 0.1.

## 1. Tenant model
The primary tenant boundary is **Organization**.

An Organization owns:
- Memberships and Invitations
- Projects
- Entitlements
- Organization-scoped settings
- Organization-level audit events

A Project always belongs to exactly one Organization.

Project-owned entities inherit tenant ownership through Project:
`Entity -> Project -> Organization`.

## 2. Isolation invariant
A user authenticated to Organization A must never be able to read, modify, enumerate or infer protected resources owned by Organization B unless explicitly authorized through a platform-level support/admin policy.

Tenant isolation is a security invariant, not a UI feature.

## 3. Authorization flow
Every protected request must:
1. authenticate the actor;
2. resolve the requested resource server-side;
3. derive its Organization/Project ownership;
4. resolve active Membership;
5. evaluate permission;
6. apply tenant-scoped data access;
7. audit privileged mutation where required.

Client-provided `organizationId` or `projectId` can select context but can never establish authorization.

## 4. Data access rules
- No unrestricted repository method may be callable from request handlers for tenant-owned data.
- Data-access APIs require explicit tenant/project scope.
- Bulk operations must include tenant scope in the query, not filter after retrieval.
- Background jobs carry immutable tenant/project identifiers and must re-authorize system capability before mutation.
- Cache keys must include tenant/project scope.
- Search indexes and analytics events must preserve tenant scope.
- R2 object keys must be tenant/project namespaced.

## 5. D1 strategy
Foundation starts with shared D1 databases and logical tenant isolation unless a later ADR selects database-per-tenant or shard groups.

All tenant-owned tables must have an unambiguous ownership path. High-risk tables should include direct `organization_id` and/or `project_id` where this reduces authorization ambiguity.

Cross-tenant joins are prohibited in customer request paths unless implemented by explicit platform-admin reporting code.

## 6. Platform administration
Platform staff tooling is separate from customer roles.

Privileged support/admin actions:
- require a dedicated platform permission;
- are visible in the audit log;
- capture actor, target tenant, action and request correlation ID;
- must not silently impersonate a customer;
- should prefer read-only support views before mutation.

## 7. Domain routing
Hostname resolution maps a request to Project server-side.

A hostname must belong to at most one active Domain record. Domain resolution cannot grant privileges; it only identifies project context.

## 8. Async and queues
Queue messages include:
- message/event ID;
- tenant/project scope;
- event type/version;
- idempotency key;
- minimal payload;
- creation timestamp.

Consumers reject malformed or orphaned tenant context and must be safe to retry.

## 9. Files and R2
Default key pattern:
`org/{organizationId}/project/{projectId}/{class}/{objectId}/...`

Private assets are served through authorized application flows or signed access patterns. Public exposure requires an explicit product decision.

## 10. Testing requirements
Mandatory tests:
- read cross-tenant denial;
- write cross-tenant denial;
- ID guessing/enumeration;
- stale membership/session;
- removed membership;
- role downgrade;
- project transfer is not supported unless explicitly designed;
- queue message with wrong tenant;
- R2 object access across tenants;
- admin/support audit coverage.

Any tenant-isolation regression is release-blocking severity P0.
