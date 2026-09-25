# PearTree.pro — Commerce and Entitlements Specification

## Goal
Monetize PearTree subscriptions and later tenant marketplace features without coupling product authorization directly to payment-provider objects.

## Core separation
### Billing
Provider-facing customers, subscriptions, invoices/payments and webhook synchronization.

### Entitlements
PearTree-facing capabilities and limits used by authorization/product logic.

Billing updates Entitlements through controlled domain services/events.

## Core entities
- Plan
- PriceReference
- BillingCustomer
- Subscription
- BillingEvent
- Entitlement
- UsageCounter (where needed)

## Rules
- provider webhook is not trusted until signature verification;
- provider event ID is idempotency key;
- financial state changes are auditable;
- customer-facing feature access reads PearTree entitlement state, not live provider APIs on every request;
- retries cannot double-apply subscription changes;
- cancellation/suspension/grace behavior is explicit.

## Initial commercial model
Do not hard-code prices into domain logic. Plans and feature limits are configurable/versioned.

Potential dimensions:
- projects;
- team members;
- domains;
- listings;
- leads;
- storage;
- AI usage;
- premium modules.

## Payment data
PearTree avoids storing raw card data. Payment provider handles sensitive card processing.

## Failure states
Billing synchronization can be PENDING/FAILED and retried. UI must distinguish payment failure from technical synchronization failure.

## Security
Billing admin actions require elevated permissions and re-authentication where justified.
