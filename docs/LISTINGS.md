# PearTree.pro — Listings Module Specification

## Goal
Enable directory/marketplace-style structured entities that can be discovered, filtered and monetized.

## Core entities
- Listing
- ListingType
- Category
- Location
- ListingMedia
- BusinessProfile / Business
- AttributeDefinition / AttributeValue (controlled extensibility)

## Listing ownership models
A Listing may be owned by:
- an individual user/seller;
- a Business profile.

Every Listing still belongs to one Project and therefore one Organization.

Business-owned listings preserve the relationship:
`Listing -> Business -> Project -> Organization`.

## Listing lifecycle
DRAFT -> PENDING_REVIEW -> ACTIVE -> SUSPENDED -> ARCHIVED.

Moderation can be disabled for trusted operator-managed projects but lifecycle remains explicit.

## Required capabilities
- create/edit;
- category assignment;
- location/geodata;
- structured attributes;
- media;
- status/moderation;
- public detail route;
- listing collection/filter pages;
- business/seller ownership;
- SEO metadata;
- feature/promotion entitlement hooks.

## Business profile integration
A Business can publish:
- Listings;
- Services;
- Promotions;
- portfolio/media.

Listing detail pages link back to the owning Business profile where applicable.

Examples:
- Auto Dealer -> Vehicle Listings
- Real Estate Agency -> Property Listings
- Local Shop -> Product/Offer Listings
- Wedding Supplier -> Service/Package Listings

See:
- `BUSINESS_PROFILE_PAGE.md`
- `BUSINESS_PROFILE_DATA_MODEL.md`
- `VERTICAL_BUSINESS_TEMPLATES.md`

## Search/filtering
Foundation of Listings starts with deterministic structured filtering. Semantic/vector search is optional later and must not replace authoritative filters.

## Location
Store normalized address/location components and coordinates where needed. Geocoding provider is an adapter, not embedded business logic.

## Abuse/content
Spam, duplicate and prohibited-content controls are separate from authentication. Moderation decisions are auditable.

## Future monetization
Listings can later support:
- promoted placement;
- subscription entitlement;
- paid publication;
- pay-per-lead;
- booking/transaction hooks.

Financial state does not live directly in Listing rows; it references Commerce/Entitlements.
