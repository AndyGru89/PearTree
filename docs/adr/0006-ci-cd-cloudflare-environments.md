# ADR-0006 — CI/CD and Cloudflare environment isolation

**Status:** Proposed  
**Date:** 2026-09-25

## Context
PearTree needs safe preview/staging/production deployments and must prevent test code from mutating production D1/R2/Queues.

## Decision direction
Use GitHub as the source-of-truth repository and Cloudflare deployment tooling for runtime delivery.

Required environment model:
- local;
- CI/preview;
- staging;
- production.

Each non-local environment receives explicit Cloudflare bindings and secrets. Production resources are never default fallbacks.

Required pipeline stages:
1. dependency install;
2. formatting/lint policy;
3. typecheck;
4. unit/integration tests;
5. tenant-isolation/security tests;
6. Workers-compatible build;
7. migration validation;
8. deploy to target environment;
9. smoke/health verification.

Production deploy requires protected-branch policy and explicit environment protection appropriate to repository capabilities.

## Open choice
GitHub Actions, Cloudflare Workers Builds, or a hybrid must be evaluated for least-privilege secrets, preview deployments, observability and rollback ergonomics.

## Validation before acceptance
- staging deployment from clean checkout;
- production cannot be targeted by preview credentials;
- rollback to prior Worker version tested;
- D1 migration procedure tested separately from application rollback;
- secrets do not appear in logs/artifacts.
