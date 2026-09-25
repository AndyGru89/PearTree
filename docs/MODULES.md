# PearTree.pro — Module Architecture

## Core
Always present:
- Identity
- Organizations
- Membership/RBAC
- Projects
- Domains
- Branding
- Entitlements
- Audit
- Platform Admin

## Product modules
Planned:
- CMS
- Listings
- Leads/CRM
- Commerce
- Analytics
- Automation
- AI

## Module rules
Each module defines:
- data ownership;
- permissions;
- public routes;
- Console routes;
- events;
- queue jobs;
- external integrations;
- feature entitlement;
- observability;
- retention/privacy impact.

## Enablement
A module may be:
- unavailable by plan;
- available but disabled;
- enabled;
- suspended by platform policy.

Feature/UI checks are backed by server-side entitlement/authorization, not client flags alone.

## Dependency rule
Modules may consume stable Core services. Cross-module writes go through service/event contracts rather than direct table manipulation.

## Marketplace future
Third-party executable plugins are not part of Foundation. A future marketplace must have a separate security/sandbox architecture before arbitrary external code is permitted.
