# Platform Admin — React / Data / API Blueprint

Source UX spec: `../09-PLATFORM_ADMIN.md`

## Component tree

```txt
AdminShell
└─ AdminDashboardPage
   ├─ AdminSidebar
   ├─ AdminTopbar
   ├─ AdminKPIGrid
   │  └─ KPICard[]
   ├─ PlatformActivityChart
   ├─ CategoryDistributionChart
   ├─ ModerationSummary
   ├─ QueueHealthWidget
   ├─ DomainHealthWidget
   ├─ RecentAuditEvents
   └─ SystemVersionCard
```

## Query
`GET /api/admin/dashboard`

Output:
```ts
type AdminDashboardVM = {
  kpis: KPIViewModel[]
  activitySeries: unknown
  categoryDistribution: unknown
  moderation: unknown
  queueHealth: unknown
  domainHealth: unknown
  recentAudit: unknown[]
  deploymentVersion: string
}
```

## Additional operations
- admin search;
- moderation command;
- entitlement override;
- project suspension/restore later;
- safe job retry.

## Permission model
Platform roles only.
Never infer admin access from tenant Membership or email domain.

## Analytics
Low-risk navigation analytics allowed:
- admin_dashboard_view
- admin_search
- admin_entity_open

Privileged mutation -> AuditEvent mandatory.

## Rendering
Page authorization happens before sensitive data fetch.
Widgets fail independently.

## Test contract
- unauthorized users cannot load data;
- secrets never rendered;
- mutation confirmations explicit;
- audit event written for privileged mutation;
- widget failure does not crash whole page.
