# PearTree.pro — Notifications

## Channels
Foundation architecture supports:
- in-app;
- email.

SMS/WhatsApp/push are future adapters.

## Event-driven delivery
Business event -> notification policy -> Queue -> provider adapter -> delivery status.

Core transaction must not fail solely because notification delivery fails.

## Notification categories
- authentication/security;
- invitations;
- domain lifecycle;
- lead/customer activity;
- billing;
- platform/system;
- marketing (separate consent/preferences).

## Preferences
Transactional/security messages may be mandatory where needed. Marketing preferences are separate.

## Templates
Templates are versioned and localized. Dynamic values are schema-validated and escaped appropriately.

## Delivery
Track provider message reference and safe status metadata. Do not store unnecessary message body copies indefinitely.

## Security
Security notifications cannot contain secrets, raw tokens or sensitive data beyond what is required for the user to identify the event.
