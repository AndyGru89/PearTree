# PearTree.pro — Listing Card Specification

## Card goals
A listing card must communicate enough to decide whether to open details within 2–3 seconds.

## Required fields
- image;
- title;
- price or contact model;
- location;
- category context if useful;
- favorite control;
- promoted/premium badge where applicable.

## Optional
- seller type;
- rating;
- condition;
- key attribute chips;
- verified badge.

## Visual hierarchy
1. image
2. title
3. price
4. location / metadata
5. action affordance

## States
- normal;
- featured;
- promoted;
- saved;
- unavailable;
- sold;
- pending moderation;
- skeleton/loading.

## Accessibility
- entire card may be clickable but nested controls remain operable;
- favorite has accessible name;
- image alt derives from listing title/meaningful description;
- color badge is never the only status signal.

## SEO
Listing detail anchor must be crawlable.
Do not render listing navigation only through JavaScript click handlers.
