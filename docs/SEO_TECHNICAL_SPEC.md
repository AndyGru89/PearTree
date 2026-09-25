# PearTree.pro — Technical SEO Specification

## Rendering
Indexable public pages must expose meaningful HTML to crawlers. Critical metadata cannot depend solely on client-side interaction.

## HTTP status
- valid public page: 200;
- permanent moved resource: 301/308;
- missing resource: 404/410;
- server failure: correct 5xx;
- avoid soft 404 pages returning 200.

Google documents that indexable pages must be accessible and return successful status when valid.

Reference:
https://developers.google.com/search/docs/essentials/technical

## Canonicals
Each indexable resource has one preferred canonical URL.

Signals should align:
- redirects;
- rel=canonical;
- sitemap inclusion;
- internal links.

Google considers redirects and rel=canonical strong canonical signals; sitemap inclusion is weaker but useful.

Reference:
https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## Domain migration / custom domains
When a project activates a custom canonical domain:
- platform subdomain must not remain a competing indexable duplicate;
- use canonical/redirect policy consistently;
- sitemap must contain canonical-domain URLs;
- internal links use canonical-domain URLs.

## Sitemaps
Per-project sitemap system:
- sitemap index;
- pages;
- categories;
- locations;
- listings;
- articles/guides where enabled.

Only include:
- 200 URLs;
- canonical URLs;
- indexable public resources.

Reference:
https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview

## robots.txt and robots meta
- Console/Admin/API/preview are non-indexable.
- Search/filter parameter combinations are controlled.
- noindex is used for pages that can be crawled but should not be indexed.
- robots.txt is not used as a substitute for noindex.

## Faceted navigation
Filters can create near-infinite URLs.

Policy:
- only strategically selected combinations become indexable landing pages;
- arbitrary sort/filter/query parameters canonicalize or noindex according to route policy;
- crawl traps are blocked structurally.

## Pagination
Paginated collection pages use stable crawlable URLs and self-canonical behavior unless product research supports another pattern.

## Internal linking
Hierarchy:
Project home -> vertical/category -> location -> category/location landing -> listing/provider.

Breadcrumbs and contextual links reinforce this hierarchy.

## Structured data
Generate only schema supported by the actual visible resource.

Candidates:
- Organization / LocalBusiness where appropriate;
- BreadcrumbList;
- Article;
- FAQ only where current Google eligibility/value supports it;
- Product/Offer only for actual product/offer semantics.

Never fabricate ratings/reviews, price, availability or business attributes.

## Metadata
Every indexable template supports:
- unique title;
- meta description;
- canonical;
- Open Graph;
- robots;
- social image;
- structured data.

## Performance
Track Core Web Vitals and real-user performance. Optimize:
- server response;
- image sizing/format;
- JS payload;
- font loading;
- cache behavior;
- third-party scripts.

## Search Console
Every production tenant/domain should support ownership/monitoring strategy appropriate to product scope. PearTree platform monitoring should surface indexation anomalies when possible.
