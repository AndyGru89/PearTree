# Page 06 — Map Search

**Route:** `/map` or map mode within search  
**Surface:** Public marketplace  
**Priority:** P1

## Goal

Support location-sensitive discovery without turning the map into a separate inconsistent search engine.

## Desktop layout
- result list on left;
- map on right;
- search/category/location controls on top.

## Map behavior
- cluster markers at wide zoom;
- individual markers at local zoom;
- highlighted marker/card sync;
- pan/zoom optional “Szukaj w tym obszarze” action;
- no automatic request storm on every map movement unless throttled intentionally.

## Result synchronization
Map/list results share:
- same query;
- same filters;
- same tenant/project;
- same authorization/public visibility rules.

## Marker interaction
Selecting marker shows compact listing/provider card:
- image;
- name/title;
- rating/price;
- category;
- CTA.

## Privacy
For sensitive/private listing locations:
- do not expose precise coordinates;
- use approximate area;
- provider service-area centroid/polygon where appropriate.

## Mobile
Map-first full-screen view.
- top search;
- filter button;
- floating map controls;
- bottom card carousel/sheet;
- list/map switch.

## SEO
Interactive map utility itself is generally not a primary indexable SEO page.
SEO value belongs to canonical location/category landing pages.

## Analytics
- map_open;
- map_marker_click;
- map_search_area;
- map_to_list;
- map_filter_apply;
- map_result_contact.

## Acceptance criteria
- no coordinate leakage for approximate listings;
- keyboard-accessible alternative list exists;
- list/map state remains synchronized;
- viewport updates are throttled/debounced;
- map failure falls back to list results.
