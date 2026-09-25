# PearTree.pro — Events, Queues and Webhooks

## Domain events
Internal events are named in past tense, for example:
- organization.created
- member.invited
- project.activated
- domain.verified
- lead.created
- subscription.updated

Each event includes:
- eventId;
- type;
- schemaVersion;
- occurredAt;
- organizationId/projectId where relevant;
- actor/system metadata;
- minimal domain payload.

## Queue transport
Cloudflare Queues is the default async transport per ADR-0004.

Consumers:
- validate schema/version;
- validate tenant context;
- are idempotent;
- classify retryable vs terminal failures;
- emit observability/audit signals.

## Outbound webhooks
Future outbound webhooks must support:
- endpoint verification/configuration;
- event allowlist;
- signed payload;
- timestamp/replay protection;
- retry with bounded backoff;
- delivery status/history;
- secret rotation;
- tenant isolation.

## Inbound webhooks
Must:
- verify provider signature before parsing business intent where possible;
- reject stale/replayed events;
- persist provider event ID for idempotency;
- map provider state into PearTree domain services rather than directly mutating arbitrary tables.

## Schema evolution
Event schemas are versioned. Consumers must never guess the meaning of unknown versions.
