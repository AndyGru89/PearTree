# PearTree.pro — Privacy Baseline

## Purpose
Define engineering defaults. This is not a substitute for final legal documentation or jurisdiction-specific legal review.

## Principles
- data minimization;
- purpose limitation;
- least-privileged access;
- retention by policy rather than indefinite accumulation;
- transparent tenant ownership/control of business data;
- auditable administrative access;
- privacy-aware logs and analytics.

## Data classes
### Account data
Identity, email, authentication metadata and security events.

### Tenant business data
Organization/project settings, content, listings, leads and future CRM records.

### Operational telemetry
Logs, metrics, traces and audit events.

### Files
Tenant media, imports, exports and generated artifacts.

### Billing data
Provider/customer references, plan/entitlement state and transaction metadata. PearTree should avoid storing sensitive payment-card data directly.

## Engineering requirements
- document purpose for every newly collected personal-data field;
- avoid free-form sensitive data where not required;
- define retention before production storage of leads/CRM data;
- support controlled export/deletion workflows before 1.0;
- separate analytics identifiers from authentication secrets;
- redact/minimize logs;
- use region/jurisdiction features only after confirming product/legal requirements.

## Admin/support access
Privileged access to tenant data is exceptional, least-privileged and audited.

## Third parties
Each external processor/provider requires documentation of:
- purpose;
- categories of data shared;
- credential/security model;
- failure behavior;
- deletion/retention implications.

## AI
Tenant data is not sent to an AI provider merely because AI functionality exists. Each AI feature defines input scope, output handling, retention assumptions and user-visible controls.

## Open legal items before commercial launch
- controller/processor role mapping;
- GDPR lawful bases and notices;
- DPA/subprocessor list;
- data-subject request process;
- retention schedule;
- international transfer assessment if applicable;
- cookie/analytics consent architecture where required.
