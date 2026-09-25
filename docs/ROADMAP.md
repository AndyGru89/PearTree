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

The approved visual direction is now translated into implementation documentation:
- PearTree brand identity;
- color/spacing/radius/shadow tokens;
- marketplace homepage blueprint;
- listing card and listing detail specifications;
- post-ad flow;
- mobile UX and bottom navigation;
- operator dashboard;
- mockup-to-product implementation plan;
- staged frontend roadmap.

### Visual direction
PearTree should feel:
**local + trustworthy + natural + premium + human**, not like a generic classifieds template.

The generated mockups are design references, not pixel-perfect contracts. Production implementation must use real copy, real data models, responsive states and accessibility rules from the source-of-truth docs.

## 0.1 — Cloudflare Foundation
**Status: proof-of-concept issues created.**

First implementation gate:
1. validate Workers + vinext;
2. validate authentication/session approach;
3. validate environment-safe D1/R2/Queue bindings;
4. accept/revise ADR-0005 and ADR-0006;
5. implement from approved GitHub issues;
6. begin broader Foundation only after green proof-of-concepts.

## 0.2 — CMS + Listings
Includes the first production implementation of the documented public marketplace, listing cards, detail pages, search/category surfaces and create-listing workflow.

## 0.3 — Leads + CRM
Lead capture, inbox, pipeline, assignments, notifications and operator workflows.

## 0.4 — Commerce
Plans/entitlements, subscriptions, paid listings, promotions and financial auditability.

## 0.5 — AI + Automation
Governed AI assistance, workflow automation, integrations and optional Cloudflare AI services.

## 1.0 — Production platform
Validated onboarding-to-monetization journey, operational runbooks, recovery testing, measured SLOs, security review, polished responsive frontend and validated first commercial vertical.

## Release gates
Each increment requires documented acceptance criteria, migrations, automated tests, security/tenant-isolation review, accessibility, observability and rollback/recovery notes.
