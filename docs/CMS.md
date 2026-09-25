# PearTree.pro — CMS Module Specification

## Goal
Provide structured, tenant-aware publishing for project pages without turning Foundation into an unrestricted visual page builder.

## Core entities
- Page
- PageVersion
- Navigation
- NavigationItem
- ContentBlock
- MediaAsset
- Redirect

## Page lifecycle
DRAFT -> PUBLISHED -> ARCHIVED.
Publishing creates an immutable/versioned publication record or equivalent recoverable state.

## Required fields
Page:
- id;
- projectId;
- slug/path;
- title;
- status;
- locale;
- SEO metadata;
- content/schema;
- createdBy/updatedBy;
- timestamps.

## Content
Use typed/validated content blocks. Rich text must be sanitized. Arbitrary script injection is prohibited.

Initial block concepts:
- Hero
- RichText
- Image
- Gallery
- CTA
- FAQ
- Feature list
- Contact/form reference
- Listing collection reference

## Routing
Page path uniqueness is enforced per project/domain locale model. Reserved system routes cannot be overwritten by CMS content.

## Revision/history
Editors can inspect prior versions and restore a prior valid version. Restore creates a new version rather than deleting history.

## Permissions
Separate read/draft/edit/publish/archive permissions may be introduced; Foundation role defaults are mapped in module policy.

## Media
Media references R2 objects through MediaAsset metadata. Deleting a referenced asset requires dependency checks.

## SEO
CMS integrates with shared SEO primitives: title, description, canonical, robots policy, Open Graph, structured data and sitemap eligibility.

## Audit
Publish/unpublish/archive/restore actions are audited.
