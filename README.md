# PearTree.pro

PearTree.pro is a greenfield, **Cloudflare-native**, multi-tenant SaaS platform for launching and operating complete online businesses and vertical portals.

> Status: Cloudflare Foundation implementation candidate is in progress; product modules have not started.

## Product principle
PearTree is not a generic website builder. A project combines publishing, listings, lead management, commerce, analytics and automation behind one tenant-aware platform.

## Platform baseline
PearTree is designed around Cloudflare Workers. Foundation planning uses D1 for relational data, R2 for object storage and Queues for durable background processing, with material choices controlled through ADRs.

## Documentation
The complete documentation index is in **[docs/README.md](docs/README.md)**.

Key documents:
- [Vision](docs/VISION.md)
- [Product Requirements](docs/PRD.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Multi-Tenancy](docs/MULTI_TENANCY.md)
- [Security](docs/SECURITY.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Roadmap](docs/ROADMAP.md)
- [Backlog](docs/BACKLOG.md)
- [Architecture Decision Records](docs/adr/README.md)
- [Cloudflare Foundation runtime proof](docs/FOUNDATION_RUNTIME.md)

## Foundation commands

```bash
npm ci
npm run dev
npm run check
```

`npm run deploy` targets staging by default. Production uses the explicit, protected `npm run deploy:production` path.

## Engineering rule
No implementation may bypass tenant isolation, RBAC or accepted ADRs. Material architecture changes require documentation/ADR updates before merge.

See [CONTRIBUTING.md](CONTRIBUTING.md) and [AI working rules](docs/AI_WORKING_RULES.md).
