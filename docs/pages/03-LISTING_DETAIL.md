# Page 03 — Listing Detail

**Route:** `/listing/{slug}`  
**Surface:** Public marketplace  
**Priority:** P0

## Goal

Convert qualified interest into the one appropriate next action:
message, call, quote request, booking, purchase or application.

## Layout

### Breadcrumbs
Category -> subcategory -> location where relevant.

### Gallery
- primary image;
- thumbnails;
- fullscreen;
- image count;
- safe fallback.

### Main content
- title;
- price/contact model;
- rating where meaningful;
- location;
- tags/attributes;
- description.

### Seller/business panel
- business/person identity;
- verification state;
- rating/reviews;
- member since;
- response time if measured;
- profile link.

### Actions
Exactly the actions relevant to the listing:
- Zadzwoń;
- Napisz;
- Poproś o wycenę;
- Zarezerwuj;
- Kup;
- Aplikuj.

Do not show all action types at once.

### Secondary
- save;
- share;
- report.

### Below fold
- attributes;
- location/map;
- seller profile;
- safety guidance;
- related listings;
- related category/location links.

## State lifecycle
Active:
200 + indexable if quality gate passes.

Pending/draft:
not public.

Expired/sold:
follow route policy; may remain useful with status and related alternatives rather than immediate deletion.

Removed policy violation:
safe unavailable response and indexing policy.

## Mobile
- gallery first;
- compact title/price;
- trust info near top;
- sticky bottom CTA;
- seller card;
- details;
- related listings.

## SEO
- canonical;
- unique title/meta;
- BreadcrumbList;
- Product/Offer/Service schema only when semantically correct;
- real rating data only;
- image metadata;
- category/location internal links.

## Analytics
- listing_view;
- listing_gallery_open;
- listing_contact_click;
- listing_quote_start;
- listing_save;
- listing_share;
- listing_report;
- business_profile_click.

## Acceptance criteria
- primary CTA visible without ambiguity;
- contact authorization/privacy rules respected;
- unavailable listing state does not mislead;
- structured data matches visible content;
- mobile sticky CTA does not cover content.
