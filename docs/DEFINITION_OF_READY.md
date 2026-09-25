# PearTree.pro — Definition of Ready

A coding task is Ready only when all applicable conditions are satisfied.

## Product
- exact user/problem is identified;
- acceptance criteria exist;
- related PRD/module spec exists;
- non-goals are clear.

## UX
- target screen/flow is known;
- loading, empty, error and permission states are defined;
- responsive behavior is known;
- required copy/data fields are known.

## Architecture
- owning module is clear;
- tenant ownership is explicit;
- API/data contract is known;
- Cloudflare resource usage is known;
- material architecture decisions have an ADR.

## Security
- required permission is identified;
- tenant boundary is defined;
- abuse surface is understood;
- sensitive data handling is documented.

## Data
- entity/schema changes are known;
- migration impact is known;
- indexes/constraints are considered;
- deletion/retention implications are clear.

## Testing
- positive path;
- negative authorization path;
- failure path;
- relevant integration/E2E scope.

## Dependencies
Task is not Ready if it depends on an unresolved blocking ADR or another unmerged implementation.

## Agent rule
If an AI coding agent cannot determine any of the above from the issue and linked docs, it must stop and update/clarify the issue rather than invent behavior.
