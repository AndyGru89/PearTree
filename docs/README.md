# PearTree.pro — Documentation Index

This directory is the product and engineering source of truth for PearTree.pro.

## 1. Product definition
- [Vision](VISION.md)
- [PRD](PRD.md)
- [Roadmap](ROADMAP.md)
- [Backlog](BACKLOG.md)

## 2. Architecture
- [Architecture](ARCHITECTURE.md)
- [Data Model](DATA_MODEL.md)
- [Modules](MODULES.md)
- [Infrastructure](INFRASTRUCTURE.md)
- [Environments](ENVIRONMENTS.md)
- [Project & Domain Lifecycle](PROJECT_DOMAIN_LIFECYCLE.md)
- [API Conventions](API_CONVENTIONS.md)
- [Events & Webhooks](EVENTS_WEBHOOKS.md)

## 3. Governance, security and quality
- [Multi-Tenancy](MULTI_TENANCY.md)
- [RBAC](RBAC.md)
- [Security](SECURITY.md)
- [Threat Model](THREAT_MODEL.md)
- [Privacy](PRIVACY.md)
- [Testing](TESTING.md)
- [Observability](OBSERVABILITY.md)
- [Recovery](RECOVERY.md)
- [SLO](SLO.md)
- [Definition of Done](DEFINITION_OF_DONE.md)
- [AI Working Rules](AI_WORKING_RULES.md)

## 4. UX
- [Information Architecture](INFORMATION_ARCHITECTURE.md)
- [Design System](DESIGN_SYSTEM.md)
- [Foundation UX Flows](UX_FLOWS.md)

## 5. Product modules
- [CMS](CMS.md)
- [Listings](LISTINGS.md)
- [Leads & CRM](LEADS_CRM.md)
- [Commerce](COMMERCE.md)
- [SEO](SEO.md)
- [Analytics](ANALYTICS.md)
- [Notifications](NOTIFICATIONS.md)
- [AI & Automation](AI_AUTOMATION.md)

## 6. Architecture Decision Records
- [ADR Index](adr/README.md)
- [ADR-0001 Cloudflare-native platform](adr/0001-cloudflare-native-platform.md)
- [ADR-0002 D1 tenancy strategy](adr/0002-d1-tenancy-strategy.md)
- [ADR-0003 R2 storage policy](adr/0003-r2-storage-policy.md)
- [ADR-0004 Queues async processing](adr/0004-queues-async-processing.md)
- [ADR-0005 Authentication/session architecture](adr/0005-authentication-session-architecture.md)
- [ADR-0006 CI/CD and Cloudflare environments](adr/0006-ci-cd-cloudflare-environments.md)

## Implementation gate
Foundation coding may begin only from issues derived from the documented backlog and accepted decisions. Proposed ADRs that affect a task must be resolved or validated during the relevant proof-of-concept before production implementation is merged.
