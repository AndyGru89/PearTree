# Map Search — React / Data / API Blueprint

Source UX spec: `../06-MAP_SEARCH.md`

## Component tree

```txt
PublicShell
└─ MapSearchPage
   ├─ MapSearchToolbar
   ├─ MapSearchLayout
   │  ├─ MapResultList
   │  │  └─ MapResultCard[]
   │  └─ SearchMap
   │     ├─ MarkerClusterLayer
   │     ├─ ListingMarker[]
   │     └─ SelectedMarkerCard
   ├─ SearchThisAreaButton
   ├─ MobileMapResultSheet
   └─ MapFallbackList
```

## Query
`GET /api/public/search/map`

Input:
search filters + viewport bounding box.

Output:
```ts
type MapSearchVM = {
  items: Array<{
    id: string
    lat: number
    lng: number
    locationPrecision: "exact" | "approximate"
    card: ListingCardVM
  }>
  nextCursor?: string
}
```

Exact private coordinates must never enter response.

## Client interactions
- pan/zoom;
- cluster click;
- marker selection;
- list/marker sync;
- “search this area”.

Requests throttled/debounced and cancellable/race-safe.

## Analytics
- map_open
- map_marker_click
- map_search_area
- map_to_list
- map_filter_apply
- map_result_contact

## Test contract
- coordinate privacy;
- map failure fallback;
- keyboard-accessible list;
- same filters drive map and list;
- stale viewport response cannot replace newer viewport.
