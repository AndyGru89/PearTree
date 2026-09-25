# Homepage — React / Data / API Blueprint

Source UX spec: `../01-HOMEPAGE.md`

## Component tree

```txt
PublicShell
└─ HomePage
   ├─ PublicHeader
   ├─ HomeHero
   │  ├─ HeroCopy
   │  ├─ MarketplaceSearchBar
   │  └─ HeroIllustration
   ├─ PopularSearchChips
   ├─ TrustPillars
   ├─ FeaturedListingsSection
   │  └─ ListingCard[]
   ├─ CategoryGrid
   │  └─ CategoryTile[]
   ├─ WhyPearTreeSection
   ├─ PostListingCTA
   ├─ LatestListingsSection
   │  └─ ListingCard[]
   ├─ SEOContentLinks
   └─ PublicFooter
```

## Page query

`GET /api/public/home`

Response:
```ts
type HomePageVM = {
  categories: CategoryVM[]
  featured: ListingCardVM[]
  latest: ListingCardVM[]
  popularLocations: Array<{ label: string; href: string }>
  popularSearches: Array<{ label: string; href: string }>
}
```

## Key props
- `MarketplaceSearchBar.defaultValues`
- `ListingCard.listing`
- `CategoryTile.category`
- `PostListingCTA.href`

## Client interactions
- query/category/location editing;
- submit search;
- favorite listing if signed in;
- category shortcuts.

## Analytics
- home_view
- home_search_submit
- home_category_click
- home_listing_click
- home_signup_click
- home_post_listing_click

## Rendering
Server-render:
- hero copy;
- categories;
- initial listing sections;
- SEO links;
- metadata.

Client:
- interactive search inputs;
- favorites.

## Test contract
- search submits normalized route;
- category links crawlable;
- no listing data -> section fallback;
- server metadata present;
- mobile order keeps search above decorative art.
