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

PearTree now includes a reusable public company-profile layer, not only individual listings.

Documented:
- generic Business Profile / Company Page;
- company hero, trust signals, offers, services, reviews, about, contact and lead capture;
- multi-location company support;
- Business -> Location -> Listing/Service/Lead relationships;
- dedicated Auto Dealer / Komis profile;
- vehicle inventory, financing, trade-in and test-drive lead flows;
- reusable templates for workshops, accounting, renovation, real estate, beauty, wedding/events, pet services, local shops and B2B firms;
- SEO/indexability and monetization rules;
- verification is separate from paid plans.

### Architectural principle
Do **not** fork PearTree into separate products for every industry.

Use:
**one Business Profile engine + vertical schemas + vertical UI blocks + category-specific lead forms.**

## 0.1 — Cloudflare Foundation
**Status: proof-of-concept issues created.**

First implementation gate:
1. validate Workers + vinext;
2. validate authentication/session approach;
3. validate environment-safe D1/R2/Queue bindings;
4. accept/revise ADR-0005 and ADR-0006;
5. implement from approved GitHub issues;
6. begin broader Foundation only after green proof-of-concepts.

## 0.2 — CMS + Listings + Business Profiles
First production implementation includes:
- public marketplace;
- listing browse/detail;
- search/category surfaces;
- create-listing;
- company profiles;
- company offers/services;
- vertical business templates;
- initial Auto Dealer/Komis template.

## 0.3 — Leads + CRM
Lead capture, company inquiry forms, inbox, pipeline, assignments, notifications and operator workflows.

## 0.4 — Commerce
Plans/entitlements, subscriptions, paid listings, premium company profiles, promotions and financial auditability.

## 0.5 — AI + Automation
Governed AI assistance, workflow automation, integrations and optional Cloudflare AI services.

## 1.0 — Production platform
Validated onboarding-to-monetization journey, operational runbooks, recovery testing, measured SLOs, security review, polished responsive frontend and validated commercial verticals.

## Release gates
Each increment requires documented acceptance criteria, migrations, automated tests, security/tenant-isolation review, accessibility, observability and rollback/recovery notes.
