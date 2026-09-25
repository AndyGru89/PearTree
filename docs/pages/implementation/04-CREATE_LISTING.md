# Create Listing — React / Data / API Blueprint

Source UX spec: `../04-CREATE_LISTING.md`

## Component tree

```txt
AccountShell
└─ CreateListingPage
   ├─ ListingWizard
   │  ├─ WizardProgress
   │  ├─ CategoryStep
   │  ├─ DetailsStep
   │  │  └─ DynamicAttributeFields
   │  ├─ PhotosStep
   │  │  └─ MediaUploader
   │  ├─ LocationStep
   │  ├─ PriceContactStep
   │  ├─ ReviewStep
   │  └─ PublishStep
   ├─ DraftSaveIndicator
   └─ StickyWizardActions
```

## Commands
- create draft;
- patch draft;
- add/remove/reorder assets;
- validate step;
- publish.

Endpoints:
- `POST /api/account/listings`
- `PATCH /api/account/listings/{id}`
- `POST /api/account/listings/{id}/assets`
- `POST /api/account/listings/{id}/publish`

## Form contract

```ts
type ListingDraftCommand = {
  draftId?: string
  categoryId: string
  title?: string
  description?: string
  attributes?: Record<string, unknown>
  location?: unknown
  pricing?: unknown
  assetIds?: string[]
}
```

Server resolves owner and validates category schema.

## Autosave
Debounced save on meaningful changes.
Last-write conflict handling required.

## Analytics
- create_listing_start
- create_listing_step_view
- create_listing_step_complete
- create_listing_validation_error
- create_listing_photo_upload
- create_listing_publish
- create_listing_abandon

## Test contract
- draft ownership enforced;
- publish idempotent;
- upload failure recoverable;
- browser refresh restores draft;
- mobile sticky action accessible;
- client cannot inject attributes not allowed by schema.
