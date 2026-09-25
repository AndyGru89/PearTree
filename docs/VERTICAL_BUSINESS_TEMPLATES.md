# PearTree.pro — Vertical Business Profile Templates

## Principle
One Business Profile engine, vertical-specific schemas.

Do not fork frontend pages per industry.

## Shared core
All profiles share:
- brand/logo;
- company name;
- category;
- address/location;
- description;
- gallery;
- hours;
- contact;
- reviews;
- listings/services;
- lead form;
- analytics;
- plan/entitlements.

## Vertical configuration
Each vertical defines:
- hero CTA;
- attributes;
- service types;
- listing types;
- lead form;
- trust signals;
- filters;
- structured data;
- premium features.

## Auto dealer
Primary object:
Vehicle listing.

CTA:
View cars / Call / Message / Test drive.

Special:
financing, trade-in, multi-location inventory.

## Car workshop
Primary object:
Service.

CTA:
Request appointment / Call.

Attributes:
brands serviced, service types, diagnostics, opening hours, pickup.

## Accounting office
Primary object:
Accounting service/package.

CTA:
Request quote / Consultation.

Attributes:
business type, accounting form, payroll, VAT, languages, online service.

## Renovation company
Primary object:
Service + project portfolio.

CTA:
Request quote.

Attributes:
service area, service categories, project size, availability, portfolio.

## Real-estate agency
Primary object:
Property listings.

CTA:
Contact agent / View properties.

Attributes:
property type, sales/rental, areas served, agents.

## Beauty salon
Primary object:
Service/treatment.

CTA:
Book / Contact.

Attributes:
treatment category, price, duration, staff, opening hours.

## Wedding/event supplier
Primary object:
Package/service.

CTA:
Ask about date.

Attributes:
event type, coverage area, package, capacity, portfolio.

## Pet service
Primary object:
Service/provider availability.

CTA:
Request service / Message.

Attributes:
animal type, service type, location, availability.

## Local shop
Primary object:
Products/offers.

CTA:
View offers / Visit / Contact.

Attributes:
category, stock/promotion, pickup/delivery.

## B2B service company
Primary object:
Service/case study.

CTA:
Request consultation.

Attributes:
industry, service scope, team size, locations, case studies.

## Template architecture
`BusinessProfileTemplate`
- hero
- trust
- tabs
- listing/service blocks
- leadFormSchema
- attributeSchema
- seoSchema
- monetizationCapabilities

## Admin/editor
When a company selects its category, PearTree loads the vertical template and asks only relevant questions.

Example:
Selecting Auto Dealer enables:
- inventory;
- financing;
- trade-in;
- test-drive lead;
- dealer-specific vehicle filters.

Selecting Accounting Office enables:
- services;
- business/accounting form fields;
- quote form;
- consultation CTA.

## Extension
New verticals are configuration + schema + components, not independent products.
