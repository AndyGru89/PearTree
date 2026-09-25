# Search Results — React / Data / API Blueprint

Source UX spec: `../02-SEARCH_RESULTS.md`

## Component tree

```txt
PublicShell
└─ SearchPage
   ├─ SearchTopBar
   ├─ SearchLayout
   │  ├─ SearchFilterSidebar
   │  │  └─ SearchFacetGroup[]
   │  └─ SearchResultsPanel
   │     ├─ ResultsHeader
   │     │  ├─ ResultsCount
   │     │  ├─ SortSelect
   │     │  └─ ViewModeToggle
   │     ├─ ActiveFilterChips
   │     ├─ ListingResults
   │     │  └─ ListingCard[]
   │     └─ ResultsPagination
   ├─ MobileFilterDrawer
   └─ ZeroResultsState
```

## Query
`GET /api/public/search`

Input: `SearchRequest`  
Output: `SearchResultsVM`

## URL state
Canonical search-state adapter:
- q
- category
- location
- radius
- price
- sort
- allowlisted vertical filters.

## Client interactions
- filter update;
- clear;
- sort;
- pagination;
- grid/list;
- map toggle.

Use race-safe request handling.

## Analytics
- search_execute
- filter_apply
- filter_clear
- sort_change
- search_result_click
- search_zero_results
- search_expand_radius
- search_map_open

## SEO mode
`utility-noindex` for ad-hoc search.
Curated routes use a separate server SEO adapter and can become `curated-indexable`.

## Test contract
- URL back/forward restores state;
- stale request cannot overwrite newer request;
- arbitrary filter does not reach data layer;
- cross-project result leakage impossible;
- no-result state offers safe recovery.
