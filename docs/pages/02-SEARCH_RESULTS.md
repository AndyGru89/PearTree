# Page 02 — Search Results

**Routes:** `/search`, category/location landing routes  
**Surface:** Public marketplace  
**Priority:** P0

## Goal

Let users narrow results quickly and reach a relevant listing/provider.

## Primary KPI
Search-result-to-detail click-through.

Secondary:
- filter usage;
- contact conversion after result click;
- saved listing;
- zero-result recovery.

## Desktop layout
Three regions:
1. search header/query controls;
2. left filter rail;
3. result list/grid.

Optional map toggle.

## Search controls
- query;
- location;
- category;
- sort;
- filters.

## Filters
Global:
- category;
- location/radius;
- price;
- rating where valid;
- listing type.

Vertical filters are schema-driven.

Examples:
- home services: service type, availability, travel radius;
- auto: make/model/year/fuel/transmission;
- property: type/area/rooms;
- business services: specialization/remote/on-site.

## Result card
- media;
- title;
- rating/review count where valid;
- location/service radius;
- tags;
- price/contact mode;
- favorite;
- premium badge.

## Sorting
Allowed deterministic options:
- relevance;
- newest;
- price asc/desc where meaningful;
- rating where reliable.

No arbitrary client-provided SQL sort expression.

## Zero results
Show:
- clear no-result message;
- remove filters;
- expand radius;
- related categories;
- saved search later;
- nearby alternatives.

Never render a fake list.

## Mobile
- sticky compact query bar;
- Filters bottom sheet;
- Sort sheet;
- result cards optimized for thumb scanning;
- optional map toggle.

## SEO
Two modes:

### Search utility route
General dynamic `/search?... ` is normally non-indexable.

### Curated landing route
Category/location combinations may be indexable only if they pass the SEO quality gate in `PROGRAMMATIC_SEO.md`.

## Analytics
- search_execute;
- filter_apply;
- filter_clear;
- sort_change;
- result_click;
- save_listing;
- zero_results_seen;
- expand_radius.

## Acceptance criteria
- URL reflects shareable filter state where appropriate;
- browser back restores filters/scroll;
- no cross-tenant results;
- filter changes are cancellable/race-safe;
- empty/error states are explicit;
- arbitrary parameter combinations do not become indexable automatically.
