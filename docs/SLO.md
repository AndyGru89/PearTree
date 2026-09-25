# PearTree.pro — Service Objectives 0.1

These are engineering objectives for Foundation, not a contractual SLA.

## Availability
Production core interactive flows should target high availability appropriate to Cloudflare Workers and dependencies. Exact numeric SLO is set after baseline measurement rather than invented before traffic exists.

## Latency
Measure p50/p95/p99 for:
- public tenant page;
- Console API read;
- Console mutation;
- domain lookup/routing.

Set numeric objectives after representative 0.1 staging measurements.

## Error budget model
Track:
- 5xx/application failure rate;
- critical workflow success;
- queue processing success;
- auth failure anomalies.

## Critical user journeys
- sign in;
- organization/project load;
- membership/invite flow;
- project update;
- domain status;
- public project resolution.

## Security objective
Known tenant-isolation bypass has zero acceptable release budget and blocks deployment.

## Data integrity objective
No acknowledged mutation may be silently lost. Async workflows expose pending/failed state and are retryable/idempotent.

## Review
Set numeric SLOs before 1.0 using observed staging/production data.
