# PearTree.pro — Roadmap

Roadmap is capability-based; dates are intentionally not committed before sizing.

## DOC-01 — Product definition
Vision, PRD, Cloudflare-native architecture, conceptual data model, roadmap. **Gate:** no feature implementation before this baseline is reviewed.

## DOC-02 — Governance & security
Multi-tenancy specification, RBAC matrix, threat model, security/privacy baseline, ADR template, contribution rules and Definition of Done.

Required early ADRs:
- Cloudflare Workers + vinext runtime.
- D1 as primary relational store and tenancy strategy.
- R2 media/storage policy.
- Queues job semantics and idempotency.
- Authentication/session architecture on Workers.
- CI/CD and environment isolation.

## DOC-03 — UX & platform specifications
Information architecture, Design System specification, domain/project lifecycle, API conventions, observability, testing strategy and Cloudflare infrastructure/deployment plan.

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
