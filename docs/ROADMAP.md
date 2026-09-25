# PearTree.pro — Roadmap

Roadmap is capability-based; dates are intentionally not committed before sizing.

## DOC-01 — Product definition
**Status: complete baseline.**

Vision, PRD, Cloudflare-native architecture, conceptual data model and roadmap are defined.

## DOC-02 — Governance & security
**Status: complete baseline.**

Completed:
- multi-tenancy specification;
- RBAC matrix and ownership rules;
- security baseline;
- threat model;
- privacy engineering baseline;
- Definition of Done;
- AI/coding-agent working rules;
- contributing rules;
- ADR process;
- accepted ADRs for Cloudflare-native runtime, D1 tenancy, R2 and Queues;
- proposed ADRs for authentication and CI/CD environment strategy.

Open validation work intentionally moves into DOC-03/0.1 proofs of concept rather than being guessed in documentation.

## DOC-03 — UX & platform specifications
**Status: next.**

Deliver:
- information architecture;
- Design System specification;
- project/domain lifecycle;
- API conventions;
- error model;
- event/webhook conventions;
- observability;
- testing strategy;
- Cloudflare infrastructure/deployment plan;
- environment/binding matrix;
- data migration/recovery runbooks;
- operational SLO/SLA targets for 0.1;
- UX flows for onboarding, organization, project, domains, members and admin.

## 0.1 — Cloudflare Foundation
Repository/tooling, Wrangler environments, Worker runtime, D1 migrations/bindings, R2 bindings, Queue infrastructure, Identity, Organization/Membership, Project, Branding, Domains, Console/Admin shell, audit events, CI and cross-tenant security tests.

## 0.2 — CMS + Listings
Pages/content model, R2-backed media, navigation, SEO primitives, listing/category/location model, search/filtering and moderation.

## 0.3 — Leads + CRM
Lead capture, inbox, pipeline, assignments, notifications, consent/audit requirements, queue-based delivery and analytics.

## 0.4 — Commerce
Plans/entitlements, subscription billing, invoices/provider synchronization, paid listings/services and financial auditability.

## 0.5 — AI + Automation
Governed AI services, optional Workers AI/AI Gateway/Vectorize usage, content assistance, classification/scoring, workflow engine, webhooks and integrations. Human review and tenant data boundaries are mandatory.

## 1.0 — Production platform
Validated onboarding-to-monetization journey, operational runbooks, D1/R2 recovery testing, performance/SLO baseline, security review and first commercial vertical.

## Release gates
Each increment requires documented acceptance criteria, migrations, automated tests, security/tenant-isolation review, observability and rollback/recovery notes.
