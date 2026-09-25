# Page 05 — Business / Provider Profile

**Route:** `/firma/{slug}`  
**Surface:** Public marketplace  
**Priority:** P1

## Goal

Act as a mini-site for a provider/company and convert visitors into calls, messages, quote requests or listing/service views.

## Hero
- cover image;
- logo/avatar;
- company name;
- verified state;
- category;
- city/service area;
- rating/review count;
- primary CTA;
- secondary CTA.

## Trust row
Possible genuine signals:
- verified business;
- number of reviews;
- completed jobs where measured;
- response time;
- member since;
- service radius.

## Tabs/sections
- O firmie;
- Usługi;
- Oferty;
- Opinie;
- Galeria;
- Lokalizacja;
- Kontakt.

Tabs with SEO value should map to crawlable route/section architecture rather than JS-only hidden content.

## About
- business description;
- differentiators;
- certifications;
- team/experience where supplied.

## Services
Structured service cards with:
- name;
- description;
- pricing mode;
- CTA.

## Listings
Shared listing cards.

## Reviews
- aggregate;
- distribution;
- reviews;
- business replies;
- report/moderation.

## Location
- map;
- address;
- service area;
- opening hours;
- multi-location selector where needed.

## Mobile
- identity/trust first;
- sticky Message/Call/Quote;
- tabs become horizontal scroller;
- cards stack vertically.

## SEO
Indexable only above quality threshold.
Supports:
- Organization/LocalBusiness when appropriate;
- BreadcrumbList;
- canonical;
- real review data;
- category/location internal links.

## Analytics
- business_view;
- business_contact_click;
- business_service_click;
- business_listing_click;
- business_review_open;
- business_map_open.

## Acceptance criteria
- empty shell profile is noindex;
- fake trust metrics impossible;
- contact visibility follows owner settings;
- multi-location data cannot mix businesses/tenants;
- primary CTA adapts by vertical.
