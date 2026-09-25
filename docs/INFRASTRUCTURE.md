# PearTree.pro — Cloudflare Infrastructure Plan

## Production platform
PearTree is Cloudflare-native per ADR-0001.

## Core resources
### Workers
Run public site rendering, Console/Admin server logic and APIs. Initial topology may be one modular Worker or a small number of Workers; splitting requires operational justification.

### D1
Primary relational store for Foundation. Shared logical multi-tenancy per ADR-0002.

### R2
Private object/media storage per ADR-0003.

### Queues
Async processing per ADR-0004.

### DNS/CDN/WAF/DDoS
Cloudflare edge is the default delivery and perimeter layer.

### Optional
KV, Durable Objects, Turnstile, Workers AI, Vectorize, AI Gateway only when a documented workload requires them.

## Configuration
Wrangler configuration is version controlled. Resource identifiers and environment-specific bindings are separated from secrets.

## Infrastructure as code
Use Wrangler for application resources/config. Adopt Terraform or Pulumi where lifecycle, repeatability or cross-resource orchestration requires it.

Dashboard-only manual changes should be minimized and documented.

## Resource naming
Recommended:
`peartree-{environment}-{resource}-{purpose}`

Examples:
- peartree-staging-d1-core
- peartree-prod-r2-media
- peartree-prod-queue-events

## Security
- environment-scoped credentials;
- least-privilege API tokens;
- no global-account token in routine CI if narrower scopes suffice;
- production write credentials restricted to protected deployment path.

## Cost governance
Before enabling a new Cloudflare product at scale:
- document workload;
- estimate request/storage/operation profile;
- set monitoring/budget thresholds where platform supports them;
- define degradation/fallback behavior.
