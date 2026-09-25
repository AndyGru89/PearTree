# PearTree.pro — MVP Acceptance Criteria

## MVP objective
A real operator can launch one useful marketplace project on PearTree and receive a real business lead without custom code.

## Operator onboarding
- sign up/sign in;
- create Organization;
- create Project;
- configure branding;
- connect/prepare domain;
- invite team member.

## Marketplace
- public homepage;
- categories;
- search/browse;
- Listing cards;
- Listing detail;
- mobile responsive experience.

## Listings
- authenticated user/business can create draft;
- upload photos;
- set category/location/attributes;
- preview;
- submit/publish according to moderation policy;
- edit/archive own listing.

## Business profiles
- create company;
- logo/cover/about;
- location and opening hours;
- services;
- company listings;
- contact/lead form;
- public /firma/{slug} page.

## Reference vertical
Auto Dealer/Komis can:
- create dealer profile;
- add vehicles;
- expose inventory;
- receive test-drive/contact lead.

## Leads
- public lead form persists a Lead;
- operator sees Lead in Console;
- notification failure cannot lose Lead;
- status can be updated.

## SEO
- correct title/meta/canonical;
- sitemap includes valid canonical pages;
- Console/Admin remain non-indexable;
- empty/thin generated pages are not indexed;
- listing/business pages have crawlable internal links.

## Security
- cross-tenant read/write denied;
- Business/Listing ownership enforced;
- uploads private/authorized where required;
- admin actions audited;
- no production secrets in repo.

## Operations
- staging and production environments separated;
- build/deploy repeatable;
- basic logs/metrics;
- rollback documented;
- D1 recovery procedure tested.

## Quality
- core journeys pass E2E;
- mobile 390px and desktop 1440px checked;
- keyboard/focus states present;
- no known P0/P1 issue.

## MVP is NOT
- full booking engine;
- escrow marketplace;
- native iOS/Android app;
- arbitrary no-code page builder;
- third-party plugin marketplace;
- autonomous AI agent platform.
