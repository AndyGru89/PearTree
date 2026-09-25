# Page 09 — PearTree Platform Admin

**Route:** `/admin` and child routes  
**Surface:** Privileged PearTree operations  
**Priority:** P1/P2 depending on feature

## Goal

Provide safe operational control over PearTree itself without conflating platform privileges with tenant roles.

## Dashboard
High-level metrics:
- users;
- organizations;
- projects;
- listings;
- leads;
- revenue/billing summary;
- moderation backlog;
- system health.

## Navigation
- Dashboard;
- Organizations;
- Projects;
- Users;
- Businesses;
- Listings;
- Categories;
- Moderation;
- Billing/Payments;
- Domains;
- Jobs/Queues;
- Audit;
- Entitlements;
- System/Runtime.

## Dashboard widgets
- growth/activity chart;
- listing/category distribution;
- moderation queue;
- queue/job failures;
- domain verification failures;
- recent privileged actions;
- deployment/runtime version.

## Search
Admin global search may locate:
- organization;
- project;
- user;
- business;
- listing;
- domain.

Sensitive information exposure is permission-scoped.

## Privileged actions
Examples:
- suspend/restore project;
- revoke abusive listing;
- change entitlement under explicit policy;
- investigate domain state;
- retry safe job.

Rules:
- explicit confirmation;
- reason where required;
- append-only audit;
- no silent customer impersonation.

## Visual direction
- product-like SaaS;
- minimal decorative assets;
- dense but readable;
- strong status chips;
- safe destructive-action styling.

## Mobile
Not a primary mobile product.
Responsive read-only/urgent actions may be supported, but high-risk operations should remain optimized for desktop.

## SEO
Never indexable.

## Analytics/audit
Operational usage may be measured, but privileged mutations rely on AuditEvent, not marketing analytics.

## Acceptance criteria
- platform role separate from Membership;
- unauthorized tenant admin cannot reach /admin;
- privileged mutations are audited;
- no secret/token exposure in admin UI;
- failed system widgets degrade independently rather than breaking entire dashboard.
