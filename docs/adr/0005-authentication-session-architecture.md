# ADR-0005 — Authentication and session architecture

**Status:** Proposed  
**Date:** 2026-09-25

## Context
PearTree needs customer authentication on Cloudflare Workers. The provider/library must support secure sessions, verification, recovery, revocation and a good multi-tenant invitation flow without assuming a long-running Node.js server.

## Decision criteria
The chosen solution must:
- run reliably in Cloudflare Workers;
- support email verification and secure recovery;
- support session revocation;
- allow server-side authorization independent of provider-specific role claims;
- avoid placing PearTree tenant/RBAC truth inside external identity-provider metadata;
- expose audited account/session lifecycle hooks;
- support future MFA/passkeys without architectural rewrite;
- have a clear data-processing/privacy model.

## Proposed architecture
Identity authentication produces a PearTree `User` identity. Organization roles/permissions remain in PearTree D1 Membership records.

Sessions must be validated server-side. Sensitive actions may require re-authentication.

## Alternatives to evaluate
- Workers-compatible self-hosted auth library;
- managed identity provider;
- hybrid provider with PearTree-owned user/membership records.

## Validation before acceptance
Create a Workers proof-of-concept covering registration/sign-in, verification, password/account recovery as applicable, session revocation, invite acceptance and authorization lookup.

## Reversal / migration
Provider-specific identifiers remain in separate AuthAccount records so identity provider migration does not rewrite tenant/business tables.
