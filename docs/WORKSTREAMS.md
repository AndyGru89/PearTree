# PearTree.pro — Workstreams

## Workstream A — Platform / Cloudflare
Owns:
- Workers;
- vinext;
- Wrangler;
- D1;
- R2;
- Queues;
- CI/CD;
- observability;
- environments.

## Workstream B — Identity / Tenancy
Owns:
- auth;
- sessions;
- Organization;
- Membership;
- RBAC;
- invitations;
- audit.

## Workstream C — Marketplace
Owns:
- categories;
- listings;
- search;
- listing cards;
- detail;
- favorites;
- moderation.

## Workstream D — Business Profiles
Owns:
- Business;
- BusinessLocation;
- BusinessService;
- vertical templates;
- company SEO;
- company leads.

## Workstream E — Leads / CRM
Owns:
- lead capture;
- inbox;
- pipeline;
- assignment;
- notifications;
- lead analytics.

## Workstream F — Commerce
Owns:
- plans;
- entitlements;
- billing;
- promotions;
- premium listings/profiles;
- invoices/provider sync.

## Workstream G — SEO / Growth
Owns:
- metadata;
- canonical;
- sitemaps;
- programmatic indexability;
- content templates;
- acquisition pages;
- analytics attribution.

## Workstream H — Design / Frontend
Owns:
- brand;
- design system;
- public UI;
- Console;
- mobile behavior;
- accessibility;
- visual regression.

## Coordination rules
- one issue has one primary workstream owner;
- cross-workstream API/data changes documented before coding;
- shared core files cannot be changed in parallel without ownership;
- Claude/Cursor/ChatGPT check open PRs before starting overlapping work;
- security/tenant correctness overrides schedule pressure.
