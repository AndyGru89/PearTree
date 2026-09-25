# ADR-0003 — R2 storage policy

**Status:** Accepted  
**Date:** 2026-09-25

## Context
PearTree needs storage for logos, images, imports, exports and future generated documents.

## Decision
Use **Cloudflare R2** as primary object storage.

Defaults:
- private buckets;
- application-mediated access;
- tenant/project namespaced object keys;
- metadata stored in D1, binary object in R2;
- immutable/object-version-friendly naming for generated assets where practical;
- no direct public bucket exposure without explicit review.

## Consequences
R2 becomes the binary storage system while authorization remains in PearTree services. Deleting a database row and deleting an object are separate operations and must be coordinated/idempotent.

## Validation
- upload/read/delete flow;
- cross-tenant access denial;
- content type/disposition tests;
- orphan cleanup strategy;
- large upload strategy before enabling large customer files.

## Reversal / migration
Storage access is wrapped behind an asset service so another S3-compatible store can be introduced if needed.
