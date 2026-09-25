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

Documented:
- information architecture;
- Design System;
- Foundation UX flows;
- project/domain lifecycle;
- API conventions and error model;
- events/queues/webhooks;
- observability;
- testing;
- Cloudflare infrastructure;
- environment/binding isolation;
- recovery;
- service objectives;
- module boundaries.

## DOC-04 — Product modules
**Status: complete baseline.**

Specifications exist for CMS, Listings, Leads/CRM, Commerce, SEO, Analytics, Notifications and AI/Automation.

## 0.1 — Cloudflare Foundation
**Status: ready for proof-of-concept/implementation planning.**

Repository/tooling, Wrangler environments, Worker runtime, D1 migrations/bindings, R2 bindings, Queue infrastructure, Identity, Organization/Membership, Project, Branding, Domains, Console/Admin shell, audit events, CI and cross-tenant security tests.

First implementation gate:
1. validate Workers + vinext;
2. validate authentication/session approach;
3. validate environment-safe D1/R2/Queue bindings;
4. accept/revise ADR-0005 and ADR-0006;
5. create implementation issues from `BACKLOG.md`;
6. begin Foundation only after green proof-of-concepts.

## 0.2 — CMS + Listings
Pages/content model, R2-backed media, navigation, SEO primitives, listing/category/location model, search/filtering and moderation.

## 0.3 — Leads + CRM
Lead capture, inbox, pipeline, assignments, notifications, consent/audit requirements, queue-based delivery and analytics.

## 0.4 — Commerce
Plans/entitlements, subscription billing, invoices/provider synchronization, paid listings/services and financial auditability.

## 0.5 — AI + Automation
Governed AI services, optional Workers AI/AI Gateway/Vectorize usage, content assistance, classification/scoring, workflow engine, webhooks and integrations. Human review and tenant data boundaries are mandatory.

## 1.0 — Production platform
Validated onboarding-to-monetization journey, operational runbooks, D1/R2 recovery testing, measured performance/SLO baseline, security review and first commercial vertical.

## Release gates
Each increment requires documented acceptance criteria, migrations, automated tests, security/tenant-isolation review, observability and rollback/recovery notes.
