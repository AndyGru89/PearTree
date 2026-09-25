# PearTree.pro — UI Information Architecture

## 1. Public Marketplace

### Main navigation
- Browse
- Categories
- How it works
- About
- Pricing
- Sign in
- Sign up
- Post an ad

### Homepage sections
1. Header
2. Hero + marketplace search
3. Popular search chips
4. Trust/value points
5. Featured listings
6. Browse categories
7. How PearTree works
8. Local/community value proposition
9. Post-an-ad CTA
10. Latest listings
11. SEO/content blocks
12. Footer

## 2. Browse / search

### Route concept
- /browse
- /category/{slug}
- /location/{slug}
- /category/{category}/{location}
- /listing/{slug-or-id}

### Search UI
- free-text query;
- category;
- location;
- price;
- sort;
- condition/type;
- vertical-specific filters.

Desktop:
left/filter bar + listing grid/list.

Mobile:
filter drawer/sheet.

## 3. Listing detail

Sections:
- gallery;
- title;
- price;
- primary metadata;
- location/map;
- description;
- seller/provider;
- trust/reviews;
- contact actions;
- related listings;
- report/share/save.

## 4. Post an Ad

Wizard:
1. Category
2. Details
3. Photos
4. Location
5. Pricing/contact mode
6. Preview
7. Publish

The mockup’s 3-step flow may be used visually, but production logic should support a flexible step engine.

## 5. User account

- Profile
- My listings
- Saved
- Messages
- Leads/enquiries
- Billing/plan
- Settings
- Security

## 6. Operator Console

Sidebar:
- Dashboard
- Listings
- Categories
- Users
- Messages
- Leads
- Moderation
- Analytics
- Transactions
- Marketing
- Domains
- Settings

Dashboard:
- KPIs;
- sales/leads chart;
- category performance;
- plan card;
- recent messages;
- moderation queue;
- traffic map;
- alerts/tasks.

## 7. PearTree Platform Admin

Separate privileged surface:
- Organizations
- Projects
- Users
- Domains
- Billing
- Queues/jobs
- Audit
- Security
- Runtime/health
- Feature entitlements

Customer operator UI and PearTree platform admin must not be merged into one role-dependent page tree.
