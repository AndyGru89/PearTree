# User Account — React / Data / API Blueprint

Source UX spec: `../07-USER_ACCOUNT.md`

## Component tree

```txt
AccountShell
└─ MyListingsPage
   ├─ AccountSidebar
   ├─ AccountHeader
   ├─ MyListingsTabs
   ├─ MyListingList
   │  └─ MyListingRow[]
   ├─ AccountEmptyState
   └─ MobileAccountNav
```

Other account routes reuse `AccountShell`.

## Queries
- `GET /api/account/listings`
- saved/messages/billing endpoints defined by corresponding modules.

## MyListingRow VM

```ts
type MyListingRowVM = {
  id: string
  title: string
  image?: ImageVM
  status: string
  views: number
  enquiryCount: number
  price?: MoneyVM
  actions: Array<"edit" | "promote" | "archive" | "republish">
}
```

## Mutations
- archive/end listing;
- promote;
- edit navigation;
- republish where allowed.

## Analytics
- account_view
- my_listing_edit
- my_listing_promote
- my_listing_archive
- saved_open
- messages_open
- billing_open

## Test contract
- server ownership enforced;
- empty state helpful;
- status accurately reflects domain state;
- unauthorized action omitted server-side and rejected if forged.
