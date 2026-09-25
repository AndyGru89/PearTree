# PearTree.pro — Internal API / Action Blueprint

**Status:** Draft route/action contract  
**Important:** exact transport (route handler, server action, RPC wrapper) may change after Workers/vinext validation. Domain operations and authorization requirements remain stable.

## Public read operations

### Homepage
`GET /api/public/home`

Returns:
- categories;
- featured listings;
- latest listings;
- popular locations.

### Search
`GET /api/public/search`

Query:
- q;
- category;
- location;
- radius;
- price;
- sort;
- cursor;
- schema-defined filters.

Returns `SearchResultsVM`.

Rate limit applies.

### Listing detail
`GET /api/public/listings/{id-or-slug}`

Returns `ListingDetailVM`.

Only public-safe active/route-policy content.

### Business profile
`GET /api/public/businesses/{slug}`

Returns `BusinessProfileVM`.

### Map search
`GET /api/public/search/map`

Returns map-safe result summaries with privacy-respecting coordinates.

## Authenticated user operations

### Saved listing
`POST /api/account/saved/{listingId}`
`DELETE /api/account/saved/{listingId}`

Authorization: authenticated user.

Idempotent behavior expected.

### My listings
`GET /api/account/listings`

### Create draft
`POST /api/account/listings`

Returns draft ID.

### Update draft
`PATCH /api/account/listings/{id}`

Authorization: owner/server-side.

### Upload asset intent
`POST /api/account/listings/{id}/assets`

Creates authorized upload flow / asset metadata.

### Publish
`POST /api/account/listings/{id}/publish`

Idempotency required.

Outcomes:
- published;
- pending_moderation;
- payment_required;
- validation_failed.

## Lead operations

### Create lead
`POST /api/public/leads`

Public abuse controls:
- rate limit;
- optional Turnstile;
- schema validation;
- listing/business/project context resolution.

### Lead list
`GET /api/console/projects/{projectId}/leads`

Authorization:
project/organization permission required.

### Lead detail
`GET /api/console/projects/{projectId}/leads/{leadId}`

### Update status
`PATCH /api/console/projects/{projectId}/leads/{leadId}/status`

Audit required.

### Assign lead
`PATCH /api/console/projects/{projectId}/leads/{leadId}/assignment`

Audit required.

## Admin operations

### Platform summary
`GET /api/admin/dashboard`

Platform permission required.

### Admin entity search
`GET /api/admin/search`

Platform permission required.

### Moderation action
`POST /api/admin/listings/{id}/moderation`

Requires:
- platform permission;
- explicit action;
- reason where policy requires;
- audit event;
- idempotent/retry-safe command design.

### Entitlement override
`POST /api/admin/entitlements/{scopeId}/override`

High-privilege action.
Audit and confirmation required.

## Error envelope

```ts
type APIError = {
  code: string
  message: string
  requestId: string
  details?: unknown
}
```

## Security invariants

Every protected request:
1. authenticates actor;
2. resolves resource;
3. derives tenant/project ownership server-side;
4. checks permission;
5. validates input;
6. mutates through domain service;
7. emits audit/security event when required.

## Caching

Public reads may use cache where correctness permits.

Never cache personalized/private responses across users or tenants without explicit scoped cache keys.

## Versioning

These are internal v0 contracts. Public/external APIs require explicit versioning before release.
