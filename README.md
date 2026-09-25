# PearTree.pro

PearTree.pro is a greenfield, **Cloudflare-native**, multi-tenant SaaS platform for launching and operating complete online businesses and vertical portals.

> Status: documentation-first / pre-implementation.

## Product principle
PearTree is not a generic website builder. A project combines publishing, listings, lead management, commerce, analytics and automation behind one tenant-aware platform.

## Platform baseline
PearTree is designed around Cloudflare Workers. Foundation planning assumes D1 for relational data, R2 for object storage and Queues for durable background processing, with decisions recorded through ADRs before implementation.

## Documentation
### Product
- [Vision](docs/VISION.md)
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Data Model](docs/DATA_MODEL.md)
- [Roadmap](docs/ROADMAP.md)

### Governance and security
- [Multi-Tenancy](docs/MULTI_TENANCY.md)
- [RBAC](docs/RBAC.md)
- [Security](docs/SECURITY.md)
- [Threat Model](docs/THREAT_MODEL.md)
- [Privacy](docs/PRIVACY.md)
- [Definition of Done](docs/DEFINITION_OF_DONE.md)
- [AI Working Rules](docs/AI_WORKING_RULES.md)
- [Contributing](CONTRIBUTING.md)

### Architecture decisions
- [ADR index](docs/adr/README.md)
- [ADR-0001: Cloudflare-native platform](docs/adr/0001-cloudflare-native-platform.md)
- [ADR-0002: D1 tenancy strategy](docs/adr/0002-d1-tenancy-strategy.md)
- [ADR-0003: R2 storage policy](docs/adr/0003-r2-storage-policy.md)
- [ADR-0004: Queues async processing](docs/adr/0004-queues-async-processing.md)
- [ADR-0005: Authentication/session architecture](docs/adr/0005-authentication-session-architecture.md)
- [ADR-0006: CI/CD and Cloudflare environments](docs/adr/0006-ci-cd-cloudflare-environments.md)

No production feature implementation should start until the relevant product, security and architecture decisions are documented.
