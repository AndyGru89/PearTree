# PearTree.pro — Screen Map 1.0

## Public marketplace

### Global
- /
- /search
- /categories
- /category/{slug}
- /location/{slug}
- /category/{category}/{location}
- /listing/{slug}
- /firma/{slug}
- /firma/{slug}/oferty
- /firma/{slug}/uslugi
- /firma/{slug}/opinie
- /firma/{slug}/kontakt
- /about
- /how-it-works
- /safety
- /pricing
- /help
- /blog
- /guides/{slug}

### Auto vertical
- /komisy
- /komisy/{city}
- /samochody
- /samochody/{make}
- /samochody/{make}/{model}
- dealer pages canonicalize to /firma/{slug} unless later ADR selects a vertical canonical path.

## Authentication
- /sign-in
- /sign-up
- /verify
- /forgot-password
- /reset-password
- /invite/{token}

## User account
- /account
- /account/profile
- /account/saved
- /account/listings
- /account/messages
- /account/settings

## Create listing
- /sell
- /sell/details
- /sell/photos
- /sell/location
- /sell/review
- /sell/success
- /listing/{id}/edit

## Customer Console
- /console
- /console/projects
- /console/projects/new
- /console/project/{id}
- /console/project/{id}/branding
- /console/project/{id}/domains
- /console/project/{id}/members
- /console/project/{id}/businesses
- /console/project/{id}/listings
- /console/project/{id}/leads
- /console/project/{id}/messages
- /console/project/{id}/moderation
- /console/project/{id}/analytics
- /console/project/{id}/marketing
- /console/project/{id}/settings

## Business management
- /console/business/{id}
- /console/business/{id}/profile
- /console/business/{id}/locations
- /console/business/{id}/services
- /console/business/{id}/listings
- /console/business/{id}/leads
- /console/business/{id}/reviews
- /console/business/{id}/media
- /console/business/{id}/analytics
- /console/business/{id}/settings

## Billing
- /console/billing
- /console/billing/plan
- /console/billing/usage
- /console/billing/invoices

## Platform Admin
- /admin
- /admin/organizations
- /admin/projects
- /admin/users
- /admin/businesses
- /admin/listings
- /admin/domains
- /admin/jobs
- /admin/audit
- /admin/entitlements
- /admin/system

## Mobile priority screens
P0 mobile:
- Home
- Search
- Listing detail
- Saved
- Messages
- Post listing
- Profile

P1 mobile:
- Business profile
- Business lead inbox
- own listing management
- notifications
