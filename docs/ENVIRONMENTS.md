# PearTree.pro — Environment and Binding Matrix

## Environments
### Local
Local developer runtime and local/emulated resources by default.

### Preview / CI
Ephemeral or shared non-production environment for pull requests/tests. Must not have production credentials.

### Staging
Production-like persistent environment for integration, migrations and release validation.

### Production
Customer environment with protected deploy path.

## Binding policy
Each environment explicitly defines:
- D1 database;
- R2 bucket(s);
- Queue producer/consumer bindings;
- auth secrets/config;
- external provider test/live credentials;
- base URLs/domain routing;
- observability configuration.

No code path should silently fall back from missing staging/preview binding to production.

## Data policy
- local/CI uses synthetic data;
- staging uses synthetic or specifically approved sanitized data;
- production data remains in production unless controlled export is explicitly required.

## Deployment identity
CI/deployment tokens are separate from human developer credentials where possible.

## Configuration validation
Application startup/build checks required bindings for the target environment and fails clearly when critical configuration is absent.
