# PearTree.pro — Information Architecture

## Product surfaces
### Public PearTree
- Home
- Product
- Solutions / use cases
- Pricing
- Documentation / help
- Sign in / create account

### Customer Console
Primary navigation:
- Overview
- Projects
- Members
- Billing
- Organization settings

Within a Project:
- Overview
- Content
- Listings
- Leads
- Media
- Domains
- Branding
- Analytics
- Automations
- Settings

Modules appear only when enabled and permitted.

### Platform Admin
- Platform overview
- Organizations
- Projects
- Users
- Domains
- Jobs/events
- Audit/security
- Entitlements/plans
- Runtime/operations

Platform Admin is a distinct privileged surface.

## Routing principles
- Organization and Project context must be visible in navigation.
- Changing organization/project must not leak stale data from the prior context.
- Deep links resolve context server-side and enforce permission.
- Customer-facing routes must not expose internal database identifiers unnecessarily.
- Tenant public websites resolve primarily by hostname, not customer-selected query parameters.

## Empty-state principle
Every module must define:
- first-use empty state;
- configured but empty state;
- loading state;
- recoverable error;
- permission denied;
- suspended/unavailable state.

## Search/navigation
Foundation provides navigation and entity lookup, not a global cross-tenant customer search.

Platform Admin search is privileged and audited where it exposes sensitive tenant information.
