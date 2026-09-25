# PearTree.pro — Vision

## Mission
Enable an operator to launch and run a specialized online business from one platform instead of assembling a CMS, directory, CRM, payments, analytics and automation from unrelated products.

## Product thesis
PearTree is a multi-tenant SaaS operating layer for vertical and local digital businesses. Each customer owns an organization and can create one or more independently branded projects. Projects can use custom domains and enable business modules without forking the platform.

## Primary users
1. **Operator / Owner** — creates and monetizes a portal or marketplace.
2. **Team member** — manages content, listings, leads and operations.
3. **Business customer** — manages its presence, enquiries, bookings or paid services.
4. **End visitor** — discovers content/offers and completes a conversion.
5. **PearTree operator** — manages platform health, tenants, plans and support.

## Core value
Create project → configure brand/domain → enable modules → publish → acquire traffic → convert visitors → manage customers → monetize → automate.

## Principles
- Multi-tenant by design.
- Modular monolith before microservices.
- Tenant isolation is a security invariant.
- API-first domain boundaries.
- Mobile-first and accessible UI.
- SEO is infrastructure, not an afterthought.
- Observability and auditability from the first production release.
- AI assists workflows; it does not become an ungoverned parallel system.
- Documentation and ADRs are the source of architectural intent.

## Initial product boundary
The platform foundation covers Identity, Organizations, Memberships, Projects, Domains, Branding and platform administration. CMS/Listings, CRM/Leads, Commerce and Automation are subsequent product increments.

## Non-goals for Foundation
No visual no-code page builder, plugin marketplace, microservice estate, native mobile apps, complex booking engine or autonomous AI agents.

## North-star outcome
A new production-ready tenant should eventually be launchable through configuration rather than a new codebase.
