# PearTree.pro — Business Profile / Company Page

## Goal
Create a rich public company page that works as a mini-site inside PearTree for businesses with listings, services, reviews, leads and brand identity.

This is not just a seller card. It is a persistent public business profile and SEO landing page.

## Example verticals
- car dealer / auto komis;
- car workshop;
- accounting office;
- renovation company;
- real estate agency;
- beauty salon;
- wedding supplier;
- pet service;
- local shop;
- B2B service provider.

## URL model
Recommended:
`/firma/{slug}`

Optional vertical aliases may redirect/canonicalize into the same profile:
`/komis/{slug}`
`/warsztat/{slug}`

One canonical business profile URL per company.

## Hero / header
Show:
- logo;
- company name;
- verified badge;
- category;
- city/region;
- rating + review count;
- short tagline;
- cover/banner image;
- primary CTA;
- secondary CTA;
- save/follow;
- share.

Primary CTA depends on vertical:
- Contact company;
- Request quote;
- Call;
- Message;
- Book visit;
- See offers;
- Visit website.

## Trust panel
Potential elements:
- verified business;
- member since;
- company identifier / NIP if user chooses to display;
- response time;
- number of active listings;
- review score;
- years in business;
- completed jobs/transactions where data is trustworthy.

Do not fabricate trust metrics.

## Main navigation tabs
Recommended:
- Overview
- Offers / Listings
- Services
- Reviews
- About
- Contact

Optional:
- Team
- Portfolio
- Locations
- Promotions
- FAQ

Tabs must map to crawlable sections/URLs where SEO value exists.

## Overview section
- business description;
- hero services/categories;
- featured offers;
- opening hours;
- service area;
- location/map;
- trust highlights;
- latest reviews;
- contact CTA.

## Offers / Listings
Grid/list of active company listings.

Filters can include:
- category;
- price;
- location;
- status;
- attributes.

Cards use shared Listing Card specification.

## Services
Structured service cards:
- service name;
- short description;
- price / from-price / quote;
- estimated duration;
- availability;
- CTA.

## Reviews
- aggregate rating;
- review distribution;
- verified review marker where justified;
- review list;
- owner response.

Moderation and abuse controls are mandatory.

## About company
- long description;
- business story;
- team;
- certificates;
- brands/partners;
- years active;
- gallery.

## Contact
- phone;
- message;
- website;
- social links;
- email where appropriate;
- address;
- opening hours;
- map;
- inquiry form.

Contact data visibility is configurable.

## Lead form
Generic:
- name;
- phone/email;
- message;
- preferred contact;
- consent where required.

Vertical forms may add structured fields.

## Multi-location
A Business can own multiple locations:
`Business -> BusinessLocation[]`

Each location:
- name;
- address;
- coordinates;
- phone;
- hours;
- service area;
- location-specific listings/services.

## SEO
Each company profile supports:
- unique title;
- meta description;
- canonical;
- Open Graph;
- LocalBusiness/Organization schema only where semantically correct;
- BreadcrumbList;
- aggregateRating only when policy/eligibility is satisfied and data is genuine;
- internal links from category/location pages.

## Indexability
Business page indexable only when it has enough real information.
Empty shell profiles remain noindex until quality threshold is met.

## Monetization
Business profile can support:
- Free;
- Verified;
- Premium;
- Featured;
- Sponsored.

Paid plans may unlock:
- logo/cover;
- more listings;
- analytics;
- featured placement;
- lead inbox;
- custom CTA;
- team members;
- multiple locations;
- external links;
- promotions;
- removing PearTree branding in white-label contexts.

## Dashboard
Company operator needs:
- profile completeness;
- profile views;
- listing views;
- leads;
- calls/messages;
- reviews;
- conversion;
- plan/usage;
- edit profile.

## Mobile
Sticky bottom actions:
- Message
- Call
- Request quote / View offers

Business name, rating and primary CTA remain visible near top.
