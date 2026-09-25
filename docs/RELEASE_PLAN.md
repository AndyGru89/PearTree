# PearTree.pro — Release Plan

## Release philosophy
Small reversible releases. Keep data/security changes separate from cosmetic complexity.

## Environments
Local -> Preview/CI -> Staging -> Production.

## Release stages

### Alpha — Internal
Scope:
- Cloudflare Foundation;
- Core entities;
- Console shell;
- synthetic data.

Exit:
- CI green;
- staging stable;
- tenant tests pass.

### Private Alpha — Design Partners
Scope:
- marketplace browse;
- listing creation;
- business profiles;
- lead capture.

Audience:
3–10 invited partners.

Goal:
Find workflow, onboarding and pricing problems before public acquisition.

### Beta
Scope:
- reference Auto Dealer template;
- CRM basics;
- analytics;
- paid plan foundations;
- SEO templates.

Exit:
- onboarding measurable;
- first real leads;
- no critical security/data issues;
- support runbook exists.

### Public 1.0
Requirements:
- production recovery drill;
- security review;
- billing readiness;
- legal/privacy surfaces;
- Search/SEO health;
- support/contact process;
- monitoring/alerts;
- stable pricing/offer.

## Release checklist
Before production deploy:
- linked issue/PR;
- migration reviewed;
- automated checks green;
- tenant isolation tests green;
- environment config verified;
- feature flags/entitlements checked;
- rollback/forward-fix notes;
- smoke tests after deploy.

## Incident rollback rule
Application rollback must not blindly reverse schema after new production writes. Prefer compatible migrations and forward fixes.
