# PearTree.pro — Product Requirements Document

**Status:** Draft 0.1  
**Scope:** Foundation and product direction

## 1. Problem
Launching a niche/local digital business typically requires separate tools for site publishing, directories, leads, CRM, billing, SEO and automation. Integration cost grows with every portal and duplicated code makes operations expensive.

## 2. Product
PearTree provides a shared multi-tenant core. An Organization owns Projects. A Project has branding, configuration, modules and one or more domains. Business data is scoped to its tenant/project.

PearTree is designed as a **Cloudflare-native SaaS platform**. Production compute and delivery run on Cloudflare Workers; the default Foundation data/storage stack is D1 + R2 + Queues, subject to explicit ADR validation.

## 3. Foundation user journey
1. User registers/authenticates.
2. Creates or joins an Organization.
3. Creates a Project.
4. Configures project identity and branding.
5. Invites team members and assigns roles.
6. Connects/verifies a domain.
7. Publishes the initial project shell through Cloudflare.
8. Operator can inspect tenant/platform state from Super Admin.

## 4. Foundation functional requirements
### Identity
- Secure sign-in/session lifecycle.
- Account recovery.
- Email verification.
- Session revocation.

### Organizations
- Create/update organization.
- Membership and invitations.
- OWNER, ADMIN, EDITOR, VIEWER baseline roles.
- Ownership transfer must be explicit and audited.

### Projects
- Multiple projects per organization.
- Stable slug and unique ID.
- Lifecycle: DRAFT, ACTIVE, SUSPENDED, ARCHIVED.
- Project settings and branding.

### Domains
- Platform subdomain support.
- Custom domain registration and verification state.
- Canonical-domain selection.
- DNS/TLS/provisioning represented asynchronously.

### Cloudflare platform
- Worker-based runtime for application/API.
- D1 binding for relational Foundation data unless ADR rejects it.
- R2 for media and generated files.
- Queues for retryable background processing.
- Environment-specific bindings/resources.
- Reproducible deployment configuration through Wrangler/IaC.
- Edge security integrated without replacing application authorization.

### Administration
- Tenant/project lookup.
- Platform status.
- Safe support tooling with audit trail.
- No silent impersonation.

### Audit
Security-relevant and administrative mutations generate append-only audit events.

## 5. Non-functional requirements
- Strict tenant authorization on every protected resource.
- WCAG 2.2 AA target for customer-facing core UI.
- Responsive UI.
- Idempotent external webhooks and queue consumers.
- Structured logging, runtime observability and health checks.
- Automated schema migrations and tested recovery procedure.
- Secrets never committed to repository.
- Production changes pass CI quality gates.
- No production dependency on a traditional VPS for the core PearTree runtime.
- Local/preview environments cannot accidentally mutate production Cloudflare resources.

## 6. Success criteria for 0.1
A clean environment can deploy PearTree to Cloudflare; a user can create an organization and project, invite a member, configure branding/domain state and publish the project shell; D1/R2/Queue bindings are environment-safe; cross-tenant access tests fail closed; admin and security actions are auditable.

## 7. Later increments
0.2 CMS + Listings; 0.3 Leads/CRM; 0.4 Commerce; 0.5 AI/Automation; later white-label/module ecosystem.

## 8. Open decisions
Authentication provider, vinext compatibility constraints, D1 tenancy/scale strategy, CI/CD choice (GitHub Actions vs Workers Builds or hybrid), billing geography/tax requirements and first commercial vertical require ADRs before implementation where they affect architecture.
