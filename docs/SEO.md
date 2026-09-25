# PearTree.pro — SEO Architecture

## Goal
Make SEO a platform capability for each tenant project rather than ad-hoc page code.

## Shared primitives
Every indexable resource can define:
- title;
- meta description;
- canonical URL;
- robots directive;
- Open Graph/social metadata;
- structured data;
- sitemap eligibility;
- locale/hreflang where applicable.

## URL rules
- stable, readable slugs;
- one canonical URL per resource;
- explicit redirects for changed paths;
- no duplicate tenant content across platform subdomain/custom domain once canonical domain is active;
- unknown resources return correct status rather than soft-404 content.

## Sitemaps
Generate per-project sitemap indexes/segments appropriate to content volume. Include only canonical, public, index-eligible resources.

## Robots
Project-level defaults plus page/resource overrides. Admin/preview/Console surfaces are never indexable.

## Structured data
Use schema appropriate to resource type. Structured data must reflect visible/authoritative content and must not fabricate reviews, prices or availability.

## Programmatic SEO
Allowed only when each generated page has real user value and deterministic data. Avoid thin combinatorial pages.

## Performance
SEO rendering must preserve crawlable server-rendered HTML where required. Performance/Core Web Vitals are measured but not manipulated at the expense of functionality.

## AI content
AI-assisted SEO text requires editorial controls and provenance/quality safeguards. AI does not automatically create thousands of indexable pages.
