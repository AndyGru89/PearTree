# PearTree.pro — Analytics and Product Events

## Goal
Provide tenant-facing product analytics and platform operational insights while minimizing personal data.

## Event model
Event:
- eventId;
- name;
- occurredAt;
- organizationId/projectId;
- anonymous/user actor identifier where justified;
- resource reference;
- safe typed properties;
- session/request correlation where applicable.

## Event categories
### Product
project.created, project.published, domain.activated, listing.viewed, lead.created, etc.

### Operational
queue.failed, webhook.failed, migration.completed.

### Security
auth.failure, permission.denied, admin.action.

Do not mix security/audit logs with marketing analytics retention assumptions.

## Tenant analytics
Potential metrics:
- page/listing views;
- leads;
- lead conversion;
- top categories/locations;
- source/referrer;
- module usage.

## Privacy
Avoid collecting full URLs/query strings when they may contain personal data. IP/user-agent retention must be justified and minimized.

## Platform analytics
Track adoption, module usage, errors and capacity across tenants using aggregate views without exposing tenant content unnecessarily.

## Storage choice
Analytics Engine/R2/Pipelines or external analytics may be adopted through ADR when workload is known. Foundation should emit a stable internal event contract first.
