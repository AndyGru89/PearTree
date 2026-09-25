# PearTree.pro — Frontend Data Flow

## Principle

Pages consume typed view models and commands. They do not know Cloudflare bindings.

## Read flow

`Request -> route/page loader -> query service -> domain/repository -> D1/R2 -> mapper -> ViewModel -> React`

## Mutation flow

`UI interaction -> validated command -> auth/authz -> domain service -> repository/queue/audit -> typed result -> UI update`

## Public reads

Prefer server-side initial rendering for:
- homepage content;
- search landing pages;
- listing detail;
- business profiles.

Client-side refinement is appropriate for:
- filters;
- pagination/infinite continuation;
- maps;
- favorites;
- gallery.

## Console/Admin reads

Use page-level authorization before loading sensitive data.

Avoid fetching data for hidden unauthorized widgets and then merely not rendering them.

## Cache scopes

Potential scopes:
- public global;
- public per project/domain;
- authenticated user;
- organization/project;
- no-cache sensitive/admin.

Cache key must include all authorization/data dimensions relevant to response.

## Optimistic UI

Allowed:
- save/favorite;
- low-risk tag/assignment operations where rollback is clear.

Use conservative confirmed UI for:
- publish;
- billing;
- ownership/role changes;
- destructive admin actions;
- entitlement overrides.

## Stale data

Lists should tolerate stale display when non-critical, but mutations must re-check authorization and current state.

## Pagination

Use cursor pagination for:
- listings;
- leads;
- messages;
- audit events;
- admin entity lists.

## Error classes

UI-facing error classes:
- validation;
- authentication required;
- permission denied;
- not found;
- conflict/stale state;
- rate limited;
- dependency unavailable;
- generic server error.

Each maps to safe UX copy and retry behavior.

## Request cancellation

Search/filter/map requests should be cancellable or race-safe to avoid stale results replacing newer results.

## Prefetching

May prefetch:
- listing detail from visible result card;
- business profile;
- next result page.

Do not prefetch sensitive/admin data without need.

## Localization

API returns stable keys and raw values where practical; UI performs presentation localization.
Server-rendered SEO metadata is localized using project/page locale.
