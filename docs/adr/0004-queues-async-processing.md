# ADR-0004 — Cloudflare Queues for asynchronous processing

**Status:** Accepted  
**Date:** 2026-09-25

## Context
Email, webhooks, domain verification, imports, exports and media processing must not make interactive requests unreliable or depend on synchronous retry loops.

## Decision
Use **Cloudflare Queues** for durable asynchronous application work.

Every message includes:
- stable event/message ID;
- event type and schema version;
- organization/project context where applicable;
- idempotency key;
- minimal payload;
- creation timestamp.

Consumers must be safe to retry. Financial, destructive and externally visible operations require explicit deduplication/idempotency state.

## Consequences
Business workflows become eventually consistent where async processing is used. UI must expose pending/failed states rather than assume immediate completion.

## Validation
- duplicate delivery test;
- consumer retry test;
- malformed message rejection;
- tenant-context validation;
- poison/dead-letter handling policy before critical workloads.

## Reversal / migration
Domain events are versioned independently of Queue transport, allowing another message broker later.
