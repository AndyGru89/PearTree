# PearTree.pro — UI Mockups Direction

**Status:** Approved visual direction baseline  
**Date:** 2026-09-25

## 1. Purpose

This document translates the current PearTree mockups into an implementation-ready product design direction.

The mockups define three primary visual surfaces:

1. **Public Marketplace / Landing**
2. **Operator Dashboard / SaaS Console**
3. **Mobile Marketplace Experience**

The mockups are concept references, not pixel-perfect production specs. Implementation must preserve the brand language while improving accessibility, information hierarchy, localization and product consistency.

## 2. Brand direction

PearTree should feel:
- warm;
- local;
- trustworthy;
- optimistic;
- premium but approachable;
- nature-inspired without appearing childish.

Core visual motifs:
- pear/tree logo;
- leaves;
- green/gold palette;
- soft cream surfaces;
- light gradients;
- subtle organic illustration accents;
- rounded cards;
- clean data-focused SaaS UI.

Avoid:
- overly cartoonish UI;
- excessive decorative leaves in operational screens;
- low-contrast yellow/green text;
- heavy skeuomorphism;
- inconsistent icon styles;
- giant hero illustrations that hurt page speed.

## 3. Visual hierarchy

### Public surfaces
Emotional and visual:
- stronger illustration;
- larger typography;
- category visuals;
- marketplace imagery;
- clear search intent;
- strong conversion CTAs.

### Console/Admin
Functional and restrained:
- darker navigation;
- light data canvas;
- green/gold only as accents;
- charts and states use semantic colors;
- minimal decorative illustrations.

### Mobile
Fast and transactional:
- strong search;
- bottom navigation;
- large touch targets;
- image-led listings;
- short forms;
- progressive disclosure.

## 4. Approved visual patterns

### Header
Desktop:
- PearTree logo left;
- core navigation;
- global search;
- Sign in / Sign up;
- optional “Post ad” primary CTA.

Mobile:
- compact logo;
- search entry;
- alerts/profile;
- bottom navigation for authenticated users.

### Hero
Preferred structure:
- large headline;
- 1–2 sentence value proposition;
- integrated marketplace search;
- category/location filters;
- supporting trust/value points;
- brand illustration on right.

Hero must remain usable before illustrations load.

### Search bar
Search is the main interaction primitive.

Structure:
- query;
- category;
- location;
- Search CTA.

Desktop: one horizontal shell.
Mobile: stacked/condensed with filters drawer.

### Listing cards
Required content:
- image;
- premium/featured marker;
- title;
- price or contact mode;
- location;
- favorite;
- category/metadata where useful.

Cards should support:
- default;
- hover;
- saved;
- promoted;
- unavailable;
- skeleton.

### Category navigation
Icon + label.
Categories must be data-driven, not hard-coded into page layout.

### Dashboard KPI cards
Use for:
- active listings;
- new leads;
- revenue;
- views;
- conversion;
- moderation backlog.

Each KPI card should include:
- metric;
- period delta;
- compact trend visualization;
- drill-down action.

## 5. Illustration system

Illustrations use the PearTree pear/tree motif with:
- marketplace;
- search;
- listings;
- local community;
- sustainability;
- trust;
- monetization.

Illustrations are decorative/supporting. Product screenshots and real listings should become more prominent as the product matures.

## 6. Localization

Mockups currently use English UI copy. Production architecture must support localization from the beginning.

Initial locales:
- Polish: primary launch locale;
- English: secondary/product/global locale.

No visible product string should be permanently embedded into reusable UI components.
