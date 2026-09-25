# PearTree.pro — Frontend Component Architecture

**Status:** Implementation blueprint  
**Applies to:** public marketplace, account, Console and Admin.

## Goal

Define reusable React component boundaries before implementation begins.

This document does not override the Cloudflare runtime proof-of-concept. Component contracts are framework-compatible React contracts; exact Server/Client Component boundaries are finalized after Workers + vinext validation.

## Layer model

### 1. App shell
- PublicShell
- AccountShell
- ConsoleShell
- AdminShell

Responsibilities:
- navigation;
- tenant/project context display;
- responsive layout;
- global error/notification regions;
- localization context;
- session-aware navigation.

### 2. Page composition
Page components coordinate:
- route params/search params;
- data queries;
- page-level authorization;
- metadata/SEO;
- layout.

Pages must not contain reusable domain logic that belongs in services/components.

### 3. Feature components
Examples:
- SearchBar
- SearchFilters
- ListingGrid
- ListingCard
- ListingGallery
- BusinessCard
- BusinessProfileHeader
- LeadTable
- LeadDetailDrawer
- KPIGrid
- ModerationQueue
- MapResults

Feature components consume typed view models rather than raw database rows.

### 4. Design-system primitives
Canonical primitives come from `DESIGN_SYSTEM.md`:
- Button
- IconButton
- Input
- Select
- Checkbox
- Radio
- Switch
- Card
- Badge
- Tabs
- Dialog
- Drawer
- Toast
- Alert
- EmptyState
- Skeleton
- Pagination
- Avatar
- Breadcrumbs
- AppShell

### 5. Domain adapters
UI never queries D1/R2/Queues directly.

Flow:
`Route/Page -> query/action service -> repository/domain service -> Cloudflare binding`

## Component naming

Use semantic PascalCase names.

Examples:
- `ListingCard`
- `ListingCardSkeleton`
- `ListingContactActions`
- `BusinessTrustBar`
- `SearchFilterDrawer`
- `LeadStatusBadge`

Avoid generic names such as `Box1`, `Section2` or page-specific duplicated UI.

## View model rule

React components receive view models designed for rendering.

Example:

```ts
type ListingCardVM = {
  id: string
  href: string
  title: string
  image: ImageVM | null
  priceLabel: string | null
  locationLabel: string
  categoryLabel?: string
  rating?: RatingVM
  badges: BadgeVM[]
  isSaved: boolean
}
```

Do not pass ORM/D1 rows directly into UI.

## Server/client boundary principles

Prefer server-rendered composition for:
- metadata;
- public SEO content;
- initial listing/search results;
- business/listing detail content;
- authorization-sensitive page setup.

Use client interactivity for:
- filters;
- save/favorite;
- image galleries;
- map interactions;
- dialogs/sheets;
- autosave forms;
- charts;
- optimistic UX.

Exact implementation mechanism depends on validated Workers/vinext behavior.

## State architecture

Each data-bound feature defines:
- loading;
- loaded;
- empty;
- recoverable error;
- permission denied where relevant;
- stale/retry state where relevant.

## Mutation architecture

Mutations:
1. validate input client-side for UX;
2. validate again server-side;
3. authorize server-side;
4. execute domain service;
5. emit audit/product event where required;
6. return safe typed result;
7. update UI optimistically only when rollback is safe.

## Form architecture

Use schema-driven forms for:
- create listing;
- profile/company editing;
- filters;
- lead actions;
- admin commands.

Category/vertical-specific listing fields are driven by schema definitions, not page forks.

## Accessibility

Every reusable component must define:
- keyboard behavior;
- focus state;
- screen-reader label where needed;
- disabled/loading semantics;
- reduced-motion behavior where animated.

## Testing

Shared component coverage:
- render/state tests;
- accessibility tests;
- interaction tests;
- responsive visual regression for key composites.

Page-level tests should avoid retesting design-system primitives unless page behavior changes them.
