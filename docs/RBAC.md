# PearTree.pro — RBAC and Authorization Model

## 1. Roles
### Customer roles
- **OWNER** — organization ownership and highest customer authority.
- **ADMIN** — operational administration excluding ownership-sensitive actions.
- **EDITOR** — create/manage product content and operational records allowed by module policy.
- **VIEWER** — read-only access to permitted organization/project data.

### Platform roles
Platform roles are separate from customer Membership roles and must never be represented by inserting fake tenant memberships.

## 2. Permission model
Authorization is permission-based. Roles map to permission sets; application code checks permissions, not display labels.

Initial permission namespaces:
- `org.read`
- `org.update`
- `org.delete`
- `org.members.read`
- `org.members.invite`
- `org.members.update_role`
- `org.members.remove`
- `org.transfer_ownership`
- `project.create`
- `project.read`
- `project.update`
- `project.archive`
- `domain.read`
- `domain.manage`
- `branding.manage`
- `audit.read`
- `billing.read`
- `billing.manage`

## 3. Baseline matrix
| Capability | OWNER | ADMIN | EDITOR | VIEWER |
|---|---:|---:|---:|---:|
| Read organization/project | yes | yes | yes | yes |
| Update organization profile | yes | yes | no | no |
| Create project | yes | yes | no | no |
| Update project | yes | yes | yes* | no |
| Manage branding | yes | yes | yes* | no |
| Manage domains | yes | yes | no | no |
| Invite members | yes | yes | no | no |
| Change roles | yes | yes** | no | no |
| Remove members | yes | yes** | no | no |
| Transfer ownership | yes | no | no | no |
| Delete organization | yes | no | no | no |
| View audit log | yes | yes | no | no |
| Manage billing | yes | yes | no | no |

* limited by project/module permissions.
** ADMIN cannot promote to OWNER, demote/remove OWNER, or grant permissions beyond its own authority.

## 4. Ownership rules
- Every active Organization has exactly one OWNER unless a future ADR introduces co-ownership.
- OWNER removal requires ownership transfer first.
- Ownership transfer requires re-authentication and a high-assurance confirmation flow.
- Ownership-sensitive changes are audited.

## 5. Project-level overrides
Foundation uses organization roles. Fine-grained project roles may be added later without changing the organization membership model.

## 6. Security properties
- Deny by default.
- Permission checks occur server-side.
- UI hiding does not count as authorization.
- Permission changes invalidate relevant cached authorization state.
- Suspended/deactivated Membership denies access immediately at the authorization layer.
- System/admin capabilities are never inferred from email/domain naming.

## 7. Testing
Each protected action requires positive and negative permission tests. Every new permission must document which roles receive it and why.
