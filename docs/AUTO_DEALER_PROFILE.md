# PearTree.pro — Auto Dealer / Komis Profile

## Purpose
Vertical implementation of the generic Business Profile for a car dealership / auto komis.

## URL
`/firma/{dealer-slug}`

Optional SEO entry:
`/komisy/{city}`
`/komis-samochodowy/{city}`
`/firma/{dealer-slug}`

## Hero
Show:
- dealer logo;
- dealer name;
- verified badge;
- city;
- rating;
- number of cars available;
- opening hours status;
- cover image;
- Call;
- Message;
- View cars.

## Dealer highlights
- active cars count;
- financing available;
- trade-in accepted;
- warranty offered;
- delivery available;
- vehicle inspection;
- invoice/VAT options.

Only show features explicitly configured by dealer.

## Inventory section
Vehicle cards with:
- main photo;
- make/model;
- year;
- mileage;
- fuel;
- transmission;
- price;
- location;
- financing estimate optional;
- premium/sponsored badge.

Filters:
- make;
- model;
- price;
- year;
- mileage;
- fuel;
- transmission;
- body type;
- drivetrain;
- power;
- VAT;
- financing;
- availability.

## Vehicle detail link
Every car opens a standard listing detail with dealer context and persistent dealer CTA.

## Dealer services
Possible:
- car sales;
- financing;
- leasing;
- trade-in;
- vehicle purchase;
- warranty;
- transport/delivery;
- registration support;
- insurance referral;
- inspection/test drive.

## Test drive / lead form
Structured fields:
- vehicle;
- preferred date;
- name;
- phone;
- email;
- message.

No hard booking requirement in first version; can create a lead.

## Trade-in form
Fields:
- make/model;
- year;
- mileage;
- VIN optional;
- expected price;
- photos;
- contact details.

## Financing form
Initial lead only:
- selected vehicle;
- financing type;
- down payment;
- period;
- business/private;
- contact details.

Financial calculations must be clearly labeled as estimates unless based on real lender data.

## Trust
Potential:
- company verification;
- dealer since;
- review score;
- number of active vehicles;
- completed sales only if reliably tracked;
- accepted payment/financing methods.

## SEO architecture
Indexable:
- dealer profile;
- dealer + city category;
- make/model inventory pages only when enough real inventory exists.

Avoid empty pages for every make/model/city permutation.

## Premium features
- featured dealer badge;
- top placement in city;
- featured vehicles;
- richer gallery/video;
- lead analytics;
- financing CTA;
- team/salesperson profiles;
- multi-location inventory;
- custom dealer landing pages.
