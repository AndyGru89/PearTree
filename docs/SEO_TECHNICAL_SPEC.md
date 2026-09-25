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

Filter/sort variants, preview URLs and platform-subdomain/custom-domain duplicates require explicit canonical policy.

Reference:
https://developers.google.com/search/docs/crawling-indexing/canonicalization

## Domain migration / custom domains
When a project activates a custom canonical domain:
- platform subdomain must not remain a competing indexable duplicate;
- use canonical/redirect policy consistently;
- sitemap must contain canonical-domain URLs;
- internal links use canonical-domain URLs;
- unknown or incomplete custom-domain states must not accidentally expose duplicate public pages.

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
- pages blocked from crawl cannot reliably communicate a robots meta noindex directive.

## Faceted navigation
Filters can create near-infinite URLs.

Policy:
- only strategically selected combinations become indexable landing pages;
- arbitrary sort/filter/query parameters canonicalize or noindex according to route policy;
- crawl traps are blocked structurally;
- filter pages are not promoted into the internal-link graph unless they pass the indexability quality gate.

## Programmatic location/category pages
A service × city/category × city page is indexable only when it has:
- real relevant inventory;
- distinct user intent;
- useful local/category data or functionality;
- crawlable internal links;
- unique, accurate metadata;
- no doorway-style funnel behavior.

Mass creation of low-value geographic pages or AI text without additional value is prohibited by PearTree product policy.

Reference:
https://developers.google.com/search/docs/essentials/spam-policies

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
- Product/Offer only for actual product/offer semantics;
- other types only after current Google eligibility is checked.

### FAQ
FAQ content may still improve usability and topical completeness, but Google Search documentation states that FAQ rich results stopped appearing from May 7, 2026. Do not treat FAQ schema as an SEO rich-result growth feature.

Reference:
https://developers.google.com/search/updates

Never fabricate ratings/reviews, price, availability or business attributes.

## Third-party / user-generated content
Listings and provider profiles are valid core marketplace content when they are genuinely part of the tenant site's purpose.

Do not create unrelated third-party sections merely to exploit an established domain's ranking signals. Google updated its site-reputation policy enforcement in the EEA in August 2026; PearTree tenant guidance must reflect the current policy.

Reference:
https://developers.google.com/search/blog/2026/08/update-site-reputation-policy?hl=pl

## Metadata
Every indexable template supports:
- unique title;
- meta description;
- canonical;
- Open Graph;
- robots;
- social image;
- structured data where relevant.

## Performance
Track Core Web Vitals and real-user performance. Optimize:
- server response;
- image sizing/format;
- JS payload;
- font loading;
- cache behavior;
- third-party scripts.

## Search Console
Every production tenant/domain should support an ownership/monitoring strategy appropriate to product scope. PearTree platform monitoring should surface indexation anomalies where possible.

Track at minimum:
- indexed/excluded URLs;
- canonical mismatches;
- sitemap errors;
- 404/5xx;
- accidental noindex;
- page-template performance.

## Automated SEO tests
Critical templates require tests for:
- title/meta rendering;
- canonical;
- robots;
- sitemap eligibility;
- HTTP status;
- custom-domain URL generation;
- filter parameter policy;
- listing state -> indexability transition.
