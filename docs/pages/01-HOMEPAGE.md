# Page 01 — Homepage

**Route:** `/`  
**Surface:** Public marketplace  
**Priority:** P0

## Goal

Help a visitor quickly:
1. find an offer/service;
2. understand what PearTree is;
3. browse categories;
4. create an account or post a listing.

## Primary KPI

Search initiation rate.

Secondary:
- category click-through;
- listing detail click-through;
- sign-up;
- post-listing start.

## Layout

### Header
- PearTree logo;
- Ogłoszenia / Browse;
- Dodaj ogłoszenie;
- O PearTree;
- optional How it works/Pricing;
- Zaloguj;
- Zarejestruj się.

### Hero
Headline direction:
**Znajdź usługi i oferty w Twojej okolicy**

Supporting copy:
Local listings, trusted providers and real offers.

Hero illustration uses PearTree brand assets but cannot block search or delay usability.

### Main search
Fields:
- query;
- category;
- location;
- Search.

Desktop: inline.
Mobile: stacked/condensed.

### Popular/category shortcuts
Examples:
- Motoryzacja
- Nieruchomości
- Dom i ogród
- Usługi
- Zdrowie i uroda
- Edukacja
- Dla firm
- Inne

Categories are data-driven.

### Featured listings
Promoted/featured feed using shared Listing Card.

### Trust/value section
- verified/local;
- safe contact;
- real providers;
- local discovery.

### Latest listings
Crawlable links to active listings.

### SEO/content layer
- popular categories;
- popular locations;
- guides;
- how it works;
- safety.

### Footer
Company, help, legal, categories, language.

## Data requirements
- category list;
- featured listings;
- latest listings;
- popular locations/searches;
- localized copy;
- branding/theme.

## States
- listing feed loading;
- no featured listings;
- category service unavailable;
- search error;
- degraded hero image.

The page remains useful if decorative assets fail.

## Mobile
- compact top bar;
- search above illustration;
- category horizontal scroll or 2-column grid;
- 1–2 listing cards per row depending on width;
- persistent bottom navigation only for authenticated app-like state.

## SEO
Indexable.
Requires:
- unique title/description;
- canonical;
- Organization/WebSite schema where appropriate;
- crawlable category/location links;
- no duplicate home across non-canonical domains.

## Analytics events
- home_search_submit;
- home_category_click;
- home_listing_click;
- home_signup_click;
- home_post_listing_click.

## Acceptance criteria
- search usable without JavaScript animation;
- no significant layout shift in hero;
- all primary actions keyboard accessible;
- Polish strings fit 390px;
- listing cards show meaningful fallback if image missing;
- canonical and metadata are server-rendered.
