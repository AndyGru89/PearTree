# PearTree.pro — Security Baseline

## Status
Mandatory baseline for all implementation.

## 1. Security goals
Protect:
- tenant isolation;
- identities and sessions;
- customer/business data;
- private media/files;
- billing state;
- platform administration;
- deployment credentials and Cloudflare bindings.

## 2. Core principles
- deny by default;
- least privilege;
- explicit tenant context;
- server-side authorization;
- secure-by-default APIs;
- minimal data collection;
- auditable privileged actions;
- defense in depth;
- reproducible infrastructure;
- no secrets in source control.

## 3. Authentication
Final provider/design is covered by an ADR.

Required properties:
- secure session lifecycle;
- email verification where identity relies on email;
- secure account recovery;
- session revocation;
- re-authentication for ownership/security-sensitive actions;
- anti-CSRF protections appropriate to the chosen session model;
- secure cookie flags where cookies are used;
- rate limiting and abuse controls.

## 4. Authorization
Follow `MULTI_TENANCY.md` and `RBAC.md`.
No handler may authorize by trusting IDs from client input alone.

## 5. Input and output security
- validate all external input at trust boundaries;
- encode output appropriate to context;
- prevent stored/reflected XSS;
- avoid unsafe HTML by default;
- validate file type/size and metadata;
- never trust filename or MIME type supplied by the client;
- protect server-side fetches from SSRF where URL ingestion exists.

## 6. Cloudflare perimeter
Use Cloudflare DNS/CDN/WAF/DDoS capabilities as the perimeter layer. Add Turnstile or equivalent challenge controls to abuse-prone public forms where justified.

Perimeter controls do not replace application auth/authz.

## 7. D1
- no production D1 access from untrusted clients;
- all queries originate from trusted Worker code;
- parameterized queries/ORM-safe APIs only;
- schema migrations version controlled;
- destructive migrations require backup/recovery plan;
- production access is least-privileged through Cloudflare account controls.

## 8. R2
- private by default;
- object keys do not encode secrets;
- tenant namespace required;
- content-type and disposition set intentionally;
- upload paths cannot overwrite unrelated objects;
- signed/public access patterns are time-limited where applicable;
- malware/content scanning strategy required before accepting risky user uploads at scale.

## 9. Queues and jobs
- messages contain no unnecessary secrets;
- consumers are idempotent;
- retries cannot duplicate financial or destructive side effects;
- poison-message handling/dead-letter strategy documented before critical workloads;
- every job preserves tenant scope.

## 10. Secrets
- use Cloudflare secrets/environment bindings;
- never commit API keys/tokens;
- separate secrets by environment;
- rotate after suspected exposure;
- production secrets are not copied to local/preview environments.

## 11. Logging
Do not log:
- passwords;
- raw authentication tokens;
- reset tokens;
- payment card data;
- secrets;
- unnecessary personal data.

Security logs should include actor ID, tenant ID, target, action, request/correlation ID and outcome where relevant.

## 12. Dependency and supply-chain security
- lock dependencies;
- automated dependency scanning;
- CI runs typecheck/lint/tests/build;
- review major framework/runtime upgrades;
- avoid unmaintained security-critical dependencies;
- pin GitHub Actions to trusted versions/SHAs according to final CI policy.

## 13. Vulnerability handling
Severity guidance:
- P0: active compromise, tenant isolation bypass, credential exposure, destructive authorization bypass.
- P1: exploitable security defect with significant impact but no known active compromise.
- P2: lower-impact hardening issue.

P0 blocks release and triggers immediate containment/remediation procedures.

## 14. Security review gates
Required before 1.0:
- threat model review;
- tenant isolation adversarial tests;
- auth/session review;
- upload/media review;
- billing/webhook review;
- infrastructure/secret review;
- backup/recovery exercise.
