# PearTree.pro

PearTree.pro is a greenfield, **Cloudflare-native**, multi-tenant SaaS platform for launching and operating complete online businesses and vertical portals.

> Status: documentation-first / pre-implementation.

## Product principle
PearTree is not a generic website builder. A project combines publishing, listings, lead management, commerce, analytics and automation behind one tenant-aware platform.

## Platform baseline
PearTree is designed around Cloudflare Workers. Foundation planning assumes D1 for relational data, R2 for object storage and Queues for durable background processing, with decisions recorded through ADRs before implementation.

## Documentation
- [Vision](docs/VISION.md)
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Data Model](docs/DATA_MODEL.md)
- [Roadmap](docs/ROADMAP.md)
- [ADR-0001: Cloudflare-native platform](docs/adr/0001-cloudflare-native-platform.md)

No production feature implementation should start until the relevant product and architecture decisions are documented.
