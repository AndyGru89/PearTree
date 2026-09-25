# PearTree.pro — Backup, Recovery and Rollback Baseline

## Scope
Worker versions, D1 schema/data, R2 objects, configuration and critical external integrations.

## Worker rollback
Every production deployment records version/commit identity. Rollback to a known prior Worker version must be tested before 1.0.

Application rollback does not automatically roll back database migrations.

## D1
Before production:
- document D1 backup/PITR capabilities and operational procedure;
- test recovery in a non-production environment;
- distinguish schema rollback from data recovery;
- destructive migrations require explicit recovery plan;
- prefer forward-fix migrations when rollback would lose new data.

## R2
Deletion/overwrite policy must account for recovery needs. Critical generated/customer assets may require lifecycle/versioning strategy according to product requirements.

## Queues
Consumers are idempotent so retry/replay after outage does not duplicate critical side effects.

## Configuration
Wrangler/IaC configuration is version controlled. Secret values are stored outside Git; secret inventory/rotation ownership is documented.

## Incident priorities
1. contain active security/tenant leak;
2. preserve evidence/logs;
3. restore safe service;
4. reconcile queued/external side effects;
5. complete post-incident review and remediation.

## Recovery exercise
Before 1.0 run at least:
- prior Worker version rollback;
- D1 recovery rehearsal;
- accidental R2 object-loss scenario;
- queue consumer outage/recovery;
- compromised deployment credential rotation.
