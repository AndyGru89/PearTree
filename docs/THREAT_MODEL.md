# PearTree.pro — Threat Model

## Method
Lightweight STRIDE-oriented model. Revisit whenever a trust boundary or major module is added.

## Assets
- user identities/sessions;
- organization/project data;
- tenant configuration/domains;
- private R2 objects;
- D1 data;
- billing/entitlements;
- API/webhook credentials;
- Cloudflare/GitHub deployment credentials;
- audit logs.

## Trust boundaries
1. Public Internet -> Cloudflare edge.
2. Browser/client -> Worker application.
3. Worker -> D1/R2/KV/Queues/Durable Objects.
4. Worker -> third-party APIs.
5. GitHub/CI -> Cloudflare deployment plane.
6. Platform admin -> privileged PearTree operations.
7. Queue producer -> queue consumer.

## Primary threats and mitigations

### Tenant IDOR / authorization bypass
Threat: attacker guesses another organization's resource IDs.
Mitigation: server-side ownership resolution, scoped repositories, deny-by-default permissions, opaque IDs, adversarial tests.

### Session theft/fixation
Threat: attacker reuses or forces session credentials.
Mitigation: secure session implementation, rotation/revocation, secure cookie/token storage, re-auth for sensitive actions.

### Invitation abuse
Threat: leaked/replayed invitation grants access.
Mitigation: hashed single-use token, expiration, intended email validation, audit, rate limiting.

### Domain hijack/misbinding
Threat: customer binds hostname they do not control.
Mitigation: explicit ownership verification, unique hostname constraint, asynchronous verified state, audit trail.

### XSS/content injection
Threat: tenant content executes malicious script.
Mitigation: safe rendering defaults, sanitization for permitted rich text, CSP where practical, output encoding.

### SSRF
Threat: URL import/webhook tools reach internal/metadata services.
Mitigation: outbound URL validation, protocol allowlists, redirect revalidation, network restrictions where possible.

### File upload abuse
Threat: malicious, oversized or cross-tenant files.
Mitigation: size/type checks, tenant-scoped keys, private-by-default R2, scan/quarantine strategy for higher-risk uploads.

### Queue replay/duplicate side effect
Threat: retries cause repeated email, deletion or billing action.
Mitigation: idempotency keys, durable processed-event state for critical operations, bounded retry/dead-letter handling.

### Webhook spoofing
Threat: forged external event changes billing/state.
Mitigation: signature verification, timestamp/replay controls, idempotent event processing.

### Privileged admin abuse
Threat: support/admin reads or changes tenant data improperly.
Mitigation: separate platform roles, least privilege, no silent impersonation, comprehensive audit events.

### CI/CD compromise
Threat: malicious commit/action exfiltrates deployment secrets.
Mitigation: protected branches, review policy, trusted actions, environment-scoped secrets, minimal token scopes, deployment approvals where appropriate.

### D1 destructive migration
Threat: schema change causes data loss.
Mitigation: migration review, tested backups/PITR/recovery process, staging verification, rollback/forward-fix plan.

### R2 public exposure
Threat: private tenant files become publicly listable/readable.
Mitigation: private bucket default, application-controlled access, explicit review before public buckets/custom domains.

## Abuse cases
- spam through contact/lead forms;
- credential stuffing;
- automated scraping;
- resource exhaustion;
- mass invite abuse;
- malicious SEO/content spam by tenant users.

Controls may combine WAF/rate limiting/Turnstile with application quotas and moderation.

## Review cadence
Threat model must be updated before:
- Commerce launch;
- public file uploads;
- external API/webhook platform;
- AI/agent actions;
- real-time collaboration;
- new authentication model;
- major tenant-isolation change.
