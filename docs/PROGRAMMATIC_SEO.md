# PearTree.pro — Programmatic SEO Policy

## Goal
Allow scalable directory/vertical landing pages while preventing thin-page and doorway-page patterns.

## Search policy constraint
Google explicitly defines scaled content abuse as generating many pages primarily to manipulate rankings when those pages add little or no user value. AI generation does not exempt content from this policy.

Reference:
https://developers.google.com/search/docs/essentials/spam-policies

## Indexability gate
A generated page may be indexable only if it has:

1. real underlying inventory/data;
2. a distinct user intent;
3. unique useful information or functionality;
4. crawlable internal links;
5. valid canonical/meta;
6. no near-empty/thin state;
7. meaningful differentiation from sibling pages.

## Example: service + city
An indexable `/{service}/{city}` page should contain more than a rewritten paragraph.

Useful value can include:
- real providers/listings in that location;
- local availability/counts;
- category-specific filters;
- price/range data where reliable;
- local FAQs from actual product knowledge;
- map/location context;
- original editorial guidance;
- comparison or lead action.

If inventory is insufficient, keep the page non-indexable or do not create it.

## Page generation lifecycle
Potential state:
- candidate;
- generated draft;
- quality validation;
- indexable/published;
- degraded/noindex;
- retired/redirected.

## Quality thresholds
Thresholds are vertical-specific and documented before scale.

Possible requirements:
- minimum active inventory;
- minimum data completeness;
- unique descriptive fields;
- no duplicate title/H1/canonical;
- no orphan page;
- user action/utility present.

## AI
AI may assist in:
- summarizing structured data;
- drafting unique explanations;
- generating FAQ suggestions;
- classifying intent.

AI must not:
- fabricate local facts;
- invent providers/reviews/prices;
- generate thousands of pages solely from keyword permutations;
- replace data-quality gates.

## Crawl budget / URL control
Do not expose arbitrary combinations of:
- filters;
- sort order;
- tracking parameters;
- empty categories;
- duplicate locations.

Only allowlisted landing-page combinations enter sitemaps/internal-link graph.
