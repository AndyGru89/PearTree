# Contributing to PearTree.pro

PearTree is documentation-first and Cloudflare-native.

## Before coding
Read:
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/MULTI_TENANCY.md`
- `docs/RBAC.md`
- `docs/SECURITY.md`
- relevant ADRs.

## Branches
Use focused branches such as:
- `docs/...`
- `feat/...`
- `fix/...`
- `security/...`
- `infra/...`

## Pull requests
Every implementation PR should include problem, scope, security/tenant impact, tests, Cloudflare resource changes and rollout/rollback notes.

## Architectural changes
Create an ADR under `docs/adr/` before merging a change that materially alters runtime, persistence, tenancy, authentication, deployment, billing or cross-module boundaries.

## Quality
No implementation merges with failing required checks. Tenant-isolation failures block release.
