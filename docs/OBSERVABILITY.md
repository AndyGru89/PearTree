# PearTree.pro — Observability

## Goals
Detect user-impacting failures, tenant-specific failures, security anomalies and Cloudflare integration problems quickly enough to diagnose them without exposing sensitive data.

## Correlation
Every request receives a correlation/request ID propagated into:
- application logs;
- queue messages;
- outbound requests where appropriate;
- audit events;
- user-visible safe error references.

## Logs
Structured logs include:
- timestamp;
- level;
- service/module;
- requestId;
- actorId where safe;
- organizationId/projectId where relevant;
- event/action;
- outcome;
- duration/error category.

Never log secrets, raw session tokens, reset tokens, full payment details or unnecessary personal content.

## Metrics
Foundation metrics:
- request volume;
- response latency;
- error rate;
- auth failures;
- authorization denials;
- domain verification failures;
- queue publish/consume failures;
- queue retry/dead-letter counts when available;
- D1 query/error health;
- R2 operation errors;
- deployment version.

## Tracing
Trace external calls and critical workflows such as:
domain onboarding, invite acceptance and publish flow.

## Health
Expose safe health/readiness signals for:
- Worker application version;
- required bindings present;
- essential dependency reachability where appropriate.

Health endpoints do not expose secrets/configuration values.

## Alerts
Before production:
- elevated 5xx;
- auth/session anomaly;
- queue processing failure;
- domain provisioning failure spike;
- migration/deploy failure;
- tenant-isolation/security alert path.

## Retention
Observability retention is documented separately from business data and follows privacy/data-minimization requirements.
