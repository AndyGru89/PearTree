# PearTree.pro — UI Implementation Roadmap

## Gate
Do not implement all mockups before Foundation runtime/auth/data proof-of-concepts are green.

## UI-0 — Design Foundation
- implement tokens;
- typography;
- icons;
- logo assets;
- Button/Input/Card/Badge/Dialog/Toast;
- responsive shell;
- Storybook or equivalent component preview if compatible with chosen stack.

## UI-1 — Public Shell
- header;
- footer;
- homepage sections;
- global search component;
- listing card;
- category tile.

## UI-2 — Marketplace
- browse/search;
- filter system;
- listing detail;
- saved state;
- share/report;
- contact/lead CTA.

## UI-3 — Create Listing
- form engine;
- stepper;
- autosave draft;
- media upload;
- preview/publish.

## UI-4 — Account
- auth screens;
- user menu;
- saved;
- messages;
- my listings;
- billing/settings.

## UI-5 — Operator Console
- dashboard shell;
- KPI cards;
- charts;
- tables;
- moderation queue;
- CRM/lead inbox;
- analytics;
- project settings.

## UI-6 — Admin
- privileged shell;
- organizations/projects;
- audit;
- jobs;
- runtime/system state.

## UI quality gates
- WCAG 2.2 AA target;
- keyboard navigation;
- responsive tests;
- no layout shift from illustration assets;
- optimized image formats;
- error/empty/loading states;
- analytics events on primary conversion actions;
- no business authorization controlled only by UI visibility.
