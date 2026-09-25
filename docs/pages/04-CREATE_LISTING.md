# Page 04 — Create Listing

**Routes:** `/sell/*`  
**Surface:** Authenticated marketplace  
**Priority:** P0

## Goal

Allow a normal user or business to create a complete, valid listing with minimal friction.

## Wizard

Production step engine:
1. Category
2. Details
3. Photos
4. Location
5. Price/contact
6. Review
7. Publish

Simple categories may collapse compatible steps.

## Step 1 — Category
- category cards;
- recent category;
- search category;
- vertical selection.

Selection determines schema and subsequent fields.

## Step 2 — Details
- title;
- description;
- attributes;
- service/listing type;
- optional availability.

## Step 3 — Photos
- multi-upload;
- progress;
- reorder;
- primary image;
- remove;
- retry failed upload.

R2 lifecycle follows storage policy.

## Step 4 — Location
- city/region;
- map pin where relevant;
- privacy/approximate-location setting;
- service radius for providers.

## Step 5 — Price/contact
Possible modes:
- fixed price;
- negotiable;
- from price;
- request quote;
- free;
- contact only.

## Step 6 — Review
Production-like preview and edit links per section.

## Step 7 — Publish
Outcomes:
- Published;
- Pending moderation;
- Payment/promotion required;
- Validation corrections.

## Autosave
Draft autosaves after meaningful changes.
Show last-saved state.
Recover after refresh/device return where secure.

## Validation
- inline;
- schema-driven;
- no data loss after validation error;
- focus first invalid field on submit;
- server validation authoritative.

## Mobile
- one logical field group at a time;
- sticky Next/Publish;
- camera/gallery optimized upload;
- compact step progress.

## Analytics
- create_listing_start;
- create_listing_step_view;
- create_listing_step_complete;
- create_listing_validation_error;
- create_listing_photo_upload;
- create_listing_publish;
- create_listing_abandon.

## Acceptance criteria
- back/forward does not erase draft;
- cross-user draft access denied;
- invalid media rejected;
- category schema cannot be forged client-side;
- publish is idempotent;
- user understands whether listing is live, pending or needs action.
