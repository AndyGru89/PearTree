# Listing Detail — React / Data / API Blueprint

Source UX spec: `../03-LISTING_DETAIL.md`

## Component tree

```txt
PublicShell
└─ ListingDetailPage
   ├─ Breadcrumbs
   ├─ ListingMainGrid
   │  ├─ ListingGallery
   │  └─ ListingSummaryPanel
   │     ├─ ListingTitlePrice
   │     ├─ ListingRating
   │     ├─ ListingAttributeChips
   │     ├─ ListingContactActions
   │     └─ ListingSecondaryActions
   ├─ ListingDescription
   ├─ ListingAttributes
   ├─ ListingLocation
   ├─ SellerProfileCard
   ├─ SafetyPanel
   └─ RelatedListings
      └─ ListingCard[]
```

## Query
`GET /api/public/listings/{slug}`

Output: `ListingDetailVM`

## Mutations
- save/unsave listing;
- create lead/message/quote request;
- report listing.

## Action router
`ListingContactActions` renders only actions returned by `availableActions`.

## Analytics
- listing_view
- listing_gallery_open
- listing_contact_click
- listing_quote_start
- listing_save
- listing_unsave
- listing_share
- listing_report
- listing_business_click

## Rendering
Public detail and metadata server-rendered.
Gallery/save/contact use client interactivity.

## Test contract
- inactive status follows route policy;
- structured data equals visible data;
- seller private data not exposed;
- approximate location stays approximate;
- only authorized/supported contact action rendered.
