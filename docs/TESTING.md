# PearTree.pro — Testing Strategy

## Test pyramid
### Unit
Pure domain logic, permission mapping, validators, state transitions.

### Integration
D1 repositories, Worker handlers, auth/session integration, R2 service, Queue producer/consumer, domain routing.

### Security/tenant
Mandatory adversarial tests:
- cross-tenant IDOR;
- unauthorized write;
- role escalation;
- stale/removed membership;
- forged project/organization context;
- cross-tenant R2 access;
- queue tenant mismatch.

### E2E
Critical Foundation journeys:
1. account -> organization -> project;
2. invite -> accept -> permitted access;
3. role change/removal -> access changes;
4. branding update;
5. domain add -> verify lifecycle simulation;
6. project activation/public resolution;
7. admin audit lookup.

## Cloudflare runtime testing
At least one CI stage must run/preview against a Workers-compatible runtime rather than only a generic Node.js test environment.

## Database
Migration tests start from:
- empty database;
- previous supported schema;
- representative seeded multi-tenant data.

## Contract tests
External provider adapters and webhook parsers get stable fixture/contract tests.

## Performance
Foundation establishes baseline latency and representative D1 query performance. Load tests become mandatory before major public traffic/commerce launch.

## Test data
Never use production customer data in CI. Fixtures use synthetic identities and tenant data.

## Release gate
Any failing tenant-isolation test, migration test or critical E2E blocks release.
