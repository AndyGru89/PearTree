# PearTree.pro — Listings Module Specification

## Goal
Enable directory/marketplace-style structured entities that can be discovered, filtered and monetized.

## Core entities
- Listing
- ListingType
- Category
- Location
- ListingMedia
- ListingOwner/BusinessProfile (later)
- AttributeDefinition / AttributeValue (controlled extensibility)

## Listing lifecycle
DRAFT -> PENDING_REVIEW -> ACTIVE -> SUSPENDED -> ARCHIVED.

Moderation can be disabled for trusted operator-managed projects but lifecycle remains explicit.

## Ownership
Every Listing belongs to one Project and therefore one Organization.

## Required capabilities
- create/edit;
- category assignment;
- location/geodata;
- structured attributes;
- media;
- status/moderation;
- public detail route;
- listing collection/filter pages;
- SEO metadata;
- feature/promotion entitlement hooks.

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
