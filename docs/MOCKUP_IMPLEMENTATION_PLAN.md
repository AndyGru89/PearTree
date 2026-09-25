# PearTree.pro — Mockup-to-Product Implementation Plan

## Approved visual references
Current mockups define the direction for:
1. public marketplace homepage;
2. operator dashboard;
3. mobile browse/detail/post-ad flow.

They are visual references, not literal pixel contracts.

## Phase UI-00 — Foundation
- brand assets;
- design tokens;
- typography;
- icon system;
- spacing/radius/shadow;
- responsive breakpoints;
- accessibility baseline.

## Phase UI-01 — Public marketplace
Implement:
- header;
- hero;
- search;
- featured listings;
- category grid;
- benefits;
- CTA;
- latest listings;
- footer.

## Phase UI-02 — Listing system
- listing card;
- list/grid;
- filters;
- detail;
- favorite/save;
- seller profile.

## Phase UI-03 — Create listing
- stepper;
- autosave;
- image upload;
- category attributes;
- review/publish.

## Phase UI-04 — Mobile optimization
- bottom navigation;
- mobile search;
- listing detail;
- create listing;
- responsive cards.

## Phase UI-05 — Operator console
- app shell/sidebar;
- KPI cards;
- charts;
- categories;
- leads/messages;
- moderation;
- plan/entitlements;
- analytics.

## Phase UI-06 — Admin
Separate platform-admin surface.

## Quality gate
Before marking UI complete:
- 390px mobile;
- 430px mobile;
- 768/834px tablet;
- 1280px desktop;
- 1440px desktop;
- keyboard navigation;
- focus states;
- loading/empty/error;
- reduced-motion;
- real content overflow;
- long Polish strings;
- dark green contrast checks.

## Fidelity rule
Do not blindly reproduce text or data from image-generation artifacts.
Implementation copy/data comes from product specs and localization files.
