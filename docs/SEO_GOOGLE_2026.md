# PearTree.pro — Google Search 2026 Notes

**Research date:** 2026-09-25  
**Purpose:** keep PearTree SEO specifications aligned with current Google documentation.

## 1. Scaled content abuse

Google's current spam policy states that producing many pages primarily to manipulate rankings, with little or no additional user value, can be treated as scaled content abuse. The policy explicitly includes generative-AI content when it is produced at scale without added value.

PearTree implication:
- do not automatically index every category × city × filter combination;
- AI text alone cannot make an otherwise thin page index-worthy;
- indexability must depend on real inventory/data and utility.

Source:
https://developers.google.com/search/docs/essentials/spam-policies

## 2. Doorway abuse

Google lists pages targeted at similar cities/regions that simply funnel users toward another destination as doorway abuse.

PearTree implication:
- service × city landing pages need real local results and unique user utility;
- avoid hundreds of near-identical geographic pages with no local inventory.

Source:
https://developers.google.com/search/docs/essentials/spam-policies

## 3. Canonicalization

Google documents canonicalization as the process of selecting a representative URL among duplicates. Sort/filter variants and accidental preview URLs are examples that can create duplicates.

PearTree implication:
- hostname/domain migration, filter pages and preview routes require explicit canonical policy;
- internal links, redirect behavior and sitemap URLs should align with the intended canonical.

Source:
https://developers.google.com/search/docs/crawling-indexing/canonicalization

## 4. FAQ rich results

Google's Search documentation update log states that FAQ rich results stopped appearing in Google Search from May 7, 2026.

PearTree implication:
- FAQ content may remain useful to users;
- do not sell or prioritize FAQ blocks as a Google rich-result growth tactic;
- structured-data roadmap should focus on schema that still matches real eligible result types.

Source:
https://developers.google.com/search/updates

## 5. Site reputation policy in the EEA

Google updated enforcement of its site reputation policy for the European Economic Area in August 2026. The underlying concern remains third-party content published on an established host primarily to exploit the host site's ranking signals.

PearTree implication:
- user-generated listing/profile content must be a genuine core part of a tenant marketplace/directory;
- PearTree should not encourage tenants to bolt unrelated third-party sections onto strong domains purely for search ranking;
- editorial responsibility, content relationship and user value need to be explicit.

Source:
https://developers.google.com/search/blog/2026/08/update-site-reputation-policy?hl=pl

## Engineering acceptance rule

SEO behaviors that can affect indexation are product features and require tests:
- canonical;
- robots/noindex;
- sitemap eligibility;
- public/private route status;
- custom-domain migration;
- filter URL policy;
- listing lifecycle and indexability.
