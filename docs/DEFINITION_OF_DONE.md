# PearTree.pro — Definition of Done

A task is not done because code compiles or UI appears correct.

## Feature DoD
A feature is done when all applicable items are satisfied:

### Product
- requirement and acceptance criteria are documented;
- scope matches PRD/module documentation;
- no undocumented product behavior is introduced.

### Architecture
- respects module boundaries;
- tenant ownership is explicit;
- new material architectural decisions have an ADR;
- Cloudflare binding/runtime assumptions are documented.

### Security
- server-side authorization exists;
- negative/cross-tenant tests exist;
- inputs are validated;
- secrets and personal data are not logged;
- abuse/rate-limit implications considered.

### Data
- schema/migration is version controlled;
- indexes and uniqueness constraints considered;
- migration/backfill strategy exists where needed;
- rollback/forward-recovery path is documented for risky changes.

### UX
- loading, empty, error and success states exist;
- mobile/responsive behavior checked;
- keyboard/focus/accessibility considered;
- destructive actions have appropriate confirmation.

### Quality
- typecheck passes;
- lint passes;
- unit/integration tests pass;
- relevant E2E passes;
- production/Workers build passes;
- no known P0/P1 regression.

### Operations
- observability exists for critical path;
- errors are actionable;
- external calls have timeout/retry policy;
- queue consumers are idempotent;
- documentation/runbook updated where operational behavior changed.

### Review
- PR explains what/why/risk/test plan;
- reviewer can reproduce the change;
- all required checks pass.

## Documentation DoD
A documentation phase is complete when:
- terminology is consistent;
- conflicting decisions are removed;
- ADRs exist for material decisions;
- roadmap references the agreed architecture;
- implementation agents can proceed without guessing core product/security decisions.
