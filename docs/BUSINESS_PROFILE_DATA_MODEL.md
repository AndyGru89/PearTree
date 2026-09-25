# PearTree.pro — Business Profile Data Model

## Core entities

### Business
- id
- projectId
- ownerOrganizationId
- name
- slug
- status
- categoryId
- shortDescription
- description
- logoAssetId
- coverAssetId
- websiteUrl
- phone
- email
- verificationStatus
- createdAt
- updatedAt

### BusinessLocation
- id
- businessId
- name
- address
- city
- region
- postalCode
- country
- latitude
- longitude
- phone
- openingHours
- serviceArea

### BusinessMember
Connects authorized users/team to Business.

### BusinessService
- businessId
- category/type
- name
- description
- pricing model
- price/fromPrice
- duration
- status

### BusinessAttribute
Vertical-specific structured fields.

### BusinessMedia
Gallery/portfolio media in R2.

### BusinessLead
References generic Lead but preserves business/location/service/listing context.

### BusinessReview
Review data with moderation state.

## Relationships
```
Organization
  -> Project
      -> Business
          -> BusinessLocation[]
          -> Listing[]
          -> BusinessService[]
          -> BusinessMedia[]
          -> BusinessReview[]
          -> Lead[]
```

## Multi-tenancy
Business always belongs to one Project and resolves to one Organization.

## Vertical type
Do not create tables such as AutoDealer, AccountingOffice, BeautySalon unless domain requirements genuinely demand separate aggregates.

Prefer:
- Business.category/type;
- typed attributes;
- dedicated listing/service schemas.

## Search
Business search index may include:
- name;
- category;
- location;
- service area;
- verification;
- rating;
- active listings/services.

## Lifecycle
DRAFT -> PENDING_REVIEW -> ACTIVE -> SUSPENDED -> ARCHIVED.

## Verification
Verification is separate from paid plan.

A company cannot buy a false "verified" status.
