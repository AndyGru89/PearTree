# PearTree.pro — Data Model 0.1

This is a conceptual model, not yet a Prisma schema.

## Identity
### User
id, email, emailVerifiedAt, status, createdAt, updatedAt.

### Session / AuthAccount
Provider/session-specific data kept separate from business entities.

## Tenancy
### Organization
id, name, slug, status, createdAt, updatedAt.

### Membership
id, organizationId, userId, role, status, createdAt.
Unique active membership per user/organization.

### Invitation
id, organizationId, email, role, tokenHash, expiresAt, acceptedAt, invitedByUserId.

## Projects
### Project
id, organizationId, name, slug, status, defaultLocale, timezone, createdAt, updatedAt.

### ProjectBranding
projectId, logoAssetId, faviconAssetId, designTokens/configuration.

### Domain
id, projectId, hostname, type, status, verification metadata, isCanonical, createdAt, verifiedAt.

## Platform governance
### AuditEvent
id, organizationId?, projectId?, actorUserId?, actorType, action, targetType, targetId, metadata, requestId, createdAt.

### FeatureEntitlement
organization/project scope, feature key, state/limits. Billing provider concepts must not leak directly into authorization checks.

## Required ownership rule
Every tenant-owned aggregate must have an unambiguous path to Organization. Project-owned records reference Project; project resolution yields Organization.

## ID strategy
Use opaque, non-sequential public identifiers. Database implementation may choose UUID/UUIDv7/CUID-style IDs via ADR.

## Deletion
Prefer explicit lifecycle states and controlled deletion workflows. Define retention and hard-delete policy before storing production personal/business data.

## Indexing baseline
Unique organization slug; unique project slug within organization (unless global routing requires otherwise); unique normalized hostname; indexes on foreign keys, status and operational lookup fields.

## Tenant isolation
Application authorization is mandatory. Database-level defense-in-depth (including possible PostgreSQL RLS) must be evaluated before production in a dedicated ADR and tested with adversarial cross-tenant cases.
