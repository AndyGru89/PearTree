# Page 07 — User Account / My Listings

**Routes:** `/account/*`  
**Surface:** Authenticated user  
**Priority:** P0

## Goal

Give a user one place to manage listings, saved items, messages, profile, payments and settings.

## Navigation
- Moje ogłoszenia;
- Dodaj ogłoszenie;
- Wiadomości;
- Ulubione;
- Statystyki;
- Moje płatności;
- Ustawienia.

## My Listings
Tabs:
- Aktywne;
- Wersje robocze;
- Zakończone;
- Oczekujące/moderowane when relevant.

Each row/card:
- thumbnail;
- title;
- price/contact mode;
- views;
- message/lead count;
- status;
- edit;
- promote;
- archive/end.

## User dashboard
Optional compact summary:
- active listings;
- unread messages;
- saved items;
- listing views;
- upcoming payment/action.

## Mobile
Use bottom navigation:
- Home;
- Search/Map;
- Add;
- Saved;
- Account.

My Listings becomes stacked cards.

## Security
- account routes require session;
- object ownership checked server-side;
- listing edit/delete/promote cannot trust URL ID;
- security-sensitive profile changes may require re-auth.

## States
- first-time user with no listings;
- draft only;
- moderation pending;
- suspended listing;
- payment required;
- account restriction.

## Analytics
- account_view;
- my_listing_edit;
- my_listing_promote;
- my_listing_archive;
- saved_open;
- messages_open;
- billing_open.

## Acceptance criteria
- no other user's listing appears;
- role/account changes invalidate unauthorized views;
- counts remain consistent with modules;
- empty state points to useful next action.
