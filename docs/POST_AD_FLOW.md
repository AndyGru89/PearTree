# PearTree.pro — Post Ad / Create Listing Flow

## Goal
Allow a normal user to publish a useful listing with minimum friction.

## Desktop/mobile stepper
1. Details
2. Photos
3. Location / attributes
4. Review
5. Publish

For simple categories, steps may collapse.

## Step 1 — Details
- category;
- title;
- price/contact model;
- description;
- condition/type;
- category-specific attributes.

## Step 2 — Photos
- multiple upload;
- reorder;
- crop/rotate later;
- primary image;
- upload progress;
- R2-backed asset lifecycle.

## Step 3 — Location
- city/region;
- approximate/private location controls;
- optional map pin;
- category-specific geography rules.

## Step 4 — Review
Show final preview:
- title;
- price;
- photos;
- location;
- description;
- category;
- promotion option.

## Step 5 — Publish
Possible outcomes:
- published;
- pending moderation;
- payment/promotion step;
- validation correction required.

## Autosave
Draft should persist safely.

## Validation
Inline, immediate where possible.
Do not erase entered data after validation failure.

## Mobile CTA
Sticky bottom primary button.

## Security
- upload validation;
- spam/rate limiting;
- suspicious content checks;
- no trust in client-side category/owner IDs.

## Monetization
Promotion is optional and must not obstruct basic listing creation unless plan rules require it.
