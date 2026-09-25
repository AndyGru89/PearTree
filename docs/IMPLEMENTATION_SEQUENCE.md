# PearTree.pro — Implementation Sequence

## Purpose
Define the mandatory build order from documentation baseline to production.

## Phase 0.1A — Cloudflare Proofs
Goal: validate the platform assumptions before product implementation expands.

Order:
1. Workers + vinext runtime;
2. authentication/session PoC;
3. D1 migrations + tenant-scoped repositories;
4. R2 private asset service;
5. Queues retry/idempotency;
6. CI/CD + environment isolation.

Exit criteria:
- staging deploy works;
- no production credentials in preview;
- auth runs on Workers;
- D1 isolation tests pass;
- R2 cross-tenant denial proven;
- Queue duplicate delivery is harmless;
- ADR-0005 and ADR-0006 accepted or replaced.

## Phase 0.1B — Core Platform
Implement:
- User/AuthAccount;
- Organization;
- Membership;
- Invitation;
- Project;
- Branding;
- Domain;
- AuditEvent;
- Entitlements skeleton;
- Console shell;
- Platform Admin shell.

Exit criteria:
A user can sign in, create an Organization, create a Project, invite a member, configure branding/domain state and see audit history.

## Phase 0.2A — Public Marketplace
Implement:
- public homepage;
- categories;
- search/browse shell;
- Listing cards;
- Listing detail;
- saved/favorites;
- seller/business relationship;
- SEO metadata primitives.

## Phase 0.2B — Listing Creation
Implement:
- create/edit draft;
- category attributes;
- R2 photos;
- autosave;
- review;
- moderation;
- publish/archive.

## Phase 0.2C — Business Profiles
Implement:
- Business;
- BusinessLocation;
- BusinessService;
- BusinessMedia;
- public company profile;
- offers/services/reviews/contact;
- business dashboard editing;
- lead form.

## Phase 0.2D — Auto Dealer Reference Vertical
Implement:
- dealer profile;
- vehicle inventory;
- vehicle filters;
- test-drive lead;
- trade-in lead;
- financing lead;
- dealer SEO landing patterns.

## Phase 0.3 — Leads & CRM
Implement:
- lead capture;
- inbox;
- pipeline;
- assignment;
- activity timeline;
- notifications;
- basic conversion analytics.

## Phase 0.4 — Commerce
Implement:
- Plans;
- Entitlements;
- subscription provider;
- billing synchronization;
- paid/promoted listings;
- premium business profiles;
- plan usage/limits.

## Phase 0.5 — SEO Engine
Implement:
- sitemap engine;
- canonical engine;
- robots/indexability policy;
- structured data;
- category/location landing pages;
- business profile SEO;
- listing SEO;
- SEO quality gate;
- Search Console integration/monitoring where supported.

## Phase 1.0 — Production Hardening
- accessibility;
- responsive polish;
- E2E;
- security review;
- observability;
- recovery drills;
- performance;
- content/legal readiness;
- pilot customer;
- production launch.

## Non-negotiable order
Do not build:
- paid plans before Entitlements;
- vertical forks before generic Business/Profile schemas;
- SEO programmatic pages before indexability rules;
- dashboards before underlying metrics/events exist;
- AI automation before deterministic workflows and permissions.
