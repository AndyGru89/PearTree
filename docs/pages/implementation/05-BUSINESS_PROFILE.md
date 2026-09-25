# Business Profile — React / Data / API Blueprint

Source UX spec: `../05-BUSINESS_PROFILE.md`

## Component tree

```txt
PublicShell
└─ BusinessProfilePage
   ├─ BusinessCover
   ├─ BusinessIdentityHeader
   ├─ BusinessTrustBar
   ├─ BusinessPrimaryActions
   ├─ BusinessTabs
   ├─ BusinessAboutSection
   ├─ BusinessServicesGrid
   │  └─ ServiceCard[]
   ├─ BusinessListingsSection
   │  └─ ListingCard[]
   ├─ BusinessReviews
   ├─ BusinessGallery
   ├─ BusinessLocationSection
   └─ BusinessContactSection
```

## Query
`GET /api/public/businesses/{slug}`

Output: `BusinessProfileVM`

## Mutations
- message;
- call click tracking;
- quote lead;
- review/report actions where enabled;
- save/follow later.

## Analytics
- business_view
- business_contact_click
- business_service_click
- business_listing_click
- business_review_open
- business_map_open

## SEO
Server metadata and structured data generated from same VM/domain source as page content.

## Test contract
- low-quality empty profile noindex;
- contact visibility respected;
- ratings genuine;
- location mixup across businesses impossible;
- vertical-specific CTA determined by capability data.
