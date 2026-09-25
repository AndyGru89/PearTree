# PearTree.pro — Analytics Event Catalog

**Status:** Initial product event contract

## Naming

Use lower snake_case for product analytics.

Examples:
- `home_search_submit`
- `listing_view`
- `lead_status_change`

Security/audit events remain separate.

## Common properties

Allowed common properties:
- event_id;
- occurred_at;
- project_id;
- anonymous_actor_id or user_id where justified;
- resource_type;
- resource_id;
- source_surface;
- locale;
- device_class;
- experiment_key where applicable.

Do not send:
- message body;
- lead free-text;
- phone/email unless specifically justified and separately governed;
- auth/session tokens;
- secrets.

## Homepage
- home_view
- home_search_submit
- home_category_click
- home_listing_click
- home_signup_click
- home_post_listing_click

Properties:
- category_key;
- location_key;
- query_present;
- placement.

## Search
- search_execute
- filter_apply
- filter_clear
- sort_change
- search_result_click
- search_zero_results
- search_expand_radius
- search_map_open

Properties:
- result_count_bucket;
- category_key;
- location_key;
- filter_keys;
- sort_key;
- result_position.

## Listing
- listing_view
- listing_gallery_open
- listing_contact_click
- listing_quote_start
- listing_save
- listing_unsave
- listing_share
- listing_report
- listing_business_click

Properties:
- listing_id;
- category_key;
- contact_action;
- promoted;
- seller_type.

## Create listing
- create_listing_start
- create_listing_step_view
- create_listing_step_complete
- create_listing_validation_error
- create_listing_photo_upload
- create_listing_publish
- create_listing_abandon

Properties:
- draft_id;
- category_key;
- step_key;
- error_field_key;
- image_count_bucket;
- publish_outcome.

## Business profile
- business_view
- business_contact_click
- business_service_click
- business_listing_click
- business_review_open
- business_map_open

## Map
- map_open
- map_marker_click
- map_search_area
- map_to_list
- map_filter_apply
- map_result_contact

Do not record exact private coordinates in analytics.

## Account
- account_view
- my_listing_edit
- my_listing_promote
- my_listing_archive
- saved_open
- messages_open
- billing_open

## CRM
- lead_list_view
- lead_open
- lead_status_change
- lead_assign
- lead_contact
- lead_won
- lead_lost
- lead_export

Do not attach lead message text.

## Admin
Operational analytics may include:
- admin_dashboard_view
- admin_search
- admin_entity_open

Privileged mutations are not considered complete merely because a product analytics event exists. They require `AuditEvent`.

## Revenue attribution

Where lawful/appropriate, connect:
organic landing -> signup -> activation -> first project/listing -> paid plan

through stable non-sensitive identifiers and server-side conversion events.

## Testing

Critical conversion events require automated test coverage that checks event name and safe required properties.
