# PearTree.pro — Page Specifications

These page documents are implementation contracts for the current approved mockup set.

They do not replace domain specifications. Each page spec references the canonical product/security documents and defines:
- route;
- user goal;
- layout;
- components;
- required data;
- actions;
- responsive behavior;
- states;
- SEO/indexability;
- analytics;
- acceptance criteria.

## Current pages

1. [Homepage](01-HOMEPAGE.md)
2. [Search Results](02-SEARCH_RESULTS.md)
3. [Listing Detail](03-LISTING_DETAIL.md)
4. [Create Listing](04-CREATE_LISTING.md)
5. [Business Profile](05-BUSINESS_PROFILE.md)
6. [Map Search](06-MAP_SEARCH.md)
7. [User Account / My Listings](07-USER_ACCOUNT.md)
8. [CRM / Leads](08-CRM_LEADS.md)
9. [PearTree Platform Admin](09-PLATFORM_ADMIN.md)

## Cross-page rules

- Polish is the primary launch locale.
- English is supported through localization architecture.
- All protected mutations require server-side authorization.
- Loading, empty, error, permission-denied and success states are part of the page contract.
- Mockup text/data is illustrative and must not be copied as production truth.
- Responsive behavior follows `RESPONSIVE_UI_SPEC.md`.
- Visual tokens come from `DESIGN_TOKENS.md`.
- Accessibility target: WCAG 2.2 AA.
