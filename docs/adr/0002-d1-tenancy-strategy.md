# ADR-0002 — D1 tenancy strategy

**Status:** Accepted  
**Date:** 2026-09-25

## Context
PearTree requires strict tenant isolation while keeping Foundation operationally simple. Database-per-tenant would increase provisioning and migration complexity before workload characteristics are known.

## Decision
Foundation uses a **shared D1 database with logical tenant isolation**.

Rules:
- Organization is the primary tenant boundary.
- Project-owned rows resolve to exactly one Organization.
- Tenant-owned repositories require tenant/project scope.
- Sensitive/high-volume tables may duplicate `organization_id` for safer/scoped queries.
- Customer request paths do not execute cross-tenant reporting queries.
- Migrations are global and version controlled.
- Cross-tenant isolation is covered by adversarial tests.

## Consequences
### Positive
- simple provisioning and migrations;
- easy platform-level consistency;
- fewer Cloudflare resources in Foundation.

### Negative
- application authorization must be correct on every access;
- a bad unscoped query has larger blast radius;
- future scale may require sharding/database groups.

## Alternatives considered
- D1 database per Organization;
- D1 database per Project;
- PostgreSQL from day one.

## Validation
Before 0.1 release:
- cross-tenant read/write denial tests;
- repository APIs cannot omit scope for tenant-owned data;
- migration/recovery procedure tested;
- representative query/index performance measured.

## Reversal / migration
Introduce a tenant-to-database routing layer and migrate selected organizations/projects to D1 shards or a different relational backend without changing domain contracts.
