# CRM / Leads — React / Data / API Blueprint

Source UX spec: `../08-CRM_LEADS.md`

## Component tree

```txt
ConsoleShell
└─ LeadInboxPage
   ├─ ConsoleSidebar
   ├─ LeadToolbar
   │  ├─ LeadSearch
   │  ├─ LeadFilters
   │  └─ LeadCreateButton
   ├─ LeadStatusTabs
   ├─ LeadTable
   │  └─ LeadRow[]
   └─ LeadDetailDrawer
      ├─ LeadContactSummary
      ├─ LeadRequestContext
      ├─ LeadStatusControl
      ├─ LeadAssignmentControl
      ├─ LeadTimeline
      ├─ LeadNotes
      └─ LeadContactActions
```

## Queries
- list: `GET /api/console/projects/{projectId}/leads`
- detail: `GET /api/console/projects/{projectId}/leads/{leadId}`

## Commands
- status update;
- assignment;
- note creation later;
- export if permission allows.

## View models
Use `LeadRowVM` and `LeadDetailVM` from `UI_DATA_CONTRACTS.md`.

## Analytics
- lead_list_view
- lead_open
- lead_status_change
- lead_assign
- lead_contact
- lead_won
- lead_lost
- lead_export

## Audit
Status/assignment changes may require AuditEvent depending on policy; exports are auditable.

## Test contract
- tenant scope mandatory;
- permission denial server-side;
- lead content absent from analytics/logs;
- duplicate external event cannot create duplicate lead;
- status conflict handled safely.
