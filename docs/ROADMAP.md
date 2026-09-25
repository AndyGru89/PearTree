# PearTree.pro — Roadmap

Roadmap is capability-based; dates are intentionally not committed before sizing.

## DOC-01 — Product definition
**Status: complete baseline.**

Vision, PRD, Cloudflare-native architecture, conceptual data model and roadmap are defined.

## DOC-02 — Governance & security
**Status: complete baseline.**

Multi-tenancy, RBAC, security, threat model, privacy, Definition of Done, agent rules, contribution rules and ADR process are documented.

Accepted platform ADRs cover Cloudflare-native runtime, shared D1 tenancy, R2 storage and Queues. Authentication and CI/CD ADRs remain Proposed until their 0.1 proof-of-concepts validate the exact implementation.

## DOC-03 — UX & platform specifications
**Status: complete baseline.**

Information architecture, Design System, Foundation UX flows, project/domain lifecycle, API conventions, events/webhooks, observability, testing, Cloudflare infrastructure, environments, recovery, SLO and module boundaries are documented.

## DOC-04 — Product modules
**Status: complete baseline.**

Specifications exist for CMS, Listings, Leads/CRM, Commerce, SEO, Analytics, Notifications and AI/Automation.

## DOC-05 — Business, pricing and go-to-market
**Status: complete baseline; market validation pending.**

Offer, pricing architecture, monetization, unit economics, marketing, GTM and sales playbook are documented.

## DOC-06 — Market, competition and SEO
**Status: complete baseline; quantitative keyword validation pending.**

Polish market research, competitor analysis, vertical scorecard, keyword architecture, 100-page SEO roadmap and 2026 Google Search constraints are documented.

## DOC-07 — Brand, mockups and frontend execution
**Status: complete baseline.**

Brand identity, design tokens, homepage, listing UX, mobile, dashboard and frontend rollout are documented.

## DOC-08 — Business profiles and vertical company pages
**Status: complete baseline.**

PearTree includes a reusable Business Profile layer with company pages, multi-location support, company listings/services/leads and initial Auto Dealer/Komis template.

Architectural principle:
**one Business Profile engine + vertical schemas + vertical UI blocks + category-specific lead forms.**

## DOC-09 — Implementation governance and release execution
**Status: complete baseline.**

Documented:
- exact implementation sequence from Cloudflare PoCs through 1.0;
- complete screen map for public marketplace, account, Console, business management, billing and Admin;
- Definition of Ready for coding issues;
- MVP acceptance criteria;
- Alpha -> Design Partner -> Beta -> Public 1.0 release plan;
- workstream ownership for Platform, Identity, Marketplace, Business Profiles, CRM, Commerce, SEO/Growth and Frontend.

### Implementation rule
No task begins because it "looks next". It must:
1. satisfy Definition of Ready;
2. belong to a documented workstream;
3. link to source-of-truth requirements;
4. have acceptance/security/testing criteria;
5. have no unresolved blocking ADR.

## DOC-10 — Mockup consolidation and responsive UI execution
**Status: complete baseline.**

The current PearTree visual references are now translated into implementation-ready documentation covering:
- approved mockup direction for public marketplace, mobile and operator console;
- page-by-page UI information architecture;
- responsive behavior for 390/430 mobile, 768/834 tablet and 1280/1440+ desktop;
- mockup coverage plan including loading, empty, error and success states;
- separation of public marketplace, customer/operator Console and privileged PearTree Admin;
- localization requirement with Polish as primary launch locale and English as secondary;
- rule that generated visual mockups are concept references, not literal production data/copy.

Existing `DESIGN_TOKENS.md`, `BRAND_IDENTITY.md`, `MOCKUP_IMPLEMENTATION_PLAN.md` and `FRONTEND_ROADMAP.md` remain the canonical implementation sources; duplicate specifications were removed.

## 0.1A — Cloudflare Proofs
**Status: GitHub issues #1–#6 created.**

Validate:
- Workers + vinext;
- authentication/session model;
- D1 tenancy;
- R2 isolation;
- Queues idempotency;
- CI/CD and environments.

## 0.1B — Core Platform
User/AuthAccount, Organization, Membership, Invitation, Project, Branding, Domain, AuditEvent, Entitlements skeleton, Console and Admin shells.

## 0.2 — Marketplace + Business Profiles
Public marketplace, listings, listing creation, company profiles, vertical templates and Auto Dealer reference implementation.

## 0.3 — Leads + CRM
Lead capture, inbox, pipeline, assignment, notifications and conversion analytics.

## 0.4 — Commerce
Plans, Entitlements, subscriptions, paid/promoted listings and premium business profiles.

## 0.5 — SEO Engine
Sitemaps, canonicals, robots/indexability, structured data, category/location pages, listing/business SEO and quality gates.

## 1.0 — Production
Accessibility, responsive polish, E2E, security, observability, recovery drills, performance, legal/content readiness and first live pilot.

## MVP exit condition
A real operator can launch one marketplace project and receive a real lead without custom code.

## Release gates
Each increment requires documented acceptance criteria, migrations, automated tests, security/tenant-isolation review, accessibility, observability and rollback/recovery notes.
