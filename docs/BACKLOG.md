# PearTree.pro — Delivery Backlog

This backlog follows documentation gates. Priorities: P0 security/data/availability, P1 core product, P2 enhancement.

## EPIC DOC — Documentation
### Done baseline
- Vision/PRD
- Cloudflare architecture
- data model
- multi-tenancy
- RBAC
- security/threat/privacy
- Design System
- API/events
- observability/testing
- environments/recovery
- module specifications
- ADR framework

### Remaining before code freeze is lifted
- accept/reject auth ADR after proof-of-concept;
- accept CI/CD ADR after proof-of-concept;
- define first commercial vertical and its exact MVP acceptance criteria;
- legal/privacy review items are not blockers for local Foundation coding but are blockers for commercial 1.0.

## EPIC F0 — Repository Foundation
- initialize package/workspace tooling;
- Workers/vinext minimal application;
- Wrangler configuration;
- environment validation;
- CI checks;
- staging deploy proof.

## EPIC F1 — Data Foundation
- D1 schema/migration tooling;
- User/AuthAccount;
- Organization;
- Membership;
- Invitation;
- Project;
- Domain;
- AuditEvent;
- repository tenant scope pattern;
- migration/recovery test.

## EPIC F2 — Identity
- auth proof-of-concept;
- registration/sign-in;
- verification/recovery;
- session revoke;
- invitation acceptance;
- re-auth sensitive action;
- auth abuse/rate limiting.

## EPIC F3 — Console
- app shell;
- organization switcher;
- project CRUD/lifecycle;
- branding;
- members/invites;
- domain UI;
- loading/error/empty states.

## EPIC F4 — Cloudflare resources
- D1 bindings;
- R2 private bucket/service;
- Queue producer/consumer;
- domain verification/provisioning adapter;
- Turnstile/rate limiting where required;
- observability.

## EPIC F5 — Admin
- platform role model;
- organization/project lookup;
- safe support views;
- audit search;
- operational state;
- privileged action confirmation/audit.

## EPIC F6 — Security and quality
- cross-tenant test suite;
- RBAC negative tests;
- R2 isolation tests;
- queue idempotency tests;
- critical E2E;
- dependency/supply-chain checks;
- release runbook.

## EPIC 0.2 — CMS + Listings
See `CMS.md` and `LISTINGS.md`.

## EPIC 0.3 — Leads + CRM
See `LEADS_CRM.md`.

## EPIC 0.4 — Commerce
See `COMMERCE.md`.

## EPIC 0.5 — AI + Automation
See `AI_AUTOMATION.md`.
