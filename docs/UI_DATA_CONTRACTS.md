# PearTree.pro — UI Data Contracts

**Status:** Draft implementation contracts

These are presentation-facing contracts. They are not database schemas.

## Common primitives

```ts
type ID = string

type ImageVM = {
  src: string
  alt: string
  width?: number
  height?: number
  blurDataURL?: string
}

type MoneyVM = {
  amountMinor?: number
  currency?: string
  label: string
}

type RatingVM = {
  value: number
  count: number
}

type LocationVM = {
  city?: string
  region?: string
  countryCode?: string
  label: string
  lat?: number
  lng?: number
  precision: "exact" | "approximate" | "hidden"
}

type BadgeVM = {
  key: string
  label: string
  tone: "neutral" | "success" | "warning" | "danger" | "premium" | "info"
}
```

## Category

```ts
type CategoryVM = {
  id: ID
  slug: string
  name: string
  iconKey?: string
  href: string
  listingCount?: number
}
```

## Listing summary

```ts
type ListingCardVM = {
  id: ID
  slug: string
  href: string
  title: string
  image: ImageVM | null
  price: MoneyVM | null
  contactMode: "price" | "quote" | "contact" | "free"
  location: LocationVM
  category?: CategoryVM
  rating?: RatingVM
  badges: BadgeVM[]
  isSaved: boolean
  attributes?: Array<{ key: string; label: string }>
}
```

## Listing detail

```ts
type ListingDetailVM = {
  id: ID
  slug: string
  title: string
  description: string
  status: "active" | "sold" | "expired" | "unavailable"
  images: ImageVM[]
  price: MoneyVM | null
  contactMode: string
  location: LocationVM
  attributes: Array<{ key: string; label: string; value: string }>
  categoryPath: Array<{ label: string; href: string }>
  seller: SellerSummaryVM
  availableActions: ContactActionVM[]
  related: ListingCardVM[]
  seo: SEOViewModel
}
```

## Seller / Business

```ts
type SellerSummaryVM = {
  id: ID
  type: "person" | "business"
  name: string
  href?: string
  avatar?: ImageVM
  verified: boolean
  rating?: RatingVM
  memberSinceLabel?: string
  responseTimeLabel?: string
}

type BusinessProfileVM = {
  id: ID
  slug: string
  name: string
  logo?: ImageVM
  cover?: ImageVM
  verified: boolean
  categoryLabel: string
  location: LocationVM
  rating?: RatingVM
  trustStats: Array<{ key: string; label: string; value: string }>
  description: string
  services: ServiceCardVM[]
  listings: ListingCardVM[]
  availableActions: ContactActionVM[]
  seo: SEOViewModel
}
```

## Contact action

```ts
type ContactActionVM = {
  kind: "message" | "call" | "quote" | "book" | "buy" | "apply"
  label: string
  enabled: boolean
}
```

## Search

```ts
type SearchRequest = {
  q?: string
  category?: string
  location?: string
  radiusKm?: number
  minPrice?: number
  maxPrice?: number
  sort?: string
  cursor?: string
  filters?: Record<string, string | string[]>
}

type SearchResultsVM = {
  total?: number
  items: ListingCardVM[]
  facets: SearchFacetVM[]
  nextCursor?: string
  seoMode: "utility-noindex" | "curated-indexable"
}
```

## Lead

```ts
type LeadRowVM = {
  id: ID
  customerLabel: string
  serviceLabel: string
  locationLabel?: string
  status: "new" | "qualified" | "in_progress" | "won" | "lost" | "spam" | "archived"
  assignedTo?: string
  sourceLabel: string
  createdAtLabel: string
  lastActivityLabel?: string
}

type LeadDetailVM = LeadRowVM & {
  contact: {
    name?: string
    email?: string
    phone?: string
  }
  message?: string
  timeline: LeadTimelineItemVM[]
  consent?: ConsentSummaryVM
}
```

## Admin KPI

```ts
type KPIViewModel = {
  key: string
  label: string
  value: string
  delta?: {
    direction: "up" | "down" | "flat"
    label: string
  }
  href?: string
}
```

## SEO

```ts
type SEOViewModel = {
  title: string
  description?: string
  canonical: string
  robots: "index,follow" | "noindex,follow" | "noindex,nofollow"
  structuredData?: unknown[]
}
```

## Contract rules

- UI contracts contain no secrets.
- UI contracts contain no raw session/auth token.
- private exact coordinates are never included when location precision is approximate/hidden.
- tenant/project ownership IDs are not authorization proofs.
- display labels may be localized; stable enum keys remain language-neutral.
